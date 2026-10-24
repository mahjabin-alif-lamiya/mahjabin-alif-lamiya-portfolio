import type { Metadata, Viewport } from "next";
import { Inter, Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], display: "swap", variable: "--font-sora" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#050b1a" },
  ],
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
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${spaceGrotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
