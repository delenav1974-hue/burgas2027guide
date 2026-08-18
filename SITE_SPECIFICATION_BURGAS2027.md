# Technical, Architectural & Strategic Specification: Burgas 2027 Portal

## 1. Brand Identity & Editorial Persona

### Editorial Voice: "The Local Insider Team"
* **Perspective:** Collective first-person plural (**"We" / "Our Team"**).
* **Positioning:** An independent editorial desk consisting of local Black Sea residents, event logistics specialists, and coastal hospitality experts.
* **Tone:** Sharp, authoritative, energetic, and highly practical. Zero generic marketing filler; high density of actionable tips, tested routes, and realistic trade-offs.
* **Key Visual Component:** Dedicated callout containers across guides titled *"Local Insider Note"* / *"Tested by Our Team"*.

### Legal Disclaimer & Independence Clause
> *"Disclaimer: burgas2027guide.com is an independent fan travel portal and is not affiliated with, endorsed by, or connected to the European Broadcasting Union (EBU), Bulgarian National Television (BNT), or the official Eurovision Song Contest."*

---

## 2. Design System & UI/UX Guidelines

```
/* CSS Variables / Theme Tokens */
--bg-primary:      #0B0F19; /* Deep Stage Black / Midnight Sea */
--bg-surface:      #161D2F; /* Frosted Glass Container Background */
--accent-cyan:     #00F0FF; /* Turquoise Carpet / Primary Action */
--accent-magenta:  #FF007A; /* Stage Spotlight / Energy Pink */
--accent-amber:    #FFB800; /* Sunset Gold / Action Highlight */
--text-main:       #FFFFFF; /* High-contrast headers */
--text-muted:      #94A3B8; /* Slate gray for secondary copy */
--glass-border:    rgba(255, 255, 255, 0.08);
```

### Interactive UI Modules
1. **Countdown Hero Banner:** Dynamic live countdown timer to the Grand Final (May 15, 2027 at Arena Burgas).
2. **Interactive Zone Map:** Color-coded clusters (🟣 *Arena & Party Hub*, 🔵 *Sea Garden & Center*, 🟡 *Coastal Shuttle Towns: Pomorie, Sarafovo, Nessebar, Sozopol*).
3. **Live Lodging Availability Meter:** Visual indicator displaying estimated area occupancy and urgency triggers.
4. **Airport-to-Arena Transit Selector:** Instant route, pricing, and booking calculator (covering IST, BOJ, VAR).

---

## 3. Link Curation & Anti-Clutter Protocol

To maintain high domain authority, avoid clutter, and maximize user conversion, the site enforces strict link rules:

### A. The "Rule of 3"
* **Dining & Nightlife:** Maximum 3–5 handpicked venues per category. Never publish endless unstructured lists.
* **Transit:** Maximum 2 clear scenarios per route (Public Transit vs. Private Transfer/Taxi).

### B. Internal Place Cards vs. External Links
* External restaurant links are banned; all local recommendations are formatted as native **Place Cards**:
  * Venue Name (EN / BG).
  * Price Tier (`€€`, `€€€`) & Signature highlight.
  * Local Insider rationale.
  * Micro-triggers only: `📍 Google Maps` and `📸 Instagram`.

### C. Local Business Quality Gate (All 4 Required)
1. **English-friendly:** Menu and staff proficiency in English.
2. **Card Payments:** Contactless POS terminal supported without cash-only demands.
3. **Google Rating:** Minimum **4.5★** with 200+ authentic reviews.
4. **Strategic Location:** Walking distance to Arena/Center or direct shuttle stops.

---

## 4. Site Architecture & Directory Structure (100% English-First)

```
/ (Homepage: Live Countdown + Quick Transit Finder + Top Stays)
│
├── /where-to-stay/
│   ├── /arena-burgas-hotels/ (Walking distance vs. Quick transit)
│   ├── /sea-garden-and-center/ (Nightlife, promenade, beach dining)
│   └── /coastal-alternatives/ (Pomorie, Sarafovo, Nessebar, Sozopol)
│
├── /transfers-logistics/
│   ├── /burgas-airport-boj-guide/ (Official taxis, public line #15, private vans)
│   ├── /varna-airport-var-to-burgas/ (Direct express shuttles & coastal trains)
│   └── /istanbul-to-burgas-transit/ (Border crossing, VIP buses, car rental)
│
├── /arena-and-event/
│   ├── /arena-burgas-visitor-guide/ (Layout, seating tiers, bag policy, accessibility)
│   ├── /ticket-sale-waves-guide/ (Official drop dates, resale rules, scam alerts)
│   └── /eurovillage-and-parties/ (Live broadcast stages, clubs, fan schedule)
│
├── /black-sea-guide/
│   ├── /food-wine-seafood/ (Curated Place Cards of authentic taverns & bars)
│   └── /top-day-trips/ (Old Nessebar, Sozopol Old Town, St. Anastasia Island)
│
├── /direct-stays/
│   └── (Curated, verified local apartment listings with direct host inquiry)
│
├── /side-events/
│   ├── /sunset-boat-parties/ (Yacht and catamaran cruises during contest week)
│   └── /beach-wellness-sound/ (Morning sound healing, ecstatic dance, beach chill)
│
└── /host-portal/ (Minimal B2B Entry in Footer)
    └── /list-your-property/ (Host verification submission form & criteria)
```

