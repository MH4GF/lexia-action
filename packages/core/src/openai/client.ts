import OpenAI from 'openai'
import type { Context } from '../lexia.ts'

export class OpenAIClient {
  private client: OpenAI

  constructor(apiKey: string) {
    this.client = new OpenAI({ apiKey })
  }

  async extractContext(diff: string): Promise<Context> {
    try {
      const completion = await this.client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'You are an AI that analyzes pull request diffs and extracts meaningful context and knowledge. Respond in JSON format.',
          },
          {
            role: 'user',
            content: `Please analyze this PR diff and extract the key changes and knowledge:\n\n${diff}`,
          },
        ],
      })

      const content = completion.choices[0]?.message?.content
      if (!content) {
        throw new Error('No content in OpenAI response')
      }

      return JSON.parse(content) as Context
    } catch (error) {
      throw new Error(`OpenAI API error: ${(error as Error).message}`)
    }
  }
}
