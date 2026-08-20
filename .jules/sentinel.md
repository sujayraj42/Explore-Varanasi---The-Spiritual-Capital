## 2023-10-27 - Missing Content Security Policy
**Vulnerability:** No Content Security Policy (CSP) headers or meta tags were present in the application.
**Learning:** This is a common gap in basic Vite/React setups that leaves the application vulnerable to basic Cross-Site Scripting (XSS) or data injection attacks.
**Prevention:** Include a CSP meta tag in `index.html` allowing only 'self' and specifically required domains (like fonts and WebSockets for dev server).
