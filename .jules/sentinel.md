## 2024-05-16 - Add Content Security Policy (CSP)
**Vulnerability:** The application was missing a Content-Security-Policy (CSP) header/meta tag.
**Learning:** For a static Vite application without a backend, CSP can be enforced using a `<meta>` tag in `index.html`. The policy requires `'unsafe-inline'` for `script-src` and `style-src` to support Vite's build process and development server, and `connect-src` must allow `ws:` and `wss:` for Hot Module Replacement (HMR). Additionally, the `frame-ancestors` directive is ignored in `<meta>` tags and should not be included.
**Prevention:** Always ensure a baseline CSP is configured for frontend applications, even static ones, to mitigate XSS risks and provide defense-in-depth.
