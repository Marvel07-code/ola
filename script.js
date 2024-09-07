// Intersection Observer for scrolling animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      }
  });
}, {
  threshold: 0.2
});

// Observe service items
document.querySelectorAll('.service').forEach(service => {
  observer.observe(service);
});

// Observe team members
document.querySelectorAll('.team-member').forEach(member => {
  observer.observe(member);
});

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => slide.classList.remove('active'));
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].classList.add('active');
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}


// Mobile Menu Toggle
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navLinks.classList.toggle('active');
});

