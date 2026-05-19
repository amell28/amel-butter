import React from "react";

export default function SegmentBadge({ segment }) {
  return (
    <span className="text-[10px] font-extrabold tracking-wider bg-purple-50 text-purple-700 border border-purple-100 px-2 py-0.5 rounded-md uppercase">
      {segment}
    </span>
  );
}