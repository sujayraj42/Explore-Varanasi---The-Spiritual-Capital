## 2024-08-13 - [Invisible Tab Traps in Animated Menus]
**Learning:** Visually hiding a menu using only `opacity: 0` and `pointer-events: none` leaves its child links in the keyboard focus sequence, creating an invisible tab trap for screen reader and keyboard users.
**Action:** When animating a menu's visibility, ensure off-screen or hidden items are removed from the tab order by applying `tabIndex={-1}` dynamically, along with proper `aria-hidden` and `aria-expanded` attributes on the container and trigger.
