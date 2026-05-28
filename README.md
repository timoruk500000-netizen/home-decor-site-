# 🏡 Nestled Decor — Astro Blog

Budget home decor for renters & small spaces. Built for speed, Pinterest traffic, and affiliate conversions.

**Tech stack:** Astro 4 + Tailwind CSS + Netlify + MDX content

---

## ⚡ 1-Click Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_USERNAME/nestled-decor)

Or follow the manual steps below.

---

## 🚀 Manual Deploy Steps

### Prerequisites
- Node.js 20+
- A Netlify account (free)
- A GitHub/GitLab account

### Step 1: Clone & install

```bash
git clone https://github.com/YOUR_USERNAME/nestled-decor.git
cd nestled-decor
npm install
npm run dev
# → Open http://localhost:4321
```

### Step 2: Customize your brand

1. **Site URL** — Update `site` in `astro.config.mjs`:
   ```js
   site: 'https://YOUR-SITE.netlify.app'
   ```

2. **Blog name** — Search-replace "Nestled" and "nestleddecor.com" across:
   - `src/layouts/BaseLayout.astro`
   - `src/components/Header.astro`
   - `src/components/Footer.astro`
   - `public/robots.txt`

3. **Your photo** — Replace the Unsplash photo URLs in:
   - `src/pages/about.astro`
   - `src/pages/index.astro` (about teaser)

### Step 3: Set up monetization

