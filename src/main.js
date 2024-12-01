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
  toggleBtn.classList.toggle("bg-red-700");
 
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
  window.addEventListener("focus", () => {
    animateHero();
    });
    window.addEventListener("blur", () => {
      clearTimeout(intervalId);
    });
    window.addEventListener("unload", () => {
      clearTimeout(intervalId);
      });



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

// const scrollers = document.querySelectorAll(".scroller");

// if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//   addAnimation();
// }

// function addAnimation() {
//   scrollers.forEach((scroller) => {
//     const scrollerInner = scroller.querySelector(".scroller_inner");

//     // Duplicate the content of the scroller to ensure seamless scrolling
//     const scrollerContent = Array.from(scrollerInner.children);
//     scrollerContent.forEach((item) => {
//       const duplicatedItem = item.cloneNode(true);
//       duplicatedItem.setAttribute("aria-hidden", true);
//       scrollerInner.appendChild(duplicatedItem);
//     });

//     // Adjust animation duration based on content width
//     const totalWidth = Array.from(scrollerInner.children).reduce(
//       (acc, item) => acc + item.offsetWidth + parseInt(getComputedStyle(item).marginRight || 0),
//       0
//     );

//     // Dynamically set animation duration based on the total width
//     const duration = totalWidth / 100; // Adjust speed factor here
//     scrollerInner.style.animationDuration = `${duration}s`;
//   });
// }



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