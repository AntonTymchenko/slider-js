const div = document.querySelector("#slider");

let texts = ["text1", "text2", "text3"];

function startSlider() {
  for (let i = 0; i < texts.length; i += 1) {
    setTimeout(() => {
      createSliderContent(i);
    }, Number(`${i + 1}000`));
  }
  setInterval(() => {
    for (let i = 0; i < texts.length; i += 1) {
      setTimeout(() => {
        createSliderContent(i);
      }, Number(`${i + 1}000`));
    }
  }, 3000);
}
startSlider();

function createSliderContent(i) {
  let p = document.createElement("p");
  p.textContent = texts[i];
  div.innerHTML = "";
  div.appendChild(p);
}
