import { describe, expect, it, vi } from 'vitest'
import { type Context, Lexia, type LexiaConfig } from './lexia.js'
import { OpenAIClient } from './openai/client.js'

vi.mock('./openai/client.js')

describe('Lexia', () => {
  const config: LexiaConfig = {
    apiKey: 'test-api-key',
    docs: ['README.md'],
  }

  describe('constructor', () => {
    it('should create instance with config', () => {
      const lexia = new Lexia(config)
      expect(lexia).toBeInstanceOf(Lexia)
    })
  })

  describe('extractContext', () => {
    it('should use OpenAIClient to extract context', async () => {
      const mockContext: Context = {
        changes: ['Test change'],
        knowledge: ['Test knowledge'],
        confidence: 0.8,
      }

      const mockExtractContext = vi.fn().mockResolvedValue(mockContext)
      vi.mocked(OpenAIClient).mockImplementation(() => {
        return {
          extractContext: mockExtractContext,
        } as unknown as OpenAIClient
      })

      const lexia = new Lexia(config)
      const result = await lexia.extractContext('test diff')

      expect(result).toEqual(mockContext)
      expect(mockExtractContext).toHaveBeenCalledWith('test diff', {})
    })
  })

  describe('generateSuggestions', () => {
    it('should throw not implemented error', () => {
      const mockContext: Context = {
        changes: ['Test change'],
        knowledge: ['Test knowledge'],
        confidence: 0.8,
      }
      const lexia = new Lexia(config)
      expect(() => lexia.generateSuggestions(mockContext)).toThrow('Not implemented')
    })
  })
})
