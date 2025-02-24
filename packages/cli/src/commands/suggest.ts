import { execSync } from 'node:child_process'
import { Lexia, type LexiaConfig, type Suggestion } from '@lexia/core'

interface SuggestOptions {
  config?: string
  format?: 'markdown' | 'json'
}

export const suggest = async (options: SuggestOptions): Promise<string> => {
  try {
    const diff = getDiff()
    const config: LexiaConfig = {
      apiKey: process.env['OPENAI_API_KEY'] || '',
      docs: ['README.md'],
    }

    if (!config.apiKey) {
      throw new Error('OPENAI_API_KEY is not set')
    }

    const lexia = new Lexia(config)

    const context = await lexia.extractContext(diff)
    const suggestions = await lexia.generateSuggestions(context)

    return formatOutput(suggestions, options.format)
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to generate suggestions: ${error.message}`)
    }
    throw error
  }
}

function getDiff(): string {
  try {
    const diff = execSync('git diff').toString()
    if (!diff) {
      throw new Error('No changes detected in git diff')
    }
    return diff
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to get git diff: ${error.message}`)
    }
    throw error
  }
}

function formatOutput(
  suggestions: Suggestion[],
  format: SuggestOptions['format'] = 'markdown',
): string {
  if (format === 'json') {
    return JSON.stringify(suggestions, null, 2)
  }

  // Markdown format
  const formatSuggestion = (suggestion: Suggestion) => {
    return `## ${suggestion.file}\n\n${suggestion.suggestions.join('\n\n')}\n`
  }

  return suggestions.map(formatSuggestion).join('\n')
}
