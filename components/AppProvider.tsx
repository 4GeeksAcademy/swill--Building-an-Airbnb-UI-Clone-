"use client";

import { createContext, useContext, useState } from "react";
import { initialSearch } from "@/lib/search";
import { Search } from "@/types/listing";

type AppState = {
  search: Search;
  setSearch: (search: Search) => void;
  hasSearched: boolean;
  saved: string[];
  toggleSaved: (id: string) => void;
  category: string;
  setCategory: (category: string) => void;
  sort: string;
  setSort: (sort: string) => void;
};

const Context = createContext<AppState | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, updateSearch] = useState(initialSearch);
  const [hasSearched, setHasSearched] = useState(false);
  const [saved, setSaved] = useState<string[]>([]);
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("recommended");
  const setSearch = (value: Search) => { updateSearch(value); setHasSearched(true); };
  const toggleSaved = (id: string) => setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  return <Context.Provider value={{ search, setSearch, hasSearched, saved, toggleSaved, category, setCategory, sort, setSort }}>{children}</Context.Provider>;
};

export const useApp = () => {
  const value = useContext(Context);
  if (!value) throw new Error("useApp must be used within AppProvider");
  return value;
};
