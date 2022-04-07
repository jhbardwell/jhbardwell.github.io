const form = document.getElementById("Contact-form");
let submit = document.getElementById("Submit-input");

const nameInput = document.getElementById("Name-input");
const websiteInput = document.getElementById("Website-input");
const emailInput = document.getElementById("Email-input");
const messageInput = document.getElementById("Message-input");

const nameRegex = /\b[A-Z]*[a-z]*[aeiou]+.+[?^ ][A-Z].{1,19}|\b[A-Z]*[aeiou]+.+[?^,][A-Z].{1,19}/;
const websiteRegex = /^((https?|http|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
const emailRegex = /^[A-Za-z0-9.!#$%&'*+-/=?^_`{|}~]+@[A-za-z0-9.\-]+[.][A-za-z0-9.\-]+$/;
const messageRegex = /[A-Za-z]/
//https://regex101.com/r/7DdyM1/1

const vowelsRegex = /^.*[A-za-z]*[aeiou]*$/gm;
const capitallettersRegex = /^.*[A-Z]*$/gm;
const firstlastnameRegex = /^.*[]*$/gm;
const completesentencesRegex = /^.*[A-Z][A-Za-z ,:;]+[.!?]*$/gm;

const nameOutput = document.getElementById("Name-output");
const websiteOutput = document.getElementById("Website-output");
const emailOutput = document.getElementById("Email-output");
const messageOutput = document.getElementById("Message-output");

let nameValid = false;
let websiteValid = false;
let emailValid = false;
let messageValid = false;

function inputValidation(input, regex, output) {
  if ((input.value!="")&&(regex.exec(input.value))){
        output.innerHTML = `&#x2705;Thanks, your ${input.name} is valid`;
  }
  else if ((input.value!="")&&(!regex.exec(input.value))) {
        output.innerHTML = `&#10060;Sorry, your ${input.name} is <b>not</b> valid`;
    } 
  else
      output.textContent="";
}

form.addEventListener("input", function(event){
    switch(event.target.id){
      case "Name-input":
        inputValidation(nameInput, nameRegex, nameOutput, nameValid);
        break;
      case "Website-input":
        inputValidation(websiteInput, websiteRegex, websiteOutput, websiteValid);
        break;
      case "Email-input":
        inputValidation(emailInput, emailRegex, emailOutput, emailValid);
        break;
      case "Message-input":
        inputValidation(messageInput, messageRegex, messageOutput, messageValid);
        break;
    }
});
//make this another switch function looking at output.InnerHTML?
if(nameValid == true && 
  websiteValid == true &&
  emailValid == true &&
  messageValid == true){
    submit.disabled == false;
  }
else
  submit.disabled == true;