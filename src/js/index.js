import "file-loader?name=[name].[ext]!../index.html";
import "../style/index.scss";

window.onload = () => {
  document.getElementById("cardVal").innerHTML = generateRandVal();
  drawnSuit();
};
function generateRandVal() {
  let value = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
  let randVal = value[Math.floor(Math.random() * value.length)];
  return randVal;
}
function generateRandSuit() {
  let suit = ["&diams;", "&hearts;", "&clubs;", "&spades;"];
  let randSuit = suit[Math.floor(Math.random() * suit.length)];
  return randSuit;
}
function drawnSuit() {
  let suitDr = generateRandSuit();
  let card = document.querySelector("#card");
  let top = document.querySelector(".suitTop");
  let bottom = document.querySelector(".suitBottom");

  if (suitDr === "&diams;" || suitDr === "&hearts;") {
    card.classList.add("red");
  } else {
    card.classList.add("black");
  }
  top.innerHTML = suitDr;
  bottom.innerHTML = suitDr;
}
