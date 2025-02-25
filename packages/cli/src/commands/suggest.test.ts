import { execSync } from 'node:child_process'
import { Lexia } from '@lexia/core'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { suggest } from './suggest.ts'

vi.mock('@lexia/core')
vi.mock('node:child_process')

describe('suggest command', () => {
  beforeEach(() => {
    process.env.OPENAI_API_KEY = 'test-api-key'
  })

  afterEach(() => {
    vi.clearAllMocks()
    process.env.OPENAI_API_KEY = undefined
  })

  it('should generate suggestions from git diff', async () => {
    const mockSuggestions = [
      {
        id: '1',
        file: 'README.md',
        suggestions: ['Update API documentation'],
        confidence: 0.9,
      },
    ]

    // git diffのモック
    vi.mocked(execSync).mockReturnValue(Buffer.from('test diff'))

    // Lexiaのメソッドをモック
    const mockExtractContext = vi
      .fn()
      .mockResolvedValue({ changes: [], knowledge: [], confidence: 0.8 })
    const mockGenerateSuggestions = vi.fn().mockResolvedValue(mockSuggestions)

    vi.mocked(Lexia).mockImplementation(() => {
      return {
        extractContext: mockExtractContext,
        generateSuggestions: mockGenerateSuggestions,
      } as unknown as Lexia
    })

    const options = {
      config: undefined,
      format: 'markdown' as const,
    }

    const result = await suggest(options)

    expect(result).toBeDefined()
    expect(mockGenerateSuggestions).toHaveBeenCalled()
    expect(result).toContain('README.md')
    expect(result).toContain('Update API documentation')
  })

  it('should handle errors gracefully', async () => {
    vi.mocked(execSync).mockImplementation(() => {
      throw new Error('Git error')
    })

    const options = {
      config: undefined,
      format: 'markdown' as const,
    }

    await expect(suggest(options)).rejects.toThrow('Failed to get git diff: Git error')
  })

  it('should enable debug mode when --debug flag is used', async () => {
    const mockSuggestions = [
      {
        id: '1',
        file: 'README.md',
        suggestions: ['Update API documentation'],
        confidence: 0.9,
      },
    ]

    vi.mocked(execSync).mockReturnValue(Buffer.from('test diff'))
    const consoleSpy = vi.spyOn(console, 'log')

    const mockExtractContext = vi
      .fn()
      .mockResolvedValue({ changes: [], knowledge: [], confidence: 0.8 })
    const mockGenerateSuggestions = vi.fn().mockResolvedValue(mockSuggestions)

    vi.mocked(Lexia).mockImplementation(() => {
      return {
        extractContext: mockExtractContext,
        generateSuggestions: mockGenerateSuggestions,
      } as unknown as Lexia
    })

    const options = {
      config: undefined,
      format: 'markdown' as const,
      debug: true,
    }

    await suggest(options)

    expect(consoleSpy).toHaveBeenCalledWith(
      'Debug: Configuration',
      expect.objectContaining({ debug: true }),
    )
  })
})
