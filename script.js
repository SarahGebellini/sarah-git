const form = document.getElementById("meuFormulario");
const modal = document.getElementById("confirmModal");
const fecharModal = document.getElementById("fecharModal");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});

fecharModal.addEventListener("click", () => {
  modal.style.display = "none";
  form.reset();
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const themeToggleButton = document.getElementById("theme-toggle-button");

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
