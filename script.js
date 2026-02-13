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
  const cards = document.querySelectorAll('.module-card');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  
  cards.forEach(card => observer.observe(card));
  