"use client";

import { Heart } from "lucide-react";
import { useApp } from "@/components/AppProvider";

export const FavoriteButton = ({ id, title, overlay = false }: { id: string; title: string; overlay?: boolean }) => {
  const { saved, toggleSaved } = useApp();
  const active = saved.includes(id);
  return <button type="button" aria-label={`${active ? "Remove" : "Save"} ${title} ${active ? "from" : "to"} favorites`} aria-pressed={active} onClick={() => toggleSaved(id)} className={overlay ? "rounded-full p-1 text-white drop-shadow-md" : "flex items-center gap-2 rounded-lg p-2 text-sm font-semibold underline"}><Heart size={overlay ? 23 : 19} fill={active ? "#ff385c" : overlay ? "rgba(0,0,0,.45)" : "none"} strokeWidth={2} />{!overlay && (active ? "Saved" : "Save")}</button>;
};
