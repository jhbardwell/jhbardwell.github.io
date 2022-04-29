let projectDivs = document.getElementsByClassName("projectdivs")

let busybeesDiv = document.getElementById("busybees-div")
let journaltojsonDiv = document.getElementById("journaltojson-div")
let fiveminutefantasyDiv = document.getElementById("fiveminutefantasy-div")
let kanbanscriptoriumDiv = document.getElementById("kanbanscriptorium-div")
let portfoliowebpageDiv = document.getElementById("portfoliowebpage-div")


let projectImages = document.getElementsByClassName("projectimages")

let busybeesImage = document.getElementById("busybees-image")
let journaltojsonImage = document.getElementById("journaltojson-image")
let project3Image = document.getElementById("Narrative-Exploration-Program-image")
let project4Image = document.getElementById("Portfolio-Webpage-image")
let project5Image = document.getElementById("Kanban-Scriptorium-image")


let projectParagraphs = document.getElementsByClassName("projectparagraphs")

let busybeesParagraph = document.getElementById("busybees-paragraph")
let journaltojsonParagraph = document.getElementById("journaltojson-paragraph")
let fiveminutefantasyParagraph = document.getElementById("fiveminutefantasy-paragraph")
let portfoliowebpageParagraph = document.getElementById("portfoliowebpage-paragraph")
let projkanbanscriptoriumParagraph = document.getElementById("kanbanscriptorium-paragraph")


let projectLabels = document.getElementsByClassName("projectlabels")

let busybeesReadMeLabel = document.getElementById("busybees-readme-label") 
let journaltojsonReadMeLabel = document.getElementById("journaltojson-readme-label") 
let project3ReadMeLabel = document.getElementById("RadioButton11-label") 
let project4ReadMeLabel = document.getElementById("RadioButton16-label")
let project5ReadMeLabel = document.getElementById("RadioButton21-label") 

let busybeesDesignDocLabel = document.getElementById("busybees-designdoc-label")
let pjournaltojsonDesignDocLabel = document.getElementById("journaltojson-designdoc-label")
let project3DesignDocLabel = document.getElementById("RadioButton12-label")
let project4DesignDocLabel = document.getElementById("RadioButton17-label")
let project5DesignDocLabel = document.getElementById("RadioButton22-label")

let busybeesCodeLabel = document.getElementById("busybees-code-label")
let journaltojsonCodeLabel = document.getElementById("journaltojson-code-label")
let fiveminutefantasyCodeLabel = document.getElementById("fiveminutefantasy-code-label")

let busybeesKanbanLabel = document.getElementById("busybees-kanban-label")
let journaltojsonKanbanLabel = document.getElementById("journaltojson-kanban-label")
let project3KanbanLabel = document.getElementById("RadioButton13-label")
let project4KanbanLabel = document.getElementById("RadioButton18-label")
let project5KanbanLabel = document.getElementById("RadioButton23-label")

let busybeesDemoLabel = document.getElementById("busybees-demo-label")
let journaltojsonDemoLabel = document.getElementById("journaltojson-demo-label")
let project3DemoLabel = document.getElementById("RadioButton14-label")
let project4DemoLabel = document.getElementById("RadioButton19-label")
let project5DemoLabel = document.getElementById("RadioButton24-label")

let busybeesReportLabel = document.getElementById("busybees-report-label")
let journaltojsonReportLabel = document.getElementById("journaltojson-report-label")
let project3ReportLabel = document.getElementById("RadioButton15-label")
let project4ReportLabel = document.getElementById("RadioButton20-label")
let project5ReportLabel = document.getElementById("RadioButton25-label")

let projectContents = document.getElementsByClassName("projectcontents")

let busybeesReadMeContent = document.getElementById("busybees-readme-div")
let journaltojsonReadMeContent = document.getElementById("journaltojson-readme-div")
let project3ReadMeContent = document.getElementById("RadioButton11-div")
let project4ReadMeContent = document.getElementById("RadioButton16-div")
let project5ReadMeContent = document.getElementById("RadioButton21-div")

let busybeesDesignDocContent = document.getElementById("busybees-designdoc-div")
let journaltojsonDesignDocContent = document.getElementById("journaltojson-designdoc-div")
let project3DesignDocContent = document.getElementById("RadioButton12-div")
let project4DesignDocContent = document.getElementById("RadioButton17-div")
let project5DesignDocContent = document.getElementById("RadioButton22-div")

let busybeesCodeContent = document.getElementById("busybees-code-div")
let journaltojsonCodeContent = document.getElementById("journaltojson-code-div")
let fiveminutefantasyCodeContent = document.getElementById("fiveminutefantasy-code-div")

let busybeesKanbanContent = document.getElementById("busybees-kanban-div")
let journaltojsonKanbanContent = document.getElementById("journaltojson-kanban-div")
let project3KanbanContent = document.getElementById("RadioButton13-div")
let project4KanbanContent = document.getElementById("RadioButton18-div")
let project5KanbanContent = document.getElementById("RadioButton23-div")

