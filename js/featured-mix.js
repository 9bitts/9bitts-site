(function () {
  const root = document.getElementById("featured-mix");
  if (!root) return;

  function esc(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  fetch("/listen/index.json")
    .then((r) => r.json())
    .then((data) => {
      const mixes = data.mixes || [];
      const m = mixes.find((x) => x.featured) || mixes[0];
      if (!m) return;

      const meta = root.querySelector("[data-mix-meta]");
      const title = root.querySelector("[data-mix-title]");
      const lead = root.querySelector("[data-mix-lead]");
      const iframe = root.querySelector("[data-mix-iframe]");
      const yt = root.querySelector("[data-mix-youtube]");
      const page = root.querySelector("[data-mix-page]");
      const visual = document.querySelector("[data-hero-mix-title]");

      if (meta) {
        const prefix = window.i18n ? i18n.t("featured.prefix") : "Featured";
        meta.textContent = `${prefix} · ${m.genre || "Electronic"}${m.duration ? " · " + m.duration : ""}`;
      }
      if (title) title.textContent = m.title;
      if (lead) lead.textContent = m.excerpt;
      if (iframe && m.mixcloudEmbed) {
        iframe.src = m.mixcloudEmbed;
        iframe.title = m.title;
        iframe.parentElement.style.display = "";
      } else if (iframe) {
        iframe.parentElement.style.display = "none";
      }
      if (yt) {
        if (m.youtube) {
          yt.href = m.youtube;
          yt.style.display = "";
        } else yt.style.display = "none";
      }
      if (page) page.href = `/listen/${esc(m.slug)}.html`;
      if (visual) visual.textContent = `${m.title}${m.genre ? " — " + m.genre : ""}`;
    })
    .catch(() => {});

  document.addEventListener("9bitts:langchange", () => {
    const meta = root.querySelector("[data-mix-meta]");
    if (!meta || !meta.textContent) return;
    const parts = meta.textContent.split(" · ");
    if (parts.length < 2) return;
    const prefix = window.i18n ? i18n.t("featured.prefix") : "Featured";
    parts[0] = prefix;
    meta.textContent = parts.join(" · ");
  });
})();
