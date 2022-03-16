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
