# Aster & Oak — Menu Site

A single-page, static restaurant menu site. No build step, no dependencies — just HTML/CSS/JS.

## Files
- `index.html` — the menu page
- `styles.css` — all styling
- `script.js` — small script that highlights the active section in the nav
- `qr-generator.html` — a local tool to make a QR code for your live link (open it in a browser, not part of the public site)

## 1. Edit your content
Open `index.html` and replace:
- The restaurant name, tagline, address, and hours in the `<header class="cover">` section
- The menu items, descriptions, and prices in each `<section class="menu-section">`

Colors and fonts live at the top of `styles.css` under `:root` if you want to adjust them.

## 2. Deploy on GitHub Pages
1. Create a new GitHub repository (e.g. `restaurant-menu-site`) and push these files to it:
   ```bash
   git init
   git add .
   git commit -m "Initial menu site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
2. On GitHub, go to your repo → **Settings** → **Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch", pick the `main` branch and `/ (root)` folder, then **Save**.
4. Wait 1–2 minutes. Your site will be live at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## 3. Make your QR code
1. Once your site is live, open `qr-generator.html` in any browser (double-click the file, or open it via `file://`).
2. Paste your GitHub Pages URL into the box and click **Generate QR code**.
3. Click **Download PNG** and print it on your table cards, receipts, or signage.

That's it — no server, no account, and it costs nothing to host on GitHub Pages.
