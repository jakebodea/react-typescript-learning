# Project Starter for Level 8: Ensuring Code Quality with Tests

This directory is intended for your hands-on project for this level.

## Instructions:

1.  **You will be working with your project from Level 6 (Shopping Cart).**
    *   Copy the entire `project_starter` directory from `level-06-state-management` into this level's `project_starter` directory.
    *   Alternatively, if you have it in a git repository, you can branch from your Level 6 work.

2.  **Set up Testing Environment (Jest & React Testing Library).**
    Vite uses Vitest by default, which has a Jest-compatible API. You can often use it directly. If you prefer to set up Jest explicitly or if your Vite template doesn't have testing configured:
    ```bash
    # Navigate to this project_starter directory for Level 8
    npm install --save-dev vitest @vitest/ui @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
    # or with yarn
    # yarn add --dev vitest @vitest/ui @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
    ```
    *   Configure Vitest by adding/modifying `vite.config.ts` (or `.js`):
        ```typescript
        /// <reference types="vitest" />
        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'

        export default defineConfig({
          plugins: [react()],
          test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './src/setupTests.ts', // or path to your setup file
          },
        })
        ```
    *   Create a `src/setupTests.ts` file (if you specified one in the config) and add:
        ```typescript
        import '@testing-library/jest-dom';
        ```
    *   Add test scripts to your `package.json`:
        ```json
        "scripts": {
          // ... other scripts
          "test": "vitest",
          "test:ui": "vitest --ui"
        },
        ```

3.  **Refer to `../instructions.md`** (the file in the `level-08-testing` directory) for:
    *   Learning Objectives
    *   Key Topics/Concepts Covered
    *   Detailed Tasks for testing the "Shopping Cart Application"
    *   Evaluation Criteria

4.  **Implement the tests** as described in `../instructions.md`. Create `*.test.tsx` (or `*.spec.tsx`) files alongside your components or in a `__tests__` directory.

Good luck! 