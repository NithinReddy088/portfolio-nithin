# Nithin Reddy Sunkara — Portfolio

A next-generation, premium portfolio website built with **Bun + Vite + React + TypeScript + Framer Motion**.

---

## 🚀 Quick Start

### With Bun (Recommended)
```bash
# Install Bun if not already installed
curl -fsSL https://bun.sh/install | bash

# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

### With npm
```bash
npm install
npm run dev
npm run build
```

---

## 🎨 5 Premium Themes

Toggle themes via the **palette icon** in the top navigation bar. Your preference is persisted via `localStorage`.

| Theme | Emoji | Style |
|---|---|---|
| **Neo Dark Glass** | 🌌 | Glassmorphism · Neon blue/purple · Futuristic |
| **Minimal Luxury** | ✦ | White · Gold · Apple-level minimalism |
| **Cyberpunk Gradient** | ⚡ | Deep dark · Vibrant pink/cyan · Glow effects |
| **Developer Terminal** | $_ | Terminal UI · Monospace · Code aesthetic |
| **Elegant Monochrome** | ◐ | Black/white · Editorial purity |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Nav.tsx           # Sticky nav with active section tracking
│   │   └── Footer.tsx        # Footer
│   ├── sections/
│   │   ├── Hero.tsx          # Full-screen hero with particle canvas
│   │   ├── About.tsx         # Story-driven about section
│   │   ├── Skills.tsx        # Interactive categorized skills
│   │   ├── Projects.tsx      # Case-study cards with modal detail view
│   │   ├── Experience.tsx    # Timeline: work + education + certifications
│   │   └── Contact.tsx       # Contact links + CTA card
│   └── ui/
│       ├── CustomCursor.tsx  # Magnetic custom cursor (desktop only)
│       ├── ScrollProgress.tsx # Scroll progress bar
│       └── ThemeSwitcher.tsx # Theme toggle dropdown
├── data/
│   └── resume.ts             # ← ALL CONTENT LIVES HERE (update this)
├── hooks/
│   └── useTheme.tsx          # Theme context + localStorage persistence
├── styles/
│   └── globals.css           # CSS variables, base styles, animations
├── types/
│   └── theme.ts              # Theme definitions + CSS variable maps
├── App.tsx
└── main.tsx
```

---

## ✏️ How to Update Content

All content is centralized in **`src/data/resume.ts`**. Edit that file to:

- Change your name, title, bio, location
- Add/remove projects
- Update skills and categories
- Edit experience highlights
- Add certifications

No other files need touching for content changes.

---

## 🎨 How to Customize Themes

Edit **`src/types/theme.ts`** to modify existing themes or add new ones. Each theme is a set of CSS custom properties:

```typescript
{
  id: 'my-theme',
  name: 'My Theme',
  emoji: '🎯',
  description: 'Description here',
  vars: {
    '--bg': '#000000',
    '--accent': '#ff0000',
    // ... see existing themes for full list of variables
  }
}
```

---

## 🏗️ Tech Stack

| Technology | Purpose |
|---|---|
| **Bun** | Runtime + Package manager |
| **Vite** | Build tool (lightning fast HMR) |
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility styling |
| **Framer Motion** | Animations + transitions |
| **Lucide React** | SVG icon library |

---

## 📦 Deploy

### Vercel
```bash
bun run build
# Deploy dist/ folder to Vercel
vercel --prod
```

### Netlify
```bash
bun run build
# Set publish directory to: dist
```

### Static hosting
Upload the contents of `dist/` to any static host (Cloudflare Pages, GitHub Pages, S3, etc.)

---

## ⚡ Performance Notes

- Code-split into 3 chunks: `vendor`, `motion`, `index`
- Fonts loaded from Google Fonts with `display=swap`
- Canvas particles are lightweight and RAF-based
- All animations use `will-change: transform` via Framer Motion
- Images: none used — pure CSS + SVG for zero image weight

---

Built with ❤️ · Hyderabad, India
