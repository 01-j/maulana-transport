"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function QuickBooking() {
  const router = useRouter();
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [area, setArea] = useState("Yogyakarta");

  function submit() {
    const params = new URLSearchParams();
    if (service) params.set("service", service);
    if (date) params.set("date", date);
    if (area) params.set("area", area);
    router.push(`/pesan?${params.toString()}`);
  }

  return <div className="quick-booking"><div className="container"><div className="quick-card"><div className="quick-card-heading"><div><span>Mulai dari sini</span><strong>Rencanakan perjalanan Anda</strong></div><span className="quick-status"><i /> Admin siap membantu</span></div><div className="quick-field"><label htmlFor="quick-service">Saya butuh</label><select id="quick-service" value={service} onChange={(event) => setService(event.target.value)}><option value="">Pilih layanan</option><option value="Sewa mobil + driver">Sewa mobil + driver</option><option value="Perjalanan dinas">Perjalanan dinas</option><option value="Paket city tour">Paket city tour</option><option value="Antar jemput bandara">Antar jemput bandara</option></select></div><div className="quick-field"><label htmlFor="quick-date">Tanggal</label><input id="quick-date" type="date" value={date} onChange={(event) => setDate(event.target.value)} /></div><div className="quick-field"><label htmlFor="quick-area">Area</label><select id="quick-area" value={area} onChange={(event) => setArea(event.target.value)}><option>Yogyakarta</option><option>Dalam kota</option><option>Luar kota</option></select></div><button className="button button-primary quick-button" type="button" onClick={submit}>Cari kendaraan <ArrowRight size={16} weight="bold" /></button></div></div></div>;
}
