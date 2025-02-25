import { OpenAIClient } from './openai/client.ts'

export interface LexiaConfig {
  apiKey: string
  docs: string[]
  debug?: boolean
  extractionConfig?: {
    confidence?: number
    maxResults?: number
  }
  suggestionConfig?: {
    format?: 'markdown' | 'json'
    maxSuggestions?: number
  }
}

export interface Context {
  changes: string[]
  knowledge: string[]
  confidence: number
}

export interface Suggestion {
  id?: string
  file: string
  suggestions: string[]
}

export class Lexia {
  private readonly config: LexiaConfig
  private readonly openaiClient: OpenAIClient

  constructor(config: LexiaConfig) {
    this.config = config
    this.openaiClient = new OpenAIClient(config.apiKey)
  }

  extractContext(diff: string): Promise<Context> {
    const extractionConfig = {
      ...this.config.extractionConfig,
      debug: this.config.debug,
    }
    return this.openaiClient.extractContext(diff, extractionConfig)
  }

  generateSuggestions(_context: Context): Promise<Suggestion[]> {
    throw new Error('Not implemented')
  }
}
