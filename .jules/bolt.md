## 2026-08-08 - [Scroll Hook Re-rendering bottleneck]
**Learning:** Tracking raw scroll position (like `window.scrollY`) in a React hook state just to check a threshold causes severe performance degradation, as it triggers a re-render on every single scroll animation frame.
**Action:** Return a boolean from the scroll hook instead of a raw number. React's state bailout will prevent re-renders as long as the boolean doesn't change, turning 100s of scroll re-renders into just 2.
