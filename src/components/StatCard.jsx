import React from "react";

export default function StatCard({ icon: Icon, label, value, subtext }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-4">
      <div className="p-3 bg-[#f0f4e4] text-[#879b54] rounded-xl">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs text-gray-400 font-medium">{label}</p>
        <h4 className="text-xl font-bold text-gray-800 mt-0.5">{value}</h4>
        <p className="text-[11px] text-gray-400 mt-0.5">{subtext}</p>
      </div>
    </div>
  );
}