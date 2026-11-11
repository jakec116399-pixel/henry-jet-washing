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

// Our Work gallery: arrow buttons and a "1 / 6" counter for the swipeable row
const workTrack = document.querySelector("#work-track");

if (workTrack) {
  const items = workTrack.querySelectorAll(".work-item");
  const current = document.querySelector("#work-current");
  const [prevBtn, nextBtn] = document.querySelectorAll(".work-arrow");
  const step = () => items[0].offsetWidth + parseFloat(getComputedStyle(workTrack).columnGap);

  document.querySelector("#work-total").textContent = items.length;

  const update = () => {
    const maxScroll = workTrack.scrollWidth - workTrack.clientWidth;
    const atEnd = workTrack.scrollLeft >= maxScroll - 2;
    current.textContent = atEnd ? items.length : Math.round(workTrack.scrollLeft / step()) + 1;
    prevBtn.disabled = workTrack.scrollLeft <= 2;
    nextBtn.disabled = atEnd;
  };

  [prevBtn, nextBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
      workTrack.scrollBy({ left: step() * Number(btn.dataset.dir), behavior: "smooth" });
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
