import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { services } from "@/data/site-data";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return <><section className="section"><div className="container"><Link className="arrow-link" href="/layanan"><ArrowLeft size={15} weight="bold" /> Semua layanan</Link><div className="detail-layout detail-layout-spaced"><div className="detail-image"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 1000px) 100vw, 58vw" /></div><div className="detail-copy"><div className="eyebrow">{service.index} / {service.shortName}</div><h1>{service.name}</h1><p className="body-copy">{service.detail}</p><div className="feature-points feature-points-light">{service.points.map((point) => <div className="feature-point feature-point-light" key={point}><strong><Check size={18} weight="bold" /></strong><span>{point}</span></div>)}</div><div className="detail-actions"><Link className="button button-primary" href={`/pesan?service=${service.name}`}>Pesan layanan <ArrowRight size={17} weight="bold" /></Link><Link className="button button-ghost" href="/kontak">Tanya admin</Link></div></div></div></div></section><section className="section-sm line-top"><div className="container"><div className="section-heading"><div><div className="eyebrow">Rencana perjalanan</div><h2 className="title">Punya detail khusus?</h2></div><p className="body-copy">Sampaikan jumlah penumpang, tanggal, dan tujuan Anda. Admin akan bantu menyusun langkah berikutnya.</p></div></div></section></>;
}
