export type FleetVehicle = {
  slug: string;
  name: string;
  category: string;
  seats: string;
  luggage: string;
  rate: string;
  image: string;
  imageAlt: string;
  features: string[];
  description: string;
};

export type Service = {
  slug: string;
  index: string;
  name: string;
  shortName: string;
  description: string;
  detail: string;
  image: string;
  imageAlt: string;
  points: string[];
};

export const fleet: FleetVehicle[] = [
  {
    slug: "toyota-alphard",
    name: "Toyota Alphard",
    category: "Premium",
    seats: "6 penumpang",
    luggage: "3 koper besar",
    rate: "Mulai Rp 1.500.000 / hari",
    image: "/cars/alphard.png",
    imageAlt: "Toyota Alphard",
    features: ["Captain seat", "AC dual-zone", "Driver profesional"],
    description: "Kabin tenang dan representatif untuk perjalanan eksekutif, keluarga, dan antar jemput bandara.",
  },
  {
    slug: "toyota-innova",
    name: "Toyota Kijang Innova",
    category: "Paling banyak dipilih",
    seats: "7 penumpang",
    luggage: "4 koper besar",
    rate: "Mulai Rp 750.000 / hari",
    image: "/cars/innova.png",
    imageAlt: "Toyota Kijang Innova",
    features: ["Kabin lega", "AC menyeluruh", "Cocok untuk city tour"],
    description: "Pilihan serbaguna untuk penjemputan bandara, city tour, dan perjalanan luar kota yang nyaman.",
  },
  {
    slug: "toyota-hiace",
    name: "Toyota HiAce",
    category: "Perjalanan grup",
    seats: "14 penumpang",
    luggage: "8 koper besar",
    rate: "Mulai Rp 1.250.000 / hari",
    image: "/cars/hiace.png",
    imageAlt: "Toyota HiAce",
    features: ["Kabin high roof", "Ruang bagasi lega", "Ideal untuk grup"],
    description: "Bawa satu tim atau keluarga bersama dengan ruang lega dan driver yang memahami rute perjalanan.",
  },
  {
    slug: "toyota-fortuner",
    name: "Toyota Fortuner",
    category: "SUV",
    seats: "7 penumpang",
    luggage: "4 koper besar",
    rate: "Mulai Rp 900.000 / hari",
    image: "/cars/fortuner-grey.png",
    imageAlt: "Toyota Fortuner",
    features: ["Kenyamanan SUV", "Tampilan representatif", "Siap untuk rute jauh"],
    description: "SUV yang nyaman untuk kunjungan bisnis, perjalanan ke resort, dan rute di luar kota.",
  },
  {
    slug: "isuzu-elf",
    name: "Isuzu Elf",
    category: "Perjalanan grup",
    seats: "16 penumpang",
    luggage: "10 koper besar",
    rate: "Mulai Rp 1.350.000 / hari",
    image: "/cars/elf.png",
    imageAlt: "Isuzu Elf",
    features: ["Kapasitas grup besar", "Ruang lega", "Siap untuk perjalanan wisata"],
    description: "Pilihan praktis untuk rombongan sekolah, acara perusahaan, dan perjalanan dengan banyak tujuan.",
  },
  {
    slug: "mitsubishi-pajero",
    name: "Mitsubishi Pajero",
    category: "SUV",
    seats: "7 penumpang",
    luggage: "4 koper besar",
    rate: "Mulai Rp 950.000 / hari",
    image: "/cars/pajero.png",
    imageAlt: "Mitsubishi Pajero",
    features: ["SUV premium", "Perjalanan nyaman", "Driver profesional"],
    description: "Kenyamanan SUV premium untuk perjalanan, kunjungan klien, dan mobilitas privat di sekitar Jawa.",
  },
  {
    slug: "toyota-yaris",
    name: "Toyota Yaris",
    category: "City car",
    seats: "5 penumpang",
    luggage: "2 koper besar",
    rate: "Mulai Rp 450.000 / hari",
    image: "/cars/yaris.png",
    imageAlt: "Toyota Yaris",
    features: ["Lincah di dalam kota", "Hemat bahan bakar", "Nyaman untuk berempat"],
    description: "Pilihan lincah untuk keperluan harian, pertemuan, dan perjalanan ringan di Yogyakarta.",
  },
  {
    slug: "honda-jazz",
    name: "Honda Jazz",
    category: "City car",
    seats: "5 penumpang",
    luggage: "2 koper besar",
    rate: "Mulai Rp 450.000 / hari",
    image: "/cars/jazz.png",
    imageAlt: "Honda Jazz",
    features: ["Kabin fleksibel", "Mudah diparkir", "AC menyeluruh"],
    description: "Ringkas, nyaman, dan mudah digunakan untuk mobilitas kota serta perjalanan singkat.",
  },
  {
    slug: "toyota-avanza-veloz",
    name: "Toyota Avanza Veloz",
    category: "Family",
    seats: "7 penumpang",
    luggage: "3 koper besar",
    rate: "Mulai Rp 550.000 / hari",
    image: "/cars/veloz.png",
    imageAlt: "Toyota Avanza Veloz",
    features: ["Ramah untuk keluarga", "Kursi fleksibel", "Pilihan bernilai"],
    description: "Transportasi keluarga yang praktis untuk wisata, antar jemput bandara, dan sewa harian.",
  },
];

