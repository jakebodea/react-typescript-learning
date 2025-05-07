# Level 4: Hooks Deep Dive (useEffect, useContext)

*   **Level Title:** Mastering Side Effects and Context
*   **Learning Objectives:**
    *   Understand and use the `useEffect` hook for managing side effects (data fetching, subscriptions, timers).
    *   Learn about the `useEffect` dependency array and cleanup functions.
    *   Implement global state sharing for small to medium applications using the `useContext` hook.
*   **Key Topics/Concepts Covered:**
    *   `useEffect` hook: purpose, syntax, execution timing.
    *   Dependency array (`[]`, `[dep]`, no array): controlling when effects run.
    *   Cleanup function in `useEffect`: unsubscribing, clearing timers.
    *   Fetching data with `useEffect` and `fetch` or `axios`. Handling loading and error states.
    *   `useContext` hook: creating context, `Provider`, `Consumer`/hook usage.
    *   Typing context values.
*   **Hands-on Project: "Simple News Fetcher with Theme Switcher"**
    *   **Description:** Build an application that fetches a list of articles from a public API (e.g., NewsAPI - check for free tiers, or use JSONPlaceholder for posts) and allows the user to switch between a light and dark theme.
    *   **Features:**
        1.  Fetch and display a list of articles/posts on component mount using `useEffect`.
        2.  Handle loading and error states during the API call.
        3.  Implement a theme switcher (light/dark mode) using `useContext`. The theme preference should affect the app's background and text colors.
        4.  A button or toggle to switch themes.
    *   **Challenge:** Ensure the theme is accessible by multiple components without prop drilling. Type the API response data.
*   **Evaluation Criteria:**
    *   **Expected Output:** The app displays fetched articles and allows theme changes that persist across the UI.
    *   **Manual Testing Steps:**
        1.  Load the application. Verify a loading indicator appears, then articles are displayed.
        2.  (Simulate error if possible, or check error handling in code)
        3.  Click the theme toggle button. Verify the application's background and text colors change.
        4.  If there are multiple components affected by the theme, verify they all update.
    *   **Acceptance Criteria:**
        *   Data is fetched from a public API using `useEffect` on initial render.
        *   Loading and error states for data fetching are handled and communicated to the user.
        *   `useContext` is used to provide and consume theme state (e.g., `{ theme: 'light' | 'dark', toggleTheme: () => void }`).
        *   The context value and provider are correctly typed.
        *   The `useEffect` hook for data fetching has a correctly configured dependency array.
        *   The cleanup function in `useEffect` is used if any subscriptions or timers are set up (though not strictly required for a simple fetch). 