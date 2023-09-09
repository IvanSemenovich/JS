const button = document.getElementById("button");
const body = document.querySelector("body");
const color = document.getElementById('color');

arr = ["1", "2", "3", "4", "5", "6", "F", "A", "B",  "C", "D", "E"];

function generateHex() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += arr[getRandomNumber()];
  }
  return hexColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * arr.length);
}

if (button){
    button.addEventListener("click", () => {
        let hexColor =  generateHex();
        document.body.style.backgroundColor = hexColor;
        color.textContent = hexColor;
      });
}

