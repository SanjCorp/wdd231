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
  let totalCredits = 0;

  filtered.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";
    if (course.completed) card.classList.add("completed");
    card.innerHTML = `<strong>${course.code}</strong><br>${course.name}<br>Credits: ${course.credits}`;
    container.appendChild(card);
    totalCredits += course.credits;
  });

  document.getElementById("totalCredits").textContent = "Total Credits: " + totalCredits;
}

function filterCourses(type) {
  let filtered = [];
  if (type === "all") filtered = courses;
  else filtered = courses.filter(c => c.code.startsWith(type));
  displayCourses(filtered);
}

document.addEventListener("DOMContentLoaded", () => displayCourses());