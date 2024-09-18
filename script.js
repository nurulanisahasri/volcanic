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
