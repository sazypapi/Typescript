import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Containers from "@/components/global/Containers";
import Providers from "./Providers";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Storefront",
  description: "A nifty store built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <Containers className="py-20">{children}</Containers>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
