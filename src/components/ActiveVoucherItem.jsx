import React from "react";

export default function ActiveVoucherItem({ code, expires }) {
  return (
    <div className="flex items-center justify-between p-3 bg-dashed border border-gray-200 rounded-xl bg-gray-50/50">
      <div>
        <span className="text-xs font-mono font-bold text-gray-700 uppercase tracking-wider">{code}</span>
        <p className="text-[10px] text-gray-400 mt-0.5">Expired: {expires}</p>
      </div>
      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Ready to Use</span>
    </div>
  );
}