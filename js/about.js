// Function to create employee cards
function createEmployeeCards() {
  const employeeGrid = document.getElementById("employee-grid");
  if (!employeeGrid) return;

  // Get employees data from the global variable populated by employees.js
  const employees = window.employees || [];

  if (!employees.length) {
    console.error(
      "No employee data found. Make sure employees.js is loaded before about.js"
    );
    return;
  }

  employees.forEach((employee) => {
    // Create card elements
    const card = document.createElement("div");
    card.className = "employee-card";

    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header";

    const employeeInfo = document.createElement("div");
    employeeInfo.className = "employee-info";

    // Create avatar
    const avatar = document.createElement("div");
    avatar.className = "avatar";

    if (employee.image && employee.image !== "") {
      const img = document.createElement("img");
      img.src = employee.image;
      img.alt = employee.name;
      avatar.appendChild(img);
    } else {
      // Create initials if no image
      avatar.textContent = employee.name
        .split(" ")
        .map((n) => n[0])
        .join("");
    }

    // Create employee details
    const details = document.createElement("div");
    details.className = "employee-details";

    const name = document.createElement("h2");
    name.textContent = employee.name;

    const role = document.createElement("p");
    role.textContent = employee.role;

    details.appendChild(name);
    details.appendChild(role);

    // Assemble the header
    employeeInfo.appendChild(avatar);
    employeeInfo.appendChild(details);
    cardHeader.appendChild(employeeInfo);

    // Create content section
    const cardContent = document.createElement("div");
    cardContent.className = "card-content";

    const description = document.createElement("p");
    description.textContent = employee.description;
    cardContent.appendChild(description);

    // Assemble the card
    card.appendChild(cardHeader);
    card.appendChild(cardContent);

    // Add to grid
    employeeGrid.appendChild(card);
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  createEmployeeCards();
});
