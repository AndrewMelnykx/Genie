import type { Metadata } from "next";
import localFont from "next/font/local";

import { ClerkProvider } from "@clerk/nextjs";
import { StoreProvider } from "@/components/providers/store";
import { ModalProvider } from "@/components/modals/provider";
import { ToasterProvider } from "@/components/providers/toaster";

import { CrispProvider } from "@/components/crisp/provider";
import { ThemeWrapper } from "@/components/providers/theme";

import "./globals.css";
import React from "react";

const papyrusSans = localFont({
  src: "../assets/fonts/papyrus/Papyrus_0.otf",
  variable: "--font-papyrus",
  weight: "100 900",
});
const mayaSans = localFont({
  src: "../assets/fonts/maya/CfCivilisationMayaRegular-rp8A.ttf",
  variable: "--font-maya",
  weight: "100 900",
});
const hidiyaSans = localFont({
  src: "../assets/fonts/hidiya/hidayatullah DEMO.ttf",
  variable: "--font-hidiya",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Djinni",
  description: "AI Platform",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider>
//       <StoreProvider>
//         <html lang="en">
//           <CrispProvider />
//           <body
//             className={` ${papyrusSans.variable} ${mayaSans.variable} ${hidiyaSans.variable} antialiased`}
//           >
//             <ThemeWrapper>
//               <ModalProvider />
//               <ToasterProvider />
//               {children}
//             </ThemeWrapper>
//           </body>
//         </html>
//       </StoreProvider>
//     </ClerkProvider>
//   );
// }
// app/layout.tsx

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClerkProvider>
          <StoreProvider>
            <CrispProvider />
            <ThemeWrapper>
              <ModalProvider />
              <ToasterProvider />
              {children}
            </ThemeWrapper>
          </StoreProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
