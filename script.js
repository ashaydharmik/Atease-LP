document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const menuSection = document.querySelector(".menu");

    toggler.addEventListener("click", function () {
      menuSection.classList.toggle("menu-expanded");
    });
  });