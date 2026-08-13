'use client';
import { useActionState } from 'react';
import { logoutAction } from '../actions';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard ASBJ</h1>
          <form action={logoutAction}>
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
              Logout
            </button>
          </form>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Upload Aktivitas */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4">Upload Aktivitas (Galeri)</h2>
            <form id="activity-form" className="space-y-4" onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const fd = new FormData(form);
              
              const file = fd.get('image') as File;
              if (!file || file.size === 0) return alert('Pilih file gambar');
              
              const uploadFd = new FormData();
              uploadFd.append('file', file);
              
              const res = await fetch('/api/upload', { method: 'POST', body: uploadFd });
              const { url } = await res.json();
              if (!url) return alert('Upload gagal');
              
              const data = {
                title: fd.get('title'),
                description: fd.get('description'),
                date: fd.get('date'),
                imageUrl: url
              };
              
              const submitRes = await fetch('/api/activities', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
              });
              
              if (submitRes.ok) {
                alert('Aktivitas berhasil ditambahkan!');
                form.reset();
              }
            }}>
              <div>
                <label className="block text-sm font-medium mb-1">Judul Aktivitas</label>
                <input name="title" required type="text" className="w-full px-3 py-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Deskripsi</label>
                <textarea name="description" className="w-full px-3 py-2 border rounded" rows={3}></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tanggal</label>
                <input name="date" required type="date" className="w-full px-3 py-2 border rounded" defaultValue={new Date().toISOString().split('T')[0]} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Gambar</label>
                <input name="image" required type="file" accept="image/*" className="w-full px-3 py-2 border rounded" />
              </div>
              <button type="submit" className="w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800">
                Simpan Aktivitas
              </button>
            </form>
          </div>

          {/* Form Upload Pengumuman */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4">Posting Pengumuman/Berita</h2>
            <form id="announcement-form" className="space-y-4" onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const fd = new FormData(form);
              
              let imageUrl = null;
              const file = fd.get('image') as File;
              if (file && file.size > 0) {
                const uploadFd = new FormData();
                uploadFd.append('file', file);
                const res = await fetch('/api/upload', { method: 'POST', body: uploadFd });
                const json = await res.json();
                imageUrl = json.url;
              }
              
              const data = {
                title: fd.get('title'),
                content: fd.get('content'),
                date: fd.get('date'),
                imageUrl
              };
              
              const submitRes = await fetch('/api/announcements', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
              });
              
              if (submitRes.ok) {
                alert('Pengumuman berhasil diposting!');
                form.reset();
              }
            }}>
              <div>
                <label className="block text-sm font-medium mb-1">Judul Pengumuman</label>
                <input name="title" required type="text" className="w-full px-3 py-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Isi Berita</label>
                <textarea name="content" required className="w-full px-3 py-2 border rounded" rows={5}></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tanggal</label>
                <input name="date" required type="date" className="w-full px-3 py-2 border rounded" defaultValue={new Date().toISOString().split('T')[0]} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Gambar (Opsional)</label>
                <input name="image" type="file" accept="image/*" className="w-full px-3 py-2 border rounded" />
              </div>
              <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded hover:bg-yellow-400">
                Posting Pengumuman
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
