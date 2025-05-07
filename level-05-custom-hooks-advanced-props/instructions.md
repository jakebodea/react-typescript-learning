# Level 5: Custom Hooks & Advanced Prop Typing

*   **Level Title:** Creating Reusable Logic and Flexible Components
*   **Learning Objectives:**
    *   Learn to create custom hooks to encapsulate and reuse stateful logic.
    *   Explore advanced TypeScript patterns for creating flexible and type-safe component props (generics, conditional types).
*   **Key Topics/Concepts Covered:**
    *   Custom Hooks: motivation, rules, naming conventions (e.g., `useSomething`).
    *   Examples: `useLocalStorage`, `useFetch`, `useFormInput`.
    *   Typing custom hooks (input parameters and return values).
    *   TypeScript Generics: creating reusable components/functions that can work over a variety of types.
    *   Generic props: e.g., `<List items={data} renderItem={(item) => ...} />`.
    *   `React.FC` vs. function declaration with explicit prop types.
    *   (Briefly) Mapped types, conditional types if applicable to the project.
*   **Hands-on Project: "Generic Data Table and `useToggle` Hook"**
    *   **Description:**
        1.  Create a custom hook `useToggle` that manages a boolean state and provides a function to toggle it.
        2.  Create a generic `DataTable` component that can render any array of objects. It should accept `data` (an array of objects) and `columns` (an array of column definitions specifying header and data accessor).
    *   **Features:**
        *   `useToggle(initialValue: boolean)`: returns `[boolean, () => void]`.
        *   `DataTable<T>`:
            *   Props: `data: T[]`, `columns: Array<{ key: keyof T; header: string; render?: (item: T) => React.ReactNode }> `.
            *   Renders an HTML table with headers and rows based on the provided data and columns.
        *   Use the `useToggle` hook in a simple component to show/hide some content.
        *   Use the `DataTable` to display two different sets of data (e.g., a list of users and a list of products, with different column structures).
    *   **Challenge:** Make the `DataTable` truly generic and type-safe. The `key` in column definitions should be a valid key of the data items `T`.
*   **Evaluation Criteria:**
    *   **Expected Output:** A working `useToggle` hook demonstrated in a component, and a `DataTable` correctly rendering different datasets.
    *   **Unit/Integration Test Cases (Jest & React Testing Library):**
        *   `useToggle` hook:
            *   Test initial state.
            *   Test toggling functionality.
        *   `DataTable` component:
            *   Test if it renders headers correctly based on `columns` prop.
            *   Test if it renders rows correctly based on `data` prop.
            *   Test with a custom `render` function for a column.
    *   **Manual Testing Steps:**
        1.  Test the component using `useToggle` to ensure content visibility changes on toggle.
        2.  Provide a sample array of user objects and corresponding column definitions to `DataTable`. Verify correct rendering.
        3.  Provide a sample array of product objects and different column definitions. Verify correct rendering.
    *   **Acceptance Criteria:**
        *   The `useToggle` custom hook is implemented, typed, and works as expected.
        *   The `DataTable` component uses TypeScript generics (`<T>`) to accept any data type for its rows.
        *   The `columns` prop for `DataTable` is typed to ensure `key` is a valid property of `T`, and `header` is a string.
        *   The `DataTable` correctly renders headers and data rows.
        *   The project demonstrates usage of both `useToggle` and `DataTable` with sample data. 