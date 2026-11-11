# Blog covers for Gulf Coast Beach Vibes

Makes a branded 1200×630 PNG cover from a post title. Use it as the Open Graph image on **new posts**. Don't replace hero photos on existing posts unless Brooks asks.

**Approved look (Brooks, 2026-11-10):** the dark `photo` layout — the post's hero photo under a navy overlay, with the title and site name on top. If you don't pass a photo, it uses a navy-to-ocean gradient.

## One-time setup

```bash
cd scripts/blog-cover
python3 -m venv .venv && .venv/bin/pip install -r requirements.txt
```

The script uses an installed Chrome if it finds one (`CHROME=/path/to/chrome` to override). If it doesn't, run `.venv/bin/playwright install chromium`. `cover.py` switches into `.venv` on its own.

## Make a cover for a new post

1. After the draft is written and SEO-checked, pick 1–3 words in the title to highlight with `*asterisks*`.
2. Generate the cover, using the post's hero photo when you have one:

```bash
python3 scripts/blog-cover/cover.py --brand gcbv \
  --title "Best Time to Visit 30A: *Month-by-Month* Guide" \
  --image public/images/best-time-to-visit-30a.webp \
  --focus "center 60%" \
  --out public/images/covers/<slug>.png
```

3. Add the file to the repo and set `ogImage` in `lib/posts.ts`:

```ts
heroImage: '/images/best-time-to-visit-30a.webp',
ogImage: '/images/covers/best-time-to-visit-30a.png',
```

The on-page hero still uses `heroImage` (the photo). The cover is used for Open Graph, Twitter, and the Article JSON-LD image. If `ogImage` is omitted, those fall back to `heroImage`, which is how every existing post works today.

Default size is 1200×630. Pass `--size both` if you also want a 1600×900 version.

## Notes

- Fonts (Playfair Display and DM Sans) are bundled under the SIL Open Font License 1.1.
- Leave `--layout` off so the approved `photo` look is used.
- Don't commit `.venv` or generated sample/test images.
