import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "PrimeStream IPTV — Premium IPTV Subscriptions",
		template: "%s — PrimeStream IPTV",
	},
	description:
		"Premium, stable IPTV with global channels, sports, movies and series. Start streaming in minutes.",
	metadataBase: new URL("https://www.primestream.example"),
	openGraph: {
		title: "PrimeStream IPTV — Premium IPTV Subscriptions",
		description:
			"Premium, stable IPTV with global channels, sports, movies and series.",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "PrimeStream IPTV — Premium IPTV Subscriptions",
		description:
			"Premium, stable IPTV with global channels, sports, movies and series.",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-background to-black/[.02] dark:to-white/[.04]`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
