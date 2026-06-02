/* ── Benjamin Kugler portfolio — interactions ────────────────────────────── */
(function () {
  "use strict";

  /* ---------- Theme (light/dark) ---------- */
  var root = document.documentElement;
  var THEME_KEY = "bk-theme";
  try {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved) root.setAttribute("data-theme", saved);
  } catch (e) {}

  var themeToggle = document.getElementById("themeToggle");
  function syncThemeBtn() {
    var dark = root.getAttribute("data-theme") === "dark";
    if (themeToggle) themeToggle.setAttribute("aria-pressed", String(dark));
  }
  syncThemeBtn();
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      syncThemeBtn();
    });
  }

  /* ---------- Nav: scrolled state + scroll progress ---------- */
  var nav = document.getElementById("nav");
  var progress = document.getElementById("navProgress");
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle("is-scrolled", y > 8);
    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById("navBurger");
  var menu = document.getElementById("mobileMenu");
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Open menu");
    setTimeout(function () { if (!menu.classList.contains("is-open")) menu.hidden = true; }, 300);
  }
  function openMenu() {
    if (!menu) return;
    menu.hidden = false;
    requestAnimationFrame(function () { menu.classList.add("is-open"); });
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Close menu");
  }
  if (burger) {
    burger.addEventListener("click", function () {
      if (menu.classList.contains("is-open")) closeMenu(); else openMenu();
    });
    menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  function show(el) { el.classList.add("is-in"); }
  function inView(el) {
    var r = el.getBoundingClientRect();
    return r.top < window.innerHeight * 0.92 && r.bottom > 0;
  }
  reveals.forEach(function (el, i) { el.style.transitionDelay = Math.min((i % 6) * 60, 300) + "ms"; });
  // Anything already in (or above) the viewport reveals right away.
  reveals.forEach(function (el) { if (inView(el)) show(el); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { show(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { if (!el.classList.contains("is-in")) io.observe(el); });
  }

  // Failsafe: if IO never fires (e.g. page not composited), reveal on scroll
  // and guarantee everything is visible shortly after load.
  function revealInView() { reveals.forEach(function (el) { if (!el.classList.contains("is-in") && inView(el)) show(el); }); }
  window.addEventListener("scroll", revealInView, { passive: true });
  setTimeout(function () { reveals.forEach(show); }, 2600);

  /* ---------- Active section in nav ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav__links a'));
  var sectionIds = navLinks.map(function (a) { return a.getAttribute("href").slice(1); });
  var sections = sectionIds.map(function (id) { return document.getElementById(id); }).filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var id = en.target.id;
          navLinks.forEach(function (a) {
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- CV download guard (placeholder PDFs) ---------- */
  document.querySelectorAll('.cv-btn[download]').forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // If the PDF isn't uploaded yet, fetch HEAD fails silently -> let default run.
      // Kept simple: real files dropped in /assets will just download.
    });
  });
})();
