import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV. Arsya Satria Berkah Jaya | Konsultan Pertanahan & Legal",
  description: "Biro jasa pengurusan dokumen legal, sertifikat, perizinan, dan administrasi hukum terpercaya di wilayah Jabodetabek.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-brand-light flex flex-col font-sans text-brand-black selection:bg-brand-gold selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
