import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NebulaCoin — Futuristic Memecoin for a Transparent Memeverse",
  description: "NebulaCoin blends meme culture with a sleek, futuristic aesthetic. Clear buy steps, transparent tokenomics, and a community-driven roadmap for everyone.",
  keywords: [
    "memecoin",
    "futuristic",
    "nebula",
    "cryptocurrency",
    "buy nebulacoin",
    "tokenomics",
    "roadmap",
    "community",
    "wallet",
    "dex",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NebulaCoin — Futuristic Memecoin for a Transparent Memeverse",
    description: "NebulaCoin blends meme culture with a sleek, futuristic aesthetic. Clear buy steps, transparent tokenomics, and a community-driven roadmap for everyone.",
    type: "website",
    url: "/",
    siteName: "NebulaCoin",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/minimal-vector-mascot-for-nebulacoin-wai-1759147782807-f2e1416e.jpg", width: 1200, height: 630, alt: "NebulaCoin Hero Image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NebulaCoin — Futuristic Memecoin for a Transparent Memeverse",
    description: "NebulaCoin blends meme culture with a sleek, futuristic aesthetic. Clear buy steps, transparent tokenomics, and a community-driven roadmap for everyone.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/minimal-vector-mascot-for-nebulacoin-wai-1759147782807-f2e1416e.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}
