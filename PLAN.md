# Sanju Maruti Services — Website Plan

Domain: https://sanjumarutiservices.com/
Business: multi-brand car service, washing, detailing, coating, accessories. ~20 years.
Area: Jalgaon, Bhadgaon, Pachora, Chalisgaon (Jalgaon district, Maharashtra).
Location: Jargaon Crossing, near Hindustan Tyre, Pachora Road.
Phone / WhatsApp: +91 99750 49393 (`tel:+919975049393`, `https://wa.me/919975049393`)
Languages: English + Marathi (toggle). Hindi optional later.

---

## 1. Decisions (locked)

| Area | Decision | Why |
|---|---|---|
| Framework | Astro (static output) + React islands | Prebuilt HTML for SEO; React only for compare tool and filters |
| Styling | Tailwind CSS | Fast, consistent tokens |
| Content | Markdown + JSON in repo | Owner edits without code |
| Hosting | Vercel or Netlify (free tier) | Static, free, HTTPS, CDN |
| Domain | sanjumarutiservices.com (owned) | DNS to host |
| Booking | WhatsApp deep links + tap-to-call | Matches how local customers book |
| Forms | None in v1 | Add later if lead tracking needed |
| Style | Premium: charcoal base, brass accent, serif headings | Premium car-service feel |
| Brand claim | "Multi-brand, including luxury." No "authorised" / "certified" unless true | Avoid false claims |
| Trademark | Don't use Maruti Suzuki logo or branding; "Maruti" only as business name | Trademark risk |

## 2. Design system

- **Colors**
  - `--ink` #0F1115 (base dark)
  - `--ink-2` #171A21 (cards on dark)
  - `--paper` #F7F5F0 (light sections)
  - `--brass` #B8860B-ish, tune to #C9A227 for accent
  - `--muted` #6B7280
- **Type**
  - Display: Fraunces (serif)
  - Body: Inter
  - Marathi: Noto Sans Devanagari
- **Layout**
  - Max width 1200px, 16px mobile gutter
  - No horizontal scroll at phone width
  - Tap targets ≥ 44px
- **Motion**: subtle fades only; respect `prefers-reduced-motion`
- **Imagery**: real workshop/car photos; placeholders until supplied
- **Accessibility**: WCAG AA contrast, alt text, keyboard nav

## 3. Site map

| Route | Purpose | Key content |
|---|---|---|
| `/` | Home | Hero, CTA (Call/WhatsApp), brands strip, top services, price-from cards, reviews, map |
| `/services` | All services | Cards per service with starting price |
| `/services/[slug]` | Service detail | Periodic service, AC, denting-painting, car wash, ceramic coating, PPF, tyres & alignment, battery, clutch/engine, insurance claims, pickup-drop |
| `/coating-detailing` | High-margin page | Coating tiers, before/after, care tips |
| `/brands` | Brands serviced | All brands incl. luxury, one line each |
| `/pricing` | Packages | Starting prices + "exact quote after inspection" |
| `/car-compare` | Fun section | See section 5 |
| `/gallery` | Before/after + workshop | Filterable by service |
| `/reviews` | Google reviews | Embedded/styled |
| `/about` | Owner story | ~20 yrs, team, workshop |
| `/areas/jalgaon` | Local SEO | Unique local copy |
| `/areas/bhadgaon` | Local SEO | Unique local copy |
| `/areas/pachora` | Local SEO | Unique local copy |
| `/areas/chalisgaon` | Local SEO | Unique local copy |
| `/contact` | Contact + map | Address, hours, phone, WhatsApp, directions |
| `/mr/*` | Marathi mirror | Same routes, Marathi copy |
| `/404` | Not found | Link back to home + WhatsApp |

## 4. Components (React islands marked *)

- Header (sticky, language toggle, Call button)
- Mobile bottom bar: Call | WhatsApp | Directions
- Hero
- BrandStrip
- ServiceCard, PriceCard
- Testimonials / ReviewsWall
- Gallery (filter by service) *
- WhatsAppButton (prefilled message with service + car model) *
- CarCompare: filters + results + comparison table *
- Footer (address, hours, social links)

## 5. Car compare section ("Which car to buy in India")

**Data source (v1):** curated JSON in `src/data/cars.json`. No public API has reliable Indian specs and prices. Scraping is out (ToS, brittle).

