import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { fleet } from "@/data/site-data";

export function generateStaticParams() { return fleet.map((vehicle) => ({ slug: vehicle.slug })); }

export default async function VehicleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = fleet.find((item) => item.slug === slug);
  if (!vehicle) notFound();
  return <><section className="section"><div className="container"><Link className="arrow-link" href="/armada"><ArrowLeft size={15} weight="bold" /> Kembali ke armada</Link><div className="detail-layout detail-layout-spaced"><div className="detail-image"><Image src={vehicle.image} alt={vehicle.imageAlt} fill sizes="(max-width: 1000px) 100vw, 58vw" /></div><div className="detail-copy"><div className="eyebrow">{vehicle.category}</div><h1>{vehicle.name}</h1><p className="body-copy">{vehicle.description}</p><div className="detail-specs"><div className="spec"><small>Kapasitas</small><strong>{vehicle.seats}</strong></div><div className="spec"><small>Bagasi</small><strong>{vehicle.luggage}</strong></div><div className="spec"><small>Estimasi</small><strong>{vehicle.rate}</strong></div><div className="spec"><small>Layanan</small><strong>Dengan driver</strong></div></div><ul className="service-points">{vehicle.features.map((feature) => <li key={feature}><Check size={14} weight="bold" /> {feature}</li>)}</ul><div className="detail-actions"><Link className="button button-primary" href={`/pesan?vehicle=${vehicle.name}`}>Pesan kendaraan <ArrowRight size={17} weight="bold" /></Link><Link className="button button-ghost" href="/kontak">Tanya admin</Link></div></div></div></div></section><section className="section-sm line-top"><div className="container"><div className="section-heading"><div><div className="eyebrow">Belum yakin?</div><h2 className="title">Kami bantu pilihkan kendaraan.</h2></div><Link className="button button-dark" href="/pesan">Konsultasi rute <ArrowRight size={17} weight="bold" /></Link></div></div></section></>;
}
