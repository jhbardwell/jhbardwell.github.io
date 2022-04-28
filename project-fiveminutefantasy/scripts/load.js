const imageList = {
  ForestIdyll: "/assets/images/forest-idyll.png",
  ForestRobbery: "/assets/images/forest-robbery.png",
  HouseWall: "/assets/images/house-wall.png",
  BluevialBroken: "/assets/images/bluevial-broken.png",
  BluevialDropped: "/assets/images/bluevial-dropped.png",
  BluevialRaised: "/assets/images/bluevial-raised.png",
  BluevialSelected: "/assets/images/bluevial-selected.png",
  GameDefeat: "/assets/images/game-defeat.png",
  GameVictory: "/assets/images/game-victory.png",
  GreenvialBroken: "/assets/images/greenvial-broken.png",
  GreenvialRaised: "/assets/images/greenvial-raised.png",
  GreenvialSelected: "/assets/images/greenvial-selected-removebg-preview.png",
  NonevialSelected: "/assets/images/nonevial-selected.png",
  RedvialBroken: "/assets/images/redvial-broken.png",
  RedvialDropped: "/assets/images/redvial-dropped.png",
  RedvialRaised: "/assets/images/redvial-raised.png",
  RedvialSelected: "/assets/images/redvial-selected.png",
  FirebladeBad: "/assets/images/fireblade-bad.png",
  FirebladeGood: "/assets/images/fireblade-good.png",
  FirebladeNeutral: "/assets/images/fireblade-neutral.png",
  FiredragonAngry: "/assets/images/firedragon-angry.png",
  FiredragonNeutral: "/assets/images/firedragon-neutral.png",
  FiredragonHappy: "/assets/images/firedragon-happy.png",
  RobberAfraid: "/assets/images/robber-afraid.png",
  RobberAttack: "/assets/images/robber-attack.png",
  RobberButcher: "/assets/images/robber-butcher.png",
  RobberDuel: "/assets/images/robber-duel.png",
  RobberPlacate: "/assets/images/robber-placate.png",
  RobberSolicit: "/assets/images/robber-solicit.png",
  VinebladeBad: "/assets/images/vineblade-bad.png",
  VinebladeGood: "/assets/images/vineblade-good.png",
  VinebladeNeutral: "/assets/images/vineblade-neutral.png",
  VinedragonAngry: "/assets/images/vinedragon-angry.png",
  VinedragonHappy: "/assets/images/vinedragon-happy.png",
  VinedragonNeutral: "/assets/images/vinedragon-neutral.png",
  WaterbladeBad: "/assets/images/waterblade-bad.png",
  WaterbladeGood: "/assets/images/waterblade-good.png",
  WaterbladeNeutral: "/assets/images/waterblade-neutral.png",
  WaterdragonAngry: "/assets/images/waterdragon-angry.png",
  WaterdragonHappy: "/assets/images/waterdragon-happy.png",
  WaterdragonNeutral: "/assets/images/waterdragon-neutral.png",
  SkyAlpha: "/assets/images/sky-alpha.png",
  SkyBeta: "/assets/images/sky-beta.png",
  SkyCharlie: "/assets/images/sky-charlie.png",
  SkyDelta: "/assets/images/sky-delta.png",
  SkyEpsilon: "/assets/images/sky-epsilon.png",
  SkyFoxtrot: "/assets/images/sky-foxtrot.png",
  SkyGamma: "/assets/images/sky-gamma.png",
};

const assets = {};
let preloadImages = function () {
  for (const img in imageList) {
    let imageObject = new Image();
    imageObject.src = imageList[img];
    assets[img] = imageObject;
  }
};

preloadImages();

export default assets;
