import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { Toaster } from "sonner";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Car Rental website created with Next.js",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.variable}`}>
        <main>{children}</main>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