let busybeesDemoContent = document.getElementById("busybees-demo-div")
let journaltojsonDemoContent = document.getElementById("journaltojson-demo-div")
let project3DemoContent = document.getElementById("RadioButton14-div")
let project4DemoContent = document.getElementById("RadioButton19-div")
let project5DemoContent = document.getElementById("RadioButton24-div")

let busybeesReportContent = document.getElementById("busybees-report-div")
let journaltojsonReportContent = document.getElementById("journaltojson-report-div")
let project3ReportContent = document.getElementById("RadioButton15-div")
let project4ReportContent = document.getElementById("RadioButton20-div")
let project5ReportContent = document.getElementById("RadioButton25-div")

let radiobuttons = document.getElementsByClassName("radiobuttons")

let resetAllProjects = function () {
  for (let i = 0; i < projectDivs.length; i++) {
    projectDivs[i].style.order = 1; 
  }
  for (let i = 0; i < projectImages.length; i++) {
    projectImages[i].style.filter = "sepia(1)"; 
  }
  for (let i = 0; i < projectParagraphs.length; i++) {
    projectLabels[i].style.color = "darkgray";  
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
        case "busybees-readme-input":
          busybeesDiv.style.order = -1;
          busybeesParagraph.style.color = "palegoldenrod";
          busybeesImage.style.filter = "none";
          busybeesReadMeLabel.style.color = "palegoldenrod";
          busybeesReadMeContent.style.display = "block";
          break;
        case "busybees-designdoc-input":
          busybeesDiv.style.order = -1;
          busybeesParagraph.style.color = "palegoldenrod";
          busybeesImage.style.filter = "none";
          busybeesDesignDocLabel.style.color = "palegoldenrod";
          busybeesDesignDocContent.style.display = "block";
          break;
        case "busybees-code-input":
          busybeesDiv.style.order = -1;
          busybeesParagraph.style.color = "palegoldenrod";
          busybeesImage.style.filter = "none";
          busybeesCodeLabel.style.color = "palegoldenrod";
          busybeesCodeContent.style.display = "block";
          break;
        case "busybees-kanban-input":
          busybeesDiv.style.order = -1;
          busybeesParagraph.style.color = "palegoldenrod";
          busybeesImage.style.filter = "none";
          busybeesKanbanLabel.style.color = "palegoldenrod";
          busybeesKanbanContent.style.display = "block";
          break;
        case "busybees-demo-input":
          busybeesDiv.style.order = -1;
          busybeesParagraph.style.color = "palegoldenrod";
          busybeesImage.style.filter = "none";
          busybeesDemoLabel.style.color = "palegoldenrod";
          busybeesDemoContent.style.display = "block";
          break;
        case "busybees-report-input":
          busybeesDiv.style.order = -1;
          busybeesParagraph.style.color = "palegoldenrod";
          busybeesImage.style.filter = "none";
          busybeesReportLabel.style.color = "palegoldenrod";
          busybeesReportContent.style.display = "block";
          break;
        case "journaltojson-readme-input":
          journaltojsonDiv.style.order = -1;
          journaltojsonParagraph.style.color = "lightblue";
          journaltojsonImage.style.filter = "none";
          journaltojsonReadMeLabel.style.color = "lightblue";
          journaltojsonReadMeContent.style.display = "block";
          break;
        case "journaltojson-designdoc-input":
          journaltojsonDiv.style.order = -1;
          journaltojsonParagraph.style.color = "lightblue";
          journaltojsonImage.style.filter = "none";
          journaltojsonDesignDocLabel.style.color = "lightblue";
          journaltojsonDesignDocContent.style.display = "block";
          break;
        case "journaltojson-code-input":
          journaltojsonDiv.style.order = -1;
          journaltojsonParagraph.style.color = "lightblue";
          journaltojsonImage.style.filter = "none";
          journaltojsonCodeLabel.style.color = "lightblue";
          journaltojsonCodeContent.style.display = "block";
          break;
        case "journaltojson-kanban-input":
          journaltojsonDiv.style.order = -1;
          journaltojsonParagraph.style.color = "lightblue";
          journaltojsonImage.style.filter = "none";
          journaltojsonKanbanLabel.style.color = "lightblue";
          journaltojsonKanbanContent.style.display = "block";
          break;
        case "journaltojson-demo-input":
          journaltojsonDiv.style.order = -1;
          journaltojsonParagraph.style.color = "lightblue";
          journaltojsonImage.style.filter = "none";
          journaltojsonDemoLabel.style.color = "lightblue";
          journaltojsonDemoContent.style.display = "block";
          break;
        case "journaltojson-report-input":
          journaltojsonDiv.style.order = -1;
          journaltojsonParagraph.style.color = "lightblue";
          journaltojsonImage.style.filter = "none";
          journaltojsonReportLabel.style.color = "lightblue";
          journaltojsonReportContent.style.display = "block";
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