import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "6289676728661"; // Nomor dari pengguna
  const message = "Halo ASBJ Legal, saya ingin berkonsultasi mengenai legalitas/administrasi.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center justify-center group">
      {/* Outer pulsing ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
      
      {/* Inner pulsing ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]"></div>
      
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 border-2 border-white/20"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 font-medium text-sm tracking-wide transition-all duration-300 ease-in-out">
          Konsultasi Sekarang
        </span>
      </a>
    </div>
  );
}
