(function () {
  const nav = document.getElementById("site-nav");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 16);
    });
  }

  window.closeMobile = function () {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      hamburger.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Radio
  const bar = document.getElementById("radioBar");
  const toggle = document.getElementById("radioToggle");
  const wrap = document.getElementById("mixcloud-wrap");

  window.openRadio = function () {
    if (!bar || !toggle) return;
    bar.classList.add("visible");
    toggle.classList.add("hidden");
    document.body.classList.add("has-radio-pad");
    if (wrap) wrap.style.display = "block";
  };

  window.closeRadio = function () {
    if (!bar || !toggle) return;
    bar.classList.remove("visible");
    toggle.classList.remove("hidden");
    document.body.classList.remove("has-radio-pad");
    if (wrap) wrap.style.display = "none";
  };

  if (toggle) {
    toggle.style.display = "none";
    setTimeout(() => {
      toggle.style.display = "flex";
    }, 2500);
  }
})();
