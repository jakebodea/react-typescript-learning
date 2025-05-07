# Project Starter for Level 4: Mastering Side Effects and Context

This directory is intended for your hands-on project for this level.

## Instructions:

1.  **Set up your React + TypeScript project here using Vite.**
    ```bash
    # Ensure you are in the 'project_starter' directory for Level 4, then run:
    npm create vite@latest . -- --template react-ts
    # or
    # yarn create vite . --template react-ts
    ```
    Follow the prompts to complete the setup. Remember to run `npm install` or `yarn install` afterwards.
    You might need to install `axios` if you choose to use it for data fetching: `npm install axios` or `yarn add axios`.

2.  **Refer to `../instructions.md`** (the file in the `level-04-hooks-deep-dive` directory) for:
    *   Learning Objectives
    *   Key Topics/Concepts Covered
    *   Detailed Project Description and Features for the "Simple News Fetcher with Theme Switcher"
    *   Evaluation Criteria

3.  **Implement the project** described in `../instructions.md`. Focus on using `useEffect` for data fetching and `useContext` for theme management.
    You will need to define a context for the theme, fetch data from an API (e.g., JSONPlaceholder if NewsAPI is complex to set up quickly), and manage loading/error states.

Good luck! 