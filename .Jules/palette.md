## 2024-05-18 - Mobile Menu Keyboard Accessibility
**Learning:** Components visually hidden via `opacity: 0` and `pointer-events: none` still remain in the document flow and receive keyboard focus, which causes screen readers to read invisible content and breaks keyboard navigation.
**Action:** When animating the visibility of menus or overlays, always include `visibility: hidden` (or `inert`/`display: none`) when closed, along with `aria-hidden` and `aria-expanded` attributes to ensure robust keyboard and screen reader accessibility.
