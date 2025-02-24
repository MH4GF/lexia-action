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

export type Context = {}

export type Suggestion = {}

export class Lexia {
  private readonly config: LexiaConfig

  constructor(config: LexiaConfig) {
    this.config = config
  }

  async extractContext(_diff: string): Promise<Context> {
    // Implementation to extract context from PR diff
    throw new Error('Not implemented')
  }

  async generateSuggestions(_context: Context): Promise<Suggestion[]> {
    // Implementation to generate documentation update suggestions from context
    throw new Error('Not implemented')
  }
}
