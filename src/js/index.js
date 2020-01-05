import "file-loader?name=[name].[ext]!../index.html";
import "../style/index.scss";

window.onload = () => {
  document.getElementById("cardVal").innerHTML = generateRandVal();
  document.getElementsByTagName("h3")[0].innerHTML = generateRandSuit();
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
