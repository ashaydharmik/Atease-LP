document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const menuSection = document.querySelector(".menu");

    toggler.addEventListener("click", function () {
      menuSection.classList.toggle("menu-expanded");
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".mobile-image");
    const dotsContainer = document.querySelector(".dots");
  
    // Create dots dynamically based on the number of images
    slides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => showSlide(index));
      dotsContainer.appendChild(dot);
    });
  
    const dots = document.querySelectorAll(".dot");
    const totalSlides = slides.length;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Function to show a specific slide
    function showSlide(index) {
      slides.forEach((slide) => slide.classList.remove("active"));
      dots.forEach((dot) => dot.classList.remove("active"));
  
      slides[index].classList.add("active");
      dots[index].classList.add("active");
    }
  
    // Add touch functionality
    let startX = 0;
    let endX = 0;
  
    document.querySelector(".image-container").addEventListener("touchstart", function (event) {
      startX = event.touches[0].clientX;
    });
  
    document.querySelector(".image-container").addEventListener("touchend", function (event) {
      endX = event.changedTouches[0].clientX;
      handleGesture();
    });
  
    function handleGesture() {
      if (endX < startX) {
        // Swipe left
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
      } else if (endX > startX) {
        // Swipe right
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
      }
    }
  });
  
  

