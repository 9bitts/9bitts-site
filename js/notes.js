(function () {
  const FEED = "/notes/index.json";

  function t(key, vars) {
    return window.i18n ? i18n.t(key, vars) : key;
  }

  function localeTag() {
    const map = { en: "en-US", pt: "pt-BR", de: "de-DE" };
    const lang = (window.i18n && i18n.lang) || "en";
    return map[lang] || "en-US";
  }

  function formatDate(iso) {
    if (!iso) return "";
    try {
      return new Date(iso + "T12:00:00").toLocaleDateString(localeTag(), {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return iso;
    }
  }

  function esc(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  async function loadNotes() {
    const res = await fetch(FEED);
    if (!res.ok) throw new Error("Failed to load notes");
    const data = await res.json();
    return (data.notes || []).sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  }

  async function renderNotesPage() {
    const root = document.getElementById("notes-feed");
    if (!root) return;
    try {
      const notes = await loadNotes();
      if (!notes.length) {
        root.innerHTML = `<div class="note-card"><p class="body">${esc(t("notes.empty"))}</p></div>`;
        return;
      }
      root.innerHTML = notes
        .map(
          (n) => `
        <article class="note-card reveal" id="${esc(n.id)}">
          <div class="meta">
            <span>${esc(formatDate(n.date))}</span>
            <span class="type">${esc(n.type || "note")}</span>
          </div>
          <h2>${esc(n.title)}</h2>
          <div class="body"><p>${esc(n.body)}</p></div>
          ${
            n.link
              ? `<a class="note-link" href="${esc(n.link)}">${esc(n.linkLabel || t("notes.continue"))} →</a>`
              : ""
          }
        </article>`
        )
        .join("");
      document.querySelectorAll("#notes-feed .reveal").forEach((el) => {
        el.classList.add("visible");
      });
    } catch {
      root.innerHTML = `<div class="note-card"><p class="body">${esc(t("notes.error"))}</p></div>`;
    }
  }

  async function renderNotesStrip() {
    const root = document.getElementById("notes-strip-list");
    if (!root) return;
    try {
      const notes = (await loadNotes()).slice(0, 4);
      root.innerHTML = notes
        .map(
          (n) => `
        <a class="note-row reveal" href="/notes.html#${esc(n.id)}">
          <span class="note-date">${esc(formatDate(n.date))}</span>
          <span class="note-title">${esc(n.title)}</span>
          <span class="note-type">${esc(n.type || "note")}</span>
        </a>`
        )
        .join("");
      document.querySelectorAll("#notes-strip-list .reveal").forEach((el) => {
        el.classList.add("visible");
      });
    } catch {
      root.innerHTML = "";
    }
  }

  function renderAll() {
    renderNotesPage();
    renderNotesStrip();
  }

  renderAll();
  document.addEventListener("9bitts:langchange", renderAll);
})();
