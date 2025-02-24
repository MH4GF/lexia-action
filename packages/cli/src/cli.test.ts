import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { describe, expect, it } from 'vitest'

const execFileAsync = promisify(execFile)
const VERSION_PATTERN = /\d+\.\d+\.\d+/

describe('lexia CLI', () => {
  it('should display help information', async () => {
    const { stdout } = await execFileAsync('ts-node', ['src/cli.ts', '--help'])
    expect(stdout).toContain('Usage: lexia [options] [command]')
    expect(stdout).toContain('Generate documentation update suggestions based on git changes')
  })

  it('should display version information', async () => {
    const { stdout } = await execFileAsync('ts-node', ['src/cli.ts', '--version'])
    expect(stdout).toMatch(VERSION_PATTERN)
  })
})
