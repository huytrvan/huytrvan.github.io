// (function () {
//   menuToggle();
// })();

// function menuToggle() {
//   let menu = document.getElementById("menu");
//   let menuBtn = document.getElementById("menu-btn");

//   menu.onclick = function () {
//     if (menuBtn.classList.contains("is-open")) {
//       menuBtn.classList.remove("is-open");
//     } else {
//         menuBtn.classList.add("is-open");
//     }
//   };
// }

currentYear = document.getElementById("current-year");
currentYear.innerHTML = new Date().getFullYear();
