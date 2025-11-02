import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Supergrow - Elevate Your LinkedIn Presence",
  description: "AI-powered SaaS tool for LinkedIn creators. Grow your audience, enhance engagement, and build your personal brand.",
  keywords: "LinkedIn, SaaS, content creation, personal brand, social media growth",
  openGraph: {
    title: "Supergrow - Elevate Your LinkedIn Presence",
    description: "AI-powered SaaS tool for LinkedIn creators",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-dark-bg text-text-primary">
        {children}
      </body>
    </html>
  );
}
