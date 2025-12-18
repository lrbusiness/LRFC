// Loader
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// Dark / Light mode
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => document.body.classList.toggle("light");

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

// Modal
function openModal(title) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalTitle").innerText = title;
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
