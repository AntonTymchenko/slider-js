const div = document.querySelector("#slider");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

let texts = ["text1", "text2", "text3"];
let i = 0;

createSliderContent(0);

left.addEventListener("click", clickLeftArrow);
right.addEventListener("click", clickRightArrow);

function clickLeftArrow(e) {
  e.preventDefault();
  i -= 1;
  if (i < 0) {
    i = texts.length - 1;
  }
  createSliderContent(i);
}
function clickRightArrow(e) {
  e.preventDefault();
  i += 1;
  if (i > texts.length - 1) {
    i = 0;
  }
  createSliderContent(i);
}
function createSliderContent(i) {
  let p = document.createElement("p");
  p.textContent = texts[i];
  div.innerHTML = "";
  div.appendChild(p);
}
