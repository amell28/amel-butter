import React from "react";

export default function StatusBadge({ status }) {
  const styles =
    status === "Completed"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : status === "Pending"
      ? "bg-amber-50 text-amber-700 border-amber-200"
      : "bg-rose-50 text-rose-700 border-rose-200";
  return (
    <span className={`px-2 py-0.5 rounded-md text-[11px] font-medium border ${styles}`}>
      {status}
    </span>
  );
}