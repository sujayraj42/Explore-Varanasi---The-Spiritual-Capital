## 2023-10-20 - Avoid Raw Scroll State for Simple Thresholds
**Learning:** Returning a raw `scrollY` integer from a custom hook (`useScrollPosition`) causes the consuming component (like `Navbar`) to re-render on *every single frame* during a scroll event, even if the visual outcome only changes at a specific threshold (e.g., `scrollY > 80`).
**Action:** Always prefer returning threshold-based boolean states from scroll listeners. React will automatically bail out of re-rendering if the boolean state value (`true` or `false`) hasn't changed.
