//  Getting all buttons
var allDrums = document.querySelectorAll(".drum");

//  Add event listener to clicks
for (var i = 0; i < allDrums.length; i++) {
  allDrums[i].addEventListener("click", function () {
    playSounds(this.innerHTML);
    animate(this.innerHTML);
  });
}

//  Adding event listener for keyboard keys
document.addEventListener("keydown", function (event) {
  playSounds(event.key);
  animate(event.key);
});
//  Playing sounds according to the key
function playSounds(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
  }
}

//  apply animation according to key
function animate(key) {
  var allowedKeys = ["w", "a", "s", "d", "j", "k", "l"];
  if (allowedKeys.includes(key)) {
    var btn2Animate = document.querySelector("." + key);
    btn2Animate.classList.add("animate");
    setTimeout(function () {
      btn2Animate.classList.remove("animate");
    }, 100);
  }
}
