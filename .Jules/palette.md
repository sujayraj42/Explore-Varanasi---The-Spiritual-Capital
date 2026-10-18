## 2025-02-14 - Fix Hidden Mobile Menu Keyboard Focus Trap
**Learning:** Using `opacity` and `transform` to hide mobile menus visually leaves the links inside it focusable via keyboard, creating a 'ghost' tab order.
**Action:** Always use the `inert` attribute (e.g. `inert={!isOpen ? '' : undefined}`) when dynamically hiding complex content, as it fully removes it from accessibility and focus trees without breaking CSS transitions.
