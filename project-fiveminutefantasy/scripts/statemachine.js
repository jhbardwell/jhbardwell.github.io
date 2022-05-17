import {statesCommandList as command} from "./commands.js";

let menuButton = document.getElementById("menu-button");
let creditsButton = document.getElementById("credits-button");
let newgameButton = document.getElementById("newgame-button");
let settingsButton = document.getElementById("settings-button");

document.addEventListener("keyup", function(event){
  switch(event.key){
    case "Escape":
      command.enterMainMenuState();
      break;
  }
});

document.body.addEventListener("click", function (event) {
  switch (event.target) {
    case menuButton:
      command.enterMainMenuState();
      break;
    case settingsButton:
      command.enterSettingsState();
      break;
    case creditsButton:
      command.enterCreditsState();
      break;
    case newgameButton:
      command.enterGamePlayState();
      break;
  }
});