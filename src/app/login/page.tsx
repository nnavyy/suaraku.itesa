'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [role, setRole] = useState("mahasiswa");
  const [form, setForm] = useState({ nim: "", email: "", password: "", token: "" });
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (role === "mahasiswa") {
      if (form.nim && form.email && form.password) {
        try {
          const res = await fetch("/api/login/mahasiswa", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              nim: form.nim,
              email: form.email,
              password: form.password,
            }),
          });

          const data = await res.json();

          if (!res.ok) {
            alert(data.message || "Gagal login mahasiswa.");
            return;
          }

          router.push("/dashboard/mahasiswa");
        } catch (error) {
          alert("Terjadi kesalahan saat login mahasiswa.");
          console.error(error);
        }
      } else {
        alert("Mohon lengkapi data mahasiswa.");
      }
    } else {
      if (form.token) {
        try {
          const res = await fetch("/api/login/admin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: form.token }),
          });

          const data = await res.json();

          if (!res.ok) {
            alert(data.message || "Token admin salah.");
            return;
          }

          router.push("/dashboard/admin");
        } catch (error) {
          alert("Terjadi kesalahan saat login admin.");
          console.error(error);
        }
      } else {
        alert("Mohon masukkan token admin.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login Aplikasi Suaraku
        </h2>

        {/* Pilihan Role */}
        <div className="flex justify-center gap-6">
          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="radio"
              name="role"
              value="mahasiswa"
              checked={role === "mahasiswa"}
              onChange={() => setRole("mahasiswa")}
            />
            Mahasiswa
          </label>
          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="radio"
              name="role"
              value="admin"
              checked={role === "admin"}
              onChange={() => setRole("admin")}
            />
            Admin
          </label>
        </div>

        {/* Form Mahasiswa */}
        {role === "mahasiswa" && (
          <>
            <input
              type="text"
              placeholder="NIM"
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-500"
              value={form.nim}
              onChange={(e) => setForm({ ...form, nim: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-500"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-500"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </>
        )}

        {/* Form Admin */}
        {role === "admin" && (
          <input
            type="text"
            placeholder="Token Admin"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-500"
            value={form.token}
            onChange={(e) => setForm({ ...form, token: e.target.value })}
          />
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded mt-2 font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
