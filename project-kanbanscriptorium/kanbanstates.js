import {statesCommandList as command} from "./commands.js";

let creditsButton = document.getElementById("creditsstate-button");
let instructionsButton = document.getElementById("instructionsstate-button");
let loadboardButton = document.getElementById("loadboardstate-button");
let mainmenuButton = document.getElementById("mainmenustate-button");
let newboardButton = document.getElementById("newboardstate-button");
let settingsButton = document.getElementById("settingsstate-button");

document.body.addEventListener("click", function (event) {
    switch (event.target) {
    case creditsButton:
        command.enterCreditsState();
        break;
    case instructionsButton:
        command.enterInstructionsState();
        break;
    case loadboardButton:
        command.enterLoadBoardState();
        break;
    case mainmenuButton:
        command.enterMainMenuState();
        break;
    case newboardButton:
        command.enterNewBoardState();
        break;
    case settingsButton:
        command.enterSettingsState();
        break;
  }
});