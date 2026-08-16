## 2026-08-16 - [Navbar Scroll Thrashing]
**Learning:** The Navbar component re-rendered on every pixel scrolled because it bound an exact numeric `scrollY` position from a hook, even though it only cared about a boolean `> 80px` threshold. This bypasses Reacts Object.is equality check for state updates.
**Action:** Move threshold boolean evaluation directly into the scroll event listener so React can bailout of re-renders automatically.
