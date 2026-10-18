## 2024-05-24 - React Scroll Event Re-renders
**Learning:** Returning raw scroll position values (like `scrollY`) from custom hooks causes the consuming component to re-render on every scroll tick.
**Action:** Always return a computed boolean value (e.g. `isPastThreshold`) from scroll-based hooks when possible, so React can bail out of unnecessary render updates. Rename hooks to reflect their boolean nature, e.g. `useScrollThreshold` instead of `useScrollPosition`.
