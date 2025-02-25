import OpenAI from 'openai'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { OpenAIClient } from './client.ts'

vi.mock('openai')

describe('OpenAIClient', () => {
  const mockApiKey = 'test-api-key'
  let _client: OpenAIClient

  beforeEach(() => {
    vi.resetAllMocks()
    _client = new OpenAIClient(mockApiKey)
  })

  describe('constructor', () => {
    it('should create OpenAI instance with API key', () => {
      expect(OpenAI).toHaveBeenCalledWith({ apiKey: mockApiKey })
    })
  })

  describe('extractContext', () => {
    it('should call OpenAI API with correct parameters', async () => {
      const mockCompletion = {
        choices: [
          {
            message: {
              content: JSON.stringify({
                changes: ['Test change'],
                knowledge: ['Test knowledge'],
                confidence: 0.8,
              }),
            },
          },
        ],
      }

      const mockCreate = vi.fn().mockResolvedValue(mockCompletion)
      vi.mocked(OpenAI).mockImplementation(() => {
        return {
          chat: {
            completions: {
              create: mockCreate,
            },
          },
        } as unknown as OpenAI
      })

      const diff = 'test diff content'
      const result = await new OpenAIClient(mockApiKey).extractContext(diff)

      expect(mockCreate).toHaveBeenCalledWith({
        model: 'gpt-4o-mini',
        messages: expect.arrayContaining([
          expect.objectContaining({
            content: expect.stringContaining(diff),
          }),
        ]),
      })

      expect(result).toEqual({
        changes: ['Test change'],
        knowledge: ['Test knowledge'],
        confidence: 0.8,
      })
    })

    it('should handle API errors', async () => {
      const mockError = new Error('API Error')
      const mockCreate = vi.fn().mockRejectedValue(mockError)

      vi.mocked(OpenAI).mockImplementation(() => {
        return {
          chat: {
            completions: {
              create: mockCreate,
            },
          },
        } as unknown as OpenAI
      })

      await expect(new OpenAIClient(mockApiKey).extractContext('test')).rejects.toThrow(
        'OpenAI API error: API Error',
      )
    })
  })
})
