'use client';

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ErrorModal = dynamic(() => import("@/components/ErrorModal"), {
  ssr: false,
  loading: () => null,
});

export default function HomeAutoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('irctc-modal-seen')) return;

    const t = setTimeout(() => {
      setOpen(true);
      localStorage.setItem('irctc-modal-seen', 'true');
    }, 3000);

    return () => clearTimeout(t);
  }, []);

  return <ErrorModal isOpen={open} onClose={() => setOpen(false)} />;
}