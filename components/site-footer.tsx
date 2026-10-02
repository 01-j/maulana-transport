import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { assetPath } from "@/data/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand"><div className="brand"><Image className="brand-logo" src={assetPath("/maulanatranslogo.png")} alt="Maulana Transport" width={45} height={45} /><span className="brand-copy"><span className="brand-name">Maulana Transport</span><span className="brand-meta">JOGJA CAR RENTAL SERVICE</span></span></div><p className="footer-copy">Transportasi yang rapi, aman, dan mudah dipesan untuk perjalanan di Yogyakarta dan sekitarnya.</p></div>
        <div className="footer-col"><h4>Jelajahi</h4><Link href="/armada">Lihat armada</Link><Link href="/layanan">Semua layanan</Link><Link href="/kontak">FAQ & kontak</Link></div>
        <div className="footer-col"><h4>Layanan</h4><Link href="/layanan/sewa-mobil-driver">Rental + driver</Link><Link href="/layanan/paket-city-tour">City tour</Link><Link href="/layanan/antar-jemput-bandara">Antar jemput bandara</Link></div>
        <div className="footer-col"><h4>Hubungi</h4><a href="tel:+6281234567890">+62 812 3456 7890</a><a href="mailto:halo@maulanatransport.com">halo@maulanatransport.com</a><p>Yogyakarta, Indonesia</p></div>
      </div>
      <div className="container footer-bottom"><span>© 2024 Maulana Transport. All rights reserved.</span><span>Booking via WhatsApp <ArrowUpRight size={12} weight="bold" /></span></div>
    </footer>
  );
}
