## 2024-08-21 - Accessible hover overlays with :focus-within
**Learning:** Hover-only overlays in image galleries are completely inaccessible to keyboard users because hover events don't trigger on focus.
**Action:** When creating image overlays that appear on hover (`:hover`), always include the `:focus-within` pseudo-class on the wrapper, and ensure there is a focusable element (like a button or link) inside the overlay content so keyboard navigation can reveal it.
