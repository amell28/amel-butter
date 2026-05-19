import React from "react";

export default function ProfileAvatar({ name }) {
  const initials = name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
  return (
    <div className="w-20 h-20 rounded-2xl bg-[#879b54]/10 border-2 border-white shadow-xs flex items-center justify-center text-xl font-bold text-[#879b54]">
      {initials}
    </div>
  );
}