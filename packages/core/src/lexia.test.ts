import { describe, expect, it } from 'vitest'
import { Lexia, type LexiaConfig } from './lexia.ts'

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
    it('should throw not implemented error', async () => {
      const lexia = new Lexia(config)
      await expect(lexia.extractContext('')).rejects.toThrow('Not implemented')
    })
  })

  describe('generateSuggestions', () => {
    it('should throw not implemented error', async () => {
      const lexia = new Lexia(config)
      await expect(lexia.generateSuggestions({})).rejects.toThrow('Not implemented')
    })
  })
})
