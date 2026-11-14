# Interface context

## Goal

Build an Airbnb-inspired accommodation discovery interface to validate a reusable
component architecture before creating a custom design system. The experience
should follow the visual hierarchy and mobile layout in the reference screenshots
in [images/](./images/), while remaining usable on larger screens.

## User and intent

A prospective traveler wants to find a place to stay for a destination, dates,
and party size. They browse recommendations, compare homes by location, price,
rating, and amenities, inspect a promising listing, and decide whether to reserve
it or save it for later.

## Pages

### 1. Explore / home

- A prominent entry point to search, followed by accommodation and experience
  category chips.
- A continue-search card when a previous search is available.
- Horizontally scrollable recommendation sections with listing cards, section
  titles, and links to see more results.
- Destination inspiration and a footer with support, hosting, company, locale,
  and legal links.
- On mobile, a persistent bottom navigation for Explore, Wishlists, and Log in.

The user starts a search or opens a recommended listing.

### 2. Search results

- A compact search summary showing destination, dates, and guests, with an entry
  point to edit them.
- Filter controls and a map with listing price markers alongside or above the
  results, depending on screen size.
- A results count and listing cards with photos, favorite controls, badges,
  location, property details, rating, and total price.
- Mobile navigation consistent with the home page.

The user refines a search, compares properties, and selects a listing. Search
criteria should carry through to the listing detail page.

### 3. Listing detail

- A photo gallery, listing title, location, property and guest capacity summary,
  rating, review count, and host information.
- A price and reservation area showing the selected dates and guests, with a
  prominent reserve action; on mobile it remains accessible near the bottom.
- Listing description, review summary and review cards, sleeping arrangements,
  amenities, approximate location map, host profile, and things to know.
- Related destinations, inspiration, and footer links below the listing content.

The user evaluates the property and its terms before attempting to reserve.

## Scope and behavior

- This is an interface prototype, not a live accommodation marketplace. Use
  representative listing data and clearly indicate when an action is a demo.
- Search, navigation between the three pages, date and guest selection, filters,
  gallery browsing, and saving a listing should behave consistently within the
  prototype. Preserve search selections when navigating between results and a
  listing. Do not imply that a real reservation, payment, account, or message
  has been created.
- Wishlists, login, hosting, support, and other destinations visible in the
  reference are entry points, not additional fully specified pages. If they
  are not implemented, communicate that rather than presenting a dead control
  as functional.
- Use responsive layouts, readable content, keyboard-operable controls,
  descriptive image alternatives, and visible focus states. The supplied
  references are mobile screenshots; larger-screen layouts should adapt the
  same content and hierarchy rather than assume an unseen reference.
