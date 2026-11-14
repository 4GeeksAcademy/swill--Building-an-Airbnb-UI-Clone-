"use client";

import Link from "next/link";
import { Globe, Menu, Search, UserRound } from "lucide-react";
import { useState } from "react";
import { useApp } from "@/components/AppProvider";
import { SearchDialog } from "@/components/SearchDialog";
import { dateSummary } from "@/lib/search";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { search, hasSearched } = useApp();
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-neutral-100 bg-white/95 px-5 py-4 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6">
          <Link href="/" aria-label="Go to home" className="hidden items-center gap-1 text-2xl font-bold tracking-tight text-[#ff385c] md:flex">
            <span className="text-3xl">⌂</span> airbnb
          </Link>
          <button onClick={() => setOpen(true)} className="flex h-14 w-full items-center gap-3 rounded-full border border-neutral-200 bg-white px-5 text-left shadow-[0_3px_15px_rgba(0,0,0,0.12)] md:w-auto md:min-w-95 md:justify-center md:shadow-sm">
            <Search size={20} strokeWidth={2.5} />
            <span className="min-w-0"><span className="block truncate text-sm font-semibold">{hasSearched ? search.destination || "Anywhere" : "Start your search"}</span>{hasSearched && <span className="block text-xs text-neutral-500">{dateSummary(search)} · {search.guests} {search.guests === 1 ? "guest" : "guests"}</span>}</span>
          </button>
          <div className="hidden items-center gap-5 md:flex"><span className="text-sm font-semibold">Find your next stay</span><Globe size={19} /><span className="flex items-center gap-2 rounded-full border border-neutral-200 p-2"><Menu size={18} /><UserRound size={23} /></span></div>
        </div>
      </header>
      {open && <SearchDialog onClose={() => setOpen(false)} />}
    </>
  );
};