**Amazon Associates:**
1. Apply at [affiliate-program.amazon.com](https://affiliate-program.amazon.com)
2. Once approved, get your Associate Tag (e.g. `yourblog-20`)
3. Open `src/components/AffiliateButton.astro`
4. Replace `nestleddecor-20` with your tag

**Wayfair / Target Affiliate:**
1. Apply at [Impact.com](https://impact.com) for both
2. Replace `YOUR_WAYFAIR_ID` and `YOUR_TARGET_ID` in `AffiliateButton.astro`

**Using affiliate buttons in posts:**
```mdx
import AffiliateButton from '../../components/AffiliateButton.astro';

<AffiliateButton id="B08XYZ123" store="amazon" label="Check Price on Amazon" price="$24.99" />
<AffiliateButton id="123456"    store="wayfair" label="Shop on Wayfair" />
<AffiliateButton id="78901234"  store="target"  label="Find it at Target" />
```

### Step 4: Set up email capture (MailerLite)

1. Create a free account at [mailerlite.com](https://mailerlite.com)
2. Create a new group called "Nestled Newsletter"
3. Go to **Forms → Embedded forms** → Create new form
4. Copy your Form ID and Form Code
5. Replace `YOUR_FORM_ID` and `YOUR_FORM_CODE` in:
   - `src/components/EmailSignup.astro`
   - `src/layouts/BlogPostLayout.astro`

**Or use ConvertKit:**
Replace the form action URL with your ConvertKit embed URL.

### Step 5: Deploy to Netlify

```bash
# Push to GitHub first
git init && git add . && git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/nestled-decor.git
git push -u origin main
```

Then in Netlify:
1. **New site from Git** → Connect GitHub → Select repo
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy site**

Your site goes live at `https://random-name.netlify.app` — then add your custom domain.

---

## ✍️ Writing New Blog Posts

Create a new `.mdx` file in `src/content/blog/`:

```bash
# File name becomes the URL slug:
# src/content/blog/my-post-title.mdx → /blog/my-post-title
```

**Frontmatter template:**
```mdx
---
title: "Your Post Title Here"
description: "SEO meta description, 150-160 characters."
pubDate: "2024-03-01"
heroImage: "https://images.unsplash.com/photo-XXXX?w=1000&h=1500&fit=crop"
heroImageAlt: "Describe the image for accessibility and SEO"
hook: "One-line teaser shown on post cards — make it compelling."
tags: ["budget", "living room", "amazon finds"]
---

import AffiliateButton from '../../components/AffiliateButton.astro';

Your content here...

<AffiliateButton id="B0XXXXXXX" store="amazon" label="Shop on Amazon" price="$19.99" />
```

**Image ratio:** Always use `w=1000&h=1500` in Unsplash URLs for Pinterest's 2:3 ratio.

**Tags available:** `budget` · `rental` · `small-spaces` · `living-room` · `bedroom` · `bathroom` · `kitchen` · `plants` · `thrifting` · `amazon-finds` · `styling` · `diy`

---

## 📌 Pinterest Optimization

Every page already has:
- ✅ 2:3 (1000×1500) hero images
- ✅ "Save to Pinterest" button on hover over every image
- ✅ Open Graph tags for rich pins
- ✅ Clean URLs that read well in pins

**Rich Pins setup:**
1. Go to [Pinterest for Business](https://business.pinterest.com)
2. Claim your website
3. Apply for Rich Pins — Article pins will auto-pull title + description

---

## 🔍 SEO Checklist

- ✅ Auto-generated sitemap at `/sitemap-index.xml`
- ✅ robots.txt at `/robots.txt`
- ✅ Article schema markup on every post
- ✅ WebSite schema on homepage
- ✅ Open Graph + Twitter Cards on every page
- ✅ Canonical URLs
- ✅ Alt text fields on all images

**After deploying:**
1. Submit sitemap to [Google Search Console](https://search.google.com/search-console)
2. Submit to [Bing Webmaster Tools](https://www.bing.com/webmasters)
3. Add Pinterest verification meta tag (get code from Pinterest Business settings)

---

## 📊 Analytics (Recommended: Plausible)

1. Sign up at [plausible.io](https://plausible.io) (~$9/mo, privacy-friendly)
2. Add this to `src/layouts/BaseLayout.astro` in `<head>`:
```html
<script defer data-domain="nestleddecor.com" src="https://plausible.io/js/script.js"></script>
```

---

## 📁 File Structure

```
nestled/
├── src/
│   ├── components/
│   │   ├── Header.astro          # Sticky nav with mobile menu
│   │   ├── Footer.astro          # Links + social
│   │   ├── PostCard.astro        # Blog post card with Pin button
│   │   ├── AffiliateButton.astro # Amazon/Wayfair/Target CTA
│   │   ├── PinButton.astro       # Pinterest save overlay
│   │   ├── EmailSignup.astro     # MailerLite form
│   │   └── RelatedPosts.astro    # Bottom of blog posts
│   ├── content/
│   │   ├── config.ts             # Content collection schema
│   │   └── blog/                 # ← Add new .mdx posts here
│   ├── layouts/
│   │   ├── BaseLayout.astro      # HTML shell, SEO, schema
│   │   └── BlogPostLayout.astro  # Article layout with disclosures
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── start-here.astro
│   │   ├── privacy-policy.astro
│   │   ├── affiliate-disclosure.astro
│   │   ├── 404.astro
│   │   └── blog/
│   │       ├── index.astro       # All posts grid
│   │       └── [slug].astro      # Dynamic post route
│   └── styles/
│       └── global.css            # Tailwind + fonts + utilities
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml                  # Build + cache + redirect rules
└── package.json
```

---

## 🎨 Design Tokens

| Token       | Value     | Usage                  |
|-------------|-----------|------------------------|
| `cream`     | `#FAF7F2` | Page background        |
| `sage`      | `#7A9E7E` | Primary brand color    |
| `clay`      | `#C4956A` | Affiliate CTAs         |
| `charcoal`  | `#2D2926` | Body text, headings    |
| `stone-500` | `#8C8070` | Secondary text         |

Fonts: **Playfair Display** (headings) + **DM Sans** (body) + **DM Serif Text** (article h2/h3)

---

## 🔧 Performance Tips

- Lighthouse target: 90+ on mobile (should hit 95+ as built)
- All images use `loading="lazy"` except hero
- No heavy JS frameworks — pure Astro (ships 0 JS by default)
- Google Fonts are preconnected and display=swap
- Netlify CDN handles static asset caching via `netlify.toml`

---

## 💸 Revenue Roadmap

1. **Month 1–3:** Amazon Associates (easiest approval, fastest links)
2. **Month 3+:** Add Wayfair + Target affiliates
3. **Month 6+:** Apply to LTK (formerly LikeToKnowIt) for influencer links
4. **Month 12+:** Direct brand partnerships / sponsored posts

---

Built with ❤️ for renters everywhere.
