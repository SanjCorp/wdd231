document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("timestamp").value = new Date().toISOString();

  document.querySelectorAll('.membership-cards a').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href")).showModal();
    });
  });
});
