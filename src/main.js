const menu = document.querySelector(".menu");
const toggleBtn = document.querySelector(".toggle-btn");

const toggleDropdown = document.getElementById("toggleDropdown");
const dropdownMenu = document.getElementById("dropdownMenu");
const arrowGet = document.getElementById("get-arrow");

// Toggle menu visibility when the bars icon is clicked
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  toggleBtn.classList.toggle("bg-red-500");
  menu.classList.toggle("bg-dark");
  menu.classList.toggle("text-slate-200");

  // Remove menu bg if in large screens
  if (window.matchMedia("(min-width: 1024px)").matches) {
    menu.classList.remove("bg-dark");
    menu.classList.remove("text-slate-200");
  }
  console.log(toggleDropdown)
  // toggleBtn.classList.toggle('bg-secondary')

  // Close menu when a menu item is clicked
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      menu.classList.remove("bg-dark");
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
    navbar.classList.add('bg-dark', 'shadow-md', 'text-slate-200'); // Add Tailwind classes
    navbar.classList.remove('text-primary'); // Remove solid background classes
    navbar.classList.remove('bg-transparent', 'shadow-none', 'text-slate-900');
    consultation.classList.add('border-slate-100', 'hover:border-primary');

  } else {
    navbar.classList.add('bg-transparent', 'shadow-none', 'text-slate-900'); // Add transparent classes
    navbar.classList.remove('bg-dark', 'shadow-md', 'text-slate-200'); // Remove solid background classes
    navbar.classList.add('text-primary'); // Remove solid background classes
    consultation.classList.remove('border-slate-100', 'hover:border-primary');

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