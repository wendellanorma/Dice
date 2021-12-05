var diceRan1 = Math.floor(Math.random() * 6) + 1;
var diceRan2 = Math.floor(Math.random() * 6) + 1;
const diceNum1 = "dice" + diceRan1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", diceNum1);
const diceNum2 = "dice" + diceRan2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", diceNum2);
if (diceRan1 > diceRan2) {
  document.querySelector("h1").innerHTML = "P1 Wins!";
} else if (diceRan2 > diceRan1) {
  document.querySelector("h1").innerHTML = "P2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