export const services: Service[] = [
  {
    slug: "sewa-mobil-driver",
    index: "01",
    name: "Sewa mobil + driver",
    shortName: "Rental + driver",
    description: "Mobil nyaman dan driver lokal profesional yang menyesuaikan kebutuhan perjalanan Anda.",
    detail: "Pilih kendaraan sesuai jumlah penumpang, ceritakan tujuan Anda, dan kami bantu menyusun rencana hari yang praktis. Driver mengurus perjalanan agar Anda dapat fokus pada tujuan.",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Car moving along a winding road at golden hour",
    points: ["Durasi harian fleksibel", "Paham rute lokal", "Driver sudah termasuk"],
  },
  {
    slug: "perjalanan-dinas",
    index: "02",
    name: "Perjalanan dinas",
    shortName: "Perjalanan bisnis",
    description: "Transportasi rapi dan representatif untuk rapat, kunjungan kerja, dan jadwal perusahaan.",
    detail: "Kami mendukung perjalanan perusahaan dan instansi dengan koordinasi yang jelas, kendaraan representatif, serta kebutuhan invoice yang dapat dibicarakan sebelum perjalanan.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Modern office building for business travel context",
    points: ["Penampilan profesional", "Koordinasi jelas", "Invoice perusahaan tersedia"],
  },
  {
    slug: "paket-city-tour",
    index: "03",
    name: "Paket city tour",
    shortName: "City tour",
    description: "Jelajahi Jogja dengan rute yang pas, waktu yang realistis, dan driver yang mengenal kotanya.",
    detail: "Mulai dari rute yang sesuai ritme Anda. Kami dapat membantu menyusun itinerary setengah hari atau satu hari untuk situs bersejarah, kuliner, alam, dan tempat pilihan Anda.",
    image: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "People exploring an Indonesian heritage destination",
    points: ["Rekomendasi rute", "Setengah atau satu hari", "Destinasi sesuai pilihan"],
  },
  {
    slug: "antar-jemput-bandara",
    index: "04",
    name: "Antar jemput bandara",
    shortName: "Antar jemput bandara",
    description: "Awal atau akhir perjalanan yang tenang dan tepat waktu dari Yogyakarta International Airport.",
    detail: "Sampaikan detail penerbangan, jumlah penumpang, dan tujuan Anda. Kami merekomendasikan kendaraan yang sesuai serta mengonfirmasi titik jemput, waktu, dan rute sebelum perjalanan.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Airplane wing above clouds during a journey",
    points: ["Koordinasi titik jemput", "Rute dalam dan luar kota", "Penjadwalan sesuai penerbangan"],
  },
];

export const faqs = [
  { question: "Apakah harga sudah termasuk driver?", answer: "Untuk layanan dengan driver, biaya driver sudah termasuk. Detail bahan bakar, parkir, tol, dan overtime akan dikonfirmasi sesuai rute dan durasi perjalanan." },
  { question: "Berapa lama minimal sewa mobil?", answer: "Durasi minimum mengikuti jenis layanan dan rute. Sampaikan kebutuhan Anda melalui formulir, lalu admin akan mengonfirmasi pilihan paling sesuai." },
  { question: "Apakah bisa untuk perjalanan ke luar kota?", answer: "Bisa. Maulana Transport melayani rute dalam kota maupun luar kota dari Yogyakarta. Tujuan dan durasi akan menentukan rekomendasi kendaraan serta estimasi tarif." },
  { question: "Bagaimana kebijakan pembatalannya?", answer: "Kebijakan pembatalan mengikuti jenis kendaraan dan waktu pemesanan. Admin akan menjelaskan ketentuannya sebelum pesanan Anda dikonfirmasi." },
];

export const whatsappNumber = "6281234567890";
