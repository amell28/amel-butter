import React from "react";

export default function TimelineItem({ title, desc, time, type }) {
  return (
    <div className="relative pl-6 pb-6 last:pb-0 group">
      <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-[#879b54] ring-4 ring-[#f0f4e4] z-10"></div>
      <div className="absolute left-[3px] top-4 bottom-0 w-[2px] bg-gray-100 group-last:hidden"></div>
      <div className="text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-800">{title}</span>
          <span className="text-[10px] bg-gray-100 px-1.5 py-0.5 text-gray-500 rounded font-medium uppercase tracking-wider">{type}</span>
        </div>
        <p className="text-gray-500 mt-1 italic text-slate-600">"{desc}"</p>
        <span className="text-[10px] text-gray-400 block mt-1">{time}</span>
      </div>
    </div>
  );
}