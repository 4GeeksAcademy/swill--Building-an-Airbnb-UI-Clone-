"use client";

import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { CategoryBar } from "@/components/CategoryBar";
import { ListingSection } from "@/components/ListingSection";
import { useApp } from "@/components/AppProvider";
import { dateSummary } from "@/lib/search";
import { listings } from "@/lib/listings";

export const HomeView = () => {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const { search, hasSearched } = useApp();
  const matches = listings.filter((listing) => (category === "All" || listing.category === category) && `${listing.title} ${listing.location} ${listing.neighborhood}`.toLowerCase().includes(query.toLowerCase().trim()));
  return (
    <main className="mx-auto max-w-[1440px] px-5 pb-12 md:px-10">
      <div className="pt-5"><CategoryBar selected={category} onSelect={setCategory} /></div>
      {hasSearched && <Link href="/catalog" className="mt-5 flex items-center justify-between rounded-2xl border border-neutral-100 bg-white p-4 shadow-[0_3px_20px_rgba(0,0,0,.08)] md:max-w-md"><div><p className="text-xs text-neutral-500">Homes</p><p className="mt-1 font-semibold">Continue your search</p><p className="mt-1 text-sm text-neutral-500">{search.destination || "Anywhere"} · {dateSummary(search)}</p></div><ArrowRight size={20} /></Link>}
      <div className="mt-7 flex flex-wrap items-end justify-between gap-3">
        <div><p className="text-sm font-medium text-neutral-500">Find a place to make memories</p><h1 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">Find your next favorite stay</h1></div>
        <label className="flex w-full items-center gap-2 rounded-full border border-neutral-200 px-4 py-2.5 text-neutral-500 sm:w-64"><Search size={17} /><span className="sr-only">Filter listings</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Filter stays by location" className="w-full bg-transparent text-sm text-neutral-900 outline-none" /></label>
      </div>
      {matches.length ? <ListingSection title={category === "All" ? "Popular homes around Detroit" : `${category} stays`} subtitle="A little inspiration for your next trip" listings={matches.slice(0, 4)} /> : <p className="py-16 text-center text-neutral-500">No stays found. Try another location or category.</p>}
      {category === "All" && !query && <><ListingSection title="Guests also checked out" subtitle="Find a little more to love nearby" listings={listings.slice(4, 8)} /><ListingSection title="Get away from it all" subtitle="Thoughtful spaces for a change of scenery" listings={[listings[3], listings[5], listings[1], listings[6]]} /></>}
    </main>
  );
};
