"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Listing } from "@/types/listing";

export const PhotoGallery = ({ listing }: { listing: Listing }) => {
  const [index, setIndex] = useState(0);
  const previous = () => setIndex((index + listing.images.length - 1) % listing.images.length);
  const next = () => setIndex((index + 1) % listing.images.length);
  return (
    <div className="relative overflow-hidden bg-neutral-100 md:rounded-2xl">
      <div className="relative aspect-[1.25] md:aspect-[2.4]"><Image src={listing.images[index]} alt={`${listing.title}, photo ${index + 1} of ${listing.images.length}`} fill unoptimized priority sizes="100vw" className="object-cover" /></div>
      <button onClick={previous} aria-label="Previous photo" className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow"><ChevronLeft size={18} /></button>
      <button onClick={next} aria-label="Next photo" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow"><ChevronRight size={18} /></button>
      <span className="absolute bottom-4 right-4 rounded-lg bg-neutral-900/80 px-2.5 py-1 text-xs font-semibold text-white" aria-live="polite">{index + 1} / {listing.images.length}</span>
    </div>
  );
};
