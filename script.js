const initApp = () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenuCloseBtn = document.getElementById("mobile-menu-close-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenuBtn.classList.toggle("is_open");
    mobileMenuCloseBtn.classList.toggle("is_open");
    mobileMenu.classList.toggle("is_open");
  };

  mobileMenuBtn.addEventListener("click", toggleMenu);
  mobileMenuCloseBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
