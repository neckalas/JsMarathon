const board = document.querySelector("#board");
const colors = [
  "#ff9ff3",
  "#feca57",
  "#ff6b6b",
  "#48dbfb",
  "#1dd1a1",
  "#f368e0",
  "#ff9f43",
  "#ee5253",
  "#0abde3",
  "#10ac84",
  "#00d2d3",
  "#54a0ff",
  "#5f27cd",
  "#c8d6e5",
  "#01a3a4",
  "#2e86de",
  "#341f97",
  "#8395a7",
];
const SQUARES_NUMBER = 560;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });
  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
