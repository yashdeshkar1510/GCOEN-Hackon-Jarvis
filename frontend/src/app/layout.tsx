import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import ConditionalNavbar from "@/components/ConditionalNavbar";

export const metadata: Metadata = {
  title: "AI Emergency Triage Assistant",
  description: "AI-powered Emergency Triage Assistant for hospitals. Evaluate patients quickly and determine urgency of treatment.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <AppProvider>
          <ConditionalNavbar />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
