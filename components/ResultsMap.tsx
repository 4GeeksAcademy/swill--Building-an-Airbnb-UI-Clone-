import Link from "next/link";
import { MapPin } from "lucide-react";
import { Listing } from "@/types/listing";

export const ResultsMap = ({ listings }: { listings: Listing[] }) => (
  <aside aria-label="Approximate listing map" className="relative min-h-80 overflow-hidden rounded-2xl bg-[#e8ede7] p-5 md:sticky md:top-24 md:h-[calc(100vh-7rem)]">
    <div aria-hidden="true" className="absolute inset-0 opacity-60 [background-image:linear-gradient(35deg,transparent_45%,white_46%,white_48%,transparent_49%),linear-gradient(115deg,transparent_47%,white_48%,white_50%,transparent_51%)] [background-size:120px_100px,160px_130px]" />
    <p className="relative flex items-center gap-1 text-xs font-semibold text-neutral-600"><MapPin size={14} /> Approximate locations · demo map</p>
    <div className="relative flex flex-wrap justify-center gap-5 pt-12">{listings.map((listing) => <Link key={listing.id} href={`/rooms/${listing.id}`} aria-label={`View ${listing.title}, $${listing.price} per night`} className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-semibold shadow-md hover:bg-neutral-900 hover:text-white">${listing.price}</Link>)}</div>
  </aside>
);
