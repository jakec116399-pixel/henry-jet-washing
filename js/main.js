// main.js — Henry's Exterior Cleaning

// Mobile menu: open/close the nav, and close it after a link is tapped
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}

// Our Work gallery: arrows move one screen at a time, and the counter counts screens
// (1 / 6 on phones, 1 / 3 on tablets, 1 / 2 on desktop)
const workTrack = document.querySelector("#work-track");

if (workTrack) {
  const items = workTrack.querySelectorAll(".work-item");
  const current = document.querySelector("#work-current");
  const total = document.querySelector("#work-total");
  const [prevBtn, nextBtn] = document.querySelectorAll(".work-arrow");

  const itemStep = () => items[0].offsetWidth + parseFloat(getComputedStyle(workTrack).columnGap);
  const perView = () => Math.max(1, Math.round((workTrack.clientWidth + 1) / itemStep()));

  const update = () => {
    const pages = Math.ceil(items.length / perView());
    const atEnd = workTrack.scrollLeft >= workTrack.scrollWidth - workTrack.clientWidth - 2;
    const page = Math.round(workTrack.scrollLeft / (itemStep() * perView())) + 1;
    total.textContent = pages;
    current.textContent = atEnd ? pages : Math.min(page, pages);
    prevBtn.disabled = workTrack.scrollLeft <= 2;
    nextBtn.disabled = atEnd;
  };

  [prevBtn, nextBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
      const left = itemStep() * perView() * Number(btn.dataset.dir);
      workTrack.scrollBy({ left, behavior: "smooth" });
    });
  });

  workTrack.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

// Keep the footer year current
const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}
