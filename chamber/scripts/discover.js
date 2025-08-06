document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementById("discover-cards");

  // Mensaje de visita anterior
  const sidebar = document.querySelector(".sidebar");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
    sidebar.textContent = "¡Bienvenido! Déjanos saber si tienes alguna pregunta.";
  } else {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (days === 0) {
      sidebar.textContent = "¡Has vuelto pronto! ¡Genial!";
    } else {
      sidebar.textContent = `Tu última visita fue hace ${days} día${days === 1 ? "" : "s"}.`;
    }
  }

  localStorage.setItem("lastVisit", now);

  // Cargar discover.json
  fetch("data/discover.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const card = document.createElement("section");
        card.classList.add("discover-card");

        const title = document.createElement("h2");
        title.textContent = item.name;

        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;
        img.loading = "lazy"; // ✅ lazy loading
        figure.appendChild(img);

        const address = document.createElement("address");
        address.textContent = item.address;

        const description = document.createElement("p");
        description.textContent = item.description;

        const button = document.createElement("button");
        button.textContent = "Más información";

        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

        cardsContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error cargando discover.json:", error);
      cardsContainer.textContent = "Error al cargar el contenido.";
    });
});
