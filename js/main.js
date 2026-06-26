


const bouton = document.getElementById("theme-toggle");

bouton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

function setTheme(theme) {
  document.body.className = theme; // applique le thème au body
  localStorage.setItem('theme', theme); // sauvegarde dans localStorage
};

document.addEventListener("DOMContentLoaded", function() {
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }k
  });

  backToTop.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

//compteur qui s'annime aux scroll
// Fonction d'animation
  function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100; // vitesse (200 étapes)

    const update = () => {
      current += increment;
      if (current < target) {
        element.textContent = "+" + Math.floor(current).toLocaleString();
        requestAnimationFrame(update);
      } else {
        element.textContent = "+" + target.toLocaleString();
      }
    };
    update();
  }

  // Récupérer les h3 existants
  const counters = document.querySelectorAll(".stat h3");

  // Extraire les nombres depuis le texte (+2500 → 2500)
  counters.forEach(counter => {
    const text = counter.textContent.replace(/\D/g, ""); // garde que les chiffres
    counter.dataset.target = text; // stocke la valeur cible
    counter.textContent = "0"; // démarre à 0
  });

 
  // Observer au scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.target;
        animateCounter(el, target);
        observer.unobserve(el); // éviter de relancer
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
