const accordionItems = document.querySelectorAll(".accordion-item");
const imageElement = document.querySelector(".image img");

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
      document
        .querySelector(".accordion-item.active")?.classList.remove("active");

      item.classList.add("active");
      const imagePath = item.dataset.image;
      imageElement.classList.add("fade-out");

      setTimeout(() => {
      imageElement.src = imagePath;
      imageElement.classList.remove("fade-out")
      }, 500); 
  });
});

const testimonialsContainer = document.querySelector(".testimonials-container");
const NextBtn = document.querySelector(".nav-arrow.next");
const prevBtn = document.querySelector(".nav-arrow.prev");
const testimonials = document.querySelectorAll(".testimonial-content");

let currentIndex = 0;
const totalTestimonials = testimonials.length;

const updateSlider = () => {
  testimonialsContainer.style.transform = `translateX(-${currentIndex * 100
  }%)`;
};

NextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalTestimonials;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials; 
  updateSlider();
});

