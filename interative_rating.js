const digit = document.getElementsByClassName("digit");      
const home = document.getElementById("home");
const thanks = document.getElementById("thanks");
const submitButton = document.getElementById("button");
const message = document.getElementById("message");
const digitHover = document.querySelectorAll('.digit:hover');

function changeBackgroundColorAndMessage(a) {
  for(let i = 0; i < digit.length; i++) {
    digit[i].style.backgroundColor = "hsla(216, 12%, 54%, 20%)";
    digit[i].style.color = "hsl(216, 12%, 54%)";
  }
  a.style.backgroundColor = "hsl(217, 12%, 63%)";
  a.style.color = "hsl(0, 0%, 100%)";
  message.innerHTML = `You selected ${a.innerHTML} out of 5`;
  var memory = a;
}
function mouseOverColor(a) {
  for(let i = 0; i < digit.length; i++) {
    if(digit[i].style.backgroundColor = 'hsl(25, 97%, 53%)') {
      digit[i].style.backgroundColor = "hsla(216, 12%, 54%, 20%)";
      digit[i].style.color = "hsl(216, 12%, 54%)";
    }
  }
  a.style.backgroundColor = 'hsl(25, 97%, 53%)';
  a.style.color = 'hsl(0, 0%, 100%)';
}
function mounseOutColor(a) {
  if(a.style.backgroundColor !== "hsl(217, 12%, 63%)" && a.style.color !== "hsl(0, 0%, 100%)") {
    a.style.backgroundColor = "hsla(216, 12%, 54%, 20%)";
    a.style.color = "hsl(216, 12%, 54%)";
  }
}  
function displayThanks() {
  document.getElementById("home").style.display = "none";
  document.getElementById("thanks").style.display = "block";
}