import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "6289676728661"; // Nomor dari pengguna
  const message = "Halo ASBJ Legal, saya ingin berkonsultasi mengenai legalitas/administrasi.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] hover:-translate-y-1 transition-all duration-300 z-50 flex items-center justify-center group border border-white/20"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 font-medium text-sm tracking-wide transition-all duration-300 ease-in-out">
        Hubungi Konsultan
      </span>
      
      {/* Ripple Effect */}
      <span className="absolute -inset-2 rounded-full border border-[#25D366] animate-ping opacity-20 group-hover:hidden"></span>
    </a>
  );
}
