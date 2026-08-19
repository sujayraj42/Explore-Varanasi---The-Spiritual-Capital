## 2026-08-19 - Added Content Security Policy
**Vulnerability:** Missing Content Security Policy (CSP) headers leaving the app potentially vulnerable to Cross-Site Scripting (XSS) and data injection attacks.
**Learning:** The application lacked basic defense-in-depth security headers, specifically CSP.
**Prevention:** Ensure a strict CSP is included in the base HTML template for all new projects.
