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
