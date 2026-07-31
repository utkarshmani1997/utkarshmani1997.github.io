# utkarshmani1997.github.io

My personal portfolio — a **dual-mode** site:

- **Developer mode** — engineering work: experience, skills, open-source projects, résumé.
- **Clean mode** — my writing: quotes, poems, blogs, and sarcastic posts.

Live at **https://utkarshmani1997.github.io**. Built with [Jekyll](https://jekyllrb.com/)
and served by GitHub Pages, which rebuilds automatically on every push.

---

## ✍️ Publishing a new writing (the only workflow you need)

1. Create a file in `_writings/` named `YYYY-MM-DD-a-short-slug.md`, e.g.
   `_writings/2026-08-15-on-patience.md`.

2. Put this at the top (the front matter), then write below it in Markdown:

   ```markdown
   ---
   title: "On patience"
   category: quote        # one of: quote | poem | blog | sarcasm
   date: 2026-08-15
   excerpt: "A one-line teaser shown on the card (optional)."
   ---

   Your words here. Markdown works — **bold**, *italics*, line breaks,
   [links](https://example.com), and blockquotes.
   ```

3. Commit and push:

   ```bash
   git add .
   git commit -m "new: on patience"
   git push
   ```

That's it. GitHub Pages rebuilds and the piece is live in about a minute — it
appears automatically in Clean mode under its category, with its own page.

**Categories** map to the filter chips (`quote`, `poem`, `blog`, `sarcasm`).
To add a new category, add a chip in `index.html` (`data-filter="..."`).

---

## Editing the Developer side

Content is data-driven — no HTML editing needed:

- Experience → `_data/experience.yml`
- Projects → `_data/projects.yml`
- Skills → `_data/skills.yml`

## Privacy

Email, phone number, and the CV are **intentionally not** in this repo — a
public repo is readable even where nothing links to it. Visitors request the
résumé and contact details via LinkedIn, and you decide who receives them.
Keep it that way: don't commit the CV PDF or add your email to `_config.yml`.

## Running locally (optional)

You never need this to publish — GitHub builds the site for you. But to preview:

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

Requires Ruby ≥ 2.7. On macOS the simplest route is `brew install ruby` or a
Docker image (`docker run --rm -v "$PWD":/srv/jekyll -p 4000:4000 jekyll/jekyll jekyll serve`).
