# LootZone

LootZone is a modern game marketplace built with React and Vite. It includes browsing, rich game detail pages, and a full cart-to-checkout path with toast feedback.

## Features

- Add-to-cart with edition selection and inline toast notifications
- Game detail views with screenshots, specs, bundles, and descriptions
- Search and browse with categories, live suggestions, and filters
- Checkout with quantity controls, order summary, and thank-you confirmation
- Responsive layout, animated page transitions, and sticky navigation

## Tech Stack

- React 19 + Vite 7
- React Router 7 for client routing
- Tailwind CSS 4 for styling
- Lucide icons
- Axios for API access

## Getting Started

1) Install dependencies  
`npm install`

2) Run the dev server  
`npm run dev`

3) Build for production  
`npm run build`

4) Preview the production build  
`npm run preview`

## Scripts

- `npm run dev` — start Vite in development mode
- `npm run build` — create a production bundle
- `npm run preview` — serve the built app locally
- `npm run lint` — run ESLint checks

## Project Structure

- `src/App.jsx` — route definitions and layout shell
- `src/context/GameContext.jsx` — shared game data, cart state, and toast handling
- `src/components/` — UI pieces such as price box, tabs, galleries, and toasts
- `src/layouts/` — Navbar and Footer
- `src/pages/` — Home, Browse, GameDetails, Checkout, ThankYou, News, Contact, NotFound
- `src/utils/` — formatting helpers and API client

## Notes

- `GameProvider` in `src/main.jsx` wires global cart and toast state across the app.
- Completing checkout clears the cart and routes to `/thank-you` with a summary payload.
- Update API integration or keys in `src/utils/api.js` to align with your data source.
