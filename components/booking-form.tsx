"use client";

import { CheckCircle, PaperPlaneTilt } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fleet, services, whatsappNumber } from "@/data/site-data";

type BookingFormProps = { initialVehicle?: string; initialService?: string; initialDate?: string; initialArea?: string };

export function BookingForm({ initialVehicle = "", initialService = "", initialDate = "", initialArea = "" }: BookingFormProps) {
  const searchParams = useSearchParams();
  initialVehicle = searchParams.get("vehicle") ?? initialVehicle;
  initialService = searchParams.get("service") ?? initialService;
  initialDate = searchParams.get("date") ?? initialDate;
  initialArea = searchParams.get("area") ?? initialArea;
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const date = String(form.get("date") || "").trim();
    if (!name || !phone || !date) {
      setError("Mohon isi nama, nomor HP, dan tanggal perjalanan terlebih dahulu.");
      return;
    }
    setError("");
    const message = [
      "Halo Maulana Transport, saya ingin melakukan reservasi.",
      `Nama: ${name}`,
      `No. HP: ${phone}`,
      `Layanan: ${form.get("service")}`,
      `Mobil: ${form.get("vehicle") || "Belum menentukan"}`,
      `Area: ${form.get("area") || "Belum ditentukan"}`,
      `Tanggal: ${date}`,
      `Jemput: ${form.get("pickup") || "Belum diisi"}`,
      `Tujuan: ${form.get("destination") || "Belum diisi"}`,
      `Catatan: ${form.get("notes") || "-"}`,
    ].join("\n");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) return <div className="booking-success"><div className="success-mark"><CheckCircle size={25} weight="fill" /></div><h2>Pesan siap dikirim.</h2><p>WhatsApp sudah dibuka dengan detail perjalanan Anda. Admin Maulana Transport akan membantu mengecek ketersediaan dan mengonfirmasi tarif.</p><button className="button button-ghost" onClick={() => setSubmitted(false)}>Buat reservasi lain</button></div>;

  return <form className="booking-form" onSubmit={handleSubmit}>
    <div className="form-grid">
      <div className="form-field"><label className="form-label" htmlFor="name">Nama lengkap *</label><input id="name" name="name" autoComplete="name" placeholder="Nama Anda" /></div>
      <div className="form-field"><label className="form-label" htmlFor="phone">No. HP / WhatsApp *</label><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="08xx xxxx xxxx" /></div>
       <div className="form-field"><label className="form-label" htmlFor="service">Pilihan layanan *</label><select id="service" name="service" defaultValue={initialService}><option value="">Pilih layanan</option>{services.map((service) => <option value={service.name} key={service.slug}>{service.name}</option>)}</select></div>
       <div className="form-field"><label className="form-label" htmlFor="area">Area perjalanan</label><select id="area" name="area" defaultValue={initialArea}><option value="">Pilih area</option><option>Yogyakarta</option><option>Dalam kota</option><option>Luar kota</option></select></div>
       <div className="form-field"><label className="form-label" htmlFor="vehicle">Pilihan mobil</label><select id="vehicle" name="vehicle" defaultValue={initialVehicle}><option value="">Belum menentukan</option>{fleet.map((vehicle) => <option value={vehicle.name} key={vehicle.slug}>{vehicle.name}</option>)}</select></div>
      <div className="form-field"><label className="form-label" htmlFor="date">Tanggal perjalanan *</label><input id="date" name="date" type="date" defaultValue={initialDate} /></div>
      <div className="form-field"><label className="form-label" htmlFor="pickup">Titik jemput</label><input id="pickup" name="pickup" placeholder="Contoh: Stasiun Tugu" /></div>
      <div className="form-field"><label className="form-label" htmlFor="destination">Tujuan / rute</label><input id="destination" name="destination" placeholder="Contoh: Borobudur" /></div>
      <div className="form-field full"><label className="form-label" htmlFor="notes">Catatan tambahan</label><textarea id="notes" name="notes" placeholder="Jumlah penumpang, jam penerbangan, atau kebutuhan lain" /></div>
    </div>
    {error && <p className="form-error" role="alert">{error}</p>}
    <div className="form-submit"><p>Data Anda akan disusun menjadi pesan WhatsApp untuk konfirmasi admin.</p><button className="button button-primary" type="submit">Kirim ke WhatsApp <PaperPlaneTilt size={17} weight="bold" /></button></div>
  </form>;
}
