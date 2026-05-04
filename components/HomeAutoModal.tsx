'use client';

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Lazy-load the error modal — it is never needed until 3 seconds after mount
// and only if the user keeps the page open, so there is no reason to include
// it in the initial JS bundle.
const ErrorModal = dynamic(() => import("@/components/ErrorModal"), {
  ssr: false,
  loading: () => null,
});

/**
 * Thin client island that auto-shows the satirical IRCTC error modal 3 seconds
 * after the home page mounts. Extracted from app/page.tsx so the home page
 * itself can remain a Server Component (better SSR, smaller initial JS).
 */
export default function HomeAutoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return <ErrorModal isOpen={open} onClose={() => setOpen(false)} />;
}
