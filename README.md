# Motivus Challenge

This repository contains a set of GitHub Actions for quality control and validation, including:

- Custom File Validator Action
- ESLint Integration
- SonarQube Analysis
- TypeScript Type Checking
- Automated Testing

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure SonarQube:
- Add `SONAR_TOKEN` to your repository secrets
- Add `SONAR_HOST_URL` to your repository secrets

3. Build the custom actions:
```bash
npm run build:actions
```

## Quality Gates

The following quality gates are implemented:

1. **File Validation**
   - Checks for required files in the repository
   - Configurable through workflow inputs

2. **Code Quality**
   - ESLint static analysis
   - SonarQube integration
   - Code coverage reporting

3. **TypeScript Checks**
   - Type checking
   - Unit tests

## Development

To run checks locally:

```bash
# Run ESLint
npm run lint

# Run tests
npm test

# Run type checking
npx tsc --noEmit
``` 