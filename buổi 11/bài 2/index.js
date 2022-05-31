let btn1 = document.querySelector("#btn1");
let a = document.body;

btn1.onclick = function () {
  let randomColor = generateRandomColor(); 
  a.style.backgroundColor = randomColor;
}

function generateRandomColor() {
  let r = Math.ceil (Math.random() * 255);
  let g = Math.ceil (Math.random() * 255);
  let b = Math.ceil (Math.random() * 255);
  let color = `rgb(${r}, ${g}, ${b})`;
  return color;
} 