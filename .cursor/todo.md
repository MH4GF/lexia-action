# @lexia/core Implementation TODO

## Phase 1: Setup & Integration

### Testing Environment

- [x] Set up Vitest configuration
- [x] Add initial test for Lexia class

### OpenAI Integration

- [ ] Set up OpenAI client
- [ ] Add environment variables handling
- [ ] Create basic prompt templates
- [ ] Add error handling for API calls
- [ ] Add retry logic
- [ ] Add tests for OpenAI integration

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
