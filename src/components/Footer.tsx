export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-12 mb-20">
          
          <div className="md:col-span-5 pr-0 lg:pr-16">
            <div className="flex flex-col mb-8">
              <span className="text-brand-gold font-serif font-bold text-4xl tracking-widest">ASBJ</span>
              <span className="text-[0.65rem] text-gray-400 tracking-[0.25em] font-medium uppercase mt-2">Legal & Pertanahan</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              Biro jasa profesional yang berdedikasi tinggi untuk memberikan pelayanan terbaik bagi masyarakat dan pelaku usaha dalam penyelesaian legalitas dan administrasi pertanahan di wilayah Jabodetabek. Keamanan aset dan validitas hukum adalah prioritas kami.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-[0.65rem] font-semibold tracking-widest uppercase text-white mb-8 border-l-2 border-brand-gold pl-3">Layanan Utama</h3>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-300">Pengurusan Sertipikat</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-300">Pendirian Badan Usaha</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-300">Administrasi Kependudukan</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-300">Konsultasi Hukum</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-[0.65rem] font-semibold tracking-widest uppercase text-white mb-8 border-l-2 border-brand-gold pl-3">Informasi Kontak</h3>
            <ul className="space-y-6 text-gray-400 font-light text-sm">
              <li className="flex items-start">
                <span className="text-brand-gold mt-1 mr-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                <span className="leading-relaxed flex flex-col">
                  <span className="font-semibold text-white mb-1">Kantor Pusat Representatif</span>
                  Jl. H. Nirun No.80, RT.05/RW.01<br/>Kalibaru, Kec. Cilodong<br/>Kota Depok, Jawa Barat 16473
                  <a href="https://maps.app.goo.gl/dpf2j8JQrb1qcnDb8" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors duration-300 mt-2 text-brand-gold">Lihat di Google Maps →</a>
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-brand-gold mr-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </span>
                <a href="https://wa.me/6289676728661" className="hover:text-brand-gold transition-colors duration-300">+62 896-7672-8661</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[0.7rem] tracking-wider text-gray-500 font-light uppercase">
          <p>&copy; {new Date().getFullYear()} CV. Arsya Satria Berkah Jaya. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <a href="#" className="hover:text-brand-gold transition-colors duration-300">Kebijakan Privasi</a>
            <a href="#" className="hover:text-brand-gold transition-colors duration-300">Syarat Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
