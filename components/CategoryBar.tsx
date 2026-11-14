"use client";

import { Building2, House, Mountain, Palmtree, Sparkles } from "lucide-react";

const categories = [
  { name: "All", icon: Sparkles },
  { name: "City", icon: Building2 },
  { name: "Cabins", icon: House },
  { name: "Lakefront", icon: Palmtree },
  { name: "Design", icon: Mountain },
];

export const CategoryBar = ({ selected, onSelect }: { selected: string; onSelect: (category: string) => void }) => (
  <div className="flex gap-2 overflow-x-auto pb-2 md:gap-8" aria-label="Listing categories">
    {categories.map(({ name, icon: Icon }) => <button key={name} onClick={() => onSelect(name)} aria-pressed={selected === name} className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors md:rounded-none md:border-0 md:border-b-2 md:px-1 md:pb-4 ${selected === name ? "border-neutral-800 bg-neutral-100 md:bg-transparent" : "border-neutral-200 text-neutral-500 hover:text-neutral-900 md:border-transparent"}`}><Icon size={18} />{name}</button>)}
  </div>
);
