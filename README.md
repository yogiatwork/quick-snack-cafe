# QuickSnack Cafe — Menu Site

A modern, single-page restaurant menu site with food photos and ingredients. No build step, no dependencies — just HTML/CSS/JS.

## Features
- Responsive card-based menu with food images (via Unsplash)
- Expandable ingredients list for each menu item
- Scroll-triggered entrance animations
- Sticky nav with active section highlighting
- Mobile-friendly hamburger menu
- Hero section with background image
- Multi-column footer with hours, address, and social links
- Print-friendly styles
- Accessibility: reduced-motion support, focus-visible, semantic HTML

## Files
- `index.html` — the menu page (hero, highlights, menu cards, footer)
- `styles.css` — all styling (design tokens, grid layout, animations, responsive)
- `script.js` — scroll animations, nav highlighting, mobile nav toggle
- `qr-generator.html` — a local tool to make a QR code for your live link (not part of the public site)

## 1. Edit your content
Open `index.html` and replace:
- The restaurant name, tagline, address, and hours
- Menu items, descriptions, prices, and ingredients in each `<article class="card">`
- Highlight section cards (Fresh Daily, Quick Service, etc.)
- Social media links in the footer

Food images are loaded from Unsplash (`source.unsplash.com`). To swap to your own images, replace the `src` on each `<img>` tag. To use local images, put them in an `images/` folder and update the paths.

Colors and fonts live at the top of `styles.css` under `:root` if you want to adjust them.

## 2. Deploy on GitHub Pages
1. Create a new GitHub repository (e.g. `quick-snack-cafe`) and push these files to it:
   ```bash
   git init
   git add .
   git commit -m "Initial menu site"
   git branch -M main
   git remote add origin https://github.com/yogiatwork/quick-snack-cafe.git
   git push -u origin main
   ```
2. On GitHub, go to your repo → **Settings** → **Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch", pick the `main` branch and `/ (root)` folder, then **Save**.
4. Wait 1–2 minutes. Your site will be live at:
   `https://yogiatwork.github.io/quick-snack-cafe/`

## 3. Make your QR code
1. Once your site is live, open `qr-generator.html` in any browser (double-click the file, or open it via `file://`).
2. Paste your GitHub Pages URL into the box and click **Generate QR code**.
3. Click **Download PNG** and print it on your table cards, receipts, or signage.

That's it — no server, no account, and it costs nothing to host on GitHub Pages.
