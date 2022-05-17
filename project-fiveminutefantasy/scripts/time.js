import assets from "./load.js";
import { stateTime, currentNode } from "./game.js";

function randomNumberArray(arr) {
  return Math.floor(Math.random() * (arr[arr.length - 1] + arr[0])) - arr[0];
}

function range(start, stop, step) {
  const length = (stop - start) / step + 1;
  return Array.from({ length }, (_, i) => start + i * step);
}

const hourRange = range(1, 24, 1);
const dayRange = range(1, 364, 1);

const timeState = {
  advanceHourTally: 0,
  currentHour: randomNumberArray(hourRange),
  currentDay: randomNumberArray(dayRange),
};

function advanceHour() {
  if (timeState.currentHour >= 24) {
    timeState.currentHour = 1;
  } else {
    timeState.currentHour += 1;
    advanceDay();
  }

  timeState.advanceHourTally += 1;
}

function advanceDay() {
  if (timeState.currentHour == 1) {
    timeState.currentDay += 1;
  }
}

function skyImageSelect() {
  if (!stateTime.timeState) return;
  const { currentHour } = stateTime.timeState;

  if (currentHour >= 22 && currentHour <= 3) return assets.SkyAlpha;
  else if (currentHour == 4 || currentHour == 21) return assets.SkyBeta;
  else if (currentHour == 5 || currentHour == 20) return assets.SkyCharlie;
  else if (currentHour == 6 || currentHour == 19) return assets.SkyDelta;
  else if (currentHour == 7 || currentHour == 18) return assets.SkyEpsilon;
  else if (currentHour == 8 || currentHour == 17) return assets.SkyFoxtrot;
  else if (currentHour >= 9 && currentHour <= 16) return assets.SkyAlpha;
}

const timer = function () {
  advanceHour();
  currentNode.skyImage = skyImageSelect();

  return {
    timeState,
    advanceHour,
  };
};

export { timeState, skyImageSelect, timer };
