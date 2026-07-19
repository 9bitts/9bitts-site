/**
 * Generates SEO pages for each mix in listen/index.json
 * Also writes listen/{slug}.json for automation parity with music essays.
 * Usage: node scripts/generate-mix-pages.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const indexPath = path.join(root, "listen", "index.json");
const { mixes } = JSON.parse(fs.readFileSync(indexPath, "utf8"));

function esc(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml(m) {
  const url = `https://9bitts.com/listen/${m.slug}.html`;
  const meta = m.number ? `Mix ${m.number} · ${m.genre}` : m.genre;
  const player = m.mixcloudEmbed
    ? `<div class="mix-player-box"><iframe width="100%" height="120" title="${esc(m.title)}" src="${esc(m.mixcloudEmbed)}" frameborder="0" allow="encrypted-media; fullscreen; autoplay;"></iframe></div>`
    : "";
  const yt = m.youtube
    ? `<a class="btn btn-primary" href="${esc(m.youtube)}" target="_blank" rel="noopener">Watch on YouTube</a>`
    : "";
  const mc = m.mixcloud
    ? `<a class="btn btn-ghost" href="${esc(m.mixcloud)}" target="_blank" rel="noopener">Open on Mixcloud</a>`
    : "";
  const duration = m.duration ? ` · ${esc(m.duration)}` : "";

  const schema = {
    "@context": "https://schema.org",
    "@type": "MusicPlaylist",
    name: m.title,
    description: m.description || m.excerpt,
    url,
    datePublished: m.date,
    genre: m.genre,
    author: { "@type": "Person", name: "9bitts", url: "https://9bitts.com" },
  };
  if (m.youtube) {
    schema.sameAs = [m.youtube, m.mixcloud].filter(Boolean);
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(m.title)} — 9bitts Listen</title>
<meta name="description" content="${esc(m.excerpt)}">
<meta property="og:title" content="${esc(m.title)} — 9bitts">
<meta property="og:description" content="${esc(m.excerpt)}">
<meta property="og:url" content="${url}">
<meta property="og:type" content="music.playlist">
<meta property="og:site_name" content="9bitts">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${esc(m.title)}">
<meta name="twitter:description" content="${esc(m.excerpt)}">
<link rel="canonical" href="${url}">
<script type="application/ld+json">${JSON.stringify(schema)}</script>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300;1,9..144,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/site.css">
</head>
<body>
<nav class="site-nav" id="site-nav">
  <a href="/" class="logo"><span class="logo-mark">9b</span><span>9bitts</span></a>
  <ul class="nav-links">
    <li><a href="/listen.html" class="active">Listen</a></li>
    <li><a href="/notes.html">Notes</a></li>
    <li><a href="/journal.html">Journal</a></li>
    <li><a href="/world.html">World</a></li>
    <li><a href="/visuals.html">Visuals</a></li>
    <li><a href="/objects.html">Objects</a></li>
    <li><a href="/about.html">About</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
</nav>
<div class="mobile-menu" id="mobile-menu">
  <a href="/listen.html" onclick="closeMobile()">Listen</a>
  <a href="/notes.html" onclick="closeMobile()">Notes</a>
  <a href="/journal.html" onclick="closeMobile()">Journal</a>
  <a href="/world.html" onclick="closeMobile()">World</a>
  <a href="/visuals.html" onclick="closeMobile()">Visuals</a>
  <a href="/objects.html" onclick="closeMobile()">Objects</a>
  <a href="/about.html" onclick="closeMobile()">About</a>
</div>

<article class="mix-page wrap">
  <a class="mix-back" href="/listen.html">← All sets</a>
  <p class="eyebrow">${esc(meta)}${duration}</p>
  <h1 class="display mix-page-title">${esc(m.title)}</h1>
  <p class="lead mix-page-lead">${esc(m.description || m.excerpt)}</p>
  <div class="mix-page-cover" aria-hidden="true">${esc(m.cover || m.number || "9b")}</div>
  ${player}
  <div class="mix-page-actions">${yt}${mc}</div>
  <div class="mix-page-more">
    <p>Explore more from 9bitts</p>
    <div class="mix-page-links">
      <a href="/journal.html">Journal</a>
      <a href="/notes.html">Notes</a>
      <a href="/music/">Electronic Music Guide</a>
      <a href="/objects.html">Objects</a>
    </div>
  </div>
</article>

<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <h3>9bitts</h3>
      <p>Electronic music for attention. Made in Leipzig.</p>
      <p class="footer-dev">Also building systems → <a href="https://9bitts.dev/" target="_blank" rel="noopener">9bitts.dev</a></p>
    </div>
    <div class="footer-col"><h4>Explore</h4><ul>
      <li><a href="/listen.html">Listen</a></li><li><a href="/notes.html">Notes</a></li>
      <li><a href="/journal.html">Journal</a></li><li><a href="/about.html">About</a></li>
    </ul></div>
    <div class="footer-col"><h4>Legal</h4><ul>
      <li><a href="/terms.html">Terms</a></li><li><a href="/privacy.html">Privacy</a></li>
    </ul></div>
  </div>
  <div class="footer-bottom"><div>© 9bitts 2026</div><div><a href="mailto:diegoalbs@proton.me">Contact</a></div></div>
</footer>
<script src="/js/site.js"></script>
</body>
</html>
`;
}

const outDir = path.join(root, "listen");
for (const m of mixes) {
  fs.writeFileSync(path.join(outDir, `${m.slug}.json`), JSON.stringify(m, null, 2) + "\n");
  fs.writeFileSync(path.join(outDir, `${m.slug}.html`), buildHtml(m));
  console.log("Wrote", m.slug);
}

// Automation template with placeholders
const templateMix = {
  title: "MIX_TITLE",
  slug: "MIX_SLUG",
  date: "MIX_DATE",
  number: "MIX_NUMBER",
  cover: "MIX_COVER",
  genre: "MIX_GENRE",
  duration: "MIX_DURATION",
  excerpt: "MIX_EXCERPT",
  description: "MIX_DESCRIPTION",
  youtube: "MIX_YOUTUBE",
  mixcloud: "MIX_MIXCLOUD",
  mixcloudEmbed: "MIX_MIXCLOUD_EMBED",
  featured: false,
  type: "mix",
};
fs.writeFileSync(
  path.join(outDir, "_template.html"),
  buildHtml(templateMix).replace(/MIX_/g, "MIX_")
);
console.log("Done. Generated", mixes.length, "mix pages.");
