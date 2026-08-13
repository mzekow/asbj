import { Star, MapPin } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  content: string;
  rating: number;
  imageUrl: string | null;
  mapsLink: string | null;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  // If no testimonials in DB, show a fallback or nothing
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-24 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Ulasan Klien</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">Kepercayaan Mereka, Kebanggaan Kami</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => {
            const CardContent = (
              <div className="bg-[#111] p-8 rounded-sm border border-white/5 hover:border-brand-gold/30 transition-colors duration-300 relative group h-full flex flex-col">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-12 h-12 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                {t.imageUrl && (
                  <div className="relative w-full h-32 mb-6 rounded overflow-hidden border border-white/10">
                    <Image src={t.imageUrl} alt={`Ulasan ${t.name}`} fill className="object-cover" />
                  </div>
                )}
                
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating || 5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-gray-300 font-light text-sm leading-relaxed mb-8 relative z-10 flex-grow">"{t.content}"</p>
                
                <div className="flex justify-between items-end mt-auto">
                  <div>
                    <h4 className="text-white font-semibold text-sm">{t.name}</h4>
                    {t.role && <p className="text-brand-gold text-[0.65rem] uppercase tracking-widest mt-1">{t.role}</p>}
                  </div>
                  {t.mapsLink && (
                    <div className="flex items-center text-[#25D366] text-xs font-semibold gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                      <MapPin className="w-3 h-3" />
                      Google Maps
                    </div>
                  )}
                </div>
              </div>
            );

            return t.mapsLink ? (
              <a key={t.id} href={t.mapsLink} target="_blank" rel="noopener noreferrer" className="block h-full">
                {CardContent}
              </a>
            ) : (
              <div key={t.id} className="block h-full">
                {CardContent}
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <a href="https://maps.app.goo.gl/dpf2j8JQrb1qcnDb8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-400 hover:text-brand-gold transition-colors text-sm font-medium">
            Lihat semua ulasan di Google Maps
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
