# Level 1: Introduction to React & TypeScript Basics

*   **Level Title:** Getting Started with React and TypeScript
*   **Learning Objectives:**
    *   Understand the fundamental concepts of React (components, JSX, props, state).
    *   Set up a new React project with TypeScript.
    *   Write basic functional components and utilize props and state with TypeScript.
    *   Understand and use basic TypeScript types.
*   **Key Topics/Concepts Covered:**
    *   What is React? Virtual DOM, component-based architecture.
    *   Setting up a project (e.g., using Create React App with TypeScript template).
    *   JSX syntax and embedding expressions.
    *   Functional Components.
    *   Props: passing data to components, typing props with interfaces.
    *   State: `useState` hook, typing state.
    *   Basic TypeScript types: `string`, `number`, `boolean`, `any`, arrays (`string[]`), objects (`{}`).
    *   TypeScript Interfaces for defining shapes of objects and props.
*   **Hands-on Project: "Simple Greeting Card Maker"**
    *   **Description:** Create an application that allows a user to input a recipient's name and a custom message, then displays a greeting card with this information.
    *   **Features:**
        1.  An input field for the recipient's name.
        2.  A textarea for the custom message.
        3.  A display area that shows the formatted greeting card (e.g., "To: [Name]", "[Message]").
    *   **Challenge:** Ensure all props and state are strongly typed.
*   **Evaluation Criteria:**
    *   **Expected Output:** The application renders a card that updates dynamically as the user types into the input fields.
    *   **Manual Testing Steps:**
        1.  Open the application in a browser.
        2.  Enter a name (e.g., "World") into the name input.
        3.  Enter a message (e.g., "Hello from React!") into the message textarea.
        4.  Verify the greeting card display updates to show "To: World" and "Hello from React!".
        5.  Clear the inputs and verify the card updates accordingly.
    *   **Acceptance Criteria:**
        *   The project is created using TypeScript.
        *   A functional component is used to display the greeting card.
        *   Props for the greeting card component are defined using a TypeScript interface.
        *   The `useState` hook is used to manage the name and message inputs, and their types are explicitly defined. 