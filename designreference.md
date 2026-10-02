# Summary

A confident, practical transport-service design system built around a deep navy and trust-blue palette, Space Grotesk typography, and imagery-led showcase sections. The system balances a calm, professional header and hero with structured service/fleet grids, a fast booking widget, and WhatsApp-first conversion throughout.

# Style

The style is defined by its dependable, modern transport branding: heavy use of 'Space Grotesk' for bold, slightly-tight headlines and functional body text, with a restrained navy/blue palette on a pale paper background. The aesthetic avoids decorative fluff, relying instead on strong photography, sharp hairline borders, high-contrast buttons, and clear hierarchy. Content is written in Bahasa Indonesia and always leads the visitor toward reserving a vehicle or chatting on WhatsApp.

## Spec

Create a high-contrast, conversion-focused UI for a Jogja car-rental service.
- **Palette**: Backgrounds in pale paper (#f7f7f7) and white (#ffffff); primary text in deep navy (#112b45); dark surfaces and deep-section backgrounds in ink-deep (#013b74) and ink (#112b45). Primary action blue (#0264c3) with hover darkening (#014f98). Soft blue accents/washes (#e5f1fb), hairline borders (#dbe4ec), muted secondary text (#657383), and WhatsApp green (#1d9d62) reserved for chat actions.
- **Typography**: Headlines in 'Space Grotesk' (weight 750), letter-spacing -0.065em, leading 0.98 for display sizes. Body text in Space Grotesk (weight 400/500) at 17px with 1.65 leading. Eyebrow labels are 11px uppercase with 0.16em tracking, weight 800.
- **Imagery**: Real vehicle, route, and destination photography (e.g., city, road, heritage sites). Images use cover-fit and a slow 0.7s scale reveal on hover; overlay panels use backdrop-blur for legibility.
- **Interactions**: 0.2s ease transitions for colors, borders, transforms, and shadows. Buttons lift 2px on hover and press down on active. Image zoom is 700ms cubic-bezier(0.2, 0.7, 0.2, 1). Focus states use a 3px soft-blue outline.
- **Brand voice**: Indonesian copy, confident and helpful, emphasizing driver-inclusive service, flexible routes, and fast WhatsApp confirmation.

# Layout & Structure

The structure flows from a photographic hero into an overlaid quick-booking card, a 4-column service grid, a dark "why us" band with a fleet image, a white fleet-preview section, a soft-blue testimonial quote, and a solid-blue closing CTA. Every action routes to the booking flow or WhatsApp.

## Navigation

Sticky header with a height of 78px, 92% white/paper background and backdrop-blur(14px), bottom border 1px #dbe4ec. Brand row shows the logo image with name "Maulana Transport" and meta "Jogja · Since 2012". Links: 13px weight 700 in slate (#52617a) with a 0.2s color transition to blue on hover, gap 28px. Primary "Pesan sekarang" button is blue (#0264c3) with white text. On mobile the links collapse into a hamburger-toggled drawer.

## Hero Section

Full-width section with min-height 650px, deep-navy background (#013b74), and a right-aligned vehicle image overlaid with a left-to-right navy gradient for text contrast. Eyebrow label, large display headline (e.g., "Berangkat dengan tenang dari Jogja."), one supporting paragraph in light blue-gray, and two CTAs: a primary blue "Pesan kendaraan" button and a ghost "Lihat armada" button with a white border. Below the CTAs, a stamp row of three proof points (Driver profesional · Rute fleksibel · Konfirmasi cepat) separated by a hairline white border.

## Quick Booking Widget

A white card pulled up over the hero bottom (-42px overlap), 1px #dbe4ec border and a soft navy shadow. Four-column grid: Layanan (select), Tanggal (date), Area (select), and a primary "Cari kendaraan" button. Labels are 11px uppercase muted; field values are 16px navy at weight 750. On mobile the card drops inline and stacks.

## Services Section

Section heading pairs an eyebrow + large title on the left with a short supporting paragraph on the right. Below, a 4-column bordered grid (hairline #dbe4ec lines). Each card shows an index number in blue, a bold service name, a muted description, and an "Pelajari layanan" arrow-link in blue. Cards lift 4px on hover with a white background.

## Feature Band (Kenapa Maulana)

Dark section (#112b45) with white text, split into text left and a 540px image-frame right. Three numbered proof points in a hairline-bordered list: numbered strong label in blue, supporting line in off-white. The image carries an overlay label with dark translucent background and backdrop-blur.

## Fleet Preview

White section with a 1.35fr/1fr/1fr vehicle-card grid. Each card is a bordered image (210px, first card taller at 310px) over a paper body showing a blue category tag, vehicle name, seat/luggage meta, rate estimate (navy label + blue value), and a "Lihat detail" arrow-link. Cards link to the fleet detail pages.

## Quote / Testimonial Section

Soft-blue background (#e6edff via --blue-soft). Two-column layout: left holds a large blue quote mark and eyebrow, right holds a large testimonial quote in navy with an attribution line in muted text. Keep real reviews where available.

## CTA Band

Solid blue (#0264c3) band, white text, large headline ("Sudah tahu mau ke mana?") and a white button that inverts to navy on hover. Leads to the reservation page.

## Footer

Deep navy (#013b74) with light blue-gray text (#d5e3f1). 4-column grid: brand + short description, "Jelajahi" links, "Layanan" links, and "Hubungi" contact details (tel, email, address). Column headings are 11px uppercase white. Bottom bar separated by a 14% white hairline with copyright and a "Booking via WhatsApp" note.

# Special Components

## WhatsApp Float

Fixed bottom-right pill button (48px min-height, right 20px / bottom 20px), WhatsApp green background (#1d9d62) with a filled WhatsApp icon, darkening to #168450 on hover. Text label collapses on small screens. Links directly to a pre-filled wa.me message.

## Booking Form

Two-column form grid on a white card with 1px #dbe4ec border and 32px padding. Fields: Nama lengkap, No. HP, Pilihan layanan, Pilihan mobil, Tanggal, Titik jemput, Tujuan/rute, and Catatan tambahan. Inputs are paper backgrounds with sharp (0 radius) corners, navy text, and a blue border on focus. Validation inline in red for missing required fields. Submit button composes all fields into a formatted WhatsApp message and opens wa.me in a new tab; a success state replaces the form with a green check, heading, and description.

## Fleet Detail Specs

Detail pages split 1.15fr/0.85fr: a tall vehicle image on the left and copy on the right. A spec grid (2 columns) shows capacity, luggage, and feature rows with muted 10px uppercase labels. Primary "Pesan" action plus ghost secondary actions below.

## Contact & FAQ

Contact page uses a .8fr/1.2fr split: contact list with icon rows (orange/blue icon, strong label, muted value) and a map frame with a navy gradient overlay and imagery. FAQ items are full-width, bordered rows with bold summaries (details/summary) and muted answers.

## Iconography

Use Phosphor Icons (line/regular weight), sized 15-25px, in blue for accents and white for dark surfaces. No emoji or decorative clip-art. Arrows indicate progression (ArrowRight / ArrowUpRight); WhatsApp uses the filled brand glyph.