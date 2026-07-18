// Static Content (Organization Schema handled by HTML script tag)

// Carousel
const track = document.getElementById("carouselTrack");
const dotsContainer = document.getElementById("carouselDots");

if (track && dotsContainer) {
  const slides = track.children;
  let current = 0;
  let autoTimer;

  // Create dots
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("button");
    dot.className = "carousel-dot" + (i === 0 ? " active" : "");
    dot.onclick = () => goTo(i);
    dotsContainer.appendChild(dot);
  }

  function goTo(index) {
    current = index;
    if (current < 0) current = slides.length - 1;
    if (current >= slides.length) current = 0;
    track.style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll(".carousel-dot").forEach((d, i) => {
      d.className = "carousel-dot" + (i === current ? " active" : "");
    });
    resetAuto();
  }

  window.moveCarousel = function(dir) {
    goTo(current + dir);
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }
  resetAuto();
}

// Animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting)
        entry.target.style.animationPlayState = "running";
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".animate").forEach((el) => {
  el.style.animationPlayState = "paused";
  observer.observe(el);
});

// Service Worker Registration
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("Service Worker registrado!", reg))
      .catch((err) =>
        console.log("Falha ao registrar Service Worker", err),
      );
  });
}

// PWA Install Prompt Logic
let deferredPrompt;
const installBtn = document.getElementById("installApp");

if (installBtn) {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = "flex";
  });

  installBtn.addEventListener("click", (e) => {
    installBtn.style.display = "none";
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("Usuário aceitou a instalação");
      } else {
        console.log("Usuário recusou a instalação");
      }
      deferredPrompt = null;
    });
  });

  window.addEventListener("appinstalled", (evt) => {
    console.log("App instalado com sucesso!");
    installBtn.style.display = "none";
  });
}

// Contact Modal Logic
const contactModal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openContactModal");
const closeModalBtn = document.getElementById("closeContactModal");

if (contactModal && openModalBtn && closeModalBtn) {
  function openContactModal() {
    contactModal.classList.add("active");
    openModalBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    closeModalBtn.focus();
  }

  function closeContactModal() {
    contactModal.classList.remove("active");
    openModalBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "auto";
    openModalBtn.focus();
  }

  openModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openContactModal();
  });

  closeModalBtn.addEventListener("click", () => {
    closeContactModal();
  });

  window.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      closeContactModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && contactModal.classList.contains("active")) {
      closeContactModal();
    }
  });
}

// Cookie Consent Logic
const cookieBanner = document.getElementById("cookieBanner");
const cookieRevisit = document.getElementById("cookieRevisit");
const acceptCookies = document.getElementById("acceptCookies");
const rejectCookies = document.getElementById("rejectCookies");

if (cookieBanner && cookieRevisit && acceptCookies && rejectCookies) {
  function setCookieConsent(status) {
    localStorage.setItem("cookieConsent", status);
    cookieBanner.classList.remove("active");
    cookieRevisit.classList.add("active");
  }

  window.addEventListener("load", () => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setTimeout(() => {
        cookieBanner.classList.add("active");
      }, 2000);
    } else {
      cookieRevisit.classList.add("active");
    }
  });

  acceptCookies.addEventListener("click", () => setCookieConsent("accepted"));
  rejectCookies.addEventListener("click", () => setCookieConsent("rejected"));
  
  cookieRevisit.addEventListener("click", () => {
    cookieBanner.classList.add("active");
  });
}

// Mobile Menu Toggle
const mobileToggle = document.querySelector(".mobile-toggle");
const nav = document.querySelector("nav");

if (mobileToggle && nav) {
  function closeMobileMenu() {
    nav.classList.remove("active");
    mobileToggle.classList.remove("active");
    mobileToggle.setAttribute("aria-expanded", "false");
    mobileToggle.setAttribute("aria-label", "Abrir menu");
  }

  mobileToggle.addEventListener("click", () => {
    const willOpen = !nav.classList.contains("active");
    nav.classList.toggle("active", willOpen);
    mobileToggle.classList.toggle("active", willOpen);
    mobileToggle.setAttribute("aria-expanded", String(willOpen));
    mobileToggle.setAttribute("aria-label", willOpen ? "Fechar menu" : "Abrir menu");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("active")) {
      closeMobileMenu();
      mobileToggle.focus();
    }
  });

  // Mobile Dropdown is now always open via CSS, no JS toggle needed.
}

// Number Counters
const counters = document.querySelectorAll('.counter');
if (counters.length > 0) {
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = target / 40; 

        const updateCount = () => {
          count += increment;
          if (count < target) {
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
}

// Theme Toggle Logic
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }
  themeToggle.setAttribute(
    "aria-pressed",
    String(document.documentElement.getAttribute("data-theme") === "dark"),
  );

  themeToggle.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      themeToggle.setAttribute("aria-pressed", "false");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeToggle.setAttribute("aria-pressed", "true");
    }
  });
}
