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
