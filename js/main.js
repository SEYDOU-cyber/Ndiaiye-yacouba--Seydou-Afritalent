


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

