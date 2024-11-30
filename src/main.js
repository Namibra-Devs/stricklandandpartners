const menu = document.querySelector(".menu");
const toggleBtn = document.querySelector(".toggle-btn");

const toggleDropdown = document.getElementById("toggleDropdown");
const dropdownMenu = document.getElementById("dropdownMenu");
const arrowGet = document.getElementById("get-arrow");
const close = document.querySelector(".close");
const open = document.querySelector(".open");


// Toggle menu visibility when the bars icon is clicked
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  toggleBtn.classList.toggle("bg-red-500");
 
  menu.classList.toggle("bg-slate-100");

  // Change the hamburger button to x when open
  if (menu.classList.contains("hidden")) {
    open.classList.remove("hidden");
    close.classList.add("hidden");
  } else {
    open.classList.add("hidden");
    close.classList.remove("hidden");
  }

  // Get all the nav links
  const navLinks = menu.querySelectorAll(".nav-link");

  // Close menu when a menu item is clicked and set the active link
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Add hidden class to close the menu
      menu.classList.add("hidden");

      // Remove the active class from all links
      navLinks.forEach((link) => link.classList.remove("border-b-2", "border-primary"));

      // Add the active class to the clicked link
      event.target.classList.add("border-b-2", "border-primary");
        });
  });
});


toggleDropdown.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent click events from bubbling up
});


// Nav scroll bg
const navbar = document.getElementById('navbar');
const consultation = document.getElementById('consultation');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) { // Adjust scroll threshold
    navbar.classList.add('bg-slate-100', 'shadow-md',); // Add Tailwind classes
    navbar.classList.remove('bg-transparent', 'shadow-none',);

  } else {
    navbar.classList.add('bg-transparent', 'shadow-none',); // Add transparent classes
    navbar.classList.remove('bg-slate-100', 'shadow-md',); // Remove solid background classes
    

  }
});


// Animate changing word hero section
const words = ["Blockchain", "Crypto", "DeFi"];
let wordIndex = 0;
let intervalId;
function animateHero() {
  const heroText = document.getElementById("hero-text");
  heroText.textContent = words[wordIndex];
  wordIndex = (wordIndex + 1) % words.length;
  intervalId = setTimeout(animateHero, 6000); // Change word every 3 seconds
  }
  animateHero();
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      clearTimeout(intervalId);
    } else {
      animateHero();
    }
  });
  // window.addEventListener("focus", () => {
  //   animateHero();
  //   });
  //   window.addEventListener("blur", () => {
  //     clearTimeout(intervalId);
  //   });
  //   window.addEventListener("unload", () => {
  //     clearTimeout(intervalId);
  //     });