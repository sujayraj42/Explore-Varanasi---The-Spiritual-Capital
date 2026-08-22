## 2024-10-24 - Avoid returning raw scroll values from custom hooks
**Learning:** Returning a rapidly changing value like `scrollY` from a custom hook (`useScrollPosition`) causes the component using it (like `Navbar`) to re-render on every scroll event, even if the visual state (like `isScrolled > 80`) hasn't changed. This is a common performance anti-pattern in React.
**Action:** Refactor such hooks to return derived, slower-changing state (e.g., a boolean `isPastThreshold` using `useScrollThreshold`) so React can bail out of unnecessary re-renders when the derived state doesn't change.
