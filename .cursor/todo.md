# @lexia/core Implementation TODO

## Phase 1: Setup & Integration

### Testing Environment

- [x] Set up Vitest configuration
- [x] Add initial test for Lexia class

### OpenAI Integration

- [x] Set up OpenAI client
- [x] Add environment variables handling
- [x] Create basic prompt templates
- [x] Add error handling for API calls
- [ ] Add retry logic
- [x] Add tests for OpenAI integration

### Vercel AI SDK Integration

- [ ] Configure AI SDK
- [ ] Set up streaming response handling
- [ ] Add proper error handling
- [ ] Add tests for AI SDK integration

## Phase 2: Core Implementation

### Context Extraction

- [ ] Define Context type interface based on initial LLM responses
  - [ ] Add fields for storing PR changes
  - [ ] Add fields for extracted knowledge
  - [ ] Add confidence score field
- [ ] Write tests for extractContext method
- [ ] Implement extractContext method
  - [ ] Parse PR diff string
  - [ ] Extract meaningful changes
  - [ ] Calculate confidence scores
  - [ ] Apply extraction config settings

### Suggestion Generation

- [ ] Define Suggestion type interface based on initial LLM responses
  - [ ] Add fields for target doc file
  - [ ] Add fields for suggested changes
  - [ ] Add fields for change rationale
- [ ] Write tests for generateSuggestions method
- [ ] Implement generateSuggestions method
  - [ ] Analyze context data
  - [ ] Match with target docs
  - [ ] Generate update suggestions
  - [ ] Format according to config

## Phase 3: Configuration & Documentation

### Configuration

- [ ] Add input validation for LexiaConfig
- [ ] Add default values for optional config
- [ ] Add configuration validation
- [ ] Add tests for configuration handling

### Documentation

- [ ] Add JSDoc comments to all public APIs
- [ ] Create API documentation
- [ ] Add usage examples
- [ ] Document type definitions
- [ ] Add example test cases to documentation

# @lexia/cli Implementation TODO

## Phase 1: Basic CLI Setup

### Project Setup

- [x] Initialize CLI package structure
- [x] Set up TypeScript configuration
- [x] Add commander.js dependency
- [x] Set up testing environment

### Command Implementation

- [ ] Implement `init` command
  - [ ] Generate default config file
  - [ ] Add config file template
  - [ ] Add tests for init command
- [ ] Implement `suggest` command
  - [ ] Read git diff
  - [ ] Load configuration
  - [ ] Call @lexia/core
  - [ ] Format output
  - [ ] Add tests for suggest command
- [ ] Implement `config` command
  - [ ] Add get/set/list subcommands
  - [ ] Add config file validation
  - [ ] Add tests for config command

### Environment Variables

- [ ] Add environment variables handling
  - [ ] OPENAI_API_KEY validation
  - [ ] LEXIA_CONFIG_PATH handling
  - [ ] Add tests for env vars

### Error Handling

- [ ] Add proper error messages
- [ ] Add error handling for missing API key
- [ ] Add error handling for invalid config
- [ ] Add error handling for git commands
- [ ] Add tests for error cases

## Phase 2: Advanced Features

### Configuration Management

- [ ] Add config file validation
- [ ] Add config schema
- [ ] Add config migration support
- [ ] Add tests for config management

### Git Integration

- [ ] Add git diff parsing
- [ ] Add branch comparison
- [ ] Add commit range support
- [ ] Add tests for git integration

### Output Formatting

- [ ] Add JSON output format
- [ ] Add markdown output format
- [ ] Add custom template support
- [ ] Add tests for formatters

## Phase 3: Documentation & Polish

### Documentation

- [ ] Add command documentation
- [ ] Add configuration guide
- [ ] Add example usage
- [ ] Add troubleshooting guide

### User Experience

- [ ] Add progress indicators
- [ ] Add colorful output
- [ ] Add interactive mode
- [ ] Add verbose logging option
