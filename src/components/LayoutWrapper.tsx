"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Footer } from "./footer";
import Navbar from "./navbar/navbar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const excludeLayoutPaths = ["/auth/login", "/home", "/certificates", "/latest-trends", "/free-courses", "/profile", "/applications-status", "/events", "/create-dashboard", "/recruiting-home", "/post-job", "/start-here", "/courses"];
  
  // Check if pathname starts with `/discussions`
  const isExcluded = excludeLayoutPaths.includes(pathname) || pathname.startsWith("/discussions");

  // Prevent hydration mismatch by ensuring client-only rendering
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return <>{children}</>; // Prevent mismatch

  return (
    <>
      {!isExcluded && <Navbar />}
      <main>{children}</main>
      {!isExcluded && <Footer />}
    </>
  );
}
