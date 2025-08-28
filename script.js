// 🚀 JAVASCRIPT FEATURES YOU CAN IMPLEMENT:

// 1. LOADING SCREEN
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("hidden");

  setTimeout(() => {
    loader.classList.add("remove"); // display:none after fade
  }, 1000); // match CSS transition time
});

// 2. NAVIGATION
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.getElementById("nav-links");
  const navToggle = document.getElementById("nav-toggle");
  const navbar = document.getElementById("navbar");
  const links = document.querySelectorAll(".nav-links a");

  // 2A. Mobile menu toggle
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navToggle.classList.toggle("open"); // for animation (optional)
  });

  // Close menu after clicking a link (on mobile)
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      navToggle.classList.remove("open");
    });
  });

  // 2B. Smooth scrolling
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // 2C. Active link highlighting on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY + 200; // offset for navbar height

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document
          .querySelector(".nav-links a.active")
          ?.classList.remove("active");

        document
          .querySelector(`.nav-links a[href="#${sectionId}"]`)
          ?.classList.add("active");
      }
    });

    // 2D. Navbar background change on scroll (already done, but adding here)
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});





// 3. THEME TOGGLE
// - Dark/Light mode switcher
// - Save theme preference in localStorage
// - Smooth color transitions

// 4. SCROLL EFFECTS
// - Update scroll progress bar
// - Parallax scrolling effects
// - Fade in animations on scroll (Intersection Observer)
// - Show/hide back-to-top button

// 5. TYPING ANIMATION
// - Typewriter effect for hero title
// - Multiple text rotation

// 6. STATISTICS COUNTER
// - Animate numbers when they come into view
// - CountUp.js style animation

// 7. INTERACTIVE ELEMENTS
// - Skill items hover effects with JavaScript
// - Project card interactions
// - Mouse follower/cursor effects

// 8. FORM HANDLING (when you add contact form)
// - Form validation
// - Submit handling with fetch API
// - Success/error messages

// 9. PARTICLE SYSTEM
// - Animated background particles
// - Mouse interaction with particles

// 10. PERFORMANCE
// - Lazy loading for images
// - Debounced scroll events
// - Optimized animations

// 11. ADVANCED FEATURES
// - Drag and drop interactions
// - Canvas animations
// - WebGL effects
// - Sound effects on interactions

// Start with the loading screen and navigation!
// Each feature is a great JavaScript practice opportunity.

// EXAMPLE STARTER CODE:
/*
      document.addEventListener('DOMContentLoaded', function() {
          // Your JavaScript starts here!
          console.log('Portfolio loaded - ready for JavaScript magic! ✨');
      });
      */
