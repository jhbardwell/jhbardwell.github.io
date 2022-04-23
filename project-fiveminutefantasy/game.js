const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

let stateQuest = {};
let stateItem = { dragons: [], vials: [], weapons: [] };
let stateTime = {};

function startGame() {
  stateQuest = {};
  stateItem = {
    dragons: [],
    vials: [],
    weapons: [],
  };
  stateTime = timer();
  showSceneNode(1);
}

function endGame() {
  if (stateTime.advanceHourTally >= 45) {
    showSceneNode(999);
  }
}

function checkItems(stateItem, option) {
  for (let item in stateItem) {
    if (stateItem[item].indexOf(option) !== -1) return true;
  }
  return false;
}

function setItem(stateItem, option) {
  for (let item in option) {
    for (let subitem in option[item]) {
      if (option[item][subitem]) {
        stateItem[item].push(subitem);
      } else {
        const subItemIndex = stateItem[item].indexOf(subitem);
        if (subItemIndex > -1) stateItem[item].splice(subItemIndex, 1);
      }
    }
  }
}

function showSceneNode(sceneNodeIndex) {

  const sceneNode = sceneNodes.find(
    (sceneNode) => sceneNode.id === sceneNodeIndex
  );

  textElement.innerText = sceneNode.setText
    ? sceneNode.setText(stateQuest, stateItem)
    : sceneNode.text;

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  sceneNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("button");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
  if (sceneNode.background){
    backgroundImage = sceneNode.background
  }

  if (sceneNode.midground){
    midgroundImage = sceneNode.midground
  }

  if (sceneNode.foreground){
    foregroundImage = sceneNode.foreground
  }
}

function showOption(option) {
  let result = false;

  if (option.requiredStateItem) result = option.requiredStateItem(stateItem);

  if (option.requiredStateQuest) {
    result = option.requiredStateQuest(stateQuest);

    if (option.requiredStateItem) {
      result = result && option.requiredStateItem(stateItem);
    }
  }

  if (option.requiredStateItem == null && option.requiredStateQuest == null)
    result = true;

  return result;
}

function selectOption(option) {
  let nextSceneNodeId;

  if (typeof option.nextScene == "object") {
    const len = option.nextScene.length;
    const sceneIndex = Math.floor(Math.random() * len);
    nextSceneNodeId = option.nextScene[sceneIndex];
  } else {
    nextSceneNodeId = option.nextScene;
  }

  if (nextSceneNodeId <= 0) {
    return startGame();
  }

  if (option.setStateItem) option.setStateItem(stateItem);
  if (option.setStateQuest) {
    stateQuest = Object.assign(stateQuest, option.setStateQuest);
  }

  stateTime.advanceHour();

  endGame();
  showSceneNode(nextSceneNodeId);
}

startGame();
