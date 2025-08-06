document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('discover-cards');
  const visitMessage = document.getElementById('visit-message');

  fetch('data/discover.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Error cargando JSON.");
      }
      return response.json();
    })
    .then(data => {
      data.places.forEach(place => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
          <h2>${place.name}</h2>
          <figure>
            <img src="${place.image}" alt="${place.name}">
          </figure>
          <address>${place.address}</address>
          <p>${place.description}</p>
          <button>Learn More</button>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => {
      container.innerHTML = `<p>Error al cargar el contenido.</p>`;
      console.error("Error cargando discover.json:", error);
    });

  // LocalStorage Visitor Message
  const lastVisit = localStorage.getItem('lastVisit');
  const currentVisit = Date.now();

  if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const daysPassed = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysPassed < 1) {
      visitMessage.textContent = "Back so soon! Awesome!";
    } else {
      visitMessage.textContent = `You last visited ${daysPassed} day${daysPassed === 1 ? '' : 's'} ago.`;
    }
  }

  localStorage.setItem('lastVisit', currentVisit);
});
