import React from "react";

import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";

import { ToastProvider } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import AuthProvider from "@/lib/utils/AuthProvider";

const bricolageGrotesque = Bricolage_Grotesque({ 
  subsets: ["latin"], 
  weight: ["200", "300", "400", "500", "600", "700", "800"] 
});

export const metadata: Metadata = {
  title: "Launch Pad",
  description: "",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <ToastProvider>
        <body className={`${bricolageGrotesque.className} min-h-screen`}>
          <AuthProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          <Toaster />
          </AuthProvider>
        </body>
      </ToastProvider>
    </html>
  );
}
