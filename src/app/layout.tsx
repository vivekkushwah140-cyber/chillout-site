import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Chill Out! Event Management | Corporate Events, UK · Europe · USA",
  description:
    "Corporate event management agency with 20+ years delivering conferences, executive dinners, incentive trips, roadshows and gala dinners worldwide.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${jakarta.variable} antialiased`}>
      <body className="min-h-full bg-white font-[family-name:var(--font-display)] text-[var(--co-ink)]">{children}</body>
    </html>
  );
}
