# Henry's Exterior Cleaning — website

Single-page website for a local exterior cleaning business in Kent, UK.

## Tech rules
- Plain HTML, CSS and JavaScript only. No frameworks, build tools or npm.
- Files: `index.html`, `css/style.css`, `js/main.js`, photos in `images/`.
- Design mobile-first. Most visitors will be on a phone.
- Keep it fast: compress images, lazy-load anything below the fold, and keep JS small.
- Use semantic HTML, alt text on every image and good colour contrast.
- Use British English spelling (e.g. "colour", "specialise").

## The business
- **Name:** Henry's Exterior Cleaning (matches his van and uniform). Never use "Henry's Jet Washing".
- **Owner:** Henry. Young, independent, local, and does the work himself.
- **Area:** Kent: Canterbury, Herne Bay and Whitstable (and surrounding areas).
- **Customers:** Mainly homeowners, but also open to any customer.
- **Pricing:** No prices on the site. Every call to action leads to a **free quote**.

### Services
1. Window cleaning
2. Roof cleaning
3. Moss removal
4. Pressure washing (driveways, patios, decking)
5. Render cleaning
6. Gutter cleaning
7. Fascia and soffit cleaning
8. Roof repairs

### Selling points
- Young and independent: you deal with Henry directly, not a big company.
- Local to Canterbury, Herne Bay and Whitstable.
- Free, no-obligation quotes.
- Do not invent claims such as years trading, insurance, guarantees or review scores. Ask first.

### Contact details (PLACEHOLDERS: replace with real ones)
- Phone: `07000 000000`
- WhatsApp: `07000 000000` (link format: `https://wa.me/447000000000`)
- Facebook: `#facebook`
- Instagram: `#instagram`
Phone and WhatsApp should be tap-to-call and tap-to-message on mobile.

## Tone and feel
Friendly, clean and professional, but relatable. Write plainly and specifically. Keep copy short and scannable.

The About section is written in the first person, as Henry ("I'm Henry…"). The rest of the site refers to him as "Henry".

Write for conversion, i.e. what customers want to know: what he does, where, proof it looks good, and how easy it is to get a quote. Prefer concrete details (services, areas, "send a photo for a quote") over personality claims.

Don't use:
- Slang or clichés such as "local lad" or "takes pride in the job"
- On-the-nose lines that state the obvious, such as "you'll deal with me directly"
- Corporate jargon, hype or exclamation marks
- Over-explaining. Let visuals speak: a before/after gallery needs no intro paragraph, and a heading is often enough on its own.
- Repeating the same call to action. "Send a photo" appears once only (the first quote step); everywhere else just says "WhatsApp Henry", "Call Henry" or "ask for a quote".
- "Whether it's X or Y…" sentences and other filler openers.
- A label and heading that say the same thing (e.g. "How it works" above "Get a quote in 3 easy steps"). Drop the label.

## Brand
- From his uniform logo: black, a gold/yellow star and a blue water swoosh.
- Look: **light, restrained and professional**. A white header, white or very light grey (`--surface`) sections, and **one** accent colour (blue). Dark ink (`--ink`) is for the footer only. Gold is only for the logo star and review stars.
- Colours are CSS variables in `css/style.css`. Always use the variables, never hard-coded colours.

What the user rejected:
- A bright blue gradient with gold buttons and a wave divider felt "amateur".
- An all-dark navy theme was "way too dark".
- Plain, text-only layouts "look like a news article".

What works: break up block colour with real photos used as backgrounds or panels, and keep structure clean.
- Buttons: `.btn-primary` (blue) is the main call to action; `.btn-secondary` (white with a border) is the secondary one.
- The logo is the gold SVG star, "HENRY'S" over "exterior cleaning", with a thick, tapered wavy line underneath in a light-to-deep blue water gradient. The line is offset right and tilted up slightly (-4deg), based on his shirt. Keep it wavy, thick and watery, not a thin line or a brush stroke.
- Hero: a **full-width background photo** of a half-finished job behind the whole section, with a dark overlay and white text on top. This is the style the user asked for, showing results at the top.
  - Wide screens use `roof-moss-before-after.png`; phones use `henry-roof-cleaning-pole.jpg` (via `<picture>`): its blue sky sits behind the headline. The user chose this over a half-cleaned driveway.
  - Henry's photo sits on top as a slightly tilted white card on the right. It stays at the top because the user likes the personal feel.
