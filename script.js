document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const menuSection = document.querySelector(".menu");

    toggler.addEventListener("click", function () {
      menuSection.classList.toggle("menu-expanded");
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".mobile-image");
    const dotsContainer = document.querySelector(".dots");
    let currentIndex = 0;
  
    // Create dots dynamically based on the number of images
    images.forEach((_, index) => {
      const dot = document.createElement("p");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active"); // Make the first dot active
      dot.addEventListener("click", () => showImage(index)); // Add click event to change the image
      dotsContainer.appendChild(dot);
    });
  
    const dots = document.querySelectorAll(".dots .dot");
  
    function showImage(index) {
      // Hide all images and remove 'active' class from dots
      images.forEach((img) => img.classList.remove("active"));
      dots.forEach((dot) => dot.classList.remove("active"));
  
      // Show the selected image and set the corresponding dot as active
      images[index].classList.add("active");
      dots[index].classList.add("active");
  
      currentIndex = index; // Update the current index
    }
  
    // Initialize the first image as visible
    showImage(currentIndex);
  });