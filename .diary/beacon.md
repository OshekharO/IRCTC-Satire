## 2026-09-11 - Next.js App Router SSR JSON-LD Injection Pattern for Client Component Pages

**Learning:** In Next.js 14 App Router, pages marked with `'use client'` cannot export static `metadata` objects. While metadata can be defined in a Server Component `layout.tsx`, injecting page-specific JSON-LD schema tags inside the route's Server Component `layout.tsx` guarantees that search engine crawlers receive the structured data in the initial static HTML payload without waiting for client-side JavaScript hydration.
**Action:** For route pages that require `'use client'`, define page metadata and render route-specific JSON-LD `<script type="application/ld+json">` tags within the Server Component `layout.tsx` for that route.
