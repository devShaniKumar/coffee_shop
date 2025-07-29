// Swiper initialization
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Info icon popup
document.querySelector('.nav-icon').addEventListener('click', () => {
  alert("Welcome to our Coffee Shop! ☕");
});
