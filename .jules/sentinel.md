## 2024-05-18 - [CSP Verification in Headless Browsers]
**Vulnerability:** A Content Security Policy was applied, but we needed to verify it without breaking dev functionality.
**Learning:** Using a python Playwright script to launch chromium, attach a `console` event handler, and check for "Content Security Policy" messages in `msg.text` or `msg.type == "error"` is an effective and robust way to detect CSP violations that would otherwise only be seen in a real browser developer console.
**Prevention:** Incorporate automated console monitoring via headless browsers for any PR that adjusts CSP or adds new external resources.
