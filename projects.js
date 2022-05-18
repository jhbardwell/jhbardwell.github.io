let projectDivs = document.getElementsByClassName("projectdivs")

let busybeesDiv = document.getElementById("busybees-div")
let journaltojsonDiv = document.getElementById("journaltojson-div")
let fiveminutefantasyDiv = document.getElementById("fiveminutefantasy-div")
let kanbanscriptoriumDiv = document.getElementById("kanbanscriptorium-div")
let blimpDiv = document.getElementById("blimp-div")
let portfoliowebpageDiv = document.getElementById("portfoliowebpage-div")


let projectImages = document.getElementsByClassName("projectimages")

let busybeesImage = document.getElementById("busybees-image")
let journaltojsonImage = document.getElementById("journaltojson-image")
let fiveminutefantasyImage = document.getElementById("fiveminutefantasy-image")
let blimpImage = document.getElementById("blimp-image")
let portfoliowebpageImage = document.getElementById("portfoliowebpage-image")
let kanbanscriptoriumImage = document.getElementById("kanbanscriptorium-image")


let projectParagraphs = document.getElementsByClassName("projectparagraphs")

let busybeesParagraph = document.getElementById("busybees-paragraph")
let journaltojsonParagraph = document.getElementById("journaltojson-paragraph")
let fiveminutefantasyParagraph = document.getElementById("fiveminutefantasy-paragraph")
let portfoliowebpageParagraph = document.getElementById("portfoliowebpage-paragraph")
let kanbanscriptoriumParagraph = document.getElementById("kanbanscriptorium-paragraph")
let blimpParagraph = document.getElementById("blimp-paragraph")

let projectLabels = document.getElementsByClassName("projectlabels")

let busybeesDesignLabel = document.getElementById("busybees-design-label")
let journaltojsonDesignLabel = document.getElementById("journaltojson-design-label")
let fiveminutefantasyDesignLabel = document.getElementById("fiveminutefantasy-design-label")
let kanbanscriptoriumDesignLabel = document.getElementById("kanbanscriptorium-design-label")
let portfoliowebpageDesignLabel = document.getElementById("portfoliowebpage-design-label")
let blimpDesignLabel = document.getElementById("blimp-design-label")

let busybeesCodeLabel = document.getElementById("busybees-code-label")
let journaltojsonCodeLabel = document.getElementById("journaltojson-code-label")
let fiveminutefantasyCodeLabel = document.getElementById("fiveminutefantasy-code-label")
let kanbanscriptoriumCodeLabel = document.getElementById("kanbanscriptorium-code-label")
let portfoliowebpageCodeLabel = document.getElementById("portfoliowebpage-code-label")
let blimpCodeLabel = document.getElementById("blimp-code-label")

let busybeesDemoLabel = document.getElementById("busybees-demo-label")
let journaltojsonDemoLabel = document.getElementById("journaltojson-demo-label")
let fiveminutefantasyDemoLabel = document.getElementById("fiveminutefantasy-demo-label")
let kanbanscriptoriumDemoLabel = document.getElementById("kanbanscriptorium-demo-label")
let portfoliowebpageDemoLabel = document.getElementById("portfoliowebpage-demo-label")
let blimpDemoLabel = document.getElementById("blimp-demo-label")

let projectContents = document.getElementsByClassName("projectcontents")

let busybeesContent = document.getElementById("busybees-content-div")
let journaltojsonContent = document.getElementById("journaltojson-content-div")
let fiveminutefantasyContent = document.getElementById("fiveminutefantasy-content-div")
let kanbanscriptoriumContent = document.getElementById("kanbanscriptorium-content-div")
let portfoliowebpageContent = document.getElementById("portfoliowebpage-content-div")
let blimpContent = document.getElementById("blimp-content-div")

let radiobuttons = document.getElementsByClassName("radiobuttons")

