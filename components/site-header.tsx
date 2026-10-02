"use client";

import Link from "next/link";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { assetPath } from "@/data/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function navState(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined;
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <Image className="brand-logo" src={assetPath("/maulanatranslogo.png")} alt="Maulana Transport" width={45} height={45} priority />
          <span className="brand-copy"><span className="brand-name">Maulana Transport</span><span className="brand-meta">Jogja Car Rental Service</span></span>
        </Link>
        <nav className="nav-links" aria-label="Navigasi utama">
          <Link href="/armada" aria-current={navState("/armada")}>Armada</Link>
          <Link href="/layanan" aria-current={navState("/layanan")}>Layanan</Link>
          <Link href="/kontak" aria-current={navState("/kontak")}>Kontak</Link>
        </nav>
        <Link className="button button-primary" href="/pesan">Pesan sekarang</Link>
        <button className="mobile-menu" aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <List size={21} />}
        </button>
      </div>
      {open && <nav className="mobile-nav" id="mobile-navigation" aria-label="Menu mobile"><Link href="/armada" aria-current={navState("/armada")} onClick={() => setOpen(false)}>Armada</Link><Link href="/layanan" aria-current={navState("/layanan")} onClick={() => setOpen(false)}>Layanan</Link><Link href="/kontak" aria-current={navState("/kontak")} onClick={() => setOpen(false)}>Kontak</Link><Link href="/pesan" onClick={() => setOpen(false)}>Pesan sekarang</Link></nav>}
    </header>
  );
}
