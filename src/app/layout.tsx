import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "True Fliers Auction",
  description: "Auction tool for fantasy football",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <StoreProvider>
      <ClerkProvider>
        <html lang="en" className={`${GeistSans.variable}`}>
          <body>{children}</body>
        </html>
      </ClerkProvider>
    </StoreProvider>
  );
}
