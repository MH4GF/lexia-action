#!/usr/bin/env node

import { program } from 'commander'
import pkg from '../package.json' with { type: 'json' }
import { suggest } from './commands/suggest.ts'

program
  .name('lexia')
  .description('Generate documentation update suggestions based on git changes')
  .version(pkg.version)

program
  .command('init')
  .description('Initialize configuration file')
  .action(async () => {
    // TODO: Implementation pending
  })

program
  .command('suggest')
  .description('Generate documentation update suggestions')
  .option('-c, --config <path>', 'Path to config file')
  .option('-f, --format <type>', 'Output format (markdown/json)')
  .action(async (options) => {
    try {
      const result = await suggest(options)
      console.log(result)
      process.exit(0)
    } catch (_error) {
      process.exit(1)
    }
  })

program
  .command('config')
  .description('Manage configuration')
  .argument('<action>', 'Action to perform (get/set/list)')
  .argument('[key]', 'Configuration key')
  .argument('[value]', 'Configuration value')
  .action(async (_action, _key, _value) => {
    // TODO: Implementation pending
  })

program.parse()
