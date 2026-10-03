import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { QuickBooking } from "@/components/quick-booking";
import { HeroReviews } from "@/components/hero-reviews";
import { assetPath, fleet, services } from "@/data/site-data";

export default function HomePage() {
  return <>
    <section className="hero">
      <div className="hero-visual">
        <Image className="hero-image" src={assetPath("/yogyakarta-nights.png")} alt="" fill priority sizes="(max-width: 680px) 100vw, 57vw" />
        <div className="hero-scrim" />
        <HeroReviews />
      </div>
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-meta-line"><span>01 / Maulana Transport</span><span>JOGJA CAR RENTAL SERVICE</span></div>
          <div className="eyebrow">Transport yang terasa ringan</div>
          <h1 className="display">Berangkat dengan tenang dari Jogja.</h1>
          <p>Rental mobil dengan driver untuk airport transfer, city tour, perjalanan dinas, dan rute luar kota.</p>
          <div className="hero-actions"><Link className="button button-primary" href="/pesan">Pesan kendaraan <ArrowRight size={17} weight="bold" /></Link><Link className="button button-ghost" href="/armada">Lihat armada</Link></div>
          <div className="hero-stamp"><span>Driver profesional</span><span>Rute fleksibel</span><span>Konfirmasi cepat</span></div>
        </div>
      </div>
    </section>
    <QuickBooking />
    <section className="section services-section"><div className="container"><div className="section-heading"><div><div className="eyebrow">Satu perjalanan, banyak cara</div><h2 className="title">Pilih layanan yang paling pas.</h2></div><p className="body-copy">Dari satu penjemputan sampai satu hari penuh menjelajah Jogja, kami bantu merapikan detailnya.</p></div><div className="service-grid">{services.map((service, index) => <Link className={`service-card ${index === 0 ? "service-card-featured" : ""} service-card-${index + 1}`} href={`/layanan/${service.slug}`} key={service.slug}><span className="service-number">{service.index}</span><span className="service-card-corner"><ArrowUpRight size={18} weight="bold" /></span><h3>{service.name}</h3><p>{service.description}</p><span className="arrow-link">Pelajari layanan <ArrowRight size={15} weight="bold" /></span></Link>)}</div></div></section>
    <section className="section feature-band"><div className="container feature-layout"><div><div className="eyebrow">Kenapa Maulana</div><h2 className="title">Lebih banyak waktu untuk tujuan Anda.</h2><p className="body-copy">Kami mengurus kendaraan, rute, dan koordinasi supaya perjalanan Anda tetap fokus pada orang dan tempat yang penting.</p><div className="feature-points"><div className="feature-point"><strong>01</strong><span>Driver lokal yang tahu ritme jalan Jogja.</span></div><div className="feature-point"><strong>02</strong><span>Pilihan kendaraan dari city car sampai premium.</span></div><div className="feature-point"><strong>03</strong><span>Detail perjalanan dikonfirmasi langsung lewat WhatsApp.</span></div></div></div><div className="image-frame"><Image src={assetPath("/rainy-night-cars.png")} alt="Mobil di malam hari saat hujan di Yogyakarta" fill sizes="(max-width: 1000px) 100vw, 55vw" /><span className="image-label">Perjalanan yang rapi dimulai dari kendaraan yang tepat.</span></div></div></section>
    <section className="section fleet-preview"><div className="container"><div className="section-heading"><div><div className="eyebrow">Armada pilihan</div><h2 className="title">Kendaraan untuk setiap ritme perjalanan.</h2></div><Link className="arrow-link" href="/armada">Lihat semua armada <ArrowRight size={15} weight="bold" /></Link></div><div className="fleet-grid">{fleet.slice(0, 3).map((vehicle, index) => <Link className={`vehicle-card vehicle-card-${index + 1}`} href={`/armada/${vehicle.slug}`} key={vehicle.slug}><div className="vehicle-image"><Image src={vehicle.image} alt={vehicle.imageAlt} fill sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 35vw" /></div><div className="vehicle-card-content"><span className="vehicle-tag">{vehicle.category}</span><h3>{vehicle.name}</h3><div className="vehicle-meta"><span>{vehicle.seats}</span><span>{vehicle.luggage}</span></div><div className="vehicle-rate">Estimasi sewa<span>{vehicle.rate}</span></div><span className="vehicle-link">Lihat detail <ArrowRight size={15} weight="bold" /></span></div></Link>)}</div></div></section>
    <section className="section quote-section"><div className="container quote-layout"><div className="principle-intro"><span className="eyebrow">Prinsip layanan</span><span className="quote-mark">“</span><span className="principle-index">01 / 03</span></div><div><blockquote className="quote">Perjalanan yang baik dimulai dari detail yang jelas.</blockquote><span className="quote-attribution">Maulana Transport · Rental mobil dengan driver di Jogja</span></div></div></section>
    <section className="section-sm cta-section"><div className="container"><div className="cta-band"><div className="cta-glow" /><div className="cta-layout"><div><span className="eyebrow">Langkah berikutnya</span><h2>Sudah tahu mau ke mana?</h2></div><Link className="button" href="/pesan">Mulai reservasi <ArrowRight size={17} weight="bold" /></Link></div></div></div></section>
  </>;
}
