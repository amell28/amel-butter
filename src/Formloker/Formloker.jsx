import React, { useState } from "react";
import InputField from "./components/InputField";

export default function FormLoker() {
  // State untuk menyimpan inputan
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [telepon, setTelepon] = useState("");
  const [posisi, setPosisi] = useState("");
  const [pengalaman, setPengalaman] = useState("");

  // State untuk menyimpan pesan error (Validasi)
  const [errorNama, setErrorNama] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorTelepon, setErrorTelepon] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fungsi Validasi (3 validasi di setiap inputan)
  const validateNama = (val) => {
    setNama(val);
    setIsSubmitted(false); // Sembunyikan hasil jika user mengetik ulang
    if (val.trim() === "") {
      setErrorNama("Nama wajib diisi");
    } else if (val.length < 3) {
      setErrorNama("Nama minimal 3 karakter");
    } else if (/\d/.test(val)) {
      setErrorNama("Nama tidak boleh mengandung angka");
    } else {
      setErrorNama("");
    }
  };

  const validateEmail = (val) => {
    setEmail(val);
    setIsSubmitted(false);
    if (!val) {
      setErrorEmail("Email wajib diisi");
    } else if (!val.includes("@") || !val.includes(".")) {
      setErrorEmail("Format email tidak valid (harus ada @ dan .)");
    } else if (val.length < 5) {
      setErrorEmail("Email terlalu pendek");
    } else {
      setErrorEmail("");
    }
  };

  const validateTelepon = (val) => {
    setTelepon(val);
    setIsSubmitted(false);
    if (!val) {
      setErrorTelepon("No Telepon/WA wajib diisi");
    } else if (isNaN(val)) {
      setErrorTelepon("Harus berupa angka");
    } else if (val.length < 10 || val.length > 13) {
      setErrorTelepon("Nomor harus antara 10 - 13 digit");
    } else {
      setErrorTelepon("");
    }
  };

  // Cek apakah semua validasi berhasil dan inputan terisi
  const isValid = 
    nama && email && telepon && posisi && pengalaman && 
    !errorNama && !errorEmail && !errorTelepon;

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Form Lowongan Kerja</h2>

        <form onSubmit={handleSubmit}>
          {/* 3 Inputan menggunakan Reusable Component */}
          <InputField 
            label="Nama Lengkap" type="text" placeholder="Masukkan nama lengkap..." 
            value={nama} onChange={(e) => validateNama(e.target.value)} error={errorNama} 
          />
          <InputField 
            label="Alamat Email" type="email" placeholder="contoh@email.com" 
            value={email} onChange={(e) => validateEmail(e.target.value)} error={errorEmail} 
          />
          <InputField 
            label="Nomor WhatsApp" type="text" placeholder="Contoh: 081234567890" 
            value={telepon} onChange={(e) => validateTelepon(e.target.value)} error={errorTelepon} 
          />

          {/* 2 Select Dropdown */}
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">Posisi yang Dilamar</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={posisi} 
              onChange={(e) => { setPosisi(e.target.value); setIsSubmitted(false); }}
            >
              <option value="">-- Pilih Posisi --</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-1">Pengalaman Kerja</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={pengalaman} 
              onChange={(e) => { setPengalaman(e.target.value); setIsSubmitted(false); }}
            >
              <option value="">-- Pilih Pengalaman --</option>
              <option value="Fresh Graduate">Fresh Graduate</option>
              <option value="1 - 3 Tahun">1 - 3 Tahun</option>
              <option value="Lebih dari 3 Tahun">Lebih dari 3 Tahun</option>
            </select>
          </div>

          {/* Conditional Rendering Tombol Submit: Tampil jika semua sesuai */}
          {isValid && (
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded mt-2 transition-all"
            >
              Kirim Lamaran
            </button>
          )}
        </form>

        {/* Conditional Rendering Respon Inputan (Muncul di bawah form setelah submit) */}
        {isSubmitted && (
          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-800 rounded">
            <h3 className="font-bold mb-2">✅ Lamaran Berhasil Terkirim!</h3>
            <ul className="text-sm space-y-1">
              <li><strong>Nama:</strong> {nama}</li>
              <li><strong>Email:</strong> {email}</li>
              <li><strong>Telepon:</strong> {telepon}</li>
              <li><strong>Posisi:</strong> {posisi}</li>
              <li><strong>Pengalaman:</strong> {pengalaman}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}