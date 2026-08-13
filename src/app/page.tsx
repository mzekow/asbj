import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export const metadata = {
  title: 'CV. Arsya Satria Berkah Jaya | Legalitas & Pertanahan Eksklusif',
  description: 'Biro jasa legal, perizinan, dan administrasi pertanahan terpercaya di Jabodetabek.',
};

export const revalidate = 0;

export default async function Home() {
  const activities = await prisma.activity.findMany({
    orderBy: { date: 'desc' },
    take: 6
  });

  const announcements = await prisma.announcement.findMany({
    orderBy: { date: 'desc' },
    take: 3
  });

  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: 'desc' },
    take: 6
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 selection:bg-brand-gold selection:text-brand-black">
      <Navbar />
      
      {/* 1. HERO - Structured & Elegant */}
      <section className="relative min-h-[90vh] flex items-center bg-brand-black border-b border-white/10 pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
            alt="Hero Background" 
            fill 
            className="object-cover opacity-[0.15] mix-blend-luminosity animate-[scaleUp_15s_ease-out_forwards]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block py-1 px-3 border border-brand-gold/30 text-brand-gold text-[0.65rem] font-bold tracking-[0.2em] uppercase rounded-full mb-6">
              Biro Jasa Legal Profesional
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
              Kepastian Hukum untuk <br className="hidden md:block"/>
              <span className="text-brand-gold">Aset & Bisnis Anda.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-400 mb-10 leading-relaxed">
              Solusi tuntas administrasi pertanahan, perizinan badan usaha, dan legalitas dokumen di wilayah Jabodetabek. Cepat, transparan, dan dapat diandalkan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#kontak" className="inline-flex items-center justify-center bg-brand-gold text-brand-black px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded-sm">
                Mulai Konsultasi
              </Link>
              <Link href="#layanan" className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:border-brand-gold hover:text-brand-gold transition-colors duration-300 rounded-sm">
                Lihat Layanan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TENTANG KAMI - Concise & Neat */}
      <section id="tentang" className="py-24 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Tentang Perusahaan</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">
                Integritas dalam Setiap <br/> Penyelesaian Legalitas.
              </h2>
              <div className="space-y-4 text-gray-400 font-light text-sm leading-relaxed mb-8">
                <p>
                  CV. Arsya Satria Berkah Jaya merupakan mitra legal yang didedikasikan untuk mengawal setiap proses administrasi hukum, mulai dari tingkat dasar hingga ke instansi eksekutif. 
                </p>
                <p>
                  Kami merancang alur kerja yang efisien dan membebaskan Anda dari kerumitan birokrasi, sehingga legalitas perusahaan dan sertifikat kepemilikan Anda dapat diterbitkan secara resmi tanpa risiko.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l border-brand-gold/30 pl-4">
                  <p className="text-2xl font-serif text-white mb-1">10<span className="text-brand-gold">+</span></p>
                  <p className="text-[0.65rem] text-gray-500 uppercase tracking-widest font-semibold">Tahun Pengalaman</p>
                </div>
                <div className="border-l border-brand-gold/30 pl-4">
                  <p className="text-2xl font-serif text-white mb-1">100<span className="text-brand-gold">%</span></p>
                  <p className="text-[0.65rem] text-gray-500 uppercase tracking-widest font-semibold">Legal & Resmi</p>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] w-full rounded-sm overflow-hidden border border-white/10">
              <Image 
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" 
                alt="Kantor ASBJ" 
                fill 
                className="object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. MENGAPA KAMI - Clean Grid */}
      <section className="py-24 bg-[#111] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Nilai Lebih ASBJ</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">Alasan Memilih Layanan Kami</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🛡️', title: 'Akurasi Dokumen', desc: 'Validasi ketat menghindari cacat hukum.' },
              { icon: '⚡', title: 'Proses Terukur', desc: 'Sistem kerja efisien dan tepat waktu.' },
              { icon: '🔍', title: 'Transparansi', desc: 'Update berkala tanpa biaya tersembunyi.' },
              { icon: '🔒', title: 'Privasi Terjamin', desc: 'Kerahasiaan data klien adalah prioritas.' }
            ].map((item, i) => (
              <div key={i} className="bg-[#1a1a1a] p-8 rounded-sm border border-white/5 hover:border-brand-gold/30 transition-colors duration-300">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-serif text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 font-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LAYANAN - Component */}
      <Services />

      {/* 5. PORTOFOLIO - Compact Masonry */}
      <section id="galeri" className="py-24 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Portofolio & Aktivitas</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white">Rekam Jejak Pekerjaan</h2>
            </div>
            <Link href="#kontak" className="hidden sm:inline-flex text-brand-gold text-[0.7rem] uppercase tracking-widest font-semibold hover:text-white transition-colors">
              Konsultasi Sekarang →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.length > 0 ? activities.map((item) => (
              <div key={item.id} className="group relative rounded-sm overflow-hidden bg-[#1a1a1a] aspect-square border border-white/5">
                <Image 
                  src={item.imageUrl} 
                  alt={item.title || 'Aktivitas ASBJ'} 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-brand-gold text-[0.65rem] font-bold tracking-[0.1em] uppercase mb-2">
                    {format(new Date(item.date), 'dd MMM yyyy', { locale: id })}
                  </p>
                  <h3 className="text-white font-serif text-lg mb-1">{item.title}</h3>
                  {item.description && (
                    <p className="text-gray-400 font-light text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            )) : (
              <div className="col-span-full py-16 text-center border border-white/10 rounded-sm">
                <p className="text-gray-500 text-sm font-light">Belum ada portofolio yang diunggah.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5.5 TESTIMONI */}
      <Testimonials testimonials={testimonials} />

      {/* 6. BERITA - Simple Cards */}
      <section id="berita" className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Berita & Informasi</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white">Insight Hukum Terkini</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {announcements.length > 0 ? announcements.map((item) => (
              <article key={item.id} className="bg-[#1a1a1a] border border-white/5 rounded-sm overflow-hidden group">
                {item.imageUrl && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={item.imageUrl} 
                      alt={item.title} 
                      fill 
                      className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" 
                    />
                  </div>
                )}
                <div className="p-6">
                  <time className="block text-brand-gold text-[0.65rem] font-bold tracking-[0.1em] uppercase mb-3">
                    {format(new Date(item.date), 'dd MMM yyyy', { locale: id })}
                  </time>
                  <h3 className="text-xl font-serif text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-light text-sm line-clamp-3 mb-4">
                    {item.content}
                  </p>
                  <span className="text-brand-gold text-[0.7rem] uppercase tracking-widest font-semibold cursor-pointer hover:text-white">
                    Selengkapnya →
                  </span>
                </div>
              </article>
            )) : (
               <div className="col-span-full py-16 text-center border border-white/10 rounded-sm">
                <p className="text-gray-500 text-sm font-light">Belum ada informasi terbaru saat ini.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. KONTAK - Compact & Structured */}
      <section id="kontak" className="py-24 bg-brand-gold relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0a0a0a] rounded-sm p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row gap-12">
            
            <div className="lg:w-1/3">
              <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Konsultasi</span>
              <h2 className="text-3xl font-serif text-white mb-6">Hubungi Kami</h2>
              <p className="text-gray-400 font-light text-sm mb-10">
                Langkah awal untuk penyelesaian masalah legalitas Anda dengan aman dan profesional.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white text-sm font-semibold mb-2">Kantor ASBJ</h4>
                  <p className="text-gray-400 font-light text-sm mb-2">Jl. H. Nirun No.80, RT.05/RW.01<br/>Kalibaru, Kec. Cilodong<br/>Kota Depok, Jawa Barat 16473</p>
                  <a href="https://maps.app.goo.gl/dpf2j8JQrb1qcnDb8" target="_blank" rel="noopener noreferrer" className="text-brand-gold text-[0.7rem] uppercase tracking-widest font-semibold hover:text-white">Lihat Peta →</a>
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold mb-2">WhatsApp / Telepon</h4>
                  <a href="https://wa.me/6289676728661" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold text-sm block">+62 896-7672-8661</a>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-white/10 pt-10 lg:pt-0 lg:pl-12">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
