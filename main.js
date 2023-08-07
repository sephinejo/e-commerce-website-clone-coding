const body = document.querySelector("body");
const navigationOpenBtn = document.querySelector(".header-btn-menu");
const navigationCloseBtn = document.querySelector(".navigation-close-btn");
const navigation = document.querySelector(".navigation");
const searchBtn = document.querySelector(".header-btn-search");
const search = document.querySelector(".search");
const searchCloseBtn = document.querySelector(".search-close-btn");

navigationOpenBtn.addEventListener("click", () => {
  navigation.classList.remove("u-display");
  body.classList.add("blur");
});

navigationCloseBtn.addEventListener("click", () => {
  navigation.classList.add("u-display");
  body.classList.remove("blur");
});

searchBtn.addEventListener("click", () => {
  search.classList.remove("u-display");
});

searchCloseBtn.addEventListener("click", () => {
  search.classList.add("u-display");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("s-animated");
    }
  });
});

let sectionSeparators = document.querySelectorAll(".u-section-separator");
sectionSeparators.forEach((element) => {
  observer.observe(element);
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("p-animated");
    }
  });
});

let animateds = document.querySelectorAll(".animated");
animateds.forEach((element) => {
  observer2.observe(element);
});
