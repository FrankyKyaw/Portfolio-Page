"use client";
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "next-themes";  
import { Footer } from "@/components/Footer";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-[#001C30] bg-slate-50">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}

