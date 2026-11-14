import { Globe } from "lucide-react";

const groups = [
  { title: "Support", items: ["Help Center", "Get help with a safety issue", "Cancellation options", "Accessibility"] },
  { title: "Hosting", items: ["Airbnb your home", "Hosting resources", "Community forum", "Hosting responsibly"] },
  { title: "About", items: ["Newsroom", "Careers", "Investors", "Gift cards"] },
];

export const Footer = () => (
  <footer className="border-t border-neutral-200 bg-[#f7f7f7] px-6 pb-28 pt-12 md:px-10 md:pb-8">
    <div className="mx-auto max-w-[1440px]">
      <h2 className="text-xl font-semibold">Inspiration for future getaways</h2>
      <p className="mt-4 border-b border-neutral-300 pb-4 text-sm font-semibold">Popular <span className="ml-8 font-normal text-neutral-500">Arts & culture</span><span className="ml-8 font-normal text-neutral-500">Beach</span></p>
      <div className="grid grid-cols-2 gap-5 py-7 text-sm sm:grid-cols-4">
        {["Detroit", "Ann Arbor", "Chicago", "Cleveland", "Grand Rapids", "Traverse City", "Columbus", "Milwaukee"].map((city) => <div key={city}><div className="font-semibold">{city}</div><div className="mt-1 text-neutral-500">Vacation rentals</div></div>)}
      </div>
      <div className="grid gap-6 border-t border-neutral-200 py-7 sm:grid-cols-3">
        {groups.map((group) => <div key={group.title}><h3 className="text-sm font-semibold">{group.title}</h3><ul className="mt-4 space-y-3 text-sm text-neutral-600">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-sm"><p>© 2026 Airbnb-inspired demo · No bookings are made</p><p className="flex items-center gap-2 font-semibold"><Globe size={16} /> English (US) &nbsp; $ USD</p></div>
    </div>
  </footer>
);
