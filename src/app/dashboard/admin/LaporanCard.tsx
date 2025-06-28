'use client';
import React from "react";

interface LaporanCardProps {
  judul: string;
  kategori: string;
  status: "pending" | "diproses" | "selesai";
  tanggal: string;
  onClick: () => void;
}

export default function LaporanCard({
  judul,
  kategori,
  status,
  tanggal,
  onClick
}: LaporanCardProps) {
  const statusColor = {
    pending: "bg-gray-400",
    diproses: "bg-orange-400",
    selesai: "bg-green-500"
  };

  return (
    <div onClick={onClick} className="bg-white rounded-xl shadow p-4 flex justify-between items-center cursor-pointer hover:shadow-md transition">
      <div>
        <h3 className="font-semibold text-lg text-gray-800">{judul}</h3>
        <div className="text-sm text-gray-500 flex gap-4 mt-1">
          <span className="text-green-600">• {kategori}</span>
          <span className="flex items-center gap-1">
            <span className={`w-2 h-2 rounded-full ${statusColor[status]}`}></span>
            {status}
          </span>
        </div>
      </div>
      <div className="text-gray-400 font-medium">{tanggal}</div>
    </div>
  );
}
