"use client";

import Link from "next/link";
import { Heart, Search, UserRound } from "lucide-react";
import { useState } from "react";

export const BottomNav = () => {
  const [message, setMessage] = useState("");
  return (
    <nav aria-label="Mobile navigation" className="fixed inset-x-0 bottom-0 z-30 border-t border-neutral-200 bg-white px-6 pb-[max(10px,env(safe-area-inset-bottom))] pt-3 md:hidden">
      {message && <div role="status" className="absolute bottom-full left-4 right-4 mb-2 rounded-xl bg-neutral-800 p-3 text-center text-sm text-white">{message} <button onClick={() => setMessage("")} className="ml-2 underline">Dismiss</button></div>}
      <div className="mx-auto flex max-w-xs justify-around">
        <Link href="/" className="flex flex-col items-center gap-1 text-[#ff385c]"><Search size={23} /><span className="text-[10px] font-semibold">Explore</span></Link>
        <button onClick={() => setMessage("Wishlists are a demo; saved hearts stay visible while you browse.")} className="flex flex-col items-center gap-1 text-neutral-500"><Heart size={23} /><span className="text-[10px]">Wishlists</span></button>
        <button onClick={() => setMessage("Login is not available in this demo.")} className="flex flex-col items-center gap-1 text-neutral-500"><UserRound size={23} /><span className="text-[10px]">Log in</span></button>
      </div>
    </nav>
  );
};
