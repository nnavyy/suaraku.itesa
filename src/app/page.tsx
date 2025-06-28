import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-xl font-semibold">Selamat datang di Aplikasi Suaraku</h2>
        <p className="mt-2 text-gray-600">
          Silakan login untuk mengirim laporan atau keluhan Anda.
        </p>
      </main>
    </>
  );
}
