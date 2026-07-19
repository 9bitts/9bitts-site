# Listen automation (Make / GitHub)

When a new mix goes live on YouTube or Mixcloud, publish it to the site like this.

## Files to create / update

1. **`listen/{slug}.json`** — mix metadata (same shape as entries in `index.json`)
2. **`listen/{slug}.html`** — SEO page (generate with `node scripts/generate-mix-pages.js` after updating `index.json`, or copy from `_template.html` and replace placeholders)
3. **`listen/index.json`** — prepend the new mix object to the `mixes` array; set `"featured": true` on the new one and `false` on the others if it should lead the home
4. **`sitemap.xml`** — add:
   ```xml
   <url>
     <loc>https://9bitts.com/listen/{slug}.html</loc>
     <lastmod>YYYY-MM-DD</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.9</priority>
   </url>
   ```
5. **Optional — `notes/index.json`** — prepend a note:
   ```json
   {
     "id": "YYYY-MM-DD",
     "date": "YYYY-MM-DD",
     "type": "listen",
     "title": "Short title",
     "body": "One or two sentences.",
     "link": "/listen/{slug}.html",
     "linkLabel": "Listen to the set"
   }
   ```

## JSON fields

| Field | Example |
|-------|---------|
| title | Between Worlds |
| slug | between-worlds |
| date | 2026-03-15 |
| number | 005 |
| cover | 05 |
| genre | Melodic House & Techno |
| duration | ~65 min |
| excerpt | Short SEO / card text |
| description | Longer paragraph for the mix page |
| youtube | https://youtu.be/... |
| mixcloud | https://www.mixcloud.com/9bitts/... |
| mixcloudEmbed | Mixcloud iframe `src` URL |
| featured | true / false |
| type | mix \| tribute |

## Local regenerate

After editing `listen/index.json`:

```bash
node scripts/generate-mix-pages.js
```

This rewrites every `listen/{slug}.html` and `listen/{slug}.json` from the index.
