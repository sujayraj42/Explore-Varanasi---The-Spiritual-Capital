## 2023-10-24 - Accessible Animated Mobile Menus
**Learning:** Animated mobile menus (like those fading and sliding down) can still trap screen reader and keyboard focus on invisible links when closed.
**Action:** Always use the `inert` attribute conditionally (e.g. `inert={!isOpen ? "" : undefined}`) on animated hidden containers to cleanly manage accessibility state without disrupting CSS animations.
