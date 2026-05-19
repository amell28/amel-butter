import React from "react";
import StatusBadge from "./StatusBadge";

export default function OrderRow({ id, items, date, total, status }) {
  return (
    <tr className="border-b border-gray-50 last:border-0 text-xs hover:bg-gray-50/40">
      <td className="py-3 font-bold text-gray-800">{id}</td>
      <td className="py-3 text-gray-600 max-w-[150px] truncate">{items}</td>
      <td className="py-3 text-gray-400">{date}</td>
      <td className="py-3 font-semibold text-gray-700">Rp {total.toLocaleString()}</td>
      <td className="py-3"><StatusBadge status={status} /></td>
    </tr>
  );
}