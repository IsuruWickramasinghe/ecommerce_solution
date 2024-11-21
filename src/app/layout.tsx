import type { Metadata } from "next";

import { headers } from "next/headers";
import localFont from "next/font/local";
import { Chakra_Petch } from "next/font/google";


import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-chakra",
});


export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const title = headersList.get('x-seo-title') || "E-commerce Solution";
  const description = headersList.get('x-seo-description') || "A comprehensive e-commerce solution built with Next.js";

  return {
    title,
    description,
    keywords: "e-commerce, online store, shopping, Next.js, React",
    authors: [{ name: "Your Company Name" }],
    robots: "index, follow",
    openGraph: {
      title,
      description,
      url: "https://www.ecommerce-solution.com",
      type: "website",
      images: [
        {
          url: "https://www.ecommerce-solution.com/og-image.jpg",
          width: 800,
          height: 600,
          alt: "E-commerce Solution",
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${chakra.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
