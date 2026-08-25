// ================================================
// QuickSnack Cafe — Script
// Scroll animations, nav highlighting, mobile nav
// ================================================

(function () {
  "use strict";

  // ---- Scroll-triggered animations ----
  const animateElements = document.querySelectorAll(
    ".section-title, .card"
  );

  if ("IntersectionObserver" in window && animateElements.length) {
    const animateObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger cards within a section
            if (entry.target.classList.contains("card")) {
              const cards = entry.target.closest(".card-grid");
              if (cards) {
                const index = Array.from(cards.children).indexOf(entry.target);
                entry.target.style.animationDelay = `${index * 0.08}s`;
              }
            }
            entry.target.classList.add("in-view");
            animateObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
    );

    animateElements.forEach((el) => animateObserver.observe(el));
  }

  // ---- Active nav link highlighting ----
  const sections = document.querySelectorAll(".menu-section");
  const navLinks = document.querySelectorAll(".menu-nav-inner a");

  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    const linkFor = (id) =>
      document.querySelector(`.menu-nav-inner a[href="#${id}"]`);

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = linkFor(entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => navObserver.observe(section));
  }

  // ---- Mobile nav toggle ----
  const navToggle = document.querySelector(".nav-toggle");
  const navInner = document.querySelector(".menu-nav-inner");

  if (navToggle && navInner) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navInner.classList.toggle("open");
    });

    // Close nav when a link is tapped
    navInner.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        navInner.classList.remove("open");
      });
    });
  }
})();
