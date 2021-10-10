const clc2 = document.querySelector(".cancel2");
const arr2 = document.querySelector(".arr_container2");
const left_container2 = document.querySelector(".left_container2");

arr2.addEventListener("click", () => {
  arr2.classList.add("active_arr");
  if (left_container2.classList.contains("off")) {
    left_container2.classList.remove("off");
    left_container2.classList.add("active");
  }
});
clc2.addEventListener("click", () => {
  arr2.classList.remove("active_arr");
  if (left_container2.classList.contains("active")) {
    left_container2.classList.remove("active");
    left_container2.classList.add("off");
  }
});

const clc3 = document.querySelector(".cancel3");
const arr3 = document.querySelector(".arr_container3");
const left_container3 = document.querySelector(".left_container3");

arr3.addEventListener("click", () => {
  arr3.classList.add("active_arr");
  if (left_container3.classList.contains("off")) {
    left_container3.classList.remove("off");
    left_container3.classList.add("active");
  }
});
clc3.addEventListener("click", () => {
  arr3.classList.remove("active_arr");
  if (left_container3.classList.contains("active")) {
    left_container3.classList.remove("active");
    left_container3.classList.add("off");
  }
});

const clc = document.querySelector(".cancel");
const arr = document.querySelector(".arr_container");
const left_container = document.querySelector(".left_container");

arr.addEventListener("click", () => {
  arr.classList.add("active_arr");
  if (left_container.classList.contains("off")) {
    left_container.classList.remove("off");
    left_container.classList.add("active");
  }
});
clc.addEventListener("click", () => {
  arr.classList.remove("active_arr");
  if (left_container.classList.contains("active")) {
    left_container.classList.remove("active");
    left_container.classList.add("off");
  }
});
