import React from "react";

export default function SectionHeader({ title }) {
  return (
    <h3 className="text-sm font-bold text-gray-800 tracking-tight mb-4 pb-2 border-b border-gray-50">
      {title}
    </h3>
  );
}