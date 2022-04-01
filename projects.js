let projectImages = document.getElementsByClassName("projectimages")

let project1Image = document.getElementById("Newsletter-Concatenation-Program-image")
let project2Image = document.getElementById("Research-Data-Manager-Program-image")
let project3Image = document.getElementById("Fantasy-Narrative-Program-image")
let project4Image = document.getElementById("Portfolio-Webpage-image")

let projectLabels = document.getElementsByClassName("projectlabels")

let project1SystemLabel = document.getElementById("RadioButton1-label") 
let project2SystemLabel = document.getElementById("RadioButton4-label") 
let project3SystemLabel = document.getElementById("RadioButton7-label") 
let project4SystemLabel = document.getElementById("RadioButton10-label") 

let project1TimelineLabel = document.getElementById("RadioButton2-label")
let project2TimelineLabel = document.getElementById("RadioButton5-label")
let project3TimelineLabel = document.getElementById("RadioButton8-label")
let project4TimelineLabel = document.getElementById("RadioButton11-label")

let project1DemoLabel = document.getElementById("RadioButton3-label")
let project2DemoLabel = document.getElementById("RadioButton6-label")
let project3DemoLabel = document.getElementById("RadioButton9-label")
let project4DemoLabel = document.getElementById("RadioButton12-label")

let projectContents = document.getElementsByClassName("contentdivs")

let project1SystemContent = document.getElementById("RadioButton1-div")
let project2SystemContent = document.getElementById("RadioButton4-div")
let project3SystemContent = document.getElementById("RadioButton7-div")
let project4SystemContent = document.getElementById("RadioButton10-div")

let project1TimelineContent = document.getElementById("RadioButton2-div")
let project2TimelineContent = document.getElementById("RadioButton5-div")
let project3TimelineContent = document.getElementById("RadioButton8-div")
let project4TimelineContent = document.getElementById("RadioButton11-div")

let project1DemoContent = document.getElementById("RadioButton3-div")
let project2DemoContent = document.getElementById("RadioButton6-div")
let project3DemoContent = document.getElementById("RadioButton9-div")
let project4DemoContent = document.getElementById("RadioButton12-div")

let projectAsides = document.getElementsByClassName("asidedivs")

let project1Aside = document.getElementById("Project1-div")
let project2Aside = document.getElementById("Project2-div")
let project3Aside = document.getElementById("Project3-div")
let project4Aside = document.getElementById("Project4-div")

let radiobuttons = document.getElementsByClassName("radiobuttons")

let resetAllProjects = function () {
  for (let i = 0; i < projectImages.length; i++) {
    projectImages[i].style.filter = "sepia(1)"; 
  }
  for (let i = 0; i < projectLabels.length; i++) {
    projectLabels[i].style.color = "gray";  
  }
  for (let i = 0; i < projectContents.length; i++) {
    projectContents[i].style.display = "none";  
  }
  for (let i = 0; i < projectAsides.length; i++) {
    projectAsides[i].style.display = "none";  
  }
}

document.body.addEventListener("change", function (event) {
    resetAllProjects();
    switch (event.target.id) {
        case "RadioButton1-input":
          project1Image.style.filter = "none";
          project1SystemLabel.style.color = "gold";
          project1SystemContent.style.display = "block";
          project1Aside.style.display = "block";
          break;
        case "RadioButton2-input":
          project1Image.style.filter = "none";
          project1TimelineLabel.style.color = "gold";
          project1TimelineContent.style.display = "block";
          project1Aside.style.display = "block";
          break;
        case "RadioButton3-input":
          project1Image.style.filter = "none";
          project1DemoLabel.style.color = "gold";
          project1DemoContent.style.display = "block";
          project1Aside.style.display = "block";
          break;
        case "RadioButton4-input":
          project2Image.style.filter = "none";
          project2SystemLabel.style.color = "lightblue";
          project2SystemContent.style.display = "block";
          project2Aside.style.display = "block";
          break;
        case "RadioButton5-input":
          project2Image.style.filter = "none";
          project2TimelineLabel.style.color = "lightblue";
          project2TimelineContent.style.display = "block";
          project2Aside.style.display = "block";
          break;
        case "RadioButton6-input":
          project2Image.style.filter = "none";
          project2DemoLabel.style.color = "lightblue";
          project2DemoContent.style.display = "block";
          project2Aside.style.display = "block";
          break;
        case "RadioButton7-input":
          project3Image.style.filter = "none";
          project3SystemLabel.style.color = "orange";
          project3SystemContent.style.display = "block";
          project3Aside.style.display = "block";
          break;
        case "RadioButton8-input":
          project3Image.style.filter = "none";
          project3TimelineLabel.style.color = "orange";
          project3TimelineContent.style.display = "block";
          project3Aside.style.display = "block";
          break;
        case "RadioButton9-input":
          project3Image.style.filter = "none";
          project3DemoLabel.style.color = "orange";
          project3DemoContent.style.display = "block";
          project3Aside.style.display = "block";
          break;
        case "RadioButton10-input":
          project4Image.style.filter = "none";
          project4SystemLabel.style.color = "purple";
          project4SystemContent.style.display = "block";
          project4Aside.style.display = "block";
          break;
        case "RadioButton11-input":
          project4Image.style.filter = "none";
          project4TimelineLabel.style.color = "purple";
          project4TimelineContent.style.display = "block";
          project4Aside.style.display = "block";
          break;
        case "RadioButton12-input":
          project4Image.style.filter = "none";
          project4DemoLabel.style.color = "purple";
          project4DemoContent.style.display = "block";
          project4Aside.style.display = "block";
          break;
    }
})