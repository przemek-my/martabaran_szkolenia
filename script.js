// =============================
// HERO FADE-IN
// =============================
window.addEventListener("DOMContentLoaded", () => {
    const hero = document.getElementById("heroSection");
    setTimeout(() => {
      hero.classList.add("visible");
    }, 200); // delikatne opóźnienie jak slowTransition
  });
  
  // =============================
  // START NA GÓRZE STRONY
  // =============================
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  
  window.addEventListener("load", () => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  });
  
  // =============================
  // SCROLL INDICATOR (STABILNE NA MOBILE/DESKTOP)
  // =============================
  const scrollIndicator = document.getElementById("scrollIndicator");
  
  // Pokaż po małym delay po load
  window.addEventListener("load", () => {
    setTimeout(() => {
      scrollIndicator.classList.add("visible");
    }, 400);
  });
  
  // Ukryj przy pierwszym faktycznym scrollu lub dotyku
  function hideScrollIndicator() {
    scrollIndicator.classList.add("hidden");
    window.removeEventListener("scroll", hideScrollIndicator);
    window.removeEventListener("touchstart", hideScrollIndicator);
  }
  
  window.addEventListener("scroll", hideScrollIndicator);
  window.addEventListener("touchstart", hideScrollIndicator);
  
  // =============================
  // ANIMOWANA LINIA PROGRAMU
  // =============================
  const section = document.getElementById('programSection');
  const animatedLine = document.getElementById('animatedLine');
  
  window.addEventListener('scroll', () => {
    if (!section || !animatedLine) return;
  
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    const start = windowHeight - rect.top;
    const end = rect.height + windowHeight;
  
    let progress = start / end;
    progress = Math.max(0, Math.min(1, progress));
  
    // scale 0.1 → 5
    const scale = 0.1 + (4.9 * progress);
    animatedLine.style.transform = `scaleX(${scale})`;
  });
  
  // =============================
  // KARTY — FADE IN ON SCROLL
  // =============================
  const revealElements = document.querySelectorAll(
    '.module-card'
  );
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  
  revealElements.forEach(el => observer.observe(el));
  
  
  window.addEventListener("load", () => {

  // HERO pokazuje się po zakończeniu intro
  setTimeout(() => {
    document.querySelector(".hero-section").classList.add("hero-visible");
  }, 2500);

});

let scrollY = 0;

function lockScroll() {
  scrollY = window.scrollY;
  document.body.style.top = `-${scrollY}px`;
  document.body.classList.add("no-scroll");
}

function unlockScroll() {
  document.body.classList.remove("no-scroll");
  document.body.style.top = "";
  window.scrollTo(0, scrollY);
}

// 1️⃣ Zablokuj scroll od razu
lockScroll();

// 2️⃣ Po zakończeniu intro → odblokuj scroll
window.addEventListener("load", () => {

  // delay dopasowany do Twojej animacji intro (~3 sekundy)
  setTimeout(() => {
    // usuń overlay
    const intro = document.querySelector('.intro-overlay');
    if (intro) intro.style.display = 'none';

    // odblokuj scroll
    unlockScroll();
    
    // uruchom animacje hero
    document.querySelector(".hero-section")?.classList.add("reveal-visible");

  }, 3000); // czas w ms → dopasuj do długości animacji intro
});
