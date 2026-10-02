import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { services } from "@/data/site-data";

export const metadata = { title: "Layanan | Maulana Transport Jogja", description: "Layanan rental mobil dengan driver, city tour, perjalanan dinas, dan airport transfer." };

export default function ServicesPage() {
  return <><section className="page-hero"><div className="container"><div className="eyebrow">Layanan perjalanan</div><h1 className="display">Rute Anda, kami bantu rapikan.</h1><p>Beritahu kami kebutuhan perjalanan Anda. Kami bantu mencocokkan kendaraan, durasi, dan rute yang masuk akal.</p></div></section><section className="section"><div className="container"><div className="service-list">{services.map((service) => <article className="service-feature" key={service.slug}><div className="service-image"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 680px) 100vw, 50vw" /></div><div className="service-feature-copy"><span className="service-number">{service.index} / {service.shortName}</span><h2>{service.name}</h2><p>{service.detail}</p><ul className="service-points">{service.points.map((point) => <li key={point}>{point}</li>)}</ul><Link className="arrow-link" href={`/layanan/${service.slug}`}>Lihat detail layanan <ArrowRight size={15} weight="bold" /></Link></div></article>)}</div></div></section></>;
}
