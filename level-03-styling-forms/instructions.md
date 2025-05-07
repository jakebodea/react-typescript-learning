# Level 3: Styling and Forms in React

*   **Level Title:** Styling Components and Mastering Forms
*   **Learning Objectives:**
    *   Explore different methods for styling React components (CSS Modules, Styled Components, or Tailwind CSS).
    *   Build and manage complex forms with validation.
    *   Utilize TypeScript for robust form state and validation logic.
*   **Key Topics/Concepts Covered:**
    *   Styling options:
        *   CSS Modules: Scoped CSS.
        *   Styled Components: CSS-in-JS.
        *   (Alternatively) Utility-first CSS like Tailwind CSS.
    *   Controlled Components for forms.
    *   Form handling: submission, data collection.
    *   Basic client-side form validation.
    *   TypeScript: Utility Types (e.g., `Partial<T>`, `Required<T>`), string literal types for states, discriminated unions for form state/errors.
*   **Hands-on Project: "User Registration Form with Validation"**
    *   **Description:** Create a user registration form with fields for username, email, password, and confirm password. Implement client-side validation.
    *   **Features:**
        1.  Input fields: username, email, password, confirm password.
        2.  Validation rules:
            *   Username: required, min length 3.
            *   Email: required, valid email format.
            *   Password: required, min length 8, contains at least one number.
            *   Confirm Password: must match password.
        3.  Display validation error messages next to the respective fields.
        4.  On successful submission, log the form data to the console (simulating an API call).
    *   **Challenge:** Choose one styling method (CSS Modules or Styled Components) and apply it consistently. Manage form state and errors using a single state object with a TypeScript interface.
*   **Evaluation Criteria:**
    *   **Expected Output:** A styled registration form that provides real-time validation feedback and logs data on valid submission.
    *   **Manual Testing Steps:**
        1.  Attempt to submit the form with empty fields. Verify appropriate error messages are shown for each required field.
        2.  Enter an invalid email format (e.g., "test@test"). Verify email validation error.
        3.  Enter a password "short" (less than 8 chars). Verify password length error.
        4.  Enter a password "password" and confirm password "different". Verify password mismatch error.
        5.  Fill all fields correctly (e.g., username "testuser", email "test@example.com", password "password123", confirm password "password123"). Submit the form.
        6.  Verify form data is logged to the console.
        7.  Verify error messages disappear as valid input is provided.
    *   **Acceptance Criteria:**
        *   The form includes all specified fields.
        *   Client-side validation is implemented for all rules.
        *   Validation errors are displayed clearly to the user.
        *   The chosen styling method is consistently applied.
        *   Form state (values and errors) is managed using `useState` and typed with a TypeScript interface.
        *   Successful submission logs the typed form data object. 