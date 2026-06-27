


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


  //formulaire de contact 

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  // Création du conteneur pour le message de succès
  const successMsg = document.createElement("p");
  successMsg.classList.add("text-success", "fw-bold", "mt-3");
  successMsg.style.display = "none";
  successMsg.textContent = "✅ Le message a été envoyé avec succès !";

  // On insère le message juste après le bouton
  const submitBtn = form.querySelector("button");
  submitBtn.insertAdjacentElement("afterend", successMsg);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    // Nom
    const nom = form.querySelector("input[type=text]");
    if (nom.value.trim() === "") {
      showError(nom, "Le nom est requis");
      valid = false;
    } else {
      clearError(nom);
    }

    // Email
    const email = form.querySelector("input[type=email]");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email.value)) {
      showError(email, "Email invalide");
      valid = false;
    } else {
      clearError(email);
    }

    // Message
    const message = form.querySelector("textarea");
    if (message.value.trim().length < 20) {
      showError(message, "Le message doit contenir au moins 20 caractères");
      valid = false;
    } else {
      clearError(message);
    }

    // Si tout est bon
    if (valid) {
      successMsg.style.display = "block"; // affiche sous le bouton
      form.reset();
    }
  });

  function showError(element, message) {
    let error = element.nextElementSibling;
    if (!error || !error.classList.contains("error")) {
      error = document.createElement("small");
      error.classList.add("error", "text-danger");
      element.insertAdjacentElement("afterend", error);
    }
    error.textContent = message;
  }

  function clearError(element) {
    let error = element.nextElementSibling;
    if (error && error.classList.contains("error")) {
      error.textContent = "";
    }
  }
});



  