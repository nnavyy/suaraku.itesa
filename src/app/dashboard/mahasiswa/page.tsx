"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";

interface Laporan {
  judul: string;
  kategori: string;
  status: string;
  tanggal: string;
  deskripsi: string;
  gambar?: string;
}

export default function DashboardMahasiswa() {
  const [kategori, setKategori] = useState("ruangan");
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [mataKuliah, setMataKuliah] = useState("");
  const [hari, setHari] = useState("");
  const [jam, setJam] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [pihak, setPihak] = useState("");
  const [keluhanSpesifik, setKeluhanSpesifik] = useState("");
  const [gambar, setGambar] = useState<File | null>(null);

  const [laporanList, setLaporanList] = useState<Laporan[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!judul || !isi || !tanggal) {
      alert("Semua kolom wajib diisi.");
      return;
    }

    if (
      (kategori === "dosen" && (!mataKuliah || !hari || !jam)) ||
      (kategori === "ruangan" && !lokasi) ||
      (kategori === "ruang_lingkup" && (!pihak || !keluhanSpesifik))
    ) {
      alert("Lengkapi semua kolom berdasarkan jenis keluhan.");
      return;
    }
     if (kategori === "ruangan" && !gambar) {
    alert("Untuk kategori 'ruangan', gambar sebagai bukti wajib diunggah.");
    return;
  }

    const newLaporan: Laporan = {
      judul,
      kategori,
      status: "Diproses",
      tanggal,
      deskripsi: isi,
      gambar: gambar ? URL.createObjectURL(gambar) : undefined,
    };

    setLaporanList([newLaporan, ...laporanList]);
    setJudul(""); setIsi(""); setTanggal("");
    setMataKuliah(""); setHari(""); setJam(""); setLokasi(""); setPihak(""); setKeluhanSpesifik(""); setGambar(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-8" >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Dashboard Mahasiswa</h2>

        {/* stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <StatBox title="Total Laporan" value={laporanList.length} color="blue" />
          <StatBox title="Diproses" value={laporanList.filter(l => l.status === "Diproses").length} color="yellow" />
          <StatBox title="Selesai" value={laporanList.filter(l => l.status === "Selesai").length} color="green" />
        </div>

        {/* jenis kweluhan*/}
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Jenis Keluhan</h3>
          <div className="inline-flex gap-4">
            {[{ key: "ruangan", label: "Ruangan" }, { key: "dosen", label: "Dosen" }, { key: "ruang_lingkup", label: "Ruang Lingkup" }].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setKategori(key)}
                className={`px-5 py-2 rounded-full border font-semibold transition text-sm sm:text-base w-40 ${kategori === key ? "bg-blue-600 text-white" : "bg-white border-gray-300 text-gray-700"}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <section className="bg-[#F9FBFF] p-6 rounded-xl border border-blue-200 mb-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">Buat Laporan Baru</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Judul Laporan" value={judul} onChange={(e) => setJudul(e.target.value)} required className={inputStyle} />
            <textarea placeholder="Isi Laporan" value={isi} onChange={(e) => setIsi(e.target.value)} rows={4} required className={inputStyle}></textarea>
           <input
  type="date"
  value={tanggal}
  onChange={(e) => setTanggal(e.target.value)}
  required
  className={`${inputStyle} bg-white`} // biar nggak transparan
/>

<input
  type="file"
  accept="image/*"
  onChange={(e) => setGambar(e.target.files?.[0] || null)}
  className={`${inputStyle} file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100`}
/>

            {/* Input Tambahan Berdasarkan Kategori */}
            {kategori === "dosen" && (
              <>
                <input type="text" placeholder="Mata Kuliah yang Diajarkan" value={mataKuliah} onChange={(e) => setMataKuliah(e.target.value)} className={inputStyle} />
                <div className="flex flex-col md:flex-row gap-4">
                  <select value={hari} onChange={(e) => setHari(e.target.value)} className={`${inputStyle} w-full md:w-1/2`}>
                    <option value="">Hari Mengajar</option>
                    {["Senin", "Selasa", "Rabu", "Kamis", "Jumat"].map((h) => <option key={h}>{h}</option>)}
                  </select>
                  <input type="time" value={jam} onChange={(e) => setJam(e.target.value)} className={`${inputStyle} w-full md:w-1/2`} />
                </div>
              </>
            )}

            {kategori === "ruangan" && (
              <input type="text" placeholder="Lokasi atau Nomor Ruangan" value={lokasi} onChange={(e) => setLokasi(e.target.value)} className={inputStyle} />
            )}

            {kategori === "ruang_lingkup" && (
              <>
                <input type="text" placeholder="Pihak yang Terlibat" value={pihak} onChange={(e) => setPihak(e.target.value)} className={inputStyle} />
                <input type="text" placeholder="Keluhan Spesifik" value={keluhanSpesifik} onChange={(e) => setKeluhanSpesifik(e.target.value)} className={inputStyle} />
              </>
            )}

            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold">Kirim Laporan</button>
          </form>
        </section>

        {/* Progress Terbaru */}
        <section className="mb-12 max-h-60 overflow-y-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Progress Terbaru</h3>
          <div className="space-y-4">
            {laporanList.map((lap, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`w-4 h-4 mt-1 rounded-full ${lap.status === "Selesai" ? "bg-green-500" : "bg-blue-500"}`} />
                <div>
                  <p className="text-sm text-gray-700">Laporan "{lap.judul}" <span className="font-medium">{lap.status === "Selesai" ? "telah diselesaikan" : "dalam proses"}</span></p>
                  <p className="text-xs text-gray-400">{lap.tanggal}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div>
       <StatLaporanTotal total={laporanList.length} />
        </div>
        {/* Riwayat Lapora */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Riwayat Laporan</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-gray-200 shadow-sm hover:shadow-md">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3 border-b">Judul</th>
                  <th className="px-4 py-3 border-b">Kategori</th>
                  <th className="px-4 py-3 border-b">Status</th>
                  <th className="px-4 py-3 border-b">Tanggal</th>
                  <th className="px-4 py-3 border-b">Deskripsi</th>
                  <th className="px-4 py-3 border-b">Gambar</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {laporanList.map((lapor, i) => (
                  <tr key={i} className="border-b">
                    <td className="px-4 py-3">{lapor.judul}</td>
                    <td className="px-4 py-3 capitalize">{lapor.kategori.replace("_", " ")}</td>
                    <td className="px-4 py-3">{lapor.status}</td>
                    <td className="px-4 py-3">{lapor.tanggal}</td>
                    <td className="px-4 py-3">{lapor.deskripsi.slice(0, 50)}...</td>
                    <td className="px-4 py-3">{lapor.gambar && <img src={lapor.gambar} className="w-16 h-16 object-cover rounded" />}</td>
                  </tr>
                ))} 
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

// Komponen statistik
function StatBox({ title, value, color }: { title: string; value: number; color: "blue" | "yellow" | "green" }) {
  const colors: Record<string, [string, string, string, string]> = {
    blue: ["#EEF5FF", "#B4D4FF", "#1D3557", "#457B9D"],
    yellow: ["#FFF3E2", "#FFD6A5", "#7F5539", "#C97B28"],
    green: ["#E7F6E9", "#B7E4C7", "#2D6A4F", "#40916C"]
  };
  const [bg, border, titleColor, valueColor] = colors[color];
  return (
    <div className="p-6 rounded-xl border shadow-sm" style={{ backgroundColor: bg, borderColor: border }}>
      <h3 className="text-lg font-semibold mb-2" style={{ color: titleColor }}>{title}</h3>
      <p className="text-4xl font-bold" style={{ color: valueColor }}>{value}</p>
    </div>
  );
}

const inputStyle = `border p-3 rounded-lg focus:outline-none text-gray-800 placeholder:text-gray-500`;

//Live count
interface StatProps {
  total: number;
}

export function StatLaporanTotal({ total }: StatProps) {
  const [displayedCount, setDisplayedCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 800;
    const steps = 30;
    const increment = Math.ceil(total / steps);
    const interval = setInterval(() => {
      start += increment;
      if (start >= total) {
        setDisplayedCount(total);
        clearInterval(interval);
      } else {
        setDisplayedCount(start);
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <section className="bg-blue-600 rounded-xl text-white py-12 px-6 shadow-md text-center mb-12 transition-all duration-500">
      <h2 className="text-xl font-semibold tracking-wide mb-3">Jumlah Laporan Sekarang</h2>
      <p className="text-5xl sm:text-6xl font-bold tracking-wider drop-shadow-sm">
        {displayedCount.toLocaleString("id-ID")}
      </p>
    </section>
  );
}

      <Footer />
