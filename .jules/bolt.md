## 2026-08-18 - [Boolean Scroll State Optimization]
**Learning:** Returning raw scrollY integer positions from hooks (like useScrollPosition) causes parent components (like Navbar) to re-render hundreds of times during normal scrolling, devastating scroll performance and blocking the main thread.
**Action:** Always refactor scroll tracking to return boolean states (e.g., isScrolled) based on a threshold instead of continuous coordinate values to minimize React rendering cycles.
