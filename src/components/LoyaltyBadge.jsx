import React from "react";

export default function LoyaltyBadge({ loyalty }) {
  const styles =
    loyalty === "Gold"
      ? "bg-amber-50 text-amber-700 border-amber-200"
      : loyalty === "Silver"
      ? "bg-slate-50 text-slate-700 border-slate-200"
      : "bg-orange-50 text-orange-700 border-orange-200";
  return (
    <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${styles} shadow-sm`}>
      {loyalty} Member
    </span>
  );
}