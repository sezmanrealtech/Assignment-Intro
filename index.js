//navbar function
const openNavBar = () => {
  document.getElementsByTagName("nav")[0].classList.toggle("opennavbar");
};

const toggledropdownicon = (e) => {
  console.log(e.tagret);
  e.target.classList.toggle("dropdownicon");
  e.target.nextElementSibling.classList.toggle("toggle");
};

let test = document.getElementsByClassName("dropdown");
test = Array.from(test);
test.forEach((element) => {
  element.firstElementChild.addEventListener("click", toggledropdownicon);
});
