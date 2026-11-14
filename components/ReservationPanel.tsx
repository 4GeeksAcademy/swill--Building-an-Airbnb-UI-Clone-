"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useApp } from "@/components/AppProvider";
import { nightsBetween } from "@/lib/search";
import { Listing } from "@/types/listing";

export const ReservationPanel = ({ listing }: { listing: Listing }) => {
  const { search, setSearch } = useApp();
  const [form, setForm] = useState({ ...search, guests: Math.min(search.guests, listing.guests) });
  const [message, setMessage] = useState("");
  const nights = nightsBetween(form);
  const reserve = () => {
    if (!form.checkIn || !form.checkOut || !nights) {
      setMessage("Choose a check-in and a later checkout date to continue.");
      return;
    }
    setSearch(form);
    setMessage("This is a demo. No reservation or payment has been made.");
  };
  return (
    <section id="reserve" className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_6px_25px_rgba(0,0,0,.1)]">
      <p className="text-xl"><strong>${listing.price}</strong> <span className="text-sm">night</span></p>
      <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-xl border border-neutral-400">
        <label className="border-r border-neutral-300 p-3 text-[10px] font-bold uppercase">Check in<input type="date" value={form.checkIn} onChange={(e) => setForm({ ...form, checkIn: e.target.value })} className="mt-1 block w-full min-w-0 text-xs font-normal" /></label>
        <label className="p-3 text-[10px] font-bold uppercase">Checkout<input type="date" value={form.checkOut} onChange={(e) => setForm({ ...form, checkOut: e.target.value })} className="mt-1 block w-full min-w-0 text-xs font-normal" /></label>
        <div className="col-span-2 flex items-center justify-between border-t border-neutral-300 p-3"><span className="text-sm">{form.guests} {form.guests === 1 ? "guest" : "guests"} <span className="text-neutral-500">(max {listing.guests})</span></span><div className="flex items-center gap-3"><button onClick={() => setForm({ ...form, guests: form.guests - 1 })} disabled={form.guests <= 1} aria-label="Remove guest" className="rounded-full border border-neutral-300 p-1 disabled:opacity-30"><Minus size={16} /></button><button onClick={() => setForm({ ...form, guests: form.guests + 1 })} disabled={form.guests >= listing.guests} aria-label="Add guest" className="rounded-full border border-neutral-300 p-1 disabled:opacity-30"><Plus size={16} /></button></div></div>
      </div>
      <button onClick={reserve} className="mt-4 w-full rounded-xl bg-[#e61e4d] py-3.5 font-semibold text-white hover:bg-[#d90b47]">Reserve</button>
      <p className="mt-3 text-center text-xs text-neutral-500">Demo only · You won&apos;t be charged</p>
      {message && <p role="status" className="mt-4 rounded-lg bg-neutral-100 p-3 text-sm">{message}</p>}
      {nights > 0 && <div className="mt-5 flex justify-between border-t border-neutral-200 pt-4 text-sm"><span>${listing.price} × {nights} {nights === 1 ? "night" : "nights"}</span><strong>${listing.price * nights} before taxes</strong></div>}
    </section>
  );
};
