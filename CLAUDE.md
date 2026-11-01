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
- **Area:** Kent, mainly Whitstable and Herne Bay (and surrounding areas).
- **Customers:** Mainly homeowners, but also open to any customer.
- **Pricing:** No prices on the site. Every call to action leads to a **free quote**.

### Services
1. Roof cleaning
2. Moss removal
3. Pressure washing (driveways, patios, decking)
4. Render cleaning
5. Gutter cleaning
6. Fascia and soffit cleaning
7. Roof repairs

### Selling points
- Young and independent: you deal with Henry directly, not a big company.
- Local to Whitstable and Herne Bay.
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

Write for conversion, i.e. what customers want to know: what he does, where, proof it looks good, and how easy it is to get a quote. Prefer concrete details (services, areas, "send a photo for a quote") over personality claims.

Don't use:
- Slang or clichés such as "local lad" or "takes pride in the job"
- On-the-nose lines that state the obvious, such as "you'll deal with me directly"
- Corporate jargon, hype or exclamation marks

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
  - Wide screens use `roof-moss-before-after.png`; phones use `driveway-before-after.png` (via `<picture>`).
  - Henry's photo sits on top as a slightly tilted white card on the right. It stays at the top because the user likes the personal feel.
  - A small caption says what the background shows.
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
| `driveway-before-after.png` | Block-paved driveway, half cleaned: dirty grey vs bright clean | Before/after showcase, pressure washing |
| `roof-moss-before-after.png` | Tiled roof with chimneys, half the moss removed | Before/after showcase, moss removal |
| `roof-slate-treatment.png` | Slate roof being treated with a brush on a long pole | Roof cleaning service |
| `decking-cleaned.png` | Freshly pressure-washed wooden decking with a lance | Pressure washing service |

Notes:
- The images are fairly low resolution (max ~860px wide). Don't stretch them to full-screen width. Ask for the original phone photos if a large hero image is needed.
- Convert to compressed WebP/JPG before launch.

## Status
- Started from a basic skeleton: header, hero, and empty services/about/contact sections.
- The contact form will need a third-party service (e.g. Formspree) because the site is static.
