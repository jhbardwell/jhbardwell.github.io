let projectImages = document.getElementsByClassName("projectimages")

let project1Image = document.getElementById("Newsletter-Concatenation-Program-image")
let project2Image = document.getElementById("Research-Data-Manager-Program-image")
let project3Image = document.getElementById("Narrative-Exploration-Program-image")
let project4Image = document.getElementById("Portfolio-Webpage-image")

let projectLabels = document.getElementsByClassName("projectlabels")

let project1ReadMeLabel = document.getElementById("RadioButton1-label") 
let project2ReadMeLabel = document.getElementById("RadioButton6-label") 
let project3ReadMeLabel = document.getElementById("RadioButton11-label") 
let project4ReadMeLabel = document.getElementById("RadioButton16-label") 

let project1DesignDocLabel = document.getElementById("RadioButton2-label")
let project2DesignDocLabel = document.getElementById("RadioButton7-label")
let project3DesignDocLabel = document.getElementById("RadioButton12-label")
let project4DesignDocLabel = document.getElementById("RadioButton17-label")

let project1KanbanLabel = document.getElementById("RadioButton3-label")
let project2KanbanLabel = document.getElementById("RadioButton8-label")
let project3KanbanLabel = document.getElementById("RadioButton13-label")
let project4KanbanLabel = document.getElementById("RadioButton18-label")

let project1DemoLabel = document.getElementById("RadioButton4-label")
let project2DemoLabel = document.getElementById("RadioButton9-label")
let project3DemoLabel = document.getElementById("RadioButton14-label")
let project4DemoLabel = document.getElementById("RadioButton19-label")

let project1ProgressLabel = document.getElementById("RadioButton5-label")
let project2ProgressLabel = document.getElementById("RadioButton10-label")
let project3ProgressLabel = document.getElementById("RadioButton15-label")
let project4ProgressLabel = document.getElementById("RadioButton20-label")

let projectContents = document.getElementsByClassName("contentdivs")

let project1ReadMeContent = document.getElementById("RadioButton1-div")
let project2ReadMeContent = document.getElementById("RadioButton6-div")
let project3ReadMeContent = document.getElementById("RadioButton11-div")
let project4ReadMeContent = document.getElementById("RadioButton16-div")

let project1DesignDocContent = document.getElementById("RadioButton2-div")
let project2DesignDocContent = document.getElementById("RadioButton7-div")
let project3DesignDocContent = document.getElementById("RadioButton12-div")
let project4DesignDocContent = document.getElementById("RadioButton17-div")

let project1KanbanContent = document.getElementById("RadioButton3-div")
let project2KanbanContent = document.getElementById("RadioButton8-div")
let project3KanbanContent = document.getElementById("RadioButton13-div")
let project4KanbanContent = document.getElementById("RadioButton18-div")

let project1DemoContent = document.getElementById("RadioButton4-div")
let project2DemoContent = document.getElementById("RadioButton9-div")
let project3DemoContent = document.getElementById("RadioButton14-div")
let project4DemoContent = document.getElementById("RadioButton19-div")

let project1ProgressContent = document.getElementById("RadioButton5-div")
let project2ProgressContent = document.getElementById("RadioButton10-div")
let project3ProgressContent = document.getElementById("RadioButton15-div")
let project4ProgressContent = document.getElementById("RadioButton20-div")

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
}

document.body.addEventListener("change", function (event) {
    resetAllProjects();
    switch (event.target.id) {
        case "RadioButton1-input":
          project1Image.style.filter = "none";
          project1ReadMeLabel.style.color = "palegoldenrod";
          project1ReadMeContent.style.display = "block";
          break;
        case "RadioButton2-input":
          project1Image.style.filter = "none";
          project1DesignDocLabel.style.color = "palegoldenrod";
          project1DesignDocContent.style.display = "block";
          break;
        case "RadioButton3-input":
          project1Image.style.filter = "none";
          project1KanbanLabel.style.color = "palegoldenrod";
          project1Kanban.style.display = "block";
          break;
        case "RadioButton4-input":
          project1Image.style.filter = "none";
          project1DemoLabel.style.color = "palegoldenrod";
          project1DemoContent.style.display = "block";
          break;
        case "RadioButton5-input":
          project1Image.style.filter = "none";
          project1ProgressLabel.style.color = "palegoldenrod";
          project1ProgressContent.style.display = "block";
          break;
        case "RadioButton6-input":
          project2Image.style.filter = "none";
          project2ReadMeLabel.style.color = "lightblue";
          project2ReadMeContent.style.display = "block";
          break;
        case "RadioButton7-input":
          project2Image.style.filter = "none";
          project2DesignDocLabel.style.color = "lightblue";
          project2DesignDocContent.style.display = "block";
          break;
        case "RadioButton8-input":
          project2Image.style.filter = "none";
          project2KanbanLabel.style.color = "lightblue";
          project2KanbanContent.style.display = "block";
          break;
        case "RadioButton9-input":
          project2Image.style.filter = "none";
          project2DemoLabel.style.color = "lightblue";
          project2DemoContent.style.display = "block";
          break;
        case "RadioButton10-input":
          project2Image.style.filter = "none";
          project2ProgressLabel.style.color = "lightblue";
          project2ProgressContent.style.display = "block";
          break;
        case "RadioButton11-input":
          project3Image.style.filter = "none";
          project3ReadMeLabel.style.color = "orange";
          project3ReadMeContent.style.display = "block";
          break;
        case "RadioButton12-input":
          project3Image.style.filter = "none";
          project3DesignDocLabel.style.color = "orange";
          project3DesignDocContent.style.display = "block";
          break;
        case "RadioButton13-input":
          project3Image.style.filter = "none";
          project3KanbanLabel.style.color = "orange";
          project3KanbanContent.style.display = "block";
          break;
        case "RadioButton14-input":
          project3Image.style.filter = "none";
          project3DemoLabel.style.color = "orange";
          project3DemoContent.style.display = "block";
          break;
        case "RadioButton15-input":
          project3Image.style.filter = "none";
          project3ProgressLabel.style.color = "orange";
          project3ProgressContent.style.display = "block";
          break;
        case "RadioButton16-input":
          project4Image.style.filter = "none";
          project4ReadMeLabel.style.color = "violet";
          project4ReadMeContent.style.display = "block";
          break;
        case "RadioButton17-input":
          project4Image.style.filter = "none";
          project4DesignDocLabel.style.color = "violet";
          project4DesignDocContent.style.display = "block";
          break;
        case "RadioButton18-input":
          project4Image.style.filter = "none";
          project4KanbanLabel.style.color = "violet";
          project4KanbanContent.style.display = "block";
          break;
        case "RadioButton19-input":
          project4Image.style.filter = "none";
          project4DemoLabel.style.color = "violet";
          project4DemoContent.style.display = "block";
          break;
        case "RadioButton20-input":
          project4Image.style.filter = "none";
          project4ProgressLabel.style.color = "violet";
          project4ProgressContent.style.display = "block";
            break;
    }
})