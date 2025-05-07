# Level 7: Routing with React Router

*   **Level Title:** Navigating a Multi-Page Application
*   **Learning Objectives:**
    *   Implement client-side routing in a React application using React Router.
    *   Understand how to create different "pages" and navigate between them.
    *   Work with route parameters.
*   **Key Topics/Concepts Covered:**
    *   React Router (`react-router-dom` v6+).
    *   `BrowserRouter`, `Routes`, `Route` components.
    *   `Link` and `NavLink` components for navigation.
    *   Programmatic navigation: `useNavigate` hook.
    *   Route parameters: `useParams` hook (e.g., `/products/:productId`).
    *   Nested Routes (optional, can be a basic introduction).
    *   Typing route parameters with TypeScript.
*   **Hands-on Project: "Multi-Page Blog Frontend"**
    *   **Description:** Create a simple blog frontend with a homepage listing blog posts, individual post pages, and an "About Us" page.
    *   **Features:**
        1.  **Homepage (`/`):** Displays a list of blog post titles (mock data: `Array<{ id: string; title: string; summary: string; content: string }>`). Each title is a link.
        2.  **Post Page (`/posts/:postId`):** Displays the full title and content of a selected blog post.
        3.  **About Page (`/about`):** Displays static information about the blog/author.
        4.  Navigation bar with links to Home and About.
    *   **Challenge:** Ensure route parameters are correctly typed and used to fetch/display the correct post data.
*   **Evaluation Criteria:**
    *   **Expected Output:** A navigable multi-page application where users can view a list of posts, click to view a single post, and visit an about page.
    *   **Manual Testing Steps:**
        1.  Navigate to the homepage. Verify post titles are listed.
        2.  Click on a post title. Verify the URL changes to `/posts/:postId` and the correct post content is displayed.
        3.  Navigate to the "About" page using the navigation link. Verify its content.
        4.  Use browser back/forward buttons to test routing history.
        5.  Try accessing a non-existent post ID (e.g., `/posts/invalid-id`). Consider how to handle this (e.g., "Post not found" message - this can be a stretch goal).
    *   **Acceptance Criteria:**
        *   React Router v6+ is used for routing.
        *   Routes are defined for `/`, `/posts/:postId`, and `/about`.
        *   `Link` or `NavLink` components are used for user navigation.
        *   `useParams` is used to retrieve `postId` on the post page, and it's typed.
        *   The correct component/content is rendered for each route. 