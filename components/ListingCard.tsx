"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Listing } from "@/types/listing";
import { FavoriteButton } from "@/components/FavoriteButton";
import { useApp } from "@/components/AppProvider";
import { nightsBetween } from "@/lib/search";

export const ListingCard = ({ listing }: { listing: Listing }) => {
  const { search } = useApp();
  const nights = nightsBetween(search);
  return (
    <article className="min-w-0">
      <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
        <Link href={`/rooms/${listing.id}`} aria-label={`View ${listing.title}`} className="block aspect-[1.05]">
          <Image src={listing.images[0]} alt={`${listing.title} in ${listing.location}`} fill unoptimized sizes="(max-width: 767px) 80vw, 25vw" className="object-cover transition-transform duration-300 hover:scale-105" />
        </Link>
        {listing.badge && <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold shadow-sm">{listing.badge}</span>}
        <div className="absolute right-3 top-3"><FavoriteButton id={listing.id} title={listing.title} overlay /></div>
      </div>
      <Link href={`/rooms/${listing.id}`} className="mt-3 block text-sm leading-5">
        <div className="flex items-start justify-between gap-2"><h3 className="font-semibold">{listing.title}</h3><span className="flex shrink-0 items-center gap-1"><Star size={12} fill="currentColor" /> {listing.rating.toFixed(2)}</span></div>
        <p className="mt-0.5 text-neutral-500">{listing.location}</p>
        <p className="mt-1"><span className="font-semibold">${nights ? listing.price * nights : listing.price}</span> {nights ? `for ${nights} ${nights === 1 ? "night" : "nights"}` : "night"}</p>
      </Link>
    </article>
  );
};
