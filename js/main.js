window.addEventListener("load", init);

// Difficulty levels

const levels = {
  easy: 7,
  medium: 5,
  hard: 3,
  veryHard: 1
};

let level = levels.easy;
// Globals

let startingTime = level;
let time = startingTime;
let score = 0;
let isPlaying = false;

// Dom elements
const wordInput = document.querySelector("#wordInput");
const numberSeconds = document.querySelector("#secondsNumber");
const timeDisplay = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");
const currentWord = document.querySelector("#currentWord");
const message = document.querySelector("#message");
const highScoreDisplay = document.querySelector("#highScoreDisplay");
const easyButton = document.querySelector("#easyLevel");
const mediumButton = document.querySelector("#mediumLevel");
const hardButton = document.querySelector("#hardLevel");
const LevelButtons = document.querySelector("#LevelButtons");

const words = [
  "abasement",
  "abash",
  "abashed",
  "abasia",
  "abasic",
  "abate",
  "bitt",
  "bitten",
  "bitter",
  "bonus",
  "bony",
  "bonze",
  "horrific",
  "horrified",
  "horrify",
  "the",
  "quick",
  "brown",
  "fox",
  "jumped",
  "over",
  "the",
  "lazy",
  "fox"
];
function init() {
  //Load word from array
  showWord(words);
  setTime();
  numberSeconds.innerHTML = startingTime;
  addListeners();
  setInterval(countDown, 1000);

  setInterval(checkStatus, 50);

  localStorage.setItem("highScore", 0);
  sessionStorage.setItem("highScore", 0);
  // getWords();
  // console.log("Hello World");
}

function addListeners() {
  wordInput.addEventListener("input", startMatch);
  easyButton.addEventListener("click", setEasy);
  mediumButton.addEventListener("click", setMedium);
  hardButton.addEventListener("click", setHard);
}

function setEasy() {
  level = levels.easy;
  updateLevel();
}

function setMedium() {
  level = levels.medium;
  updateLevel();
}

function setHard() {
  level = levels.hard;
  updateLevel();
}

function updateLevel() {
  startingTime = level;
  time = startingTime;
  setNumberSeconds();
  setTime();
}

// Check for word match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = startingTime;
    setTime();
    showWord(words);
    wordInput.value = "";
    score++;
    LevelButtons.classList.add("invisible");
  }
  setScore();
}

function matchWords() {
  if (currentWord.innerHTML === wordInput.value) {
    message.innerHTML = "Correct!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    if (score > localStorage.getItem("highScore")) {
      localStorage.setItem("highScore", score);
      sessionStorage.setItem("highScore", score);
      LevelButtons.classList.remove("invisible");
      setHighScore();
    }
    score = -1;
  }
  // setScore();
}

// pick and show random word
function showWord(words) {
  const wIndex = Math.floor(Math.random() * words.length);
  const newWord = words[wIndex];
  currentWord.innerHTML = newWord;
}

function countDown() {
  if (isPlaying && time > 0) {
    time--;
  } else {
    isPlaying = false;
  }
  setTime();
}

function setTime() {
  timeDisplay.innerHTML = time;
}

function setNumberSeconds() {
  numberSeconds.innerHTML = startingTime;
}

function setScore() {
  if (score < 0) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function setHighScore() {
  highScoreDisplay.innerHTML = score;
}
