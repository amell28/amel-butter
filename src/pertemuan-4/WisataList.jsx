import React, { useState } from "react";
import wisataData from "./wisata_indonesia.json";

export default function WisataApp() {
  const [view, setView] = useState("guest"); // State untuk ganti Guest/Admin
  const [search, setSearch] = useState("");
  const [filterKat, setFilterKat] = useState("");
  const [filterProv, setFilterProv] = useState("");

  const filteredData = wisataData.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterKat === "" || item.category === filterKat) &&
      (filterProv === "" || item.location?.provinsi === filterProv)
    );
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans text-gray-800">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black text-emerald-700">WISATA INDO</h1>
        {/* Tombol Toggle Guest/Admin */}
        <div className="bg-gray-200 p-1 rounded-xl">
          <button 
            onClick={() => setView("guest")}
            className={`px-4 py-2 rounded-lg text-sm font-bold ${view === "guest" ? "bg-white shadow" : "text-gray-50"} transition`}
          >Guest View</button>
          <button 
            onClick={() => setView("admin")}
            className={`px-4 py-2 rounded-lg text-sm font-bold ${view === "admin" ? "bg-white shadow" : "text-gray-50"} transition`}
          >Admin View</button>
        </div>
      </div>

      {/* SEARCH & FILTER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <input
          type="text"
          placeholder="Cari destinasi..."
          className="p-3 border rounded-xl shadow-sm outline-emerald-500"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="p-3 border rounded-xl shadow-sm" onChange={(e) => setFilterKat(e.target.value)}>
          <option value="">Semua Kategori</option>
          <option value="Alam">Alam</option>
          <option value="Sejarah">Sejarah</option>
          <option value="Budaya">Budaya</option>
        </select>
        <select className="p-3 border rounded-xl shadow-sm" onChange={(e) => setFilterProv(e.target.value)}>
          <option value="">Semua Provinsi</option>
          <option value="Jawa Tengah">Jawa Tengah</option>
          <option value="NTT">NTT</option>
          <option value="Bali">Bali</option>
        </select>
      </div>

      {/* KONDISI TAMPILAN */}
      {view === "guest" ? (
        /* GUEST VIEW: GRID CARDS  */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredData.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition hover:shadow-xl">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md uppercase">{item.category}</span>
                <h2 className="text-lg font-bold mt-2">{item.name}</h2>
                {/* Pakai ?. agar tidak error hasGuide undefined */}
                <p className="text-xs text-gray-500 mt-1">📍 {item.location?.kota}, {item.location?.provinsi}</p>
                <div className="mt-4 flex justify-between items-center">
                   <p className="font-black text-emerald-600">Rp {item.price?.toLocaleString()}</p>
                   {item.amenities?.hasGuide && <span className="text-[10px] text-blue-500 font-bold">GUIDE ✔</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* ADMIN VIEW: TABLE  */
        <div className="bg-white rounded-2xl shadow overflow-x-auto border">
          <table className="w-full text-left border-collapse">
            <thead className="bg-emerald-600 text-white">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Nama</th>
                <th className="p-4">Lokasi </th>
                <th className="p-4">Fasilitas </th>
                <th className="p-4">Operasional </th>
                <th className="p-4">Harga</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="p-4 text-gray-400 font-mono text-xs">{item.id}</td>
                  <td className="p-4 font-bold">{item.name}</td>
                  <td className="p-4 text-xs">{item.location?.kota}, {item.location?.provinsi}</td>
                  <td className="p-4 text-xs">Guide: {item.amenities?.hasGuide ? "Ya" : "Tidak"}</td>
                  <td className="p-4 text-xs">{item.info?.buka} - {item.info?.tutup}</td>
                  <td className="p-4 font-bold text-emerald-600 font-mono text-sm">Rp {item.price?.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}