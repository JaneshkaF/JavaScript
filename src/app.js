/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var subjects = ["My mom", "Bad Bunny", "My brother", "Marcelo", "Aliens"];
  var action = [" saw", " threw", " ate", " slapped", " broke"];
  var victim = [
    " a ball",
    " a pillow.",
    " a flower.",
    " a picture.",
    " my hair."
  ];

  function generateExcuse() {
    var subjectIndex = Math.floor(Math.random() * subjects.length);
    let str = subjects[subjectIndex];
    var actionIndex = Math.floor(Math.random() * action.length);
    str += action[actionIndex];
    var victimIndex = Math.floor(Math.random() * victim.length);
    str += victim[victimIndex];
    var p = document.querySelector("#excuse");
    p.innerText = str;
  }
  generateExcuse();
};
