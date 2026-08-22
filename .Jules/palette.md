## 2025-02-23 - Hamburger Menu Accessibility
**Learning:** The mobile hamburger menu lacked proper ARIA attributes to indicate its expanded state to screen readers and lacked keyboard support to easily close the menu.
**Action:** Ensure all future custom dropdown/mobile menus include `aria-expanded`, `aria-controls`, and `Escape` key listeners for accessibility and proper keyboard navigation UX.
