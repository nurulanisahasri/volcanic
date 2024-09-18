window.onscroll = function () {
  shrinkHeaderOnScroll();
};

function shrinkHeaderOnScroll() {
  var header = document.getElementById("volcanic-header"); // Ensure this is targeting the right element
  if (window.pageYOffset > 50) {
    // Changed to window.pageYOffset for better compatibility
    header.classList.add("smaller-header");
  } else {
    header.classList.remove("smaller-header");
  }
}

//for responsive on mobile and tab
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

//responsice button
document
  .querySelector(".prev-btn")
  .addEventListener("click", () => slideIcons(-1));
document
  .querySelector(".next-btn")
  .addEventListener("click", () => slideIcons(1));

let currentSlide = 0;
const maxSlide = document.querySelectorAll(".icon").length - 5; // Total icons minus visible icons

function slideIcons(direction) {
  if (direction === -1 && currentSlide > 0) {
    currentSlide--;
  } else if (direction === 1 && currentSlide < maxSlide) {
    currentSlide++;
  }
  document.querySelector(".icon-slider").style.transform = `translateX(-${
    currentSlide * 20
  }%)`;
}
