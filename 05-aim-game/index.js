const startBtn = document.querySelector("#start");
const timeList = document.querySelector("#time-list");
const screens = document.querySelectorAll(".screen");
const board = document.querySelector("#board");
const timeEl = document.querySelector("#time");
let time = 0;
let score = 0;

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

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (e) => {
  if (e.target.classList.contains("time-btn")) {
    time = parseInt(e.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

board.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    score++;
    e.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function finishGame() {
  timeEl.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`;
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function createRandomCircle() {
  const circle = document.createElement("div");
  const color = getRandomColor();
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();

  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = color;
  circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

//GAMEHACK

function winTheGame() {
  function kill() {
    const circle = document.querySelector(".circle");
    circle.click();
  }
  setInterval(kill, 1);
}