---

## 5. Comprehensive Monetization Strategy

| Stream | Operational Mechanism | Target Audience | Expected Margin / Pricing |
| :--- | :--- | :--- | :--- |
| **Affiliate Engine** | Travelpayouts widgets (Booking.com, KiwiTaxi, DiscoverCars, Airalo eSIM, GetYourGuide) | International Fans | 4%–15% commission per conversion |
| **Istanbul ➔ Burgas Transfer Brokerage** | Direct contracts with private minivan fleets (Mercedes V-Class/Sprinter) | Western European travelers flying via IST | €30–€70 net margin per vehicle |
| **VIP & Press Concierge Packages** | High-ticket all-inclusive bundles (Lodging + VIP Transfer + 24/7 Concierge) | Media delegations, corporate sponsors, OGAE clubs | 25%–35% package margin (€2,500–€6,000/pkg) |
| **Exclusive Side Events & Cruises** | Direct ticketing on-site (Sunset Boat Parties, Morning Sound/Ecstatic Dance sessions) | Active event attendees | €40–€80 per ticket (40%–60% net profit) |
| **B2B Local Business Sponsorships** | Paid featured listings (*Featured Restaurant of the Day*, *Official Afterparty Venue*) | Local restaurants, beach clubs, clinics | €150–€350 per seasonal placement |
| **Direct Host Listing Fee** | Paid badge & listing fee for verified local apartment owners | Local apartment owners | €50–€150 per listing season |

---

## 6. Social & Broadcast Channels Strategy

### A. Western Europe & Global (B2C English-First)
* **Automated Email Funnels:** Handled via MailerLite/Brevo triggered by free PDF lead-magnet downloads.
* **WhatsApp Channel:** (*"Burgas 2027 Live Guide"*) — Flash updates on ticket waves, transit changes, and secret lodging drops.
* **Reddit / OGAE Outreach:** Value-first participation in `r/eurovision` and national fan forums.

### B. Eastern Europe, Baltics & Russian-Speaking Audience
* **Telegram Channel:** (*«Бургас 2027 | Гид, Билеты, Жилье» / «Burgas 2027 Hub»*).
* **Role:** High-speed alerts for travelers from Eastern Europe and regional expats.
* **Content:** Instant ticket queue links, direct apartment drops from local hosts, border waiting times, and arena shuttle updates.

---

## 7. High-Converting Free Lead Magnets (PDF Downloads)

1. **"The Ultimate Burgas 2027 Arena & Transit Cheat-Sheet" (PDF):**
   * Night shuttle timetables from Arena Burgas.
   * Step-by-step Istanbul Airport (IST) to Burgas transfer guide.
   * Official taxi apps, ride-hailing contacts, and fare caps.
2. **"Burgas 2027 Lodging Map: Walking Distance vs. Coastal Towns" (PDF):**
   * Commute times, neighborhood trade-offs, and price benchmarks.
   * 5 critical questions to ask Bulgarian hosts before booking.
3. **"Black Sea Secret Spots: 72 Hours in & Around Burgas" (PDF):**
   * Handpicked fish taverns, salt-pan pink pools, and island boat trips.

---

## 8. Content Publishing Roadmap

* **Stage 1 (Months 1–2):** Where to Stay Near Arena Burgas; Complete Transit Playbook (IST/VAR/BOJ); Arena Layout & Rules.
* **Stage 2 (Months 3–4):** Ticket Drop Waves & Official Resale; Alternative Shuttle Towns (Pomorie, Sarafovo); Top Day Trips.
* **Stage 3 (Months 5–6):** Curated Seafood & Wine Guide; Best High-Speed eSIMs; EuroVillage & Club Schedules.
* **Stage 4 (Event Week):** Live Arena Traffic, Gates & Shuttles; Post-Event Coastal Escapes.

---

## 9. Technical Checklist for Antigravity & Webhook Setup

- [ ] **Engine:** Headless CMS or lightweight static engine deployed via Cloudflare CDN.
- [ ] **Mobile Speed:** Under 1.5s mobile load time with responsive Dark Mode UI.
- [ ] **Monetization Hookup:** Travelpayouts affiliate ID injected into all booking buttons.
- [ ] **Lead Automation:** Email capture forms linked via webhook to Brevo/MailerLite.
- [ ] **B2B Intake:** Host listing form routing directly to backend management desk.
