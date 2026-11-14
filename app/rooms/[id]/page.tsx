import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";
import { notFound } from "next/navigation";
import { FavoriteButton } from "@/components/FavoriteButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PhotoGallery } from "@/components/PhotoGallery";
import { ReservationPanel } from "@/components/ReservationPanel";
import { RoomContent } from "@/components/RoomContent";
import { listings } from "@/lib/listings";

export default async function RoomPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const listing = listings.find((item) => item.id === id);
  if (!listing) notFound();
  return (
    <>
      <div className="hidden md:block"><Header /></div>
      <main className="mx-auto max-w-[1120px] pb-10 md:px-10 md:pt-8">
        <div className="flex items-center justify-between px-5 py-3 md:px-0"><Link href="/catalog" aria-label="Back to stays" className="flex items-center gap-2 rounded-full p-2 text-sm font-semibold hover:bg-neutral-100"><ArrowLeft size={19} /><span className="hidden md:inline">Back to stays</span></Link><FavoriteButton id={listing.id} title={listing.title} /></div>
        <h1 className="hidden pb-5 text-3xl font-semibold md:block">{listing.title}</h1>
        <PhotoGallery listing={listing} />
        <div className="px-5 pt-6 md:px-0"><h1 className="text-2xl font-semibold leading-tight md:hidden">{listing.title}</h1><p className="mt-2 text-sm font-semibold underline md:hidden">{listing.neighborhood}, {listing.location}</p>
          <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,1fr)_340px] md:gap-16"><RoomContent listing={listing} /><div className="md:sticky md:top-28 md:self-start"><ReservationPanel listing={listing} /></div></div>
        </div>
      </main>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-between border-t border-neutral-200 bg-white px-5 py-3 md:hidden"><div><p className="text-sm"><strong className="text-lg">${listing.price}</strong> night</p><p className="flex items-center gap-1 text-xs"><Star size={12} fill="currentColor" /> {listing.rating.toFixed(2)} · {listing.reviews} reviews</p></div><a href="#reserve" className="rounded-lg bg-[#e61e4d] px-7 py-3 text-sm font-semibold text-white">Check availability</a></div>
    </>
  );
}
