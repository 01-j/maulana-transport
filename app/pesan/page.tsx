import { BookingForm } from "@/components/booking-form";

export const metadata = { title: "Pesan Kendaraan | Maulana Transport", description: "Isi detail perjalanan dan lanjutkan konfirmasi reservasi melalui WhatsApp." };

export default async function BookingPage({ searchParams }: { searchParams: Promise<{ vehicle?: string; service?: string; date?: string; area?: string }> }) {
  const params = await searchParams;
  return <><section className="page-hero"><div className="container"><div className="eyebrow">Reservasi</div><h1 className="display">Beri kami detail perjalanan Anda.</h1><p>Isi formulir singkat ini. Setelah dikirim, WhatsApp akan terbuka dengan ringkasan pesanan untuk dikonfirmasi admin.</p></div></section><section className="section"><div className="container booking-layout"><div className="booking-intro"><div className="eyebrow">Sederhana dan langsung</div><h1>Mulai dari kebutuhan Anda.</h1><p className="body-copy">Belum tahu mau pilih kendaraan apa? Tidak masalah. Ceritakan jumlah penumpang dan rutenya, kami bantu rekomendasikan.</p><div className="booking-note">Estimasi harga pada website bersifat awal. Tarif final mengikuti durasi, rute, parkir, tol, dan kebutuhan perjalanan.</div></div><BookingForm initialVehicle={params.vehicle} initialService={params.service} initialDate={params.date} initialArea={params.area} /></div></section></>;
}
