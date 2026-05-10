"use client";

import { useEffect } from "react";

export function FontLoader() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap';
    document.head.appendChild(link);
  }, []);

  return null;
}
