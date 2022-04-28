const imageList = {
  ForestIdyll: "/project-fiveminutefantasy/assets/images/forest-idyll.png",
  ForestRobbery: "/project-fiveminutefantasy/assets/images/forest-robbery.png",
  HouseWall: "/project-fiveminutefantasy/assets/images/house-wall.png",
  BluevialBroken: "/project-fiveminutefantasy/assets/images/bluevial-broken.png",
  BluevialDropped: "/project-fiveminutefantasy/assets/images/bluevial-dropped.png",
  BluevialRaised: "/project-fiveminutefantasy/assets/images/bluevial-raised.png",
  BluevialSelected: "/project-fiveminutefantasy/assets/images/bluevial-selected.png",
  GameDefeat: "/project-fiveminutefantasy/assets/images/game-defeat.png",
  GameVictory: "/project-fiveminutefantasy/assets/images/game-victory.png",
  GreenvialBroken: "/project-fiveminutefantasy/assets/images/greenvial-broken.png",
  GreenvialRaised: "/project-fiveminutefantasy/assets/images/greenvial-raised.png",
  GreenvialSelected: "/project-fiveminutefantasy/assets/images/greenvial-selected-removebg-preview.png",
  NonevialSelected: "/project-fiveminutefantasy/assets/images/nonevial-selected.png",
  RedvialBroken: "/project-fiveminutefantasy/assets/images/redvial-broken.png",
  RedvialDropped: "/project-fiveminutefantasy/assets/images/redvial-dropped.png",
  RedvialRaised: "/project-fiveminutefantasy/assets/images/redvial-raised.png",
  RedvialSelected: "/project-fiveminutefantasy/assets/images/redvial-selected.png",
  FirebladeBad: "/project-fiveminutefantasy/assets/images/fireblade-bad.png",
  FirebladeGood: "/project-fiveminutefantasy/assets/images/fireblade-good.png",
  FirebladeNeutral: "/project-fiveminutefantasy/assets/images/fireblade-neutral.png",
  FiredragonAngry: "/project-fiveminutefantasy/assets/images/firedragon-angry.png",
  FiredragonNeutral: "/project-fiveminutefantasy/assets/images/firedragon-neutral.png",
  FiredragonHappy: "/project-fiveminutefantasy/assets/images/firedragon-happy.png",
  RobberAfraid: "/project-fiveminutefantasy/assets/images/robber-afraid.png",
  RobberAttack: "/project-fiveminutefantasy/assets/images/robber-attack.png",
  RobberButcher: "/project-fiveminutefantasy/assets/images/robber-butcher.png",
  RobberDuel: "/project-fiveminutefantasy/assets/images/robber-duel.png",
  RobberPlacate: "/project-fiveminutefantasy/assets/images/robber-placate.png",
  RobberSolicit: "/project-fiveminutefantasy/assets/images/robber-solicit.png",
  VinebladeBad: "/project-fiveminutefantasy/assets/images/vineblade-bad.png",
  VinebladeGood: "/project-fiveminutefantasy/assets/images/vineblade-good.png",
  VinebladeNeutral: "/project-fiveminutefantasy/assets/images/vineblade-neutral.png",
  VinedragonAngry: "/project-fiveminutefantasy/assets/images/vinedragon-angry.png",
  VinedragonHappy: "/project-fiveminutefantasy/assets/images/vinedragon-happy.png",
  VinedragonNeutral: "/project-fiveminutefantasy/assets/images/vinedragon-neutral.png",
  WaterbladeBad: "/project-fiveminutefantasy/assets/images/waterblade-bad.png",
  WaterbladeGood: "/project-fiveminutefantasy/assets/images/waterblade-good.png",
  WaterbladeNeutral: "/project-fiveminutefantasy/assets/images/waterblade-neutral.png",
  WaterdragonAngry: "/project-fiveminutefantasy/assets/images/waterdragon-angry.png",
  WaterdragonHappy: "/project-fiveminutefantasy/assets/images/waterdragon-happy.png",
  WaterdragonNeutral: "/project-fiveminutefantasy/assets/images/waterdragon-neutral.png",
  SkyAlpha: "/project-fiveminutefantasy/assets/images/sky-alpha.png",
  SkyBeta: "/project-fiveminutefantasy/assets/images/sky-beta.png",
  SkyCharlie: "/project-fiveminutefantasy/assets/images/sky-charlie.png",
  SkyDelta: "/project-fiveminutefantasy/assets/images/sky-delta.png",
  SkyEpsilon: "/project-fiveminutefantasy/assets/images/sky-epsilon.png",
  SkyFoxtrot: "/project-fiveminutefantasy/assets/images/sky-foxtrot.png",
  SkyGamma: "/project-fiveminutefantasy/assets/images/sky-gamma.png",
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