**Schema per car:**
- id, brand, model, segment (hatchback / sedan / SUV / MPV / EV)
- price range ex-showroom (₹ lakh), variant note
- fuel (petrol / diesel / CNG / EV), transmission
- mileage (claimed, with source), seats, boot space, ground clearance
- safety (Bharat NCAP stars if tested)
- **your data:** avg yearly service cost, common issues, parts cost band (from your workshop)
- lastUpdated

**Filters:** budget slider, segment, fuel, transmission, seats, safety stars, mileage, yearly service cost.

**Local toggle:** "Jalgaon roads" — boosts ground clearance and suspension ranking.

**Compare:** pick up to 3, side-by-side table.

**Disclaimer:** "Prices are approximate ex-showroom. Check manufacturer for current prices." Show `lastUpdated`.

**Update process:** monthly manual refresh. Owner edits JSON or we add a Markdown-to-JSON step.

## 6. Local SEO

- LocalBusiness JSON-LD on every page: name, address, geo, phone, hours, services, priceRange.
- Per-area pages with unique copy (landmarks, roads, typical customers). No copy-paste.
- Keywords: car service Jalgaon / Pachora / Chalisgaon / Bhadgaon; car wash; ceramic coating; multi-brand car service; plus Marathi variants.
- Meta title + description per page. OG tags.
- `sitemap.xml`, `robots.txt`, canonical URLs, hreflang for `/` and `/mr/`.
- Google Business Profile: keep name, phone, hours, website in sync with site. Weekly photo upload.
- Google Search Console + Analytics on launch day.

## 7. Content needed from owner (placeholders until supplied)

- [ ] Listing details: exact name, address, hours, services, rating (from Google Maps)
- [ ] Services list with starting prices
- [ ] Brands serviced (incl. luxury) — confirm list
- [ ] Years in business (~20), staff count, workshop size
- [ ] Certifications / dealer tie-ups (only if real)
- [ ] Photos: workshop, team, before/after, logo
- [ ] Owner bio / about text (English + Marathi)

## 8. Execution phases

### Phase 0 — Setup (day 1)
- [ ] Scaffold Astro + React + Tailwind in `~/Downloads/sanju-maruti-website`
- [ ] Git init, first commit
- [ ] Base layout, header, footer, mobile bottom bar
- [ ] Design tokens in Tailwind config
- [ ] Placeholder content in `src/content/`

### Phase 1 — Core pages (days 2–4)
- [ ] Home
- [ ] Services list + detail template (7+ services)
- [ ] Brands page
- [ ] Pricing page
- [ ] Contact page with map + hours
- [ ] WhatsApp + tap-to-call wired everywhere

### Phase 2 — Trust + content (days 5–7)
- [ ] About page (Marathi + English)
- [ ] Gallery with filter (React)
- [ ] Reviews section
- [ ] Coating & detailing page
- [ ] 404 page

### Phase 3 — Compare tool (days 8–10)
- [ ] `cars.json` seeded (start with ~30 cars across segments)
- [ ] CarCompare React island: filters, results, compare table
- [ ] Jalgaon roads toggle
- [ ] Disclaimer + lastUpdated

### Phase 4 — Local SEO + Marathi (days 11–13)
- [ ] Area pages x4 with unique copy
- [ ] Marathi mirror `/mr/*`
- [ ] LocalBusiness JSON-LD
- [ ] Sitemap, robots, canonicals, hreflang, OG tags

### Phase 5 — QA + launch (days 14–15)
- [ ] Lighthouse ≥ 90 mobile (perf, a11y, SEO)
- [ ] Phone-width check, no horizontal scroll
- [ ] All links, phone, WhatsApp verified on real phone
- [ ] Deploy to Vercel/Netlify, point DNS for sanjumarutiservices.com
- [ ] Search Console + Analytics, submit sitemap
- [ ] GBP website link updated

### Phase 6 — After launch
- [ ] Monthly car data refresh
- [ ] Weekly GBP photo/post
- [ ] Review new area pages as keywords show traction

## 9. Open questions

1. Listing details (name, address, hours, services) — paste from Google Maps.
2. Service list + starting prices.
3. Brands serviced (confirm luxury list).
4. Owner photos, logo, bio — can come later; placeholders in the meantime.

## 10. Change log

- v0.1 — initial plan.
