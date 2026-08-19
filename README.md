# Portfolio Site — Source Code

A single-page portfolio built with plain HTML/CSS/JS (no build step, no framework).
Theme: a "training log" aesthetic — paper background, cobalt (loss) + amber (accuracy)
accents, and an animated canvas chart in the hero that mimics a real training run.

## Files

```
portfolio/
├── index.html     ← all content lives here (text, links, sections)
├── style.css       ← colors, fonts, layout (design tokens at the top)
├── script.js       ← hero chart animation + skill-tag scroll reveal
└── assets/
    └── resume.pdf  ← replace with your actual résumé
```

## Quick start

Just open `index.html` in a browser — no install, no server needed.

To edit locally with live reload, you can use any static server, e.g.:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## What to customize first

1. **Your info** — in `index.html`:
   - Name/brand in the header (`.brand-name`) and hero (`<h1>`)
   - `<title>` and `<meta name="description">` tags
   - About section text and the three "facts" (studying / based in / currently)
   - Social links (GitHub, LinkedIn, Kaggle) — appears in hero and footer
   - Contact email in the `mailto:` form action and footer link
2. **Skills** — edit the `.tag` lists inside `#skills`. Add/remove `<span class="tag">`
   items freely; they animate in automatically.
3. **Projects** — duplicate a `.project-card` block inside `#projects` for each
   project. Update title, abstract, links, and tags.
4. **Experience/education** — edit the `<li>` items inside `.timeline` in `#experience`.
5. **Résumé** — drop your PDF at `assets/resume.pdf` (create the `assets/` folder),
   or change the `href` on the "Résumé" button to a Google Drive / hosted link.
6. **Colors/fonts** — all design tokens are CSS custom properties at the top of
   `style.css` under `:root`. Change `--loss` / `--acc` to re-theme the whole site.

## Making the contact form actually send email

Right now the form uses `mailto:`, which just opens the visitor's email client.
For a real inbox flow without a backend, swap the `<form>` action for a service like
[Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) (both have free tiers):

```html
<form class="contact-form" action="https://formspree.io/f/yourFormId" method="POST">
```

## Deploying it for free

**GitHub Pages** (easiest):
1. Push this folder to a GitHub repo.
2. Repo Settings → Pages → set source to your main branch, root folder.
3. Your site goes live at `https://yourusername.github.io/repo-name`.

**Netlify / Vercel**: drag-and-drop the `portfolio/` folder onto their dashboard,
or connect the GitHub repo for auto-deploys on every push.

## Notes

- The hero chart uses synthetic (fake) numbers to draw a plausible loss/accuracy
  curve — it's decorative, not a real training log. Swap the `loss`/`acc` arrays
  in `script.js` for real numbers from an actual run if you want it to be genuine.
- Respects `prefers-reduced-motion` (skips animation for users who've set that).
- No external JS dependencies — only Google Fonts are loaded remotely.
