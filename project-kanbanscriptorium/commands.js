const boardsCommandList = {
    addBoard: function(){ },
    addBoardName: function(){ },
    addCompletionStage: function(){ }, 
    addPriorityStage: function(){ },
    addTaskCategory: function(){ }, 
    deleteBoard: function(){ },
    deleteBoardName: function(){ }, 
    deleteCompletionStage: function(){ },
    deletePriorityStage: function(){ },
    deleteTaskCategory: function(){ },
};

const cardsCommandList = {
    addCard: function(){ },
    addCardName: function(){ },
    addCategory: function(){ },
    addContributor: function(){ },
    addDeadline: function(){ },
    addLead: function(){ },
    addTask: function(){ },
    addTitle: function(){ },
    burnCard: function(){ },
    checkTask: function(){ },
    deleteCard: function(){ },
    deleteCardName: function(){ },
    deleteCategory: function(){ },
    deleteContributor: function(){ },
    deleteDeadline: function(){ },
    deleteLead: function(){ },
    deleteTask: function(){ },
    deleteTitle: function(){ },
    lockCard: function(){ },
    moveCardLeft: function(){ },
    moveCardRight: function(){ },
    unburnCard: function(){ },
    uncheckTask: function(){ },
    unlockCard: function(){ },
};

const initializeCommandList = {
    checkThemes: function(){
        if(localStorage.getItem('theme') != null){
            document.documentElement.className = "";
            document.documentElement.classList.add(localStorage.getItem('theme'));
        } 
        if(localStorage.getItem('theme')=='bloodandink-theme'){
            document.getElementById('bloodandink-theme-input').checked=true;
        }  
        if(localStorage.getItem('theme')=='sherwoodforest-theme'){
            document.getElementById('sherwoodforest-theme-input').checked=true;
        }
        if(localStorage.getItem('theme')=='chessmatch-theme'){
            document.getElementById('chessmatch-theme-input').checked=true;
        }
    },
    checkFonts: function(){
        if(localStorage.getItem('--primary-font-family') != null){
            document.documentElement.style.setProperty('--primary-font-family', localStorage.getItem('--primary-font-family'));
        } 
        if(localStorage.getItem('--primary-font-family')=='devinneswash'){
            document.getElementById('devinneswash-font-input').checked=true;
        } 
        if(localStorage.getItem('--primary-font-family')=='sanserif'){
            document.getElementById('sanserif-font-input').checked=true;
        }
    },
};

const settingsCommandList = {
    activateBloodAndInkTheme: function(){
        document.documentElement.className = "";
        document.documentElement.classList.add('bloodandink-theme');
        localStorage.setItem('theme', 'bloodandink-theme');
    },
    activateSherwoodForestTheme: function(){
        document.documentElement.className = "";
        document.documentElement.classList.add('sherwoodforest-theme');
        localStorage.setItem('theme', 'sherwoodforest-theme');
    },
    activateChessMatchTheme: function(){
        document.documentElement.className = "";
        document.documentElement.classList.add('chessmatch-theme');
        localStorage.setItem('theme', 'chessmatch-theme');
    },
    activateDevinneSwashFont: function(){
        document.documentElement.style.setProperty('--primary-font-family', 'devinneswash');
        localStorage.setItem('--primary-font-family', 'devinneswash');
    },
    activateSanSerifFont: function(){
        document.documentElement.style.setProperty('--primary-font-family', 'sanserif');
        localStorage.setItem('--primary-font-family', 'sanserif');
    },
};

const statesCommandList = {
    enterCreditsState: function() {window.location.href = "/creditsstate.html";},
    enterInstructionsState: function() {window.location.href = "/instructionsstate.html";},
    enterLoadBoardState: function() {window.location.href = "/loadboardstate.html";},
    enterMainMenuState: function() {window.location.href = "/index.html";},
    enterNewBoardState: function() {window.location.href = "/newboardstate.html";},
    enterSettingsState: function() {window.location.href = "/settingsstate.html";},
};

export {
    boardsCommandList,
    cardsCommandList,
    initializeCommandList,
    settingsCommandList,
    statesCommandList,
};