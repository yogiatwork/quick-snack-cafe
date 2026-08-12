// Highlight the current section's nav link while scrolling
const sections = document.querySelectorAll(".menu-section");
const navLinks = document.querySelectorAll(".menu-nav-inner a");

if ("IntersectionObserver" in window && sections.length && navLinks.length) {
  const linkFor = (id) =>
    document.querySelector(`.menu-nav-inner a[href="#${id}"]`);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = linkFor(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => (l.style.color = ""));
          link.style.color = "var(--accent)";
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
  );

  sections.forEach((section) => observer.observe(section));
}
