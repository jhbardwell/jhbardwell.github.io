let imageList = [
    "/assets/images/forest-idyll.png",
    "/assets/images/forest-robbery.png",
    "/assets/images/house-wall.png",
    "/assets/images/bluevial-broken.png",
    "/assets/images/bluevial-dropped.png",
    "/assets/images/bluevial-raised.png",
    "/assets/images/bluevial-selected.png",
    "/assets/images/greenvial-broken.png",
    "/assets/images/greenvial-raised.png",
    "/assets/images/greenvial-selected.png",
    "/assets/images/nonevial-selected.png",
    "/assets/images/redvial-broken.png",
    "/assets/images/redvial-dropped.png",
    "/assets/images/redvial-raised.png",
     "/assets/images/redvial-selected.png",
     "/assets/images/fireblade-bad.png",
     "/assets/images/fireblade-good.png",
     "/assets/images/fireblade-neutral.png",
     "/assets/images/firedragon-angry.png",
     "/assets/images/firedragon-neutral.png",
     "/assets/images/firedragon-happy.png",
     "/assets/images/robber-afraid.png",
     "/assets/images/robber-attack.png",
     "/assets/images/robber-butcher.png",
     "/assets/images/robber-solicit.png",
     "/assets/images/vineblade-bad.png",
     "/assets/images/vineblade-good.png",
     "/assets/images/vineblade-neutral.png",
     "/assets/images/vinedragon-angry.png",
     "/assets/images/vinedragon-happy.png",
     "/assets/images/vinedragon-neutral.png",
     "/assets/images/waterblade-bad.png",
     "/assets/images/waterblade-good.png",
     "/assets/images/waterblade-neutral.png",
     "/assets/images/waterdragon-angry.png",
     "/assets/images/waterdragon-happy.png",
     "/assets/images/waterdragon-neutral.png",
    ];

let preloadImages = function () {
    for(let i = 0; i < imageList.length; i++ ) {
        let imageObject = new Image();
        imageObject.src = imageList[i];
    }
}
preloadImages();


// Images - Blades

const FirebladeBad = new Image();
FirebladeBad.src = "/assets/images/fireblade-bad.png";

const FirebladeGood = new Image();
FirebladeGood.src = "/assets/images/fireblade-good.png";

const FirebladeNeutral = new Image();
FirebladeNeutral.src = "/assets/images/fireblade-neutral.png";

const VinebladeBad = new Image();
VinebladeBad.src = "/assets/images/vineblade-bad.png";

const VinebladeGood = new Image();
VinebladeGood.src = "/assets/images/vineblade-good.png";

const VinebladeNeutral = new Image();
VinebladeNeutral.src = "/assets/images/vineblade-neutral.png";

const WaterbladeBad = new Image();
WaterbladeBad.src = "/assets/images/waterblade-bad.png";

const WaterbladeGood = new Image();
WaterbladeGood.src = "/assets/images/waterblade-good.png";

const WaterbladeNeutral = new Image();
WaterbladeNeutral.src = "/assets/images/waterblade-neutral.png";

// Images - Dragons

const FiredragonAngry = new Image();
FiredragonAngry.src = "/assets/images/firedragon-angry.png";

const FiredragonNeutral = new Image();
FiredragonNeutral.src = "/assets/images/firedragon-neutral.png";

const FiredragonHappy = new Image();
FiredragonHappy.src = "/assets/images/firedragon-happy.png";

const VinedragonAngry = new Image();
VinedragonAngry.src = "/assets/images/vinedragon-angry.png";

const VinedragonHappy = new Image();
VinedragonHappy.src = "/assets/images/vinedragon-happy.png";

const VinedragonNeutral = new Image();
VinedragonNeutral.src = "/assets/images/vinedragon-neutral.png";

const WaterdragonAngry = new Image();
WaterdragonAngry.src = "/assets/images/waterdragon-angry.png";

const WaterdragonHappy = new Image();
WaterdragonHappy.src = "/assets/images/waterdragon-happy.png";

const WaterdragonNeutral = new Image();
WaterdragonNeutral.src = "/assets/images/waterdragon-neutral.png";

//Images - Vials

const BluevialBroken = new Image();
BluevialBroken.src = "/assets/images/bluevial-broken.png";

const BluevialDropped = new Image();
BluevialDropped.src = "/assets/images/bluevial-dropped.png";

const BluevialRaised = new Image();
BluevialRaised.src = "/assets/images/bluevial-raised.png";

const BluevialSelected = new Image();
BluevialSelected.src = "/assets/images/bluevial-selected.png";

const GreenvialBroken = new Image();
GreenvialBroken.src = "/assets/images/greenvial-broken.png";

const GreenvialRaised = new Image();
GreenvialRaised.src = "/assets/images/greenvial-raised.png";

const GreenvialSelected = new Image();
GreenvialSelected.src = "/assets/images/greenvial-selected.png";

const NonevialSelected = new Image();
NonevialSelected.src = "/assets/images/nonevial-selected.png";

const RedvialBroken = new Image();
RedvialBroken.src = "/assets/images/redvial-broken.png";

const RedvialDropped = new Image();
RedvialDropped.src = "/assets/images/redvial-dropped.png";

const RedvialRaised = new Image();
RedvialRaised.src = "/assets/images/redvial-raised.png";

const RedvialSelected = new Image();
RedvialSelected.src = "/assets/images/redvial-selected.png";


// Images NPCs - Robber

const RobberAfraid = new Image();
RobberAfraid.src = "/assets/images/robber-afraid.png";
  
const RobberAttack = new Image();
RobberAttack.src = "/assets/images/robber-attack.png";

const RobberButcher = new Image();
RobberButcher.src = "/assets/images/robber-butcher.png";

const RobberDuel = new Image();
RobberDuel.src = "/assets/images/robber-duel.png";

const RobberSolicit = new Image();
RobberSolicit.src = "/assets/images/robber-solicit.png";

// Images - Locations

const ForestIdyll = new Image();
ForestIdyll.src = "/assets/images/forest-idyll.png";

const ForestRobbery = new Image();
ForestRobbery.src = "/assets/images/forest-robbery.png";

const HouseWall = new Image();
HouseWall.src = "/assets/images/house-wall.png";

// Images - Time

const SkyAlpha = new Image();
SkyAlpha.src = "/assets/images/sky-alpha.png";

const SkyBeta = new Image();
SkyBeta.src = "/assets/images/sky-beta.png";

const SkyCharlie = new Image();
SkyCharlie.src = "/assets/images/sky-charlie.png";

const SkyDelta = new Image();
SkyDelta.src = "/assets/images/sky-delta.png";

const SkyEpsilon = new Image();
SkyEpsilon.src = "/assets/images/sky-epsilon.png";

const SkyFoxtrot = new Image();
SkyFoxtrot.src = "/assets/images/sky-foxtrot.png";

const SkyGamma = new Image();
SkyGamma.src = "/assets/images/sky-gamma.png";