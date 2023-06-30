const navBtn = document.querySelector(".bar");
const navModel = document.querySelector(".nav-model");
const aboutBG = document.querySelector(".aboutBGimage");
const footerYear = document.querySelector("#year");
let deg = 0;

// Navigation Bar
navBtn.addEventListener("click", () => {
  navModel.style.display = "flex";
});
navModel.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  navModel.style.display = "none";
});

// Rotating Background
setInterval(() => {
  deg--;
  aboutBG.style.transform = `rotate(${deg}deg)`;
}, 100);

// Footer
const date = new Date();
let year = date.getFullYear();
footerYear.innerHTML = year;
