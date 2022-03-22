let projectImages = document.getElementsByClassName("projectimages")

let project1Image = document.getElementById("Newsletter-Concatenation-Program-image");
let project2Image = document.getElementById("Research-Data-Manager-Program-image");
let project3Image = document.getElementById("Fantasy-Narrative-Program-image");
let project4Image = document.getElementById("Portfolio-Webpage-image");

let projectLabels = document.getElementsByClassName("radiobuttonlabels")

let project1Labels = document.getElementsByClassName("project1labels") 
let project2Labels = document.getElementsByClassName("project2labels") 
let project3Labels = document.getElementsByClassName("project3labels") 
let project4Labels = document.getElementsByClassName("project4labels") 

let projectContents = document.getElementsByClassName("contentdivs")

let project1SystemContent = document.getElementById("RadioButton1-div");
let project2SystemContent = document.getElementById("RadioButton4-div");
let project3SystemContent = document.getElementById("RadioButton7-div");
let project4SystemContent = document.getElementById("RadioButton10-div");

let project1TimelineContent = document.getElementById("RadioButton2-div");
let project2TimelineContent = document.getElementById("RadioButton5-div");
let project3TimelineContent = document.getElementById("RadioButton8-div");
let project4TimelineContent = document.getElementById("RadioButton11-div");

let project1DemoContent = document.getElementById("RadioButton3-div");
let project2DemoContent = document.getElementById("RadioButton6-div");
let project3DemoContent = document.getElementById("RadioButton9-div");
let project4DemoContent = document.getElementById("RadioButton12-div");

let projectAsides = document.getElementsByClassName("asidedivs")

let project1Aside = document.getElementById("Project1-div");
let project2Aside = document.getElementById("Project2-div");
let project3Aside = document.getElementById("Project3-div");
let project4Aside = document.getElementById("Project4-div");

let radiobuttons = document.getElementsByClassName("radiobuttons")

let resetAll = function () {
  for (i = 0; i < projectImages.length; i++) {
    projectImages[i].style.filter = "sepia(1)";  
  }
  for (i = 0; i < projectContents.length; i++) {
    projectContents[i].style.display = "none";  
  }
  for (i = 0; i < projectAsides.length; i++) {
    projectAsides[i].style.display = "none";  
  }
};

document.body.addEventListener("change", function (event) {
    resetAll();
    switch (event.target.id) {
        case "RadioButton1-input":
          project1Image.style.filter = "none";
          project1SystemContent.style.display = "block";
          project1Aside.style.display = "block";
          project1Labels.style.color = "gold";
          break;
        case "RadioButton2-input":
          project1Image.style.filter = "none";
          project1TimelineContent.style.display = "block";
          project1Aside.style.display = "block";
          project1Labels.style.color = "gold";
          break;
        case "RadioButton3-input":
          project1Image.style.filter = "none";
          project1DemoContent.style.display = "block";
          project1Aside.style.display = "block";
          project1Labels.style.color = "gold";
          break;
        case "RadioButton4-input":
          project2Image.style.filter = "none";
          project2SystemContent.style.display = "block";
          project2Aside.style.display = "block";
          project2Labels.style.color = "blue";
          break;
        case "RadioButton5-input":
          project2Image.style.filter = "none";
          project2TimelineContent.style.display = "block";
          project2Aside.style.display = "block";
          project2Labels.style.color = "blue";
          break;
        case "RadioButton6-input":
          project2Image.style.filter = "none";
          project2DemoContent.style.display = "block";
          project2Aside.style.display = "block";
          project2Labels.style.color = "blue";
          break;
        case "RadioButton7-input":
          project3Image.style.filter = "none";
          project3SystemContent.style.display = "block";
          project3Aside.style.display = "block";
          project3Labels.style.color = "green";
          break;
        case "RadioButton8-input":
          project3Image.style.filter = "none";
          project3TimelineContent.style.display = "block";
          project3Aside.style.display = "block";
          project3Labels.style.color = "green";
          break;
        case "RadioButton9-input":
          project3Image.style.filter = "none";
          project3DemoContent.style.display = "block";
          project3Aside.style.display = "block";
          project3Labels.style.color = "green";
          break;
        case "RadioButton10-input":
          project4Image.style.filter = "none";
          project4SystemContent.style.display = "block";
          project4Aside.style.display = "block";
          project4Labels.style.color = "purple";
          break;
        case "RadioButton11-input":
          project4Image.style.filter = "none";
          project4TimelineContent.style.display = "block";
          project4Aside.style.display = "block";
          project4Labels.style.color = "purple";
          break;
        case "RadioButton12-input":
          project4Image.style.filter = "none";
          project4DemoContent.style.display = "block";
          project4Aside.style.display = "block";
          project4Labels.style.color = "purple";
          break;
    }
})