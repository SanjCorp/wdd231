document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#copyright").innerHTML =
    `© ${new Date().getFullYear()} Ricardo Sanjines - Bolivia`;
  document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;
});