let resetAllProjects = function () {
  for (let i = 0; i < projectDivs.length; i++) {
    projectDivs[i].style.order = 1; 
  }
  for (let i = 0; i < projectImages.length; i++) {
    projectImages[i].style.filter = "sepia(1)"; 
  }
  for (let i = 0; i < projectParagraphs.length; i++) {
    projectParagraphs[i].style.color = "darkgray";  
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
        case "busybees-design-input":
          busybeesDiv.style.order = -1;
          busybeesImage.style.filter = "none";
          busybeesParagraph.style.color = "palegoldenrod";
          busybeesDesignLabel.style.color = "palegoldenrod";
          busybeesContent.style.display = "block";
          window.open("https://jhbardwell.github.io/project-busybees/project-data/designdoc.html", "_blank");
          break;
        case "busybees-code-input":
          busybeesDiv.style.order = -1;
          busybeesImage.style.filter = "none";
          busybeesParagraph.style.color = "palegoldenrod";
          busybeesCodeLabel.style.color = "palegoldenrod";
          busybeesContent.style.display = "block";
          window.open("https://github.com/jhbardwell/Newsletter-Concatenation-Program", "_blank");
          break;
        case "busybees-demo-input":
          busybeesDiv.style.order = -1;
          busybeesImage.style.filter = "none";
          busybeesParagraph.style.color = "palegoldenrod";
          busybeesDemoLabel.style.color = "palegoldenrod";
          busybeesContent.style.display = "block";
          window.open("https://jhbardwell.github.io/project-busybees/index.html", "_blank");
          break;
        case "journaltojson-design-input":
          journaltojsonDiv.style.order = -1;
          journaltojsonImage.style.filter = "none";
          journaltojsonParagraph.style.color = "lightblue";
          journaltojsonDesignLabel.style.color = "lightblue";
          journaltojsonContent.style.display = "block";
          window.open("https://jhbardwell.github.io/project-journaltojson/project-data/designdoc.html", "_blank");
          break;
        case "journaltojson-code-input":
          journaltojsonDiv.style.order = -1;
          journaltojsonImage.style.filter = "none";
          journaltojsonParagraph.style.color = "lightblue";
          journaltojsonCodeLabel.style.color = "lightblue";
          journaltojsonContent.style.display = "block";
          window.open("https://github.com/jhbardwell/Research-Data-Manager-Program", "_blank");
          break;
        case "journaltojson-demo-input":
          journaltojsonDiv.style.order = -1;
          journaltojsonParagraph.style.color = "lightblue";
          journaltojsonImage.style.filter = "none";
          journaltojsonDemoLabel.style.color = "lightblue";
          journaltojsonDemoContent.style.display = "block";
          break;
        case "fiveminutefantasy-design-input":
          fiveminutefantasyDiv.style.order = -1;
          fiveminutefantasyImage.style.filter = "none";
          fiveminutefantasyParagraph.style.color = "orange";
          fiveminutefantasyDesignLabel.style.color = "orange";
          fiveminutefantasyContent.style.display = "block";
          window.open("https://jhbardwell.github.io/project-fiveminutefantasy/project-data/designdoc.html", "_blank");
          break;
        case "fiveminutefantasy-code-input":
          fiveminutefantasyDiv.style.order = -1;
          fiveminutefantasyImage.style.filter = "none";
          fiveminutefantasyParagraph.style.color = "orange";
          fiveminutefantasyCodeLabel.style.color = "orange";
          fiveminutefantasyContent.style.display = "block";
          window.open("https://github.com/jhbardwell/Narrative-Exploration-Program", "_blank");
          break;
        case "fiveminutefantasy-demo-input":
          fiveminutefantasyDiv.style.order = -1;
          fiveminutefantasyImage.style.filter = "none";
          fiveminutefantasyParagraph.style.color = "orange";
          fiveminutefantasyDemoLabel.style.color = "orange";
          fiveminutefantasyContent.style.display = "block";
          window.open("https://jhbardwell.github.io/project-fiveminutefantasy/index.html", "_blank");
          break;
        case "portfoliowebpage-design-input":
          portfoliowebpageImage.style.filter = "none";
          portfoliowebpageDiv.style.order = -1;
          portfoliowebpageParagraph.style.color = "violet";
          portfoliowebpageDesignLabel.style.color = "violet";
          portfoliowebpageContent.style.display = "block";
          window.open("https://jhbardwell.github.io/project-portfoliowebpage/project-data/designdoc.html", "_blank");
          break;
        case "portfoliowebpage-code-input":
          portfoliowebpageDiv.style.order = -1;
          portfoliowebpageImage.style.filter = "none";
          portfoliowebpageParagraph.style.color = "violet";
          portfoliowebpageCodeLabel.style.color = "violet";
          portfoliowebpageContent.style.display = "block";
          window.open("https://github.com/jhbardwell/jhbardwell.github.io", "_blank");
          break;
        case "portfoliowebpage-demo-input":
          portfoliowebpageDiv.style.order = -1;
          portfoliowebpageImage.style.filter = "none";
          portfoliowebpageParagraph.style.color = "violet";
          portfoliowebpageDemoLabel.style.color = "violet";
          portfoliowebpageContent.style.display = "block";
          window.open("https://jhbardwell.github.io/", "_blank");
          break;
        case "kanbanscriptorium-design-input":
          kanbanscriptoriumDiv.style.order = -1;
          kanbanscriptoriumImage.style.filter = "none";
          kanbanscriptoriumParagraph.style.color = "indianred";
          kanbanscriptoriumDesignLabel.style.color = "indianred";
          kanbanscriptoriumContent.style.display = "block";
          window.open("https://jhbardwell.github.io/project-kanbanscriptorium/project-data/designdoc.html", "_blank");
          break;
        case "kanbanscriptorium-code-input":
          kanbanscriptoriumDiv.style.order = -1;
          kanbanscriptoriumImage.style.filter = "none";
          kanbanscriptoriumParagraph.style.color = "indianred";
          kanbanscriptoriumCodeLabel.style.color = "indianred";
          kanbanscriptoriumContent.style.display = "block";
          window.open("https://github.com/jhbardwell/Kanban-Development-Program", "_blank");
          break;
        case "kanbanscriptorium-demo-input":
          kanbanscriptoriumDiv.style.order = -1;
          kanbanscriptoriumImage.style.filter = "none";
          kanbanscriptoriumParagraph.style.color = "indianred";
          kanbanscriptoriumDemoLabel.style.color = "indianred";
          kanbanscriptoriumContent.style.display = "block";
          window.open("https://jhbardwell.github.io/project-kanbanscriptorium/index.html", "_blank");
          break;
        case "blimp-design-input":
          blimpDiv.style.order = -1;
          blimpImage.style.filter = "none";
          blimpParagraph.style.color = "lime";
          blimpDesignLabel.style.color = "lime";
          blimpContent.style.display = "block";
          window.open("https://jhbardwell.github.io/project-blimp/project-data/designdoc.html", "_blank");
          break;
        case "blimp-code-input":
          blimpDiv.style.order = -1;
          blimpImage.style.filter = "none";
          blimpParagraph.style.color = "lime";
          blimpCodeLabel.style.color = "lime";
          blimpContent.style.display = "block";
          window.open("https://github.com/jhbardwell/Bacteria-Lot-Identification-Matrix-Program", "_blank");
          break;
        case "blimp-demo-input":
          blimpDiv.style.order = -1;
          blimpImage.style.filter = "none";
          blimpParagraph.style.color = "lime";
          blimpDemoLabel.style.color = "lime";
          blimpContent.style.display = "block";
          window.open("https://jhbardwell.github.io/project-blimp/index.html", "_blank");
          break;
    }
})