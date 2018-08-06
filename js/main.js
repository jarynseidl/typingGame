window.addEventListener("load", init);

// Globals

let time = 5;
let score = 0;
let isPlaying;

// Dom elements
const wordInput = document.querySelector("#wordInput");
const numberSeconds = document.querySelector("#secondsNumber");
const timeDisplay = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");
const currentWord = document.querySelector("#currentWord");
const message = document.querySelector("#message");

const words = [];
function init() {
  //Load word from array
  //   showWord(words);
  getWords();
  console.log("Hello World");
}

// pick and show random word
function showWord(words) {}

function getWords() {
  var request = new XMLHttpRequest();

  $.get("https://geek-jokes.sameerkumar.website/api", function(data, status) {
    alert(data);
  });

  request.open("GET", "https://geek-jokes.sameerkumar.website/api", true);

  request.onload = function() {
    console.log(request.responseText);
  };
  console.log("Got here");
}
