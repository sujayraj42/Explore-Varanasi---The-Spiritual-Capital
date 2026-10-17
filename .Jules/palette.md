## 2024-10-24 - Added aria-expanded and inert to mobile menu
**Learning:** Off-canvas menus that are visually hidden via transform or opacity can still trap focus or allow screen readers to access them. Using the HTML `inert` attribute is an elegant, native way to completely disable user interaction and screen reader access for off-screen elements.
**Action:** Always check off-canvas or hidden UI elements (like mobile menus, modals, tooltips) to ensure they use `inert` or `aria-hidden`/`display: none` when closed, to avoid keyboard focus traps and confusing screen reader experiences.
