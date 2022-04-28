let projectDivs = document.getElementsByClassName("projectdivs")

let busybeesDiv = document.getElementById("busybees-div")
let journaltojsonDiv = document.getElementById("journaltojson-div")
let fiveminutefantasyDiv = document.getElementById("fiveminutefantasy-div")
let kanbanscriptoriumDiv = document.getElementById("kanbanscriptorium-div")
let portfoliowebpageDiv = document.getElementById("portfoliowebpage-div")


let projectImages = document.getElementsByClassName("projectimages")

let busybeesImage = document.getElementById("Newsletter-Concatenation-Program-image")
let project2Image = document.getElementById("Research-Data-Manager-Program-image")
let project3Image = document.getElementById("Narrative-Exploration-Program-image")
let project4Image = document.getElementById("Portfolio-Webpage-image")
let project5Image = document.getElementById("Kanban-Scriptorium-image")


let projectLabels = document.getElementsByClassName("projectlabels")

let busybeesReadMeLabel = document.getElementById("RadioButton1-label") 
let project2ReadMeLabel = document.getElementById("RadioButton6-label") 
let project3ReadMeLabel = document.getElementById("RadioButton11-label") 
let project4ReadMeLabel = document.getElementById("RadioButton16-label")
let project5ReadMeLabel = document.getElementById("RadioButton21-label") 

let busybeesDesignDocLabel = document.getElementById("RadioButton2-label")
let project2DesignDocLabel = document.getElementById("RadioButton7-label")
let project3DesignDocLabel = document.getElementById("RadioButton12-label")
let project4DesignDocLabel = document.getElementById("RadioButton17-label")
let project5DesignDocLabel = document.getElementById("RadioButton22-label")

let busybeesKanbanLabel = document.getElementById("RadioButton3-label")
let project2KanbanLabel = document.getElementById("RadioButton8-label")
let project3KanbanLabel = document.getElementById("RadioButton13-label")
let project4KanbanLabel = document.getElementById("RadioButton18-label")
let project5KanbanLabel = document.getElementById("RadioButton23-label")

let busybeesDemoLabel = document.getElementById("RadioButton4-label")
let project2DemoLabel = document.getElementById("RadioButton9-label")
let project3DemoLabel = document.getElementById("RadioButton14-label")
let project4DemoLabel = document.getElementById("RadioButton19-label")
let project5DemoLabel = document.getElementById("RadioButton24-label")

let busybeesProgressLabel = document.getElementById("RadioButton5-label")
let project2ProgressLabel = document.getElementById("RadioButton10-label")
let project3ProgressLabel = document.getElementById("RadioButton15-label")
let project4ProgressLabel = document.getElementById("RadioButton20-label")
let project5ProgressLabel = document.getElementById("RadioButton25-label")

let projectContents = document.getElementsByClassName("contentdivs")

let busybeesReadMeContent = document.getElementById("RadioButton1-div")
let project2ReadMeContent = document.getElementById("RadioButton6-div")
let project3ReadMeContent = document.getElementById("RadioButton11-div")
let project4ReadMeContent = document.getElementById("RadioButton16-div")
let project5ReadMeContent = document.getElementById("RadioButton21-div")

let busybeesDesignDocContent = document.getElementById("RadioButton2-div")
let project2DesignDocContent = document.getElementById("RadioButton7-div")
let project3DesignDocContent = document.getElementById("RadioButton12-div")
let project4DesignDocContent = document.getElementById("RadioButton17-div")
let project5DesignDocContent = document.getElementById("RadioButton22-div")

let busybeesKanbanContent = document.getElementById("RadioButton3-div")
let project2KanbanContent = document.getElementById("RadioButton8-div")
let project3KanbanContent = document.getElementById("RadioButton13-div")
let project4KanbanContent = document.getElementById("RadioButton18-div")
let project5KanbanContent = document.getElementById("RadioButton23-div")

let busybeesDemoContent = document.getElementById("RadioButton4-div")
let project2DemoContent = document.getElementById("RadioButton9-div")
let project3DemoContent = document.getElementById("RadioButton14-div")
let project4DemoContent = document.getElementById("RadioButton19-div")
let project5DemoContent = document.getElementById("RadioButton24-div")

let busybeesProgressContent = document.getElementById("RadioButton5-div")
let project2ProgressContent = document.getElementById("RadioButton10-div")
let project3ProgressContent = document.getElementById("RadioButton15-div")
let project4ProgressContent = document.getElementById("RadioButton20-div")
let project5ProgressContent = document.getElementById("RadioButton25-div")

let radiobuttons = document.getElementsByClassName("radiobuttons")

