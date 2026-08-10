## 2026-08-10 - Content Security Policy (CSP) added
**Vulnerability:** Missing Content Security Policy
**Learning:** Adding a CSP header as a meta tag is an effective defense-in-depth measure for static sites where backend headers are not configured. However, a strict CSP might break development environments using inline scripts/eval (e.g. Vite HMR).
**Prevention:** Include a pragmatic CSP early on, configuring 'unsafe-inline' / 'unsafe-eval' safely for local development and tightening for production later, as necessary.
