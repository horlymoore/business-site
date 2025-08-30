// Responsive Navbar Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Simple Form Submission Alert
const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks! Your message has been sent.");
  form.reset();
});
