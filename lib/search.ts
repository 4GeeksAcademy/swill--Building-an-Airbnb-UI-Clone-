import { Search } from "@/types/listing";

export const initialSearch: Search = { destination: "", checkIn: "", checkOut: "", guests: 1 };

export function nightsBetween(search: Search): number {
  if (!search.checkIn || !search.checkOut) return 0;
  return Math.max(0, Math.round((Date.parse(`${search.checkOut}T00:00:00Z`) - Date.parse(`${search.checkIn}T00:00:00Z`)) / 86400000));
}

export function dateSummary(search: Search): string {
  if (!search.checkIn || !search.checkOut) return "Add dates";
  const format = (date: string) => new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
  return `${format(search.checkIn)} – ${format(search.checkOut)}`;
}
