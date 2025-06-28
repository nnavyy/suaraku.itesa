"use client";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-center mt-10 border-t border-gray-300">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-6 items-center">
       
        </div>
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Dibuat oleh{" "}
          <a href="https://instagram.com/rrqac_zsyons" target="_blank" className="text-blue-600 font-semibold hover:underline">
            @rrqac_zsyons
          </a>
        </p>
      </div>
    </footer>
  );
}
