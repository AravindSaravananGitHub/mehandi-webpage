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

// For Scroling behavior
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  //console.log(reveals);
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("act");
    } else {
      reveals[i].classList.remove("act");
    }
  }
}
