const sceneNodes = [
    {
      id: 1,
      background:HouseWall,
      foreground:NonevialSelected,
      text: "You awake inside a broken house. Your skull feels broken. You see three vials discarded on a rickety table.",
      
      options: [
        {
          //foreground:BluevialSelected,
          text: "Take the blue vial and flee.",
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, { vials: { "blue vial": true } }),
          nextScene: [2, 3, 4,],
        },
        {
          //foreground:RedvialSelected,
          text: "Take the red vial and flee.",
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, { vials: { "red vial": true } }),
          nextScene: [5, 6, 7,],
        },
        {
          //foreground:GreenvialSelected,
          text: "Take the green vial and flee.",
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, { vials: { "green vial": true } }),
          nextScene: [8, 9, 10,],
        },
        {
          //foreground:NonevialSelected,
          text: "Leave the vials. Leave the house.",
          nextScene: [11, 12, 13]
        },
      ],
    },
    {
      id: 2,
      //background:ForestIdyll,
      //foreground:BluevialBroken,
      
      text: "You stumble and drop your vial. The glass shatters in a blue haze of darkness and dust. When the smoke clears, you see a silver hilt dagger with an almost translucent blade lying on the ground.",
      
      options: [
        {
          text: `Take up this wonderous new weapon. The weapon is delightfully cool and wet to the touch.`,
          requiredStateItem: (currentStateItem) =>
            checkItems(currentStateItem, "blue vial"),
  
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, {
              vials: { "blue vial": false },
              weapons: { "water blade": true },
            }),
  
          setStateQuest: { theBrightNewBlade: true },
          nextScene: [11, 12, 13, 14]
        },
        {
          text: `That weird weapon is all cold and slimy. Leave the fishy thing alone!`,
          requiredStateItem: (currentStateItem) =>
            checkItems(currentStateItem, "blue vial"),
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, {
              vials: { "blue vial": false },
              weapons: { "water blade": false },
            }),
  
          nextScene: [11, 12, 13, 14]
        },
      ],
    },
    {
      id: 3,
      //background:ForestIdyll,
      //midground:BluevialBroken,
      //foreground:WaterdragonNeutral,
      setText: (stateQuest, stateItem) =>
        `You stumble. The ${stateItem.vials[0]} drops and explodes. From the glittering shards arises a tiny dragon with gossamer wings and frosted breath. A pair of icy blue eyes peer into yours. A small sound escapes that bejeweled throat.`,
      
        options: [
        {
          //foreground:WaterdragonHappy,
          text: "Reach forth your hand. Let that tiny purring creature climb up your arm and nestle on your shoulders.",
          requiredStateItem: (currentStateItem) =>
            checkItems(currentStateItem, "blue vial"),
  
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, {
              vials: { "blue vial": false },
              weapons: { "water dragon": true },
            }),
  
          setStateQuest: { theDeathlyDragon: true },
          nextScene: [11, 12, 13, 14]
        },
        {
          //foreground:WaterdragonAngry,
          text: "Did that foul beast just hiss at you? Pelt the thing with rocks until it flies away.",
          requiredStateItem: (currentStateItem) =>
            checkItems(currentStateItem, "blue vial"),
  
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, {
              vials: { "blue vial": false },
              weapons: { "water dragon": false },
            }),
  
          nextScene: [11, 12, 13, 14]
        },
      ],
    },
    {
      id: 4,
      //background:ForestIdyll,
      //foreground:BluevialRaised,
      setText: (stateQuest, stateItem) =>
        `You stumble, but catch yourself. Then you stare at the ${stateItem.vials[0]} still clutched white knuckled in your hand.`,
      
        options: [
        {
          //foreground:ForestIdyll,
          text: "Better put this treaure somewhere safe. It may be useful later.",
          requiredStateItem: (currentStateItem) =>
            checkItems(currentStateItem, "blue vial"),
  
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, {
              vials: { "blue vial": true },
            }),
  
          setStateQuest: { theVillainsInVials: true },
          nextScene: [11, 12, 13, 14]
        },
        {
          //foreground:BluevialDropped
          text: "What were you thinking, picking up strange trash? Throw it away.",
          requiredStateItem: (currentStateItem) =>
            checkItems(currentStateItem, "blue vial"),
  
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, {
              vials: { "blue vial": false },
            }),

          nextScene: [11, 12, 13, 14]
        },
      ],
    },
    {
      id: 5,
      //background:ForestIdyll,
      //foreground:RedvialBroken,
      
      setText: (stateQuest, stateItem) =>
        `You stumble. The ${stateItem.vials[0]} drops on a patch of grass. It shatters in a choking brimstone haze of darkness and dust. When the smoke clears, you see a silver hilt dagger with a shimmering fire kissed blade.`,
      
        options: [
        {
          text: "Grab this awesome new weapon before it turns the grass to black ashes.",
          requiredStateItem: (currentStateItem) =>
            checkItems(currentStateItem, "red vial"),
  
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, {
              vials: { "red vial": false },
              weapons: { "fire blade": true },
            }),
  
          setStateQuest: { theBrightNewBlade: true },
          nextScene: [11, 12, 13, 14]
        },
        {
          text: `What fool would wield a weapon? Leave it.`,
          requiredStateItem: (currentStateItem) =>
            checkItems(currentStateItem, "red vial"),
  
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, {
              vials: { "red vial": false },
              weapons: { "fire blade": false },
            }),
  
          nextScene: [11, 12, 13, 14]
        },
      ],
    },
    {
      id: 6,
      //background:ForestIdyll,
      //foreground:RedvialBroken,
      
      setText: (stateQuest, stateItem) =>
        `The ${stateItem.vials[0]} turns to warm sand in your hand. From the glittering motes spilling between your fingers arises a tiny dragon with garnet wings.  A pair of smoldering black eyes peer into yours. It slowly nibbles one of your fingers.`,
  
      options: [
        {
          text: "Cradle that beast in your arms. Who could deny such a trusting gaze?",
          requiredStateItem: (currentStateItem) =>
            checkItems(currentStateItem, "red vial"),
  
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, {
              vials: { "red vial": false },
              weapons: { "fire dragon": true },
            }),
  
          setStateQuest: { theDeathlyDragon: true },
          nextScene: [11, 12, 13, 14]
        },
        {
          text: "Did that wretched creature just bite you? Fling it hard, and fling it fast.",
          requiredStateItem: (currentStateItem) =>
            checkItems(currentStateItem, "red vial"),
  
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, {
              vials: { "red vial": false },
              weapons: { "fire dragon": false },
            }),
  
          nextScene: [11, 12, 13, 14]
        },
      ],
    },
    {
      id: 7,
      //background:ForestIdyll,
      //foreground:RedvialBroken,
     
      setText: (stateQuest, stateItem) =>
        `You stumble, but catch yourself. Then you stare at the ${stateItem.vials[0]} still clutched white knuckled in your hand.`,
  
      options: [
        {
          text: "Better put such treasure in a safe place. Might be useful later.",
          requiredStateItem: (currentStateItem) =>
            checkItems(currentStateItem, "red vial"),
  
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, {
              vials: { "red vial": true },
            }),
  
          setStateQuest: { theVillainsInVials: true },
          nextScene: [11, 12, 13, 14]
        },
        {
          text: "What use the rubbish of some poor mage? Toss it.",
          requiredStateItem: (currentStateItem) =>
            checkItems(currentStateItem, "red vial"),
  
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, {
              vials: { "red vial": false },
            }),
  
          nextScene: [11, 12, 13, 14]
        },
      ],
    },
    {
      id: 8,
      //background:ForestIdyll,
      //foreground:GreenvialBroken,
      
      setText: (stateQuest, stateItem) =>
        `You stumble. The ${stateItem.vials[0]} slips from your grasp and shatters on the ground. A fragrant haze of smoke and dust wafts in the breeze. When the smoke vanishes, you see a silver hilt dagger with a blade of sinuous twisted vines.`,
  
      options: [
        {
          text: "Better grab that strange new weapon before those vines take root in the dirt.",
          requiredStateItem: (currentStateItem) =>
            checkItems(currentStateItem, "green vial"),
  
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, {
              vials: { "green vial": false },
              weapons: { "vine blade": true },
            }),
  
          setStateQuest: { theBrightNewBlade: true },
          nextScene: [11, 12, 13, 14]
        },
        {
          text: "Are you a fighter or a forester? Who needs such strange weaponry?",
          requiredStateItem: (currentStateItem) =>
            checkItems(currentStateItem, "green vial"),
  
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, {
              vials: { "green vial": false },
              weapons: { "vine blade": false },
            }),
          nextScene: [11, 12, 13, 14]
        },
      ],
    },
    {
      id: 9,
      //background:ForestIdyll,
      //foreground:GreenvialBroken,
     
      setText: (stateQuest, stateItem) =>
        `The ${stateItem.vials[0]} transforms into a small bush in your hand. Then the bush uncurls. The leaves are the ruffled scales and rough branches the dark limbs of a tiny dragon.  A pair of bright emerald eyes peer into yours. It wraps its tail firmly around your wrist.`,
  
      options: [
        {
          text: "You try to save your poor wrist and fail. Ah, well. Why dislodge such a ... contented creature?",
          requiredStateItem: (currentStateItem) =>
            checkItems(currentStateItem, "green vial"),
  
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, {
              vials: { "green vial": false },
              weapons: { "vine dragon": true },
            }),
  
          setStateQuest: { theDeathlyDragon: true },
          nextScene: [11, 12, 13, 14]
        },
        {
          text: "By the five gods, if you cannot shake this creature loose, you will cut it loose. Where did you put your dagger?",
          requiredStateItem: (currentStateItem) =>
            checkItems(currentStateItem, "green vial"),
  
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, {
              vials: { "green vial": false },
              weapons: { "vine dragon": true },
            }),
  
          nextScene: [11, 12, 13, 14]
        },
      ],
    },
    {
      id: 10,
     //background:ForestIdyll,
      //foreground:GreenvialRaised,
      
      setText: (stateQuest, stateItem) =>
        `You stumble, but catch yourself. Then you stare at the ${stateItem.vials} still clutched white knuckled in your hand.`,

      options: [
        {
          text: "Better keep it safe. Could be worth something.",
          requiredStateItem: (currentStateItem) =>
            checkItems(currentStateItem, "green vial"),
  
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, {
              vials: { "green vial": true },
            }),
  
          setStateQuest: { theVillainsInVials: true },
          nextScene: [11, 12, 13, 14]
        },
        {
          text: "Who wants an old bottle with green goo?",
          requiredStateItem: (currentStateItem) =>
            checkItems(currentStateItem, "green vial"),
  
          setStateItem: (currentStatItem) =>
            setItem(currentStatItem, {
              vials: { "green vial": false },
            }),
          nextScene: [11, 12, 13, 14]
        },
      ],
    },
  
    {
      id: 11,
      //background:ForestRobbery,
      //foreground:RobberAttack,

      text: "A hooded archer ambushes you from behind a tree with a knocked bow aimed at your heart.",

      options: [
        {
          text: `Cut the villain down with your bright new blade!`,
          requiredStateQuest: (currentStateQuest) =>
            currentStateQuest.theBrightNewBlade,
  
          nextScene: 17,
        },
        {
          text: `Throw your deadly dragon into the fray!`,
          requiredStateQuest: (currentStateQuest) =>
            currentStateQuest.theDeathlyDragon,
  
          nextScene: 17,
        },
        {
          text: `Lob your vial at the dastaredly rogue!`,
          requiredStateQuest: (currentStateQuest) =>
            currentStateQuest.theVillainsInVials,
  
          nextScene: 17,
        },
        {
          text: "Beg for mercy as you have nothing worth stealing.",
          nextScene: 17,
        },
        {
          text: "Pummel that cocky bastard with your fists!",
          nextScene: [15, 16],
        },
      ],
    },
    {
      id:12,
      //background:ForestRobbery,
      //foreground:RobberSolicit,

      text: "A smiling hooded man emerges from the trees, palms raised but with weapons close at hand. He claims to be ... collecting for charity.",
      
      options: [
        {
          text: "Pummel that cocky bastard with your fists!",
          nextScene: [15, 16],
        },
      ],
    },
    {
      id:13,
      //background:ForestRobbery,
      //foreground:RobberSolicit,

      text: "A grinning man in a green hood emerges from the trees, palms raised but with weapons close at hand. He claims to be ... collecting for charity.",
      
      options: [
        {
          text: "Pummel that cocky bastard with your fists!",
          nextScene: [15, 16],
        },
      ],
    },
    {
      id:14,
      //background:ForestRobbery,
      //foreground:RobberDuel,

      text: "A hooded man emerges from the trees, throws aside a large bow, and brandishes a dagger.\n'You just burgled me best mate,' he says with a cheeky grin. 'I demand a duel.'",
      
      options: [
        {
          text: "Pummel that cocky bastard with your fists!",
          nextScene: [15, 16],
        },
      ],
    },
    {
      id: 15,
      //background:ForestRobbery,
      //foreground:RobberAfraid,

      text: "The thief screams, drops his weapon, and flees back into the forest. Huzzah!",

      options: [
        {
          text: "The heroes of old will sing your praises in the White Tower tonight. The next adventure awaits...",
          nextScene: 999,
        },
      ],
    },
    {
      id: 16,
      //background:ForestRobbery,
      //foreground:RobberSolicit,

      text: "The man sheathes his weapons. He holds up his hands with a placating gesture.",

      options: [
        {
          text: "The heroes of old will sing your praises in the White Tower tonight. The next adventure awaits...",
          nextScene: 999,
        },
      ],
      
    },
    {
      id: 17,
      //background:ForestRobbery,
      //foreground:RobberButcher,
      
      text: "Your body slowly cools. The thief whistles a merry tune whilst pillaging your corpse.",

      options: [
        {
          text: "The Black Tower welcomes your dusty bones. The next adventure awaits...",
          nextScene: -1,
        },
      ],
    },
    {
      id: 999,

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
  ];