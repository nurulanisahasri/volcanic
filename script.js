document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".icon-slider");
  const icons = document.querySelectorAll(".icon");
  const totalIcons = icons.length;
  let currentIndex = 0;
  const slideInterval = 3000; // Time in milliseconds

  function slideIcons() {
    currentIndex++;
    if (currentIndex >= totalIcons) {
      currentIndex = 0; // Loop back to the first icon
    }
    const offset = -currentIndex * (100 / totalIcons); // Calculate the offset for sliding
    slider.style.transform = `translateX(${offset}%)`;
  }

  // Set the interval for auto-sliding
  setInterval(slideIcons, slideInterval);

  // Optional: Add click events for the buttons
  document.querySelector(".prev-btn").addEventListener("click", function () {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : totalIcons - 1;
    slideIcons();
  });

  document.querySelector(".next-btn").addEventListener("click", function () {
    slideIcons();
  });
});

// Mobile navigation toggle functionality
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector("#nav-menu");

hamburgerMenu.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  // Toggle the active class to transform the hamburger icon
  hamburgerMenu.classList.toggle("active");
});

//Popup for Login/Register
document.addEventListener("DOMContentLoaded", function () {
  const popupContainer = document.getElementById("popup-container");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  document.querySelector(".btn-login").addEventListener("click", function (e) {
    e.preventDefault();
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    popupContainer.style.display = "flex";
  });

  document
    .querySelector(".btn-register")
    .addEventListener("click", function (e) {
      e.preventDefault();
      registerForm.classList.remove("hidden");
      loginForm.classList.add("hidden");
      popupContainer.style.display = "flex";
    });

  document.querySelector(".close-popup").addEventListener("click", function () {
    popupContainer.style.display = "none";
  });

  // Close popup when clicking outside of it
  popupContainer.addEventListener("click", function (e) {
    if (e.target === popupContainer) {
      popupContainer.style.display = "none";
    }
  });
});
