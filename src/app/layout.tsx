import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B1528",
};

export const metadata: Metadata = {
  title: "Mahjabin Alif Lamiya | Software Developer & CSE Student",
  description:
    "Portfolio of Mahjabin Alif Lamiya — Computer Science & Engineering undergraduate focused on full-stack and AI-integrated web development (Next.js, MongoDB, Gemini API).",
  keywords: [
    "Mahjabin Alif Lamiya",
    "Software Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "AI Web Applications",
    "Chittagong Independent University",
    "CSE Portfolio",
  ],
  authors: [{ name: "Mahjabin Alif Lamiya" }],
  openGraph: {
    title: "Mahjabin Alif Lamiya | Software Developer & CSE Student",
    description:
      "CSE undergraduate focused on full-stack and AI-integrated web development (Next.js, MongoDB, Gemini API).",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white text-navy-950 antialiased`}>
        {children}
      </body>
    </html>
  );
}
