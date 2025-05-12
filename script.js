const slides = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const totalSlides = 3;
const slideWidth = 600; 

function showSlide() {
  slides.style.transform = `translateX(${-slideWidth * index}px)`;
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide();
  resetAutoSlide();
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  showSlide();
  resetAutoSlide();
});

let autoSlide = setInterval(() => {
  index = (index + 1) % totalSlides;
  showSlide();
}, 4000);

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    index = (index + 1) % totalSlides;
    showSlide();
  }, 4000);
}