- The dark overlay is only for photo backgrounds. The rest of the page stays light.
- Font: Plus Jakarta Sans (Google Fonts).
- No logo file yet. Use the text logo "★ Henry's Exterior Cleaning".

## Getting quotes
Big Call and WhatsApp buttons, plus a short quote form (posting to Formspree, set up at launch). On mobile, a sticky Call | WhatsApp bar at the bottom of the screen.

## Photos (`images/`)
All photos show Henry's real work. Never use stock photos of other people as if they were his work.

| File | What it shows | Good for |
|---|---|---|
| `henry-with-van.png` | Henry smiling by his van, which lists his services | About section / hero |
| `henry-at-work-composite.png` | Two photos side by side: Henry with a water-fed pole by the van, and cleaning a Tudor-style house | About section (small; 500px wide) |
| `driveway-before-after.png` | Block-paved driveway, half cleaned: dirty grey vs bright clean | Not used now (was the phone hero; low resolution) |
| `henry-roof-cleaning-pole.jpg` | Henry from behind, cleaning a tiled roof with a long pole, bright blue sky | Phone hero background |
| `roof-moss-before-after.png` | Tiled roof with chimneys, half the moss removed | Before/after showcase, moss removal |
| `roof-slate-treatment.png` | Slate roof being treated with a brush on a long pole | Roof cleaning service |
| `decking-cleaned.png` | Freshly pressure-washed wooden decking with a lance | Pressure washing service |
| `window-cleaning-tudor-house.jpg` | Henry cleaning upstairs windows of a Tudor-style house with a water-fed pole (square; Henry on the left) | Window cleaning service card |
| `roof-cleaning-foam.jpg` | Tiled roof covered in cleaning treatment, brushed with a long pole | Roof cleaning service card |
| `decking-half-cleaned.jpg` | Grey composite decking half pressure-washed (dirty left, clean right) | Pressure washing service card, Our Work |
| `roof-before.jpg` / `roof-after.jpg` | Same semi-detached house: mossy dark roof, then clean orange tiles | Our Work pair |
| `driveway-before.jpg` / `driveway-after.jpg` | Block-paved driveway (car plate blurred): grey, then red and charcoal | Our Work pair |
| `patio-red-before.jpg` / `patio-red-after.jpg` | Red patio slabs: black with lichen, then bright red | Our Work pair |
| `patio-stone-before.jpg` / `patio-stone-after.jpg` | Cream patio slabs: green/brown staining, then clean | Our Work pair |
| `gutter-before.jpg` / `gutter-cleared.jpg` | Gutter overgrown with grass, then Henry holding the weeds pulled out | Our Work pair ("Cleared" tag) |

Notes:
- The images are fairly low resolution (max ~860px wide). Don't stretch them to full-screen width. Ask for the original phone photos if a large hero image is needed.
- Convert to compressed WebP/JPG before launch.

## Status
The whole one-page site is built. Sections: header, hero, Services (4 photo cards: window cleaning, roof cleaning, moss removal, pressure washing; then 4 icon cards), Our Work (swipeable gallery of 5 before/after pairs plus 1 half-cleaned decking photo, with Before/After labels on the first pair only (no labels or arrows on the rest); gallery arrows move a screen at a time and the counter counts screens), How it works (3 steps), About, Contact (WhatsApp and call buttons plus a quote form), footer, and a call/WhatsApp bar on phones.

Still to do before launch:
- Real phone number, WhatsApp number, and Facebook and Instagram links. Search for `07000 000000`, `447000000000`, `#facebook` and `#instagram`.
- Formspree: create a form and replace `YOUR_FORM_ID` in `index.html`.
- About text: add real details from Henry. There's a TODO comment in the About section.
- Confirm with Henry: the roof cleaning and roof repair descriptions in Services.
- Trust content to add once Henry provides it: reviews/star rating, insurance, years of experience, response time.
- More photos: `roof-moss-before-after.png` is still used twice (hero and Moss removal card). The new .jpg photos are up to 900px; ask for full-resolution originals if a large hero image is needed. Not added yet (user has them): a first-person shot of a window being cleaned; Henry giving a thumbs up on a roof next to a chimney (suggested for About, user declined for now); a close-up of a foamed tiled roof being brushed.
- Launch tasks: compress the older .png images (WebP/JPG), LocalBusiness structured data, favicon, hosting.
