import React from "react";

export default function PointMilestone({ points }) {
  const nextTier = 1000;
  const percentage = Math.min((points / nextTier) * 100, 100);
  return (
    <div className="p-4 bg-gradient-to-br from-[#879b54]/5 to-transparent rounded-2xl border border-[#879b54]/10">
      <div className="flex justify-between text-xs font-bold text-gray-700 mb-2">
        <span>Bloom Points Balance</span>
        <span className="text-[#879b54]">{points} / {nextTier} Pts</span>
      </div>
      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
        <div className="bg-[#879b54] h-full transition-all duration-500" style={{ width: `${percentage}%` }}></div>
      </div>
      <p className="text-[10px] text-gray-400 mt-2">Dapatkan {nextTier - points} poin lagi untuk klaim free merchandise.</p>
    </div>
  );
}