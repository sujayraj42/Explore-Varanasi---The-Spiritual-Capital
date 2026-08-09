## 2024-05-18 - Missing Content Security Policy (CSP)
**Vulnerability:** The application lacks a Content Security Policy (CSP) header or meta tag.
**Learning:** CSP is a crucial defense-in-depth mechanism to prevent Cross-Site Scripting (XSS) and other data injection attacks by explicitly defining which dynamic resources are allowed to load.
**Prevention:** Always add a strict CSP to the main `index.html` or server configuration to limit where scripts, styles, and other resources can be loaded from.
