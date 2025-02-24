/**
 * Unit tests for src/wait.ts
 */
import { describe, expect, it } from 'vitest'
import { wait } from '../src/wait.js'

describe('wait.ts', () => {
  it('Throws an invalid number', async () => {
    const input = Number.parseInt('foo', 10)
    await expect(wait(input)).rejects.toThrow('milliseconds is not a number')
  })

  it('Waits the specified amount of time', async () => {
    const start = new Date()
    const timeToWait = 500
    await wait(timeToWait)
    const end = new Date()
    const delta = Math.abs(end.getTime() - start.getTime() - timeToWait)
    expect(delta).toBeLessThan(100)
  })
})
