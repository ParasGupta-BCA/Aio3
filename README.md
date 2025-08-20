# Aio3 – Static Site with Custom Loader

A modern, responsive, Framer‑exported website enhanced with a sleek black‑themed loading screen, brand logo, animated progress, and dynamic status text.

## ✨ What’s Included
- **Custom Loader**: Black theme, brand logo, animated progress bar, dynamic text, smooth fade‑out
- **Responsive**: Optimized across desktop, tablet, and mobile (portrait/landscape)
- **Framer Export**: Production build output included under `assets/`
- **Zero Backend Required**: Works on any static host

## 📁 Project Structure
```text
Aio3 Updated/
├─ index.html                      # Main site (Framer export + custom loader)
├─ components/
│  └─ loader.html                  # Loader markup (reference snippet)
├─ public/
│  ├─ css/
│  │  └─ loader.css               # Loader styles (incl. responsive rules)
│  └─ js/
│     └─ loader.js                # Loader controller (timings, steps, events)
├─ assets/
│  ├─ images/                      # Site images (logo, background, etc.)
│  │  ├─ pYyLkU7rZYsUOhfbzsPXOVCHfBE.webp  # Current logo used by the loader
│  │  ├─ AVsssNQRylEZc5orEWvz8Q1wQT4.gif
│  │  └─ jPUl6MiiEHGtNO99raa9C3IDSyQ.jpg
│  └─ sites/ ...                   # Framer runtime/modules
├─ public/css/loader.css           # (duplicate path for quick access in editors)
├─ public/js/loader.js             # (duplicate path for quick access in editors)
├─ package.json
└─ README.md
```

## ▶️ Run Locally
You can open `index.html` directly in a browser, or serve the folder with a simple static server for best results (recommended):

- Python (Windows PowerShell):
```powershell
cd "C:\Users\PARAS\Desktop\Aiotize\Aio3 Updated"
python -m http.server 8000
# Then open http://localhost:8000/
```

Any static server or IDE live server also works.

## 🧩 Loader Overview
The loader is embedded near the top of the `<body>` in `index.html` and its assets are referenced from `public/`.

- HTML (in `index.html`):
```html
<div id="loading-screen" class="loader-container">
  <div class="loader-logo">
    <img src="assets/images/pYyLkU7rZYsUOhfbzsPXOVCHfBE.webp" alt="Logo" class="logo-image" />
  </div>
  <div class="loader-text">Initializing...</div>
  <div class="loader-subtitle">Please wait while we prepare your experience</div>
  <div class="loader-progress"><div class="loader-progress-bar"></div></div>
  <div class="loader-dots"><div class="loader-dot"></div><div class="loader-dot"></div><div class="loader-dot"></div></div>
</div>
```

- CSS (in `public/css/loader.css`):
  - High z‑index to overlay Framer badge and content
  - Brand logo styling via `.loader-logo` and `.logo-image`
  - Responsive sizes for desktop/tablet/mobile/landscape
  - Smooth fade‑out animation (`.fade-out`)

- JS (in `public/js/loader.js`):
  - Dynamic steps via `loadingSteps` array
  - Progress animation and text rotation
  - Auto‑hide after window load (3s delay) with a 15s fallback
  - Fires a custom `loaderHidden` event and removes scroll lock
  - Test shortcuts: press `L` to show, `H` to hide

## 🛠️ Customize
- **Logo**
  - Replace the image at: `assets/images/pYyLkU7rZYsUOhfbzsPXOVCHfBE.webp`
  - Or change the path in `index.html` inside the `.loader-logo` image `src`
- **Text & Steps** (in `public/js/loader.js`)
  - Edit the `loadingSteps` array
  - Adjust timings in `bindEvents()` (window load delay and fallback)
- **Colors & Theme** (in `public/css/loader.css`)
  - Background color of the overlay
  - Gradient overlays, dot colors, progress bar style
- **Responsive Sizes** (in `public/css/loader.css`)
  - Tweak `.loader-logo` sizes inside the media queries

## 🔎 Known Paths in `index.html`
- Stylesheet: `<link rel="stylesheet" href="public/css/loader.css">`
- Script: `<script src="public/js/loader.js"></script>` (included at the end of the page)

## 🚀 Deploy
This project is a static website. Host on any static provider:
- GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3/CloudFront, or any static server

## 🧾 Changelog (recent)
- Integrated brand logo into loader (`assets/images/pYyLkU7rZYsUOhfbzsPXOVCHfBE.webp`)
- Improved responsive loader sizing (desktop, mobile, small mobile, landscape)
- Increased loader visibility timing; added keyboard shortcuts for testing
- Fixed asset paths to `public/` and ensured overlay z‑index is above Framer badge

## 🪪 License
This project is provided as‑is for static hosting and customization. If you add your own license, place it alongside this file.
