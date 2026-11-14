import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ListingCard } from "@/components/ListingCard";
import { Listing } from "@/types/listing";

export const ListingSection = ({ title, subtitle, listings }: { title: string; subtitle?: string; listings: Listing[] }) => (
  <section className="mt-9">
    <div className="mb-4 flex items-center justify-between gap-3">
      <div><h2 className="text-xl font-semibold tracking-tight">{title}</h2>{subtitle && <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>}</div>
      <Link href="/catalog" aria-label={`See all ${title}`} className="rounded-full bg-neutral-100 p-2 hover:bg-neutral-200"><ArrowRight size={17} /></Link>
    </div>
    <div className="-mr-5 flex snap-x gap-3 overflow-x-auto pb-2 pr-5 md:mr-0 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:pr-0">
      {listings.map((listing) => <div className="w-[72%] shrink-0 snap-start sm:w-[42%] md:w-auto" key={listing.id}><ListingCard listing={listing} /></div>)}
    </div>
  </section>
);
