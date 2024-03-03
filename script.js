const btnOpen = document.querySelector(".navigation_btn");
const menu = document.querySelector(".navigation__nav");
const headerMain = document.querySelector(".header_main");

const openMenu = function () {
  menu.classList.toggle("hidden");
  headerMain.classList.toggle("hidden");
  btnOpen.innerHTML = menu.classList.contains("hidden") ? "&equiv;" : "&times;";
};
btnOpen.addEventListener("click", openMenu);
