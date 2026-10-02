import { BookingForm } from "@/components/booking-form";
import { Suspense } from "react";

export const metadata = { title: "Pesan Kendaraan | Maulana Transport", description: "Isi detail perjalanan dan lanjutkan konfirmasi reservasi melalui WhatsApp." };

export default function BookingPage() {
  return <><section className="page-hero"><div className="container"><div className="eyebrow">Reservasi</div><h1 className="display">Beri kami detail perjalanan Anda.</h1><p>Isi formulir singkat ini. Setelah dikirim, WhatsApp akan terbuka dengan ringkasan pesanan untuk dikonfirmasi admin.</p></div></section><section className="section"><div className="container booking-layout"><div className="booking-intro"><div className="eyebrow">Sederhana dan langsung</div><h1>Mulai dari kebutuhan Anda.</h1><p className="body-copy">Belum tahu mau pilih kendaraan apa? Tidak masalah. Ceritakan jumlah penumpang dan rutenya, kami bantu rekomendasikan.</p><div className="booking-note">Estimasi harga pada website bersifat awal. Tarif final mengikuti durasi, rute, parkir, tol, dan kebutuhan perjalanan.</div></div><Suspense fallback={<div className="booking-form" /> }><BookingForm /></Suspense></div></section></>;
}
