'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    layanan: '',
    pesan: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const text = `Halo ASBJ, saya ingin berkonsultasi.%0A%0A` +
      `*Nama:* ${formData.nama}%0A` +
      `*No. WA:* ${formData.whatsapp}%0A` +
      `*Layanan:* ${formData.layanan}%0A` +
      `*Pesan:* ${formData.pesan}%0A%0A` +
      `Mohon informasi lebih lanjut. Terima kasih.`;
      
    // Redirect to WhatsApp
    window.open(`https://wa.me/6289676728661?text=${text}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Nama Lengkap</label>
          <input 
            type="text" 
            name="nama"
            required
            value={formData.nama}
            onChange={handleChange}
            className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm px-4 py-3 rounded-sm focus:border-brand-gold outline-none transition-colors" 
          />
        </div>
        <div>
          <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">No. WhatsApp</label>
          <input 
            type="tel" 
            name="whatsapp"
            required
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm px-4 py-3 rounded-sm focus:border-brand-gold outline-none transition-colors" 
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Kebutuhan Layanan</label>
        <select 
          name="layanan"
          required
          value={formData.layanan}
          onChange={handleChange}
          className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm px-4 py-3 rounded-sm focus:border-brand-gold outline-none transition-colors"
        >
          <option value="" disabled hidden>Pilih Kategori...</option>
          <option value="Sertipikat & Pertanahan">Sertipikat & Pertanahan</option>
          <option value="Badan Usaha & Izin Khusus">Badan Usaha & Izin Khusus</option>
          <option value="Konsultasi Hukum">Konsultasi Hukum</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Pesan Tambahan</label>
        <textarea 
          name="pesan"
          rows={3} 
          required
          value={formData.pesan}
          onChange={handleChange}
          className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm px-4 py-3 rounded-sm focus:border-brand-gold outline-none transition-colors resize-none"
        ></textarea>
      </div>
      <button type="submit" className="bg-brand-gold text-brand-black w-full py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm">
        Kirim Permintaan via WhatsApp
      </button>
    </form>
  );
}
