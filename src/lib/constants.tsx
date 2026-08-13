import { CheckCircle, FileText, Building2, MapPin, Scale, Home, Gavel, HardHat, Car, PencilRuler } from 'lucide-react';

export const services = [
  {
    title: 'Pengurusan Sertipikat & Pertanahan',
    description: 'Pengurusan Sertipikat, Akta Jual Beli (AJB), Akta Hibah, APHB, Surat Keterangan Waris, dan Girik.',
    icon: <MapPin className="w-8 h-8 text-yellow-500" />
  },
  {
    title: 'Pendirian Badan Usaha',
    description: 'Pendirian & Perubahan PT, CV, dan Yayasan dengan proses cepat dan legalitas terjamin.',
    icon: <Building2 className="w-8 h-8 text-yellow-500" />
  },
  {
    title: 'Perjanjian & Legalisasi',
    description: 'Pembuatan surat perjanjian dan legalisasi dokumen (termasuk waarmerking).',
    icon: <FileText className="w-8 h-8 text-yellow-500" />
  },
  {
    title: 'Pengurusan PBB',
    description: 'Bantu urus balik nama, pemecahan, dan cetak ulang Pajak Bumi dan Bangunan.',
    icon: <Home className="w-8 h-8 text-yellow-500" />
  },
  {
    title: 'Mutasi & Balik Nama Kendaraan',
    description: 'Pengurusan surat kendaraan bermotor, perpanjangan STNK, mutasi, dan balik nama.',
    icon: <Car className="w-8 h-8 text-yellow-500" />
  },
  {
    title: 'Administrasi Kependudukan',
    description: 'Pengurusan Akta Kelahiran, Akta Kematian, KIA, E-KTP & KK se-Jabodetabek.',
    icon: <CheckCircle className="w-8 h-8 text-yellow-500" />
  },
  {
    title: 'Properti & Konstruksi',
    description: 'Perantara Jual/Sewa Properti, Pemborong Bangunan, dan Pengurusan IMB (PBG).',
    icon: <HardHat className="w-8 h-8 text-yellow-500" />
  },
  {
    title: 'Desain Grafis Bangunan',
    description: 'Jasa desain grafis untuk bangunan rumah, kantor, dan kafe.',
    icon: <PencilRuler className="w-8 h-8 text-yellow-500" />
  },
  {
    title: 'Konsultasi Hukum',
    description: 'Layanan konsultasi hukum untuk berbagai permasalahan perdata maupun administrasi.',
    icon: <Scale className="w-8 h-8 text-yellow-500" />
  },
  {
    title: 'Pengurusan Akte Perceraian',
    description: 'Bantuan hukum dan pengurusan dokumen akte perceraian secara resmi.',
    icon: <Gavel className="w-8 h-8 text-yellow-500" />
  }
];
