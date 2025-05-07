# Project Starter for Level 9: Optimizing Performance and Advanced Hook Usage

This directory is intended for your hands-on project for this level.

## Instructions:

1.  **Set up your React + TypeScript project here using Vite.**
    ```bash
    # Ensure you are in the 'project_starter' directory for Level 9, then run:
    npm create vite@latest . -- --template react-ts
    # or
    # yarn create vite . --template react-ts
    ```
    Follow the prompts to complete the setup. Remember to run `npm install` or `yarn install` afterwards.

2.  **Refer to `../instructions.md`** (the file in the `level-09-performance-optimization` directory) for:
    *   Learning Objectives
    *   Key Topics/Concepts Covered
    *   Detailed Project Description and Features for the "Optimize a Data-Intensive List Application"
    *   Optimization tasks and Evaluation Criteria.

3.  **Implement the project** described in `../instructions.md`.
    *   Focus on generating a large list of items.
    *   Build the initial version without memoization, then use the React DevTools Profiler to identify bottlenecks.
    *   Apply `React.memo`, `useMemo`, `useCallback` as appropriate.
    *   Implement `React.lazy` and `Suspense` for a part of your application.

4.  **React DevTools Profiler:** Make sure you have the React DevTools browser extension installed. It's crucial for this level to observe the effects of your optimizations.

Good luck with optimizing! 