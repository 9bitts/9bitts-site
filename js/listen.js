(function () {
  const FEED = "/listen/index.json";
  const root = document.getElementById("listen-list");
  if (!root) return;

  function t(key, vars) {
    return window.i18n ? i18n.t(key, vars) : key;
  }

  function esc(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function metaLine(m) {
    const num = m.number
      ? t("listen.mix", { n: m.number })
      : m.type === "tribute"
        ? t("listen.tribute")
        : t("listen.set");
    return `${num} · ${m.genre || "Electronic"}`;
  }

  async function load() {
    try {
      const res = await fetch(FEED);
      if (!res.ok) throw new Error("fail");
      const data = await res.json();
      const mixes = (data.mixes || []).slice().sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return (b.date || "").localeCompare(a.date || "");
      });

      if (!mixes.length) {
        root.innerHTML = `<p style="color:var(--ink-mute);padding:2rem 0;">${esc(t("listen.empty"))}</p>`;
        return;
      }

      root.innerHTML = mixes
        .map(
          (m) => `
        <a class="listen-item reveal" href="/listen/${esc(m.slug)}.html" id="${esc(m.slug)}">
          <div class="listen-cover">${esc(m.cover || m.number || "9b")}</div>
          <div class="listen-body">
            <div class="meta">${esc(metaLine(m))}${m.duration ? " · " + esc(m.duration) : ""}</div>
            <h3>${esc(m.title)}</h3>
            <p>${esc(m.excerpt)}</p>
            <div class="listen-open">${esc(t("cta.openSet"))}</div>
          </div>
        </a>`
        )
        .join("");

      document.querySelectorAll("#listen-list .reveal").forEach((el) => {
        el.classList.add("visible");
      });
    } catch {
      root.innerHTML = `<p style="color:var(--ink-mute);padding:2rem 0;">${esc(t("listen.error"))}</p>`;
    }
  }

  load();
  document.addEventListener("9bitts:langchange", load);
})();
