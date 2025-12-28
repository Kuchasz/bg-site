import "~/styles/globals.css";

import { type Metadata } from "next";
import { Funnel_Display, Noto_Color_Emoji } from "next/font/google";

export const metadata: Metadata = {
  title: "Bartosz Grubka – opieka trenerska",
  description: "Trenuj mądrze i po cichu, a efekty niech robią hałas. Plany treningowe dla kolarstwa, biegania i triathlonu.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const funnelDisplay = Funnel_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-funnel-display",
});

const notoColorEmoji = Noto_Color_Emoji({
  weight: "400",
  subsets: ["emoji"],
  variable: "--font-noto-emoji",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${funnelDisplay.variable} ${notoColorEmoji.variable} scroll-smooth`}>
      <body className="font-sans antialiased" style={{ fontFamily: 'var(--font-funnel-display)' }}>{children}</body>
    </html>
  );
}
