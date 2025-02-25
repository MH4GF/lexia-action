import OpenAI from 'openai'
import type { Context } from '../lexia.ts'

interface ExtractionConfig {
  confidence?: number
  maxResults?: number
  debug?: boolean | undefined
}

export class OpenAIClient {
  private client: OpenAI

  constructor(apiKey: string) {
    this.client = new OpenAI({ apiKey })
  }

  async extractContext(diff: string, config: ExtractionConfig = {}): Promise<Context> {
    console.info('OpenAI Client Config', { config })
    try {
      const messages = [
        {
          role: 'system' as const,
          content: `You are an AI that analyzes pull request diffs and extracts meaningful context and knowledge.
             Confidence threshold: ${config.confidence || 0.8}
             Max results: ${config.maxResults || 5}
             Respond in JSON format.`,
        },
        {
          role: 'user' as const,
          content: `Please analyze this PR diff and extract the key changes and knowledge:\n\n${diff}`,
        },
      ]

      if (config.debug) {
        console.info('OpenAI Request:', {
          model: 'gpt-4o-mini',
          confidence: config.confidence || 0.8,
          maxResults: config.maxResults || 5,
          diffLength: diff.length,
          messages,
        })
      }

      const completion = await this.client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages,
      })

      const content = completion.choices[0]?.message?.content
      if (!content) {
        throw new Error('No content in OpenAI response')
      }

      if (config.debug) {
        console.info('OpenAI Response:', {
          status: completion.choices[0]?.finish_reason,
          promptTokens: completion.usage?.prompt_tokens,
          completionTokens: completion.usage?.completion_tokens,
          totalTokens: completion.usage?.total_tokens,
          content,
        })
      }

      return JSON.parse(content) as Context
    } catch (error) {
      throw new Error(`OpenAI API error: ${(error as Error).message}`)
    }
  }
}
