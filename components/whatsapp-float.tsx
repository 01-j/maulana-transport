import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { whatsappNumber } from "@/data/site-data";

export function WhatsAppFloat() {
  return <Link className="whatsapp-float" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo Maulana Transport, saya ingin bertanya tentang layanan rental mobil.")}`} target="_blank" rel="noreferrer" aria-label="Chat via WhatsApp"><WhatsappLogo size={21} weight="fill" /><span>Chat WhatsApp</span></Link>;
}
