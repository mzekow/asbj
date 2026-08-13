import { services } from '@/lib/constants';

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-[#0a0a0a] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Fokus Keahlian</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-tight">
              Layanan Legalitas &<br />Administrasi Pertanahan
            </h2>
            <p className="text-gray-400 font-light text-sm max-w-xl">
              Kami menangani kerumitan regulasi hukum dan birokrasi, memberikan kepastian hukum yang tepat dan terukur untuk aset Anda.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group bg-[#111] p-8 rounded-sm border border-white/5 hover:border-brand-gold/30 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
              <div className="mb-6 text-brand-gold bg-[#1a1a1a] w-12 h-12 flex items-center justify-center rounded-sm border border-brand-gold/20">
                {service.icon}
              </div>
              
              <h3 className="text-lg font-serif text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm font-light leading-relaxed flex-1 mb-6">
                {service.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center text-[0.65rem] font-bold tracking-[0.2em] uppercase text-gray-500 group-hover:text-brand-gold transition-colors duration-300">
                  <span>Lihat Detail</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
