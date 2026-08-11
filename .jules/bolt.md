## 2024-05-17 - React State Bailout with Scroll Listeners
**Learning:** Returning a raw integer (like `window.scrollY`) from a scroll listener hook causes React to schedule a re-render for consuming components on every scroll frame (60+ times/sec).
**Action:** Always evaluate thresholds/conditions *inside* the hook and return booleans (or discrete values). React's state bailout will prevent re-renders unless the boolean actually changes, significantly improving scroll performance.
