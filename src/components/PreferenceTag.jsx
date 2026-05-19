import React from "react";

export default function PreferenceTag({ label }) {
  return (
    <span className="bg-[#f0f4e4]/60 text-[#6a7a40] text-xs px-3 py-1.5 rounded-xl font-medium border border-[#e4eccc]/30">
      🍵 {label}
    </span>
  );
}