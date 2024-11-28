const menu = document.querySelector(".menu");
const toggleBtn = document.querySelector(".toggle-btn");

const toggleDropdown = document.getElementById("toggleDropdown");
const dropdownMenu = document.getElementById("dropdownMenu");
const arrowGet = document.getElementById("get-arrow");

// Toggle menu visibility when the bars icon is clicked
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  toggleBtn.classList.toggle("bg-red-500");
  console.log(toggleDropdown)
  // toggleBtn.classList.toggle('bg-secondary')

  // Close menu when a menu item is clicked
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
});

toggleDropdown.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent click events from bubbling up
});