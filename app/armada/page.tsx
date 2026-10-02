import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { fleet } from "@/data/site-data";

export const metadata = { title: "Armada | Maulana Transport Jogja", description: "Lihat pilihan armada Maulana Transport untuk perjalanan di Yogyakarta." };

export default function FleetPage() {
  return <><section className="page-hero"><div className="container"><div className="eyebrow">Armada Maulana Transport</div><h1 className="display">Kendaraan yang mengikuti rencana Anda.</h1><p>Pilih city car untuk mobilitas praktis, MPV untuk keluarga, atau kendaraan premium untuk perjalanan yang lebih representatif.</p><div className="page-hero-meta"><span>9 pilihan kendaraan</span><span>Dengan driver profesional</span><span>Jogja dan luar kota</span></div></div></section><section className="section"><div className="container"><div className="catalog-toolbar"><p>Menampilkan {fleet.length} kendaraan pilihan</p><Link className="arrow-link" href="/pesan">Butuh bantuan memilih? Chat admin <ArrowRight size={15} weight="bold" /></Link></div><div className="catalog-grid">{fleet.map((vehicle) => <Link className="vehicle-card" href={`/armada/${vehicle.slug}`} key={vehicle.slug}><div className="vehicle-image"><Image src={vehicle.image} alt={vehicle.imageAlt} fill sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw" /></div><div className="vehicle-card-content"><span className="vehicle-tag">{vehicle.category}</span><h3>{vehicle.name}</h3><div className="vehicle-meta"><span>{vehicle.seats}</span><span>{vehicle.luggage}</span></div><div className="vehicle-rate">Estimasi sewa<span>{vehicle.rate}</span></div><span className="vehicle-link">Lihat spesifikasi <ArrowRight size={15} weight="bold" /></span></div></Link>)}</div></div></section></>;
}
