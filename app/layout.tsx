import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maulana Transport Jogja | Rental Mobil dengan Driver",
  description: "Sewa mobil dengan driver, city tour, perjalanan dinas, dan antar jemput bandara di Yogyakarta.",
  icons: {
    icon: "/maulanatranslogo.png",
    shortcut: "/maulanatranslogo.png",
    apple: "/maulanatranslogo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={spaceGrotesk.variable}>
      <body>
        <div className="site-shell">
          <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
