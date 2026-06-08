import React from "react";
import { FiSend } from "react-icons/fi";

// 1. Tambahkan prop inputRef di sini
export default function CustomerNotesInput({ value, onChange, onSubmit, inputRef }) {
  return (
    <form onSubmit={onSubmit} className="mt-4 flex gap-2">
      <input 
        ref={inputRef}
        type="text" 
        placeholder="Ketik catatan interaksi baru (misal: Suka less sugar)..." 
        value={value}
        onChange={onChange}
        className="flex-1 bg-gray-50 text-xs px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#879b54]/20 focus:border-[#879b54] transition-all"
      />
      <button type="submit" className="p-3 bg-[#879b54] text-white rounded-xl hover:bg-[#738645] transition-colors shrink-0">
        <FiSend size={14} />
      </button>
    </form>
  );
}