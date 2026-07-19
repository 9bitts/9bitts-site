# 9bitts-site

Website for [9bitts.com](https://9bitts.com) — electronic music for attention.

## Structure

| Path | Role |
|------|------|
| `/` | Home — listen first, then notes, journal, world, belong |
| `/listen.html` | All sets |
| `/notes.html` | Short daily/weekly dispatches |
| `/journal.html` | Long essays |
| `/world.html` | Hub → guide + artists |
| `/visuals.html` | Visual hub → photos + photographers |
| `/objects.html` | Support + studio tools + reading |
| `/about.html` | Story + how the project stays alive |

Legacy URLs `/shop.html` and `/blog.html` redirect to Objects and Journal.

## Publishing Notes (daily / weekly)

Edit `notes/index.json`. Add a new object at the **top** of the `notes` array:

```json
{
  "id": "2026-07-20",
  "date": "2026-07-20",
  "type": "listen",
  "title": "Your title",
  "body": "Short text for the week.",
  "link": "/listen.html",
  "linkLabel": "Listen"
}
```

`type` can be: `listen` · `thought` · `visual` · `studio`

Notes appear on `/notes.html` and on the home page strip automatically after deploy.
