"use client";
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "next-themes";  



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider enableSystem={true} attribute="class">
      <body className="dark:bg-stone-900">
        
          <Navbar/>
          {children}
        
      </body>
      </ThemeProvider>
    </html>
  );
}
