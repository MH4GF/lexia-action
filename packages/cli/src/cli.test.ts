import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { describe, expect, it } from 'vitest'

const execFileAsync = promisify(execFile)
const VERSION_PATTERN = /\d+\.\d+\.\d+/

describe('lexia CLI', () => {
  it('should display help information', async () => {
    const { stdout } = await execFileAsync('node', ['src/cli.ts', '--help'])
    expect(stdout).toMatchInlineSnapshot(`
      "Usage: lexia [options] [command]

      Generate documentation update suggestions based on git changes

      Options:
        -V, --version                  output the version number
        -h, --help                     display help for command

      Commands:
        init                           Initialize configuration file
        suggest [options]              Generate documentation update suggestions
        config <action> [key] [value]  Manage configuration
        help [command]                 display help for command
      "
    `)
  })

  it('should display version information', async () => {
    const { stdout } = await execFileAsync('node', ['src/cli.ts', '--version'])
    expect(stdout).toMatch(VERSION_PATTERN)
  })
})
