const CTA_LINKS = {
  primary: "https://docs.google.com/forms/d/e/1FAIpQLSeF6iDq8pUbsbjHx9hHU5rHtEu4IAuaCSqkZSKJsNvo9KnTTw/viewform"
};

document.addEventListener("DOMContentLoaded", () => {
  applyCtaLinks();
  setupSmoothScroll();
  setupFaq();
  setupMobileNav();
  setupReplacementImages();
});

function applyCtaLinks() {
  document.querySelectorAll("[data-cta]").forEach((link) => {
    link.setAttribute("href", CTA_LINKS.primary);
  });
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();
      closeMobileNav();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

function setupFaq() {
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");

      if (!item) {
        return;
      }

      const isOpen = item.classList.toggle("is-open");
      const icon = button.querySelector(".faq-icon");

      button.setAttribute("aria-expanded", String(isOpen));

      if (icon) {
        icon.textContent = isOpen ? "-" : "+";
      }
    });
  });
}

function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });
}

function closeMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!toggle || !nav) {
    return;
  }

  nav.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "メニューを開く");
}

function setupReplacementImages() {
  document.querySelectorAll(".replaceable-image-slot img").forEach((image) => {
    const showImage = () => {
      if (image.naturalWidth > 1) {
        image.closest(".sample-case")?.classList.add("has-replacement-image");
      }
    };

    if (image.complete) {
      showImage();
      return;
    }

    image.addEventListener("load", showImage, { once: true });
  });
}
