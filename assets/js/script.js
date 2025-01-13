// Initialize Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 30000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//