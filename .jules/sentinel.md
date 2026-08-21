## 2026-08-21 - [CSP Enhancements]
**Vulnerability:** Weak CSP in Vite environment.
**Learning:** Vite uses `unsafe-inline` for CSS injection in development. In production it's easier to restrict, but one shouldn't accidentally pollute PRs with unasked-for files like lockfiles!
**Prevention:** Make sure you don't commit unexpected files (like `pnpm-lock.yaml` which was generated on `pnpm install` but shouldn't be added if it wasn't there initially or shouldn't be touched). Always tighten CSP `script-src` by removing `unsafe-eval` unless necessary.
