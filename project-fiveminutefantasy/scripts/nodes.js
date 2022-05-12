import assets from "./load.js";
import { setItem, checkItems } from "./game.js";

const sceneNodes = [
  {
    id: 1,
    background: assets.HouseWall,
    foreground: assets.NonevialSelected,
    text: "You awake inside a broken house. Your skull feels broken. You see three vials discarded on a rickety table.",

    options: [
      {
        foreground: assets.BluevialSelected,
        text: "Take the blue vial and flee.",
        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, { vials: { "blue vial": true } }),
        nextScene: [2, 3, 4],
      },
      {
        foreground: assets.RedvialSelected,
        text: "Take the red vial and flee.",
        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, { vials: { "red vial": true } }),
        nextScene: [5, 6, 7],
      },
      {
        foreground: assets.GreenvialSelected,
        text: "Take the green vial and flee.",
        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, { vials: { "green vial": true } }),
        nextScene: [8, 9, 10],
      },
      {
        foreground: assets.NonevialSelected,
        text: "Leave the vials. Leave the house.",
        nextScene: [11, 12, 13],
      },
    ],
  },
  {
    id: 2,
    background: assets.ForestIdyll,
    midground: assets.BluevialBroken,
    foreground: assets.WaterbladeNeutral,
    text: "You stumble and drop your vial. The glass shatters in a blue haze of darkness and dust. When the smoke clears, you see a silver hilt dagger with an almost translucent blade lying on the ground.",

    options: [
      {
        foreground: assets.WaterbladeGood,
        text: `Take up this wonderous new weapon. The weapon is delightfully cool and wet to the touch.`,
        requiredStateItem: (currentStateItem) =>
          checkItems(currentStateItem, "blue vial"),

        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, {
            vials: { "blue vial": false },
            weapons: { "water blade": true },
          }),

        setStateQuest: { theBrightNewBlade: true },
        nextScene: [11, 12, 13, 14],
      },
      {
        foreground: assets.WaterbladeBad,
        text: `That weird weapon is all cold and slimy. Leave the fishy thing alone!`,
        requiredStateItem: (currentStateItem) =>
          checkItems(currentStateItem, "blue vial"),
        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, {
            vials: { "blue vial": false },
            weapons: { "water blade": false },
          }),

        nextScene: [11, 12, 13, 14],
      },
    ],
  },
  {
    id: 3,
    background: assets.ForestIdyll,
    midground: assets.BluevialBroken,
    foreground: assets.WaterdragonNeutral,
    text: "You stumble. The blue vial drops and explodes. From the glittering shards arises a tiny dragon with gossamer wings and frosted breath. A pair of icy blue eyes peer into yours. A small sound escapes that bejeweled throat.",

    options: [
      {
        foreground: assets.WaterdragonHappy,
        text: "Reach forth your hand. Let that tiny purring creature climb up your arm and nestle on your shoulders.",
        requiredStateItem: (currentStateItem) =>
          checkItems(currentStateItem, "blue vial"),

        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, {
            vials: { "blue vial": false },
            weapons: { "water dragon": true },
          }),

        setStateQuest: { theDeathlyDragon: true },
        nextScene: [11, 12, 13, 14],
      },
      {
        foreground: assets.WaterdragonAngry,
        text: "Did that foul beast just hiss at you? Pelt the thing with rocks until it flies away.",
        requiredStateItem: (currentStateItem) =>
          checkItems(currentStateItem, "blue vial"),

        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, {
            vials: { "blue vial": false },
            weapons: { "water dragon": false },
          }),

        nextScene: [11, 12, 13, 14],
      },
    ],
  },
  {
    id: 4,
    background: assets.ForestIdyll,
   text: "You stumble, but catch yourself. Then you stare at the blue vial still clutched white knuckled in your hand.",

    options: [
      {
        foreground: assets.BluevialRaised,
        text: "Better put this treaure somewhere safe. It may be useful later.",
        requiredStateItem: (currentStateItem) =>
          checkItems(currentStateItem, "blue vial"),

        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, {
            vials: { "blue vial": true },
          }),

        setStateQuest: { theVillainsInVials: true },
        nextScene: [11, 12, 13, 14],
      },
      {
        foreground: assets.BluevialDropped,
        text: "What were you thinking, picking up strange trash? Throw it away.",
        requiredStateItem: (currentStateItem) =>
          checkItems(currentStateItem, "blue vial"),

        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, {
            vials: { "blue vial": false },
          }),

        nextScene: [11, 12, 13, 14],
      },
    ],
  },
  {
    id: 5,
    background: assets.ForestIdyll,
    midground: assets.RedvialBroken,
    foreground: assets.FirebladeNeutral,
    text:"You stumble. The red vial drops on a patch of grass. It shatters in a choking brimstone haze of darkness and dust. When the smoke clears, you see a silver hilt dagger with a shimmering fire kissed blade.",

    options: [
      {
        foreground: assets.FirebladeGood,
        text: "Grab this awesome new weapon before it turns the grass to black ashes.",
        requiredStateItem: (currentStateItem) =>
          checkItems(currentStateItem, "red vial"),

        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, {
            vials: { "red vial": false },
            weapons: { "fire blade": true },
          }),

        setStateQuest: { theBrightNewBlade: true },
        nextScene: [11, 12, 13, 14],
      },
      {
        foreground: assets.FirebladeBad,
        text: `What fool would wield a weapon? Leave it.`,
        requiredStateItem: (currentStateItem) =>
          checkItems(currentStateItem, "red vial"),

        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, {
            vials: { "red vial": false },
            weapons: { "fire blade": false },
          }),

        nextScene: [11, 12, 13, 14],
      },
    ],
  },
  {
    id: 6,
    background: assets.ForestIdyll,
    midground: assets.RedvialBroken,
    foreground: assets.FiredragonNeutral,
    text: "The red vial turns to warm sand in your hand. From the glittering motes spilling between your fingers arises a tiny dragon with garnet wings.  A pair of smoldering eyes peer into yours. It slowly nibbles one of your fingers.",

    options: [
      {
        foreground: assets.FiredragonHappy,
        text: "Cradle that beast in your arms. Who could deny such a trusting gaze?",
        requiredStateItem: (currentStateItem) =>
          checkItems(currentStateItem, "red vial"),

        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, {
            vials: { "red vial": false },
            weapons: { "fire dragon": true },
          }),

        setStateQuest: { theDeathlyDragon: true },
        nextScene: [11, 12, 13, 14],
      },
      {
        foreground: assets.FiredragonAngry,
        text: "Did that wretched creature just bite you? Fling it hard, and fling it fast.",
        requiredStateItem: (currentStateItem) =>
          checkItems(currentStateItem, "red vial"),

        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, {
            vials: { "red vial": false },
            weapons: { "fire dragon": false },
          }),

        nextScene: [11, 12, 13, 14],
      },
    ],
  },
  {
    id: 7,
    background: assets.ForestIdyll,
    text:"You stumble, but catch yourself. Then you stare at the red vial still clutched white knuckled in your hand.",

    options: [
      {
        foreground: assets.RedvialRaised,
        text: "Better put such treasure in a safe place. Might be useful later.",
        requiredStateItem: (currentStateItem) =>
          checkItems(currentStateItem, "red vial"),

        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, {
            vials: { "red vial": true },
          }),

        setStateQuest: { theVillainsInVials: true },
        nextScene: [11, 12, 13, 14],
      },
      {
        foreground: assets.RedvialDropped,
        text: "What use the rubbish of some poor mage? Toss it.",
        requiredStateItem: (currentStateItem) =>
          checkItems(currentStateItem, "red vial"),

        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, {
            vials: { "red vial": false },
          }),

        nextScene: [11, 12, 13, 14],
      },
    ],
  },
  {
    id: 8,
    background: assets.ForestIdyll,
    midground: assets.GreenvialBroken,
    foreground: assets.VinebladeNeutral,
    text:"You stumble. The green vial slips from your grasp and shatters on the ground. A fragrant haze of smoke and dust wafts in the breeze. When the smoke vanishes, you see a silver hilt dagger with a blade of sinuous twisted vines.",

    options: [
      {
        foreground: assets.VinebladeGood,
        text: "Better grab that strange new weapon before those vines take root in the dirt.",
        requiredStateItem: (currentStateItem) =>
          checkItems(currentStateItem, "green vial"),

        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, {
            vials: { "green vial": false },
            weapons: { "vine blade": true },
          }),

        setStateQuest: { theBrightNewBlade: true },
        nextScene: [11, 12, 13, 14],
      },
      {
        foreground: assets.VinebladeBad,
        text: "Are you a fighter or a forester? Who needs such strange weaponry?",
        requiredStateItem: (currentStateItem) =>
          checkItems(currentStateItem, "green vial"),

        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, {
            vials: { "green vial": false },
            weapons: { "vine blade": false },
          }),
        nextScene: [11, 12, 13, 14],
      },
    ],
  },
  {
    id: 9,
    background: assets.ForestIdyll,
    midground: assets.GreenvialBroken,
    foreground: assets.VinedragonNeutral,
    text: "The green vial transforms into a small bush in your hand. Then the bush uncurls. The leaves are the ruffled scales and rough branches the dark limbs of a tiny dragon.  A pair of bright emerald eyes peer into yours. It wraps its tail firmly around your wrist.",

    options: [
      {
        foreground: assets.VinedragonHappy,
        text: "You try to save your poor wrist and fail. Ah, well. Why dislodge such a ... contented creature?",
        requiredStateItem: (currentStateItem) =>
          checkItems(currentStateItem, "green vial"),

        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, {
            vials: { "green vial": false },
            weapons: { "vine dragon": true },
          }),

        setStateQuest: { theDeathlyDragon: true },
        nextScene: [11, 12, 13, 14],
      },
      {
        foreground: assets.VinedragonAngry,
        text: "By the five gods, if you cannot shake this creature loose, you will cut it loose. Where did you put your dagger?",
        requiredStateItem: (currentStateItem) =>
          checkItems(currentStateItem, "green vial"),

        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, {
            vials: { "green vial": false },
            weapons: { "vine dragon": true },
          }),

        nextScene: [11, 12, 13, 14],
      },
    ],
  },
  {
    id: 10,
    background: assets.ForestIdyll,

    text:"You stumble, but catch yourself. Then you stare at the green vial still clutched white knuckled in your hand.",

    options: [
      {
        foreground: assets.GreenvialRaised,
        text: "Better keep it safe. Could be worth something.",
        requiredStateItem: (currentStateItem) =>
          checkItems(currentStateItem, "green vial"),

        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, {
            vials: { "green vial": true },
          }),

        setStateQuest: { theVillainsInVials: true },
        nextScene: [11, 12, 13, 14],
      },
      {
        foreground: assets.GreenvialDropped,
        text: "Who wants an old bottle with green goo?",
        requiredStateItem: (currentStateItem) =>
          checkItems(currentStateItem, "green vial"),

        setStateItem: (currentStatItem) =>
          setItem(currentStatItem, {
            vials: { "green vial": false },
          }),
        nextScene: [11, 12, 13, 14],
      },
    ],
  },

  {
    id: 11,
    background: assets.ForestRobbery,
    midground: assets.RobberAttack,

    text: "A hooded archer ambushes you from behind a tree with a nocked bow aimed at your heart.",

    options: [
      {
        text: "Cut the villain down with your bright new blade!",
        requiredStateQuest: (currentStateQuest) =>
          currentStateQuest.theBrightNewBlade,

        nextScene: [15, 16, 17],
      },
      {
        text: "Throw your deadly dragon into the fray!",
        requiredStateQuest: (currentStateQuest) =>
          currentStateQuest.theDeathlyDragon,

        nextScene: [15, 16, 17],
      },
      {
        text: "Lob your vial at the dastaredly rogue!",
        requiredStateQuest: (currentStateQuest) =>
          currentStateQuest.theVillainsInVials,

        nextScene: [15, 16, 17],
      },
      {
        text: "Beg for mercy as you have nothing worth stealing.",
        nextScene: [17],
      },
      {
        text: "Pummel that cocky bastard with your fists!",
        nextScene: [15, 16, 17],
      },
    ],
  },
  {
    id: 12,
    background: assets.ForestRobbery,
    midground: assets.RobberSolicit,

    text: "A smiling hooded man emerges from the trees, palms raised but with weapons close at hand. He claims to be ... collecting for charity.",

    options: [
      {
        text: "Offer the give him your new magic sword...blade first",
        requiredStateQuest: (currentStateQuest) =>
          currentStateQuest.theBrightNewBlade,

        nextScene: [15, 17],
      },
      {
        text: "Gift this strange unkempt man your trusting young dragon.",
        requiredStateQuest: (currentStateQuest) =>
          currentStateQuest.theDeathlyDragon,

        nextScene: [15, 17],
      },
      {
        text: "Make him a present of your vial.",
        requiredStateQuest: (currentStateQuest) =>
          currentStateQuest.theVillainsInVials,

        nextScene: [15, 17],
      },
      {
        text: "Beg his foregiveness as you have no possessions to offer.",
        nextScene: [17],
      },
      {
        text: "Seems suspicious. Pummel that cocky bastard with your fists!",
        nextScene: [15, 16, 17],
      },
    ],
  },
  {
    id: 14,
    background: assets.ForestRobbery,
    midground: assets.RobberDuel,

    text: "A hooded man emerges from the trees, throws aside a large bow, and brandishes a dagger.\n\n'You just burgled me best mate,' he says with a cheeky grin. 'I demand a duel.'",

    options: [
      {
        text: "Pummel that cocky bastard with your fists!",
        nextScene: [15, 16, 17],
      },
    ],
  },
  {
    id: 15,
    background: assets.ForestRobbery,
    midground: assets.RobberAfraid,

    text: "The thief screams, drops his weapon, and flees back into the forest.",

    options: [
      {
        text: "Pursue the ruffian, and then kill him.",
        nextScene: 999,
      },
      {
        text: "Chase after the man and offer your services as a sell sword.",
        nextScene: 999,
      },
      {
        text: "Let the man go.",
        nextScene: 999,
      },
      {
        text: "Continue on your journey. The thief is of no consequence.",
        nextScene: 999,
      },
    ],
  },
  {
    id: 16,
    background: assets.ForestRobbery,
    midground: assets.RobberPlacate,

    text: "The man sheathes his weapons. He holds up his hands with a placating gesture.",

    options: [
      {
        text: "Offer to help him any way you can.",
        nextScene: 999,
      },
      {
        text: "Attack! Quickly, while he's disarmed.",
        nextScene: 999,
      },
      {
        text: "Ask if he has any items worth trading.",
        nextScene: 999,
      },
      {
        text: "Ask for news of the war back home.",
        nextScene: 999,
      },
    ],
  },
  {
    id: 17,
    background: assets.ForestRobbery,
    midground: assets.RobberButcher,

    text: "The battle is short and brutal. The thief whistles a merry tune whilst pillaging your body.",

    options: [
      {
        text: "Claw frantically as his smug bastard face as the warm blood pools around you.",
        nextScene: 1000,
      },
      {
        text: "Sigh and close your eyes when you see his arms rise to deliver the final thrust.",
        nextScene: 1000,
      },
      {
        text: "By the gods' broken teeth, you'll not lay down without a ... he will rue ... how could this have ... oh, just die already.",
        nextScene: 1000,
      },
      {
        text: "Tell a bawdiest joke you know, and leave the world with a smile on your lips and laughter in your ears.",
        nextScene: 1000,
      },
    ],
  },
  {
    id: 999,
    background: assets.GameVictory,
    setText: (stateQuest, stateItem) =>
      `The Black Tower shall not claim your soul this day\n\n
        Quests Completed: ${Object.keys(stateQuest).length}\n
        Dragons Tamed: ${stateItem.dragons.length}\n
        Vials Found: ${stateItem.vials.length}\n
        Weapons Discovered: ${stateItem.weapons.length}`,

    options: [
      {
        text: "But the next adventure awaits...",
        nextScene: -1,
      },
    ],
  },
  {
    id: 1000,
    background: assets.GameDefeat,
    setText: (stateQuest, stateItem) =>
      `The Black Tower welcomes your dusty bones.\n\n
        Quests Completed: ${Object.keys(stateQuest).length}\n
        Dragons Tamed: ${stateItem.dragons.length}\n
        Vials Found: ${stateItem.vials.length}\n
        Weapons Discovered: ${stateItem.weapons.length}`,

    options: [
      {
        text: "But the next adventure awaits...",
        nextScene: -1,
      },
    ],
  },
];

export default sceneNodes;
