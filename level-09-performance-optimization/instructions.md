# Level 9: Performance Optimization & Advanced Hooks

*   **Level Title:** Optimizing Performance and Advanced Hook Usage
*   **Learning Objectives:**
    *   Learn techniques to identify and optimize performance bottlenecks in React applications.
    *   Understand and apply `React.memo`, `useMemo`, and `useCallback`.
    *   Explore more advanced hooks like `useReducer` and `useRef`.
    *   Introduce code splitting.
*   **Key Topics/Concepts Covered:**
    *   Profiling React components (React DevTools Profiler).
    *   `React.memo` for preventing re-renders of functional components.
    *   `useMemo` for memoizing expensive calculations.
    *   `useCallback` for memoizing callback functions (especially when passed to memoized children).
    *   When to optimize (and when not to).
    *   `useReducer`: managing complex state logic within a component.
    *   `useRef`: accessing DOM elements directly, storing mutable values that don't cause re-renders.
    *   Code Splitting: `React.lazy()` and `Suspense` for lazy-loading components.
*   **Hands-on Project: "Optimize a Data-Intensive List Application"**
    *   **Description:** Create an application that displays a large list of items (e.g., 500-1000 items with several properties). Each item should have some interactive element (e.g., a button that logs its ID). Initially, build it without specific memoization. Then, profile and optimize it.
    *   **Features:**
        1.  Generate a large list of mock data items (e.g., `Array<{ id: string; name: string; value: number; description: string }>`).
        2.  Render this list. Each list item component should display its data and have a button.
        3.  Implement a way to trigger a re-render of the parent component holding the list (e.g., a counter that updates).
        4.  (Optional) Add sorting or filtering to the list.
    *   **Optimization Task:**
        1.  Use React DevTools Profiler to observe re-renders of list items when the parent re-renders or when unrelated state changes.
        2.  Apply `React.memo` to the list item component.
        3.  If callbacks are passed to list items, use `useCallback`.
        4.  If any complex computations are done during rendering, consider `useMemo`.
        5.  Implement `React.lazy` for a part of the application (e.g., a modal that opens on item click, or a details view).
*   **Evaluation Criteria:**
    *   **Expected Output:** A list application that initially might show performance issues with large data, which are then mitigated by optimizations. Lazy loading should be demonstrable.
    *   **Manual Testing & Profiling Steps:**
        1.  Load the app. Trigger a parent re-render. Use the Profiler to see how many list items re-render *before* optimization.
        2.  Apply optimizations (`React.memo`, `useCallback`).
        3.  Trigger parent re-render again. Use Profiler to verify that only necessary list items (or none, if props haven't changed) re-render.
        4.  Verify interactions within list items (e.g., button clicks) still work.
        5.  Verify that the lazy-loaded component is not loaded initially but loads when triggered.
    *   **Acceptance Criteria:**
        *   The application demonstrates measurable performance improvement after applying `React.memo`, `useCallback`, and potentially `useMemo`. This should be verifiable using the React DevTools Profiler (e.g., "highlight updates when components render").
        *   `React.memo` is correctly applied to a list item component.
        *   `useCallback` is correctly used for any functions passed as props to memoized components.
        *   At least one component is lazy-loaded using `React.lazy` and `Suspense`.
        *   The developer can explain why each optimization was applied. 