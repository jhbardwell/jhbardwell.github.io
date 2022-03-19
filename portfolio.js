let formLabel = document.getElementById("Form-label")

let project1Image = document.getElementById("Newsletter-Concatenation-Program-image")
let project2Image = document.getElementById("Research-Data-Manager-Program-image")
let project3Image = document.getElementById("Fantasy-Narrative-Program-image")

let project1SystemContent = document.getElementById("RadioButton1-div")
let project1TimelineContent = document.getElementById("RadioButton2-div")
let project1DemoContent = document.getElementById("RadioButton3-div")
let project2SystemContent = document.getElementById("RadioButton4-div")
let project2TimelineContent = document.getElementById("RadioButton5-div")
let project2DemoContent = document.getElementById("RadioButton6-div")
let project3SystemContent = document.getElementById("RadioButton7-div")
let project3TimelineContent = document.getElementById("RadioButton8-div")
let project3DemoContent = document.getElementById("RadioButton9-div")

let project1Aside = document.getElementById("Project1-div")
let project2Aside = document.getElementById("Project2-div")
let project3Aside = document.getElementById("Project3-div")

let RadioButtons = document.getElementsByClassName("radiobuttons");

let RadioButton1 = document.getElementById("RadioButton1-input")
let RadioButton2 = document.getElementById("RadioButton2-input")
let RadioButton3 = document.getElementById("RadioButton3-input")
let RadioButton4 = document.getElementById("RadioButton4-input")
let RadioButton5 = document.getElementById("RadioButton5-input")
let RadioButton6 = document.getElementById("RadioButton6-input")
let RadioButton7 = document.getElementById("RadioButton7-input")
let RadioButton8 = document.getElementById("RadioButton8-input")
let RadioButton9 = document.getElementById("RadioButton9-input")

let resetAll = function(){
    document.getElementsByClassName("projectimages").style.filter="sepia(1)";
    document.getElementsByClassName("contentdivs").style.display="none";
    document.getElementsByClassName("asidedivs").style.display="none";
}

let clickRadioButton1 = function() {
    project1Image.style.filter="none";
    project1SystemContent.style.display="block";
    project1Aside.style.display="block";
}

let clickRadioButton2 = function() {
    project1Image.style.filter="none";
    project1TimelineContent.style.display="block";
    project1Aside.style.display="block";
}

let clickRadioButton3 = function() {
    project1Image.style.filter="none";
    project1DemoContent.style.display="block";
    project1Aside.style.display="block";
}

let clickRadioButton4 = function() {
    project2Image.style.filter="none";
    project2SystemContent.style.display="block";
    project2Aside.style.display="block";
}

let clickRadioButton5 = function() {
    project2Image.style.filter="none";
    project2TimelineContent.style.display="block";
    project2Aside.style.display="block"; 
}

let clickRadioButton6 = function() {
    project2Image.style.filter="none";
    project2DemoContent.style.display="block";
    project2Aside.style.display="block";
}

let clickRadioButton7 = function() {
    project3Image.style.filter="none";
    project3SystemContent.style.display="block";
    project3Aside.style.display="block";
}

let clickRadioButton8 = function() {
    project3Image.style.filter="none";
    project3TimelineContent.style.display="block";
    project3Aside.style.display="block";
}

let clickRadioButton9 = function() {
    project3Image.style.filter="none";
    project3DemoContent.style.display="block";
    project3Aside.style.display="block";
}

let clickRadioButtons = function(){
    for(x=1; x < RadioButtons.length; X++){
        if (RadioButtons[i].checked){
            resetAll();
            clickRadioButton`${i}`();
        }
    }
}

RadioButtons.addEventListener("click", clickRadioButtons);
