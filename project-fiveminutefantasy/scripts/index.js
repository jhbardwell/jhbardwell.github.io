let newgameButton = document.getElementById("newgame-button");
let settingsButton = document.getElementById("settings-button");
let creditsButton = document.getElementById("credits-button");
let buttons = document.getElementsByClassName("button");
let logoImage = document.getElementById("logo-image");

let resetAllButtons = function () {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.color = "black";
      buttons[i].style.backgroundColor = "lightgray"; 
    }
  }

document.addEventListener("mouseover", function(event){
    resetAllButtons();
    switch(event.target){
        case newgameButton:
            logoImage.src = "/project-fiveminutefantasy/assets/images/logo-newgame.png";
            newgameButton.style.backgroundColor = "black";
            newgameButton.style.color = "lightgray";
            break;
        case settingsButton:
            logoImage.src = "/project-fiveminutefantasy/assets/images/logo-settings.png";
            settingsButton.style.backgroundColor = "black";
            settingsButton.style.color = "lightgray";
            break;
        case creditsButton:
            logoImage.src = "/project-fiveminutefantasy/assets/images/logo-credits.png";
            creditsButton.style.backgroundColor = "black";
            creditsButton.style.color = "lightgray";
            break;
        default:
            logoImage.src = "/project-fiveminutefantasy/assets/images/logo-default.png";
            break;
    }
})