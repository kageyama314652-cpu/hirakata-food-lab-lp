// メインCTAのリンク先です。本番のGoogleフォームURLを設定済みです。
// primary: 「無料で集客導線を相談する」ボタンのリンク先です。
//          GoogleフォームやLINE公式に変える場合は、このURLだけ差し替えます。
// secondary: data-cta-secondary を使う場合の予備設定です。
//            現在の「初回診断の内容を見る」は index.html で #plans に直接リンクしています。
const CTA_LINKS = {
  primary: "https://docs.google.com/forms/d/e/1FAIpQLSeF6iDq8pUbsbjHx9hHU5rHtEu4IAuaCSqkZSKJsNvo9KnTTw/viewform",
  secondary: "#plans"
};

document.addEventListener("DOMContentLoaded", () => {
  applyCtaLinks();
  setupSmoothScroll();
  setupFaq();
  setupMobileNav();
});

function applyCtaLinks() {
  document.querySelectorAll("[data-cta]").forEach((link) => {
    link.setAttribute("href", CTA_LINKS.primary);
    link.removeAttribute("target");
    link.removeAttribute("rel");

    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = CTA_LINKS.primary;
    });
  });

  document.querySelectorAll("[data-cta-secondary]").forEach((link) => {
    link.setAttribute("href", CTA_LINKS.secondary);
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
