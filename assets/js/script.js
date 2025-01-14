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

// Initialize variables for scroll animation
let lastScrollY = window.scrollY;
let ticking = false;
const maxScale = 1;
const minScale = 0.5;
const scrollThreshold = 300; // Adjust this value to control sensitivity

// Scroll Animation logic
document.addEventListener('scroll', () => {
  lastScrollY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const section = document.getElementById('resizeSection');
      const rect = section.getBoundingClientRect();
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Calculate scale based on scroll position
        const scrollProgress = Math.min(
          Math.max(0, (window.innerHeight - rect.top) / scrollThreshold),
          1
        );
        const scale = minScale + (maxScale - minScale) * scrollProgress;
        
        // Apply the scale transformation
        section.style.transform = `scaleX(${scale})`;
        section.style.opacity = 0.6 + (0.4 * scrollProgress);
      }
      
      ticking = false;
    });
    ticking = true;
  }
});