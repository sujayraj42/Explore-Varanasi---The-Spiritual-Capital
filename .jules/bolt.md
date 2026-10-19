
## 2024-05-01 - Avoid Raw Scroll Positions in React Hooks
**Learning:** Returning raw `window.scrollY` from a custom hook like `useScrollPosition` causes the consuming component (e.g., `Navbar`) to re-render continuously on every frame during a scroll. This can significantly degrade UI performance on scroll-heavy pages, especially since `requestAnimationFrame` alone doesn't stop React from attempting to reconcile the tree on every scroll event.
**Action:** Always prefer returning a threshold-based boolean state (e.g., `isScrolled > threshold`) from scroll hooks instead of raw scroll values. This restricts component re-renders to only occur when the boundary condition changes (e.g., passing the threshold), reducing re-renders from hundreds per scroll to just two.
