"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search as SearchIcon, X } from "lucide-react";
import { useApp } from "@/components/AppProvider";

export const SearchDialog = ({ onClose }: { onClose: () => void }) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const { search, setSearch } = useApp();
  const [form, setForm] = useState(search);
  const [error, setError] = useState("");
  const router = useRouter();
  useEffect(() => { dialog.current?.showModal(); }, []);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if ((form.checkIn || form.checkOut) && (!form.checkIn || !form.checkOut || form.checkOut <= form.checkIn)) {
      setError("Choose both dates, with checkout after check-in.");
      return;
    }
    setSearch({ ...form, destination: form.destination.trim() });
    onClose();
    router.push("/catalog");
  };
  const field = "mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm";
  return (
    <dialog ref={dialog} onClose={onClose} className="m-auto w-[calc(100%-32px)] max-w-lg rounded-3xl p-0 shadow-2xl">
      <form onSubmit={submit} className="p-6 sm:p-8">
        <div className="mb-7 flex items-center justify-between"><h2 className="text-xl font-semibold">Start your search</h2><button type="button" onClick={onClose} aria-label="Close search" className="rounded-full p-2 hover:bg-neutral-100"><X size={20} /></button></div>
        <label className="block text-sm font-semibold">Where<input className={field} placeholder="Search destinations" value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} /></label>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <label className="text-sm font-semibold">Check in<input className={field} type="date" value={form.checkIn} onChange={(e) => setForm({ ...form, checkIn: e.target.value })} /></label>
          <label className="text-sm font-semibold">Check out<input className={field} type="date" value={form.checkOut} onChange={(e) => setForm({ ...form, checkOut: e.target.value })} /></label>
        </div>
        <label className="mt-4 block text-sm font-semibold">Guests<input className={field} type="number" min="1" max="16" required value={form.guests} onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })} /></label>
        {error && <p role="alert" className="mt-3 text-sm text-red-700">{error}</p>}
        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff385c] px-5 py-3.5 font-semibold text-white hover:bg-[#e31c5f]"><SearchIcon size={18} /> Search stays</button>
      </form>
    </dialog>
  );
};
