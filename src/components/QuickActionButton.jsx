import React from "react";

export default function QuickActionButton({ icon: Icon, label, onClick, variant = "secondary" }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl border transition-all ${
        variant === "primary" 
          ? "bg-[#879b54] hover:bg-[#738645] text-white border-transparent" 
          : "bg-white hover:bg-gray-50 text-gray-700 border-gray-200"
      }`}
    >
      <Icon size={14} /> {label}
    </button>
  );
}