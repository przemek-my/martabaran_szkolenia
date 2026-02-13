// SCROLL PROGRESS + animated line

const section = document.getElementById('programSection');
const animatedLine = document.getElementById('animatedLine');
const scrollIndicator = document.getElementById("scrollIndicator");


window.addEventListener("DOMContentLoaded", () => {
    const hero = document.getElementById("heroSection");
    setTimeout(() => {
      hero.classList.add("visible");
    }, 200); // delikatne opóźnienie jak slowTransition
  });


// Always start at top on refresh
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

window.addEventListener("load", () => {
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
});


// Hide scroll indicator after scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    scrollIndicator.style.opacity = "0";
    scrollIndicator.style.transition = "opacity 0.4s ease";
  } else {
    scrollIndicator.style.opacity = "1";
  }
});

  
window.addEventListener('scroll', () => {
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

// KARTY — fade in on scroll

const cards = document.querySelectorAll('.module-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
