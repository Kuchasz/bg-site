import "~/styles/globals.css";

import { type Metadata } from "next";
import { Funnel_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "Bartosz Grubka - Trener Triathlonu",
  description: "Trenuj mądrze i po cichu, a efekty niech robią hałas. Plany treningowe dla kolarstwa, biegania i triathlonu.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const funnelDisplay = Funnel_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-funnel-display",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${funnelDisplay.variable} scroll-smooth`}>
      <body className="font-sans antialiased" style={{ fontFamily: 'var(--font-funnel-display)' }}>{children}</body>
    </html>
  );
}
