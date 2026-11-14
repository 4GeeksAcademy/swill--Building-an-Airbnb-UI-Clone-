export type Listing = {
  id: string;
  title: string;
  location: string;
  neighborhood: string;
  category: "City" | "Cabins" | "Lakefront" | "Design";
  price: number;
  rating: number;
  reviews: number;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  host: string;
  hostYears: number;
  images: string[];
  description: string;
  amenities: string[];
  badge?: string;
};

export type Search = {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
};
