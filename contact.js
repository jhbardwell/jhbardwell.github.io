let form = document.getElementById("Contact-form")
let contactLabels = document.getElementsByClassName("contactlabels")
const submitButton = document.getElementById('Submit-input')

const names = document.getElementById("Name-input").value
const namesRegex = /^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*$/
const namesLabel = document.getElementById('labelForName-input')
const namesValid = document.getElementById("Name-valid")

const website = document.getElementById("Website-input").value
const websiteRegex = /^((https?|http|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/
const websiteValid = document.getElementById("Website-valid")

const phone = document.getElementById("Phone-input").value
const phoneRegex = /(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\\\/]?){0,})(?:[\-\.\ \\\\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\\\/]?(\d+))?/i
const phoneValid = document.getElementById("Phone-valid")

const email = document.getElementById("Email-input").value
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const emailValid = document.getElementById("Email-valid")

const skillset = document.getElementsByClassName("skillset")
const skillsetValid = document.getElementById("Skillset-valid")

const programs = document.getElementsByClassName("programs")
const programsValid = document.getElementById("Programs-valid")

const languages = document.getElementsByClassName("languages")
const languagesValid = document.getElementById("Languages-valid")

const message = document.getElementById("Message-input").value
const messageRegex = /^\\s+[A-Za-z,;'\"\\s]+[.?!]$/
const messagesValid = document.getElementById("Messages-valid")

let namesValidationCheck = function (names, namesRegex){
  if ((names != "") && (namesRegex.test(names) == true)){
    namesValid.background-color == "white";
    namesValid.innerText = "This is a valid name";
    namesValid.innerText.style.color = "darkgreen";
    return true;
  }
  else if ((names != "") && (namesRegex.test(names) == false)) {
    namesValid.background-color == "white";
    namesValid.innerText = "This is NOT a valid name";
    namesValid.innerText.style.color = "darkred";
    namesLabel.style.color = "red";
    return false;
  }
  else
    return false;
}

let websiteValidationCheck = function (website, websiteRegex){
  if ((website != "") && (websiteRegex.test(website) == true)){
    websiteValid.innerText = "This is a valid website url";
    websiteValid.innerText.style.color = green;
    return true;
  }
  else if ((website != "") && (websiteRegex.test(website) == false)) {
    websiteValid.innerText = "This is NOT a valid website url";
    websiteValid.innerText.style.color = red;
    websiteLabel.style.color = red;
    return false;
  }
  else
    return false;
}

let resetAllContacts = function () {
  for (let i = 0; i < contactLabels.length; i++) {
    contactLabels[i].style.filter = "gray"; 
  }
}

let submitButtonActivation = function(){
  if((namesValidationCheck()==true)&&(websiteValidationCheck()==true)){
    submitButton.disabled=false;
  }
}

form.addEventListener("input", function (event) {
  resetAllContacts();
  switch (event.target.id){
    case("Name-input"):
      namesValidationCheck();
      break;
    case("Website-input"):
      websiteValidationCheck();
      break;
  };
  submitButtonActivation();

})