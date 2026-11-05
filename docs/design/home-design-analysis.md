# Shery Travels — Homepage Design Handoff Digest

Analysis of the static HTML + README design-reference bundle for the Shery Travels (Hajj & Umrah travel agency) homepage. These are **design references created in HTML** — prototypes of look and behaviour, meant to be rebuilt in the target codebase (the live site runs WordPress/Elementor), not shipped as-is. Two authored breakpoints throughout: **desktop 1440px** and **mobile 390px**; hold the mobile composition up to ~900px, then switch to desktop.

Source folder: `design_src/shery travel design/`. Each section folder has `*-desktop.html`, `*-mobile.html`, usually a `README.md`, and sometimes a `.js` driver.

> **Section-order note:** the task's folder order (hero → 1 trending → 2 first-choice → 3 umrah → 4 perfect package → 5 transport → 6 steps → 7 hajj → 8 hotels → 9 form → 10 FAQs → 11 trust → footer → pop-up) is authoritative and is followed below. The READMEs carry stale/contradictory "Section N" labels in their titles (e.g. Transport README says "Section 6", Steps says "Section 5", Hotels "Section 7", Hajj "Section 9") — ignore those internal numbers. The assembled `index.html` (an escaped design-tool transcript) confirms the relative ordering for the sections it contains.

---

## GLOBAL / SHELL

### Header / navigation (lives in the hero section markup)

Two stacked bars above the hero body:

1. **Utility strip** — full-bleed navy (`#1A3E6E`), `padding: 11px 56px` desktop.
   - Desktop left: three page links `Umrah Packages` · `Hajj Packages` · `Transportation` (white 88%, separated by a 30%-opacity `|` glyph).
   - Desktop right: two phone entries — gold uppercase country label + white number, divided by a 1px×14px white-35% rule: `USA +1-667-439-1263`, `KSA +966-58-384-2090`. Wire as `tel:` links.
   - Mobile: `padding: 10px 16px`, centred; **only the two phone numbers** (USA · divider · KSA), page links drop into the drawer.

2. **Logo row** — `padding: 20px 56px`, `border-bottom: 1px solid rgba(26,62,110,.1)`, flex space-between.
   - Left: logo lockup image at **42px** height (34px mobile) — `assets/shery-logo-lockup.webp` (700×190 transparent).
   - Centre (desktop): six nav links, 30px gap — `Home` (active: 600 weight + 2px gold underline, 3px padding-bottom), `About`, `Umrah`, `Hajj`, `Transport`, `Contact` (inactive at 68% navy opacity).
   - Right (desktop): `Inquire Now` button — navy fill, white, `padding: 12px 24px`, radius 4px. Triggers the inquiry pop-up (`data-open-inquiry`).
   - Mobile: nav collapses to a **hamburger** (three stacked bars, radius 2px, 5px gap — two navy `22×2px`, third `14×2px` **gold**; 44px hit area via `padding:12px;margin:-12px`). Opens a **full-screen / slide-in drawer** (not yet designed) holding the six nav links + the three utility page links + both phone numbers.

- **Sticky/scroll:** no sticky/scroll behaviour specified in the mock; header is static in the references.
- **Nav interactivity:** active item carries the gold underline; hovering an inactive link raises opacity 0.68→1 over 150ms.

### Design tokens (shared palette, from hero/packages READMEs + index.html)

**Colors**
| Token | Hex | Usage |
| --- | --- | --- |
| Navy (primary) | `#1A3E6E` | All ink, utility strip, primary buttons, dark bands/fills |
| Gold (accent) | `#DBB725` | Accents, country labels on navy, submit buttons, italic headline accent words, stars, rings |
| Light blue | `#D6E8FE` | Icon tiles, image placeholder ground, active list-card ground |
| Pale ice | `#F2FDFF` | Form band, section bands, icon tiles |
| White | `#FFFFFF` | Page ground, cards, badges |

Derived: hairline border `rgba(26,62,110,.08)`; nav divider `rgba(26,62,110,.10)`; column rule `rgba(26,62,110,.12)`; input border `rgba(26,62,110,.16)`; arch outline `rgba(26,62,110,.10)`; translucent-on-navy chip `rgba(255,255,255,.14)` with `.26` border; gold decorative arches `rgba(219,183,37,.14–.7)`.
Text opacities applied to navy ink: `1` headings/numbers/inputs, `.82` body, `.8` labels, `.75` eyebrow, `.68` inactive nav.

