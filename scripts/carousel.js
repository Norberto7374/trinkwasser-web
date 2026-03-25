document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide() {
    slides.forEach((s, i) => {
      s.style.display = i === index ? "block" : "none";
    });
    index = (index + 1) % slides.length;
  }

  showSlide();
  setInterval(showSlide, 4000);
});
