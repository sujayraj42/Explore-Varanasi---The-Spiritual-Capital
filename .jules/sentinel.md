## 2024-10-24 - Missing Content Security Policy
**Vulnerability:** The application was missing a Content Security Policy (CSP), leaving it potentially vulnerable to XSS and data injection attacks if malicious scripts were somehow injected.
**Learning:** Even static sites without backend connections should have defense-in-depth measures like CSP to restrict the execution of unauthorized scripts and loading of unauthorized resources.
**Prevention:** Ensure that all new web applications start with a restrictive CSP template in `index.html` as a baseline security measure.
