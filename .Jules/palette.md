## 2024-08-12 - Added ARIA attributes and Escape key support to mobile menu
**Learning:** Mobile menus often lack proper ARIA attributes to link the toggle button with the menu container (`aria-expanded` and `aria-controls`), and lack keyboard accessibility to close the menu (e.g. `Escape` key).
**Action:** When working on navigation components, always verify `Escape` key support for open menus and ensure `aria-expanded` correctly reflects the menu state, linking via `aria-controls` to the container ID.
