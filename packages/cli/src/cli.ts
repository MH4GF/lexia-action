#!/usr/bin/env node

import { program } from 'commander'
import { version } from '../package.json'

program
  .name('lexia')
  .description('Generate documentation update suggestions based on git changes')
  .version(version)

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
  .action(async (_options) => {
    // TODO: Implementation pending
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
