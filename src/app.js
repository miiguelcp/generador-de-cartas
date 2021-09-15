/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// let suits = [
//   {
//     suit: "corazon",
//     color: "rojo"
//   },
//   {
//     suit: "espada",
//     color: "negro"
//   },
//   {
//     suit: "trebol",
//     color: "negro"
//   },
//   {
//     suit: "diamante",
//     color: "rojo"
//   }
// ];
function randomNumber() {
  let result = Math.floor(Math.random() * 4 + 0);
  if (result == 0) {
    result = corazon;
  } else if (result == 1) {
    result = espada;
  } else if (result == 2) {
    result = trebol;
  } else {
    result = diamante;
  }
  return result;
}
function number() {
  let result = Math.floor(Math.random() * 13 + 1);
  if (result == 11) {
    result = "J";
  } else if (result == 12) {
    result = "Q";
  } else if (result == 13) {
    result = "K";
  } else if (result == 1) {
    result = "A";
  }
  return result;
}
let corazon = "♥".fontcolor("red");
let espada = "♠";
let trebol = "♣";
let diamante = "♦".fontcolor("red");
let julio = randomNumber();
console.log(number());
window.onload = function() {
  //write your code here
  document.querySelector("#arriba").innerHTML = julio;
  document.querySelector("#centro").innerHTML = number();
  document.querySelector("#abajo").innerHTML = julio;
};
