document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.slide-bg');

  let current = 0;

  function changeSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  setInterval(changeSlide, 3000);
});

