'use client';
import { useState } from "react";
import LaporanCard from "./LaporanCard";

const dummyLaporan = [
  {
    id: 1,
    judul: "Ruangan Lembab",
    kategori: "ruang lingkup",
    status: "pending",
    tanggal: "07/13/25"
  },
  {
    id: 2,
    judul: "Ruangan Berbau",
    kategori: "ruang lingkup",
    status: "pending",
    tanggal: "07/13/25"
  },
  {
    id: 3,
    judul: "Soket Listrik Tidak Berfungsi",
    kategori: "ruang lingkup",
    status: "diproses",
    tanggal: "07/13/25"
  },
  {
    id: 4,
    judul: "Parkiran Selalu Penuh",
    kategori: "ruang lingkup",
    status: "selesai",
    tanggal: "07/13/25"
  }
];

export default function AdminDashboard() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedLaporan = dummyLaporan.find((lap) => lap.id === selectedId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Welcome, Arya (Admin)</h1>
          <p className="text-sm text-gray-500">Tue, 07 June 2022</p>
        </div>
        <input type="text" placeholder="Search" className="border rounded px-3 py-1" />
      </header>

      {/* Filter */}
      <div className="flex gap-4 mb-4">
        <button className="px-4 py-1 bg-blue-500 text-white rounded-full">Show All</button>
        <button className="px-4 py-1 bg-white shadow rounded-full">Category</button>
        <button className="px-4 py-1 bg-white shadow rounded-full">Status</button>
        <button className="px-4 py-1 bg-white shadow rounded-full">Date</button>
      </div>

      {/* Laporan List */}
      <div className="space-y-4">
        {dummyLaporan.map((lap) => (
          <LaporanCard
            key={lap.id}
            judul={lap.judul}
            kategori={lap.kategori}
            status={lap.status as any}
            tanggal={lap.tanggal}
            onClick={() => setSelectedId(lap.id)}
          />
        ))}
      </div>

      {/* Detail Section */}
      {selectedLaporan && (
        <div className="mt-6 p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Detail Laporan</h2>
          <p><strong>Judul:</strong> {selectedLaporan.judul}</p>
          <p><strong>Kategori:</strong> {selectedLaporan.kategori}</p>
          <p><strong>Status:</strong> {selectedLaporan.status}</p>
          <p><strong>Tanggal:</strong> {selectedLaporan.tanggal}</p>
        </div>
      )}
    </div>
  );
}
