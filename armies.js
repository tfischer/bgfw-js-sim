var armyData = {
  "armies": [
    {
      "name": "Carthage",
      "units": [
        {
          "name": "Balearic Slingers",
          "attack": {
            "dice": 3,
            "skill": 3,
            "power": 3
          },
          "defend": {
            "skill": 1,
            "power": 0
          },
          "ranged": {
            "range": "7"
          },
          "courage": 11,
          "move": 5,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 1
          },
          "points": 73,
          "type": "Core",
          "special": {
            "attackMods": [{
              "tags": ["ranged"],
              "dice": 0,
              "skill": 2,
              "power": 2
            }],
            "defendMods": [{
              "tags": ["ranged"],
              "skill": 2,
              "power": 0
            }],
            "rangedAttackType": "LOS",
            "tags": ["skirmisher"]
          },
          "specialText": "Skirmisher. D+2/+0 vs. ranged attacks. A(-0) -2/-2 when engaged. Ranged attack is Line of Sight."
        },
        {
          "name": "Caetrati",
          "attack": {
            "dice": 3,
            "skill": 5,
            "power": 4
          },
          "defend": {
            "skill": 1,
            "power": 0
          },
          "ranged": {
            "range": "5"
          },
          "courage": 11,
          "move": 5,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 1
          },
          "points": 85,
          "type": "Core",
          "special": {
            "tags": ["skirmisher","javelin"],
            "defendMods": [{
              "tags": ["ranged"],
              "skill": 2,
              "power": 0
            }]
          },
          "specialText": "Skirmisher. Ranged attack uses the Javelin rule. ?+2/+0 vs. ranged attacks.?(6*)6/7?1/3N/AN/A5”424216Core7\r"
        },
        {
          "name": "Gallic Warriors",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 4
          },
          "points": 160,
          "type": "Core",
          "special": {
            "tags": ["impulsive"]
          },
          "specialText": "Impulsive. (At the start of any turn Gallic Warriors are within 7 of an enemy unit's center point its orders change to Close.)?(6)6/6*?2*/3N/A135444295Core7\r"
        },
        {
          "name": "Scutarii",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "3.5"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 3,
            "red": 3
          },
          "points": 181,
          "type": "Core",
          "special": {
            "tags": ["pila"]
          },
          "specialText": "Range attack uses the Pila rule.323158Core5\r"
        },
        {
          "name": "Spanish Cavalry",
          "attack": {
            "dice": 4,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 6,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 1
          },
          "points": 185,
          "type": "Core",
          "special": {
            "tags": ["cavalry"],
            "defendMods": [{
              "tags": ["charge"],
              "skill": 1,
              "power": 0
            }]
          },
          "specialText": "Cavalry. ?+1/+0 while Charging.?(6)6/6*?2*/3N/A135424142Core9\r"
        },
        {
          "name": "Libyan Foot",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "3.5"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 3,
            "red": 3
          },
          "points": 275,
          "type": "Core",
          "special": {
            "tags": ["pila"]
          },
          "specialText": "Range attack uses the Pila rule.332200Core4\r"
        },
        {
          "name": "Carthaginian Spearmen",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 3,
            "red": 3
          },
          "points": 214,
          "type": "N/A",
          "special": {
            "tags": ["spear"]
          },
          "specialText": "?(-1) -0/-0 when charging. ?(+0) +1/+0 vs. cavalry or large units. ?(+0) +0/+2 when holding vs. charging cavalry or large. 222214N/A5\r"
        },
        {
          "name": "Gallic Cavalry",
          "attack": {
            "dice": 4,
            "skill": 5,
            "power": 6
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "6"
          },
          "courage": 13,
          "move": 6,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 1
          },
          "points": 222,
          "type": "N/A",
          "special": {
            "tags": ["cavalry", "impulsive"],
            "defendMods": [{
              "tags": ["charge"],
              "skill": 1,
              "power": 0
            }]
          },
          "specialText": "Cavalry. ?+1/+0 while Charging. Impulsive. (At the start of any turn Gallic Warriors are within 7 of an enemy unit's center point its orders change to Close.)?(6)6/6*?2*/3N/A135825900N/A2\r"
        },
        {
          "name": "Numidian Cavalry",
          "attack": {
            "dice": 3,
            "skill": 5,
            "power": 4
          },
          "defend": {
            "skill": 3,
            "power": 1
          },
          "ranged": {
            "range": "3.5"
          },
          "courage": 12,
          "move": 7,
          "wounds": {
            "green": 3,
            "yellow": 1,
            "red": 2
          },
          "points": 167,
          "type": "N/A",
          "special": {
            "tags": ["cavalry", "javelin", "skirmisher", "noImpact","opposingNoImpact"],
            "attackMods": [{
              "tags": ["opposing", "ranged"],
              "dice": -2,
              "skill": 0,
              "power": 0
            },
            {
              "tags": ["opposing", "cavalry"],
              "dice": -2,
              "skill": 0,
              "power": 0
            }]
          },
          "specialText": "Does not cause or take Impact Hits. Ranged attack uses the Javelin rule. Skirmishers Cavalry and ranged attacks against Numidian Cavalry get ?(-2) -0/-0.?(6)6/6*?2*/3N/A135444345N/A3\r"
        },
        {
          "name": "Elephants",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 6
          },
          "defend": {
            "skill": 1,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 11,
          "move": 5,
          "wounds": {
            "green": 5,
            "yellow": 4,
            "red": 4
          },
          "points": 285,
          "type": "Elite",
          "special": {
            "tags": ["large", "fearsome", "opposingCavalryTerror", "noDetermination"],
            "impactHits": 2
          },
          "specialText": "Large. Fearsome. (Terrifying to Cavalry.) Two Impact Hits. May not be empowered with Determination.321360Elite4\r"
        },
        {
          "name": "Hannibals' Elite",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 3,
            "power": 2
          },
          "ranged": {
            "range": "3.5"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 5,
            "yellow": 3,
            "red": 3
          },
          "points": 345,
          "type": "Elite",
          "special": {
            "tags": ["pila"]
          },
          "specialText": "Range attack uses the Pila rule.725500Elite4\r"
        },
        {
          "name": "Moorish Archers",
          "attack": {
            "dice": 3,
            "skill": 3,
            "power": 3
          },
          "defend": {
            "skill": 1,
            "power": 0
          },
          "ranged": {
            "range": "10.5"
          },
          "courage": 10,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 1
          },
          "points": 77,
          "type": "Elite",
          "special": {
            "tags": ["skirmisher"],
            "attackMods": [{
              "tags": ["ranged"],
              "dice": 0,
              "skill": 2,
              "power": 2
            }],
            "defendMods": [{
              "tags": ["ranged"],
              "skill": 2,
              "power": 0
            }],
            "rangedAttackType": "LOS"
          },
          "specialText": "Skirmisher. ?+2/+0 vs. ranged attacks. ?(-0) -2/-2 when engaged. Ranged attack is Line of Sight. May not be empowered with Determination.?(6*)6/7?1/3N/AN/A5”545600Elite3\r"
        }
      ]
    },
    {
      "name": "Dark Elves",
      "units": [
        {
          "name": "Slave Warriors",
          "attack": {
            "dice": 6,
            "skill": 4,
            "power": 4
          },
          "defend": {
            "skill": 1,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 2
          },
          "points": 96,
          "type": "Core",
          "special": {
            "tags": ["noPainTouch"],
            "attackMods": [{
              "tags": ["charge"],
              "dice": -1,
              "skill": 0,
              "power": 0
            },
            {
              "tags": ["holdVsCharge", "vsLarge"],
              "dice": 0,
              "skill": 0,
              "power": 2
            },
            {
              "tags": ["holdVsCharge", "vsCavalry"],
              "dice": 0,
              "skill": 0,
              "power": 2
            },
            {
              "tags": ["vsLarge"],
              "dice": 0,
              "skill": 1,
              "power": 0
            },
            {
              "tags": ["vsCavalry"],
              "dice": 0,
              "skill": 1,
              "power": 0
            }]
          },
          "specialText": "?(-1) -0/-0 when charging. ?(+0) +1/+0 vs. cavalry or large units. ?(+0) +0/+2 when holding vs. charging cavalry or large. Can't be empowered with Pain Touch.424242Core2\r"
        },
        {
          "name": "Lowblood Levy",
          "attack": {
            "dice": 6,
            "skill": 4,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 2
          },
          "points": 132,
          "type": "Core",
          "special": {
            "attackMods": [{
              "tags": ["charge"],
              "dice": -1,
              "skill": 0,
              "power": 0
            },
            {
              "tags": ["holdVsCharge", "vsLarge"],
              "dice": 0,
              "skill": 0,
              "power": 2
            },
            {
              "tags": ["holdVsCharge", "vsCavalry"],
              "dice": 0,
              "skill": 0,
              "power": 2
            },
            {
              "tags": ["vsLarge"],
              "dice": 0,
              "skill": 1,
              "power": 0
            },
            {
              "tags": ["vsCavalry"],
              "dice": 0,
              "skill": 1,
              "power": 0
            }]
          },
          "specialText": "?(-1) -0/-0 when charging. ?(+0) +1/+0 vs. cavalry or large units. ?(+0) +0/+2 when holding vs. charging cavalry or large. 424216Core00\r"
        },
        {
          "name": "Halfblood Levy",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 3,
            "red": 3
          },
          "points": 214,
          "type": "Core",
          "special": {
            "attackMods": [{
              "tags": ["charge"],
              "dice": -1,
              "skill": 0,
              "power": 0
            },
            {
              "tags": ["holdVsCharge", "vsLarge"],
              "dice": 0,
              "skill": 0,
              "power": 2
            },
            {
              "tags": ["holdVsCharge", "vsCavalry"],
              "dice": 0,
              "skill": 0,
              "power": 2
            },
            {
              "tags": ["vsLarge"],
              "dice": 0,
              "skill": 1,
              "power": 0
            },
            {
              "tags": ["vsCavalry"],
              "dice": 0,
              "skill": 1,
              "power": 0
            }]
          },
          "specialText": "?(-1) -0/-0 when charging. ?(+0) +1/+0 vs. cavalry or large units. ?(+0) +0/+2 when holding vs. charging cavalry or large. 444295Core00\r"
        },
        {
          "name": "Halfblood Slavetakers",
          "attack": {
            "dice": 4,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 7,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 2
          },
          "points": 181,
          "type": "Core",
          "special": {
            "tags": ["cavalry"],
            "attackMods": [{
              "tags": ["charge"],
              "dice": 0,
              "skill": 0,
              "power": 1
            }],
            "defendMods": [{
              "tags": ["charge"],
              "skill": 1,
              "power": 0
            }]
          },
          "specialText": "Cavalry. ?(+0) +0/+1 and ?+1/+0 while Charging (This is in addition to the normal Charging Bonus.)323158Core00\r"
        },
        {
          "name": "Highblood Blades",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 3,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 3,
            "red": 3
          },
          "points": 255,
          "type": "Core",
          "special": {
            "tags": ["fearsome"]
          },
          "specialText": "Fearsome.?(6)6/6*?2*/3N/A135424142Core00\r"
        },
        {
          "name": "Blade Dancers",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 3,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 3,
            "red": 3
          },
          "points": 284,
          "type": "N/A",
          "special": {
            "tags": ["fearsome"],
            "attackMods": [{
              "tags": ["bladeDance"],
              "dice": 1,
              "skill": 0,
              "power": 0
            }]
          },
          "specialText": "Fearsome. ?(+1) +0/+0 for each Blade Dance box marked. At the beginning of each movement and command phase mark a Blade Dance box if this unit is engaged. At the end of your movement and command phase if it isn't engaged erase a Blade Dance box.332200N/A00\r"
        },
        {
          "name": "Highblood Duskblades",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 6
          },
          "defend": {
            "skill": 3,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 3,
            "red": 3
          },
          "points": 299,
          "type": "N/A",
          "special": {
            "tags": ["fearsome"]
          },
          "specialText": "Fearsome.?(6)6/6*?2*/3N/A135222214N/A00\r"
        },
        {
          "name": "Highblood Lashmistresses",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 3,
            "power": 1
          },
          "ranged": {
            "range": "*"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 3,
            "red": 3
          },
          "points": 313,
          "type": "N/A",
          "special": {
            "tags": ["fearsome", "sirenSong"]
          },
          "specialText": "Fearsome. Siren Song (Spell Attack) ?(5) 6/5 Range: 10.5 Line of Sight. Cast at the end of your Movement and Command Phase. No penalty for Move and Shoot. Damage from this attack can't cause rout checks. The first time a non-routing unit takes damage from Siren Song in a phase move itimmediately towards this unit as if it had a Clase order targeting it. This movement can cause a final rush.?(6)6/6*?2*/3N/A135825900N/A00\r"
        },
        {
          "name": "Dusk Lances",
          "attack": {
            "dice": 6,
            "skill": 6,
            "power": 6
          },
          "defend": {
            "skill": 3,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 5,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 2
          },
          "points": 444,
          "type": "N/A",
          "special": {
            "tags": ["cavalry", "fearsome"],
            "attackMods": [{
              "tags": ["charge"],
              "dice": 0,
              "skill": 0,
              "power": 1
            }],
            "defendMods": [{
              "tags": ["charge"],
              "skill": 1,
              "power": 0
            }]
          },
          "specialText": "Cavalry. Fearsome. ?(+0) +0/+1 and ?+1/+0 while Charging (This is in addition to the normal Charging Bonus.)444345N/A00\r"
        },
        {
          "name": "Drake Riders",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 6,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 1
          },
          "points": 303,
          "type": "N/A",
          "special": {
            "tags": ["cavalry", "fearsome", "flying", "large"],
            "attackMods": [{
              "tags": ["charge"],
              "dice": 0,
              "skill": 0,
              "power": 1
            }],
            "defendMods": [{
              "tags": ["charge"],
              "skill": 1,
              "power": 0
            }]
          },
          "specialText": "Cavalry. Fearsome. Flying: 10.5 Large. ?(+0) +0/+1 and ?+1/+0 while Charging (This is in addition to the normal Charging Bonus.)444345N/A00\r"
        },
        {
          "name": "Standard Bearers",
          "attack": {
            "dice": 3,
            "skill": 6,
            "power": 6
          },
          "defend": {
            "skill": 3,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 14,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 2
          },
          "points": 202,
          "type": "Elite",
          "special": {
            "tags": ["fearsome"]
          },
          "specialText": "Fearsome.?(6)6/6*?2*/3N/A135321360Elite00\r"
        },
        {
          "name": "Pureblood Coven",
          "attack": {
            "dice": 3,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "*"
          },
          "courage": 13,
          "move": 6,
          "wounds": {
            "green": 2,
            "yellow": 2,
            "red": 2
          },
          "points": 308,
          "type": "Elite",
          "special": {
            "tags": ["cavalry", "terrifying", "darkElfSpells"]
          },
          "specialText": "Cavalry. Terrifying. Spells: Midnight's Chill Evil Eye Witching Hour.725500Elite00\r"
        },
        {
          "name": "Lords of Dusk",
          "attack": {
            "dice": 4,
            "skill": 6,
            "power": 6
          },
          "defend": {
            "skill": 3,
            "power": 1
          },
          "ranged": {
            "range": "21"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 2
          },
          "points": 429,
          "type": "Elite",
          "special": {
            "tags": ["terrifying", "darkElfRally"],
            "attackMods": [{
              "tags": ["ranged", "spell", "LOS"]
            }]
          },
          "specialText": "Terrifying. Ranged Attack is a spell and is Line of Sight. No penalty for Move and Shoot. When a friendly unit with a center point within 2.5 of any center point of this unit routs rally it at the end of the turn. When that unit makes a rout move it moves only 1.25.?(6*)6/7?1/3N/AN/A5”545600Elite067\r"
        }
      ]
    },
    {
      "name": "Dwarves",
      "units": [
        {
          "name": "Dwarven Axemen",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 2.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 4
          },
          "points": 240,
          "type": "Core",
          "specialText": "MC 3.5 when Routing of Final Rushing.\r"
        },
        {
          "name": "Dwarven Battleaxemen",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 6
          },
          "defend": {
            "skill": 1,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 2.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 4
          },
          "points": 248,
          "type": "Core",
          "specialText": "MC 3.5 when Routing of Final Rushing.\r"
        },
        {
          "name": "Dwarven Bowmen",
          "attack": {
            "dice": 4,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 0,
            "power": 2
          },
          "ranged": {
            "range": "14"
          },
          "courage": 12,
          "move": 2.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 3
          },
          "points": 158,
          "type": "Core",
          "specialText": "?(-0) -2/-2 and while Engaged. MC 3.5 when Routing of Final Rushing. (Note: Rune of Uruz gives no bonus to ranged attacks.)\r"
        },
        {
          "name": "Dwarven Militia",
          "attack": {
            "dice": 5,
            "skill": 4,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 2.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 4
          },
          "points": 157,
          "type": "Core",
          "specialText": "MC 3.5 when Routing of Final Rushing.0\r"
        },
        {
          "name": "Dwarven Spearmen",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 2.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 4
          },
          "points": 269,
          "type": "Core",
          "specialText": "?(-1) -0/-0 while Charging. ?(+0) +1/+0 vs. Cavalry and/or Large units. ?(+0) +0/+2 while Holding vs. Charging Cavalry and/or Charging Large units. MC 3.5 when Routing of Final Rushing.\r"
        },
        {
          "name": "Dwarven Crossbowmen",
          "attack": {
            "dice": 3,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 1,
            "power": 3
          },
          "ranged": {
            "range": "14"
          },
          "courage": 12,
          "move": 2.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 4
          },
          "points": 255,
          "type": "N/A",
          "specialText": "?(+2) +0/+0 and ?+1/+0 while Engaged. Range attack is Line of Sight. MC 3.5 when Routing of Final Rushing. (Note: Rune of Uruz gives no bonus to ranged attacks.)N/A\r"
        },
        {
          "name": "Dwarven Hammermen",
          "attack": {
            "dice": 7,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 1,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 2.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 4
          },
          "points": 258,
          "type": "N/A",
          "specialText": "MC 3.5 when Routing of Final Rushing.N/A\r"
        },
        {
          "name": "Shortbeards",
          "attack": {
            "dice": 5,
            "skill": 4,
            "power": 5
          },
          "defend": {
            "skill": 1,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 11,
          "move": 2.5,
          "wounds": {
            "green": 3,
            "yellow": 4,
            "red": 3
          },
          "points": 107,
          "type": "N/A",
          "specialText": "MC 3.5 when Routing of Final Rushing.N/A\r"
        },
        {
          "name": "Dwarven Miners",
          "attack": {
            "dice": 4,
            "skill": 4,
            "power": 7
          },
          "defend": {
            "skill": 1,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 2.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 4
          },
          "points": 144,
          "type": "N/A",
          "specialText": "MC 3.5 when Routing of Final Rushing.N/A\r"
        },
        {
          "name": "Antonian Horsemen",
          "attack": {
            "dice": 6,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 3,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 7,
          "wounds": {
            "green": 2,
            "yellow": 2,
            "red": 2
          },
          "points": 280,
          "type": "Elite",
          "specialText": "Cavalry. ?(+0) +0/+1 and ?+1/+0 while Charging (This is in addition to the normal Charging bonus.) May not Sprint. May not be empowered with Rune of Uruz.\r"
        },
        {
          "name": "Dwarven Ballista",
          "attack": {
            "dice": 4,
            "skill": 5,
            "power": 7
          },
          "defend": {
            "skill": 1,
            "power": 2
          },
          "ranged": {
            "range": "21"
          },
          "courage": 12,
          "move": 2.5,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 2
          },
          "points": 294,
          "type": "Elite",
          "specialText": "?(-1) -1/-2 while Engaged. May not Sprint. Cannont move and Shoot. Cannot Shoot at Engaged units. Cannot shoot over terrain features that block line of Sight. (Note: Dwarven Ballista is an indirect fire weapon.) (Note: Rune of Uruz gives no bonus to ranged attacks.)\r"
        },
        {
          "name": "Longbeards",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 6
          },
          "defend": {
            "skill": 1,
            "power": 4
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 14,
          "move": 2.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 4
          },
          "points": 394,
          "type": "Elite",
          "specialText": "Passes all Fear Checks. (This ability does not apply to Rout Checks.) MC 3.5 when Routing of Final Rushing.\r"
        }
      ]
    },
    {
      "name": "Men of Hawkshold",
      "units": [
        {
          "name": "Bowmen",
          "attack": {
            "dice": 4,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 1,
            "power": 1
          },
          "ranged": {
            "range": "14"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 2
          },
          "points": 165,
          "type": "Core",
          "specialText": "?(-0) -2/-2 and while Engaged.332165Core#VALUE!\r"
        },
        {
          "name": "Militia",
          "attack": {
            "dice": 5,
            "skill": 4,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 11,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 4
          },
          "points": 115,
          "type": "Core",
          "specialText": "334115Core#VALUE!\r"
        },
        {
          "name": "Peasant Mob",
          "attack": {
            "dice": 5,
            "skill": 4,
            "power": 4
          },
          "defend": {
            "skill": 1,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 10,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 3
          },
          "points": 70,
          "type": "Core",
          "specialText": "33370Core#VALUE!\r"
        },
        {
          "name": "Spearmen",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 5,
            "yellow": 2,
            "red": 3
          },
          "points": 220,
          "type": "Core",
          "specialText": "?(-1) -0/-0 while Charging. ?(+0) +1/+0 vs. Cavalry and/or Large units. ?(+0) +0/+2 while Holding vs. Charging Cavalry and/or Charging Large units. 523220Core#VALUE!\r"
        },
        {
          "name": "Swordsmen",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 5,
            "yellow": 2,
            "red": 3
          },
          "points": 197,
          "type": "Core",
          "specialText": "523197Core#VALUE!\r"
        },
        {
          "name": "Great Swordsmen",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 6
          },
          "defend": {
            "skill": 1,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 2.5,
          "wounds": {
            "green": 5,
            "yellow": 3,
            "red": 3
          },
          "points": 271,
          "type": "N/A",
          "specialText": "533271N/A#VALUE!\r"
        },
        {
          "name": "Heavy Infantry",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 3,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 2.5,
          "wounds": {
            "green": 5,
            "yellow": 3,
            "red": 3
          },
          "points": 282,
          "type": "N/A",
          "specialText": "533282N/A#VALUE!\r"
        },
        {
          "name": "Light Cavalry",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 6,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 1
          },
          "points": 245,
          "type": "N/A",
          "specialText": "Cavalry. ?(+0) +0/+1 and ?+1/+0 while Charging (This is in addition to the normal Charging Bonus.)?(6)6/6*?2*/3N/A135321245N/A#VALUE!\r"
        },
        {
          "name": "Pikemen",
          "attack": {
            "dice": 7,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 1,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 2.5,
          "wounds": {
            "green": 5,
            "yellow": 2,
            "red": 3
          },
          "points": 193,
          "type": "N/A",
          "specialText": "?(-2) -0/-0 while Charging. ?(+0) +1/+0 vs. Cavalry and/or Large units. ?(+0) +0/+2 while Holding vs. Charging Cavalry and/or Charging Large units. ?+1/+0 vs. Cavalry and/or Large units.523193N/A#VALUE!\r"
        },
        {
          "name": "Scouts",
          "attack": {
            "dice": 4,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 7,
          "wounds": {
            "green": 2,
            "yellow": 2,
            "red": 2
          },
          "points": 146,
          "type": "N/A",
          "specialText": "Cavalry. ?+1/+0 while Charging (This is in addition to the normal Charging Bonus.)?(6)6/6*?2*/3N/A135222146N/A#VALUE!\r"
        },
        {
          "name": "Knights",
          "attack": {
            "dice": 6,
            "skill": 6,
            "power": 6
          },
          "defend": {
            "skill": 2,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 5,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 2
          },
          "points": 413,
          "type": "Elite",
          "specialText": "Cavalry. ?(+0) +0/+1 and ?+1/+0 while Charging (This is in addition to the normal Charging Bonus.)?(6)6/6*?2*/3N/A135322413Elite#VALUE!\r"
        },
        {
          "name": "Longbowmen",
          "attack": {
            "dice": 4,
            "skill": 6,
            "power": 6
          },
          "defend": {
            "skill": 1,
            "power": 1
          },
          "ranged": {
            "range": "21"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 2
          },
          "points": 358,
          "type": "Elite",
          "specialText": "?(-0) -2/-2 and while Engaged.332358Elite#VALUE!66\r"
        }
      ]
    },
    {
      "name": "High Elves",
      "units": [
        {
          "name": "Cygnets",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 2,
            "red": 3
          },
          "points": 177,
          "type": "Core",
          "specialText": "423177Core6\r"
        },
        {
          "name": "High Elf Archers",
          "attack": {
            "dice": 4,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 1,
            "power": 2
          },
          "ranged": {
            "range": "14”"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 2
          },
          "points": 225,
          "type": "Core",
          "specialText": "?(-0) -2/-2 and while Engaged.322225Core5\r"
        },
        {
          "name": "High Elf Battle Squad",
          "attack": {
            "dice": 3,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 3,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 2
          },
          "points": 187,
          "type": "Core",
          "specialText": "332187Core6\r"
        },
        {
          "name": "Elder-Blade Battle Squad",
          "attack": {
            "dice": 3,
            "skill": 6,
            "power": 6
          },
          "defend": {
            "skill": 3,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 2
          },
          "points": 220,
          "type": "Core",
          "specialText": "332220Core4\r"
        },
        {
          "name": "High Elf Chariots",
          "attack": {
            "dice": 4,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 5,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 2
          },
          "points": 252,
          "type": "Core",
          "specialText": "Cavalry. Wheeled. ?(+0) +0/+1 and ?+1/+0 while Charging (This is in addition to the normal Charging Bonus.) If Unengaged Chariots become Engaged on the flank while on Close they are considered Charging +1 Impact Hit (two total) when Charging with the front.?(6)6/6*?2*/3N/A135322252Core7\r"
        },
        {
          "name": "High Elf Spearmen",
          "attack": {
            "dice": 6,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 3,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 3,
            "red": 3
          },
          "points": 334,
          "type": "Core",
          "specialText": "?(-1) -0/-0 while Charging. ?(+0) +1/+0 vs. Cavalry and/or Large units. ?(+0) +0/+2 while Holding vs. Charging Cavalry and/or Charging Large units. 433334Core6\r"
        },
        {
          "name": "High Elf Swordsmen",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 3,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 3,
            "red": 3
          },
          "points": 299,
          "type": "Core",
          "specialText": "433299Core6\r"
        },
        {
          "name": "Elder-Blade Swordsmen",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 6
          },
          "defend": {
            "skill": 3,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 3,
            "red": 3
          },
          "points": 352,
          "type": "Core",
          "specialText": "433352Core4\r"
        },
        {
          "name": "High Elf Bowriders",
          "attack": {
            "dice": 4,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "14”"
          },
          "courage": 13,
          "move": 6,
          "wounds": {
            "green": 2,
            "yellow": 2,
            "red": 2
          },
          "points": 292,
          "type": "N/A",
          "specialText": "Cavalry. ?(+1) +0/+0 when Engaged. ?+1/+0 while Charging (This is in addition to the normal Charging Bonus.)?(6)6/6*?2*/3N/A135222292N/A4\r"
        },
        {
          "name": "High Elf Rangers",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 3,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 5,
          "wounds": {
            "green": 4,
            "yellow": 2,
            "red": 2
          },
          "points": 261,
          "type": "N/A",
          "specialText": "?+1/+0 vs. range.?(6)6/6*?2*/3N/A135422261N/A4\r"
        },
        {
          "name": "Elder-Blade Rangers",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 6
          },
          "defend": {
            "skill": 3,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 5,
          "wounds": {
            "green": 4,
            "yellow": 2,
            "red": 2
          },
          "points": 307,
          "type": "N/A",
          "specialText": "?+1/+0 vs. range.?(6)6/6*?2*/3N/A135422307N/A3\r"
        },
        {
          "name": "Celestial Guard",
          "attack": {
            "dice": 5,
            "skill": 7,
            "power": 6
          },
          "defend": {
            "skill": 4,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 14,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 3,
            "red": 3
          },
          "points": 506,
          "type": "Elite",
          "specialText": "433506Elite3\r"
        },
        {
          "name": "High Elf Battlemages",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "14”"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 2,
            "yellow": 2,
            "red": 2
          },
          "points": 239,
          "type": "Elite",
          "specialText": "?(-2) -2/-2 and while Engaged. During your turn if this unit is Unengaged you may draw a Command Card at the start of the Combat Phase. If you do this unit does not make a range attack this turn.222239Elite4\r"
        },
        {
          "name": "High Elf Knights",
          "attack": {
            "dice": 6,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 3,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 5,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 2
          },
          "points": 378,
          "type": "Elite",
          "specialText": "Cavalry. ?(+0) +0/+2 and ?+1/+0 while Charging (This is in addition to the normal Charging Bonus.)?(6)6/6*?2*/3N/A135322378Elite3\r"
        },
        {
          "name": "High Elf Scorpions",
          "attack": {
            "dice": 4,
            "skill": 6,
            "power": 6
          },
          "defend": {
            "skill": 1,
            "power": 2
          },
          "ranged": {
            "range": "17.5”"
          },
          "courage": 13,
          "move": 2.5,
          "wounds": {
            "green": 2,
            "yellow": 2,
            "red": 2
          },
          "points": 260,
          "type": "Elite",
          "specialText": "Wheeled. ?(-1) -2/-3 while Engaged. May not Sprint. Cannot move and Shoot. Cannot Shoot at Engaged units. Cannot Shoot over terrain features that block Line of Sight.?(6)6/6*?2*/3N/A135222260Elite3\r"
        }
      ]
    },
    {
      "name": "Lizardmen",
      "units": [
        {
          "name": "Swarmling Warriors",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 4
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 11,
          "move": 5,
          "wounds": {
            "green": 4,
            "yellow": 3,
            "red": 3
          },
          "points": 141,
          "type": "Core",
          "specialText": "Blood Frenzy: ?(+1) +0/+0 and Courage +2 while Engaged with a unit not in the green.?(5*)6/5?2/2N/A11*6”433141Core7\r"
        },
        {
          "name": "Trog Spearmen",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 3
          },
          "points": 243,
          "type": "Core",
          "specialText": "Blood Frenzy: ?(+1) +0/+0 and Courage +2 while Engaged with a unit not in the green.?(-1) -0/-0 while Charging. ?(+0) +1/+0 vs. Cavalry and/or Large units. ?(+0) +0/+2 while Holding vs. Charging Cavalry and/or Charging Large units. 443243Core6\r"
        },
        {
          "name": "Trog Warriors",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 3
          },
          "points": 218,
          "type": "Core",
          "specialText": "Blood Frenzy: ?(+1) +0/+0 and Courage +2 while Engaged with a unit not in the green.?(5*)6/5?2/2N/A11*6”443218Core7\r"
        },
        {
          "name": "Tyrant Spearmen",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 6
          },
          "defend": {
            "skill": 2,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 5,
            "yellow": 4,
            "red": 3
          },
          "points": 375,
          "type": "Core",
          "specialText": "Blood Frenzy: ?(+1) +0/+0 and Courage +2 while Engaged with a unit not in the green.?(-1) -0/-0 while Charging. ?(+0) +1/+0 vs. Cavalry and/or Large units. ?(+0) +0/+2 while Holding vs. Charging Cavalry and/or Charging Large units. 543375Core5\r"
        },
        {
          "name": "Tyrant Warriors",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 6
          },
          "defend": {
            "skill": 2,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 5,
            "yellow": 4,
            "red": 3
          },
          "points": 338,
          "type": "Core",
          "specialText": "Blood Frenzy: ?(+1) +0/+0 and Courage +2 while Engaged with a unit not in the green.?(5*)6/5?2/2N/A11*6”543338Core6\r"
        },
        {
          "name": "Ancients",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 7
          },
          "defend": {
            "skill": 1,
            "power": 4
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 5,
          "wounds": {
            "green": 6,
            "yellow": 0,
            "red": 6
          },
          "points": 409,
          "type": "N/A",
          "specialText": "Large. Fearsome. Blood Frenzy: ?(+1) +0/+0 and Courage +2 while Engaged with a unit not in the green.?(5*)6/5?2/2N/A11*6”606409N/A4\r"
        },
        {
          "name": "Hatchlings",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 3
          },
          "defend": {
            "skill": 1,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 11,
          "move": 5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 3
          },
          "points": 91,
          "type": "N/A",
          "specialText": "Blood Frenzy: ?(+1) +0/+0 and Courage +2 while Engaged with a unit not in the green.?(5*)6/5?2/2N/A11*6”33391N/A7\r"
        },
        {
          "name": "Raptor Pack",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 11,
          "move": 6,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 3
          },
          "points": 290,
          "type": "N/A",
          "specialText": "Blood Frenzy: ?(+1) +0/+0 and Courage +2 while Engaged with a unit not in the green.?(5*)6/5?2/2N/A11*6”443290N/A4\r"
        },
        {
          "name": "Swarmling Bowmen",
          "attack": {
            "dice": 4,
            "skill": 5,
            "power": 4
          },
          "defend": {
            "skill": 1,
            "power": 1
          },
          "ranged": {
            "range": "10.5”"
          },
          "courage": 11,
          "move": 5,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 2
          },
          "points": 112,
          "type": "N/A",
          "specialText": "Blood Frenzy: ?(+1) +0/+0 and Courage +2 while Engaged with a unit not in the green. ?(-0) -2/-2 and while Engaged.322112N/A6\r"
        },
        {
          "name": "Trog Bowmen",
          "attack": {
            "dice": 4,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 1,
            "power": 2
          },
          "ranged": {
            "range": "14”"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 2
          },
          "points": 176,
          "type": "N/A",
          "specialText": "Blood Frenzy: ?(+1) +0/+0 and Courage +2 while Engaged with a unit not in the green. ?(-0) -2/-2 and while Engaged.332176N/A5\r"
        },
        {
          "name": "Triceratops Herd",
          "attack": {
            "dice": 4,
            "skill": 5,
            "power": 6
          },
          "defend": {
            "skill": 1,
            "power": 4
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 5,
            "yellow": 4,
            "red": 4
          },
          "points": 322,
          "type": "Elite",
          "specialText": "Large and Fearsome. Three Impact Hits. May not be directly controlled. May not be given a Standing Order Modifier or fury. To play command cards on Triceratops Herd you must first discard one other command card. MC 5 when Routing or Final Rushing.?(4)5/6?1/4N/A123.5”*544322Elite4\r"
        },
        {
          "name": "Tyrannosaurus Rex",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 8
          },
          "defend": {
            "skill": 2,
            "power": 4
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 5,
          "wounds": {
            "green": 8,
            "yellow": 2,
            "red": 5
          },
          "points": 507,
          "type": "Elite",
          "specialText": "Colossal. Terrifying. Always has the Close Standing Order and may not be given a Standing Order Modifier or be directly controlled. May not be given Fury. To play Command Cards on Tyrannosaurus Rex you must first discard two other Command Cards. Tyrannosaurus Rex requires two Command Actions to Rally. ?(5)6/8?2/4N/A125”825507Elite3\r"
        }
      ]
    },
    {
      "name": "Monsters & Mercenaries",
      "units": [
        {
          "name": "Half-Orc Spearmen",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 11,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 2,
            "red": 4
          },
          "points": 242,
          "type": "Core",
          "specialText": "?(-1) -0/-0 while Charging. ?(+0) +1/+0 vs. Cavalry and/or Large units. ?(+0) +0/+2 while Holding vs. Charging Cavalry and/or Charging Large units. 424242Core6\r"
        },
        {
          "name": "Half-Orc Swordmen",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 11,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 2,
            "red": 4
          },
          "points": 216,
          "type": "Core",
          "specialText": "424216Core7\r"
        },
        {
          "name": "Ogres",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 6
          },
          "defend": {
            "skill": 2,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 4
          },
          "points": 295,
          "type": "Core",
          "specialText": "Large. Fearsome. Stupid. (Changing Standing Orders taking Direct Control or Rallying this unit costs two Command Actions rather than one.)?(5)5/6?2/3N/A125”444295Core7\r"
        },
        {
          "name": "Wildmen Archers",
          "attack": {
            "dice": 4,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 1,
            "power": 1
          },
          "ranged": {
            "range": "14”"
          },
          "courage": 11,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 3
          },
          "points": 158,
          "type": "Core",
          "specialText": "?(-0) -2/-2 and while Engaged.323158Core5\r"
        },
        {
          "name": "Wildmen Sword",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 11,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 2,
            "red": 4
          },
          "points": 142,
          "type": "Core",
          "specialText": "424142Core9\r"
        },
        {
          "name": "Healer Mages",
          "attack": {
            "dice": 3,
            "skill": 4,
            "power": 3
          },
          "defend": {
            "skill": 1,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 11,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 2
          },
          "points": 200,
          "type": "N/A",
          "specialText": "During your turn if this unit is Unengaged it may cast one of the following spells: Aura Cleanse (Blessing/Healing) Range: 7 Put an Aura Cleanse marker on a friendly unit. Heal (Healing) Range: 7 Remove one damage from a friendly unit or zero damage if it is Lard or Cavalry. If the unit has An Aura Cleanse marker you may remove it to heal one additional damage.?(3)4/3?1/2N/A113.5”332200N/A4\r"
        },
        {
          "name": "Wildmen Horse Archers",
          "attack": {
            "dice": 4,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "10.5”"
          },
          "courage": 11,
          "move": 6,
          "wounds": {
            "green": 2,
            "yellow": 2,
            "red": 2
          },
          "points": 214,
          "type": "N/A",
          "specialText": "Cavalry. ?+1/+0 while Charging (This is in addition to the normal Charging Bonus.) No penalty for Move and Shoot.?(6)6/6*?2*/3N/A135222214N/A5\r"
        },
        {
          "name": "Ancient Red Dragon",
          "attack": {
            "dice": 6,
            "skill": 6,
            "power": 8
          },
          "defend": {
            "skill": 2,
            "power": 4
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 14,
          "move": 5,
          "wounds": {
            "green": 8,
            "yellow": 2,
            "red": 5
          },
          "points": 900,
          "type": "Elite",
          "specialText": "Large. Fearsome. Flying: MC 10.5 Red Dragon may breathe fire twice during a battle. Mark off a fire icon to give Red Dragon Range 7 (Line of Sight) this turn. To play a Command Card on Ancient Red Dragon you must first discard two other Command Cards.?(5)6/7?2/4*135”*825900Elite2\r"
        },
        {
          "name": "Earth Elemental",
          "attack": {
            "dice": 5,
            "skill": 4,
            "power": 8
          },
          "defend": {
            "skill": 1,
            "power": 4
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": null,
          "move": 5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 4
          },
          "points": 345,
          "type": "Elite",
          "specialText": "Large. Fearsome. Always has the Close Standing Order and may not be given a Standing Order Modifier or be Directly Controlled. To play a Command Card on Earth Elemental you must first discard two other Command Cards.?(5)5/6?2/3N/A125”444345Elite3\r"
        },
        {
          "name": "Elementalist",
          "attack": {
            "dice": 3,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "*"
          },
          "courage": 11,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 1
          },
          "points": 360,
          "type": "Elite",
          "specialText": "During your turn if this unit is Unengaged it may cast one of the following spells: Lightning Strike (Attack) ?(2)7/7 Range: 17.5 Lightning Strike is unaffected by Command Cards from either player. Fireball (Attack) ?(4)6/6 Range: 10.5?(3)6/5?2/2*113.5”321360Elite4\r"
        },
        {
          "name": "Hill Giant",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 8
          },
          "defend": {
            "skill": 1,
            "power": 4
          },
          "ranged": {
            "range": "*"
          },
          "courage": 13,
          "move": 6,
          "wounds": {
            "green": 7,
            "yellow": 2,
            "red": 5
          },
          "points": 500,
          "type": "Elite",
          "specialText": "Large. Fearsome. Stupid. (Changing Standing Orders taking Direct Control or Rallying this unit costs two Command Actions rather than one.) You may spend two Command Actions to have Hill Giant gain Range 21 this turn. To play a Command Card on Hill Giant you must first discard two other Command Cards.?(5)5/6?2/3N/A125”725500Elite4\r"
        },
        {
          "name": "Hydra",
          "attack": {
            "dice": 6,
            "skill": 6,
            "power": 7
          },
          "defend": {
            "skill": 1,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": null,
          "move": 5,
          "wounds": {
            "green": 5,
            "yellow": 4,
            "red": 5
          },
          "points": 600,
          "type": "Elite",
          "specialText": "Colossal. Terrifying. Passes all Courage Checks. Always has the Close Standing Order and may not be given a Standing Order Modifier or be Directly Controlled. At the start of your Movement and Command Phase. Hydra heals one damage. Each time Hydra heals in this way it gains ?(+1) +0/+0 permanently. To Play a Command Card on Hydra you must first discard two other command cards.?(6*)6/7?1/3N/AN/A5”545600Elite3\r"
        },
        {
          "name": "Red Dragon",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 7
          },
          "defend": {
            "skill": 2,
            "power": 4
          },
          "ranged": {
            "range": "*"
          },
          "courage": 13,
          "move": 5,
          "wounds": {
            "green": 6,
            "yellow": 2,
            "red": 4
          },
          "points": 691,
          "type": "Elite",
          "specialText": "Large. Fearsome. Flying: MC 10.5 Red Dragon may breathe fire twice during a battle. Mark off a fire icon to give Red Dragon Range 7 (Line of Sight) this turn. To play a Command Card on Red Dragon you must first discard two other Command Cards.?(5)6/7?2/4*135”*624691Elite3\r"
        }
      ]
    },
    {
      "name": "Orc Army",
      "units": [
        {
          "name": "Goblin Bowmen",
          "attack": {
            "dice": 4,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 0,
            "power": 1
          },
          "ranged": {
            "range": "14"
          },
          "courage": 11,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 2
          },
          "points": 146,
          "type": "Core",
          "specialText": "?(-0) -2/-2 and while Engaged.322146Core8\r"
        },
        {
          "name": "Goblin Raiders",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 1,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 11,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 2,
            "red": 3
          },
          "points": 143,
          "type": "Core",
          "specialText": "423143Core4\r"
        },
        {
          "name": "Goblin Spearmen",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 1,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 11,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 2,
            "red": 3
          },
          "points": 160,
          "type": "Core",
          "specialText": "?(-1) -0/-0 while Charging. ?(+0) +1/+0 vs. Cavalry and/or Large units. ?(+0) +0/+2 while Holding vs. Charging Cavalry and/or Charging Large units. 423160Core7\r"
        },
        {
          "name": "Orc Spearmen",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 2
          },
          "points": 264,
          "type": "Core",
          "specialText": "?(-1) -0/-0 while Charging. ?(+0) +1/+0 vs. Cavalry and/or Large units. ?(+0) +0/+2 while Holding vs. Charging Cavalry and/or Charging Large units. 442264Core6\r"
        },
        {
          "name": "Orc Swordsmen",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 2
          },
          "points": 237,
          "type": "Core",
          "specialText": "442237Core6\r"
        },
        {
          "name": "Crazed Goblins",
          "attack": {
            "dice": 5,
            "skill": 4,
            "power": 4
          },
          "defend": {
            "skill": 0,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": null,
          "move": 5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 2
          },
          "points": 83,
          "type": "N/A",
          "specialText": "Always has the Close Standing Order and may not be given a Standing Order Modifier or be directly controlled. Passes all Courage Checks. Is unaffected by your Command Cards and may not be Lashed. You may not play Command Cards while Crazed Goblins is attacking or defending.?(5)4/4?0/1N/AN/A533283N/A6\r"
        },
        {
          "name": "Goblin Wolf Riders",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 1,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 11,
          "move": 7,
          "wounds": {
            "green": 2,
            "yellow": 2,
            "red": 1
          },
          "points": 185,
          "type": "N/A",
          "specialText": "Cavalry. ?(+0) +0/+1 and ?+1/+0 while Charging (This is in addition to the normal Charging Bonus.) ?(+2) +0/+0 vs. Routing units.?(6)6/6*?2*/3N/A135221185N/A5\r"
        },
        {
          "name": "Orc Axemen",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 6
          },
          "defend": {
            "skill": 1,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 5,
            "yellow": 3,
            "red": 2
          },
          "points": 300,
          "type": "N/A",
          "specialText": "532300N/A4\r"
        },
        {
          "name": "Orc Crossbowmen",
          "attack": {
            "dice": 3,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 1,
            "power": 3
          },
          "ranged": {
            "range": "14"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 2
          },
          "points": 267,
          "type": "N/A",
          "specialText": "?(+2) +0/+1 and while Engaged. Range attack is Line of Sight.442267N/A6\r"
        },
        {
          "name": "Orc Marauders",
          "attack": {
            "dice": 7,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 5,
            "yellow": 3,
            "red": 2
          },
          "points": 367,
          "type": "",
          "specialText": "532367N/A4\r"
        },
        {
          "name": "Goblin Bomb-Chucker",
          "attack": {
            "dice": null,
            "skill": 5,
            "power": 6
          },
          "defend": {
            "skill": 1,
            "power": 2
          },
          "ranged": {
            "range": "21"
          },
          "courage": 11,
          "move": 2.5,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 2
          },
          "points": 300,
          "type": "Elite",
          "specialText": "While engaged Goblin Bomb-Chucker is ?(3) 4/4. Cannot move and shoot. As part of its roll to hit first roll two dice. (This roll may not be changed.) If you roll doubles. Goblin Bomb-Chucker recieves one damage and has no Attack Dice. Otherwise the result is its number of Attack Dice. You cannot play Command Cards while Goblin Bomb-Chucker is attacking. ?(*)5*/6*?1/221112.5322300Elite4\r"
        },
        {
          "name": "Trolls",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 7
          },
          "defend": {
            "skill": 1,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 5,
          "wounds": {
            "green": 7,
            "yellow": 0,
            "red": 7
          },
          "points": 406,
          "type": "Elite",
          "specialText": "Large. Fearsome. At the start of your Movement and Command Phase Trolls heal one damage. Once Trolls are in the red only red damage may be healed.?(5)5/7?1/3N/A135707406Elite4\r"
        }
      ]
    },
    {
      "name": "Elves of Ravenwood",
      "units": [
        {
          "name": "Bearkin",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 6
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 2
          },
          "points": 244,
          "type": "Core",
          "specialText": "442244Core\r"
        },
        {
          "name": "Ravenwood Archers",
          "attack": {
            "dice": 4,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "14"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 2
          },
          "points": 234,
          "type": "Core",
          "specialText": "?(-0) -2/-2 and while Engaged.332234Core\r"
        },
        {
          "name": "Ravenwood Spearmen",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 3,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 3,
            "red": 2
          },
          "points": 230,
          "type": "Core",
          "specialText": "?(-1) -0/-0 while Charging. ?(+0) +1/+0 vs. Cavalry and/or Large units. ?(+0) +0/+2 while Holding vs. Charging Cavalry and/or Charging Large units. Nets: Rolls an extra Attack Die for each unmodified to hit roll of 1.432230Core\r"
        },
        {
          "name": "Ravenwood Swordsmen",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 3,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 3,
            "red": 2
          },
          "points": 207,
          "type": "Core",
          "specialText": "Nets: Rolls an extra Attack Die for each unmodified to hit roll of 1.432207Core\r"
        },
        {
          "name": "Wolfkin",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 2
          },
          "points": 179,
          "type": "Core",
          "specialText": "?(+2) +0/+0 and ?+3/+0 during post-Rout Free Attacks. If Wolfkin Routs it automatically rallies at the end of turn.332179Core\r"
        },
        {
          "name": "Bear Pack",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 6
          },
          "defend": {
            "skill": 1,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 14,
          "move": 5,
          "wounds": {
            "green": 5,
            "yellow": 5,
            "red": 2
          },
          "points": 307,
          "type": "N/A",
          "specialText": "Is unaffected by your command Cards and may not be given Spirit Guidance. You may not play Command Cards while Bear Pack is attacking or defending. Unless your army currently contains a Bearkin Unit Bear Pack can only be given the Close Standing Order (with no Objective).552307N/A\r"
        },
        {
          "name": "Brownies",
          "attack": {
            "dice": 5,
            "skill": 4,
            "power": 4
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 2,
            "yellow": 2,
            "red": 2
          },
          "points": 79,
          "type": "N/A",
          "specialText": "22279N/A\r"
        },
        {
          "name": "Centaurs",
          "attack": {
            "dice": 6,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "3.5"
          },
          "courage": 13,
          "move": 6,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 2
          },
          "points": 380,
          "type": "N/A",
          "specialText": "Cavalry. ?(+0) +0/+1 and ?+1/+0 while Charging (This is in addition to the normal Charging Bonus.) No range penalty for Move and Shoot or Long Range. If Centaurs are not Engaged at the start of the turn and become Engaged on their front side they make a Range Attack at the start of the Combat Phase before normal attacks are rolled.322380N/A\r"
        },
        {
          "name": "Stag Cavalry",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 3,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 6,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 1
          },
          "points": 271,
          "type": "N/A",
          "specialText": "Cavalry. ?(+0) +0/+1 and ?+1/+0 while Charging (This is in addition to the normal Charging Bonus.) Nets: Rolls an extra Attack Die for each unmodified to hit roll of 1.321271N/A\r"
        },
        {
          "name": "Wolf Pack",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 11,
          "move": 7,
          "wounds": {
            "green": 1,
            "yellow": 5,
            "red": 1
          },
          "points": 146,
          "type": "N/A",
          "specialText": "?(+2) +0/+0 and ?+3/+0 during post-Rout Free Attacks. If Wolf Pack Routs it automatically rallies at the end of turn. Is unaffected by your command Cards and may not be given Spirit Guidance. You may not play Command Cards while Wolf Pack is attacking or defending. Unless your army currently contains a Wolfkin Unit Wolf Pack can only be given the Close Standing Order (with no Objective).151146N/A\r"
        },
        {
          "name": "Ravenwood Bowmasters",
          "attack": {
            "dice": 4,
            "skill": 7,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "17.5"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 3
          },
          "points": 335,
          "type": "Elite",
          "specialText": "?(-0) -2/-2 and while Engaged.333335Elite\r"
        },
        {
          "name": "Treant",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 7
          },
          "defend": {
            "skill": 1,
            "power": 4
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 14,
          "move": 5,
          "wounds": {
            "green": 5,
            "yellow": 5,
            "red": 4
          },
          "points": 444,
          "type": "Elite",
          "specialText": "Fearsome. Large.554444Elite\r"
        }
      ]
    },
    {
      "name": "Rome",
      "units": [
        {
          "name": "Equites",
          "attack": {
            "dice": 4,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 11,
          "move": 6,
          "wounds": {
            "green": 3,
            "yellow": 1,
            "red": 2
          },
          "points": 148,
          "type": "Core",
          "specialText": "Cavalry. ?+1/+0 while Charging.?(6)6/6*?2*/3N/A135424242Core6\r"
        },
        {
          "name": "Hastati",
          "attack": {
            "dice": 5,
            "skill": 4,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "3.5"
          },
          "courage": 10,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 4
          },
          "points": 119,
          "type": "Core",
          "specialText": "(2 Reinforcement Boxes) Courage +1 if backed up. Range attack uses the Pila rule.424216Core7\r"
        },
        {
          "name": "Italian Cavalry",
          "attack": {
            "dice": 4,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 11,
          "move": 6,
          "wounds": {
            "green": 3,
            "yellow": 1,
            "red": 2
          },
          "points": 123,
          "type": "Core",
          "specialText": "Cavalry. ?+1/+0 while Charging.?(6)6/6*?2*/3N/A135444295Core7\r"
        },
        {
          "name": "Italian Spearmen",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 11,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 3,
            "red": 3
          },
          "points": 171,
          "type": "Core",
          "specialText": "(2 Reinforcement Boxes) Courage +1 if backed up. ?(-1) -0/-0 when charging. ?(+0) +1/+0 vs. cavalry or large units. ?(+0) +0/+2 when holding vs. charging cavalry or large. 323158Core5\r"
        },
        {
          "name": "Italian Swordsmen",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "3.5"
          },
          "courage": 11,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 3,
            "red": 3
          },
          "points": 174,
          "type": "Core",
          "specialText": "(2 Reinforcement Boxes) Courage +1 if backed up. Range attack uses the Pila rule.424142Core9\r"
        },
        {
          "name": "Principes",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "3.5"
          },
          "courage": 11,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 3,
            "red": 3
          },
          "points": 202,
          "type": "Core",
          "specialText": "(2 Reinforcement Boxes) Courage +1 if backed up. Range attack uses the Pila rule.332200Core4\r"
        },
        {
          "name": "Triarii",
          "attack": {
            "dice": 3,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 3,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 3
          },
          "points": 193,
          "type": "Core",
          "specialText": "(2 Reinforcement Boxes) ?(+0) +1/+0 vs. cavalry or large units. ?(+0) +0/+2 when holding vs. charging cavalry or large. Backs up any unit whose rear center point is closer than its front center point and within 5 of Triarii front center point. Units backed up by at least one Triarii get ?(+1) +0/+0 unless charging.222214Core5\r"
        },
        {
          "name": "Velites",
          "attack": {
            "dice": 3,
            "skill": 5,
            "power": 4
          },
          "defend": {
            "skill": 1,
            "power": 0
          },
          "ranged": {
            "range": "5"
          },
          "courage": 10,
          "move": 5,
          "wounds": {
            "green": 2,
            "yellow": 3,
            "red": 1
          },
          "points": 73,
          "type": "Core",
          "specialText": "Skirmisher. Ranged attack uses the Javelin rule. ?+2/+0 vs. ranged attacks.?(5)6/7?2/4*135”*825900Core2\r"
        },
        {
          "name": "Veteran Equites",
          "attack": {
            "dice": 4,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 6,
          "wounds": {
            "green": 3,
            "yellow": 1,
            "red": 2
          },
          "points": 217,
          "type": "N/A",
          "specialText": "Cavalry. ?+1/+0 while Charging.?(6)6/6*?2*/3N/A135444345N/A32.6666666667\r"
        },
        {
          "name": "Veteran Hastati",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "3.5"
          },
          "courage": 11,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 4,
            "red": 3
          },
          "points": 169,
          "type": "N/A",
          "specialText": "(2 Reinforcement Boxes) Courage +1 if backed up. Range attack uses the Pila rule.321360N/A4\r"
        },
        {
          "name": "Veteran Principes",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "3.5"
          },
          "courage": 12,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 2
          },
          "points": 263,
          "type": "N/A",
          "specialText": "(2 Reinforcement Boxes) Courage +1 if backed up. Range attack uses the Pila rule.725500N/A4\r"
        },
        {
          "name": "Cretan Archers",
          "attack": {
            "dice": 3,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 1,
            "power": 0
          },
          "ranged": {
            "range": "10.5"
          },
          "courage": 11,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 1
          },
          "points": 77,
          "type": "Elite",
          "specialText": "Skirmisher. ?+2/+0 vs. ranged attacks. ?(-0) -2/-2 when engaged.?(6*)6/7?1/3N/AN/A5”545600Elite3\r"
        },
        {
          "name": "Extraordinarii",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 5
          },
          "defend": {
            "skill": 3,
            "power": 2
          },
          "ranged": {
            "range": "3.5"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 2
          },
          "points": 331,
          "type": "Elite",
          "specialText": "(2 Reinforcement Boxes) Range attack uses the Pila rule.624691Elite3\r"
        }
      ]
    },
    {
      "name": "Umenzi Tribesmen",
      "units": [
        {
          "name": "Initiates",
          "attack": {
            "dice": 5,
            "skill": 4,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 9,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 4,
            "red": 3
          },
          "points": 104,
          "type": "Core",
          "specialText": "Courage +2 while within the Leadership.343104Core6\r"
        },
        {
          "name": "Umenzi Atlatlmen",
          "attack": {
            "dice": 4,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 1,
            "power": 1
          },
          "ranged": {
            "range": "7"
          },
          "courage": 10,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 4,
            "red": 2
          },
          "points": 115,
          "type": "Core",
          "specialText": "Courage +2 while within the Leadership Range of any of your non-routing units. ?(-0) -1/-1 and while Engaged.342115Core7\r"
        },
        {
          "name": "Umenzi Javelineers",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "3.5"
          },
          "courage": 10,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 2
          },
          "points": 184,
          "type": "Core",
          "specialText": "Courage +2 while within the Leadership Range of any of your non-routing units. Range attack uses the Javelin rule.?(5)5/5?2/13.510*3.5442184Core7\r"
        },
        {
          "name": "Umenzi Spearmen",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 10,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 2
          },
          "points": 170,
          "type": "Core",
          "specialText": "Courage +2 while within the Leadership Range of any of your non-routing units. ?(-1) -0/-0 while Charging. ?(+0) +1/+0 vs. Cavalry and/or Large units. ?(+0) +0/+2 while Holding vs. Charging Cavalry and/or Charging Large units.442170Core5\r"
        },
        {
          "name": "Umenzi Warriors",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 10,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 2
          },
          "points": 153,
          "type": "Core",
          "specialText": "Courage +2 while within the Leadership.442153Core6\r"
        },
        {
          "name": "Berserkers",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 6
          },
          "defend": {
            "skill": 1,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": null,
          "move": 3.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 2
          },
          "points": 226,
          "type": "N/A",
          "specialText": "Always has the Close Standing Order and may not be given a Standing Order Modifier or be directly controlled. Passes all Courage Checks.?(5)4/4?0/1N/AN/A5442226N/A7\r"
        },
        {
          "name": "Shamans",
          "attack": {
            "dice": 3,
            "skill": 4,
            "power": 3
          },
          "defend": {
            "skill": 1,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 2
          },
          "points": 100,
          "type": "N/A",
          "specialText": "Leadership Range: 6 (Measured from this unit's front center point to any center point on the other unit. 360°: line of sight not necessary.) Spells: Hex Bless and Heal.?(3)4/3?1/2N/A143.5332100N/A5\r"
        },
        {
          "name": "Worthy",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 6
          },
          "defend": {
            "skill": 2,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 3.5,
          "wounds": {
            "green": 5,
            "yellow": 3,
            "red": 3
          },
          "points": 256,
          "type": "N/A",
          "specialText": "Leadership Range: 3.5 (Measured from this unit's front center point to any center point on the other unit. 360°: line of sight not necessary.)?(3)4/3?1/2N/A143.5533256N/A5\r"
        },
        {
          "name": "The Possessed",
          "attack": {
            "dice": 4,
            "skill": 4,
            "power": 4
          },
          "defend": {
            "skill": 1,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 9,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 3
          },
          "points": 77,
          "type": "N/A",
          "specialText": "Courage +6 while within the Leadership Range of any of your non-routing units. Cannot be Healed Blessed or empowered with Faith Armor. You may not play Command Cards while The Possessed is attacking or defending. Destroyed if Routed.33377N/A6\r"
        },
        {
          "name": "Chosen",
          "attack": {
            "dice": 5,
            "skill": 6,
            "power": 6
          },
          "defend": {
            "skill": 3,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 14,
          "move": 3.5,
          "wounds": {
            "green": 5,
            "yellow": 3,
            "red": 3
          },
          "points": 381,
          "type": "Elite",
          "specialText": "Leadership Range: 5 (Measured from this unit's front center point to any center point on the other unit. 360°: line of sight not necessary.)?(3)4/3?1/2N/A143.5533381Elite4\r"
        },
        {
          "name": "High Priests",
          "attack": {
            "dice": 3,
            "skill": 4,
            "power": 3
          },
          "defend": {
            "skill": 1,
            "power": 2
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 14,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 3
          },
          "points": 130,
          "type": "Elite",
          "specialText": "Leadership Range: 7 (Measured from this unit's front center point to any center point on the other unit. 360°: line of sight not necessary.) Spells: Hex Bless Heal and Death Curse.?(3)4/3?1/2N/A143.5333130Elite4\r"
        },
        {
          "name": "Giant War Elephant",
          "attack": {
            "dice": 4,
            "skill": 5,
            "power": 7
          },
          "defend": {
            "skill": 1,
            "power": 4
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 12,
          "move": 5,
          "wounds": {
            "green": 7,
            "yellow": 4,
            "red": 5
          },
          "points": 523,
          "type": "Elite",
          "specialSpears": "\"Thrown Spears\",\"?(\",3,\")\",5,\"/\",5,,,,,3.5,,,,,,,,,,0\r",
          "specialText": "Colossal. Terrifying. Cannot be Healed Blessed or empowered with Faith Armor. Giant War Elephant has two sets of attacks that are rolled independently; the elephant itself (main stat line) and thrown spears (lower line). During any turn all Giant War Elephant attacks must be rolled against a single enemy unit. Elephant Attacks: ?(+0) +0/+1 ? +1/+0 and causes two extra hits while Charging. (Simply add two dice when rolling to damage.) (These are in addition tot he normal Charging bonus.) Spear Attacks: This is a ranged attack even when Engaged. (Does not recieve Engaged combat modifiers and gets no Free Attacks vs. Routing Units and no attacks on opponents turn.) No penalty for Move and Shoot.?(4*)5/7*?1*/4N/A125745523Elite3\r"
        }
      ]
    },
    {
      "name": "Undead Army",
      "units": [
        {
          "name": "Ghoul Pack",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 9,
          "move": 5,
          "wounds": {
            "green": 1,
            "yellow": 8,
            "red": 1
          },
          "points": 130,
          "type": "Core",
          "specialText": "Lesser Undead.?(5)5/5?2/1N/AN/A3.5181130Core6\r"
        },
        {
          "name": "Skeleton Bowmen",
          "attack": {
            "dice": 4,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 1,
            "power": 0
          },
          "ranged": {
            "range": "14"
          },
          "courage": null,
          "move": 3.5,
          "wounds": {
            "green": 2,
            "yellow": 2,
            "red": 1
          },
          "points": 150,
          "type": "Core",
          "specialText": "Lesser Undead. Passes all Courage Checks. ?(-0) -2/-2 and while Engaged.221150Core8\r"
        },
        {
          "name": "Skeleton Horde",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": null,
          "move": 3.5,
          "wounds": {
            "green": 2,
            "yellow": 2,
            "red": 2
          },
          "points": 149,
          "type": "Core",
          "specialText": "Lesser Undead. Passes all Courage Checks.?(5)5/5?2/1N/AN/A3.5222149Core7\r"
        },
        {
          "name": "Zombies",
          "attack": {
            "dice": 4,
            "skill": 4,
            "power": 4
          },
          "defend": {
            "skill": 1,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": null,
          "move": 2.5,
          "wounds": {
            "green": 2,
            "yellow": 2,
            "red": 2
          },
          "points": 90,
          "type": "Core",
          "specialText": "Lesser Undead. Passes all Courage Checks.?(5)5/5?2/1N/AN/A3.522290Core8\r"
        },
        {
          "name": "Skeleton Spearmen",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": null,
          "move": 3.5,
          "wounds": {
            "green": 2,
            "yellow": 2,
            "red": 2
          },
          "points": 167,
          "type": "Core",
          "specialText": "Lesser Undead. Passes all Courage Checks. ?(-1) -0/-0 while Charging. ?(+0) +1/+0 vs. Cavalry and/or Large units. ?(+0) +0/+2 while Holding vs. Charging Cavalry and/or Charging Large units. 222167Core6\r"
        },
        {
          "name": "Skeleton Cavalry",
          "attack": {
            "dice": 6,
            "skill": 5,
            "power": 5
          },
          "defend": {
            "skill": 2,
            "power": 1
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": null,
          "move": 6,
          "wounds": {
            "green": 2,
            "yellow": 2,
            "red": 1
          },
          "points": 219,
          "type": "N/A",
          "specialText": "Lesser Undead. Cavalry. Passes all Courage Checks. ?(+0) +0/+1 and ?+1/+0 while Charging (This is in addition to the normal Charging Bonus.)?(6)6/6*?2*/3N/A135221219N/A6\r"
        },
        {
          "name": "Skeleton Trolls",
          "attack": {
            "dice": 5,
            "skill": 5,
            "power": 7
          },
          "defend": {
            "skill": 1,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": null,
          "move": 5,
          "wounds": {
            "green": 5,
            "yellow": 0,
            "red": 5
          },
          "points": 323,
          "type": "N/A",
          "specialText": "Major Undead. Large. Fearsome. Passes all Courage Checks.?(5)5/5?2/1N/AN/A3.5505323N/A4\r"
        },
        {
          "name": "Swarm of Rats",
          "attack": {
            "dice": 8,
            "skill": 5,
            "power": 3
          },
          "defend": {
            "skill": 0,
            "power": 0
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": null,
          "move": 5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 3
          },
          "points": 109,
          "type": "N/A",
          "specialText": "Always has the Close Standing Order and may not be given a Standing Order Modifier or be directly controlled. Passes all Courage Checks. Is unaffected by your Command Cards and may not be Reanimated. You may not play Command Cards while Swarm of Rats is attacking or defending.?(8)5/3?0/0N/AN/A5333109N/A5\r"
        },
        {
          "name": "Zombie Trolls",
          "attack": {
            "dice": 4,
            "skill": 4,
            "power": 6
          },
          "defend": {
            "skill": 1,
            "power": 4
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": null,
          "move": 3.5,
          "wounds": {
            "green": 5,
            "yellow": 0,
            "red": 5
          },
          "points": 232,
          "type": "N/A",
          "specialText": "Major Undead. Large. Fearsome. Passes all Courage Checks.?(5)5/5?2/1N/AN/A3.5505232N/A4\r"
        },
        {
          "name": "Abomination",
          "attack": {
            "dice": 6,
            "skill": 4,
            "power": 4
          },
          "defend": {
            "skill": 1,
            "power": 3
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": null,
          "move": 2.5,
          "wounds": {
            "green": 4,
            "yellow": 4,
            "red": 3
          },
          "points": 153,
          "type": "Elite",
          "specialText": "Lesser Undead. Large. Fearsome. Passes all Courage Checks.?(5)5/5?2/1N/AN/A3.5443153Elite5\r"
        },
        {
          "name": "Death Knights",
          "attack": {
            "dice": 6,
            "skill": 6,
            "power": 6
          },
          "defend": {
            "skill": 2,
            "power": 4
          },
          "ranged": {
            "range": "N/A"
          },
          "courage": 13,
          "move": 5,
          "wounds": {
            "green": 3,
            "yellow": 2,
            "red": 2
          },
          "points": 516,
          "type": "Elite",
          "specialText": "Greater Undead. Cavalry. ?(+0) +0/+1 and ?+1/+0 while Charging (This is in addition to the normal Charging Bonus.)?(6)6/6*?2*/3N/A135322516Elite4\r"
        },
        {
          "name": "Giant Catapult",
          "attack": {
            "dice": 4,
            "skill": 5,
            "power": 7
          },
          "defend": {
            "skill": 1,
            "power": 4
          },
          "ranged": {
            "range": "17.5"
          },
          "courage": null,
          "move": 3.5,
          "wounds": {
            "green": 3,
            "yellow": 3,
            "red": 3
          },
          "points": 510,
          "type": "Elite",
          "specialText": "Greater Undead. Large. Fearsome. Passes all Courage Checks.?(5)5/5?2/1N/AN/A3.5333510Elite4\r"
        }
      ]
    }
  ]
};
