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

function skyImageSelect(){
  if (stateTime.currentHour >= 22 && stateTime.currentHour <= 3)
    skyImage == SkyAlpha;
  else if (stateTime.currentHour == 4 || stateTime.currentHour == 21)
    skyImage == SkyBeta;
  else if (stateTime.currentHour == 5 || stateTime.currentHour == 20)
    skyImage == SkyCharlie;
  else if (stateTime.currentHour == 6  || stateTime.currentHour == 19)
    skyImage == SkyDelta;
  else if (stateTime.currentHour == 7 || stateTime.currentHour == 18)
    skyImage == SkyEpsilon;
  else if (stateTime.currentHour == 8 || stateTime.currentHour == 17)
    skyImage == SkyFoxtrot;
  else if (stateTime.currentHour >= 9 && stateTime.currentHour <= 16)
    skyImage == SkyAlpha;
}

const timer = function(){
  advanceHour();
  skyImageSelect();

  return {
    timeState,
    advanceHour,
  };
  
  
};
