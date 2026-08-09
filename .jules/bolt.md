## 2024-08-09 - Scroll Event State Thrashing
**Learning:** React components (like Hero and Navbar) tracking raw scroll coordinates via hooks caused continuous full-tree re-renders on every scroll tick.
**Action:** Always isolate scroll-bound state updates to the smallest possible leaf component (e.g., extracting ParallaxBackground), or derive boolean threshold states (e.g., useIsScrolled instead of useScrollPosition) to leverage React state bailout. Always throttle scroll event state updates using requestAnimationFrame.
