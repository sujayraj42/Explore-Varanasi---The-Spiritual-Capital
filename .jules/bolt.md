## 2024-08-14 - Decoupling scroll events from React state
**Learning:** High-frequency scroll events tied to React state via hooks (e.g. `useScrollPosition`, `useParallax`) cause significant main-thread blocking by triggering continuous re-renders. The `Hero` and `Navbar` components were deeply affected by this pattern.
**Action:** Always decouple high-frequency scroll listeners from React state by returning refs and mutating DOM properties directly, or filtering updates by applying threshold-based booleans instead of raw scroll offsets.
