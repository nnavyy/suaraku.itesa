export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Suaraku</h1>
        <nav className="space-x-4">
          <a href="/dashboard/mahasiswa" className="hover:underline">Dashboard</a>
          <a href="/laporan/new" className="hover:underline">Buat Laporan</a>
          <a href="/login" className="hover:underline">Logout</a>
        </nav>
      </div>
    </header>
  );
}