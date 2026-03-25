document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");

  if (slides.length === 0) return;

  let index = 0;

  function showSlide() {
    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    slides[index].style.display = "block";

    index++;
    if (index >= slides.length) {
      index = 0;
    }
  }

  showSlide();
  setInterval(showSlide, 3000);
});
