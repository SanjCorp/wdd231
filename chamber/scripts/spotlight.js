const spotlightContainer = document.getElementById("spotlight-container");

fetch("data/members.json")
  .then(response => response.json())
  .then(data => {
    const goldSilver = data.members.filter(m => m.level === 2 || m.level === 3);
    const shuffled = goldSilver.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3); // Muestra hasta 3

    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("member-card");

      card.innerHTML = `
        <img src="images/${member.images}" alt="${member.name} logo" loading="lazy">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><strong>Level:</strong> ${member.level === 3 ? "Gold" : "Silver"}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;

      spotlightContainer.appendChild(card);
    });
  });
