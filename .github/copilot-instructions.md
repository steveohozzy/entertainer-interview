# Copilot Instructions for AI Agents

## Project Overview
This is a React web application bootstrapped with Create React App, using Redux Toolkit for state management and React Router for routing. The project is organized by feature, with major domains like cart, wishlist, and account having their own reducers and directories. Storybook is used for component development and documentation.

## Key Architectural Patterns
- **State Management:** Redux Toolkit (`src/store/`) is the primary state management solution. The `rootReducer` combines `cart`, `wishlist`, and `account` reducers. Contexts (e.g., `cartContext.js`) are also used for local state in some areas.
- **Component Structure:** Components are grouped by feature in `src/components/`. Each subfolder typically contains a single component and its styles.
- **Routing:** Route modules are in `src/routes/`, organized by feature or page (e.g., `cart/`, `checkout/`, `home/`).
- **Utilities:** Shared logic is in `src/utils/`.

## Developer Workflows
- **Start Dev Server:** `npm start` (runs on http://localhost:3000)
- **Run Tests:** `npm test` (Jest, with React Testing Library)
- **Build for Production:** `npm run build`
- **Storybook:**
  - Start: `npm run storybook`
  - Build: `npm run build-storybook`

## Project-Specific Conventions
- **Redux:** Use Redux Toolkit's `configureStore` and `combineReducers`. Avoid direct mutation; use immutable patterns.
- **Component Organization:** Place new components in a feature-named subdirectory under `src/components/`.
- **Testing:** Tests live alongside components or in `src/` as `.test.js` files. Use React Testing Library patterns.
- **Styling:** Tailwind CSS is configured via `tailwind.config.js` and `postcss.config.js`.
- **External Libraries:**
  - Routing: `react-router-dom`
  - State: `@reduxjs/toolkit`, `react-redux`
  - UI: `lucide-react`, `swiper`, `tailwindcss`

## Integration Points
- **Redux Store:** Extend `src/store/rootReducer.js` and `src/store/store.js` for new state domains.
- **Context:** Use React Context for local, non-global state (see `src/contexts/cartContext.js`).
- **Storybook:** Add stories in `src/stories/` for new components.

## Examples
- To add a new feature with state, create a reducer in `src/store/[feature]/`, add it to `rootReducer.js`, and connect via `useSelector`/`useDispatch`.
- For a new page, add a folder in `src/routes/` and register the route in the main router.

## References
- [README.md](../README.md) for basic scripts and Create React App info
- [src/store/store.js](../src/store/store.js) for store setup
- [src/contexts/cartContext.js](../src/contexts/cartContext.js) for context usage

---
If any conventions or workflows are unclear, please request clarification or examples from the maintainers.
