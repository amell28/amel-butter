import React from "react";

export default function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0 text-sm">
      <Icon className="text-gray-400 shrink-0" size={16} />
      <span className="text-gray-400 w-24 shrink-0">{label}</span>
      <span className="text-gray-700 font-medium truncate">{value}</span>
    </div>
  );
}