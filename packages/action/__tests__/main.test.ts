/**
 * Unit tests for the action's main functionality, src/main.ts
 *
 * To mock dependencies in ESM, you can create fixtures that export mock
 * functions and objects. For example, the core module is mocked in this test,
 * so that the actual '@actions/core' module is not imported.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { debug, getInput, setFailed, setOutput } from '../__fixtures__/core.js'
import { wait } from '../__fixtures__/wait.js'

const TIME_FORMAT_REGEX = /^\d{2}:\d{2}:\d{2}/

// Mocks should be declared before the module being tested is imported.
vi.mock('@actions/core', () => ({ debug, getInput, setFailed, setOutput }))
vi.mock('../src/wait.js', () => ({ wait }))

// The module being tested should be imported dynamically. This ensures that the
// mocks are used in place of any actual dependencies.
const { run } = await import('../src/main.js')

describe('main.ts', () => {
  beforeEach(() => {
    // Set the action's inputs as return values from core.getInput().
    getInput.mockImplementation(() => '500')

    // Mock the wait function so that it does not actually wait.
    wait.mockImplementation(() => Promise.resolve('done!'))
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('Sets the time output', async () => {
    await run()

    // Verify the time output was set.
    expect(setOutput).toHaveBeenNthCalledWith(
      1,
      'time',
      // Simple regex to match a time string in the format HH:MM:SS.
      expect.stringMatching(TIME_FORMAT_REGEX),
    )
  })

  it('Sets a failed status', async () => {
    // Clear the getInput mock and return an invalid value.
    getInput.mockClear().mockReturnValueOnce('this is not a number')

    // Clear the wait mock and return a rejected promise.
    wait.mockClear().mockRejectedValueOnce(new Error('milliseconds is not a number'))

    await run()

    // Verify that the action was marked as failed.
    expect(setFailed).toHaveBeenNthCalledWith(1, 'milliseconds is not a number')
  })
})
