import type { Metadata } from "next";
import localFont from "next/font/local";

import { ClerkProvider } from "@clerk/nextjs";
import { StoreProvider } from "@/store/provider";
import { ModalProvider } from "@/components/modals/provider";

import "./globals.css";

const papyrusSans = localFont({
  src: "../assets/fonts/papyrus/Papyrus_0.otf",
  variable: "--font-papyrus",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Djinni",
  description: "AI Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <StoreProvider>
        <html lang="en">
          <body className={` ${papyrusSans.variable} antialiased`}>
            <ModalProvider />
            {children}
          </body>
        </html>
      </StoreProvider>
    </ClerkProvider>
  );
}
