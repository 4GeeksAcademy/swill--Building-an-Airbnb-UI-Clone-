"use client";

import { SlidersHorizontal } from "lucide-react";
import { useApp } from "@/components/AppProvider";
import { ListingCard } from "@/components/ListingCard";
import { ResultsMap } from "@/components/ResultsMap";
import { listings } from "@/lib/listings";
import { dateSummary } from "@/lib/search";

export const CatalogView = () => {
  const { search, category, setCategory, sort, setSort } = useApp();
  const query = search.destination.toLowerCase();
  const results = listings.filter((listing) => (!query || `${listing.location} ${listing.neighborhood} ${listing.title}`.toLowerCase().includes(query)) && listing.guests >= search.guests && (category === "All" || listing.category === category)).sort((a, b) => sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : 0);
  return (
    <main className="mx-auto max-w-[1440px] px-5 pb-12 pt-7 md:px-10">
      <p className="text-sm text-neutral-500">{dateSummary(search)} · {search.guests} {search.guests === 1 ? "guest" : "guests"} · Availability is not checked in this demo</p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-4"><div><h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Stays {search.destination ? `in ${search.destination}` : "to explore"}</h1><p className="mt-2 text-sm text-neutral-500">{results.length} {results.length === 1 ? "stay" : "stays"} · Prices shown before taxes and fees</p></div>
        <div className="flex flex-wrap gap-2">
          <label className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold"><SlidersHorizontal size={16} /><span className="sr-only">Filter by category</span><select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-transparent outline-none"><option value="All">All stays</option><option>City</option><option>Cabins</option><option>Lakefront</option><option>Design</option></select></label>
          <label className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold"><span className="sr-only">Sort results</span><select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-transparent outline-none"><option value="recommended">Recommended</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></label>
        </div>
      </div>
      <div className="mt-7 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
        {results.length ? <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">{results.map((listing) => <ListingCard key={listing.id} listing={listing} />)}</div> : <div className="rounded-2xl bg-neutral-50 px-6 py-16 text-center"><h2 className="font-semibold">No stays found</h2><p className="mt-2 text-sm text-neutral-500">Try another destination, guest count, or category.</p></div>}
        <ResultsMap listings={results} />
      </div>
    </main>
  );
};
