import { Award, BedDouble, MapPin, Star } from "lucide-react";
import { Listing } from "@/types/listing";

export const RoomContent = ({ listing }: { listing: Listing }) => (
  <div>
    <section className="border-b border-neutral-200 pb-7">
      <h2 className="text-xl font-semibold">Entire place in {listing.location}</h2>
      <p className="mt-2 text-sm">{listing.guests} guests · {listing.bedrooms} bedrooms · {listing.beds} beds · {listing.baths} bath{listing.baths === 1 ? "" : "s"}</p>
      <p className="mt-3 flex items-center gap-1 text-sm font-semibold"><Star size={15} fill="currentColor" /> {listing.rating.toFixed(2)} · {listing.reviews} reviews</p>
    </section>
    <section className="flex items-center gap-4 border-b border-neutral-200 py-6"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dec8b6] text-lg font-bold">{listing.host[0]}</div><div><h2 className="font-semibold">Hosted by {listing.host}</h2><p className="mt-1 text-sm text-neutral-500">{listing.hostYears} years hosting</p></div></section>
    <section className="border-b border-neutral-200 py-7"><div className="flex items-start gap-4"><Award className="shrink-0" /><div><h2 className="font-semibold">A guest favorite</h2><p className="mt-1 text-sm text-neutral-500">One of the most loved homes, according to guests.</p></div></div><p className="mt-7 leading-7 text-neutral-700">{listing.description}</p></section>
    <section className="border-b border-neutral-200 py-7"><h2 className="text-xl font-semibold">Where you&apos;ll sleep</h2><div className="mt-5 inline-flex min-w-40 flex-col gap-3 rounded-xl border border-neutral-200 p-5"><BedDouble /><div><p className="font-semibold">Bedroom</p><p className="mt-1 text-sm text-neutral-500">{listing.beds} bed{listing.beds === 1 ? "" : "s"}</p></div></div></section>
    <section className="border-b border-neutral-200 py-7"><h2 className="text-xl font-semibold">What this place offers</h2><ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">{listing.amenities.map((amenity) => <li key={amenity} className="flex items-center gap-3"><span aria-hidden="true" className="text-neutral-400">✳</span>{amenity}</li>)}</ul></section>
    <section className="border-b border-neutral-200 py-7"><h2 className="flex items-center gap-2 text-xl font-semibold"><Star size={20} fill="currentColor" /> {listing.rating.toFixed(2)} · {listing.reviews} reviews</h2><p className="mt-4 text-sm leading-6 text-neutral-600">Guests love the location, comfort, and thoughtful details of this stay. Ratings and reviews are representative demo content.</p></section>
    <section className="border-b border-neutral-200 py-7"><h2 className="text-xl font-semibold">Where you&apos;ll be</h2><p className="mt-4 font-semibold">{listing.neighborhood}, {listing.location}</p><div className="mt-4 flex h-48 items-center justify-center rounded-xl bg-[#e8ede7] text-sm text-neutral-600"><MapPin size={18} className="mr-2" /> Approximate location · demo map</div><p className="mt-3 text-xs text-neutral-500">The exact location is not displayed in this demo.</p></section>
    <section className="py-7"><h2 className="text-xl font-semibold">Meet your host</h2><p className="mt-4 font-semibold">{listing.host} · {listing.hostYears} years hosting</p><p className="mt-2 text-sm text-neutral-600">Host messaging is not available in this demo.</p><h2 className="mt-8 text-xl font-semibold">Things to know</h2><p className="mt-4 text-sm text-neutral-600">House rules, safety information, and cancellation terms are illustrative.</p></section>
  </div>
);
