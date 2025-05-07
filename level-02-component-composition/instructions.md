# Level 2: Component Composition & Event Handling

*   **Level Title:** Building with Components and Handling User Interactions
*   **Learning Objectives:**
    *   Learn to compose multiple components to build more complex UIs.
    *   Understand how to render lists of data and the importance of keys.
    *   Implement conditional rendering.
    *   Handle common user events (clicks, input changes) with TypeScript.
*   **Key Topics/Concepts Covered:**
    *   Component Composition: Breaking down UI into smaller, reusable components.
    *   Rendering Lists: Using `.map()` to render collections of data. `key` prop.
    *   Conditional Rendering: `if` statements, ternary operators, logical `&&` operator.
    *   Event Handling: `onClick`, `onChange`, `onSubmit`.
    *   TypeScript Event Types: `React.ChangeEvent<HTMLInputElement>`, `React.MouseEvent<HTMLButtonElement>`, `React.FormEvent<HTMLFormElement>`.
    *   Function types in TypeScript for callbacks.
*   **Hands-on Project: "Interactive To-Do List"**
    *   **Description:** Develop a to-do list application where users can add tasks, mark tasks as completed, and see a list of their tasks.
    *   **Features:**
        1.  An input field and an "Add Task" button to add new to-do items.
        2.  A list displaying each to-do item.
        3.  Each to-do item should have a way to mark it as complete (e.g., a checkbox or a button).
        4.  Completed tasks should be visually distinct (e.g., strikethrough text).
    *   **Challenge:** Create separate components for the `TodoForm`, `TodoList`, and `TodoItem`.
*   **Evaluation Criteria:**
    *   **Expected Output:** Users can add tasks, see them listed, and toggle their completion status.
    *   **Manual Testing Steps:**
        1.  Add a task "Learn React". Verify it appears in the list.
        2.  Add another task "Practice TypeScript". Verify it appears.
        3.  Mark "Learn React" as complete. Verify its style changes (e.g., strikethrough).
        4.  Unmark "Learn React". Verify its style reverts.
    *   **Acceptance Criteria:**
        *   The application uses at least three components: `TodoForm` (for input), `TodoList` (to display items), and `TodoItem` (for individual tasks).
        *   Props are passed correctly between parent and child components and are typed.
        *   Event handlers for adding tasks and toggling completion are correctly typed using TypeScript's event types.
        *   Each `TodoItem` in the `TodoList` has a unique `key`.
        *   The state for the list of todos (including their completion status) is managed appropriately. 