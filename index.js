const div = document.querySelector("#slider");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

let imgs = ["dog1.jpg", "dog2.jpg", "dog3.jpg"];

let indx = 0;
let idxSetTimeout = 0;

left.addEventListener("click", clickLeftArrow);
right.addEventListener("click", clickRightArrow);

function clickLeftArrow(e) {
  e.preventDefault();
  indx -= 1;
  if (indx < 0) {
    indx = imgs.length - 1;
  }
  createSliderContent(indx);
  clearInterval(idxSetTimeout);
  idxSetTimeout = setInterval(() => {
    indx += 1;
    if (indx > imgs.length - 1) {
      indx = 0;
    }
    createSliderContent(indx);
  }, 1000);
}
function clickRightArrow(e) {
  e.preventDefault();
  indx += 1;
  if (indx > imgs.length - 1) {
    indx = 0;
  }
  createSliderContent(indx);
  clearInterval(idxSetTimeout);
  idxSetTimeout = setInterval(() => {
    indx += 1;
    if (indx > imgs.length - 1) {
      indx = 0;
    }
    createSliderContent(indx);
  }, 1000);
}

function createSliderContent(indx) {
  let img = document.createElement("img");
  img.src = `./img/${imgs[indx]}`;
  img.alt = "dog";
  div.innerHTML = "";
  div.appendChild(img);
}
createSliderContent(indx);
idxSetTimeout = setInterval(() => {
  indx += 1;
  if (indx > imgs.length - 1) {
    indx = 0;
  }
  createSliderContent(indx);
}, 1000);
