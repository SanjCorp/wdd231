document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#menu-btn");
  const menu = document.querySelector("#menu");
  button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});
