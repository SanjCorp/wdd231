document.addEventListener("DOMContentLoaded", () => {
  // Timestamp
  document.getElementById("timestamp").value = new Date().toISOString();

  // Modals
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const modal = document.querySelector(link.getAttribute("href"));
      if (modal) modal.showModal();
    });
  });
});
