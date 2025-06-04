"use client"; // Ensure this is at the top

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>; // Avoid SSR issues

  return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
}
