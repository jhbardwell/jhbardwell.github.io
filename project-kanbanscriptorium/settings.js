import {settingsCommandList as command} from "./commands.js";

let devinneswashfontRadioButton = document.getElementById("devinneswash-font-input");
let sanseriffontRadioButton = document.getElementById("sanserif-font-input");

let bloodandinkthemeRadioButton = document.getElementById("bloodandink-theme-input");
let sherwoodforestthemeRadioButton = document.getElementById("sherwoodforest-theme-input");
let chessmatchthemeRadioButton = document.getElementById("chessmatch-theme-input");

document.body.addEventListener("change", function (event) {
  switch (event.target) {
    case bloodandinkthemeRadioButton:
      command.activateBloodAndInkTheme();
      break;
    case sherwoodforestthemeRadioButton:
      command.activateSherwoodForestTheme();
      break;
    case chessmatchthemeRadioButton:
      command.activateChessMatchTheme();
      break;
    case devinneswashfontRadioButton:
        command.activateDevinneSwashFont();
        break;
    case sanseriffontRadioButton:
        command.activateSanSerifFont();
        break;
  }
});