let resetAllProjects = function () {
  for (let i = 0; i < projectDivs.length; i++) {
    projectDivs[i].style.order = 1; 
  }
  
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

let scrollTopScreen = function () {
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
}

document.body.addEventListener("change", function (event) {
    resetAllProjects();
    scrollTopScreen();
    switch (event.target.id) {
        case "RadioButton1-input":
          busybeesDiv.style.order = -1;
          busybeesImage.style.filter = "none";
          busybeesReadMeLabel.style.color = "palegoldenrod";
          busybeesReadMeContent.style.display = "block";
          break;
        case "RadioButton2-input":
          busybeesDiv.style.order = -1;
          busybeesImage.style.filter = "none";
          busybeesDesignDocLabel.style.color = "palegoldenrod";
          busybeesDesignDocContent.style.display = "block";
          break;
        case "RadioButton3-input":
          busybeesDiv.style.order = -1;
          busybeesImage.style.filter = "none";
          busybeesKanbanLabel.style.color = "palegoldenrod";
          busybeesKanban.style.display = "block";
          break;
        case "RadioButton4-input":
          busybeesDiv.style.order = -1;
          busybeesImage.style.filter = "none";
          busybeesDemoLabel.style.color = "palegoldenrod";
          busybeesDemoContent.style.display = "block";
          break;
        case "RadioButton5-input":
          busybeesDiv.style.order = -1;
          busybeesImage.style.filter = "none";
          busybeesProgressLabel.style.color = "palegoldenrod";
          busybeesProgressContent.style.display = "block";
          break;
        case "RadioButton6-input":
          journaltojsonDiv.style.order = -1;
          project2Image.style.filter = "none";
          project2ReadMeLabel.style.color = "lightblue";
          project2ReadMeContent.style.display = "block";
          break;
        case "RadioButton7-input":
          journaltojsonDiv.style.order = -1;
          project2Image.style.filter = "none";
          project2DesignDocLabel.style.color = "lightblue";
          project2DesignDocContent.style.display = "block";
          break;
        case "RadioButton8-input":
          journaltojsonDiv.style.order = -1;
          project2Image.style.filter = "none";
          project2KanbanLabel.style.color = "lightblue";
          project2KanbanContent.style.display = "block";
          break;
        case "RadioButton9-input":
          journaltojsonDiv.style.order = -1;
          project2Image.style.filter = "none";
          project2DemoLabel.style.color = "lightblue";
          project2DemoContent.style.display = "block";
          break;
        case "RadioButton10-input":
          journaltojsonDiv.style.order = -1;
          project2Image.style.filter = "none";
          project2ProgressLabel.style.color = "lightblue";
          project2ProgressContent.style.display = "block";
          break;
        case "RadioButton11-input":
          fiveminutefantasyDiv.style.order = -1;
          project3Image.style.filter = "none";
          project3ReadMeLabel.style.color = "orange";
          project3ReadMeContent.style.display = "block";
          break;
        case "RadioButton12-input":
          fiveminutefantasyDiv.style.order = -1;
          project3Image.style.filter = "none";
          project3DesignDocLabel.style.color = "orange";
          project3DesignDocContent.style.display = "block";
          break;
        case "RadioButton13-input":
          fiveminutefantasyDiv.style.order = -1;
          project3Image.style.filter = "none";
          project3KanbanLabel.style.color = "orange";
          project3KanbanContent.style.display = "block";
          break;
        case "RadioButton14-input":
          fiveminutefantasyDiv.style.order = -1;
          project3Image.style.filter = "none";
          project3DemoLabel.style.color = "orange";
          project3DemoContent.style.display = "block";
          break;
        case "RadioButton15-input":
          fiveminutefantasyDiv.style.order = -1;
          project3Image.style.filter = "none";
          project3ProgressLabel.style.color = "orange";
          project3ProgressContent.style.display = "block";
          break;
        case "RadioButton16-input":
          portfoliowebpageDiv.style.order = -1;
          project4Image.style.filter = "none";
          project4ReadMeLabel.style.color = "violet";
          project4ReadMeContent.style.display = "block";
          break;
        case "RadioButton17-input":
          portfoliowebpageDiv.style.order = -1;
          project4Image.style.filter = "none";
          project4DesignDocLabel.style.color = "violet";
          project4DesignDocContent.style.display = "block";
          break;
        case "RadioButton18-input":
          portfoliowebpageDiv.style.order = -1;
          project4Image.style.filter = "none";
          project4KanbanLabel.style.color = "violet";
          project4KanbanContent.style.display = "block";
          break;
        case "RadioButton19-input":
          portfoliowebpageDiv.style.order = -1;
          project4Image.style.filter = "none";
          project4DemoLabel.style.color = "violet";
          project4DemoContent.style.display = "block";
          break;
        case "RadioButton20-input":
          portfoliowebpageDiv.style.order = -1;
          project4Image.style.filter = "none";
          project4ProgressLabel.style.color = "violet";
          project4ProgressContent.style.display = "block";
            break;
        case "RadioButton21-input":
          kanbanscriptoriumDiv.style.order = -1;
          project5Image.style.filter = "none";
          project5ReadMeLabel.style.color = "indianred";
          project5ReadMeContent.style.display = "block";
          break;
        case "RadioButton22-input":
          kanbanscriptoriumDiv.style.order = -1;
          project5Image.style.filter = "none";
          project5DesignDocLabel.style.color = "indianred";
          project5DesignDocContent.style.display = "block";
          break;
        case "RadioButton23-input":
          kanbanscriptoriumDiv.style.order = -1;
          project5Image.style.filter = "none";
          project5KanbanLabel.style.color = "indianred";
          project5KanbanContent.style.display = "block";
          break;
        case "RadioButton24-input":
          kanbanscriptoriumDiv.style.order = -1;
          project5Image.style.filter = "none";
          project5DemoLabel.style.color = "indianred";
          project5DemoContent.style.display = "block";
          break;
        case "RadioButton25-input":
          kanbanscriptoriumDiv.style.order = -1;
          project5Image.style.filter = "none";
          project5ProgressLabel.style.color = "indianred";
          project5ProgressContent.style.display = "block";
          break;
    }
})