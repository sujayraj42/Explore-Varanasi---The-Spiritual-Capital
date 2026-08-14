## 2026-08-14 - Prevent Keyboard Traps in Hidden Menus
**Learning:** Using `opacity: 0` and `pointer-events: none` on mobile menus is not enough to prevent keyboard focus traps. Screen readers and keyboard users can still tab into hidden interactive elements, causing confusion.
**Action:** Always use `visibility: hidden` (or `display: none`, or `inert`) alongside opacity/pointer-events transitions for hidden menus, and ensure trigger buttons have correct `aria-expanded` and `aria-controls` attributes linking to the menu `id`.
