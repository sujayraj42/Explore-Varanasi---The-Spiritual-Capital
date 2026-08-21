## 2024-05-17 - Avoid Raw Scroll Positions in Custom Hooks
**Learning:** Returning a raw integer scroll position (e.g., `scrollY`) from a custom hook like `useScrollPosition` causes the consuming component to re-render on every scroll event/frame. This causes enormous unnecessary layout thrashing.
**Action:** When components only care if a threshold has been crossed (like for a sticky header), modify the custom hook to take a `threshold` parameter and return a boolean `isPastThreshold` state. This collapses ~100+ re-renders down to just 1 or 2 per scroll segment.
