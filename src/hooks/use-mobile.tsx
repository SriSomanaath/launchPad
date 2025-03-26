import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // ✅ Prevents SSR issues

    const onResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    onResize(); // Set initial state
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobile;
}
