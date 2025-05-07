# Project Starter for Level 6: Managing Application State at Scale

This directory is intended for your hands-on project for this level.

## Instructions:

1.  **Set up your React + TypeScript project here using Vite.**
    ```bash
    # Ensure you are in the 'project_starter' directory for Level 6, then run:
    npm create vite@latest . -- --template react-ts
    # or
    # yarn create vite . --template react-ts
    ```
    Follow the prompts to complete the setup. Remember to run `npm install` or `yarn install` afterwards.

2.  **Choose and install a state management library:**
    *   **For Zustand:**
        ```bash
        npm install zustand
        # or
        yarn add zustand
        ```
    *   **For Redux Toolkit:**
        ```bash
        npm install @reduxjs/toolkit react-redux
        # or
        yarn add @reduxjs/toolkit react-redux
        ```
        You may also need `@types/react-redux` if not automatically included.

3.  **Refer to `../instructions.md`** (the file in the `level-06-state-management` directory) for:
    *   Learning Objectives
    *   Key Topics/Concepts Covered
    *   Detailed Project Description and Features for the "Shopping Cart with Zustand/Redux Toolkit"
    *   Evaluation Criteria

4.  **Implement the project** described in `../instructions.md`.
    *   Create a `store/` directory (or `features/` for RTK slices) for your state management logic.
    *   Define your product data, components for product listing (`ProductList.tsx`, `ProductItem.tsx`), and cart display (`ShoppingCart.tsx`).

Good luck! 