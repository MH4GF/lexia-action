# @lexia/cli

Command-line interface for Lexia Action. Generate documentation update suggestions locally using @lexia/core.

## Installation

```bash
npm install -g @lexia/cli
```

## Usage

```bash
# Initialize configuration file
lexia init

# Generate suggestions for current git changes
lexia suggest

# View current configuration
lexia config get docs
```

## Commands

### `lexia init`

Generate a configuration file:

```bash
lexia init
```

Creates `.lexia-agent.yml` in your current directory.

### `lexia suggest`

Generate documentation update suggestions based on current git changes:

```bash
lexia suggest
```

Options:

- `--config <path>` - Use custom config file path
- `--format <type>` - Output format (markdown/json)

### `lexia config`

Manage configuration settings:

```bash
# Get a config value
lexia config get <key>

# Set a config value
lexia config set <key> <value>

# View all settings
lexia config list
```

## Configuration

Settings in `.lexia-agent.yml`:

```yaml
# Target documentation files
docs:
  - "docs/**/*.md"
  - "README.md"

# Extraction settings
extraction:
  confidence: 0.8
  maxResults: 5

# Suggestion settings
suggestion:
  format: markdown
  maxSuggestions: 3
```

## Environment Variables

- `OPENAI_API_KEY` - Your OpenAI API key (required)
- `LEXIA_CONFIG_PATH` - Custom path to config file (optional)

## License

MIT
