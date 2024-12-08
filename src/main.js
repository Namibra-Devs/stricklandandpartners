document.addEventListener("DOMContentLoaded", () => {


  const menu = document.querySelector(".menu");
  const toggleBtn = document.querySelector(".toggle-btn");
  const toggleDropdown = document.getElementById("toggleDropdown");
  const close = document.querySelector(".close");
  const open = document.querySelector(".open");

  // Toggle menu visibility when the bars icon is clicked
  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    toggleBtn.classList.toggle("bg-red-700");
    menu.classList.toggle("bg-slate-100");

    // Change the hamburger button to X when open
    if (menu.classList.contains("hidden")) {
      open.classList.remove("hidden");
      close.classList.add("hidden");
    } else {
      open.classList.add("hidden");
      close.classList.remove("hidden");
    }
  });

  // Handle the toggle dropdown functionality
  toggleDropdown.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent click events from bubbling up
  });

  // Get all nav links
  const navLinks = menu.querySelectorAll(".nav-link");

  // Set the active class on the correct nav link based on the current path
  const currentPath = window.location.pathname;
  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");

    // Compare the link href with the current path
    if (linkPath === currentPath || (linkPath === "/" && currentPath === "/")) {
      link.classList.add("active"); // Add active class
    } else {
      link.classList.remove("active"); // Remove active class
    }
  });

  // Close the menu when a menu item is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
  
  // Handle the toggle dropdown functionality
  toggleDropdown.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent click events from bubbling up
  });
  

// Nav scroll bg
const navbar = document.getElementById('navbar');
const consultation = document.getElementById('consultation');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) { // Adjust scroll threshold
    navbar.classList.add('shadow-md',); // Add Tailwind classes
    navbar.classList.remove('shadow-none',);

  } else {
    navbar.classList.add('shadow-none',); // Add transparent classes
    navbar.classList.remove('shadow-md',); // Remove solid background classes   

  }
});


// Animate changing word hero section
const words = ["Blockchain", "Crypto", "DeFi"];
let wordIndex = 0;
let intervalId;

function animateHero() {
  const heroText = document.getElementById("hero-text");
  if (!heroText) return; // Exit if #hero-text is not found

  console.log(`Changing word to: ${words[wordIndex]}`);
  heroText.textContent = words[wordIndex];
  wordIndex = (wordIndex + 1) % words.length;
  intervalId = setTimeout(animateHero, 6000); // Change word every 6 seconds
}

// Check if the page is the index page
if (document.body.classList.contains("index-page")) {
  console.log("Index Hero page detected");
  animateHero();

  // Pause animation when the page is not visible
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      console.log("Page hidden, clearing timeout");
      clearTimeout(intervalId);
    } else {
      console.log("Page visible, restarting animation");
      animateHero();
    }
  });

  // Handle window focus and blur events
  window.addEventListener("focus", () => {
    console.log("Window focused, restarting animation");
    animateHero();
  });

  window.addEventListener("blur", () => {
    console.log("Window blurred, clearing timeout");
    clearTimeout(intervalId);
  });

  // Clear timeout when the page unloads
  window.addEventListener("unload", () => {
    console.log("Page unloading, clearing timeout");
    clearTimeout(intervalId);
  });
} else {
  console.log("Not the index page; animation skipped");
}


  // Sponsors animation
const scrollers = document.querySelectorAll(".scroller");

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller_inner");
    const scrollerContent = Array.from(scrollerInner.children);
    console.log(scrollerContent);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
  
}


    // Toggle for accordion
  const accordions = document.querySelectorAll(".accordion");

  // Toggle accordion content when clicking on a toggle element
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      const toggler = accordion.querySelector(".toggle-accordion");
      const line = accordion.querySelector(".line");

      toggler.classList.toggle("hidden");
      line.classList.toggle("hidden");
    });

  });

    const counters = document.querySelectorAll("[data-count]");
  
    function animateCount(counter) {
      const target = parseInt(counter.getAttribute("data-count"), 10);
      const duration = 2000; // Total animation duration in milliseconds
      const stepTime = 30; // Update interval in milliseconds
      let current = 0;
      const increment = Math.ceil(target / (duration / stepTime));
  
      function updateCounter() {
        current += increment;
        if (current >= target) {
          current = target; // Ensure it stops at the target
          counter.textContent = `${current}+`;
          return;
        }
        counter.textContent = `${current}+`;
        setTimeout(updateCounter, stepTime);
      }
  
      updateCounter();
    }
  
    // Observer to trigger animation when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach((counter) => {
              animateCount(counter);
            });
            observer.disconnect(); // Stop observing once animation is triggered
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );
  
    const section = document.querySelector(".bg-dark");
    if (section) {
      observer.observe(section);
    }
  

// Google Maps
async function init() {
  await customElements.whenDefined('gmp-map');

  const map = document.querySelector('gmp-map');
  const marker = document.querySelector('gmp-advanced-marker');
  const placePicker = document.querySelector('gmpx-place-picker');
  const infowindow = new google.maps.InfoWindow();

  map.innerMap.setOptions({
    mapTypeControl: false
  });

  placePicker.addEventListener('gmpx-placechange', () => {
    const place = placePicker.value;

    if (!place.location) {
      window.alert(
        "No details available for input: '" + place.name + "'"
      );
      infowindow.close();
      marker.position = null;
      return;
    }

    if (place.viewport) {
      map.innerMap.fitBounds(place.viewport);
    } else {
      map.center = place.location;
      map.zoom = 17;
    }

    marker.position = place.location;
    infowindow.setContent(
      `<strong>${place.displayName}</strong><br>
       <span>${place.formattedAddress}</span>
    `);
    infowindow.open(map.innerMap, marker);
  });
}

document.addEventListener('DOMContentLoaded', init);


// Current year for footer
const currentYear = new Date().getFullYear();
document.querySelector(".year").textContent = currentYear;


});