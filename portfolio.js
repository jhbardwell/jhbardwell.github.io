let formLabel = document.getElementById("Form-label")

let project1Image = document.getElementById("Newsletter-Concatenation-Program-image")
let project2Image = document.getElementById("Research-Data-Manager-Program-image")
let project3Image = document.getElementById("Fantasy-Narrative-Program-image")

let project1SystemContent = document.getElementById("GroupName1Div")
let project1TimelineContent = document.getElementById("GroupName2Div")
let project1DemoContent = document.getElementById("GroupName3Div")
let project2SystemContent = document.getElementById("GroupName4Div")
let project2TimelineContent = document.getElementById("GroupName5Div")
let project2DemoContent = document.getElementById("GroupName6Div")
let project3SystemContent = document.getElementById("GroupName7Div")
let project3TimelineContent = document.getElementById("GroupName8Div")
let project3DemoContent = document.getElementById("GroupName9Div")

let project1Aside = document.getElementById("Project1Div")
let project2Aside = document.getElementById("Project2Div")
let project3Aside = document.getElementById("Project3Div")

function ShowRadioButtonDiv (IdBaseName, NumberOfButtons) {
    for (x=1;x<=NumberOfButtons;x++) {
        CheckThisButton = IdBaseName + x;
        ThisDiv = IdBaseName + x +'Div';
    if (document.getElementById(CheckThisButton).checked) {
        document.getElementById(ThisDiv).style.display = "block";
        }
    else {
        document.getElementById(ThisDiv).style.display = "none";
        }
    }
    return false;
}

function ShowAndHide() {
    var x = document.getElementById('SectionName');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
