import { OpenAIClient } from './openai/client.ts'

export interface LexiaConfig {
  apiKey: string
  docs: string[]
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

export type Suggestion = {}

export class Lexia {
  private readonly config: LexiaConfig
  private readonly openaiClient: OpenAIClient

  constructor(config: LexiaConfig) {
    this.config = config
    this.openaiClient = new OpenAIClient(config.apiKey)
  }

  async extractContext(diff: string): Promise<Context> {
    return this.openaiClient.extractContext(diff)
  }

  async generateSuggestions(_context: Context): Promise<Suggestion[]> {
    // Implementation to generate documentation update suggestions from context
    throw new Error('Not implemented')
  }
}
