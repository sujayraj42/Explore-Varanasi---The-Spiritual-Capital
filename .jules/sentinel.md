## 2026-08-16 - [Missing Content Security Policy]
**Vulnerability:** Application lacked a Content Security Policy (CSP), making it more susceptible to Cross-Site Scripting (XSS) and data injection attacks.
**Learning:** For static Vite applications, a CSP meta tag is an effective way to implement this protection, but it must account for Vite's HMR needs (`ws:`, `'unsafe-inline'`) and external font requirements (Google Fonts).
**Prevention:** Include a tailored CSP tag in `index.html` by default for new frontend projects.
