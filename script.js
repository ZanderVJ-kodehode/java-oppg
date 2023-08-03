
// play for me sound

const play = document.querySelector("#Play");
const playFM = document.querySelector("#playfm");

function playFMSound(){
  if (playFM.paused){
    playFM,currentTime = 0;
    playFM.play();
    play.textContent = "pause";
  } else {
    playFM.pause();
    play.textContent = "Play for me";
  }
}

play.addEventListener("click", playFMSound);


// z button

const zButton = document.querySelector('.z');
const zSound = document.getElementById('zSound');

// Function to play the sound
function playZSound() {
  zSound.currentTime = 0; // Reset the sound to the beginning, so it can be played again immediately if pressed multiple times quickly
  zSound.play();
}

// Event listener for the "Z" key press
document.addEventListener('keydown', function(event) {
  if (event.key === 'z') {
    playZSound();
  }
});

// Event listener for the Z button click
zButton.addEventListener('click', playZSound);


// x button

const xButton = document.querySelector(".x");
const xSound = document.querySelector("#xSound");


function playXSound() {
  xSound.currentTime = 0;
  xSound.play();
}

document.addEventListener("keydown", function(event){
  if (event.key === "x"){
    playXSound();
  }
});

xButton.addEventListener("click", playXSound);



// c button

const cButton = document.querySelector(".c")
const cSound = document.querySelector("#cSound")

function playCSound(){
  cSound.currentTime = 0;
  cSound.play();
}

document.addEventListener("keydown", function(event){
  if (event.key === "c"){
    playCSound()
  }
});

cButton.addEventListener("click",playCSound);




// v button


const vButton = document.querySelector(".v")
const vSound = document.querySelector("#vSound")

function playVSound(){
  vSound.currentTime = 0;
  vSound.play();
}

document.addEventListener("keydown", function(event){
  if (event.key === "v"){
    playVSound()
  }
});

vButton.addEventListener("click",playCSound);


// b button

const bButton = document.querySelector(".b")
const bSound = document.querySelector("#bSound")

function playBSound(){
  bSound.currentTime = 0;
  bSound.play();
}

document.addEventListener("keydown", function(event){
  if (event.key === "b"){
    playBSound()
  }
});

bButton.addEventListener("click",playBSound);


// n button

const nButton = document.querySelector(".n")
const nSound = document.querySelector("#nSound")

function playNSound(){
  nSound.currentTime = 0;
  nSound.play()
}

document.addEventListener("keydown", function(event){
  if (event.key === "n"){
    playNSound()
  }
})

nButton.addEventListener("click", playNSound);







// const customButton = document.querySelector('.z.button');

// // Function to add "active" class when the "Z" key is pressed
// function handleKeyPress(event) {
//   if (event.key === 'z' || event.key === 'Z') {
//     customButton.classList.add('active');
//   }
// }

// // Function to remove "active" class when any key is released
// function handleKeyRelease(event) {
//   customButton.classList.remove('active');
// }

// // Add event listeners for keydown and keyup events
// document.addEventListener('keydown', handleKeyPress);
// document.addEventListener('keyup', handleKeyRelease);









// den fynker om du vil bruke key press men ikke om du bruker "click"


// var numberOfButtons = 
//     document.querySelectorAll(".button").length;
  
// for (var j = 0; j < numberOfButtons; j++) {
  
//   document.querySelectorAll(".button")[j]
//   .addEventListener("click", function() {
  
//     var buttonStyle = this.innerHTML;
//     sound(buttonStyle);
//   });
// }
  
// document.addEventListener("keypress", function(event) {
//   sound(event.key);
// });
  
// function sound(key) {
//   switch (key) {
//     case "z":
//       var sound1 = new Audio("sound/lyd.wav");
//       sound1.play();
//       break;
  
//     case "x":
//       var sound2 = new Audio("sound/lyd1.wav");
//       sound2.play();
//       break;
  
//     case "c":
//       var sound3 = new Audio('sound/lyd2.wav');
//       sound3.play();
//       break;
  
//     case "v":
//       var sound4 = new Audio('sound/lyd3.wav');
//       sound4.play();
//       break;
  
//     case "b":
//       var sound5 = new Audio('sound/lyd4.wav');
//       sound5.play();
//       break;
  
//     case "n":
//       var sound6 = new Audio('sound/lyd5.wav');
//       sound6.play();
//       break;
  
//     default: console.log(key);
//   }
// }