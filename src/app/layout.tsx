import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Exaplar Landing - Professional Business Websites",
  description:
    "Custom-designed websites that establish your professional online presence and drive meaningful business growth. Mobile-responsive, SEO optimized, and built for results.",
  keywords:
    "professional websites, business website design, custom web development, mobile responsive, SEO optimization",
  authors: [{ name: "Business Pro" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Exaplar Landing - Professional Business Websites",
    description:
      "Custom-designed websites that establish your professional online presence and drive meaningful business growth.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exaplar Landing - Professional Business Websites",
    description: "Custom-designed websites that establish your professional online presence.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