**Typography** — two Google Fonts + icon font:
- `Libre Baskerville` (400, 400 italic, 700) — headings, prices, card titles, badge numbers.
- `Outfit` (300, 400, 500, 600, 700) — eyebrows, body, labels, buttons, nav.
- `Material Symbols Outlined` (full variable axis `opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200`, `display=block`) — icons.
- Representative sizes: H1 54px/400 desktop (33px mobile, accent word italic gold); section headings 40–50px Libre Baskerville 400; eyebrows 12px/600 `.22em` uppercase; body 16–17.5px Outfit 300 `~1.65`; nav links 14.5px/500; buttons 14–15.5px/700. `text-wrap: pretty` on H1 + body. Mobile inputs forced to **16px** to avoid iOS zoom-on-focus.

**Spacing / radius / shadow**
- Section horizontal padding: **56px** desktop, **20–24px** mobile.
- Radii: 4px (desktop CTA), 5–6px (section CTAs), 8–9px (inputs/buttons), 16–24px (cards/panels), 999px (pills/badges), and arch tops always = exactly half the arch width (semicircle rule — change width, change radius).
- Shadows: card `0 30px 64px -26px rgba(26,62,110,.4)`; arch image `0 34px 62px -26px rgba(26,62,110,.5)`; badge `0 18px 40px -16px rgba(26,62,110,.4)`; arch photos on navy `0 40px 70px -26px rgba(0,0,0,.45–.55)`.

