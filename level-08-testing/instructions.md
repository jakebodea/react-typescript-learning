# Level 8: Testing React Components (Jest & React Testing Library)

*   **Level Title:** Ensuring Code Quality with Tests
*   **Learning Objectives:**
    *   Learn to write unit and integration tests for React components using Jest and React Testing Library (RTL).
    *   Understand testing philosophy: test behavior, not implementation.
*   **Key Topics/Concepts Covered:**
    *   Jest: test runner, assertion library (`expect`), matchers.
    *   React Testing Library (RTL): querying the DOM (`getBy*`, `findBy*`, `queryBy*`), interacting with elements (`fireEvent`, `userEvent`).
    *   Writing tests for:
        *   Component rendering.
        *   User interactions (clicks, form input).
        *   Conditional rendering.
        *   Props.
    *   Mocking: `jest.fn()` for functions, basic module mocks.
    *   Testing custom hooks.
    *   `waitFor` for asynchronous operations.
*   **Hands-on Project: "Test the Shopping Cart Application"**
    *   **Description:** Write unit and integration tests for the Shopping Cart application developed in Level 6.
    *   **Tasks:**
        1.  Set up Jest and RTL in the project if not already present.
        2.  Write tests for the `ProductItem` component (renders product info, "Add to Cart" button works).
        3.  Write tests for the `ShoppingCart` component (displays items, quantities, total correctly).
        4.  Write tests for the state management logic (Zustand actions or Redux Toolkit reducers/actions). For example, test that dispatching an "add item" action correctly updates the state.
        5.  Write an integration test for the flow: user adds an item to the cart, and the cart display updates.
*   **Evaluation Criteria:**
    *   **Test Execution:** All tests should pass when `npm test` (or `yarn test`) is run.
    *   **Unit/Integration Test Cases:**
        *   `ProductItem` component:
            *   Assert it renders product name and price.
            *   Assert the "Add to Cart" button calls the provided handler when clicked.
        *   `ShoppingCart` component (assuming it receives cart items as props or uses selectors):
            *   Assert it displays "Cart is empty" when no items.
            *   Assert it correctly displays item names, quantities, and subtotals for multiple items.
            *   Assert it displays the correct overall total.
        *   State management (Zustand store actions or RTK reducers):
            *   Test `addItem` action: initial state -> add item -> verify new state.
            *   Test `incrementQuantity` action: initial state -> add item -> increment -> verify new state.
        *   **Integration Test:** Simulate adding a product via `ProductItem` and verify `ShoppingCart` display updates as expected.
    *   **Acceptance Criteria:**
        *   A reasonable suite of tests covering critical components and logic is written (aim for >60-70% meaningful coverage of the cart functionality).
        *   Tests use RTL queries and event simulation effectively.
        *   Mocks are used appropriately (e.g., for the `dispatch` function or store selectors if testing components in isolation).
        *   Tests are clear, readable, and test user-facing behavior. 