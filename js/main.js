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

// Cookie consent and Google Analytics.
// Analytics only loads after the visitor taps Accept. The choice is remembered on their device,
// and "Cookie settings" in the footer reopens the banner.
const GA_ID = "G-SVM5MWSPHV";
const CONSENT_KEY = "hec-cookie-consent";
const cookieBanner = document.querySelector("#cookie-banner");

const readConsent = () => {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
};

const saveConsent = (value) => {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Storage blocked: the choice still applies for this visit
  }
};

const loadAnalytics = () => {
  window[`ga-disable-${GA_ID}`] = false;
  if (window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
};

const removeAnalytics = () => {
  window[`ga-disable-${GA_ID}`] = true;
  const host = location.hostname.replace(/^www\./, "");
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (name.startsWith("_ga")) {
      [host, `.${host}`, ""].forEach((domain) => {
        document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
      });
    }
  });
};

if (cookieBanner) {
  const consent = readConsent();
  if (consent === "granted") loadAnalytics();
  if (!consent) cookieBanner.hidden = false;

  cookieBanner.querySelectorAll("[data-consent]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const choice = btn.dataset.consent;
      saveConsent(choice);
      if (choice === "granted") loadAnalytics();
      else removeAnalytics();
      cookieBanner.hidden = true;
    });
  });

  document.querySelectorAll("[data-cookie-settings]").forEach((link) => {
    link.addEventListener("click", () => {
      cookieBanner.hidden = false;
      cookieBanner.querySelector("[data-consent]").focus();
    });
  });
}

// Quote form: send to Formspree in the background, then go to our own thank-you page.
// Without JavaScript the form still posts straight to Formspree as before.
const quoteForm = document.querySelector("#quote-form");

if (quoteForm) {
  const submitBtn = quoteForm.querySelector('button[type="submit"]');
  const errorMsg = document.querySelector("#form-error");

  quoteForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    errorMsg.hidden = true;
    submitBtn.disabled = true;
    const label = submitBtn.textContent;
    submitBtn.textContent = "Sending…";

    try {
      const response = await fetch(quoteForm.action, {
        method: "POST",
        body: new FormData(quoteForm),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Formspree returned ${response.status}`);
      try {
        // Lets the thank-you page count the lead once, and only after a real submission
        sessionStorage.setItem("hec-lead", quoteForm.service.value);
      } catch {
        // Storage blocked: the visitor still sees the thank-you page
      }
      window.location.href = "thank-you.html";
    } catch {
      errorMsg.hidden = false;
      submitBtn.disabled = false;
      submitBtn.textContent = label;
    }
  });
}

// Thank-you page: record a generate_lead event in Google Analytics (for Google Ads conversions).
// Only fires after a real submission, once per submission, and only if the visitor accepted cookies.
if (document.querySelector(".thanks")) {
  let service = null;
  try {
    service = sessionStorage.getItem("hec-lead");
    sessionStorage.removeItem("hec-lead");
  } catch {
    service = null;
  }
  if (service !== null && window.gtag) {
    window.gtag("event", "generate_lead", { form_name: "quote_request", service });
  }
}

// Keep the footer year current
const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}
