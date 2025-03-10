# @lexia/core

Core functionality package for Lexia Action. Implements features to extract context from pull request diffs and generate documentation update suggestions, powered by Vercel AI SDK Core internally.

## Key Features

- **Context Extraction Engine:**

  - Analyzes PR diffs to identify significant changes
  - Extracts reusable knowledge
  - Identifies relevant documentation files

- **Suggestion Generation:**
  - Creates documentation update proposals based on extracted context
  - Formats suggestions in markdown
  - Prioritizes update locations

## Installation

```bash
npm install @lexia/core
```

## Usage

```typescript
import { Lexia } from "@lexia/core";

const lexia = new Lexia({
  apiKey: process.env.OPENAI_API_KEY,
  docs: ["README.md", "docs/**/*.md"], // Target documentation paths
  // other configuration options
});

// Extract context from PR diff
const context = await lexia.extractContext(prDiff);

// Generate documentation update suggestions for configured docs
const suggestions = await lexia.generateSuggestions(context);
```

## API Reference

### Lexia

Main class that provides high-level APIs for context extraction and suggestion generation.

#### Constructor Options

- `apiKey`: OpenAI API key for LLM access
- `docs`: Array of glob patterns for target documentation files
- `extractionConfig`: Configuration for context extraction
  - `confidence`: Minimum confidence threshold (0-1)
  - `maxResults`: Maximum number of contexts to extract
- `suggestionConfig`: Configuration for suggestion generation
  - `format`: Output format ('markdown' | 'json')
  - `maxSuggestions`: Maximum number of suggestions to generate

#### Methods

- `extractContext(diff: string): Promise<Context>` - Extracts reusable context from PR diff
- `generateSuggestions(context: Context): Promise<Suggestion[]>` - Generates documentation update suggestions for configured docs

For detailed API documentation, see [here](./docs/api.md).

## License

MIT
