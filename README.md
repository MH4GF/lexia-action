# Lexia Action

Lexia Action is a GitHub Actions custom action prototype that brings the power of Devin AI’s Knowledge Suggestion to any repository. By automatically extracting context from pull request diffs, it empowers both human and AI collaborators to maintain high-quality, up-to-date documentation—making Devin’s innovative approach accessible anywhere.

## What It Does

- **Extracts Context Automatically:**  
  Analyzes pull request diffs to pull out general, reusable knowledge, pinpointing where documentation updates are needed.

- **Suggests Documentation Updates:**  
  Identifies relevant documentation files and proposes specific changes to keep your docs current.

- **Seamless Integration:**  
  Built as a GitHub Actions custom action prototype, Lexia Action fits effortlessly into your CI/CD workflows. Trigger analysis and post update suggestions directly on your PRs as part of your automated pipeline.

---

## Why Lexia Action?

While Devin AI’s Knowledge Suggestion offers a great automated update experience, its knowledge is stored solely on the Devin platform—limiting access for other AI agents and team members. Lexia Action solves this by saving documentation updates as text files directly in your repository. This means that everyone, and every tool, can easily access and build on this knowledge.

---

## Roadmap

### Current Prototype (GitHub Actions Custom Action)

- **Focus:**

  - Analyze pull request diffs to extract useful context.
  - Determine which documentation files need updates.
  - Display clear, actionable update suggestions as PR comments.

- **Integration:**
  - Designed for use as a GitHub Actions custom action, ideal for integration into your CI/CD pipeline.
  - Automatically posts PR comments with its update suggestions.

### Future Vision

- **GitHub App and Web UI:**
  - Develop a GitHub App for an interactive, visual experience.
  - Create a web dashboard for monitoring and managing documentation updates.

- **Automated PR Submissions:**
  - Enable automatic creation of PRs with the suggested documentation updates.

- **Direct Command Activation:**
  - Allow users to trigger updates directly via GitHub mentions or commands in PRs.

---

## Getting Started

### 1. Installation

Add Lexia Action to your GitHub Actions workflow by referencing the action in your workflow file:

```yaml
- name: Lexia Action
  uses: MH4GF/lexia-action@v0.1.0
  with:
    # (Optional) Specify configuration file if needed
    config_file: .lexia-agent.yml
```

### 2. Configuration

Create a configuration file (e.g., `.lexia-agent.yml`) in your repository root to specify which documentation files to target and to set your extraction preferences.

### 3. Usage

When a pull request is opened or updated, Lexia Action will:
- Analyze the PR diff.
- Extract contextual knowledge.
- Post actionable update suggestions as comments on the PR.

Integrate it with other steps in your workflow to automate documentation checks and updates.

---

## Contributing

We welcome contributions! Whether you’re interested in enhancing our extraction algorithms, expanding the action’s features, or helping build out our future GitHub App and Web UI, your input is invaluable. Please see our contributing guidelines for more details.

---

## License

[MIT License](LICENSE)

Empowering collaboration between humans and AI—one documentation update at a time.
