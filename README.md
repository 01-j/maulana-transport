# Maulana Transport

Website for Maulana Transport, a driver-inclusive car rental and transport service in Yogyakarta.

## Requirements

- Node.js 18.18 or newer
- npm

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run start` serves the production build.

## Project Structure

- `app/` contains routes and page layouts.
- `components/` contains shared UI and booking components.
- `data/` contains site content and contact details.
- `public/` contains the images served by the site.

Booking requests are assembled in the browser and sent to the configured WhatsApp number in `data/site-data.ts`.
