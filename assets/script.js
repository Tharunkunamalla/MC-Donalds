document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  document.querySelector("footer").classList.toggle("dark-mode");
});

const burgerMenu = document.getElementById("burger-menu");
const navLinks = document.querySelector(".nav-links");
const heroLinks = document.querySelector(".hero-links");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  heroLinks.classList.toggle("active");
});