### Global / shared elements
- **Buttons:** navy-fill (white text) is the default; it **flips to gold-fill with navy text** whenever it sits on a navy ground (navy-on-navy wouldn't read) and for submit buttons. Suggested hover (not in mock): navy darken ~8%, gold lighten ~6%, 150ms, visible navy `:focus-visible` ring.
- **Badges / pills:** 999px white pills with hairline border (hero stat badges); translucent nights chips on navy cards; gold "Showing now" / status pills.
- **Accent word convention:** one word per heading is Libre Baskerville **italic gold** (`matters`, `most requested`, `first choice`, `Umrah`, `Holy Cities`, `Simple Steps`, `Hajj`, `conversation`, `Questions`, `all`, `pilgrimage`). Gold-on-white ~1.9:1 is a deliberate, client-approved low-contrast choice — do not darken.
- **Inquiry pop-up:** opened by **any** element with `data-open-inquiry` — the nav "Inquire Now", footer CTA "Inquire Now", and optionally the hero form. Behaviour detailed in the Pop-up section below. (It is a manual trigger — there is no timed/exit-intent auto-popup in this bundle.)

> **Consistency flag:** the **Hotels** section (8) uses a *different* token set — navy `#103A71`, gold `#E5AC25`, and **Playfair Display** instead of Libre Baskerville — rather than the shared `#1A3E6E`/`#DBB725`/Libre Baskerville. Looks like an earlier/independent draft; likely needs reconciling to the global tokens on build.

---

## 1. Hero — folder `hero/`

**Purpose / content:** trust-building hero that routes visitors into an enquiry without scrolling. A white-ground composition with a floating arch-shaped photo, three floating stat badges, and an enquiry form overlapping the bottom edge.
- Eyebrow (gold rule · text · gold rule): `OVER A DECADE OF DEDICATED SERVICE` (mobile: `A DECADE OF SERVICE`).
- H1: `Every step of your pilgrimage matters` ("matters" gold italic).
- Paragraph: `Visas, hotels near the Haram, guided ziyarat across Makkah and Madinah, and transport that leaves on time.`
- Three stat badges: `10+` Years of service · `1,000+` Pilgrims guided · `24/7` On-ground support (each = 38px icon tile + number-over-label).
- Enquiry form card: title `Plan your journey`, subline `A travel expert replies within 24 hours`, submit `Send Enquiry` (gold fill, navy text).

**Layout:** Desktop — centred hero body; decorative arch outline (1100×560, border-bottom none) behind; H1 (max 880px) + paragraph (max 620px) centred; image area `height:540px` with the 540×480 arch image, ground-shadow ellipse, and three badges absolutely positioned overlapping the arch edges by ~55–65px. Form band (`#F2FDFF`, 150px) below, with the form card absolutely positioned to straddle the boundary; field row is a 5-col grid: Journey (select: Umrah Package/Hajj Package/Transport only) · Departure date · Travellers (`2 adults`) · Phone · Send Enquiry.
Mobile — reordered to eyebrow → H1 → image → **paragraph moved below the image** (the key mobile reorder). Arch image 326×392; badges bleed off the viewport edges at staggered heights (negative offsets). Form reduced to **two fields only** — Journey + Phone — stacked, full-width submit (date & travellers dropped; follow-up by phone).

**Interactivity / animation:**
- **Arch image cross-fade** — four stacked absolutely-positioned full-bleed layers (1 Kaaba/Masjid al-Haram, 2 Masjid an-Nabawi, 3 Ziyarat–Masjid Quba, 4 Ziyarat–Jabal al-Nour). Each `transition: opacity 1.5s ease`; layer 1 starts opacity 1, rest 0. Every **4200ms** the active layer fades out as the next fades in, cycling 1→2→3→4→1. Both breakpoints, same timing/images. Driven by one timer (inline script); honour `prefers-reduced-motion` by holding layer 1; eager-load layer 1, lazy-load 2–4.
- **Nav hover** (opacity 0.68→1, 150ms), **hamburger drawer** (mobile).
- **Enquiry form:** controlled inputs; all desktop fields required except Travellers; validate phone against selected country, inline navy errors; on submit replace card body with a confirmation. States `idle|submitting|success|error` (error/loading/success not designed). Phone numbers wired as `tel:`.
- State: `activeImageIndex 0–3`, `mobileNavOpen`, controlled `form.*`, `form.status`.

**Images:** arch cross-fade photos `images/kaaba.jpg`, `images/madinah.jpg`, `images/ziyarat-quba.jpg`, `images/ziyarat-jabal-al-nour.jpg` (client-supplied, portrait crops; show as light-blue blocks until supplied). Logo lockup `assets/shery-logo-lockup.webp`. Badge icon glyphs are plain CSS shapes standing in for a medal/users/headset icon set.

---

## 2. Trending Packages — folder `1 - trending/` (JS-driven)

**Purpose / content:** "This month's most requested" — showcases **eight** Umrah/Hajj packages and auto-advances so visitors see the whole range. Heading `This month's most requested` ("most requested" gold italic), eyebrow `WHY/THIS MONTH...` style caps, desktop `View all packages` pill. Each package (from `packages.js`): id, image, nights label, star count + star label ("4-star"), title, optional gold badge ("Most booked"/"Limited seats"/"Registration open"), blurb, Makkah + Madinah hotel/distance rows, USD price, and **four inclusions** rendered as **emoji tiles** (✈️ 🛂 🚌 🚕 🚗 🍽️ 🕌 🛏️ 🚐 ⛺ 🎧 — emoji by explicit client decision; label travels in `title`/aria). The 8 packages: Essential ($1,295), Comfort ("Most booked", $1,780), Premium ($2,640), Ramadan ("Limited seats", $2,150), Last Ten Nights ($3,480), Family ($1,620), Group ($1,150), Hajj 2027 ("Registration open", $8,400).

**Layout:** **Desktop and mobile are structurally different, not a reflow.**
- Desktop (`#F2FDFF` band): two columns `1fr 1px 1fr` with a 1px divider column. Left = large **feature card** (696px tall) showing the active package in full (244px image pane, content with nights pill, stars, optional badge, 30px title, blurb, two hotel rows, a row of four 46px emoji tiles, and a pushed-down footer: price + gold `View details`). Right = a **vertical scroll list** (696px window = 4×174px step) of all eight 160px cards; the middle of three fully-visible cards (visible index 2) is active; top/bottom 54px gradient fades hint at more.
- Mobile (white): no feature card/list. Each package is a **navy "ticket" card** (310px) with an 86×112 arch thumbnail, translucent nights chip, optional badge, 22px white title, gold stars, two hotel rows, four translucent inclusion tiles, a **perforation strip** (dashed repeating-linear-gradient with two notch circles matching the page bg), and a price stub + gold `View details`. Swiped horizontally with the next card peeking 56px. Eight **dots** below (active = 22px wide + gold).

**Interactivity / animation (driven by `packages.js` → `window.initCarousel`):**
- One shared looping-carousel engine for both breakpoints. The list renders all 8 packages **plus the first 5 again** as visual duplicates; stepping past the last lands on a duplicate, then `scrollTop/scrollLeft` resets to start instantly (invisible loop).
- Auto-advance every **3600ms** (`setInterval(advance)`): increments `pos`, `scrollTo({behavior:'smooth'})`; when `next >= n` it schedules a `setTimeout(720ms)` to reset position to the start offset. `onActive((pos+centre)%8)` updates the highlighted card / feature card (desktop centre=2, mobile centre=0).
- **Pauses** on `mouseenter` and `touchstart`; **resumes** on `mouseleave`. While paused, native scroll/swipe works and the active index is re-derived from scroll position on the `scroll` event (`Math.round((scroll-half)/step)`), so the highlight follows wherever the user lands.
- Clicking a list card (desktop) or dot (mobile) jumps that package to the active slot (`goTo`). Desktop feature-card **image cross-fades over 0.6s** on active change; active list card transitions ground/ring over 0.45s and shows a "Showing now" pill; mobile dots transition width/bg over 0.35s.
- Honour `prefers-reduced-motion` (stop interval, allow manual scroll); scrollbars hidden but containers kept keyboard-focusable.
- Helpers in `packages.js`: `window.icon()` (Material Symbol span), `window.stars(n)` (gold filled stars), `window.distanceOf(p)` (combined Makkah·Madinah distance line).

**Images:** five photos `images/pkg-1.jpg`…`pkg-5.jpg` cycled across the 8 packages (refs in `packages.js` currently point to Pexels URLs). Feature pane ~628×244, list thumb 160×160, mobile arch thumb 86×112. Logo assets bundled but unused here.

---

## 3. First Choice — folder `2 - 1st choice/` (JS-driven)

**Purpose / content:** "What makes Shery Travels the first choice" — four reasons to book, presented as a **station rail** (four numbered stops on a horizontal route line) above a single large navy **stage panel** showing one reason at a time. Eyebrow `WHY PILGRIMS CHOOSE US`; heading `What makes Shery Travels the first choice` ("first choice" gold italic). Four reasons (verbatim client copy, in `features.js`): 01 Decades of Experience, 02 Professional Guidance, 03 Reliable Transportation, 04 Customized Services (each with a one-sentence body and a Material icon: workspace_premium, handshake, airport_shuttle, tune). **No CTA** (deliberately removed).

**Layout:** Desktop (white) — centred header; rail `margin:0 90px` with a 2px line at `top:27px` and four `repeat(4,1fr)` stops, each a 56px circle (holding the **numeral**) above a full title label. Stage = navy rounded panel (`border-radius:26px`, min-height 250px) with a 150px ghost numeral top-right, and a flex row: 74px gold-ringed icon tile + title (34px) + body (max 680px).
Mobile (white) — circles hold the **icon** instead of the numeral and the **titles are omitted** (four titles would wrap unreadably at 390px); the stage names the active reason via a gold numeral + rule above the title. Stage ghost numeral 104px.

**Interactivity / animation (driven by `features.js` → `window.initRail`):**
- Rail auto-cycles 01→02→03→04→01 every **3500ms** (`setInterval`, skipped entirely under `prefers-reduced-motion`).
- `mouseenter`/`focus` on a stop **holds** the cycle and shows that stop; `mouseleave` on the **rail** releases and resumes. `click` shows the stop and holds for **6000ms** then auto-resumes (the touch path, since mobile has no hover).
- Transitions: circle background/border-color 0.4s; desktop label opacity 0.4s. Active = navy fill + gold ring + white glyph/numeral, label opacity 1; inactive = white circle, navy glyph, label opacity .78.
- Accessibility: stops are `tabindex=0 role="tab"` with `aria-selected`; intended as a tablist with `role="tabpanel"`, arrow-key support, `aria-live="polite"` (suppress during auto-advance). State: `activeIndex 0–3`, `held` boolean.

**Images:** **none** — section is deliberately photograph-free for page rhythm.

---

## 4. Umrah — folder `3 - umrah/`

**Purpose / content:** Umrah services. Deep navy band with copy left and a cluster of arch-shaped photos right; a white four-up service bar rides over the band's bottom onto the white page. Eyebrow `THE SERENITY OF UMRAH`; heading `Our Umrah Services` ("Umrah" gold italic); two paragraphs of verbatim client copy; a 2-col checklist (Visa processing · Hotel bookings · Itinerary planning · Ziyarat and transport); gold CTA `Umrah begins here`. Service bar = four cells: those same four services, each with a 52px gold-ringed icon tile + title + sublabel (desktop sublabels: "Handled start to approval", "Close to the Haram", "Solo, family or group", "Air-conditioned vehicles"; icons contact_page/apartment/event_note/airport_shuttle).

**Layout:** Desktop — navy band `grid 1fr 1.02fr`, copy left / arch cluster right (`height:640px`). Cluster = gold outline arch (470×600) + cross-fading photo arch (470×600, offset 46px right / 40px below the outline) + small white-bordered arch (208×250, bottom-left). Decorative big arch outline + soft circle behind. Service bar: `repeat(4,1fr)` white card, `margin:-62px 56px 0` to overlap the band.
Mobile — band reorders to eyebrow → heading (centred) → arch cluster → paragraphs → full-width CTA; cluster `height:402px` with the offset reversed (outline 14px right of the photo arch). Service bar becomes **2×2** with sublabels dropped.

**Interactivity / animation:** one effect — the **tall arch cross-fades between two photos every 4200ms** (each layer `opacity 1.5s ease`; layer 1 starts at 1). Driven by a single small timer; honour `prefers-reduced-motion` (hold first image). Small arch and service bar are static. Suggested (not in mock) CTA/service-cell hover.

**Images:** `images/haram-pilgrim.jpg` (tall arch layer 1), `images/tawaf.jpg` (tall arch layer 2), `images/madinah-courtyard.jpg` (small arch). Portrait crops, subject centred clear of the domed top corners. (`images/ziyarat.jpg` referenced by old explorations, unused.)

---

## 5. Perfect Package — folder `4 - perfect package/`

**Purpose / content:** "Find The Perfect Package For Umrah" — a full-bleed row of **five** photo tiles, each a package-category link. Heading `Find The Perfect Package For Umrah` ("Umrah" gold italic); subline about quieter months/peak seasons/luxury/family. Five tiles (seasonal first, then type): 1 Ramadan, 2 December, 3 Luxury, 4 Family, 5 Easter — each with a title over a gold `View All Packages` button (with `arrow_forward`). Desktop header also has back/forward arrow circles (navy `arrow_back`, gold `arrow_forward`, 46px).

**Layout:** Desktop (white, `padding:80px 56px 0`) — header flex with heading+subline left and two arrow circles right; tile row `display:flex; gap:6px; margin:0 -56px` (bleeds to viewport edges), five `flex:1` tiles each `height:440px`, full-bleed cover photo + navy bottom gradient scrim + bottom-left title/button.
Mobile (white) — header inset, no arrows; **horizontal swipe deck** `overflow-x:auto` with `scroll-snap-type:x mandatory`, tiles `272×370`, radius 16px, ~78px of next tile peeking; scrim slightly stronger.

**Interactivity / animation:** Mostly static markup (no JS file). Mobile = native scroll-snap swipe (no autoplay, user-controlled). Desktop arrows are **decorative with exactly five tiles** (disable/hide unless the list grows); if more categories are added, convert to `overflow-x:auto` + `scroll-snap` and wire arrows to `scrollBy` (~289px/tile). Suggested tile hover (not in mock): image `scale(1.04)` over 0.4s + brighten the gold button.

**Images:** five photos `images/pkg-ramadan.jpg`…`pkg-easter.jpg`, desktop ~282×440 / mobile 272×370, subject centred away from the gradient-washed bottom third. Placeholder ground `#D6E8FE`.

---

## 6. Transport — folder `5 - Transport/`

**Purpose / content:** promotes the transportation service and links to the live pages. Eyebrow `TRANSPORTATION`; heading `Smooth travel across the Holy Cities` ("Holy Cities" gold italic); body; four feature chips (schedule "24/7 availability", payments "Transparent pricing", verified_user "Licensed drivers", ac_unit "Air-conditioned fleet"); navy CTA `Explore Transportation`. A **route map** of three city stops (Jeddah → Makkah → Madinah) on a dashed gold curve; a full-bleed navy **fleet strip** with five vehicle thumbnails. All elements are real `<a>` links: city stops → `/transportation/ziarat/`; fleet thumbs + "View all" → `/transportation/fleets/`; CTA → `/transportation/`.

**Layout:** Desktop (white) — `grid 1fr 1.1fr`: copy left, pale-ice **route card** right with an **SVG S-curve** (viewBox `0 0 520 320`, path `M 60 40 C 180 40,180 160,260 160 S 340 280,460 280`) and three 80px circular city photos staggered flex-start/center/flex-end. Fleet strip = navy full-bleed (`margin:0 -56px`), flex: "Our fleet" gold label + divider + five `flex:1` 80px thumbnails + "View all".
Mobile — stacked copy → feature chips → route card (vertical dashed line, three 64px photo circles) → full-width CTA → fleet strip as a horizontal **swipe deck** of five 140×90 thumbnails bleeding edge-to-edge.

**Interactivity / animation:** No JavaScript. The route curve is a **static decorative SVG** (gold, `stroke-width 2.5`, `stroke-dasharray 10 8`, opacity .5) — no animation. All interactivity is plain navigation links; mobile fleet strip is native horizontal scroll. Suggested hover only.

**Images:** three city photos `images/city-jeddah.jpg`, `city-makkah.jpg`, `city-madinah.jpg` (circular); five fleet photos `images/fleet-sedan/h1/yukon/coaster/bus.jpg` (reuse the live site's fleet images). Placeholder ground `#D6E8FE`.

---

## 7. Steps — folder `6 - Steps/`

**Purpose / content:** "how it works" — four steps on a **navy** ground joined by a gold dashed SVG S-curve. Eyebrow `HOW IT WORKS`; heading `Your Journey to a Spiritual Pilgrimage: Simple Steps to Follow` ("Simple Steps" gold italic; mobile drops "to Follow"). Four steps, each with a photo, a large faded gold numeral (01–04), a title and body: 01 Get in Touch, 02 Choose Your Package, 03 Confirm & Pay, 04 Travel with Peace (mobile bodies are shortened variants).

**Layout:** Desktop (`#1A3E6E`, `padding:88px 56px 96px`, overflow hidden) — centred header over a 900px decorative circle; steps area `height:540px` with four 160px columns centred on x=80/380/680/980; each step = 90px **circular** gold-bordered photo (z-index 1 above the curve) → 38px faded numeral → title → body. A full-size **inline SVG** (viewBox `0 0 1200 540`) draws three cubic Bézier arcs arcing down-then-up between consecutive photo centres.
Mobile (navy) — steps stack `gap:46px` and **alternate** left/right (odd flex-start, even flex-end/right-aligned); photos become **rectangular** full-width×140px rounded rects. One continuous **vertical SVG S-curve** (viewBox `0 0 350 680`) snakes left→right→left→right threading between them.

**Interactivity / animation:** No JavaScript — the SVG curves are **static decorative dashes** (gold, `stroke-width 3`, dash `12 10` desktop / `10 8` mobile, opacity .55/.5); no motion. Note for build: keep curve endpoints aligned to photo centres if the container is resized (scale viewBox or recompute control points; add `vector-effect="non-scaling-stroke"` on mobile). Motion check only needed if a draw-on animation is added later.

**Images:** four photos `images/step-1.jpg`…`step-4.jpg` (90px circle desktop / full-width×140 rect mobile). Suggested subjects: phone/form, reviewing documents, handshake/payment, pilgrim at the airport/Haram. Placeholder `#D6E8FE`.

---

## 8. Hajj — folder `7 - Hajj/`

**Purpose / content:** Hajj services. Navy band with heading + a single large arch photo; a white panel overlaps the arch bottom to hold four audience cards + a CTA. Eyebrow `THE FIFTH PILLAR`; heading `Our Hajj Services` ("Hajj" gold italic); paragraph. Panel sub-heading (desktop) `Hajj experiences for all pilgrims` ("all" gold italic) + subline. Four audience cards (icon + title + body): elderly "Older & Mobility-Impaired", school "First-Time Pilgrims", family_restroom "Families & Groups", person "Solo Pilgrims" (titles/bodies shortened on mobile). CTA `View Hajj Packages` → `/hajj/usa-packages/`.

**Layout:** Desktop — navy band (decorative 1000px circle), centred header, centred **520×460 arch photo** (`border-radius:260px 260px 16px 16px`); white panel `border-radius:22px 22px 0 0`, `margin:0 -56px; margin-top:-80px` (overlaps arch by 80px), `padding:110px 56px 72px`; inside: sub-heading, then four cards `repeat(4,1fr)` with 1px vertical dividers (60px gold-ringed icon tiles), then centred gold CTA.
Mobile — band padding reduced, 300×370 arch, white panel `margin-top:-40px`, **no sub-heading**, cards as a **2×2** grid (48px tiles, centred text, shortened titles), full-width CTA.

**Interactivity / animation:** **None** — static markup, no JavaScript. (The arch here does not cross-fade; it's a single photo.)

**Images:** one photo `images/hajj-hero.jpg` (pilgrims at the Kaaba / Arafat / Mina), portrait, centred clear of the domed top corners. Placeholder `#D6E8FE`.

---

## 9. Hotels — folder `8 - Hotels/`

> **Token mismatch (flagged):** this section's README uses navy `#103A71`, gold `#E5AC25`, and **Playfair Display** — not the site's `#1A3E6E`/`#DBB725`/Libre Baskerville. Treat as an earlier draft to reconcile on build.

**Purpose / content:** "Choose Your Perfect Stay" — hotel showcase. Section label (uppercase gold), heading `Choose Your Perfect Stay`, subtitle. A Makkah/Madinah **segmented tab control** switches hotel lists. Three hotel cards each with: a "Nearest" badge pill, star rating, hotel name, location (pin icon), a "View All Details"/"View Details" link, star-tier label + "Included in package" text. Hotels referenced: Dar Al Eiman Grand (5★), Al Kiswah Towers (4★), Dar Al Eiman Al Manar (4★ Madinah), Nada Al Salam (3★ Madinah). A floating Makkah Clock Tower / Abraj Al-Bait building cutout sits on the right with a radial gold glow.

**Layout:** Desktop — two columns (`padding:80px`, `gap:60px`). Left (`flex:1`): stacked **up/down navy arrow buttons** (44px) + heading, the city segmented control (`border-radius:12px`, 2px navy border, active tab filled navy), and **three horizontal hotel cards** stacked (`gap:16px`) — image 240px left, center info, right column (tier + "Included in package") split by a left hairline. First card highlighted (gold 2px border + elevated shadow); others light border. Right column (`480px` fixed): full-height **contain**-fit building cutout + radial gold glow behind.
Mobile — single column: centred heading → building hero banner (`height:220px`, full-bleed, white bottom fade) → full-width city tabs → **horizontal card scroll** (`scroll-snap-type:x mandatory`, cards `300px`, vertical layout: 160px image with badge overlay, then name+stars, location, link) → three scroll **dots** (active 24×6 navy, inactive 6×6 at 15%).

**Interactivity / animation:**
- **City tabs** switch between Makkah and Madinah hotel lists (both breakpoints).
- Desktop **up/down arrows** scroll the hotel list vertically (animate cards) — intended for when more than three hotels exist (show 3, scroll smoothly); not shown on mobile.
- Mobile = native horizontal swipe with scroll-snap + dots.
- "View Details" navigates to a hotel detail page. Desktop card hover = subtle shadow lift.
- (README describes the behaviour; no dedicated `.js` file is bundled — wire in the target codebase.)

**Images:** Makkah Clock Tower / Abraj Al-Bait **transparent PNG** cutout (`object-fit:contain`); hotel JPGs for Dar Al Eiman Grand, Al Kiswah Towers, Dar Al Eiman Al Manar, Nada Al Salam.

---

## 10. Form (Contact CTA) — folder `9 - Form/`

**Purpose / content:** full-bleed cinematic enquiry section — a wide Haram/Hajj photo behind, form floating over it. Eyebrow `START YOUR JOURNEY`; heading `Your sacred journey is one conversation away` ("conversation" gold italic); body; three gold **trust stats** (`10+` Years of service · `1,000+` Pilgrims guided · `24/7` On-ground support, labels shortened on mobile). Form card title `Inquire Now` + subtitle; six fields; gold submit `Send Inquiry`. Desktop also shows a contact row: `+1-667-439-1263` · `+966-58-384-2090` · `info@sherytravels.com` with gold call/mail icons.

**Fields:** Name (text), Phone (tel), Travel dates (text/date), From (select: New York, Chicago, Los Angeles, Washington DC, Dallas, Houston, Atlanta), Persons (text), Message (textarea). Desktop layout = three 2-col rows (Name+Phone / Dates+From / Persons+Message) + full-width submit; mobile = stacked (Name → Phone → Dates+Persons side-by-side → From → Message → Submit).

**Layout:** Desktop — `min-height:680px`, photo at `inset:0` with a left-heavy horizontal navy gradient (`.96→.15`); content `grid 1fr 1fr`: left heading/body/stats (stats in a flex row with white-25% dividers), right **frosted form card** (`rgba(255,255,255,.96)` + `backdrop-filter:blur(16px)`, radius 22px). Contact row under a hairline in one horizontal line.
Mobile — photo behind the heading area with a heavy **vertical** navy overlay (`.88→.98`); centred eyebrow/heading/subline/stats; then a **solid white** edge-to-edge form area (no rounded corners, no form title); **no contact info** (phones are in navbar/footer). Inputs 16px to prevent iOS zoom.

**Interactivity / animation:** No JavaScript in the reference (static). Behaviour is a standard controlled form POST — wire validation/submit in the target codebase following existing patterns. Gold CTA, `tel:`/`mailto:` contact links.

**Images:** one wide background photo `images/form-bg.jpg` (aerial/ground Haram scene; ~1440×680 desktop, heavy overlay mobile).

---

## 11. FAQs — folder `10 - FAQs/`

**Purpose / content:** six FAQ accordion items. Eyebrow `COMMON QUESTIONS` (mobile `FAQ`); heading `Frequently Asked Questions` ("Questions" gold italic). Questions: 1 Which documents do I need for Umrah? · 2 Can women travel alone for Hajj? · 3 How far in advance should I book? · 4 What is included in the packages? · 5 Do you provide transportation between cities? · 6 How do I pay for my trip? (mobile uses shortened question text and condensed answers). Answers drawn from the client's existing FAQ pages. Desktop has a navy CTA strip: "Still have questions?" + gold `Contact Us` button (→ `/contact/`) + both phone links (`tel:+16674391263`, `tel:+966583842090`).

**Layout:** Desktop (`#F2FDFF`) — centred header; accordion `grid 1fr 1fr; gap:0 52px` (six `<details>` auto-placed into two columns, 3 each); full-bleed navy CTA strip below (`margin:46px -56px 0`).
Mobile (white) — single-column accordion inside a rounded pale-ice card; shortened questions (in **Outfit** rather than Libre Baskerville to save space) and condensed answers; full-width navy CTA button `Still have questions? Contact us`; **no phone numbers**.

**Interactivity / animation:** **Native `<details>/<summary>` accordion** — browser-handled expand/collapse, **no JavaScript needed**. Gold `expand_more` chevron (22px) rotates/toggles via the native disclosure; summary is flex space-between. First question is `open` by default on both breakpoints.

**Images:** none — text-only section.

---

## 12. Trust strip — folder `11 - Trust/`

**Purpose / content:** a navy reassurance strip of **five** trust items, each a gold icon tile + bold white title + muted subline:
1. `description` — Umrah visa handled / "We process your visa end to end"
2. `location_on` — Hotels near the Haram / "Walking distance to the holy mosques"
3. `airport_shuttle` — Private transfers / "Met on arrival, on time, every time"
4. `support_agent` — 24/7 on-ground support / "A local team throughout your trip"
5. `lock` — Secure payment / "Pay safely, no hidden fees"

**Layout:** Desktop — navy band (`padding:40px 56px`), `grid repeat(5,1fr); gap:26px`, items top-aligned (icon + text), with a decorative gold circle outline bleeding off the top-left. Mobile — same navy band (`padding:34px 20px`), items as a **single vertical column** (`flex-direction:column; gap:20px`), icon tiles slightly smaller (42px vs 46px). Icon tiles are 46/42px rounded squares, `rgba(219,183,37,.14)` fill, 23/21px gold glyph.

**Interactivity / animation:** **None** — purely static. (No README; inline-styled HTML only.)

**Images:** none — Material Symbols icons only.

---

## Footer — folder `footer/`

**Purpose / content:** gold CTA band atop a navy link area. CTA bar: `Ready to begin your pilgrimage?` ("pilgrimage" italic) + `Inquire Now` button (opens the pop-up via `data-open-inquiry`) + `Contact Us` link (→ `/contact/`). Navy footer columns: **Logo** (white logo + tagline + three contact rows: USA/KSA phones + email with gold icons/country labels + five social icons) · **Services** (Umrah, Hajj, Transportation, Ziyarat Tours, Our Fleet) · **Packages** (Umrah/Hajj Packages, Economy/Family/Luxury/Ramadan Umrah) · **Company** (Home, About Us, Contact, Blogs, Privacy Policy). Copyright bar with Privacy Policy. All links are real sitemap URLs; socials = Facebook/Instagram/YouTube/TikTok/LinkedIn.

**Layout:** Desktop — gold CTA bar flex space-between; navy footer `grid 1.4fr 1fr 1fr 1fr; gap:48px` (four columns) with two decorative gold arch outlines bottom-right; copyright bar `border-top` flex space-between. Mobile — CTA bar shows **only** `Inquire Now`; centred logo (36px) + tagline; **three-column** link grid (Services/Packages/Company, shortened labels); stacked contact rows; centred social row (38px circles); centred inline copyright + Privacy; no decorative arches.

**Interactivity / animation:** Static except the `Inquire Now` button, which fires the inquiry pop-up (`data-open-inquiry`). Social icons are Material Symbols stand-ins (replace with brand SVGs).

**Images:** white logo `images/logo-white.png` (on the live site as `shery.travel-logo-_w_-1024x169.png`). Bundled `assets/logo-white.png` exists.

---

## Pop-up (Inquiry modal) — folder `pop-up/`

**Purpose / content:** the inquiry modal opened by **every** `data-open-inquiry` trigger (nav Inquire Now, footer CTA, optionally the hero form). Navy header band (title `Inquire Now`-style + subtitle + close) over a white form body. Fields: Your Name (text), Phone Number (**country-flag dropdown + tel**), Travel Dates (text/date), Number of Persons (text), Message (textarea). "Travelling From" was dropped per client. Flag dropdown (90px, `#F2FDFF`, border-right) offers 🇺🇸 +1 (default), 🇸🇦 +966, 🇬🇧 +44, 🇨🇦 +1, 🇵🇰 +92, 🇮🇳 +91, 🇧🇩 +880 (consider a searchable picker like intl-tel-input in production). Gold submit full width.

**Layout:** Desktop — centred **modal** 560px, radius 24px, over a blurred navy backdrop (`rgba(26,62,110,.55)` + `blur(8px)`); navy header `padding:30px 34px` with a decorative gold circle (140px, top-right) and a 40px translucent close button; white form body with fields in 2-col rows (Name+Phone one row, Dates/Persons full-width, Message full width).
Mobile — **bottom sheet** sliding up, `border-radius:24px 24px 0 0`, `max-height:92vh`, with a 40×4px drag handle, title + 36px close, and a **scrollable** form body (`overflow-y:auto`); Dates+Persons share a 2-col row; inputs at 16px.

**Interactivity / animation (behaviour spec; implement in codebase):**
- **Open:** desktop modal fades + scales in (`opacity 0→1`, `scale(.95)→1`, 250ms ease-out); mobile sheet slides up (`translateY(100%)→0`, 300ms ease-out); backdrop fades in (200ms) simultaneously.
- **Close:** reverse (desktop 200ms ease-in, mobile 250ms ease-in). Close triggers: X button, backdrop click (desktop), swipe-down past threshold (mobile), Escape key.
- **Body scroll locked** while open. It is a **manual** trigger only (not a timed/exit-intent auto-popup).

**Images:** none needed.
