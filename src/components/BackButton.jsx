import React from "react";
import { FiArrowLeft } from "react-icons/fi";

export default function BackButton({ onClick }) {
  return (
    <button onClick={onClick} className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#879b54] font-medium transition-colors mb-4 cursor-pointer">
      <FiArrowLeft size={14} /> Kembali ke Daftar Pelanggan
    </button>
  );
}