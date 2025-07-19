const courses = [
  { code: "WDD130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD131", name: "Dynamic Web Fundamentals", credits: 3, completed: true },
  { code: "CSE110", name: "Programming Basics", credits: 2, completed: true },
  { code: "CSE111", name: "Programming with Functions", credits: 2, completed: true },
  { code: "CSE210", name: "Programming with Classes", credits: 2, completed: false }
];

function displayCourses(filtered = courses) {
  const container = document.getElementById("courses");
  container.innerHTML = "";

  filtered.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";
    if (course.completed) card.classList.add("completed");
    card.innerHTML = `<h3>${course.code}</h3><p>${course.name}</p><p>Credits: ${course.credits}</p>`;
    container.appendChild(card);
  });

  const totalCredits = filtered.reduce((sum, course) => sum + course.credits, 0);
  document.getElementById("totalCredits").textContent =
    "The total credits for courses listed above is: " + totalCredits;
}

function filterCourses(type) {
  const filtered =
    type === "all" ? courses : courses.filter(course => course.code.startsWith(type));
  displayCourses(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  displayCourses();

  document.querySelectorAll(".filter-buttons button").forEach(button => {
    button.addEventListener("click", () => {
      const type = button.getAttribute("data-type");
      filterCourses(type);
    });
  });
});
