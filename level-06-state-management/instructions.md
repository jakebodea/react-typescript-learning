# Level 6: Introduction to State Management (Zustand or Redux Toolkit)

*   **Level Title:** Managing Application State at Scale
*   **Learning Objectives:**
    *   Understand the challenges of prop drilling and the need for a dedicated global state management solution.
    *   Learn the core concepts and usage of either Zustand (simpler) or Redux Toolkit (more comprehensive).
*   **Key Topics/Concepts Covered:**
    *   Problems with `useState` and `useContext` for complex global state.
    *   **Zustand:**
        *   Creating a store (`create`).
        *   Defining state and actions.
        *   Accessing state and actions in components.
        *   TypeScript integration with Zustand.
    *   **OR Redux Toolkit (RTK):**
        *   `configureStore`.
        *   `createSlice` (reducers, actions, action creators).
        *   `useSelector` for reading state, `useDispatch` for dispatching actions.
        *   Typing state, actions, reducers with TypeScript (`RootState`, `AppDispatch`).
*   **Hands-on Project: "Shopping Cart with Zustand/Redux Toolkit"**
    *   **Description:** Refactor or build a simple e-commerce product listing page where users can add products to a shopping cart. The cart state (items, quantities, total price) should be managed by Zustand or Redux Toolkit.
    *   **Features:**
        1.  Display a list of products (mock data is fine, e.g., `{ id: string, name: string, price: number }`).
        2.  Each product has an "Add to Cart" button.
        3.  A separate section/component displays the cart contents (product name, quantity, price per item, subtotal for item).
        4.  Display the total price of all items in the cart.
    *   **Challenge:** Ensure all state interactions are type-safe. If using RTK, define slices properly. If Zustand, structure the store clearly.
*   **Evaluation Criteria:**
    *   **Expected Output:** Users can add products to a cart, and the cart display (items, quantities, total) updates correctly, managed by the chosen state library.
    *   **Manual Testing Steps:**
        1.  Verify product list is displayed.
        2.  Click "Add to Cart" for a product. Verify it appears in the cart section with quantity 1 and correct price. Verify total price updates.
        3.  Click "Add to Cart" for the same product again. Verify its quantity in the cart increases and prices update.
        4.  Add a different product to the cart. Verify it's added as a new item and prices update.
    *   **Acceptance Criteria:**
        *   A global state management library (Zustand or Redux Toolkit) is implemented.
        *   The store/slices are defined with clear state structure, actions (e.g., `addProductToCart`, `incrementQuantity`), and selectors (if applicable).
        *   All aspects of the state management (store, actions, selectors, component interactions) are strongly typed using TypeScript.
        *   Components read from and dispatch actions to the store correctly.
        *   The cart accurately reflects added items, quantities, and total price. 