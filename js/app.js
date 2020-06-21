const navbarIcon = document.getElementById("navbar-icon");
const navbarMenu = document.getElementById("navbar-menu");

navbarIcon.addEventListener("click", () => {
  navbarIcon.classList.toggle("show-menu");
  navbarMenu.classList.toggle("show-menu");
});

const menuClose = document.getElementById("menu-close");
menuClose.addEventListener("click", () => {
  navbarIcon.classList.toggle("show-menu");
  navbarMenu.classList.toggle("show-menu");
});
