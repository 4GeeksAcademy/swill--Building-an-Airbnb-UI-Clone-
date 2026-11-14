# Component specifications

## Architecture

Compose the three pages described in [context.md](./context.md) from shared
components. Keep listing, search, and saved-listing state separate from visual
components so the same property and selected criteria stay consistent across
pages. Use representative data; do not connect prototype controls to real
bookings or payments.

## Shared components

| Component | Purpose and key behavior | Used on |
| --- | --- | --- |
| App shell | Provides responsive page layout, navigation, and shared spacing. | All pages |
| Search entry and summary | Opens search and displays the current destination, dates, and guest count; supports editing. | Home, results |
| Search form | Captures destination, check-in, checkout, and guests; validates date order and guest counts before showing results. | Home, results |
| Category chips | Displays selectable browse categories with a visible selected state. | Home |
| Listing card | Shows image, title or location, property details as relevant, rating, price, optional badge, and favorite control; opens the matching listing. | Home, results |
| Photo carousel / gallery | Displays listing photos with accessible previous/next controls and current position. | Listing cards, detail |
| Favorite button | Toggles a listing's saved state consistently wherever it appears; exposes an accessible pressed state. | Listing cards, detail |
| Bottom navigation | Provides Explore, Wishlists, and Log in entries on mobile, including the active state. | Home, results |
| Footer | Groups support, hosting, company, locale, currency, and legal links. | Home, detail |
| Modal / sheet | Presents expanded search, filters, photos, reviews, or amenities when needed; handles focus, dismissal, and return of focus. | As needed |

## Page-specific components

| Component | Purpose and key behavior | Used on |
| --- | --- | --- |
| Continue-search card | Shows a previous search and restores its criteria when available. | Home |
| Recommendation section | Groups listing cards under a heading, supports horizontal browsing on mobile, and links to more results. | Home |
| Destination inspiration | Displays destination categories and related places. | Home, detail |
| Filter bar and panel | Shows available filters, applies or clears them, and reflects active selections in results. | Results |
| Results list and count | Renders matching listing cards, result count, and a clear empty state when no listings match. | Results |
| Results map | Presents approximate property locations and price markers corresponding to results; marker selection identifies the relevant listing. | Results |
| Listing header | Displays title, location, capacity, rating, review count, and relevant listing actions. | Detail |
| Reservation panel | Shows selected dates, guests, price, and reserve action; lets users edit criteria and clearly labels the action as a demo. On mobile, provide a persistent compact version without obscuring content. | Detail |
| Property overview | Displays host, description, and other listing highlights. | Detail |
| Review summary and cards | Displays aggregate rating and individual reviews, with an option to view more. | Detail |
| Sleeping arrangements | Shows bedroom photos or descriptions and bed information. | Detail |
| Amenities list | Shows available amenities and an option to view the full list. | Detail |
| Location section | Shows neighborhood information and an approximate location map, not an exact address. | Detail |
| Host profile | Displays host identity, hosting details, and a clearly labeled demo contact action if provided. | Detail |
| Things to know | Groups house rules, safety information, and cancellation terms. | Detail |

## Data and interaction requirements

- A listing needs a stable ID, photos with alternative text, title, location,
  property and capacity details, price and its pricing basis, rating and review
  count, amenities, host information, and any optional badge. Detail content,
  map markers, and cards refer to the same listing.
- Search state contains destination, check-in and checkout dates, guest count,
  and active filters. Results and displayed prices should reflect the criteria
  supported by the prototype. Explain any unsupported filter or pricing behavior
  instead of silently implying it works.
- Favorite state is keyed by listing ID and remains consistent during navigation.
  A continue-search card appears only when a previous search exists.
- Provide loading, empty, and error feedback where applicable. Unsupported
  navigation or actions must be clearly identified as unavailable or demo-only.
- All interactive elements need accessible names, keyboard support, visible
  focus, sufficient contrast, and appropriate selected or expanded states.
  Respect reduced-motion preferences for animated transitions.
