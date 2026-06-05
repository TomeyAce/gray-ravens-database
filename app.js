const db = {
  elements: [
    { id: "all", label: "All", color: "#f4f7fb" },
    { id: "physical", label: "Physical", color: "#d7dde5" },
    { id: "lightning", label: "Lightning", color: "#e5ba4a" },
    { id: "fire", label: "Fire", color: "#e75656" },
    { id: "ice", label: "Ice", color: "#5b9df6" },
    { id: "dark", label: "Dark", color: "#a889f0" },
    { id: "nihil", label: "Nihil", color: "#cfd4da" }
  ],
  characters: [
      {
          "id": "2b",
          "name": "2B: 2B",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-2B-Icon.png",
          "sigil": "22",
          "role": "Attacker",
          "frame": "2B",
          "faction": "NierAutomata",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Lunar Tear",
          "weapon": "Virtuous Contract - Mod",
          "weaponType": "2B",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "2B is an all-purpose battle android from the automated YoRHa infantry. She is equipped with a multitude of blades for close-quarters combat and can attack from range using the POD support system.",
          "effect": "Strikes forward with both a katana and greatsword interchangeably, dealing Physical DMG. Gains Super Armor while casting this skill. - Deals 220% / 440% / 660% Physical DMG in total based on the number of orbs pinged.",
          "priority": "",
          "notes": "2B is an all-purpose battle android from the automated YoRHa infantry. She is equipped with a multitude of blades for close-quarters combat and can attack from range using the POD support system.",
          "specialties": [
              {
                  "name": "Sustained Damage — Core state deals continuous high frequency damage. Energy Regen — Able to quickly recover energy for A2, 9S and itself",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Bladestorm — Ping Red Orb",
                  "description": "Strikes forward with both a katana and greatsword interchangeably, dealing Physical DMG. Gains Super Armor while casting this skill. - Deals 220% / 440% / 660% Physical DMG in total based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Shieldbreaker — Ping Yellow Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Charges forward to strike with a katana, dealing Physical DMG and pulls the enemy. Gains Super Armor while casting this skill. Hitting an enemy with Yellow Orbs will inflict Weaken, reducing their ATK. The attack direction can be co..."
              },
              {
                  "name": "Blue Orb: R020: Mirage — Ping Blue Orb",
                  "description": "Uses POD to unleash Mirage, dealing Physical DMG to surrounding enemies. Gains Super Armor while casting this skill. - Deals 140% / 280% / 420% Physical DMG in total based on the number of orbs pinged."
              },
              {
                  "name": "Basic Attack: Bladed Flurry",
                  "description": "Basic Attack — Tap Basic Attack Strikes forward with a katana, dealing Physical DMG. - Deals 840% Physical DMG in total. Sprinting State — Tap Dodge, then move Tapping Dodge will activate Sprinting State. While sprinting, tap Basic Attack to release Sprint Attack, dealing Physical DMG. - Deals 290%..."
              },
              {
                  "name": "Signature: Devastator",
                  "description": "Signature Move — 80 Energy + Tap Signature Unleashes a charged attack forward with a greatsword, dealing Physical DMG. If the final hit lands on the target, 2B will perform a second barrage of greatsword slashes, dealing additional Physical DMG. - The first hit deals 800% Physical DMG in total. - T..."
              },
              {
                  "name": "QTE: Greatsword",
                  "description": "Uses the heavy weapon to perform consecutive attacks, dealing Physical DMG. - Deals 640% Physical DMG in total."
              },
              {
                  "name": "Core Passive: Blade Rend",
                  "description": "Core Passive — Yellow 3-Ping + Any 3-Ping Any 3-Ping after a Yellow 3-Ping grants 2B Stability. Stability decreases over time (re-triggering does not refresh the duration), While 2B has Stability, she enters Battle Stance. Once 2B exits Battle Stance, all Data Correction stacks will be removed. Obt..."
              },
              {
                  "name": "Leader: Automaton",
                  "description": "On the team, Physical DMG of 2B, 9S, and A2 increases by 8%, and they gain additional 25 Signature Energy when entering the battle for the first time."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Virtuous Contract - Mod",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for 2B."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "Unknown"
              },
              {
                  "label": "Activation",
                  "value": "Unknown"
              },
              {
                  "label": "Height",
                  "value": "168cm (with heels)"
              },
              {
                  "label": "Weight",
                  "value": "148.8kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "Unknown"
              },
              {
                  "label": "HP",
                  "value": "1915"
              },
              {
                  "label": "ATK",
                  "value": "402"
              },
              {
                  "label": "DEF",
                  "value": "287"
              },
              {
                  "label": "CRIT",
                  "value": "201"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/2B"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/2B"
      },
      {
          "id": "9s",
          "name": "9S: 9S",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-9S-Icon.png",
          "sigil": "99",
          "role": "Support",
          "frame": "9S",
          "faction": "NierAutomata",
          "class": "Support",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Lunar Tear",
          "weapon": "Cruel Oath - Mod",
          "weaponType": "9S",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:9S",
          "bio": "This unit's official title is Model S, Number 9. While this YoRHa member possesses offensive capabilities, he specializes in survey missions—and is particularly skilled at information gathering and hacking.",
          "effect": "Uses the POD to unleash Laser, dealing Physical DMG in a straight line. - Deals 200% / 400 / 600% Physical DMG in total based on the number of orbs pinged.",
          "priority": "",
          "notes": "This unit's official title is Model S, Number 9. While this YoRHa member possesses offensive capabilities, he specializes in survey missions—and is particularly skilled at information gathering and hacking.",
          "specialties": [
              {
                  "name": "Heal — Able to heal allies Hack — Able to hack enemies, dealing massive DMG",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: R010: Laser — Ping Red Orb",
                  "description": "Uses the POD to unleash Laser, dealing Physical DMG in a straight line. - Deals 200% / 400 / 600% Physical DMG in total based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: A110: Slow — Ping Yellow Orb",
                  "description": "Uses the POD to unleash Slow to create a circular region to deal Physical DMG to enemies within and slow them. - Deals 190% / 380% / 570% Physical DMG in total based on the number of orbs pinged. - Slows the enemies for 0.6 / 1.2 / 2.4s based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: A080: Wave — Ping Blue Orb",
                  "description": "Uses the POD to unleash Wave, creating an expanding electric wave in front that deals Physical DMG to enemies and heals the allies it hits. - Deals 180% / 360% / 540% Physical DMG in total based on the number of orbs pinged. - Heals the allies for 40% / 80% / 120% of 9S's ATK based on the number of..."
              },
              {
                  "name": "Basic Attack: Aero Blade",
                  "description": "Basic Attack — Tap Basic Attack Unleashes a series of attacks forward, dealing Physical DMG. Basic Attacks cannot recover Signal Orbs; instead, 9S gains a random Signal Orb periodically while he is on the battlefield. - Deals 860% Physical OMG in total. - Gains a random Signal Orb every 2.5s while..."
              },
              {
                  "name": "Signature: Hacking Sequence",
                  "description": "Signature Move — 80 Energy + Tap Signature Attempts to hack the enemy. Upon successful hacking, deals Physical DMG to the target. - Deals 2600% Physical DMG in total."
              },
              {
                  "name": "QTE: Tactical Hacking",
                  "description": "Hacks into an ally target on the battlefield to heal and repair, restoring the ally's HP. - Restores HP equal to 100% of 9S's ATK."
              },
              {
                  "name": "Core Passive: Overclock Strike",
                  "description": "Core Passive — At least 50 Overclock Energy + Any 3-Ping Gains Overclock Energy at the start of the battle. During a 3-Ping, if there is sufficient Overclock Energy, consumes Overclock Energy to generate Overclock Indicator of the corresponding color (up to 1) on the right of the Signal Orb bar. Ov..."
              },
              {
                  "name": "Leader: Scan Domain",
                  "description": "On the team, Physical DMG and Extra DMG Reduction of 2B, 9S, and A2 increase by 8% and 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Cruel Oath - Mod",
                  "cub": "",
                  "memories": "Imported from Build:9S",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:9S"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "Unknown"
              },
              {
                  "label": "Activation",
                  "value": "30 Jan"
              },
              {
                  "label": "Height",
                  "value": "160cm (with boots)"
              },
              {
                  "label": "Weight",
                  "value": "129.9kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "Unknown"
              },
              {
                  "label": "HP",
                  "value": "1973"
              },
              {
                  "label": "ATK",
                  "value": "364"
              },
              {
                  "label": "DEF",
                  "value": "287"
              },
              {
                  "label": "CRIT",
                  "value": "176"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/9S"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/9S"
      },
      {
          "id": "a2",
          "name": "A2: A2",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-A2-Icon.png",
          "sigil": "AA",
          "role": "Tank",
          "frame": "A2",
          "faction": "NierAutomata",
          "class": "Tank",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Lunar Tear",
          "weapon": "Type-4O Lance - Mod",
          "weaponType": "A2",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "A YoRHa prototype that specializes in close-quarter combat. Though not presently in use, it was originally created to speed along the implementation of other official models such as 2B and 9S.",
          "effect": "Unleashes a series of attacks forward, dealing Physical DMG. After a 3-Ping, the next Basic Attack within 4s becomes enhanced, dealing Physical DMG, granting POD: Shield and knocking down nearby enemies.- Deals 200% / 400% / 600% Physical DMG in total based on the number of orbs pinged. - The enhan...",
          "priority": "",
          "notes": "A YoRHa prototype that specializes in close-quarter combat. Though not presently in use, it was originally created to speed along the implementation of other official models such as 2B and 9S.",
          "specialties": [
              {
                  "name": "Defense Down — Able to reduce enemy Defense. Berserk — Able to enhance herself, granting 2B and 9S increased DMG.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Vortex Barrage — Ping Red Orb",
                  "description": "Unleashes a series of attacks forward, dealing Physical DMG. After a 3-Ping, the next Basic Attack within 4s becomes enhanced, dealing Physical DMG, granting POD: Shield and knocking down nearby enemies.- Deals 200% / 400% / 600% Physical DMG in total based on the number of orbs pinged. - The enhan..."
              },
              {
                  "name": "Yellow Orb: Pursuit — Ping Yellow Orb",
                  "description": "Unleashes a series of attacks forward, dealing Physical DMG. - Deals 200% / 400% / 600% Physical DMG in total based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: A140: Gravity — Ping Blue Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Uses the POD to unleash Gravity, creating a gravitational field in front, dealing Physical DMG and pulling enemies within the field continuously (the pulling effect is weakened and does not deal damage outside of the field). - Deals..."
              },
              {
                  "name": "Basic Attack: Impale — Tap Basic Attack",
                  "description": "Unleashes a series of attacks forward, dealing Physical DMG. Each Basic Attack that hits an enemy grants POD: Shield. - Deals 760% Physical DMG in total. - Grants POD: Shield equal to 1% of max HP."
              },
              {
                  "name": "Signature: Berserk",
                  "description": "Signature Move — POD: Shield full + Tap Signature Signature Move: Once POD: Shield is fully charged, unleashes Berserk Mode to grant A2 Super Armor and increase her Extra DMG Reduction, movement speed, and Extra DMG Bonus. Berserk Mode will consume max HP every second (prioritizing POD: Shield if P..."
              },
              {
                  "name": "QTE: Trigram Assault",
                  "description": "Unleashes a series of attacks, dealing Physical DMG. - Deals 600% Physical DMG in total."
              },
              {
                  "name": "Core Passive: Prototype",
                  "description": "Core Passive — Any 3-Ping Any 3-Ping grants A2 POD: Shield and summons POD to launch 6 seeker missiles toward random targets in front, dealing Physical DMG and granting POD: Shield after hitting enemies. Missiles also Taunt the enemy. (While taunted, the target's DEF is reduced. If 2B and 9S are al..."
              },
              {
                  "name": "Leader: Growth",
                  "description": "On the team, Physical DMG and Dodge Gauge limit of 2B, 9S, and A2 increase by 8% and 200."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Type-4O Lance - Mod",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for A2."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "Unknown"
              },
              {
                  "label": "Activation",
                  "value": "Unknown"
              },
              {
                  "label": "Height",
                  "value": "168cm (with heels)"
              },
              {
                  "label": "Weight",
                  "value": "139.2kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "Unknown"
              },
              {
                  "label": "HP",
                  "value": "1973"
              },
              {
                  "label": "ATK",
                  "value": "364"
              },
              {
                  "label": "DEF",
                  "value": "295"
              },
              {
                  "label": "CRIT",
                  "value": "193"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/A2"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/A2"
      },
      {
          "id": "alisa-echo",
          "name": "Alisa: Echo",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-AlisaEcho-Icon.png",
          "sigil": "AE",
          "role": "Amplifier",
          "frame": "Echo",
          "faction": "Unidentified",
          "class": "Amplifier",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Gavel",
          "weapon": "Astraea",
          "weaponType": "Bow",
          "cub": {
              "name": "Dawn Chorus",
              "notes": ""
          },
          "memory": "Imported from Build:Echo",
          "bio": "Possesses a special Aurora Squadron-made biological weapon armor \"sister\" capable of M.I.N.D. connection. Now, Echo is traveling on the boundless ground in the pursuit of true justice.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Shoots an arrow forward, dealing Physical DMG. - Deals 200% / 390% / 590% Physical DMG in total based on the number of orbs pinged.",
          "priority": "",
          "notes": "Possesses a special Aurora Squadron-made biological weapon armor \"sister\" capable of M.I.N.D. connection. Now, Echo is traveling on the boundless ground in the pursuit of true justice.",
          "specialties": [
              {
                  "name": "Amplification - Enhances teammates. Burst - Deals massive DMG in a short time.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Prismatic Order — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Shoots an arrow forward, dealing Physical DMG. - Deals 200% / 390% / 590% Physical DMG in total based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Cosmic Descent — Ping Yellow Orb",
                  "description": "Leaps up and turns around, shooting arrows at the enemy in mid-air and dealing Physical DMG. Gains Super Armor while using this skill. - Deals 190% / 380% / 560% Physical DMG in total based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Swift Verdict — Ping Blue Orb",
                  "description": "Crouches down to shoot multiple arrows upward, dealing Physical DMG to targets in a small area ahead. - Deals 180% / 360% / 540% Physical DMG in total based on the number of orbs pinged."
              },
              {
                  "name": "Basic Attack: Darting Pursuit — Tap Basic Attack",
                  "description": "Rapidly fires arrows at the target, dealing Physical DMG. - Deals 460% Physical DMG in total."
              },
              {
                  "name": "Signature: Celestial Edge",
                  "description": "Signature Move — 90 Energy + Tap Signature Echo and Cecily attack at the same time, dealing Physical DMG and triggering Time Lag Calculation. Afterward, Echo gains Soul Shatter Mark. - Deal 2660% Physical DMG in total."
              },
              {
                  "name": "QTE: Advent of Justice",
                  "description": "Fires multiple arrows at the enemy, dealing Physical DMG and healing HP. - Deals 600% Physical DMG and heals for 100% of ATK in total."
              },
              {
                  "name": "Core Passive: Echoing Twins",
                  "description": "Cipher of Synergy - Press and hold Basic Attack Cecily fights alongside Echo. Press and hold Basic Attack to make Echo enter Tactical Cipher. In Tactical Cipher, Signal Orbs will be temporarily replaced by Cipher Orbs. Pinging a Cipher Orb will make Cecily fire a swordwave at the enemy, dealing Phy..."
              },
              {
                  "name": "Leader: Harbinger of Law",
                  "description": "All members' ATK increases by 10%. Amplifiers' Physical DMG Bonus increases by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Astraea",
                  "cub": "Dawn Chorus",
                  "memories": "Imported from Build:Echo",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Echo"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "16"
              },
              {
                  "label": "Activation",
                  "value": "22 Mar"
              },
              {
                  "label": "Height",
                  "value": "159cm"
              },
              {
                  "label": "Weight",
                  "value": "41kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "AB"
              },
              {
                  "label": "HP",
                  "value": "1992"
              },
              {
                  "label": "ATK",
                  "value": "401"
              },
              {
                  "label": "DEF",
                  "value": "287"
              },
              {
                  "label": "CRIT",
                  "value": "188"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Alisa%3A_Echo"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Alisa%3A_Echo"
      },
      {
          "id": "ayla-brilliance",
          "name": "Ayla: Brilliance",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Brilliance-Icon.png",
          "sigil": "AB",
          "role": "Tank",
          "frame": "Brilliance",
          "faction": "WGAA",
          "class": "Tank",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "A",
          "gift": "Painting Kit",
          "weapon": "Purple Peony",
          "weaponType": "Scythe",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:Brilliance",
          "bio": "An Archaeological Team member from the World Government Association of Art in Babylonia. The “new blood” of Babylonia. Loves art with a passion.",
          "effect": "Swings the Scythe at the target, dealing Physical DMG. - Deals 150% / 300% / 900% Physical DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "An Archaeological Team member from the World Government Association of Art in Babylonia. The “new blood” of Babylonia. Loves art with a passion.",
          "specialties": [
              {
                  "name": "Attraction - Able to attract the attention of enemies. Shield - Releases a shield to defend.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Vibrant Stroke — Ping Red Orb",
                  "description": "Swings the Scythe at the target, dealing Physical DMG. - Deals 150% / 300% / 900% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Glittering Shade — Ping Yellow Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in fulfills the first half of this character's Core Passive. Charges at the target to deal Physical DMG, then swings the Scythe upward, dealing Physical DMG. - The charge deals 90% / 180% / 270% Physical DMG and the swing dea..."
              },
              {
                  "name": "Blue Orb: Colored Rebirth — Ping Blue Orb",
                  "description": "Throws the Scythe and then pulls it back, dealing Physical DMG to targets on the path each time. - Deals 20% / 40% / 60% Physical DMG each time based on the number of orbs pinged."
              },
              {
                  "name": "Basic Attack: Painted World — Tap Basic Attack",
                  "description": "Swings the Scythe at the target in a flurry, dealing Physical DMG. - Deals 610% Physical DMG in total."
              },
              {
                  "name": "Signature: Signature - The Bloom",
                  "description": "Signature Move — 80 Energy + Tap Signature It's time to bloom! Swings the Scythe at nearby targets to deal Physical DMG, then launches a charged slash at the targets upon the last hit, dealing Physical DMG. The attack direction can be controlled with the joystick. - Each hit of the scythe deals 120..."
              },
              {
                  "name": "QTE: Spiral Reaper",
                  "description": "Deals Physical DMG continuously to the target, reducing their DEF. The last hit will knock the target airborne. - The attacks deal 600% Physical DMG. - The attacks reduce the target's DEF by 10% for 6s."
              },
              {
                  "name": "Core Passive: Vector Cube",
                  "description": "Core Passive — Any 3-Ping + Ping Blue Orb When pinging a Blue Orb after any 3-Ping, charges in place to pull the nearby enemies in and gains Shield before unleashing a heavy strike to the targets ahead, dealing Physical DMG. Extra DMG Reduction increases by 70% when charging. - Gains Shield equal t..."
              },
              {
                  "name": "Leader: Leader - Muse Ritual",
                  "description": "Increases ATK by 10% and DEF by 5% when there are 3 different classes in the team."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Purple Peony",
                  "cub": "",
                  "memories": "Imported from Build:Brilliance",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Brilliance"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "1"
              },
              {
                  "label": "Psychological Age",
                  "value": "18"
              },
              {
                  "label": "Activation",
                  "value": "15 Dec"
              },
              {
                  "label": "Height",
                  "value": "167cm"
              },
              {
                  "label": "Weight",
                  "value": "64kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "O"
              },
              {
                  "label": "HP",
                  "value": "1636"
              },
              {
                  "label": "ATK",
                  "value": "272"
              },
              {
                  "label": "DEF",
                  "value": "250"
              },
              {
                  "label": "CRIT",
                  "value": "139"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Ayla%3A_Brilliance"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Ayla%3A_Brilliance"
      },
      {
          "id": "ayla-kaleido",
          "name": "Ayla: Kaleido",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Element-Ice-Icon-White.png",
          "sigil": "AK",
          "role": "Amplifier",
          "frame": "Kaleido",
          "faction": "IrisWarbler",
          "class": "Amplifier",
          "element": "ice",
          "elements": [
              {
                  "name": "ice",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Painting Kit",
          "weapon": "The Starry Voyager",
          "weaponType": "Laser Gunlance",
          "cub": {
              "name": "Rainbow",
              "notes": ""
          },
          "memory": "Imported from Build:Kaleido",
          "bio": "A new frame designed and developed under the leadership of Ayla herself. As the culmination of years of technical experience from the WGAA, it emphasizes combat performance while retaining Ayla's usual style.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Slides around the target once and deals Ice DMG to the targets encircled. — Deals 180% / 360% / 540% Ice DMG based on the number of orbs pinged.",
          "priority": "ATK increases by 10%. Doubles the Base DMG increase effect of Ayla: Kaleido's Vibrant Brushstroke for Signature - Finishing Touch. The Ice DMG Bonus of Frost Crystal increases to 20%.",
          "notes": "A new frame designed and developed under the leadership of Ayla herself. As the culmination of years of technical experience from the WGAA, it emphasizes combat performance while retaining Ayla's usual style.",
          "specialties": [
              {
                  "name": "Amplification — Enhances teammates. Burst — Deals massive DMG in a short time.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Scarlet Impression — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Slides around the target once and deals Ice DMG to the targets encircled. — Deals 180% / 360% / 540% Ice DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Yellowish Strike — Ping Yellow Orb",
                  "description": "Fires “Yellow Paint” forward, dealing Ice DMG. — Deals 160% / 320% / 480% Ice DMG based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Ultramarine Dynamo — Ping Blue Orb",
                  "description": "Throws the Beam Gunlance before flipping forward and kicking the tail of the lance, spinning it to splash \"Blue Paint\" ahead and dealing Ice DMG to targets in the front. — Deals 170％ / 340％ / 510％ Ice DMG based on the number of orbs pinged."
              },
              {
                  "name": "Basic Attack: Aylaism Sketch",
                  "description": "Swings the Beam Gunlance continuously to perform a multi-hit attack against the target. — Deals a total of 760％ Ice DMG."
              },
              {
                  "name": "Signature: Omnichromatic World!",
                  "description": "Color Rendering — 80 Energy + Tap Signature Move Injects Coolant into the Beam Gunlance and consumes 80 Signature Energy to gain a set of random 3-Ping to and expand the Painter's Realm, dealing Ice DMG to surrounding enemies. Signal Orbs will rearrange based on 3-Ping rules. Time Lag Calculation w..."
              },
              {
                  "name": "QTE: Prismatic Ribbon",
                  "description": "Ayla paints around the target with beautiful colors, dealing Ice DMG and restoring HP for teammates on the field. — Deals 600% Ice DMG and heals for HP equal to 90% of her ATK."
              },
              {
                  "name": "Core Passive: My Heart'll Do My Painting!",
                  "description": "Converging Expression — Any 3-Ping The Main Color is filled in with a Signal Orb color by default. Upon a 3-Ping, Coolant in the 3-Ping color will fill the Secondary Color (max 1 type of Coolant). Subsequent Coolant will replace the previous Coolant. Color Mix: Clash of Concepts — Main Color is dif..."
              },
              {
                  "name": "Leader: Source of Inspiration",
                  "description": "All team members' ATK increases by 10% and all Amplifiers' Ice DMG increases by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "The Starry Voyager",
                  "cub": "Rainbow",
                  "memories": "Imported from Build:Kaleido",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Kaleido"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "1"
              },
              {
                  "label": "Psychological Age",
                  "value": "18"
              },
              {
                  "label": "Activation",
                  "value": "15 Dec"
              },
              {
                  "label": "Height",
                  "value": "167cm"
              },
              {
                  "label": "Weight",
                  "value": "64kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "O"
              },
              {
                  "label": "HP",
                  "value": "1992"
              },
              {
                  "label": "ATK",
                  "value": "406"
              },
              {
                  "label": "DEF",
                  "value": "287"
              },
              {
                  "label": "CRIT",
                  "value": "191"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Ayla%3A_Kaleido"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Ayla%3A_Kaleido"
      },
      {
          "id": "bambinata-vitrum",
          "name": "Bambinata: Vitrum",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Vitrum-Icon.png",
          "sigil": "BV",
          "role": "Attacker",
          "frame": "Vitrum",
          "faction": "Egret",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "20"
              },
              {
                  "name": "ice",
                  "percent": "80"
              }
          ],
          "rank": "A",
          "gift": "Music Box",
          "weapon": "Sound of Silence",
          "weaponType": "Mantis Blades",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "A frame that has undergone a series of optimizations and modifications based on the Construct Kurono created during the early years. She has become an important member of the Egret squad since she started serving with the Task Force.",
          "effect": "Steps forward and hurls a large number of threads to deal Physical DMG to enemies within a small area (Ice DMG instead on a 3-Ping). — Deals 200% / 400% / 600% Physical DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "A frame that has undergone a series of optimizations and modifications based on the Construct Kurono created during the early years. She has become an important member of the Egret squad since she started serving with the Task Force.",
          "specialties": [
              {
                  "name": "Combo — Deals massive DMG by activating Core Passive repeatedly. Burst — Signature Move can deal massive DMG.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Frost Threads — Ping Red Orb",
                  "description": "Steps forward and hurls a large number of threads to deal Physical DMG to enemies within a small area (Ice DMG instead on a 3-Ping). — Deals 200% / 400% / 600% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Arching Glimpse — Ping Yellow Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Swiftly glides toward the enemy and slashes them, dealing Physical DMG (Ice DMG instead on a 3-Ping). — Deals 200% / 400% / 600% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Entrechat — Ping Blue Orb",
                  "description": "Leaps into the air and performs 2 spinning attacks, dealing Physical DMG (Ice DMG instead on a 3-Ping). — Deals 180% / 360% / 540% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Basic Attack: Battement Frappe",
                  "description": "Unleashes multiple hits of kicks and thread attacks, dealing Physical DMG. — Deals 760% Physical DMG in total."
              },
              {
                  "name": "Signature: Stringless Cage",
                  "description": "Signature Move — 50 Energy + Tap Signature Bambinata: Vitrum unfolds her Mantis Blades and rapidly dashes around the enemy to slash them multiple times, dealing Ice DMG. — Deals 850% Ice DMG in total. Signature Move — 3 stacks of Pact of Memory + 50 Energy + Tap Signature Bambinata: Vitrum unfolds..."
              },
              {
                  "name": "QTE: Balance",
                  "description": "Bambinata: Vitrum spins and dances to deal Ice DMG to enemies within range. — Deals 600% Ice DMG in total."
              },
              {
                  "name": "Core Passive: Puppet Theater",
                  "description": "Strings On Me — Jete Points + Press and hold Basic Attack When Jete Points are greater than 0, press and hold Basic Attack to activate Strings On Me , performing Basic Attacks continuously. — Jete Points increase by 40 / 80 / 160 based on the number of orbs pinged. — The maximum limit of Jete Point..."
              },
              {
                  "name": "Leader: Doll Dance",
                  "description": "Ice DMG of all party members increases by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Sound of Silence",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Vitrum."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "9"
              },
              {
                  "label": "Activation",
                  "value": "5 Dec"
              },
              {
                  "label": "Height",
                  "value": "135.5cm"
              },
              {
                  "label": "Weight",
                  "value": "29kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "AB"
              },
              {
                  "label": "HP",
                  "value": "1470"
              },
              {
                  "label": "ATK",
                  "value": "312"
              },
              {
                  "label": "DEF",
                  "value": "222"
              },
              {
                  "label": "CRIT",
                  "value": "138"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Bambinata%3A_Vitrum"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Bambinata%3A_Vitrum"
      },
      {
          "id": "bianca-crepuscule",
          "name": "Bianca: Crepuscule",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Crepuscule-Icon.png",
          "sigil": "BC",
          "role": "Attacker",
          "frame": "Crepuscule",
          "faction": "PurifyingForce",
          "class": "DPS",
          "element": "dark",
          "elements": [
              {
                  "name": "dark",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Lily Brooch",
          "weapon": "Aurora",
          "weaponType": "Whip Sword",
          "cub": {
              "name": "Noctiluca",
              "notes": ""
          },
          "memory": "Imported from Build:Crepuscule",
          "bio": "This is a new specialized frame developed by the Science Council, based on further validation of the Phantom Tracer. It can disrupt Punishing information to some extent, effectively weakening its influence.",
          "effect": "Thorned Waves: Tap Red Orb Lashes the enemy to deal Dark DMG, gaining Commandment and Prayer stacks and entering the Thorned Waves Combo. Gains Super Armor during the process. - Deals 200% / 400% / 600% Dark DMG and gains 1 / 2 / 3 Commandment and 1 / 2 / 5 stacks of Prayer based on the number of o...",
          "priority": "",
          "notes": "This is a new specialized frame developed by the Science Council, based on further validation of the Phantom Tracer. It can disrupt Punishing information to some extent, effectively weakening its influence.",
          "specialties": [
              {
                  "name": "Burst — Deals massive DMG in a short time. Raydiance - Skills can trigger the Raydiance Effect.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Twilight Judgment",
                  "description": "Thorned Waves: Tap Red Orb Lashes the enemy to deal Dark DMG, gaining Commandment and Prayer stacks and entering the Thorned Waves Combo. Gains Super Armor during the process. - Deals 200% / 400% / 600% Dark DMG and gains 1 / 2 / 3 Commandment and 1 / 2 / 5 stacks of Prayer based on the number of o..."
              },
              {
                  "name": "Yellow Orb: Radiant Retribution",
                  "description": "Dawnbreak: Tap Yellow Orb Swings the greatsword multiple times to attack the enemy, dealing Raydiance DMG and gaining Commandment and Raydiance Value. Gains Super Armor during so. Casts this skill consecutively to begin the Dawnbreak Combo. - Deals 350% / 700% / 1050% Raydiance DMG and gains 1 / 2..."
              },
              {
                  "name": "Blue Orb: Severed Sea",
                  "description": "Whip Dance: Twilight Form + Tap/Press and Hold Blue Orb Lashes the enemy continuously, consuming Commandment over time, dealing Dark DMG, and pulling in nearby enemies, during which time gains 80% DMG Reduction and Super Armor. Gains Signature Energy, Prayer stacks, and Severed Sea stacks. - If the..."
              },
              {
                  "name": "Basic Attack: Serpent Lashblade",
                  "description": "Alternating Lashes: Twilight Form + Tap Basic Attack The lashblade attacks the enemy with alternating strikes, dealing Dark DMG. - Deals 700% Dark DMG in total. - After the 3rd strike, tap Basic Attack continuously to perform the 4th and 5th strikes repeatedly. Signal Orb Recovery efficiency increa..."
              },
              {
                  "name": "Signature: Final Prayer",
                  "description": "Shadow Strangle: 120 Signature Energy + Twilight Form + Tap Signature Summons a thorned chain to shackle the enemy, dealing Dark DMG. Triggers Time Lag Calculation while casting. Then, gains 1 Signal Orb. Casting the skill when having the Field Ultralimit effect will refresh the duration. - Deals 3..."
              },
              {
                  "name": "QTE: Chiaroscuro Concordance",
                  "description": "QTE – Tap QTE Summons the greatsword to attack the target, dealing DMG. -In Twilight Form, deals 600% Dark DMG. - In Radiance Form, deals 600% Raydiance DMG."
              },
              {
                  "name": "Core Passive: Life in the Desolate Depths",
                  "description": "Flow Divert Bianca: Crepuscule enters the battlefield in Twilight Form. She can only ping Red Orbs and the Blue Orb in Twilight Form, and she can only ping Yellow Orbs and the Blue Orb in Radiance Form. - Form shift triggered by tapping the Core Passive Bar: Shifting to Twilight Form deals 120% Dar..."
              },
              {
                  "name": "Leader: Twilight's Decree",
                  "description": "Increases Dark DMG and Raydiance DMG of all members by 10%. Increases ATK of all Attackers in the team by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Aurora",
                  "cub": "Noctiluca",
                  "memories": "Imported from Build:Crepuscule",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Crepuscule"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "6"
              },
              {
                  "label": "Psychological Age",
                  "value": "25"
              },
              {
                  "label": "Activation",
                  "value": "21 Nov"
              },
              {
                  "label": "Height",
                  "value": "172cm"
              },
              {
                  "label": "Weight",
                  "value": "57kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "A"
              },
              {
                  "label": "HP",
                  "value": "1915"
              },
              {
                  "label": "ATK",
                  "value": "421"
              },
              {
                  "label": "DEF",
                  "value": "287"
              },
              {
                  "label": "CRIT",
                  "value": "191"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Bianca%3A_Crepuscule"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Bianca%3A_Crepuscule"
      },
      {
          "id": "bianca-stigmata",
          "name": "Bianca: Stigmata",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Abystigma-Icon.png",
          "sigil": "BS",
          "role": "Attacker",
          "frame": "Stigmata",
          "faction": "PurifyingForce",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Lily Brooch",
          "weapon": "Hecate",
          "weaponType": "Swordstaff",
          "cub": {
              "name": "Fei Lin",
              "notes": ""
          },
          "memory": "Imported from Build:Stigmata",
          "bio": "A new specialized frame devised by Kurono based on thorough research into the tissue of the Hetero-Hive Mother. It is equipped with the Phantom Tracer, which can decipher certain information left by the Punishing Virus.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Performs piercing attacks that deal Physical DMG to the target. (2 attacks when 1 or 2 orbs are pinged; 5 attacks upon a 3-Ping.) — Deals 160% / 320% / 520% Physical DMG in total based on the number of orbs pinged. — Grants 2 / 3 /...",
          "priority": "",
          "notes": "A new specialized frame devised by Kurono based on thorough research into the tissue of the Hetero-Hive Mother. It is equipped with the Phantom Tracer, which can decipher certain information left by the Punishing Virus.",
          "specialties": [
              {
                  "name": "Form Switch — Able to switch to a burst form and launch powerful attacks. Burst — Deals massive DMG in a short time.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Piercing Thorns — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Performs piercing attacks that deal Physical DMG to the target. (2 attacks when 1 or 2 orbs are pinged; 5 attacks upon a 3-Ping.) — Deals 160% / 320% / 520% Physical DMG in total based on the number of orbs pinged. — Grants 2 / 3 /..."
              },
              {
                  "name": "Yellow Orb: Conviction — Ping Yellow Orb",
                  "description": "Dashes forward to launch a horizontal slash, followed by an upward thrust that knocks the enemy into the air, dealing Physical DMG. — Deals 160% / 320% / 480% Physical DMG in total based on the number of orbs pinged. Deals additional 80% Physical DMG upon a 3-ping. — Grants 2 / 3 / 4 Afterglow Poin..."
              },
              {
                  "name": "Blue Orb: Etching Whirl — Ping Blue Orb",
                  "description": "Launches a spinning slash that deals Physical DMG to the target and briefly pulls enemies within range, then throws the Swordstaff out to generate a sword shadow that continuously spins and slashes nearby enemies, dealing Physical DMG. — Based on the number of orbs pinged, the spinning slash deals..."
              },
              {
                  "name": "Basic Attack: Tri-Candela Staffsword",
                  "description": "Basic Attack — Staff Form + Tap Basic Attack Unleashes 5 hits of attack toward the target with the Swordstaff. — Deals 380% Physical DMG in total. Basic Attack — Sword Form+Tap Basic Attack Unleashes 5 hits of attack toward the target with the Swordstaff. — Deals 480% Physical DMG in total. — Every..."
              },
              {
                  "name": "Signature: Blade Abyss",
                  "description": "Bright Candle — Staff Form + 60 Energy + Tap Signature Casts Bright Candle to damage enemies within a certain range, triggering Time Lag Calculation and activating the weapon's Sword Form. Orbs cannot be pinged in Sword Form. When Sword Form is activated, the Afterglow Points from Bianca's Core Pas..."
              },
              {
                  "name": "QTE: Divine Judgment",
                  "description": "QTE — Staff Form + Tap QTE Leaps into the air and hurls the Swordstaff to the ground, dealing 480% Physical DMG. QTE — Sword Form + Tap QTE Slashes the target twice to deal 480% Physical DMG."
              },
              {
                  "name": "Core Passive: Glowing Lanternlight",
                  "description": "Afterglow Orb — Upon entering battle or when entering Staff Form When Bianca: Stigmata enters battle or enters Staff Form, a set of Afterglow Orbs will be generated above the Signal Orb bar. Simulated Matrix — Press and hold Dodge to enter Luminous Realm Bianca: Stigmata is unable to trigger Matrix..."
              },
              {
                  "name": "Leader: Shadowless Beacon",
                  "description": "Increases Physical DMG of all members by 10%. Increases ATK of all Attacker Omniframes in the team by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Hecate",
                  "cub": "Fei Lin",
                  "memories": "Imported from Build:Stigmata",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Stigmata"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "6"
              },
              {
                  "label": "Psychological Age",
                  "value": "25"
              },
              {
                  "label": "Activation",
                  "value": "21 Nov"
              },
              {
                  "label": "Height",
                  "value": "172cm"
              },
              {
                  "label": "Weight",
                  "value": "57kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "A"
              },
              {
                  "label": "HP",
                  "value": "1915"
              },
              {
                  "label": "ATK",
                  "value": "422"
              },
              {
                  "label": "DEF",
                  "value": "287"
              },
              {
                  "label": "CRIT",
                  "value": "191"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Bianca%3A_Stigmata"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Bianca%3A_Stigmata"
      },
      {
          "id": "bianca-veritas",
          "name": "Bianca: Veritas",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Veritas-Icon.png",
          "sigil": "BV",
          "role": "Attacker",
          "frame": "Veritas",
          "faction": "PurifyingForce",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "20"
              },
              {
                  "name": "lightning",
                  "percent": "80"
              }
          ],
          "rank": "S",
          "gift": "Lily Brooch",
          "weapon": "Tonitrus",
          "weaponType": "Bow",
          "cub": {
              "name": "Toniris",
              "notes": ""
          },
          "memory": "",
          "bio": "An illegally modified frame born during the time when the Construct tech was not mature. It can cause charge separation to produce lightning as a means of attack. Specializes in long-distance sniping.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in fulfills the first half of this character's Core Passive. Stands still to pull bow and charge, then shoots a long-ranged energy arrow in front, dealing Physical DMG. (Lightning DMG instead on a 3-Ping.) - Deals 240% / 480%...",
          "priority": "",
          "notes": "An illegally modified frame born during the time when the Construct tech was not mature. It can cause charge separation to produce lightning as a means of attack. Specializes in long-distance sniping.",
          "specialties": [
              {
                  "name": "Piercing - Deals great area damage. Mixed Damage - Able to deal Physical and Elemental DMG.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Thunder Spike — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in fulfills the first half of this character's Core Passive. Stands still to pull bow and charge, then shoots a long-ranged energy arrow in front, dealing Physical DMG. (Lightning DMG instead on a 3-Ping.) - Deals 240% / 480%..."
              },
              {
                  "name": "Yellow Orb: Lightning Flash — Ping Yellow Orb",
                  "description": "Flashes in the air and shoots a charged arrow at the target. The arrow explodes on hit and deals Physical DMG. The explosion will create a lightning zone that reduces the movement speed of targets in the zone and deals Lightning DMG every second. - The charged arrow deals 100% / 200% / 300% Physica..."
              },
              {
                  "name": "Blue Orb: Magnetic Thunder",
                  "description": "Blue Orb — Ping Blue Orb Detonates the energy in the arrow tip to knock back nearby targets and deal Physical DMG. Also gains Electro Charge. - Deals 40% / 80% / 120% Physical DMG based on the number of orbs pinged. Blue Orb — Electro Charge + Tap Basic Attack / Ping Red Orb / Trigger Core Passive..."
              },
              {
                  "name": "Basic Attack: Voltaic Discharge — Tap Basic Attack",
                  "description": "Quickly shoots 7 arrows at the target, then shoots 1 long-range piercing arrow, dealing Physical DMG. - Deals 560% Physical DMG in total."
              },
              {
                  "name": "Signature: Signature - Ire of Lightning",
                  "description": "Signature Move — 100 Energy + Tap Signature Shoots arrows at the sky, bringing down lightning bolts that strikes targets within the area for Lightning DMG. After a short delay, the lightning energy explodes and deals Lightning DMG to targets within the area. - Each lightning bolt deals 160% Lightni..."
              },
              {
                  "name": "QTE: BlitzBolt",
                  "description": "Bianca: Veritas enters the battlefield from the air, shooting 4 waves of arrows at the target, dealing Lightning DMG. - Each wave deals 160% Lightning DMG."
              },
              {
                  "name": "Core Passive: Critical Moment",
                  "description": "Core Passive — Red 3-Ping + Ping Blue Orb Pinging a Blue Orb after a Red 3-Ping will cause Veritas to enter Sniping Form. Core Passive — Sniping Form + Tap Basic Attack While in Sniping Form, Basic Attacks shoot a long-ranged lightning arrow that deals Lightning DMG. Veritas exits Sniping Form if 6..."
              },
              {
                  "name": "Leader: Leader - Blood and Thunder",
                  "description": "Increases Lighting DMG of all members by 10%. Increases ATK of all Attacker Omniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Tonitrus",
                  "cub": "Toniris",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Veritas."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "6"
              },
              {
                  "label": "Psychological Age",
                  "value": "25"
              },
              {
                  "label": "Activation",
                  "value": "21 Nov"
              },
              {
                  "label": "Height",
                  "value": "172cm"
              },
              {
                  "label": "Weight",
                  "value": "57kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "A"
              },
              {
                  "label": "HP",
                  "value": "1212"
              },
              {
                  "label": "ATK",
                  "value": "334"
              },
              {
                  "label": "DEF",
                  "value": "182"
              },
              {
                  "label": "CRIT",
                  "value": "166"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Bianca%3A_Veritas"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Bianca%3A_Veritas"
      },
      {
          "id": "bianca-zero",
          "name": "Bianca: Zero",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Zero-Icon.png",
          "sigil": "BZ",
          "role": "Attacker",
          "frame": "Zero",
          "faction": "PurifyingForce",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "A",
          "gift": "Lily Brooch",
          "weapon": "Ramiel",
          "weaponType": "Bow",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:Zero",
          "bio": "Leader of the Purifying Force, elegant yet cold, always performing her orders to perfection.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Shoots arrows forward consecutively, dealing Physical DMG. - Shoots 1 / 2 / 3 arrows based on the number of orbs pinged. Each arrow deals 200% Physical DMG.",
          "priority": "",
          "notes": "Leader of the Purifying Force, elegant yet cold, always performing her orders to perfection.",
          "specialties": [
              {
                  "name": "Duel - Has strong single attack ability. Energy Boost - Has shorter Cooldown of Signature Moves.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Point Shooting — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Shoots arrows forward consecutively, dealing Physical DMG. - Shoots 1 / 2 / 3 arrows based on the number of orbs pinged. Each arrow deals 200% Physical DMG."
              },
              {
                  "name": "Yellow Orb: Wing Shot — Ping Yellow Orb",
                  "description": "Shoots energy arrows forward, dealing Physical DMG. Recovers Signature Energy upon hitting targets. - Shoots 5 / 5 / 7 energy arrows based on the number of orbs pinged. Each energy arrow deals 30% / 60% / 90% Physical DMG. - Recovers 1 / 2 / 3 Signature Energy upon hitting targets based on the numb..."
              },
              {
                  "name": "Blue Orb: Bow Draw — Ping Blue Orb",
                  "description": "Imbues weapon with energy. Basic Attacks will shoot extra arrows that deal Physical DMG. - Every Basic Attack shoots 1 / 2 / 3 extra arrows (max 7 / 20 / 42) based on the number of orbs pinged. Each arrow deals 20% / 30% / 40% Physical DMG. This effect lasts 4 / 6 / 8s."
              },
              {
                  "name": "Basic Attack: Fast Draw — Tap Basic Attack",
                  "description": "Quickly shoots 9 arrows at the target, dealing Physical DMG. - Deals 580% Physical DMG in total."
              },
              {
                  "name": "Signature: Signature - Rain of Destiny",
                  "description": "Signature Move — 60 Energy + Tap Signature Fires a rain of arrows at the target area, dealing Physical DMG. - Each arrow deals 200% Physical DMG."
              },
              {
                  "name": "QTE: Rain of Hunt",
                  "description": "Bianca: Zero leaps into the air upon entering the battlefield, shooting consecutive arrows at the target. Each arrow deals Physical DMG and is guaranteed to be a critical hit. - Shoots 5 times at the target, each shot dealing 60% Physical DMG."
              },
              {
                  "name": "Core Passive: Quiver of Mercy",
                  "description": "Signature Move — Any 3-Ping + Tap Signature Stores 1 energy arrow in the quiver after every 3-Ping. All arrows will be released when casting the next Signature Move, each dealing Extra Physical DMG to the target. - Each energy arrow deals 100% Extra Physical DMG twice. - Each 3-Ping stores 1 energy..."
              },
              {
                  "name": "Leader: Leader - Eliminator",
                  "description": "Increase CRIT DMG of all members by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Ramiel",
                  "cub": "",
                  "memories": "Imported from Build:Zero",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Zero"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "6"
              },
              {
                  "label": "Psychological Age",
                  "value": "25"
              },
              {
                  "label": "Activation",
                  "value": "21 Nov"
              },
              {
                  "label": "Height",
                  "value": "172cm"
              },
              {
                  "label": "Weight",
                  "value": "57kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "A"
              },
              {
                  "label": "HP",
                  "value": "1212"
              },
              {
                  "label": "ATK",
                  "value": "334"
              },
              {
                  "label": "DEF",
                  "value": "182"
              },
              {
                  "label": "CRIT",
                  "value": "166"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Bianca%3A_Zero"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Bianca%3A_Zero"
      },
      {
          "id": "black-rock-shooter",
          "name": "BLACK★ROCK SHOOTER: BLACK★ROCK SHOOTER",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-BLACK%E2%98%85ROCKSHOOTER-Icon.png",
          "sigil": "BR",
          "role": "Attacker",
          "frame": "BLACK★ROCK SHOOTER",
          "faction": "BLACK★ROCK SHOOTER",
          "class": "DPS",
          "element": "fire",
          "elements": [
              {
                  "name": "fire",
                  "percent": "100"
              }
          ],
          "rank": "A",
          "gift": "Star Ornament",
          "weapon": "★Rock Cannon",
          "weaponType": "Bladed Cannon",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "A mysterious girl with a blue flame in her left eye and a giant cannon, who has traveled countless worlds.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Quickly slashes forward multiple times, dealing Fire DMG in a large area. Upon a 3-Ping, automatically follows up with Flare Strike, dealing Extra Fire DMG. - Deals 75% / 150% / 225% Fire DMG in total based on the number of orbs pin...",
          "priority": "",
          "notes": "A mysterious girl with a blue flame in her left eye and a giant cannon, who has traveled countless worlds.",
          "specialties": [
              {
                  "name": "Burst — Deals massive DMG in a short time. Sustained Damage — Has a certain level of endurance.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Astral Edge - Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Quickly slashes forward multiple times, dealing Fire DMG in a large area. Upon a 3-Ping, automatically follows up with Flare Strike, dealing Extra Fire DMG. - Deals 75% / 150% / 225% Fire DMG in total based on the number of orbs pin..."
              },
              {
                  "name": "Yellow Orb: Stellar Cross - Ping Yellow Orb",
                  "description": "Charges toward the target and rapidly bombards the area in front, dealing Fire DMG. Upon a 3-Ping, automatically follows up with Starry Bayonet, dealing bonus Fire DMG. - Deals 85% / 170% / 255% Fire DMG in total based on the number of orbs pinged. - Starry Bayonet deals 300% Fire DMG. - Gains Supe..."
              },
              {
                  "name": "Blue Orb: Entangled Heart Blue Orb - Blue Orb automatically pinged upon casting Signature - Ethereal Star",
                  "description": "When casting Signature - Ethereal Star, deals extra Fire DMG once based on the number of Blue Orbs present. - When casting Signature - Ethereal Star, Blue Orbs are converted into Entangled Hearts, dealing 150% Fire DMG. - The Base DMG of this attack increases by 100% for every Entangled Heart consu..."
              },
              {
                  "name": "Basic Attack: Annihilating Meteor Shower",
                  "description": "Photon Hurricane — Tap Basic Attack Attacks the target with the Bladed Cannon, dealing Fire DMG while gaining Blazing Heart. - Deals 680% Fire DMG in total. - Gains Blazing Heart when dealing the 4th and 5th hits of the Basic Attack, casting Basic Attack - Photon Cannon, or dodging successfully. Ph..."
              },
              {
                  "name": "Signature: World Weaver",
                  "description": "Burst Drive — 10 Signature Energy + Tap Signature Unleashes a powerful thrust toward the target in front, dealing Fire DMG and activating Azure Awakening. Becomes invincible when casting Signature - Burst Drive. - Deals 200% Fire DMG. - Fire DMG increases by 15% in Azure Awakening. - Azure Awakenin..."
              },
              {
                  "name": "QTE: Star Mirage",
                  "description": "Quickly launches powerful slashes toward the target area, dealing Fire DMG. - Deals a total of 300% Fire DMG."
              },
              {
                  "name": "Core Passive: Endless Battle",
                  "description": "Reflective Nebula While performing a Red/Yellow Orb 3-Ping, pinging Red/Yellow Orbs again can interrupt it and recast the skill, dealing DMG based on the number of orbs pinged in the interruption, as well as gaining Blue Orbs equal to the number of orbs pinged when casting Flare Strike or Starry Ba..."
              },
              {
                  "name": "Leader: Alter Ego",
                  "description": "Increases Fire DMG of all members by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "★Rock Cannon",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for BLACK★ROCK SHOOTER."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "Unknown"
              },
              {
                  "label": "Activation",
                  "value": "Unknown"
              },
              {
                  "label": "Height",
                  "value": "Unknown"
              },
              {
                  "label": "Weight",
                  "value": "Unknown"
              },
              {
                  "label": "Vital Fluid",
                  "value": "Unknown"
              },
              {
                  "label": "HP",
                  "value": "1469"
              },
              {
                  "label": "ATK",
                  "value": "373"
              },
              {
                  "label": "DEF",
                  "value": "216"
              },
              {
                  "label": "CRIT",
                  "value": "158"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/BLACK%E2%98%85ROCK_SHOOTER"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/BLACK%E2%98%85ROCK_SHOOTER"
      },
      {
          "id": "bridget-ardeo",
          "name": "Bridget: Ardeo",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Character-Ardeo-Portrait.png",
          "sigil": "BA",
          "role": "Tank",
          "frame": "Ardeo",
          "faction": "Support Force",
          "class": "Tank",
          "element": "fire",
          "elements": [
              {
                  "name": "fire",
                  "percent": "100"
              }
          ],
          "rank": "A",
          "gift": "Tactical Goggles",
          "weapon": "Cestus",
          "weaponType": "Tactical Tonfas",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:Ardeo",
          "bio": "A balanced duel-purpose frame capable of both attack and defense that the Science Council specially designed for the Support Force. It carries many special parts with part of its features adjusted accordingly.",
          "effect": "Fearless Fighter – At Least 1 Red Orb + Press and Hold Red Orb + Release Red Orb Starts charging upon pressing and holding a Red Orb, then performs a shield bash upon releasing it, consuming 1/2/3 Red Orb(s) based on the charging time to deal 140% / 180% / 240% Fire DMG. Additionally, applies Scorc...",
          "priority": "",
          "notes": "A balanced duel-purpose frame capable of both attack and defense that the Science Council specially designed for the Support Force. It carries many special parts with part of its features adjusted accordingly.",
          "specialties": [
              {
                  "name": "Resistance Reduction - Able to reduce the Resistance of enemies. Ignition - Launches the enemy into the Combustible status and Ignites them.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Steel Charge",
                  "description": "Fearless Fighter – At Least 1 Red Orb + Press and Hold Red Orb + Release Red Orb Starts charging upon pressing and holding a Red Orb, then performs a shield bash upon releasing it, consuming 1/2/3 Red Orb(s) based on the charging time to deal 140% / 180% / 240% Fire DMG. Additionally, applies Scorc..."
              },
              {
                  "name": "Yellow Orb: Flying Sparks",
                  "description": "Automatically performs Combo 1 of this skill upon switching in. Whirlwind Kick Flying Sparks Combos are always considered 1-Pings without consuming Yellow Orbs or restoring Signature Energy. - Upon receiving Yellow Orbs, Ardeo will convert them into Red or Blue Orbs randomly. Combo 1 – Not in Flyin..."
              },
              {
                  "name": "Blue Orb: Steadfast Foundation",
                  "description": "Enthalpy Released – At Least 1 Blue Orb + Energy Shield in Hand + Ping Blue Orb Hurls the Energy Shield, which continues to pull in enemies as it travels, spending up to 3 Blue Orbs and dealing 120% / 240% / 360% Fire DMG.. Enthalpy Merged – Energy Shield on the Field + Tap Blue Orb Summons the Ene..."
              },
              {
                  "name": "Basic Attack: Whirling Strike",
                  "description": "Combo 1 - Not in Whirling Strike Combo + Tap Basic Attack Turns and strikes the target, dealing 40% Fire DMG. Combo 2 - Complete Combo 1 + Tap Basic Attack Strikes the target with cross attacks, dealing 60% Fire DMG. Can combo into Flying Sparks - Combo 2. Combo 3 - Complete Combo 2 + Tap Basic Att..."
              },
              {
                  "name": "Signature: Solar Reactor",
                  "description": "Signature Move — 200 Energy + Tap Signature Thrusts the tonfas into the ground and triggers a firestorm at the cost of all Flash Points, dealing 300% Fire DMG. Becomes Invincible during so and activates all available QTEs. - Each Flash Point will increase the Base DMG of Solar Reactor by 1.5%. -Sol..."
              },
              {
                  "name": "QTE: Shattering Punch",
                  "description": "Dashes forward and pulls in targets, dealing 600% Fire DMG. Additionally, applies Scorching Invasion on the target, reducing the target's Fire Resistance. - Scorching Invasion reduces the target’s Fire Resistance by 10% for 8s."
              },
              {
                  "name": "Core Passive: Surefooted",
                  "description": "Fortify - Not Moving + Press and Hold Dodge Bridget: Ardeo blocks the attack with her Tactical Tonfas. She cannot move or restore Dodge Gauge during so, and Dodge Gauge is consumed based on the DMG prevented and her max HP when hit (Dodge Gauge is not consumed on a precise block). - If there is eno..."
              },
              {
                  "name": "Leader: Solidarity",
                  "description": "Increases DEF of all members by 10%. Increases DMG of all Tank Omniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Cestus",
                  "cub": "",
                  "memories": "Imported from Build:Ardeo",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Ardeo"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "24"
              },
              {
                  "label": "Activation",
                  "value": "March 20"
              },
              {
                  "label": "Height",
                  "value": "172cm"
              },
              {
                  "label": "Weight",
                  "value": "60kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "A"
              },
              {
                  "label": "HP",
                  "value": "1530"
              },
              {
                  "label": "ATK",
                  "value": "284"
              },
              {
                  "label": "DEF",
                  "value": "234"
              },
              {
                  "label": "CRIT",
                  "value": "139"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Bridget%3A_Ardeo"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Bridget%3A_Ardeo"
      },
      {
          "id": "camu-crocotta",
          "name": "Camu: Crocotta",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Crocotta-Icon.png",
          "sigil": "CC",
          "role": "Vanguard",
          "frame": "Crocotta",
          "faction": "StrikeHawk",
          "class": "Vanguard",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "20"
              },
              {
                  "name": "dark",
                  "percent": "80"
              }
          ],
          "rank": "S",
          "gift": "Media Player",
          "weapon": "Thanatos",
          "weaponType": "Greatsword (T)",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:Crocotta",
          "bio": "A Transcendant that was once a repressed alter-ego in Kamui's M.I.N.D., Camu has been given his own unit by Babylonia, and now specializes in operations in and around heavily-Corrupted Dead Zones.",
          "effect": "Red Orb — Ping Red Orb Spins and slashes nearby enemies, then knocks them into the air, dealing 2 hits Of Physical DMG (Dark DMG instead on a 3-Ping). - Deals 300% / 600% / 900% Physical DMG in total based on the number of orbs pinged. Red Orb — Berserk Form + Ping Red Orb In Berserk Form, launches...",
          "priority": "",
          "notes": "A Transcendant that was once a repressed alter-ego in Kamui's M.I.N.D., Camu has been given his own unit by Babylonia, and now specializes in operations in and around heavily-Corrupted Dead Zones.",
          "specialties": [
              {
                  "name": "Form Switch - Signature Move can switch attacking forms. Burst - Switch forms for high burst.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Rampage",
                  "description": "Red Orb — Ping Red Orb Spins and slashes nearby enemies, then knocks them into the air, dealing 2 hits Of Physical DMG (Dark DMG instead on a 3-Ping). - Deals 300% / 600% / 900% Physical DMG in total based on the number of orbs pinged. Red Orb — Berserk Form + Ping Red Orb In Berserk Form, launches..."
              },
              {
                  "name": "Yellow Orb: Destruction",
                  "description": "Yellow Orb — Ping Yellow Orb Automatically uses a 3-Ping version of this attack upon switch-in. Dashes forward and slashes the enemies twice, dealing 280% / 560% / 840%Dashes forward and slashes the enemies twice, dealing Physical DMG (Dark DMG instead on a 3-Ping). - Deals 280% / 560% / 840% Physi..."
              },
              {
                  "name": "Blue Orb: Rapid Claw",
                  "description": "Blue Orb — Ping Blue Orb Instantly interrupts enemy attacks, then deals AOE Physical DMG to nearby enemies (Dark DMG instead on a 3-Ping) and gains Shield. - Deals a total of 270% / 540% / 810% AOE Physical DMG based on the number of orbs pinged. - Gains Shield equal to 5% / 10% / 15% of max HP tha..."
              },
              {
                  "name": "Basic Attack: Phantom",
                  "description": "Basic Attack — Tap Basic Attack Launches consecutive attacks that deal Physical DMG. - Deals 800% Physical DMG in total. Basic Attack — Berserk Form + Tap Basic Attack In Berserk Form, launches swift attacks that deal Dark DMG. - Deals 1240% Dark DMG in total."
              },
              {
                  "name": "Signature: Instinct Unlocked",
                  "description": "Signature Move — 80 Energy + Tap Signature Enters Berserk Form and gains a Dark Impulse gauge. Becomes invincible while entering this form. In Berserk Form, Crocotta gains Super Armor and his Dark DMG increases. Red, Yellow, and Blue Orbs are replaced by special orbs. Only 1 special orb of each col..."
              },
              {
                  "name": "QTE: Deadly Claw",
                  "description": "Charges at the enemy and claws them for Dark DMG. - Deals 640% Dark DMG in total."
              },
              {
                  "name": "Core Passive: Surging Madness",
                  "description": "Core Passive — Any 3-Ping Any 3-Ping in Normal Form will accumulate Madness. Once Crocotta reaches full Madness, he will gain additional Signature Energy from any 3-Ping. - Madness stacks up to 3 times. - Once Crocotta reaches full Madness, he will gain additional 8 Signature Energy from any 3-Ping..."
              },
              {
                  "name": "Leader: Striking Rhythm",
                  "description": "Increases Dark DMG of all members by 10%. Increases ATK of all Vanguard Uniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Thanatos",
                  "cub": "",
                  "memories": "Imported from Build:Crocotta",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Crocotta"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "19"
              },
              {
                  "label": "Activation",
                  "value": "23 Oct"
              },
              {
                  "label": "Height",
                  "value": "180cm"
              },
              {
                  "label": "Weight",
                  "value": "72kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "B"
              },
              {
                  "label": "HP",
                  "value": "1954"
              },
              {
                  "label": "ATK",
                  "value": "433"
              },
              {
                  "label": "DEF",
                  "value": "274"
              },
              {
                  "label": "CRIT",
                  "value": "192"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Camu%3A_Crocotta"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Camu%3A_Crocotta"
      },
      {
          "id": "changyu-qilin",
          "name": "Changyu: Qilin",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Qilin-Icon.png",
          "sigil": "CQ",
          "role": "Tank",
          "frame": "Qilin",
          "faction": "AkdilekTradingUnion",
          "class": "Tank",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "20"
              },
              {
                  "name": "ice",
                  "percent": "80"
              }
          ],
          "rank": "A",
          "gift": "Copper Coin",
          "weapon": "Baji",
          "weaponType": "Gauntlets",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "Born in Kowloong and a former member of the theater. He has become a bodyguard on Asslam after many twists and turns.",
          "effect": "Launches 2 quick attacks forward to deal Physical DMG. Upon a 3-Ping, Changyu: Qilin will charge up for a short while to launch a heavy blow after 2 quick attacks, dealing Ice DMG and slowing the enemies. - Deals 200% / 400% / 400% Physical DMG based on the number of orbs pinged. - The heavy blow d...",
          "priority": "",
          "notes": "Born in Kowloong and a former member of the theater. He has become a bodyguard on Asslam after many twists and turns.",
          "specialties": [
              {
                  "name": "Melee - Uses follow-up skills to deal DMG and accumulate Energy Tank - Deals continuous DMG after performing a Signature Move",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Deep Wyrm Strike — Ping Red Orb",
                  "description": "Launches 2 quick attacks forward to deal Physical DMG. Upon a 3-Ping, Changyu: Qilin will charge up for a short while to launch a heavy blow after 2 quick attacks, dealing Ice DMG and slowing the enemies. - Deals 200% / 400% / 400% Physical DMG based on the number of orbs pinged. - The heavy blow d..."
              },
              {
                  "name": "Yellow Orb: Skyward Kick — Ping Yellow Orb",
                  "description": "Dashes toward the target and throws an upper kick to knock it airborne, dealing Physical DMG (Ice DMG instead on a 3-Ping). - Deals 220% / 440% / 660% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Air-Cracking Palm — Ping Blue Orb",
                  "description": "Hammers the ground to deal Physical DMG (Ice DMG instead on a 3-Ping) to all enemies within 4m. The palm strike will leave a Crystal Ice Mirror on the ground. The enemies inside the Crystal Ice Mirror have their movement speed decreased, and are affected by Frost Corrosion which reduces their Ice R..."
              },
              {
                  "name": "Basic Attack: Sea Serpent Thrash — Tap Basic Attack",
                  "description": "Proficient in martial arts, Changyu: Qilin pummels the enemies with his Gauntlets to deal Physical DMG and Ice DMG. - Deals 320% Physical DMG and 810% Ice DMG in total."
              },
              {
                  "name": "Signature: Signature - Selfless State",
                  "description": "Signature Move — 60 Energy + Tap Signature Once activated, enters the Selfless State. In this state, removes all Signal Orbs (no more orbs will be generated) except the Follow-Up Orb and restores Signature Energy for each orb removed. The Follow-Up Orb will not be grayed out. DEF and Ice DMG increa..."
              },
              {
                  "name": "QTE: Flashing Breaker",
                  "description": "Appears above the target and smashes the ground with a charged-up punch, dealing 5 hits of Ice DMG in total and slowing the target temporarily. - Deals 510% Ice DMG in total."
              },
              {
                  "name": "Core Passive: Follow-Up",
                  "description": "Core Passive — Any 3-Ping + Ping Follow-Up Orb At the start of battle, gains a grayed-out Follow-Up Orb (cannot be tapped or pinged). The Follow-Up Orb will light up upon a 3-Ping. Tap it to perform different follow-up skills based on the color of orbs pinged. Core Passive — Red 3-Ping + Ping Follo..."
              },
              {
                  "name": "Leader: Leader - Will of Protection",
                  "description": "Increases DEF of all members by 15%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Baji",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Qilin."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "0"
              },
              {
                  "label": "Psychological Age",
                  "value": "16"
              },
              {
                  "label": "Activation",
                  "value": "7 Apr"
              },
              {
                  "label": "Height",
                  "value": "157cm"
              },
              {
                  "label": "Weight",
                  "value": "51kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "A"
              },
              {
                  "label": "HP",
                  "value": "1545"
              },
              {
                  "label": "ATK",
                  "value": "288"
              },
              {
                  "label": "DEF",
                  "value": "227"
              },
              {
                  "label": "CRIT",
                  "value": "141"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Changyu%3A_Qilin"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Changyu%3A_Qilin"
      },
      {
          "id": "chrome-arclight",
          "name": "Chrome: Arclight",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Arclight-Icon.png",
          "sigil": "CA",
          "role": "Tank",
          "frame": "Arclight",
          "faction": "StrikeHawk",
          "class": "Tank",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "30"
              },
              {
                  "name": "lightning",
                  "percent": "70"
              }
          ],
          "rank": "A",
          "gift": "R3 Cleaning Robot",
          "weapon": "St. Elmo",
          "weaponType": "Scythe",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:Arclight",
          "bio": "The leader of the Strike Hawk. Capable of relaying important intel through a secure and stable channel. He values the flawless completion of missions, and also the safety of all his teammates.",
          "effect": "Stands still and swings the Scythe several times, dealing Physical DMG. (Lightning DMG instead on a 3-Ping.) - Each hit deals 18% / 36% / 54% Physical DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "The leader of the Strike Hawk. Capable of relaying important intel through a secure and stable channel. He values the flawless completion of missions, and also the safety of all his teammates.",
          "specialties": [
              {
                  "name": "Form Switch - Signature Move can switch attacking forms. Shield - Releases a shield to defend.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Shifting Nimbus — Ping Red Orb",
                  "description": "Stands still and swings the Scythe several times, dealing Physical DMG. (Lightning DMG instead on a 3-Ping.) - Each hit deals 18% / 36% / 54% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Culling Maelstrom — Ping Yellow Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in fulfills the first half of this character's Core Passive. Moves while spinning with the Scythe, pulling nearby targets in. Brings down the Scythe at the end, dealing Physical DMG. (Lightning DMG instead on a 3-Ping.) Deals..."
              },
              {
                  "name": "Blue Orb: Pulse Overload — Ping Blue Orb",
                  "description": "Spins and emits an electric pulse, marking nearby targets and dealing Lightning DMG. Arclight's Extra DMG Bonus and Extra DMG Reduction increases against the marked targets. - Deals 150% / 300% / 450% Lightning DMG to nearby targets based on the number of orbs pinged. - Extra DMG Bonus against the..."
              },
              {
                  "name": "Basic Attack: Thunderstorm — Tap Basic Attack",
                  "description": "Swings the Scythe and launches multiple attacks at the target, dealing Physical DMG. - Deals 610% Physical DMG in total."
              },
              {
                  "name": "Signature: Signature - Storm World",
                  "description": "Signature Move — 100 Energy + Tap Signature Summons lightning to charge up and pull nearby targets in. Basic Attacks become Fulgurant Flurry for a period of time. - Fulgurant Flurry lasts 8s. Signature Move — Fulgurant Flurry + Tap Basic Attack While Fulgurant Flurry is active, performing Fulgurant..."
              },
              {
                  "name": "QTE: Blue Bolt",
                  "description": "Upon entering the battlefield, blasts nearby targets to deal Lightning DMG and inflict them with Turbulent Interference that reduces their Lightning Resistance, then slams the Scythe to blast nearby targets, dealing Lightning DMG. - The initial blast deals 250% Lightning DMG to the targets. - The s..."
              },
              {
                  "name": "Core Passive: Arclight Shield",
                  "description": "Core Passive — Any 3-Ping + Ping Blue Orb Pinging any Blue Orbs after any 3-Ping generates Shield. When Shield expires or is replaced by a new Shield, it explodes and deals Lightning DMG to nearby targets. - Generates Shield equal to 10% of max HP for 4s. - Deals 200% Lightning DMG to nearby target..."
              },
              {
                  "name": "Leader: Vanguard Warsong",
                  "description": "Increases DEF by 10% and HP by 5% when there are 3 different classes in the team."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "St. Elmo",
                  "cub": "",
                  "memories": "Imported from Build:Arclight",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Arclight"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "2"
              },
              {
                  "label": "Psychological Age",
                  "value": "19"
              },
              {
                  "label": "Activation",
                  "value": "31 Jul"
              },
              {
                  "label": "Height",
                  "value": "178cm"
              },
              {
                  "label": "Weight",
                  "value": "60kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "B"
              },
              {
                  "label": "HP",
                  "value": "1590"
              },
              {
                  "label": "ATK",
                  "value": "288"
              },
              {
                  "label": "DEF",
                  "value": "238"
              },
              {
                  "label": "CRIT",
                  "value": "144"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Chrome%3A_Arclight"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Chrome%3A_Arclight"
      },
      {
          "id": "chrome-glory",
          "name": "Chrome: Glory",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Glory-Icon.png",
          "sigil": "CG",
          "role": "Tank",
          "frame": "Glory",
          "faction": "StrikeHawk",
          "class": "Tank",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "20"
              },
              {
                  "name": "ice",
                  "percent": "80"
              }
          ],
          "rank": "S",
          "gift": "R3 Cleaning Robot",
          "weapon": "Apollo",
          "weaponType": "Gunblade",
          "cub": {
              "name": "Boreas",
              "notes": ""
          },
          "memory": "Imported from Build:Glory",
          "bio": "The second specialized frame of Babylonia's mid-term military Construct development plan. It has been adjusted and optimized based on Chrome's request.",
          "effect": "Red Orb — Ping Red Orb Draws the blade to slash upward before taking down the enemy with a quick horizontal strike, dealing Physical DMG (Ice DMG instead on a 3-Ping). - Deals 190% / 380% / 570% Physical DMG in total based on the number of orbs pinged. Red Orb — Glorious Shield over 50% + Red 3-Pin...",
          "priority": "",
          "notes": "The second specialized frame of Babylonia's mid-term military Construct development plan. It has been adjusted and optimized based on Chrome's request.",
          "specialties": [
              {
                  "name": "Form Switch — Able to switch to a burst form and launch powerful attacks Resistance Reduction — Able to reduce the Resistance of enemies",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Reverse Aurora",
                  "description": "Red Orb — Ping Red Orb Draws the blade to slash upward before taking down the enemy with a quick horizontal strike, dealing Physical DMG (Ice DMG instead on a 3-Ping). - Deals 190% / 380% / 570% Physical DMG in total based on the number of orbs pinged. Red Orb — Glorious Shield over 50% + Red 3-Pin..."
              },
              {
                  "name": "Yellow Orb: Icy Flow",
                  "description": "Yellow Orb — Ping Yellow Orb Automatically uses a 3-Ping version of this attack upon switch-in. Chrome: Glory swings the blade upward to create an icy vortex that pulls the enemy close before slamming them down, dealing Physical DMG (Ice DMG instead on a 3-Ping). - Deals 170% / 340% / 510% Physical..."
              },
              {
                  "name": "Blue Orb: Glacial Slash",
                  "description": "Blue Orb — Ping Blue Orb Chrome: Glory swings the blade upward to create an icy vortex that pulls the enemy close before slamming them down, dealing Physical DMG (Ice DMG instead on a 3-Ping). - Deals 180% / 360% / 540% Physical DMG in total based on the number of orbs pinged. Blue Orb — Glorious S..."
              },
              {
                  "name": "Basic Attack: Arctic Edge",
                  "description": "Basic Attack — Tap Basic Attack Attacks consecutively using the Gunblade, dealing Physical DMG. - Deals 750% Physical DMG in total. Frost Strike — Tap Basic Attack In Frost Spirit form, Basic Attacks are replaced by more powerful Frost Strike instead, dealing Ice DMG. During the actions of Frost St..."
              },
              {
                  "name": "Signature: Signature - Rime Blast",
                  "description": "Signature Move — 80 Energy + Tap Signature Injects chilling power into the ground, freezing a large area and dealing Ice DMG to enemies hit. - Deals 2300% Ice DMG."
              },
              {
                  "name": "QTE: Chilling Dawn",
                  "description": "Jumps down from above and smashes the ground, dealing Ice DMG to enemies hit. - Deals 640% Ice DMG."
              },
              {
                  "name": "Core Passive: Frost Origin",
                  "description": "Core Passive — Energy full + Press and hold Basic Attack During battle, Chrome: Glory's HP is compressed to 40%, with the remaining 60% filled with Glorious Shield that automatically regenerates over time. When he has full energy, press and hold Basic Attack to empty the Glorious Shield capacity an..."
              },
              {
                  "name": "Leader: Leader - Navigator",
                  "description": "Increases Ice DMG of all members by 10%. Increases DMG of all Tank Omniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Apollo",
                  "cub": "Boreas",
                  "memories": "Imported from Build:Glory",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Glory"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "2"
              },
              {
                  "label": "Psychological Age",
                  "value": "19"
              },
              {
                  "label": "Activation",
                  "value": "31 Jul"
              },
              {
                  "label": "Height",
                  "value": "178cm"
              },
              {
                  "label": "Weight",
                  "value": "60kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "B"
              },
              {
                  "label": "HP",
                  "value": "2164"
              },
              {
                  "label": "ATK",
                  "value": "395"
              },
              {
                  "label": "DEF",
                  "value": "298"
              },
              {
                  "label": "CRIT",
                  "value": "182"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Chrome%3A_Glory"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Chrome%3A_Glory"
      },
      {
          "id": "dante",
          "name": "Dante: Dante",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Dante-Icon.png",
          "sigil": "DD",
          "role": "Attacker",
          "frame": "Dante",
          "faction": "Devil May Cry",
          "class": "DPS",
          "element": "fire",
          "elements": [
              {
                  "name": "fire",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Pizza Combo",
          "weapon": "Devil Sword Dante",
          "weaponType": "Devil Sword",
          "cub": {
              "name": "Cavaliere",
              "notes": ""
          },
          "memory": "Imported from Build:Dante",
          "bio": "The boss of Devil May Cry, and the most powerful devil hunter alive. Revered for his legendary strength.",
          "effect": "Weapon Switching – Without Devil Sword Dante + Tap Red Orb Switches to Devil Sword Dante. Stinger – With Devil Sword Dante + Tap Red Orb Lunges forward, while summoning Conjured Swords to attack the enemy. Deals Fire DMG and gains DT upon cast. - Deals 125% / 250% / 375% Fire DMG based on the numbe...",
          "priority": "",
          "notes": "The boss of Devil May Cry, and the most powerful devil hunter alive. Revered for his legendary strength.",
          "specialties": [
              {
                  "name": "Burst - Deals massive DMG in a short time. Ignition - Launches the enemy into the Combustible status and Ignites them.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Devil Sword Dante",
                  "description": "Weapon Switching – Without Devil Sword Dante + Tap Red Orb Switches to Devil Sword Dante. Stinger – With Devil Sword Dante + Tap Red Orb Lunges forward, while summoning Conjured Swords to attack the enemy. Deals Fire DMG and gains DT upon cast. - Deals 125% / 250% / 375% Fire DMG based on the numbe..."
              },
              {
                  "name": "Yellow Orb: Dr. Faust",
                  "description": "Red Hot Night - Charge – Tap/Press and Hold Yellow Orb Puts on Dr. Faust and starts charging, obtaining DT. While charging, automatically consumes Signal Orbs. Triggers Matrix if it is not on cooldown and gains Super Armor and 99% DMG Reduction. - For every 0.3s charged, gains 30 DT. - Pings up to..."
              },
              {
                  "name": "Blue Orb: Balrog",
                  "description": "Weapon Switching – Without Balrog + Tap Blue Orb Switches to Balrog. Heavy Jolt – With Balrog + Tap Blue Orb Throws a punch forward, while summoning Conjured Swords to attack the enemy. Deals Fire DMG based on the number of orbs pinged. Gains DT upon cast. - Deals 150% / 300% / 450% Fire DMG based..."
              },
              {
                  "name": "Basic Attack: Trigger Heart",
                  "description": "DSD Combo – Wielding Devil Sword Dante + Tap Basic Attack Attacks with Devil Sword Dante, dealing Fire DMG while summoning Conjured Swords to attack the enemy. - Deals a total of 770% Fire DMG. - When cast midair, deals a total of 290% Fire DMG. Balrog Combo – Wielding Balrog + Tap Basic Attack Att..."
              },
              {
                  "name": "Signature: Sin Devil Trigger",
                  "description": "Sin Devil Trigger – With 125 Signature Energy + Human Form + Tap Signature Devil Sword Dante gets summoned and pierces through Dante, activating Dante's SDT Form and dealing Fire DMG. DT is converted into SDT, immediately filling SDT Gauge. Triggers Time Lag Calculation when casting. - Deals 750% F..."
              },
              {
                  "name": "QTE: Dance Macabre - Flash",
                  "description": "QTE – Tap QTE Swings the sword to attack the target, dealing a total of 600% Fire DMG."
              },
              {
                  "name": "Core Passive: Devil Hunter Skill",
                  "description": "Devil Arm Energy When pinging Signal Orbs via Devil Sword Dante, Dr. Fause, or Balrog, or when casting DSD Combo or Balrog Combo, gains Devil Arm Energy. When Devil Arm Energy is full, spends Devil Arm Energy to enhance the effects of Dance Macabre, Real Impact, and Red Hot Night. - A complete DSD..."
              },
              {
                  "name": "Leader: The Legendary Devil Hunter",
                  "description": "Increases Fire and Ignition DMG of all members by 10%. Increases ATK of all Attackers in the team by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Devil Sword Dante",
                  "cub": "Cavaliere",
                  "memories": "Imported from Build:Dante",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Dante"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "Unknown"
              },
              {
                  "label": "Activation",
                  "value": "Unknown"
              },
              {
                  "label": "Height",
                  "value": "Unknown"
              },
              {
                  "label": "Weight",
                  "value": "Unknown"
              },
              {
                  "label": "Vital Fluid",
                  "value": "Unknown"
              },
              {
                  "label": "HP",
                  "value": "1954"
              },
              {
                  "label": "ATK",
                  "value": "459"
              },
              {
                  "label": "DEF",
                  "value": "288"
              },
              {
                  "label": "CRIT",
                  "value": "214"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Dante"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Dante"
      },
      {
          "id": "discord-secator",
          "name": "Discord: Secator",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Secator-Icon.png",
          "sigil": "DS",
          "role": "Attacker",
          "frame": "Secator",
          "faction": "Scarab",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "A",
          "gift": "Scissors",
          "weapon": "Osseous Guillotine",
          "weaponType": "Scissors",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:Secator",
          "bio": "A new frame designed by Babylonia. Compared to Kurono's older model, its M.I.N.D. is less stable, with output levels prone to wide fluctuations.",
          "effect": "Red Orb: Auto Combo Automatically casts the next combo at the end of a Red Orb Skill. Strands Separation: Tap Red Orb Slashes the enemy with the scissors, pulling in nearby enemies and dealing 100% Physical DMG. Press and hold Signature to automatically ping Red Orbs, dealing 100% Ultima Slash DMG...",
          "priority": "",
          "notes": "A new frame designed by Babylonia. Compared to Kurono's older model, its M.I.N.D. is less stable, with output levels prone to wide fluctuations.",
          "specialties": [
              {
                  "name": "Burst — Deals massive DMG in a short time. Ultima Slash - This skill can unleash the Ultima Slash.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Staccato Slash",
                  "description": "Red Orb: Auto Combo Automatically casts the next combo at the end of a Red Orb Skill. Strands Separation: Tap Red Orb Slashes the enemy with the scissors, pulling in nearby enemies and dealing 100% Physical DMG. Press and hold Signature to automatically ping Red Orbs, dealing 100% Ultima Slash DMG..."
              },
              {
                  "name": "Yellow Orb: Spiral Bind — Tap Yellow Orb",
                  "description": "Leaps up and performs a rotary cutting on nearby enemies, dealing Physical DMG and gaining Cutting Edge. - Deals 100% / 200% / 300% Physical DMG and gains 5 / 10 / 15 Cutting Edge based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Silk Snare — Tap Blue Orb",
                  "description": "Throws out the scissors, pulling in nearby enemies, dealing Physical DMG to enemies on the path, and gaining Cutting Edge. - Deals 96% / 192% / 320% Physical DMG and gains 5 / 10 / 15 Cutting Edge based on the number of orbs pinged."
              },
              {
                  "name": "Basic Attack: Pattern Cut",
                  "description": "Swift Snipping — Tap Basic Attack Launches cross attacks at the enemy, dealing Physical DMG. - Deals 570% Physical DMG in total. Focused Rending: At Least 15 Cutting Edge + Press and Hold Basic Attack Consumes all Cutting Edge and charges forward with the scissors to deal damage based on Cutting Ed..."
              },
              {
                  "name": "Signature: Severing Finale",
                  "description": "Rampant Shears: Silent Consent + At Least 80 Signature Energy + Tap Signature Puts on a mask and enters Rampant Disaster, dealing 500% Physical DMG to surroundings. While Rampant Disaster is active, gains Super Armor, 50% DMG Reduction, and infinite Red Orbs. When taking hits, 250 Dodge Gauge is co..."
              },
              {
                  "name": "QTE: Needle Drop",
                  "description": "QTE: Tap QTE Launches a thrust attack at the enemy from midair, dealing 600% Physical DMG."
              },
              {
                  "name": "Core Passive: Rending Fang",
                  "description": "Silent Rampancy While in Silent Consent, only Blue and Yellow Orbs can be used. Under Rampant Disaster, only Red Orbs can be used. Final Rite When casting Yellow or Blue Orb skills, Converging Edge grants Cutting Edge. Casting Purgatory Shear or Focused Rending will consume all Cutting Edge and inc..."
              },
              {
                  "name": "Leader: Distorted Record",
                  "description": "Increases Physical DMG of all members by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Osseous Guillotine",
                  "cub": "",
                  "memories": "Imported from Build:Secator",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Secator"
              }
          ],
          "facts": [
              {
                  "label": "Psychological Age",
                  "value": "19"
              },
              {
                  "label": "Activation",
                  "value": "30 Nov"
              },
              {
                  "label": "Height",
                  "value": "168cm"
              },
              {
                  "label": "Weight",
                  "value": "50kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "AB"
              },
              {
                  "label": "HP",
                  "value": "1439"
              },
              {
                  "label": "ATK",
                  "value": "309"
              },
              {
                  "label": "DEF",
                  "value": "216"
              },
              {
                  "label": "CRIT",
                  "value": "148"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Discord%3A_Secator"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Discord%3A_Secator"
      },
      {
          "id": "haicma-starveil",
          "name": "Haicma: Starveil",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-VeiledStar-Icon.png",
          "sigil": "HS",
          "role": "Vanguard",
          "frame": "Starveil",
          "faction": "Church of the Mechanics",
          "class": "Vanguard",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "10"
              },
              {
                  "name": "ice",
                  "percent": "90"
              }
          ],
          "rank": "S",
          "gift": "Deluxe Picture Book",
          "weapon": "Galatea",
          "weaponType": "Scythe",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "A mechanoid from the Church of Machina that roams Earth in search of the Sagemachina. Compared with other mechanoids, she seems to have other reasons for pursuing this \"Sage\".",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Spins and pulls in surrounding enemies, dealing Physical DMG (Ice DMG instead on a 3-Ping). - Deals 300% / 600% / 900% Physical DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "A mechanoid from the Church of Machina that roams Earth in search of the Sagemachina. Compared with other mechanoids, she seems to have other reasons for pursuing this \"Sage\".",
          "specialties": [
              {
                  "name": "Control - Freezes enemies to restrain their actions. Burst — Deals massive DMG in a short time.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Gravity Matrix — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Spins and pulls in surrounding enemies, dealing Physical DMG (Ice DMG instead on a 3-Ping). - Deals 300% / 600% / 900% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Frostbite Leap — Ping Yellow Orb",
                  "description": "Dashes toward the enemy, dealing Physical DMG (Ice DMG instead on a 3-Ping). - Deals 300% / 600% / 900% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Chain Reflection — Ping Blue Orb",
                  "description": "Slashes and deals Physical DMG (Ice DMG instead on a 3-Ping) before turning around and shooting a ray of frost in an arc, dealing Ice DMG. - The slash deals 100% / 200% / 300% Physical DMG based on the number of orbs pinged. - The ray of frost deals 200% / 400% / 600% Ice DMG based on the number of..."
              },
              {
                  "name": "Basic Attack: Sinusoidal Blade — Tap Basic Attack",
                  "description": "Attacks with the Scythe, dealing Physical DMG. - Deals 860% Physical DMG in total."
              },
              {
                  "name": "Signature: Frost-Treated Blade",
                  "description": "Frost-Treated Blade — Critical Point: 30 Energy + Tap Signature Casts Frost-Treated Blade: Critical Point, imbuing her weapon and turning all DMG she deals into Ice DMG. In this state, Signature Energy does not recover, but all attacks increase the Froststream Level. Frost-Treated Blade: Quench — H..."
              },
              {
                  "name": "QTE: Rimefall",
                  "description": "Comes down from above and creates a Frost Terrain, dealing Ice DMG. - Deals 900% Ice DMG."
              },
              {
                  "name": "Core Passive: Huntress' Command",
                  "description": "Bitter Frost — Press and hold Dodge Press and hold Dodge to activate and charge Bitterfrost Level. Release Dodge when Bitterfrost Level is fully charged to release Bitter Frost, dealing Ice DMG. Releasing Dodge before fully charged will result in no attacks, and Bitterfrost Level will gradually dec..."
              },
              {
                  "name": "Leader: Leader - Hidden Star",
                  "description": "Increases Ice DMG of all members by 5%. Increases ATK of all Vanguard Uniframes by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Galatea",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Starveil."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "Unknown"
              },
              {
                  "label": "Activation",
                  "value": "Unknown"
              },
              {
                  "label": "Height",
                  "value": "166cm"
              },
              {
                  "label": "Weight",
                  "value": "50kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "Unknown"
              },
              {
                  "label": "HP",
                  "value": "1915"
              },
              {
                  "label": "ATK",
                  "value": "421"
              },
              {
                  "label": "DEF",
                  "value": "301"
              },
              {
                  "label": "CRIT",
                  "value": "182"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Haicma%3A_Starveil"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Haicma%3A_Starveil"
      },
      {
          "id": "hanying-solacetune",
          "name": "Hanying: Solacetune",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Character-Solacetune-Portrait.png",
          "sigil": "HS",
          "role": "Tank",
          "frame": "Solacetune",
          "faction": "Kowloong",
          "class": "Tank",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Cloud Comb",
          "weapon": "Dream Roamer",
          "weaponType": "Pipa",
          "cub": {
              "name": "Dreamwing",
              "notes": "Dreamwing will attack with an energy wave, applying Rigidity to nearby enemies and dealing damage. Rigidity: Enemies will be rooted for 2s."
          },
          "memory": "",
          "bio": "This frame, forged by the Church of Machina, is equipped with new hardware whole preserving the superior instruction architecture set of Kowloong from the Golden Age. Through fierce in battle, the core of Hanying remains gentle and kind, providing her with the strength to stand firm.",
          "effect": "Red Orb: Owns at Least 1 White Orb + Tap Red Orb Quickly plays the chords to deal Physical DMG. While casting this skill, consumes 1 White Orb and grants Super Armor, gaining Sonority and Sharp Reserve. When cast in the Matrix, instantly gains 2 White Orbs and triggers a 3-Ping. - Deals a total of...",
          "priority": "",
          "notes": "This frame, forged by the Church of Machina, is equipped with new hardware whole preserving the superior instruction architecture set of Kowloong from the Golden Age. Through fierce in battle, the core of Hanying remains gentle and kind, p...",
          "specialties": [
              {
                  "name": "Defense Down - Able to reduce Physical Defense of enemies. Ultima Slash - This skill can unleash the Ultima Slash.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Shattered Melody",
                  "description": "Red Orb: Owns at Least 1 White Orb + Tap Red Orb Quickly plays the chords to deal Physical DMG. While casting this skill, consumes 1 White Orb and grants Super Armor, gaining Sonority and Sharp Reserve. When cast in the Matrix, instantly gains 2 White Orbs and triggers a 3-Ping. - Deals a total of..."
              },
              {
                  "name": "Yellow Orb: Lingering Notes",
                  "description": "Yellow Orb — Owns at least 1 White Orb + Tap Yellow Orb Spins and plays the chords to deal Physical DMG, and can dodge attacks during the spin. Casting requires at least 1 White Orb and grants Sonority and Sharp Reserve based on the number of White Orbs consumed. When cast in the Matrix, only 1 Whi..."
              },
              {
                  "name": "Blue Orb: Yearning in Spring",
                  "description": "Blue Orb — Ping Blue Orbs Casts a clone to keep thrusting the target, dealing Physical DMG and gaining Sonority and Sharp Reserve. - Deals a total of 120% / 240% / 360% Physical DMG based on the number of orbs pinged. - Gains 10 / 20 / 30 Sonority based on the number of orbs pinged. - Gains 5 / 10..."
              },
              {
                  "name": "Basic Attack: Gem Tone",
                  "description": "Refined Rhythm - Chord Mode + Tap Basic Attack Attacks the target with a blend of music and dance, dealing Physical DMG and gaining Sonority. - Deals a total of 340% Physical DMG. - Gains 2 / 4 / 6 / 8 Sonority based on the number of attacks. Rippling Shadows - Chord Mode + Press and Hold Basic Att..."
              },
              {
                  "name": "Signature: Lost Chord",
                  "description": "Flying Leafpoint — 40 Energy + Tap Signature Draws the Hairpin and enters Attacker Mode to launch a surprise attack on the target, dealing Physical DMG and triggering a Time Lag Calculation. If the target has a Dream Mark, consumes one Dream Mark to guarantee a critical hit and increase Base DMG by..."
              },
              {
                  "name": "QTE: Embattled",
                  "description": "Eradication - Tap QTE Pulls nearby enemies together and deals Physical DMG. Inflicts Piercing Blow that reduces the target's Physical Defense and Penetrating Pivot that reduces the target's Physical Resistance. - Piercing Blow reduces the target’s Physical Defense by 20% for 8s. - Penetrating Pivot..."
              },
              {
                  "name": "Core Passive: Court Ballad",
                  "description": "Ethereal Elegance When in Chord Mode, all Signal Orbs transform into White Orbs. When in Attacker Mode, all Signal Orbs transform into Blue Orbs. Gains a 30% DMG Reduction while Hanying: Solacetune has a shield. Open String — Ping Harmonic Orbs Gains the Harmonic Orb in Chord Mode after pinging 6 W..."
              },
              {
                  "name": "Leader: Awakened Strings",
                  "description": "Increases Physical DMG of all members by 10%. Increases DMG of all Tank Omniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Dream Roamer",
                  "cub": "Dreamwing",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Solacetune."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "Unknown"
              },
              {
                  "label": "Activation",
                  "value": "July 24"
              },
              {
                  "label": "Height",
                  "value": "169cm"
              },
              {
                  "label": "Weight",
                  "value": "53kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "Unknown"
              },
              {
                  "label": "HP",
                  "value": "2069"
              },
              {
                  "label": "ATK",
                  "value": "391"
              },
              {
                  "label": "DEF",
                  "value": "316"
              },
              {
                  "label": "CRIT",
                  "value": "171"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Hanying%3A_Solacetune"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Hanying%3A_Solacetune"
      },
      {
          "id": "hanying-zitherwoe",
          "name": "Hanying: Zitherwoe",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Zitherwoe-Icon.png",
          "sigil": "HZ",
          "role": "Support",
          "frame": "Zitherwoe",
          "faction": "Church of the Mechanics",
          "class": "Support",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "A",
          "gift": "Cloud Comb",
          "weapon": "Perpetuity",
          "weaponType": "Folding Fan",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:Zitherwoe",
          "bio": "A mechanoid from Kowloong now waking up from her long sleep in the Church of Machina. Perfectly showcasing the fruit of Kowloong's machine technology through her appearance that extremely resembles a human being, she is still moving around as a mechanoid.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Swings the fan to deal DMG. — Deals a total of 160% / 320% / 480% Physical DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "A mechanoid from Kowloong now waking up from her long sleep in the Church of Machina. Perfectly showcasing the fruit of Kowloong's machine technology through her appearance that extremely resembles a human being, she is still moving around...",
          "specialties": [
              {
                  "name": "Heal - Has ally healing skills. Physical Damage - Able to enhance herself and grant Pulao and Qu extra buffs.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Ballad of Bamboos — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Swings the fan to deal DMG. — Deals a total of 160% / 320% / 480% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Coda of Butterflies — Ping Yellow Orb",
                  "description": "Swings multiple fans to attack the enemies, dealing DMG. — Deals a total of 160% / 320% / 480% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Verse of Breeze — Ping Blue Orb",
                  "description": "Leaps into the air and spins, dealing DMG to the surrounding enemies and restoring the HP of nearby allies. Activates the Ultralimit Torque effect that increases Physical DMG. — Deals 140% / 280% / 420% Physical DMG based on the number of orbs pinged. — Heals for 30% / 60% / 90% of Hanying: Zitherw..."
              },
              {
                  "name": "Basic Attack: Flight of Clouds",
                  "description": "Basic Attack — Tap Basic Attack Swings the fans and dances, dealing multiple hits to the enemy. Basic Attacks recover Signal Orbs faster in Dancer Stance. — Deals 840% Physical DMG in total. Enchanting Emergence — Tap Basic Attack after dodging Leaps into the air to unleash multiple fans that orbit..."
              },
              {
                  "name": "Signature: Vision of Mountains",
                  "description": "Signature Move — 100 Energy + tap Signature Opens her fan to reveal the painted world and deals DMG to surrounding enemies, exiting Dancer Stance afterward if in Dancer Stance. — Deals 1200% Physical DMG in total."
              },
              {
                  "name": "QTE: Whirl of Stars",
                  "description": "Leaps into the air and spins, dealing DMG to the surrounding enemies and restoring the HP of nearby allies. Activates the Ultralimit Torque effect that increases Physical DMG. — Deals 420% Physical DMG in total. — Restores HP of allies in a large area equal to 100% of Hanying’s ATK. — Ultralimit To..."
              },
              {
                  "name": "Core Passive: Silk Dance",
                  "description": "Spring of Emerald Flow — Any 3-Ping Hanying gains 1 Dancer Point after any 3-Ping, up to 4 Points. Dance of Emerald Flow — At least 1 Dancer Point + Tap Dodge After spending 1 Dancer Point, Hanying will perform a Choreography, entering Dancer Stance, recovering 16 Signature Energy, and gaining 1 st..."
              },
              {
                  "name": "Leader: Principal Dancer",
                  "description": "Increases HP of all members by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Perpetuity",
                  "cub": "",
                  "memories": "Imported from Build:Zitherwoe",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Zitherwoe"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "Unknown"
              },
              {
                  "label": "Activation",
                  "value": "24 July"
              },
              {
                  "label": "Height",
                  "value": "169cm"
              },
              {
                  "label": "Weight",
                  "value": "53kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "Unknown"
              },
              {
                  "label": "HP",
                  "value": "1515"
              },
              {
                  "label": "ATK",
                  "value": "325"
              },
              {
                  "label": "DEF",
                  "value": "216"
              },
              {
                  "label": "CRIT",
                  "value": "171"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Hanying%3A_Zitherwoe"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Hanying%3A_Zitherwoe"
      },
      {
          "id": "ishmael-parhelion",
          "name": "Ishmael: Parhelion",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Parhelion-Icon.png",
          "sigil": "IP",
          "role": "Observer",
          "frame": "Parhelion",
          "faction": "■■■",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Copperwood Dice",
          "weapon": "Alpha-Omega",
          "weaponType": "Keystaff",
          "cub": {
              "name": "Diamaton",
              "notes": ""
          },
          "memory": "Imported from Build:Parhelion",
          "bio": "Along with the rise and fall of countless civilizations, this is where Ishmael's choices intersect. This frame was born from a cosmos beyond time with materials beyond human comprehension, as enigmatic as the will of the Observer that operates within.",
          "effect": "Radiant Flash: Tap Red Orb Hits the target with the knee, dealing Nihil DMG. Gains Phantom Points and Collapse Points after casting. Triggers a special ability based on Observation Notes during the process. - After casting, gains 10 / 20 / 30 Phantom Points and 15 / 30 / 45 Collapse Points based on...",
          "priority": "",
          "notes": "Along with the rise and fall of countless civilizations, this is where Ishmael's choices intersect. This frame was born from a cosmos beyond time with materials beyond human comprehension, as enigmatic as the will of the Observer that oper...",
          "specialties": [
              {
                  "name": "Observer - Character ability changes based on the team formation. Disruption - Able to rapidly break the enemy's Equilibrium Field.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Vanishing Star",
                  "description": "Radiant Flash: Tap Red Orb Hits the target with the knee, dealing Nihil DMG. Gains Phantom Points and Collapse Points after casting. Triggers a special ability based on Observation Notes during the process. - After casting, gains 10 / 20 / 30 Phantom Points and 15 / 30 / 45 Collapse Points based on..."
              },
              {
                  "name": "Yellow Orb: Ethereal Mirage",
                  "description": "Ethereal Mirage: Tap Yellow Orb Ishmael: Parhelion has only 1 Yellow Orb always fixed on the far right. Tap to cast Forbidden Realm, dealing Nihil DMG. - Gains 12 Signature Energy after casting. - Casting the skill will be regarded as a 3-Ping and deal 270% Nihil DMG. - Forbidden Realm lasts 6s. Wh..."
              },
              {
                  "name": "Blue Orb: Celestial Aria",
                  "description": "Circling Stars: Tap Blue Orb Summons twin-star projection to attack the target, dealing Nihil DMG. Gains Collapse Points after casting. - After casting, gains 15 / 30 / 45 Collapse Points based on the number of orbs pinged. - Deals 60% / 120% / 180% Nihil DMG based on the number of orbs pinged. Cor..."
              },
              {
                  "name": "Basic Attack: Doomsday Proverb",
                  "description": "Nebula Flow: Wanderer Form + Tap Basic Attack Summons substance projection to attack the target, dealing Nihil DMG. When there is Forbidden Realm, Ishmael can follow up with 4 Basic Attacks. - Basic Attacks deal 300% Nihil DMG in total. - When there is Forbidden Realm, the follow-up Basic Attacks d..."
              },
              {
                  "name": "Signature: Merciful Confession",
                  "description": "Prime Entity: 30 Signature Energy + Tap Signature Casts Signature and connects to her high-dimensional self, entering the Dominator Form and dealing Nihil DMG. Meanwhile, triggers Time Lag Calculation. If Field Ultralimit is active while casting, refreshes the duration. After casting, triggers Matr..."
              },
              {
                  "name": "QTE: Galactic Blessing",
                  "description": "QTE – Tap QTE Kicks the Keystaff to hit the target, dealing Nihil DMG. After casting, triggers a special ability based on Observation Notes. - Deals 600% Nihil DMG. - Causes different effects based on Observation Notes."
              },
              {
                  "name": "Core Passive: Divine Vision",
                  "description": "Observation Notes Ishmael: Parhelion determines her ability based on Observation Notes. Observation Notes' ability will be enhanced along with the appearance of other Constructs. - When there's only one elemental Tank on team, Ishmael: Parhelion will become the Amplifier of that element. - When the..."
              },
              {
                  "name": "Leader: Leader - Sculpted Might",
                  "description": "Increases Nihil DMG of all members by 10%. Increases DMG of all Observers in the team by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Alpha-Omega",
                  "cub": "Diamaton",
                  "memories": "Imported from Build:Parhelion",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Parhelion"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "Unknown"
              },
              {
                  "label": "Activation",
                  "value": "January 1"
              },
              {
                  "label": "Height",
                  "value": "171cm"
              },
              {
                  "label": "Weight",
                  "value": "65kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "Unknown"
              },
              {
                  "label": "HP",
                  "value": "2107"
              },
              {
                  "label": "ATK",
                  "value": "452"
              },
              {
                  "label": "DEF",
                  "value": "301"
              },
              {
                  "label": "CRIT",
                  "value": "196"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Ishmael%3A_Parhelion"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Ishmael%3A_Parhelion"
      },
      {
          "id": "jetavie-daybreak",
          "name": "Jetavie: Daybreak",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Daybreak-Icon.png",
          "sigil": "JD",
          "role": "Attacker",
          "frame": "Daybreak",
          "faction": "Unidentified",
          "class": "DPS",
          "element": "dark",
          "elements": [
              {
                  "name": "dark",
                  "percent": "100"
              }
          ],
          "rank": "A",
          "gift": "White Box",
          "weapon": "Final Arbiter",
          "weaponType": "Fusion Gunsword",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:Daybreak",
          "bio": "Say goodbye to the warm cradle and confront the painful awakening—she has traversed infinite loops to enter the real world with the full might of the matrix.",
          "effect": "Shadow Slash: Tap Red Orb Hurls the gunsword toward the target, dealing Dark DMG. - Deals 45% / 90% Dark DMG based on the number of orbs pinged. Spin Cleave: At least 1 Cluster Orb + During Shadow Slash + Tap Red Orb Spins around and swings the gunsword at the target, dealing Dark DMG. - For every...",
          "priority": "",
          "notes": "Say goodbye to the warm cradle and confront the painful awakening—she has traversed infinite loops to enter the real world with the full might of the matrix.",
          "specialties": [
              {
                  "name": "Burst - Deals massive DMG in a short time. Ignition - Launches the enemy into the Combustible status and Ignites them.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Vorpal Hellblade",
                  "description": "Shadow Slash: Tap Red Orb Hurls the gunsword toward the target, dealing Dark DMG. - Deals 45% / 90% Dark DMG based on the number of orbs pinged. Spin Cleave: At least 1 Cluster Orb + During Shadow Slash + Tap Red Orb Spins around and swings the gunsword at the target, dealing Dark DMG. - For every..."
              },
              {
                  "name": "Yellow Orb: Orbital Barrage",
                  "description": "Flare Shot: Tap Yellow Orb Leaps backward to spray a barrage of bullets, dealing Dark DMG. - Deals 120% / 240% Dark DMG based on the number of orbs pinged. Sniper's Perch: Press and hold Yellow Orb to charge Leaps backward to enter Charge Stance, then fires a shot upon release, dealing Dark DMG. -..."
              },
              {
                  "name": "Blue Orb: Ferrous Scarring",
                  "description": "Shaded Radiance: Tap Blue Orb Flicks the gunsword upward, firing at the target and dealing Dark DMG. - Deals 45% / 90% Dark DMG based on the number of orbs pinged. Sundered Pith: Press and hold Blue Orb to charge Enters Charge Stance while wielding the gunsword to fire continuously, then steps back..."
              },
              {
                  "name": "Basic Attack: Algorithm Decomposition",
                  "description": "Iteration: Tap Basic Attack Fires at the target while performing combat maneuvers, dealing Dark DMG. - Basic Attack deals a total of 340% Dark DMG. Continuation: Press and hold Basic Attack to charge Enters Charge Stance while wielding the gunsword to fire continuously at the target, dealing Dark D..."
              },
              {
                  "name": "Signature: Absolute Deduction",
                  "description": "Constant Current: 100 Signature Energy + Tap Signature Jetavie enters the Panoptic Segmentation Mode, dealing Dark DMG to nearby targets in a large area and summoning a great sword to assist in the attack. - Constant Current deals 1300% Dark DMG in total. Tectonic Revolt: In Panoptic Segmentation +..."
              },
              {
                  "name": "QTE: Phantom Grid",
                  "description": "QTE – Tap QTE Flicks the gunsword upward, firing at the target and dealing Dark DMG. - Deals 660% Dark DMG in total."
              },
              {
                  "name": "Core Passive: Magic Maiden's Strike",
                  "description": "Cluster Analysis Signal Orbs gained are converted into Cluster Orbs. When not in the Panoptic Segmentation Mode, Jetavie can only cast Yellow or Blue Orb Skills. After she enters Panoptic Segmentation, Red Orb Skills will be available. When entering Charge Stance by pinging Signal Orbs, continuousl..."
              },
              {
                  "name": "Leader: Gray Zone Telemetry",
                  "description": "Increases Dark DMG of all members by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Final Arbiter",
                  "cub": "",
                  "memories": "Imported from Build:Daybreak",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Daybreak"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "NA"
              },
              {
                  "label": "Psychological Age",
                  "value": "Unknown"
              },
              {
                  "label": "Activation",
                  "value": "10 Sep"
              },
              {
                  "label": "Height",
                  "value": "152cm"
              },
              {
                  "label": "Weight",
                  "value": "48kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "Unknown"
              },
              {
                  "label": "HP",
                  "value": "1469"
              },
              {
                  "label": "ATK",
                  "value": "327"
              },
              {
                  "label": "DEF",
                  "value": "216"
              },
              {
                  "label": "CRIT",
                  "value": "136"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Jetavie%3A_Daybreak"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Jetavie%3A_Daybreak"
      },
      {
          "id": "kamui-aeternion",
          "name": "Kamui: Aeternion",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Aeternion-Icon.png",
          "sigil": "KA",
          "role": "Breaker",
          "frame": "Aeternion",
          "faction": "StrikeHawk",
          "class": "DPS",
          "element": "fire",
          "elements": [
              {
                  "name": "fire",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Portable Game Console",
          "weapon": "Solar Flare",
          "weaponType": "Kinetic Greatsword",
          "cub": {
              "name": "Ignis",
              "notes": ""
          },
          "memory": "Imported from Build:Aeternion",
          "bio": "A new frame incorporating the latest breakthrough in Corona Gene research. Its output, response speed, and other combat-related specs have all been enhanced. Kamui's own takeaway, though, is that he seems to have gotten a little better at video games.",
          "effect": "Searing Leap: Wielding Discharge Form Greatsword + Tap Red Orb Swings the greatsword forward and leaps into the air, pinging Red Orbs to deal Fire DMG while gaining Flare Points, Output, and Thermo Points. Becomes Invincible when casting. When hitting enemies, applies Sunburn Mark that explodes aft...",
          "priority": "",
          "notes": "A new frame incorporating the latest breakthrough in Corona Gene research. Its output, response speed, and other combat-related specs have all been enhanced. Kamui's own takeaway, though, is that he seems to have gotten a little better at...",
          "specialties": [
              {
                  "name": "resistance Reduction — Able to reduce the Fire and Plasma Beam resistance of enemies. Plasma beam — Skills can trigger the Plasma Beam effect.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Solar Rend",
                  "description": "Searing Leap: Wielding Discharge Form Greatsword + Tap Red Orb Swings the greatsword forward and leaps into the air, pinging Red Orbs to deal Fire DMG while gaining Flare Points, Output, and Thermo Points. Becomes Invincible when casting. When hitting enemies, applies Sunburn Mark that explodes aft..."
              },
              {
                  "name": "Yellow Orb: Energy Drive",
                  "description": "Flare Burst: Wielding Charge Form Greatsword + Tap Yellow Orb Steps back, then drives the greatsword forward, switching it from Charge Form to Discharge Form. Can dodge attacks while stepping back. Gains Super Armor when casting. All Blue Orbs convert to Red Orbs. - Deals 600% Fire DMG. - If 60 Out..."
              },
              {
                  "name": "Blue Orb: Heartfall",
                  "description": "Solar Overflow: Wielding Charge Form Greatsword + Tap Blue Orb Slashes upward, pinging Blue Orbs to deal Fire DMG while gaining Output. Gains Super Armor when casting. - Deals 200% / 400% / 600% Fire DMG and gains 10 / 20 / 30 Output based on the number of orbs pinged. Solar Cinders: Wielding Charg..."
              },
              {
                  "name": "Basic Attack: Retemper",
                  "description": "Converged Charge: Wielding Charge Form Greatsword + Tap Basic Attack When the weapon is in Charge Form, Basic Attacks deal a total of 700% Fire DMG. Spreading Discharge: Wielding Discharge Form Greatsword + Tap Basic Attack When the weapon is in Discharge Form, Basic Attacks deal a total of 900 Fir..."
              },
              {
                  "name": "Signature: Molten Heart",
                  "description": "Molten Heart: 200 Signature Energy + Tap Signature Aeternion unleashes hidden energy from the Golden Sun's core, then channels it into his greatsword to deliver a devastating strike, dealing Fire DMG. Triggers Time Lag Calculation when casting. If Field Ultralimit is active when casting, refreshes..."
              },
              {
                  "name": "QTE: Blazing Surge",
                  "description": "QTE: Tap QTE Deals damage and weakens enemies. - Initially deals 600% Fire DMG and applies a Scorching Invasion effect that reduces Fire Resistance by 25% for 8s. Then deals 50% Fire DMG per second for the next 8s. - When the team has the Plasma Beam effect, initially deals 600% Plasma Beam DMG and..."
              },
              {
                  "name": "Core Passive: Golden Sun",
                  "description": "Output Discharge Aeternion enters the battlefield wielding a Charge Form greatsword. When the weapon is in Charge Form, Aeternion can only use Blue or Yellow Orbs, and basic attacks can only generate Blue Orbs. When the weapon switches to Discharge Form, he can only use Red or Yellow Orbs, and basi..."
              },
              {
                  "name": "Leader: Solar Wind",
                  "description": "Increases Fire DMG and Plasma Beam DMG of all members by 10%. Increases DMG of all Breaker Omniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Solar Flare",
                  "cub": "Ignis",
                  "memories": "Imported from Build:Aeternion",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Aeternion"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "0"
              },
              {
                  "label": "Psychological Age",
                  "value": "19"
              },
              {
                  "label": "Activation",
                  "value": "23 Oct"
              },
              {
                  "label": "Height",
                  "value": "180cm"
              },
              {
                  "label": "Weight",
                  "value": "72kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "B"
              },
              {
                  "label": "HP",
                  "value": "2050"
              },
              {
                  "label": "ATK",
                  "value": "413"
              },
              {
                  "label": "DEF",
                  "value": "287"
              },
              {
                  "label": "CRIT",
                  "value": "182"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Kamui%3A_Aeternion"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Kamui%3A_Aeternion"
      },
      {
          "id": "kamui-bastion",
          "name": "Kamui: Bastion",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Bastion-Icon.png",
          "sigil": "KB",
          "role": "Tank",
          "frame": "Bastion",
          "faction": "StrikeHawk",
          "class": "Tank",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "A",
          "gift": "Portable Game Console",
          "weapon": "Big Kamui",
          "weaponType": "Greatsword",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "Member of Strike Hawk, an outstanding solo operator. He is friendly and helpful, but his carelessness always gets him into trouble.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Slashes the target and deals Physical DMG. Unleashes an extra slash upon a 3-Ping. - Deals 200% / 400% / 400% Physical DMG based on the number of orbs pinged. - Deals additional 400% Physical DMG upon a 3-Ping.",
          "priority": "",
          "notes": "Member of Strike Hawk, an outstanding solo operator. He is friendly and helpful, but his carelessness always gets him into trouble.",
          "specialties": [
              {
                  "name": "Block - Blocking Skill Shield - Release a shield to defend.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Great Slash — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Slashes the target and deals Physical DMG. Unleashes an extra slash upon a 3-Ping. - Deals 200% / 400% / 400% Physical DMG based on the number of orbs pinged. - Deals additional 400% Physical DMG upon a 3-Ping."
              },
              {
                  "name": "Yellow Orb: Counterattack",
                  "description": "Yellow Orb — Ping Yellow Orb Enters a block stance and increases Extra DMG Reduction. - The block stance lasts 2s, during which Extra DMG Reduction increases by 75%. Yellow Orb — Attacked while blocking After successfully blocking damage, Kamui: Bastion unleashes a wide-area counterattack, dealing..."
              },
              {
                  "name": "Blue Orb: Assault Mode — Ping Blue Orb",
                  "description": "Releases energy to gain Shield. Stuns targets when Kamui: Bastion's greatsword hits the ground, dealing Physical DMG. - Gains Shield equal to 50% / 100% / 150% of Kamui: Bastion's DEF based on the number of orbs pinged. - Stuns the target for 1 / 1.5 / 2s and deals 100% / 200% / 300% Physical DMG b..."
              },
              {
                  "name": "Basic Attack: Swing — Tap Basic Attack",
                  "description": "Swings his greatsword and launches multiple attacks at enemies, dealing Physical DMG. - Deals 790% Physical DMG in total."
              },
              {
                  "name": "Signature: Signature - Obliterating Press",
                  "description": "Signature Move — 100 Energy + Tap Signature Charges up and quickly swings his greatsword at enemies in front, dealing Physical DMG. - Deals 2000% Physical DMG in total."
              },
              {
                  "name": "QTE: Obliterating Wind",
                  "description": "Kamui: Bastion slashes the target with his greatsword, dealing Physical DMG, stunning the target, and reducing the target's DEF. - Deals 500% Physical DMG in total. - Stuns the target for 3s. Reduces the target's DEF by 10% for 6s."
              },
              {
                  "name": "Core Passive: Offence-Defense Rhythm",
                  "description": "Core Passive — Any 3-Ping Gains Charge Points after any 3-Ping. When there are Charge Points, Kamui: Bastion's ATK increases. Charge Points decrease over time. - Gains 40 Charge Points after a 3-Ping, up to 120 points. - When there are more than 0 / 40 / 80 Charge Points, Kamui: Bastion's ATK incre..."
              },
              {
                  "name": "Leader: Leader - Unshakeable Formation",
                  "description": "When the HP of all members is greater than 70%, their Physical DMG increases by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Big Kamui",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Bastion."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "3"
              },
              {
                  "label": "Psychological Age",
                  "value": "19"
              },
              {
                  "label": "Activation",
                  "value": "23 Oct"
              },
              {
                  "label": "Height",
                  "value": "180cm"
              },
              {
                  "label": "Weight",
                  "value": "72kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "B"
              },
              {
                  "label": "HP",
                  "value": "1666"
              },
              {
                  "label": "ATK",
                  "value": "272"
              },
              {
                  "label": "DEF",
                  "value": "245"
              },
              {
                  "label": "CRIT",
                  "value": "139"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Kamui%3A_Bastion"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Kamui%3A_Bastion"
      },
      {
          "id": "kamui-tenebrion",
          "name": "Kamui: Tenebrion",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Tenebrion-Icon.png",
          "sigil": "KT",
          "role": "Tank",
          "frame": "Tenebrion",
          "faction": "StrikeHawk",
          "class": "Tank",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "50"
              },
              {
                  "name": "dark",
                  "percent": "50"
              }
          ],
          "rank": "S",
          "gift": "Portable Game Console",
          "weapon": "Darkness",
          "weaponType": "Greatsword",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "The result of Kamui’s control over the Tenebrion that he was imbued with. This frame is able to switch freely between two battle forms.",
          "effect": "Red Orb — Ping Red Orb Automatically uses a 3-Ping version of this attack upon switch-in. Unleashes a cross slash at the target, dealing Physical DMG and Extra Dark DMG. - Deals 200% / 400% / 600% Physical DMG and 40% / 80% / 160% Extra Dark DMG based on the number of orbs pinged. Red Orb — Dark Fo...",
          "priority": "",
          "notes": "The result of Kamui’s control over the Tenebrion that he was imbued with. This frame is able to switch freely between two battle forms.",
          "specialties": [
              {
                  "name": "Mixed Damage - Able to deal Physical and Elemental DMG. Form Switch - Signature Move can switch attacking forms.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Countering Swordplay",
                  "description": "Red Orb — Ping Red Orb Automatically uses a 3-Ping version of this attack upon switch-in. Unleashes a cross slash at the target, dealing Physical DMG and Extra Dark DMG. - Deals 200% / 400% / 600% Physical DMG and 40% / 80% / 160% Extra Dark DMG based on the number of orbs pinged. Red Orb — Dark Fo..."
              },
              {
                  "name": "Yellow Orb: Assaulting Charge",
                  "description": "Yellow Orb — Ping Yellow Orb Charges at the target dealing Physical DMG and Extra Dark DMG. When charging, reduces all damage taken from frontal attacks and becomes immune to control effects. - Deals 200% / 400% / 600% Physical DMG and 40% / 80% / 120% Extra Dark DMG based on the number of orbs pin..."
              },
              {
                  "name": "Blue Orb: Sundering Blade",
                  "description": "Blue Orb — Ping Blue Orb Spins and slashes the target airborne, dealing Physical DMG and Extra Dark DMG. Pulls the target while spinning. - Deals 140% / 280% / 420% Physical DMG and 40% / 80% / 120% Extra Dark DMG based on the number of orbs pinged. Blue Orb — Dark Form + Ping Blue Orb In Dark Form..."
              },
              {
                  "name": "Basic Attack: Rapid Greatsword",
                  "description": "Basic Attack — Tap Basic Attack Launches consecutive attacks with a greatsword, dealing Physical DMG. - Deals 560% Physical DMG in total. Basic Attack — Dark Form + Tap Basic Attack In Dark Form, launches consecutive attacks with Dark Blade, dealing Dark DMG. - Deals 900% Dark DMG in total."
              },
              {
                  "name": "Signature: Signature - Twin Cores",
                  "description": "Signature Move — At Least 60 Energy + Tap Signature Enters Dark Form to transform all skill forms and gain Super Armor. Dark Form consumes Energy every second and ends when all Energy is consumed. - Dark Form consumes 8 Energy every second. Signature Move — Dark Form + At Least 60 Energy + Tap Sign..."
              },
              {
                  "name": "QTE: Chain Spin",
                  "description": "Spins and cuts the targets as he enters the battlefield, dealing Dark DMG and inflicting them with Chain Fusion, reducing their Dark Resistance. - Deals 580% Dark DMG in total. - Chain Fusion reduces the target's Dark Resistance by 10% for 6s."
              },
              {
                  "name": "Core Passive: Fighting Will",
                  "description": "Core Passive — Any 3-Ping Gains an extra 10 Energy upon a 3-Ping. Core Passive — Dark Form + Passive In Dark Form, Physical Resistance and Dark Resistance increase by 30%."
              },
              {
                  "name": "Leader: Leader - Alternation Harmony",
                  "description": "Increases Elemental DMG by 10% and Physical DMG by 5% when there are 3 different classes in the team."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Darkness",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Tenebrion."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "3"
              },
              {
                  "label": "Psychological Age",
                  "value": "19"
              },
              {
                  "label": "Activation",
                  "value": "23 Oct"
              },
              {
                  "label": "Height",
                  "value": "180cm"
              },
              {
                  "label": "Weight",
                  "value": "72kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "B"
              },
              {
                  "label": "HP",
                  "value": "2299"
              },
              {
                  "label": "ATK",
                  "value": "344"
              },
              {
                  "label": "DEF",
                  "value": "316"
              },
              {
                  "label": "CRIT",
                  "value": "172"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Kamui%3A_Tenebrion"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Kamui%3A_Tenebrion"
      },
      {
          "id": "karenina-blast",
          "name": "Karenina: Blast",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Blast-Icon.png",
          "sigil": "KB",
          "role": "Attacker",
          "frame": "Blast",
          "faction": "EngineeringForce",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "80"
              },
              {
                  "name": "fire",
                  "percent": "20"
              }
          ],
          "rank": "A",
          "gift": "Prototype Engine",
          "weapon": "Berserk Fusion",
          "weaponType": "Cannon",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "Trained at the Cosmos Technicians Union and a member of the Engineering Force, the fiery Karenina solves problems by blowing them up. The Purifying Force finds this useful.",
          "effect": "Fires 6 projectiles forward, dealing Physical DMG. - Deals 40% / 80% / 120% Physical DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "Trained at the Cosmos Technicians Union and a member of the Engineering Force, the fiery Karenina solves problems by blowing them up. The Purifying Force finds this useful.",
          "specialties": [
              {
                  "name": "Mixed Damage - Able to deal Physical and Elemental DMG. Form Switch - Signature Move can switch attacking forms.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Scattering Projectiles — Ping Red Orb",
                  "description": "Fires 6 projectiles forward, dealing Physical DMG. - Deals 40% / 80% / 120% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Detonative Projectile — Ping Yellow Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in fulfills 1/3 of this character's Core Passive. Quickly fires a projectile at the target that deals Physical DMG and puts a mark on the target. Marked targets have a chance to explode and take Fire DMG when hit by Karenina:..."
              },
              {
                  "name": "Blue Orb: Spinning Projectile — Ping Blue Orb",
                  "description": "Fires a special projectile at the ground that continues to pull enemies in. The projectile deals Physical DMG upon hitting the enemy, then deals Physical DMG over time to the enemies in the area. - Deals 100% / 200% / 300% Physical DMG based on the number of orbs pinged. - Deals 50% Physical DMG to..."
              },
              {
                  "name": "Basic Attack: Artillery Technique — Tap Basic Attack",
                  "description": "Launches consecutive attacks with a cannon, dealing Physical DMG. - Deals 600% Physical DMG in total."
              },
              {
                  "name": "Signature: Signature - Shattering Growl",
                  "description": "Signature Move — 100 Energy + Tap Signature Continuously bombards the target area, dealing Physical DMG. - Each projectile deals 100% Physical DMG."
              },
              {
                  "name": "QTE: Annihilation Projectile",
                  "description": "Karenina: Blast enters the battlefield and fires a Spinning Projectile, dealing Physical DMG to the target. - Deals up to 500% Physical DMG."
              },
              {
                  "name": "Core Passive: Artillery Tactics",
                  "description": "Core Passive — Three 3-Pings + Tap Basic Attack Karenina: Blast enters Burst Form after three 3-Pings or casting a Signature Move, replacing her Basic Attacks with ranged artillery attacks. - Burst Form lasts 3s. Each projectile deals 80% Physical DMG."
              },
              {
                  "name": "Leader: Leader - Solitary",
                  "description": "Increase ATK of all members by 10% when there are 3 different classes in the team."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Berserk Fusion",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Blast."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "4"
              },
              {
                  "label": "Psychological Age",
                  "value": "16"
              },
              {
                  "label": "Activation",
                  "value": "2 Mar"
              },
              {
                  "label": "Height",
                  "value": "163cm"
              },
              {
                  "label": "Weight",
                  "value": "42kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "B"
              },
              {
                  "label": "HP",
                  "value": "1515"
              },
              {
                  "label": "ATK",
                  "value": "318"
              },
              {
                  "label": "DEF",
                  "value": "216"
              },
              {
                  "label": "CRIT",
                  "value": "151"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Karenina%3A_Blast"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Karenina%3A_Blast"
      },
      {
          "id": "karenina-ember",
          "name": "Karenina: Ember",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Ember-Icon.png",
          "sigil": "KE",
          "role": "Attacker",
          "frame": "Ember",
          "faction": "EngineeringForce",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "30"
              },
              {
                  "name": "fire",
                  "percent": "70"
              }
          ],
          "rank": "S",
          "gift": "Prototype Engine",
          "weapon": "Fusion Dragon",
          "weaponType": "Cannon",
          "cub": {
              "name": "Nitor",
              "notes": ""
          },
          "memory": "",
          "bio": "Taking off her jacket and releasing the weapon restriction, Karenina is able to unleash the full force of her flaming wrath to burn away everything in her way.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in triggers this character's Core Passive. Red Orb — Ping Red Orb Swings the cannon twice to attack the targets ahead, dealing Physical DMG. Gains Super Armor while using this skill. - Deals 100% / 200% / 300% Physical DMG ba...",
          "priority": "",
          "notes": "Taking off her jacket and releasing the weapon restriction, Karenina is able to unleash the full force of her flaming wrath to burn away everything in her way.",
          "specialties": [
              {
                  "name": "Melee - Has strong area attack ability. Mixed Damage - Able to deal Physical and Elemental DMG.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Lightblade Strike",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in triggers this character's Core Passive. Red Orb — Ping Red Orb Swings the cannon twice to attack the targets ahead, dealing Physical DMG. Gains Super Armor while using this skill. - Deals 100% / 200% / 300% Physical DMG ba..."
              },
              {
                  "name": "Yellow Orb: Covering Barrage",
                  "description": "Yellow Orb — Ping Yellow Orb Leaps forward and slams the target with her cannon. Takes reduced damage from all attacks while casting this skill and deals Physical DMG to nearby targets. - Deals 180% / 360% / 540% Physical DMG based on the number of orbs pinged. - Takes 30% less damage from all atta..."
              },
              {
                  "name": "Blue Orb: Wingman Support",
                  "description": "Blue Orb — Ping Blue Orb Summons flying laser drones and deals Physical DMG instantly. Drones deal Physical DMG with every attack. If multiple drones are present, the one with the highest level take priority. - Based on the number of orbs pinged, the drones deal 6% / 12% / 18% Physical DMG instantl..."
              },
              {
                  "name": "Basic Attack: Pressure Unleashed",
                  "description": "Basic Attack — Tap Basic Attack Launches consecutive attacks at the target, dealing Physical DMG. - Deals 720% Physical DMG in total. Basic Attack — Enhanced Form + Tap Basic Attack Launches consecutive attacks at the target, dealing Fire DMG. - Deals 720% Fire DMG in total."
              },
              {
                  "name": "Signature: Signature - Scar of Earth",
                  "description": "Signature Move: Costs 100 Energy. Shoots a laser at the ground by 200% Fire DMG and leaves a path of fire for 5 seconds in the end. All enemies in the path take 200% Fire DMG per second."
              },
              {
                  "name": "QTE: Gravity Fall",
                  "description": "QTE: Karenina deals 720% Fire DMG at the target."
              },
              {
                  "name": "Core Passive: Thermal Armament",
                  "description": "Core Passive — Any 3-Ping / Cast Signature Gains Thermal Energy upon entering battle. Thermal Energy can be gained via 3-Pings and Signature move. - Increases Thermal Energy gained when entering battle by 3% per skill level. Core Passive — Thermal Energy reaches 50% Enters Enhanced Form once Therma..."
              },
              {
                  "name": "Leader: Leader - Complete Destruction",
                  "description": "Increases ATK by 10% when there are 3 different classes in the team. Increases ATK of all Attacker Omniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Fusion Dragon",
                  "cub": "Nitor",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Ember."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "4"
              },
              {
                  "label": "Psychological Age",
                  "value": "16"
              },
              {
                  "label": "Activation",
                  "value": "2 Mar"
              },
              {
                  "label": "Height",
                  "value": "163cm"
              },
              {
                  "label": "Weight",
                  "value": "42kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "B"
              },
              {
                  "label": "HP",
                  "value": "1820"
              },
              {
                  "label": "ATK",
                  "value": "403"
              },
              {
                  "label": "DEF",
                  "value": "287"
              },
              {
                  "label": "CRIT",
                  "value": "191"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Karenina%3A_Ember"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Karenina%3A_Ember"
      },
      {
          "id": "karenina-scire",
          "name": "Karenina: Scire",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-RadiantDaybreak-Icon.png",
          "sigil": "KS",
          "role": "Tank",
          "frame": "Scire",
          "faction": "EngineeringForce",
          "class": "Tank",
          "element": "dark",
          "elements": [
              {
                  "name": "dark",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Prototype Engine",
          "weapon": "Illuminare",
          "weaponType": "Blast Hammer",
          "cub": {
              "name": "Moonhopper",
              "notes": ""
          },
          "memory": "Imported from Build:Radiant_Daybreak",
          "bio": "A frame for Karenina designed to adapt to the low gravity environment on the moon’s surface. Its core power system is equipped with the latest small-scale gravity control unit and can even perform short-term aerial maneuvers.",
          "effect": "Karenina: Scire wields the Blast Hammer to release Anti-gravity Energy and push herself forward, dealing Dark DMG to the enemies before her. - Deals 190% / 380% / 570% Dark DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "A frame for Karenina designed to adapt to the low gravity environment on the moon’s surface. Its core power system is equipped with the latest small-scale gravity control unit and can even perform short-term aerial maneuvers.",
          "specialties": [
              {
                  "name": "Resistance Reduction — Able to reduce Elemental Resistance of enemies. Burst — Can deal large amounts of damage quickly.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Comet Propulsion — Ping Red Orb",
                  "description": "Karenina: Scire wields the Blast Hammer to release Anti-gravity Energy and push herself forward, dealing Dark DMG to the enemies before her. - Deals 190% / 380% / 570% Dark DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Gravity Beacon",
                  "description": "Yellow Orb — Ping Yellow Orb Automatically uses a 3-Ping version of this attack upon switch-in. Karenina: Scire jumps up into the air for the Blast Hammer to transform into a cannon to fire a gravity shot against the ground to temporarily pull enemies around her and slow them down, dealing Dark DMG..."
              },
              {
                  "name": "Blue Orb: Meteor Track",
                  "description": "Blue Orb — Ping Blue Orb Karenina: Scire transforms the Blash Hammer into a cannon and fires a gravity shot forward to pull the enemies on the path, dealing Dark DMG. - Deals 220% / 440% / 660% Dark DMG based on the number of orbs pinged. Blue Orb — While casting Blue Orb skills + Ping Yellow/Blue..."
              },
              {
                  "name": "Basic Attack: Meteor Hammer — Tap Basic Attack",
                  "description": "Deals 500% Dark DMG in total."
              },
              {
                  "name": "Signature: Starshatter Horizon",
                  "description": "Signature Move — 160 Energy + Tap Signature Karenina: Scire leaps toward the ground and hits the enemy with the Blast Hammer, triggering Time Lag Calculation meanwhile. Starshatter Horizon deals Dark DMG. If Karenina: Scire is in the Anti-gravity status when this is cast, she will exit the status r..."
              },
              {
                  "name": "QTE: Dawn Fall",
                  "description": "Karenina: Scire hammers the ground, dealing Dark DMG to enemies within the area and inflicting the Chain Fusion effect on them to reduce their Dark Resistance. - Deals 600% Dark DMG. - Chain Fusion reduces the target's Dark Resistance by 15% for 12s."
              },
              {
                  "name": "Core Passive: Space Walk",
                  "description": "Leap Attack — 3-Ping available + Press and hold Basic Attack When Karenina: Scire has at least a set of 3-Ping Orbs among up to 8 Signal Orbs, holding the Basic Attack button will start charging and consume 3-Ping Orbs (up to 2 sets can be consumed), each set granting Anti-gravity Energy. While cha..."
              },
              {
                  "name": "Leader: Leader - Visionary",
                  "description": "Increases Dark DMG of all members by 10%. Increases DMG of all Tank Omniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Illuminare",
                  "cub": "Moonhopper",
                  "memories": "Imported from Build:Radiant_Daybreak",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Radiant_Daybreak"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "4"
              },
              {
                  "label": "Psychological Age",
                  "value": "16"
              },
              {
                  "label": "Activation",
                  "value": "2 Mar"
              },
              {
                  "label": "Height",
                  "value": "163cm"
              },
              {
                  "label": "Weight",
                  "value": "42kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "B"
              },
              {
                  "label": "HP",
                  "value": "2088"
              },
              {
                  "label": "ATK",
                  "value": "387"
              },
              {
                  "label": "DEF",
                  "value": "301"
              },
              {
                  "label": "CRIT",
                  "value": "192"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Karenina%3A_Scire"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Karenina%3A_Scire"
      },
      {
          "id": "lamia-lost-lullaby",
          "name": "Lamia: Lost Lullaby",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-AlisaEcho-Icon.png",
          "sigil": "LL",
          "role": "Attacker",
          "frame": "Lost Lullaby",
          "faction": "Ascendant",
          "class": "DPS",
          "element": "dark",
          "elements": [
              {
                  "name": "dark",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Coffee Mug",
          "weapon": "Metis",
          "weaponType": "Halberd Blade",
          "cub": {
              "name": "Cetus",
              "notes": ""
          },
          "memory": "Imported from Build: Lost Lullaby",
          "bio": "Lamia's new frame designed by Luna with the Ascendant abilities. Enhanced based on Lamia's old frame, it is capable of switching freely between the human form and the mermaid form. Although Lamia whispered that she wanted a 170cm height, her human form height was only designed to be 169cm.",
          "effect": "Red Orb — Dark Tide Form + Ping Red Orb Uses Halberd Blade to direct multiple undercurrents to strike enemies ahead, dealing Dark DMG while gaining Fathomless Points and a small number of Abyssal Points. Enters Tidal Form after pinging 3 Signal Orbs. - Deals 240% / 480% / 720% Dark DMG in total bas...",
          "priority": "",
          "notes": "Lamia's new frame designed by Luna with the Ascendant abilities. Enhanced based on Lamia's old frame, it is capable of switching freely between the human form and the mermaid form. Although Lamia whispered that she wanted a 170cm height, h...",
          "specialties": [
              {
                  "name": "Burst - Deals massive DMG in a short time. Form Switch - Can switch Attack Modes for Signature Move.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Hadal Vortex",
                  "description": "Red Orb — Dark Tide Form + Ping Red Orb Uses Halberd Blade to direct multiple undercurrents to strike enemies ahead, dealing Dark DMG while gaining Fathomless Points and a small number of Abyssal Points. Enters Tidal Form after pinging 3 Signal Orbs. - Deals 240% / 480% / 720% Dark DMG in total bas..."
              },
              {
                  "name": "Yellow Orb: Crushing Spout",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Yellow Orb — Primary Form + Ping Yellow Orb Upon a 1-Ping or 2-Ping, glides along waves to deal Dark DMG to enemies ahead. Upon a 3-Ping, rides up a tide to leap into the air, then glides downward to launch a large-area slash, deali..."
              },
              {
                  "name": "Blue Orb: Pelagic Severance",
                  "description": "Rip Current — Primary Form + Ping Blue Orb Unleashes multiple strikes toward target location, dealing Dark DMG while gaining Fathomless Points and a small number of Abyssal Points. - Deals 150% / 300% / 450% Dark DMG in total based on the number of orbs pinged. - Gains 10 / 20 / 30 Fathomless Point..."
              },
              {
                  "name": "Basic Attack: Stygian Waves",
                  "description": "Basic Attack - Primary Form + Tap Basic Attack Launches melee attacks and ranged water elemental attacks with Halberd Blade, dealing Dark DMG to the target. When the weather is Downpour or Storm, additional attacks are launched at certain hits of Basic Attack. - Deals 540% Dark DMG in total. - In D..."
              },
              {
                  "name": "Signature: Elegy of Atlantis",
                  "description": "Raging Prelude — Primary Form + 70 Energy + Tap Signature Lamia summons nearby water to engulf the surroundings and plunge the battlefield into a nameless ocean, dealing Dark DMG to the target. She then enters Dark Tide Form and gains Signal Orbs based on the weather. Time Lag Calculation is trigge..."
              },
              {
                  "name": "QTE: Tidal Phantom",
                  "description": "Swings Halberd Blade at the target, dealing Dark DMG. - Deals 600% Dark DMG in total."
              },
              {
                  "name": "Core Passive: Seafoam Mirage",
                  "description": "Antinomy When Lamia is in Primary Form, she can only cast Yellow or Blue Orb skills, and her Basic Attacks only generate Yellow or Blue Orbs. When she is in Dark Tide Form, she can only cast Red or Blue Orb skills, and her Basic Attacks only generate Red or Blue Orbs. Yellow Orbs will be randomly c..."
              },
              {
                  "name": "Leader: Cornflower’s Shadow",
                  "description": "Increases Dark DMG of all members by 10%. Increases ATK of all Attackers by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Metis",
                  "cub": "Cetus",
                  "memories": "Imported from Build: Lost Lullaby",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build: Lost Lullaby"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "15"
              },
              {
                  "label": "Activation",
                  "value": "21 Feb"
              },
              {
                  "label": "Height",
                  "value": "169cm"
              },
              {
                  "label": "Weight",
                  "value": "49kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "A"
              },
              {
                  "label": "HP",
                  "value": "1915"
              },
              {
                  "label": "ATK",
                  "value": "437"
              },
              {
                  "label": "DEF",
                  "value": "287"
              },
              {
                  "label": "CRIT",
                  "value": "183"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Lamia%3A_Lost_Lullaby"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Lamia%3A_Lost_Lullaby"
      },
      {
          "id": "lee-entropy",
          "name": "Lee: Entropy",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Entropy-Icon.png",
          "sigil": "LE",
          "role": "Attacker",
          "frame": "Entropy",
          "faction": "GrayRavenIII",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Precision Toolkit",
          "weapon": "Zero Scale",
          "weaponType": "Dual Guns",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "The limits have been broken. Past and present intertwine. Lee dominates the battlefield with superior computing power.",
          "effect": "Leaps into the air and shoots continuously forward in a small area, dealing Physical DMG. - Deals 22.5% / 45% / 70% Physical DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "The limits have been broken. Past and present intertwine. Lee dominates the battlefield with superior computing power.",
          "specialties": [
              {
                  "name": "Combo - Easy to deal high combo damage. Physical Damage - Skill combinations are powerful.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Continuous Fire — Ping Red Orb",
                  "description": "Leaps into the air and shoots continuously forward in a small area, dealing Physical DMG. - Deals 22.5% / 45% / 70% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Backstep Firing — Ping Yellow Orb",
                  "description": "Steps on the enemy ahead and shoots at the target, dealing Physical DMG and marking the target. Attacking a marked target willl fires an additional shot, dealing Physical DMG. When marking an already marked target, the mark with the higher number of pings will replace the lower one. - Deals 180% /..."
              },
              {
                  "name": "Blue Orb: Induction — Ping Blue Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Fires an energy projectile forward, dealing Physical DMG. An energy ring will be generated after the projectile hits a target of reaches a certain distance. When the energy ring is deployed, it slightly pulls the enemy towards the c..."
              },
              {
                  "name": "Basic Attack: Burst Mode — Tap Basic Attack",
                  "description": "Fires consecutively at the target, dealing Physical DMG. - Deals 825% Physical DMG in total."
              },
              {
                  "name": "Signature: Signature - Orbital Strike",
                  "description": "Signature Move — 100 Energy + Tap Signature Calls in fire support from long-range energy cannons, dealing Physical DMG. - Every shot deals 400% Physical DMG."
              },
              {
                  "name": "QTE: Blindspot Ambush",
                  "description": "Lee shoots in mid-air, dealing Physical DMG to the target. - Deals 675% Physical DMG in total."
              },
              {
                  "name": "Core Passive: Space Lord",
                  "description": "Core Passive — Any 3-Ping + Ping Red Orb After any 3-Ping, pinging the next Red Orb will fire consecutive shots that strike the target, dealing Physical DMG. - Every shot deals 55% Physical DMG."
              },
              {
                  "name": "Leader: Captain - Tactical Operation",
                  "description": "Physical DMG and Movement Speed of all party members are increased by 15% and 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Zero Scale",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Entropy."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "2"
              },
              {
                  "label": "Psychological Age",
                  "value": "18"
              },
              {
                  "label": "Activation",
                  "value": "23 Jul"
              },
              {
                  "label": "Height",
                  "value": "175cm"
              },
              {
                  "label": "Weight",
                  "value": "63kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "AB"
              },
              {
                  "label": "HP",
                  "value": "1915"
              },
              {
                  "label": "ATK",
                  "value": "422"
              },
              {
                  "label": "DEF",
                  "value": "244"
              },
              {
                  "label": "CRIT",
                  "value": "201"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Lee%3A_Entropy"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Lee%3A_Entropy"
      },
      {
          "id": "lee-hyperreal",
          "name": "Lee: Hyperreal",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Hyperreal-Icon.png",
          "sigil": "LH",
          "role": "Attacker",
          "frame": "Hyperreal",
          "faction": "GrayRavenIII",
          "class": "DPS",
          "element": "fire",
          "elements": [
              {
                  "name": "fire",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Precision Toolkit",
          "weapon": "Key of Tempus Gate - Stokes",
          "weaponType": "Composite Armaments",
          "cub": {
              "name": "Punchy",
              "notes": ""
          },
          "memory": "",
          "bio": "The latest specialized frame based on the information stored in the Hetero Fragment and research on the Inver-Device. It has the ability to decipher the language of Punishing to a certain extent.",
          "effect": "Performs a sliding shot that will pull enemies nearby. It will be followed by an additional back-step spray attack upon a 3-Ping. This slide has the same effect as dodging. — Deals a total of 140% / 280% / 420% Fire DMG based on the number of orbs pinged. — The back-step spray attack additionally d...",
          "priority": "",
          "notes": "The latest specialized frame based on the information stored in the Hetero Fragment and research on the Inver-Device. It has the ability to decipher the language of Punishing to a certain extent.",
          "specialties": [
              {
                  "name": "Combo — Use three-pings in quick succession to deal high damage. Burst — Can deal large amounts of damage quickly.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Bullet Raid — Ping Red Orb",
                  "description": "Performs a sliding shot that will pull enemies nearby. It will be followed by an additional back-step spray attack upon a 3-Ping. This slide has the same effect as dodging. — Deals a total of 140% / 280% / 420% Fire DMG based on the number of orbs pinged. — The back-step spray attack additionally d..."
              },
              {
                  "name": "Yellow Orb: Glimpse Maneuver — Ping Yellow Orb",
                  "description": "Glides to the enemy's back while unleashing a rain of shots. An additional turnaround kick will be triggered upon a 3-Ping. This glide has the same effect as dodging. — Deals a total of 140% / 280% / 420% Fire DMG based on the number of orbs pinged. — The turnaround kick additionally deals 90% Fire..."
              },
              {
                  "name": "Blue Orb: Falling Blast — Ping Blue Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Throws the firearm case at the enemy and unleashes a blast after catching it mid-air, dealing fire DMG. — Deals 170% / 340% / 510% Fire DMG based on the number of orbs pinged. — When Hypermatrix cooldown is over, holding the Basic A..."
              },
              {
                  "name": "Basic Attack: Armament Barrage",
                  "description": "Basic Attack — Tap Basic Attack Launches a 5-hit attack with the submachine gun and firearm case. — Deals a total of 250% Fire DMG. Retribution — Hypermatrix + Tap Basic Attack While in Hypermatrix, tap Basic Attack will trigger sniping attacks that deal Fire DMG,pull enemies, and return the Red an..."
              },
              {
                  "name": "Signature: Hyper Burst",
                  "description": "End of Time — Outside Hypermatrix + 90 Energy + Tap Signature Transforms the Composite Armaments into an ultra-area ion cannon dealing AOE Fire DMG to the target. Time Lag Calculation will be triggered when performing this Signature Move. — Deals 4400% Fire DMG. Collapsing Realm — In Hypermatrix +..."
              },
              {
                  "name": "QTE: Stealth Annihilation",
                  "description": "Fires a sniping shot, dealing 420% Fire DMG."
              },
              {
                  "name": "Core Passive: Dimension Observer",
                  "description": "Fate Records All 3-Ping Orbs pinged outside Hypermatrix will be recorded and returned by performing Basic Attack - Retribution inside Hypermatrix. Realm Travel — Full core gauge + Press and Hold Basic Attack When Hypermatrix cooldown is over, press and hold Basic Attack to attack the enemy in front..."
              },
              {
                  "name": "Leader: Azure Flames",
                  "description": "Increases Fire DMG of all members by 10%. Increases ATK of all Attacker Omniframes in the team by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Key of Tempus Gate - Stokes",
                  "cub": "Punchy",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Hyperreal."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "2"
              },
              {
                  "label": "Psychological Age",
                  "value": "18"
              },
              {
                  "label": "Activation",
                  "value": "23 Jul"
              },
              {
                  "label": "Height",
                  "value": "175cm"
              },
              {
                  "label": "Weight",
                  "value": "63kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "AB"
              },
              {
                  "label": "HP",
                  "value": "1937"
              },
              {
                  "label": "ATK",
                  "value": "422"
              },
              {
                  "label": "DEF",
                  "value": "290"
              },
              {
                  "label": "CRIT",
                  "value": "187"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Lee%3A_Hyperreal"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Lee%3A_Hyperreal"
      },
      {
          "id": "lee-palefire",
          "name": "Lee: Palefire",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Palefire-Icon.png",
          "sigil": "LP",
          "role": "Attacker",
          "frame": "Palefire",
          "faction": "GrayRavenI",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "60"
              },
              {
                  "name": "fire",
                  "percent": "40"
              }
          ],
          "rank": "A",
          "gift": "Precision Toolkit",
          "weapon": "Wolf Fang",
          "weaponType": "Dual Guns",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "Member of Gray Raven. Somewhat aloof in manner. Good at computers and machines, he is responsible for Gray Raven’s hardware and technical issues.",
          "effect": "Fires 15 quick shots at the target, dealing Physical DMG. Gains Super Armor while using this skill. - Each shot deals 16% / 32% / 48% Physical DMG based on the number of red orbs pinged.",
          "priority": "",
          "notes": "Member of Gray Raven. Somewhat aloof in manner. Good at computers and machines, he is responsible for Gray Raven’s hardware and technical issues.",
          "specialties": [
              {
                  "name": "Combo - Easy to deal high combo damage. Mixed Damage - Able to deal Physical and Elemental DMG.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Precise Shots — Ping Red Orb",
                  "description": "Fires 15 quick shots at the target, dealing Physical DMG. Gains Super Armor while using this skill. - Each shot deals 16% / 32% / 48% Physical DMG based on the number of red orbs pinged."
              },
              {
                  "name": "Yellow Orb: Infernal Shot — Ping Yellow Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in fulfills the first half of this character's Core Passive. Fires a blasting round at the target that explodes on hit and deals Fire DMG. Creates a burning area that deals Fire DMG to the enemies inside over time. Attacking..."
              },
              {
                  "name": "Blue Orb: Magnetic Shot — Ping Blue Orb",
                  "description": "Fires an explosive round at the target, dealing Physical DMG. - Deals 200% / 400% / 600% Physical DMG based on the number of Blue Orbs pinged."
              },
              {
                  "name": "Basic Attack: Shooting Mode — Tap Basic Attack",
                  "description": "Fires consecutive shots, dealing Physical DMG. - Deals 880% Physical DMG in total."
              },
              {
                  "name": "Signature: Signature - 360o Shooting",
                  "description": "Signature Move — 100 Energy + Tap Signature Fires consecutive shots at nearby enemies, dealing Physical DMG, then deals Fire DMG with the last shot. - Deals 800% Physical DMG in total and 1200% Fire DMG."
              },
              {
                  "name": "QTE: 360o Shooting - Rapid Fire",
                  "description": "Lee: Palefire enters the battlefield and shoots the target with his Dual Guns, dealing Physical DMG and inflicting the target with Electrocute, causing the target to take Extra Physical DMG when being attacked. - The shots deal 330% Physical DMG. - Electrocuted targets take 20% Extra Physical DMG w..."
              },
              {
                  "name": "Core Passive: Controlling Bullet",
                  "description": "Core Passive — Ping Yellow Orb + Ping Red Orb After pinging a Yellow Orb, the next Red Ping will grant Blast, making Lee's shot explode after hitting the target, dealing Fire DMG to enemies in the area. - The explosion deals 40% Fire DMG to enemies in the area."
              },
              {
                  "name": "Leader: Leader - Riot of Color",
                  "description": "Increases all party member’s Physical DMG by 5% and Elemental DMG by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Wolf Fang",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Palefire."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "2"
              },
              {
                  "label": "Psychological Age",
                  "value": "18"
              },
              {
                  "label": "Activation",
                  "value": "23 Jul"
              },
              {
                  "label": "Height",
                  "value": "175cm"
              },
              {
                  "label": "Weight",
                  "value": "63kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "AB"
              },
              {
                  "label": "HP",
                  "value": "1439"
              },
              {
                  "label": "ATK",
                  "value": "318"
              },
              {
                  "label": "DEF",
                  "value": "193"
              },
              {
                  "label": "CRIT",
                  "value": "151"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Lee%3A_Palefire"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Lee%3A_Palefire"
      },
      {
          "id": "lilith-daemonissa",
          "name": "Lilith: Daemonissa",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Daemonissa-Icon.png",
          "sigil": "LD",
          "role": "Amplifier",
          "frame": "Daemonissa",
          "faction": "Ascendant",
          "class": "Amplifier",
          "element": "dark",
          "elements": [
              {
                  "name": "dark",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Cardistry Poker",
          "weapon": "Sorrow of Fata Morgana",
          "weaponType": "Moon Umbrella",
          "cub": {
              "name": "Billie",
              "notes": ""
          },
          "memory": "Imported from Build:Daemonissa",
          "bio": "The convergence of Las Prados's wealth and Project Winter's technologies coalesced into this frame. Its eerie quality emanates not merely from the Ascension-Network's favor but more profoundly from the ambitions and desires deep within her M.I.N.D., along with the secrets buried in history's obscured chapters.",
          "effect": "Shape Break: Tap Red Orb - Shape Break Launches a follow-up attack at the enemy, dealing Dark DMG, and pulls in enemies, gaining Super Armor and 60% DMG Reduction. Triggers Matrix if it is not on cooldown. - Deals 400% / 800% / 1200% Dark DMG based on orbs pinged by Silk Threading. Soul Capture: Ta...",
          "priority": "",
          "notes": "The convergence of Las Prados's wealth and Project Winter's technologies coalesced into this frame. Its eerie quality emanates not merely from the Ascension-Network's favor but more profoundly from the ambitions and desires deep within her...",
          "specialties": [
              {
                  "name": "Amplification - Grants the power of healing and making allies deal more damage. Plasma Beam - Skills can trigger the Plasma Beam Effect.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Shadow's Guile",
                  "description": "Shape Break: Tap Red Orb - Shape Break Launches a follow-up attack at the enemy, dealing Dark DMG, and pulls in enemies, gaining Super Armor and 60% DMG Reduction. Triggers Matrix if it is not on cooldown. - Deals 400% / 800% / 1200% Dark DMG based on orbs pinged by Silk Threading. Soul Capture: Ta..."
              },
              {
                  "name": "Yellow Orb: Joker's Trickery",
                  "description": "Silk Threading: Tap Yellow Orb Throws out the Shadow Card, dealing Dark DMG and entering the Silk Threading Combo. - Deals 180% / 360% / 540% Dark DMG based on the number of orbs pinged. Blade Drawing: During Silk Threading Combo + Tap Yellow Orb Converts the Shadow Card to a blade and exits the Si..."
              },
              {
                  "name": "Blue Orb: Danza Distópica",
                  "description": "Turning Steps: Tap Blue Orb Throws out the Hat of Trickery and enters the Turning Combo, pulling in enemies, dealing Dark DMG, and gaining Yellow Orb(s). - Deals 100% / 200% / 300% Dark DMG and gains 1 / 2 / 3 Yellow Orb(s) above the Orb Gauge based on the number of orbs pinged. Chassé – During Tur..."
              },
              {
                  "name": "Basic Attack: Exile at Night",
                  "description": "Umbrella Strike: Tap Basic Attack Attacks with the Moon Umbrella, dealing 590% Dark DMG. Flow Attack: Dodge + Tap Basic Attack Throws out Shadow Cards to attack, dealing 100% Dark DMG. And the following Basic Attack will be from Phase 4. Night Embrace – During Crazy Gamble + No Less Than 3 Yellow O..."
              },
              {
                  "name": "Signature: Invitation to a Radiant Dream",
                  "description": "Nighttime Encounter: Not During Crazy Gamble + 55 Signature Energy + Tap Signature Lays out a Card Spread to enter Crazy Gamble and draws 5 Hole Cards, dealing Dark DMG. Inserts the Yellow Orb(s) in the Orb Gauge and gains 3 bonus Yellow Orbs. Gains up to 9 Yellow Orbs upon entering the battlefield..."
              },
              {
                  "name": "QTE: Golden Blessing",
                  "description": "QTE – Tap QTE Deals DMG and heals. - Deals a total of 600% Dark DMG. - If Lilith has the Joker's Mark, deals 600% Plasma Beam DMG instead. - Restores HP equal to 100% of ATK."
              },
              {
                  "name": "Core Passive: Unpredictable Tricks",
                  "description": "Body Trick Immediately gains 1 Red Orb after casting Joker's Trickery. Max 1 Red Orb. Casting Shadow's Guile after a Yellow Orb 3-Ping will enhance Card Rank and grant Signature Energy. - Casting Silk Threading / Blade Drawing / Shadow Breaking through a Yellow Orb 3-Ping will provide 20/20/30 stac..."
              },
              {
                  "name": "Leader: House of Cards",
                  "description": "All members gain 10% ATK. Amplifiers deal 5% more Dark DMG and Plasma Beam DMG."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Sorrow of Fata Morgana",
                  "cub": "Billie",
                  "memories": "Imported from Build:Daemonissa",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Daemonissa"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "TBD"
              },
              {
                  "label": "Psychological Age",
                  "value": "26"
              },
              {
                  "label": "Activation",
                  "value": "24 Dec"
              },
              {
                  "label": "Height",
                  "value": "170cm"
              },
              {
                  "label": "Weight",
                  "value": "54kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "B"
              },
              {
                  "label": "HP",
                  "value": "2011"
              },
              {
                  "label": "ATK",
                  "value": "453"
              },
              {
                  "label": "DEF",
                  "value": "307"
              },
              {
                  "label": "CRIT",
                  "value": "191"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Lilith%3A_Daemonissa"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Lilith%3A_Daemonissa"
      },
      {
          "id": "liv-eclipse",
          "name": "Liv: Eclipse",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Eclipse-Icon.png",
          "sigil": "LE",
          "role": "Support",
          "frame": "Eclipse",
          "faction": "GrayRavenI",
          "class": "Support",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "B",
          "gift": "Biosphere",
          "weapon": "Type Zero",
          "weaponType": "Levi-Gun",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:Eclipse",
          "bio": "A member of Gray Raven. As one of the newest support Constructs, she’s the anchor of the team.",
          "effect": "Orders weapons to fire a laser beam, dealing Physical DMG. - Deals 200% / 400% / 600% Physical DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "A member of Gray Raven. As one of the newest support Constructs, she’s the anchor of the team.",
          "specialties": [
              {
                  "name": "Melee - Has strong area attack ability. Heal - Has ally healing skills.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Laser Shot — Ping Red Orb",
                  "description": "Orders weapons to fire a laser beam, dealing Physical DMG. - Deals 200% / 400% / 600% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Black Hole — Ping Yellow Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in fulfills the first half of this character's Core Passive. Deploys a black hole at the target area that pulls nearby enemies in and deals Physical DMG to them. The black hole then explodes and deals Physical DMG. - The blac..."
              },
              {
                  "name": "Blue Orb: Inconsistent Particle — Ping Blue Orb",
                  "description": "Unleashes energy and knocks back nearby enemies, dealing Physical DMG, healing nearby allies, and increasing Physical DMG dealt by self. - Deals 100% / 200% / 300% Physical DMG based on the number of orbs pinged. - Heals nearby allies for 40% / 80% / 120% of ATK based on the number of orbs pinged...."
              },
              {
                  "name": "Basic Attack: Beam Strike — Tap Basic Attack",
                  "description": "Summons laser beams to strike at the target, dealing Physical DMG. - Deals 640% Physical DMG in total."
              },
              {
                  "name": "Signature: Signature - Azure Starfall",
                  "description": "Signature Move — 100 Energy + Tap Signature Summons beams to consecutively strike at the target area. Each beam deals Physical DMG. - Lasts 2s. Each beam deals 70% Physical DMG."
              },
              {
                  "name": "QTE: Nanofield Blossom",
                  "description": "Unleashes an energy wave upon entering the battlefield, restoring the HP of nearby allies and dealing Physical DMG to nearby enemies. - Restores HP equal to 20% of Liv: Eclipse's max HP. - Deals 200% Physical DMG."
              },
              {
                  "name": "Core Passive: Laser Cluster",
                  "description": "After any 3-Ping, the next Red Orb skill will unleash a laser cluster that deals Physical DMG. - Deals 800% Physical DMG in total."
              },
              {
                  "name": "Leader: Leader - Trust Building",
                  "description": "HP of all party members increases by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Type Zero",
                  "cub": "",
                  "memories": "Imported from Build:Eclipse",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Eclipse"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "2"
              },
              {
                  "label": "Psychological Age",
                  "value": "16"
              },
              {
                  "label": "Activation",
                  "value": "10 Aug"
              },
              {
                  "label": "Height",
                  "value": "155cm"
              },
              {
                  "label": "Weight",
                  "value": "43kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "O"
              },
              {
                  "label": "HP",
                  "value": "1058"
              },
              {
                  "label": "ATK",
                  "value": "223"
              },
              {
                  "label": "DEF",
                  "value": "142"
              },
              {
                  "label": "CRIT",
                  "value": "112"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Liv%3A_Eclipse"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Liv%3A_Eclipse"
      },
      {
          "id": "liv-empyrea",
          "name": "Liv: Empyrea",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Empyrea-Icon.png",
          "sigil": "LE",
          "role": "Amplifier",
          "frame": "Empyrea",
          "faction": "GrayRavenIII",
          "class": "Amplifier",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "10"
              },
              {
                  "name": "fire",
                  "percent": "90"
              }
          ],
          "rank": "S",
          "gift": "Biosphere",
          "weapon": "Hestia",
          "weaponType": "Scepter",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "A brand new specialized frame developed by the Science Council that is capable of \"purifying\" the Punishing Virus. To protect everything she loves, Liv has made her own choice.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Liv: Empyrea unleashes an energy beam, pulling enemies in a large area and dealing Physical DMG (Fire DMG instead on a 3-Ping) to them. - Deals 220% / 440% / 660% Physical DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "A brand new specialized frame developed by the Science Council that is capable of \"purifying\" the Punishing Virus. To protect everything she loves, Liv has made her own choice.",
          "specialties": [
              {
                  "name": "Amplification — Enhances teammates Burst — Deals massive DMG in a short time",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Zodiacal Grace — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Liv: Empyrea unleashes an energy beam, pulling enemies in a large area and dealing Physical DMG (Fire DMG instead on a 3-Ping) to them. - Deals 220% / 440% / 660% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Holywings Mass — Ping Yellow Orb",
                  "description": "Liv: Empyrea dashes in the direction of the joystick and strikes with her glowing feathers, dealing Physical DMG (Fire DMG instead on a 3-Ping) to the target and its nearby units. - Deals 210% / 420% / 630% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Withering Gospel — Ping Blue Orb",
                  "description": "Liv: Empyrea creates an energy matrix to deal Physical DMG (Fire DMG instead on a 3-Ping) to enemies in a rectangular area and imprison them based on the number of orbs pinged. - Deals 200% / 400% / 600% Physical DMG based on the number of orbs pinged. - Imprisons for 1.5 / 2 / 2.5s based on the nu..."
              },
              {
                  "name": "Basic Attack: Psalm from Afar — Tap Basic Attack",
                  "description": "Performs beam attacks with her Scepter and drones, dealing Physical DMG. - Deals 860% Physical DMG in total."
              },
              {
                  "name": "Signature: Signature - Sea of Sangharama",
                  "description": "Signature Move — 80 Energy + Tap Signature Liv: Empyrea enters Empyreal State with her M.I.N.D. plunged into a corrupted data space, gaining full Prayer and 6 random Signal Orbs (with a guaranteed set of 3-Ping orbs) while triggering Time Lag Calculation. Empyrea State — Empyreal Prayer + Ping any..."
              },
              {
                  "name": "QTE: Hymn to Guidance",
                  "description": "Dives into battle and releases an energy blast in the air, dealing Fire DMG and restoring HP. - Deals a total of 600% Fire DMG and restores HP equal to 60% of her ATK."
              },
              {
                  "name": "Core Passive: Ode for Everlight",
                  "description": "Divine Prayer — Double tap dodge Basic Attacks and pinging orbs accumulate Prayer. When it is full, double tapping the Dodge button triggers Divine Prayer that grants DMG Reduction. While in Divine Prayer, it is allowed to ping 2 sets of orbs. The orbs pinged during the prayer will amplify it and i..."
              },
              {
                  "name": "Leader: Leader - Oath in Silence",
                  "description": "Increase ATK of all members by 10%. Increases Extra DMG of all Amplifiers in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Hestia",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Empyrea."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "2"
              },
              {
                  "label": "Psychological Age",
                  "value": "16"
              },
              {
                  "label": "Activation",
                  "value": "10 Aug"
              },
              {
                  "label": "Height",
                  "value": "155cm"
              },
              {
                  "label": "Weight",
                  "value": "43kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "O"
              },
              {
                  "label": "HP",
                  "value": "2011"
              },
              {
                  "label": "ATK",
                  "value": "403"
              },
              {
                  "label": "DEF",
                  "value": "287"
              },
              {
                  "label": "CRIT",
                  "value": "191"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Liv%3A_Empyrea"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Liv%3A_Empyrea"
      },
      {
          "id": "liv-limpidity",
          "name": "Liv: Limpidity",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Limpidity-Icon.png",
          "sigil": "LL",
          "role": "Attacker",
          "frame": "Limpidity",
          "faction": "GrayRavenIII",
          "class": "DPS",
          "element": "lightning",
          "elements": [
              {
                  "name": "lightning",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Biosphere",
          "weapon": "Ripples of the Aloft Sea",
          "weaponType": "Lotus Wheel",
          "cub": {
              "name": "Levvi",
              "notes": ""
          },
          "memory": "Imported from Build:Limpidity",
          "bio": "Developed by the Science Council, this new frame integrates data from the Golden Age's Phylotree of Ousia project into the M.I.N.D. Its success marks the dawn of a new era.",
          "effect": "Gathers enemies and detonates them, dealing Lightning DMG while gaining Flying Blades. Can ping Red Orbs again during this time. - Deals 160% / 320% / 480% Lightning DMG and gains 1 / 1 / 2 Flying Blades based on the number of orbs pinged. - Can have up to 4 Flying Blades.",
          "priority": "",
          "notes": "Developed by the Science Council, this new frame integrates data from the Golden Age's Phylotree of Ousia project into the M.I.N.D. Its success marks the dawn of a new era.",
          "specialties": [
              {
                  "name": "Burst — Deals massive DMG in a short time. Darkflow - Skills can trigger the Darkflow Effect.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Veil Pierce — Tap Red Orb",
                  "description": "Gathers enemies and detonates them, dealing Lightning DMG while gaining Flying Blades. Can ping Red Orbs again during this time. - Deals 160% / 320% / 480% Lightning DMG and gains 1 / 1 / 2 Flying Blades based on the number of orbs pinged. - Can have up to 4 Flying Blades."
              },
              {
                  "name": "Yellow Orb: Scattered Delusion — Tap Yellow Orb",
                  "description": "Concentrates energy and releases it forward,dealing Lightning DMG while gaining Flying Blades. Can ping Yellow Orbs again during this time. - Deals 160% / 320% / 480% Lightning DMG and gains 1 / 1 / 2 Flying Blades based on the number of orbs pinged. - Can have up to 4 Flying Blades."
              },
              {
                  "name": "Blue Orb: Mirror of Impermanence",
                  "description": "Phantom Lock: Tap Blue Orb Summons a mirror and detonates it, dealing Lightning DMG and gaining White Orbs. Gains Super Armor when casting. - Deals 160% / 320% / 480% and gains 1 / 1 / 2 White Orbs based on the number of orbs pinged. Phantom Break: During Phantom Lock + Tap Blue Orb Charges toward..."
              },
              {
                  "name": "Basic Attack: Winged Captivity",
                  "description": "Lightning Plume: Tap Basic Attack Attacks the enemy, dealing Lightning DMG. - Deals a total of 660% Lightning DMG. - During the 5th hit, press and hold Basic Attack to charge. When fully charged, casts Telescopic Strike, dealing 300% Lightning DMG and gaining 1 Flying Blade and 600 Darkflow Reserve..."
              },
              {
                  "name": "Signature: Cosmic Rebirth",
                  "description": "Dream Dive: 80 Signature Energy + Tap Signature Inverts the world and falls into the mirror, dealing Lightning DMG, converting Red and Yellow Orbs into equal amounts of Blue Orbs, clearing all Flying Blades, and triggering Time Lag Calculation when casting. When cast with 10 Darkflow stacks, consum..."
              },
              {
                  "name": "QTE: Galactic Hymn",
                  "description": "QTE: Tap QTE Detonates the target, dealing Lightning DMG. - Deals 600% Lightning DMG. - When Limpidity leaves the battlefield, gains 10 Sonance per second. After accumulating 150 Sonance, the next QTE cast will be replaced by Celestial Eulogy, which pulls in nearby enemies and deals 1500% Lightning..."
              },
              {
                  "name": "Core Passive: Light of Awakening",
                  "description": "First Light Gains a set of 3-Ping Orbs every time upon entering battle. Heavenly Flash: 4 Flying Blades + Pres and Hold Dodge Summons a massive lightning strike to attack. When casting, can trigger lightning chain and gather enemies, dealing DMG; triggers Matrix if it is not on cooldown. Consumes a..."
              },
              {
                  "name": "Leader: Radiant as I",
                  "description": "Increases Lightning DMG and Darkflow DMG of all members by 10%. Increases ATK of all Attackers in the team by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Ripples of the Aloft Sea",
                  "cub": "Levvi",
                  "memories": "Imported from Build:Limpidity",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Limpidity"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "2"
              },
              {
                  "label": "Psychological Age",
                  "value": "16"
              },
              {
                  "label": "Activation",
                  "value": "10 Aug"
              },
              {
                  "label": "Height",
                  "value": "155cm"
              },
              {
                  "label": "Weight",
                  "value": "43kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "O"
              },
              {
                  "label": "HP",
                  "value": "1499"
              },
              {
                  "label": "ATK",
                  "value": "441"
              },
              {
                  "label": "DEF",
                  "value": "295"
              },
              {
                  "label": "CRIT",
                  "value": "171"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Liv%3A_Limpidity"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Liv%3A_Limpidity"
      },
      {
          "id": "liv-luminance",
          "name": "Liv: Luminance",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Luminance-Icon.png",
          "sigil": "LL",
          "role": "Support",
          "frame": "Luminance",
          "faction": "GrayRavenIII",
          "class": "Support",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Biosphere",
          "weapon": "Type Zero",
          "weaponType": "Levi-Gun",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "Behind the strength of Liv’s heart is a simple dream, and such purity is why this frame is so powerful.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Fires a beam at the target location, dealing Physical DMG and reducing the movement speed of targets. Reduces Extra DMG Bonus of targets upon a 3-Ping. - Deals 200% / 400% / 600% Physical DMG based on the number of orbs pinged. - Re...",
          "priority": "Laser Shot's Extra DMG Bonus increases by 50%. Gains 15% ATK after a 3-Ping for 5s. Duration resets every time it is triggered. A rare case where a character's signature weapon (in this case, Dragon Wind) is inferior. O...",
          "notes": "Behind the strength of Liv’s heart is a simple dream, and such purity is why this frame is so powerful.",
          "specialties": [
              {
                  "name": "Heal - Has ally healing skills. Members Damage reduction - Signature Move can reduce the damage taken by allies.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Repelling Beams — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Fires a beam at the target location, dealing Physical DMG and reducing the movement speed of targets. Reduces Extra DMG Bonus of targets upon a 3-Ping. - Deals 200% / 400% / 600% Physical DMG based on the number of orbs pinged. - Re..."
              },
              {
                  "name": "Yellow Orb: Transferring Recharge — Ping Yellow Orb",
                  "description": "Enhances the weapon and increases the hit count of Basic Attacks. - Deals 30% / 40% / 50% Physical DMG per hit up to 16 / 20 / 32 times for 2.5 / 3.5 / 5s based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Gray Raven Field — Ping Blue Orb",
                  "description": "Deploys a particle array at the target location, marking all enemies within. The particle array deals Physical DMG and pulls the targets in range once per second. - The particle array lasts 3 / 6 / 9s and deals 100% / 200% / 300% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Basic Attack: Adaptive Ray — Tap Basic Attack",
                  "description": "Launches an energy attack, dealing Physical DMG. - Deals 520% Physical DMG in total."
              },
              {
                  "name": "Signature: Arcadia Gate",
                  "description": "Signature Move — 100 Energy + Tap Signature Deploys a wide-ranged energy field and unleashes Light Penalty, dealing Physical DMG to random enemies in the area. Increases Extra DMG Reduction of teammates in the area. - Each Light Penalty deals 150% Physical DMG. - Increases Extra DMG Reduction of te..."
              },
              {
                  "name": "QTE: Heroic Dance",
                  "description": "Enters the battlefield to heal nearby allies and grants Shield. - Heals allies for 100% of Luminance's ATK. - Grants allies Shield equal to 100% of Luminance's ATK for 2s."
              },
              {
                  "name": "Core Passive: Goddess Connection System",
                  "description": "Core Passive — Ping Blue Orb + Tap Basic Attack (chance to trigger) Attacking marked enemies has a chance to trigger Light Penalty, dealing Physical DMG. - Light Penalty has a 20% chance to trigger and deals 150% Physical DMG. Core Passive — Any 3-Ping / After triggering Light Penalty 5 times Heals..."
              },
              {
                  "name": "Leader: Leader - Devoted Heart",
                  "description": "HP of all party members increases by 15%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Type Zero",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Luminance."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "2"
              },
              {
                  "label": "Psychological Age",
                  "value": "16"
              },
              {
                  "label": "Activation",
                  "value": "10 Aug"
              },
              {
                  "label": "Height",
                  "value": "155cm"
              },
              {
                  "label": "Weight",
                  "value": "43kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "O"
              },
              {
                  "label": "HP",
                  "value": "1915"
              },
              {
                  "label": "ATK",
                  "value": "383"
              },
              {
                  "label": "DEF",
                  "value": "287"
              },
              {
                  "label": "CRIT",
                  "value": "191"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Liv%3A_Luminance"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Liv%3A_Luminance"
      },
      {
          "id": "liv-lux",
          "name": "Liv: Lux",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Lux-Icon.png",
          "sigil": "LL",
          "role": "Support",
          "frame": "Lux",
          "faction": "GrayRavenII",
          "class": "Support",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "20"
              },
              {
                  "name": "lightning",
                  "percent": "80"
              }
          ],
          "rank": "A",
          "gift": "Biosphere",
          "weapon": "Benediction",
          "weaponType": "LeviGun",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:Lux",
          "bio": "Liv has cut her hair as a statement of her strong will to return to the battlefield.",
          "effect": "Fires the ion cannon once, dealing Physical DMG. - Deals 200% / 400% / 600% Physical DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "Liv has cut her hair as a statement of her strong will to return to the battlefield.",
          "specialties": [
              {
                  "name": "Heal - Has ally healing skills. Mixed Damage - Able to deal Physical and Elemental DMG.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Ion Cannons — Ping Red Orb",
                  "description": "Fires the ion cannon once, dealing Physical DMG. - Deals 200% / 400% / 600% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Sanctum — Ping Yellow Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Creates a cube at the target location. Inflicts Matrix Effect on the target inside the cube, dealing Lightning DMG and pulling enemies in. The cube explodes upon disappearing, dealing Lightning DMG. - The cube lasts 1 / 2 / 3s and d..."
              },
              {
                  "name": "Blue Orb: Virtual Barrier — Ping Blue Orb",
                  "description": "Deploys an ion wall at the target location that shocks enemies passing through, dealing Lightning DMG every second and reducing their movement speed. The targets hit will also be marked. Applying the mark again refreshes its duration. - The ion wall lasts 2 / 4 / 6s and deals 60% Lightning DMG to t..."
              },
              {
                  "name": "Basic Attack: Lightning Attack Practice — Tap Basic Attack",
                  "description": "Basic Attack: Launches consecutive lightning attacks, dealing Physical DMG. - Deals 650% Physical DMG in total."
              },
              {
                  "name": "Signature: Signature - Electric Wave",
                  "description": "Signature Move — 100 Energy + Tap Signature Deploys a Lightning field. Allies within the field gain 1 Signal Orb every second and their ATK increases. Reduces movement speed of the enemies in the area. - ATK of allies in the Lightning field increases by 20%. - Reduces movement speed of the enemies..."
              },
              {
                  "name": "QTE: Neo-Nanofield Blossom",
                  "description": "Liv: Lux enters the battlefield and summons EX Lightning Lure to strike the enemies within the area, dealing Lightning DMG and leaving an ion field behind that heals the allies within. - Deals 200% Lightning DMG to the enemies in the area. - Heals allies for 25% of Lux's ATK every second."
              },
              {
                  "name": "Core Passive: Reversed Egretfield",
                  "description": "Core Passive — Ping Red Orb (chance to trigger) / Ping Blue Orb + Tap Basic Attack (chance to trigger) When Basic Attacks hit marked enemies, there is a chance to trigger Lightning Lure and deal Lightning DMG. Pinging Red Orbs also has a chance to trigger Lightning Lure. After triggering Lightning..."
              },
              {
                  "name": "Leader: Leader - Mighty Heart",
                  "description": "Increases HP of all members by 5% and ATK of all members by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Benediction",
                  "cub": "",
                  "memories": "Imported from Build:Lux",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Lux"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "2"
              },
              {
                  "label": "Psychological Age",
                  "value": "16"
              },
              {
                  "label": "Activation",
                  "value": "10 Aug"
              },
              {
                  "label": "Height",
                  "value": "155cm"
              },
              {
                  "label": "Weight",
                  "value": "43kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "O"
              },
              {
                  "label": "HP",
                  "value": "1439"
              },
              {
                  "label": "ATK",
                  "value": "303"
              },
              {
                  "label": "DEF",
                  "value": "204"
              },
              {
                  "label": "CRIT",
                  "value": "151"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Liv%3A_Lux"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Liv%3A_Lux"
      },
      {
          "id": "lucia-crimson-abyss",
          "name": "Lucia: Crimson Abyss",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-CrimsonAbyss-Icon.png",
          "sigil": "LC",
          "role": "Attacker",
          "frame": "Crimson Abyss",
          "faction": "Ascendant",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Frog Accessory",
          "weapon": "Sakura",
          "weaponType": "Katana",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "A mysterious enemy encountered by Gray Raven in City 015. Powerful yet mercurial.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in DOES NOT trigger this character's SS-Rank Passive. Leaps forward and attacks targets ahead, dealing Physical DMG. Upon a 3-Ping, the last hit deals Extra Physical DMG and knocks the target airborne. Gains Super Armor while...",
          "priority": "",
          "notes": "A mysterious enemy encountered by Gray Raven in City 015. Powerful yet mercurial.",
          "specialties": [
              {
                  "name": "Duel - Has strong single attack ability. Form Switch - Skills can switch attacking modes.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Crimson Abyss - Flickering Strike — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in DOES NOT trigger this character's SS-Rank Passive. Leaps forward and attacks targets ahead, dealing Physical DMG. Upon a 3-Ping, the last hit deals Extra Physical DMG and knocks the target airborne. Gains Super Armor while..."
              },
              {
                  "name": "Yellow Orb: Crimson Abyss - Dazzling Strike — Ping Yellow Orb",
                  "description": "Charges forward and drives through enemies, dealing Physical DMG to enemies in the path. - Deals 250% / 500% / 750% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Crimson Abyss - Lightbreak Strike",
                  "description": "Blue Orb — Ping Blue Orb Increases power to enter Enhanced Form, increasing movement speed and granting additional effects to Basic Attacks and Swordwaves. - Increases movement speed by 20 / 30 / 50% based on the number of orbs pinged. - Enhanced Form lasts 5s. Blue Orb — Enhanced Form + Any Attack..."
              },
              {
                  "name": "Basic Attack: Crimson Abyss - Iaido Will — Tap Basic Attack",
                  "description": "Attacks the target in 5 sword styles, dealing Physical DMG. Can immediately perform the 3rd hit of Basic Attack after dodging. - Each style deals 80% / 100% / 120% / 270% / 280% Physical DMG to the target respectively."
              },
              {
                  "name": "Signature: Abyssal Slash",
                  "description": "Signature Move — 85 Energy + Tap Signature Slashes targets ahead, dealing Physical DMG. - Deals 2600% Physical DMG in total."
              },
              {
                  "name": "QTE: Falling Petals",
                  "description": "Enters the battlefield and performs consecutive Rising Slashes, dealing Physical DMG and sending the target airborne. - Deals 600% Physical DMG in total."
              },
              {
                  "name": "Core Passive: Crimson Abyss - Blade Will",
                  "description": "Core Passive — Blue 3-Ping + Any 3-Ping Any 3-Ping after a Blue 3-Ping causes Alpha to fall back and enter Blade Will State. All available Signal Orbs will be converted into Blade Will Orbs and Alpha gains 2 additional Blade Will Orbs, In Blade Will State, Signal Orbs gained by Basic Attacks will b..."
              },
              {
                  "name": "Leader: Leader - Abyssal Resonance",
                  "description": "Increases ATK of all Attacker Omniframes in the team by 10% and CRIT of all Attacker Omniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Sakura",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Crimson Abyss."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "6"
              },
              {
                  "label": "Psychological Age",
                  "value": "17"
              },
              {
                  "label": "Activation",
                  "value": "15 Jun"
              },
              {
                  "label": "Height",
                  "value": "165cm"
              },
              {
                  "label": "Weight",
                  "value": "48kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "A"
              },
              {
                  "label": "HP",
                  "value": "1820"
              },
              {
                  "label": "ATK",
                  "value": "421"
              },
              {
                  "label": "DEF",
                  "value": "273"
              },
              {
                  "label": "CRIT",
                  "value": "201"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Lucia%3A_Crimson_Abyss"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Lucia%3A_Crimson_Abyss"
      },
      {
          "id": "lucia-crimson-weave",
          "name": "Lucia: Crimson Weave",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-CrimsonWeave-Icon.png",
          "sigil": "LC",
          "role": "Attacker",
          "frame": "Crimson Weave",
          "faction": "Ascendant",
          "class": "DPS",
          "element": "lightning",
          "elements": [
              {
                  "name": "lightning",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Frog Accessory",
          "weapon": "Nightblaze",
          "weaponType": "Daisho",
          "cub": {
              "name": "Motorbolt",
              "notes": ""
          },
          "memory": "Imported from Build:Crimson_Weave",
          "bio": "Having experienced Ascension-Network's fluctuations, she walks the earth in a new form. Her changes are unknown, but her enhanced power is undeniable.",
          "effect": "Red Orb — Odachi in Hand + Ping Red Orb Charges and thrusts the enemy, dealing Lightning DMG to targets in the area. — Deals 160% / 320% / 480% Lightning DMG in total based on the number of orbs pinged.",
          "priority": "",
          "notes": "Having experienced Ascension-Network's fluctuations, she walks the earth in a new form. Her changes are unknown, but her enhanced power is undeniable.",
          "specialties": [
              {
                  "name": "Form Switch — Skill can switch attack styles. Burst — Can deal large amounts of damage quickly.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Thundering Rush",
                  "description": "Red Orb — Odachi in Hand + Ping Red Orb Charges and thrusts the enemy, dealing Lightning DMG to targets in the area. — Deals 160% / 320% / 480% Lightning DMG in total based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Great Cross Strike",
                  "description": "Yellow Orb — Odachi in Hand + Ping Yellow Orb Sweeps and slashes the enemy continuously, dealing Lightning DMG to targets in a large area. — Deals 140% / 280% / 420% Lightning DMG in total based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Whirling Thrash",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Blue Orb — Kodachi in Hand + Ping Blue Orb Slashes the enemy rapidly and deals Lightning DMG. — Deals 150% / 300% / 450% Lighting DMG based on the number of orbs pinged. — Performing a Blue Orb 2/3-Ping again will change Alpha's mov..."
              },
              {
                  "name": "Basic Attack: Crimson Slash",
                  "description": "Slash: Dispel Shadow — Kodachi in Hand + Tap Basic Attack Unleashes 5 hits of attack toward the target using the kodachi and techniques . — Deals 540% Lightning DMG in total. Slash: Annihilate — Odachi in Hand + Tap Basic Attack Unleashes 5 hits of attack toward the target using the odachi. — Deals..."
              },
              {
                  "name": "Signature: Weave of Voidness",
                  "description": "Weave: Splashing Thunder— 20 Energy + tap Signature Move Slowly pulls the odachi and summons thunder to deal Lightning DMG to nearby targets in a large area, then holds the odachi in hand. Triggers Time Lag Calculation when casting the skill. — Deals 500% Lightning DMG in total. Weave: Karmic Infer..."
              },
              {
                  "name": "QTE: Flashes of Steel",
                  "description": "Slashes multiple times to deal 460% Lightning DMG."
              },
              {
                  "name": "Core Passive: Path of Anatta",
                  "description": "Formless Confrontation When wielding the kodachi, Alpha can only use Blue Orb skills. Her Basic Attacks will only grant Blue Orbs, which will be arranged in front of her other orbs by default. When wielding the odachi, Alpha can only use Red or Yellow Orb Skills. Her Basic Attacks will only grant R..."
              },
              {
                  "name": "Leader: Valorous Thunderclaps",
                  "description": "Increases Lightning DMG of all members by 10%. Increases ATK of all Attacker Omniframes in the team by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Nightblaze",
                  "cub": "Motorbolt",
                  "memories": "Imported from Build:Crimson_Weave",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Crimson_Weave"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "6"
              },
              {
                  "label": "Psychological Age",
                  "value": "17"
              },
              {
                  "label": "Activation",
                  "value": "15 Jun"
              },
              {
                  "label": "Height",
                  "value": "165cm"
              },
              {
                  "label": "Weight",
                  "value": "48kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "A"
              },
              {
                  "label": "HP",
                  "value": "2011"
              },
              {
                  "label": "ATK",
                  "value": "422"
              },
              {
                  "label": "DEF",
                  "value": "301"
              },
              {
                  "label": "CRIT",
                  "value": "172"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Lucia%3A_Crimson_Weave"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Lucia%3A_Crimson_Weave"
      },
      {
          "id": "lucia-dawn",
          "name": "Lucia: Dawn",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Dawn-Icon.png",
          "sigil": "LD",
          "role": "Attacker",
          "frame": "Dawn",
          "faction": "GrayRavenII",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "40"
              },
              {
                  "name": "lightning",
                  "percent": "60"
              }
          ],
          "rank": "A",
          "gift": "Frog Accessory",
          "weapon": "Inverse - Shadow",
          "weaponType": "Katana",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "Lucia’s signature frame. As graceful as it is powerful, its mere appearance on the battlefield inspires its allies, earning the “Dawn” sobriquet.",
          "effect": "Launches a flurry of attacks that deals Physical DMG 5 times in a row (Lightning DMG instead on a 3-Ping). Gains Super Armor while using the skill. - Deals 40% / 80% / 144% Physical DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "Lucia’s signature frame. As graceful as it is powerful, its mere appearance on the battlefield inspires its allies, earning the “Dawn” sobriquet.",
          "specialties": [
              {
                  "name": "Duel - Has strong single attack ability Mixed Damage - Able to deal Physical and Elemental DMG.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Lotus - Flurry — Ping Red Orb",
                  "description": "Launches a flurry of attacks that deals Physical DMG 5 times in a row (Lightning DMG instead on a 3-Ping). Gains Super Armor while using the skill. - Deals 40% / 80% / 144% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Lotus - Lightning Field — Ping Yellow Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in triggers this character's Core Passive. Deploys a lightning field that deals Physical DMG to targets in the area and marks them. Enemies in the field take Lightning DMG over time. The mark stacks up to 3 times. Applying th..."
              },
              {
                  "name": "Blue Orb: Lotus - Moon Arc Slash — Ping Blue Orb",
                  "description": "Quickly strikes the target to deal Lightning DMG, then pulls the target close, dealing Physical DMG and marking the target. The mark stacks up to 3 times. Applying the mark again refreshes its duration. - Deals 80% / 160% / 240% Lightning DMG based on the number of orbs pinged. - Deals 80% / 160% /..."
              },
              {
                  "name": "Basic Attack: Lotus - Quick Blade — Tap Basic Attack",
                  "description": "Launches consecutive attacks with Lotus - Quick Blade, dealing Physical DMG. - Deals 650% Physical DMG in total."
              },
              {
                  "name": "Signature: Signature - Lotus Blade",
                  "description": "Signature Move — 50 Energy + Tap Signature Activates the Lotus Blade. Performing Basic Attacks and skills launches an additional attack with Lotus Blade that deals Lightning DMG. Casting the Signature Move again while it is still active will refresh its duration. - Lotus Blade deals 25% Lightning D..."
              },
              {
                  "name": "QTE: Scattering Petals",
                  "description": "Lucia: Dawn spins and slashes the target, dealing Physical DMG and Lightning DMG. - Deals 210% Physical DMG and 570% Lightning DMG in total."
              },
              {
                  "name": "Core Passive: Lotus - Lightning Dance",
                  "description": "Core Passive — Ping Yellow / Blue Orb + Tap Basic Attack (chance to trigger) Lightning Lure: Attacking a marked enemy has a chance to summon a lightning bolt to trike the target, dealing Lightning DMG. - There is a 25% / 50% / 75% chance to summon a lightning bolt that deals 60% Lightning DMG based..."
              },
              {
                  "name": "Leader: Leader - Dawn Leader",
                  "description": "Attack of all Attacker Constructs increases by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Inverse - Shadow",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Dawn."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "6"
              },
              {
                  "label": "Psychological Age",
                  "value": "17"
              },
              {
                  "label": "Activation",
                  "value": "15 Jun"
              },
              {
                  "label": "Height",
                  "value": "165cm"
              },
              {
                  "label": "Weight",
                  "value": "48kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "A"
              },
              {
                  "label": "HP",
                  "value": "1590"
              },
              {
                  "label": "ATK",
                  "value": "303"
              },
              {
                  "label": "DEF",
                  "value": "227"
              },
              {
                  "label": "CRIT",
                  "value": "144"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Lucia%3A_Dawn"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Lucia%3A_Dawn"
      },
      {
          "id": "lucia-lotus",
          "name": "Lucia: Lotus",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Lotus-Icon.png",
          "sigil": "LL",
          "role": "Attacker",
          "frame": "Lotus",
          "faction": "GrayRavenI",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "80"
              },
              {
                  "name": "fire",
                  "percent": "20"
              }
          ],
          "rank": "B",
          "gift": "Frog Accessory",
          "weapon": "Lotus Berserker",
          "weaponType": "Katana",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:Lotus",
          "bio": "The leader of Gray Raven. Brave and selfless, she is ever at the frontline of the war against the Corrupted.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in fulfills the first half of this character's Core Passive. Thrusts forward and pulls the target, dealing Physical DMG. - Deals 266.72% / 533.32% / 800% Physical DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "The leader of Gray Raven. Brave and selfless, she is ever at the frontline of the war against the Corrupted.",
          "specialties": [
              {
                  "name": "Duel - Has strong single attack ability Dual Blades - Attack DMG boosting skill",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Lotus - Initial Move — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in fulfills the first half of this character's Core Passive. Thrusts forward and pulls the target, dealing Physical DMG. - Deals 266.72% / 533.32% / 800% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Lotus - Flash Strike — Ping Yellow Orb",
                  "description": "Quickly strikes once and knocks the target airborne, dealing Physical DMG. - Deals 150% / 300% / 450% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Lotus - Wave Slash — Ping Blue Orb",
                  "description": "Deals Physical DMG and flares up weapon, making all attacks deal extra Fire DMG for a period of time. - Deals 100% / 200% / 300% Physical DMG based on the number of orbs pinged. - Deals extra 10% / 15% / 20% Fire DMG for 4 / 4 / 8s based on the number of orbs pinged."
              },
              {
                  "name": "Basic Attack: Lotus - Quick Blade — Tap Basic Attack",
                  "description": "Launches consecutive attacks with Lotus - Quick Blade, dealing Physical DMG. - Deals 540% Physical DMG in total."
              },
              {
                  "name": "Signature: Signature - Lotus Flurry",
                  "description": "Signature Move — 100 Energy + Tap Signature Unleashes Lotus Flurry to deal quick slashes to the enemies ahead and finish with a heavy blow, dealing Physical DMG. - Each slash deals 140% Physical DMG. - The heavy blow deals 1000% Physical DMG."
              },
              {
                  "name": "QTE: Lotus Quick Slash",
                  "description": "Lucia: Lotus enters the battlefield and attacks the enemy with her Dual Blades, dealing Physical DMG. - Deals 1110% Physical DMG in total."
              },
              {
                  "name": "Core Passive: Lotus - Dual Blades",
                  "description": "Core Passive — Any 3-Ping + Ping Red Orb Lucia: Lotus enters Burst Form when a Red Orb in pinged within 3s after any 3-Ping, replacing Basic Attacks with Dual Blades. Lotus - Dual Blades: Attacks the enemy multiple times, dealing Physical DMG. - Deals 1080% Physical DMG in total."
              },
              {
                  "name": "Leader: Fearless Warrior",
                  "description": "ATK of all Attacker Omniframes increases by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Lotus Berserker",
                  "cub": "",
                  "memories": "Imported from Build:Lotus",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Lotus"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "6"
              },
              {
                  "label": "Psychological Age",
                  "value": "17"
              },
              {
                  "label": "Activation",
                  "value": "15 Jun"
              },
              {
                  "label": "Height",
                  "value": "165cm"
              },
              {
                  "label": "Weight",
                  "value": "48kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "A"
              },
              {
                  "label": "HP",
                  "value": "1113"
              },
              {
                  "label": "ATK",
                  "value": "223"
              },
              {
                  "label": "DEF",
                  "value": "159"
              },
              {
                  "label": "CRIT",
                  "value": "101"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Lucia%3A_Lotus"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Lucia%3A_Lotus"
      },
      {
          "id": "lucia-plume",
          "name": "Lucia: Plume",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Plume-Icon.png",
          "sigil": "LP",
          "role": "Attacker",
          "frame": "Plume",
          "faction": "GrayRavenIII",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "20"
              },
              {
                  "name": "ice",
                  "percent": "80"
              }
          ],
          "rank": "S",
          "gift": "Frog Accessory",
          "weapon": "Crimson Birch",
          "weaponType": "Katana",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:Plume",
          "bio": "Babylonia developed this latest frame specifically for Lucia based on Gray Raven's experience and the data collected from Alpha.",
          "effect": "Red Orb — Ping Red Orb Unleashes several quick slashes on the spot, dealing Physical DMG. - Attacks 4 / 4 / 8 times, each time dealing Physical 60% / 120% / 120% DMG based on the number of orbs pinged. Red Orb — Arctic Form + Ping Red Orb In Arctic Form, creates an ice tornado that moves forward, d...",
          "priority": "",
          "notes": "Babylonia developed this latest frame specifically for Lucia based on Gray Raven's experience and the data collected from Alpha.",
          "specialties": [
              {
                  "name": "Continual Burst - Has sustained damage output Form Switch - Skill can switch attacking modes",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Mute Winter",
                  "description": "Red Orb — Ping Red Orb Unleashes several quick slashes on the spot, dealing Physical DMG. - Attacks 4 / 4 / 8 times, each time dealing Physical 60% / 120% / 120% DMG based on the number of orbs pinged. Red Orb — Arctic Form + Ping Red Orb In Arctic Form, creates an ice tornado that moves forward, d..."
              },
              {
                  "name": "Yellow Orb: Glacier Puncture",
                  "description": "Yellow Orb — Ping Yellow Orb Darts at the target and strikes twice, dealing Physical DMG. - Each hit deals 115% / 235% / 355% Physical DMG based on the number of orbs pinged. Yellow Orb — Arctic Form + Ping Yellow Orb In Arctic Form, leaps mid-air and smashes at the target, dealing Ice DMG twice. -..."
              },
              {
                  "name": "Blue Orb: Frigid Roundabout",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in triggers this character's SS-Rank Passive. Blue Orb — Ping Blue Orb Whirls vertically while moving, then smashes downward to deal Physical DMG. - Each hit deals 30% / 60% / 90% Physical DMG based on the number of orbs ping..."
              },
              {
                  "name": "Basic Attack: Frost Blade",
                  "description": "Basic Attack — Tap Basic Attack Cuts at the target quickly with a katana, dealing Physical DMG. - Deals 640% Physical DMG in total. Basic Attack — Arctic Form + Tap Basic Attack In Arctic Form, attacks the target with a katana and thruster interchangeably, dealing Physical DMG and Ice DMG. - Deals..."
              },
              {
                  "name": "Signature: Signature - Halcyonic Blossoms",
                  "description": "Signature Move — Tap Signature Can be cast any time in Normal Form. Quickly switches into Arctic Form. Becomes invincible while switching. Form switch has a cooldown of 3s. If energy is full when switching, all Signal Orbs will be rearranged into 3-Pings. Signature Move — Arctic Form + More than 1..."
              },
              {
                  "name": "QTE: Frost Blade - Icebreak",
                  "description": "Dashes at the enemy, dealing Physical DMG and Ice DMG. - Deals 320% Physical DMG and 320% Ice DMG."
              },
              {
                  "name": "Core Passive: Hyperborea",
                  "description": "Core Passive — Any 3-Ping In Normal Form, every 3-Ping grants Energy and Signature Point (up to 2 Points in Normal Form). - Every 3-Ping grants 50% Energy and 1 Signature Point. Core Passive — Arctic Form + Any 3-Ping In Arctic Form, Energy decreases over time. While there is still Energy, Ice DMG..."
              },
              {
                  "name": "Leader: Leader - Blade of Raven",
                  "description": "Increases Ice DMG of all members by 10%. Increases ATK of all Attacker Omniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Crimson Birch",
                  "cub": "",
                  "memories": "Imported from Build:Plume",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Plume"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "6"
              },
              {
                  "label": "Psychological Age",
                  "value": "17"
              },
              {
                  "label": "Activation",
                  "value": "15 Jun"
              },
              {
                  "label": "Height",
                  "value": "165cm"
              },
              {
                  "label": "Weight",
                  "value": "48kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "A"
              },
              {
                  "label": "HP",
                  "value": "1954"
              },
              {
                  "label": "ATK",
                  "value": "421"
              },
              {
                  "label": "DEF",
                  "value": "292"
              },
              {
                  "label": "CRIT",
                  "value": "183"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Lucia%3A_Plume"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Lucia%3A_Plume"
      },
      {
          "id": "lucia-pyroath",
          "name": "Lucia: Pyroath",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-LuciaPyroath-Icon.png",
          "sigil": "LP",
          "role": "Attacker",
          "frame": "Pyroath",
          "faction": "GrayRavenIII",
          "class": "DPS",
          "element": "fire",
          "elements": [
              {
                  "name": "fire",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Frog Accessory",
          "weapon": "Flamewing of Dawn",
          "weaponType": "Pyro Katana",
          "cub": {
              "name": "Yi Kong",
              "notes": ""
          },
          "memory": "Imported from Build:Pyroath",
          "bio": "Developed based on years of research of the Science Council, Pyroath is a new specialized frame carrying the Omega Core with efficient air combat capability. Through countless moments with Gray Raven, Lucia has found her purpose. Now, she's determined and calm just like the fire that forever burns on the frame.",
          "effect": "Spiral Flame — Tap Red Orb Uses the dual blades to fly up, gaining Quench Value and dealing Fire DMG. - Gains 20 / 40 / 60 Quench Value over time while casting based on the orbs pinged. - Deals 240% / 480% / 720% Fire DMG based on the orbs pinged. - Casting the skill requires at least 1 White Orb....",
          "priority": "",
          "notes": "Developed based on years of research of the Science Council, Pyroath is a new specialized frame carrying the Omega Core with efficient air combat capability. Through countless moments with Gray Raven, Lucia has found her purpose. Now, she'...",
          "specialties": [
              {
                  "name": "Burst - Deals massive DMG in a short time. Plasma Beam - Skills can trigger the Plasma Beam Effect.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Whirl of Light",
                  "description": "Spiral Flame — Tap Red Orb Uses the dual blades to fly up, gaining Quench Value and dealing Fire DMG. - Gains 20 / 40 / 60 Quench Value over time while casting based on the orbs pinged. - Deals 240% / 480% / 720% Fire DMG based on the orbs pinged. - Casting the skill requires at least 1 White Orb...."
              },
              {
                  "name": "Yellow Orb: Flying Flare",
                  "description": "Wing Blade — Tap Yellow Orb Quickly thrusts the target, gaining Quench Value and dealing Fire DMG. - Gains 20 / 40 / 60 Quench Value over time while casting based on the orbs pinged. - Deals 160% / 320% / 500% Fire DMG. - Casting the skill requires at least 1 White Orb. Plume Slash — Airborne + Tap..."
              },
              {
                  "name": "Blue Orb: Fiery Thunderclap",
                  "description": "Solar Thrust — Tap Blue Orb Thrusts while leaping up, dealing Fire DMG. - Deals 120% Fire DMG. - Temporarily stays airborne after casting. - Casting does not consume White Orbs. Falling Light — Airborne + Tap Blue Orb Quickly slashes from midair, dealing Fire DMG. - Deals 180% Fire DMG. - Lands aft..."
              },
              {
                  "name": "Basic Attack: Pyro Blade",
                  "description": "Blazing Slash — Tap Basic Attack Wields the dual blades to slash the target repetitively, dealing Fire DMG. While airborne, Basic Attacks will deal Fire DMG and grant Aura Value. Tapping Basic Attack with specific timing will trigger a special attack. - Deals 760% Fire DMG in total. - While airborn..."
              },
              {
                  "name": "Signature: Dazzling Flare",
                  "description": "Leap — Tap Signature Leaps and temporarily stays airborne. - Lucia can dodge attacks while leaping. Melting Quench — Max Quench Value + Press and Hold Signature Raises the blade to absorb the solar power, entering the Fire Thunder Form and dealing Fire DMG. Triggers Time Lag Calculation while casti..."
              },
              {
                  "name": "QTE: Raging Blaze",
                  "description": "Quickly slashes the target, dealing Fire DMG. - Deals 600% Fire DMG."
              },
              {
                  "name": "Core Passive: Night Flare",
                  "description": "Flying Raven — Press and Hold Dodge Lucia turns all Signal Orbs into White Orbs. Lucia can temporarily stay airborne after casting some skills. Dodges will grant extra effects. - After a successful dodge on the ground, press and hold Dodge to make Lucia counterattack the enemy, dealing 400% Fire DM..."
              },
              {
                  "name": "Leader: Fire of Oath",
                  "description": "Increases Fire DMG and Plasma Beam DMG of all members by 10%. Increases ATK of all Attacker Omniframes in the team by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Flamewing of Dawn",
                  "cub": "Yi Kong",
                  "memories": "Imported from Build:Pyroath",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Pyroath"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "17"
              },
              {
                  "label": "Activation",
                  "value": "June 15"
              },
              {
                  "label": "Height",
                  "value": "165cm"
              },
              {
                  "label": "Weight",
                  "value": "48kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "A"
              },
              {
                  "label": "HP",
                  "value": "2015"
              },
              {
                  "label": "ATK",
                  "value": "519"
              },
              {
                  "label": "DEF",
                  "value": "292"
              },
              {
                  "label": "CRIT",
                  "value": "196"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Lucia%3A_Pyroath"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Lucia%3A_Pyroath"
      },
      {
          "id": "luna-laurel",
          "name": "Luna: Laurel",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Laurel-Icon.png",
          "sigil": "LL",
          "role": "Attacker",
          "frame": "Laurel",
          "faction": "Ascendant",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "10"
              },
              {
                  "name": "dark",
                  "percent": "90"
              }
          ],
          "rank": "S",
          "gift": "Night Light",
          "weapon": "Ozma",
          "weaponType": "Amplifier",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:Laurel",
          "bio": "As an Agent of the Ascension-Network, this is her complete combat form, in which she can manipulate the Heteromer energy of the Punishing Virus and Constructs to deliver attacks with a power that transcends all Ascendants.",
          "effect": "Unleashes spheres forward to perform a scattered attack, dealing Physical DMG (Dark DMG instead on a 3-Ping). Gains Super Armor while casting this skill. - Deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "As an Agent of the Ascension-Network, this is her complete combat form, in which she can manipulate the Heteromer energy of the Punishing Virus and Constructs to deliver attacks with a power that transcends all Ascendants.",
          "specialties": [
              {
                  "name": "Energy Amass - Use 3-Ping to trigger 3-Ping and amass energy Burst - Her core form grants high burst and gains energy",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Vortex Polestar — Ping Red Orb",
                  "description": "Unleashes spheres forward to perform a scattered attack, dealing Physical DMG (Dark DMG instead on a 3-Ping). Gains Super Armor while casting this skill. - Deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Impending Pain — Ping Yellow Orb",
                  "description": "Redirects the flow of energy to perform up to 4 piercing attacks at the target's current location, dealing Physical DMG (Dark DMG instead on a 3-Ping). Luna: Laurel gains Super Armor and is able to move while casting this skill. - Deals up to 220% / 440% / 660% Physical DMG based on the number of o..."
              },
              {
                  "name": "Blue Orb: Southern Cross — Ping Blue Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Unleashes a virus field that inflicts multiple attacks, dealing Physical DMG (Dark DMG instead on a 3-Ping). If there is an enemy nearby upon casting, the virus field will follow it, otherwise it will follow Luna: Laurel instead. Lu..."
              },
              {
                  "name": "Basic Attack: Thorny Judgement",
                  "description": "Basic Attack — Tap Basic Attack Uses spheres and spikes to inflict multiple attacks that deal Physical DMG. - Deals 470% Physical DMG in total. Basic Attack — Annihilation State + Tap Basic Attack While in Annihilation State, Luna: Laurel will launch multiple attacks with swords and spears, dealing..."
              },
              {
                  "name": "Signature: Finale Descends",
                  "description": "Signature Move — 150 Energy + Tap Signature Alters the gravity of a large area ahead to draw nearby enemies in, dealing Dark DMG to all enemies inside it. While in Annihilation State, casting the Signature Move will consume all Annihilation Pts and end Annihilation State. - Deals 2800% Dark DMG in..."
              },
              {
                  "name": "QTE: Speedy Sanction",
                  "description": "Delivers an attack forward with a spear in the air, dealing Dark DMG. - Deals 640% Dark DMG in total."
              },
              {
                  "name": "Core Passive: Singularity",
                  "description": "Core Passive — At least 15 Annihilation Pts + Press and hold Basic Attack Luna: Laurel gains Annihilation Pts after every 3-Ping. Her next ping will be counted as a 3-Ping. 3-Pings generated by the Matrix will be consumed first. When there are a certain amount of Annihilation Pts, press and hold th..."
              },
              {
                  "name": "Leader: Leader - Silver Bloom",
                  "description": "Increases Dark DMG of all members by 10%. Increases ATK of all Attacker Omniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Ozma",
                  "cub": "",
                  "memories": "Imported from Build:Laurel",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Laurel"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "0"
              },
              {
                  "label": "Psychological Age",
                  "value": "16"
              },
              {
                  "label": "Activation",
                  "value": "26 Oct"
              },
              {
                  "label": "Height",
                  "value": "159cm"
              },
              {
                  "label": "Weight",
                  "value": "41kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "AB"
              },
              {
                  "label": "HP",
                  "value": "1992"
              },
              {
                  "label": "ATK",
                  "value": "386"
              },
              {
                  "label": "DEF",
                  "value": "288"
              },
              {
                  "label": "CRIT",
                  "value": "198"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Luna%3A_Laurel"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Luna%3A_Laurel"
      },
      {
          "id": "luna-oblivion",
          "name": "Luna: Oblivion",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Oblivion-Icon.png",
          "sigil": "LO",
          "role": "Annihilator",
          "frame": "Oblivion",
          "faction": "Ascendant",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Night Light",
          "weapon": "Reconstruction of Law",
          "weaponType": "Chakram",
          "cub": {
              "name": "Guardrake",
              "notes": ""
          },
          "memory": "Imported from Build:Oblivion",
          "bio": "Once an agent of the Ascension-Network, she now seeks to resist, guide, and control the entire Ascension-Network to create an ideal paradise after the Agent Zero incident.",
          "effect": "Wields the Wingblade to attack the enemy, dealing Nihil DMG and gaining Crescent Points and Eclipse Points. - Deals 150% / 300% / 480% Nihil DMG based on the number of orbs pinged. - Retrieves the Chakram if it's present on the field. - Gains 10 / 20 / 30 Crescent Points based on the number of orbs...",
          "priority": "",
          "notes": "Once an agent of the Ascension-Network, she now seeks to resist, guide, and control the entire Ascension-Network to create an ideal paradise after the Agent Zero incident.",
          "specialties": [
              {
                  "name": "Form Switch - Skills can switch attacking modes. Disruption - Able to rapidly break the enemy's Equilibrium Field.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Swirling Darkstar — Ping Red Orb",
                  "description": "Wields the Wingblade to attack the enemy, dealing Nihil DMG and gaining Crescent Points and Eclipse Points. - Deals 150% / 300% / 480% Nihil DMG based on the number of orbs pinged. - Retrieves the Chakram if it's present on the field. - Gains 10 / 20 / 30 Crescent Points based on the number of orbs..."
              },
              {
                  "name": "Yellow Orb: Reddened Naught — Ping Yellow Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Leaps up and hurls the Chakram at the enemy, dealing Nihil DMG and gaining Crescent Points and Eclipse Points. - Deals 140% / 280% / 420% Nihil DMG based on the number of orbs pinged. - If the Chakram is present on the field when th..."
              },
              {
                  "name": "Blue Orb: Waning Trajectory — Ping Blue Orb",
                  "description": "Dashes in and leaps up to launch a spin attack at the enemy, dealing Nihil DMG and gaining Crescent Points and Eclipse Points. - Deals 190% / 380% / 570% Nihil DMG based on the number of orbs pinged. - Retrieves the Chakram if it's present on the field. - Gains 10 / 20 / 30 Crescent Points based on..."
              },
              {
                  "name": "Basic Attack: Gibbous Halo",
                  "description": "Basic Attack — Tap Basic Attack Alternates between the Chakram and the Wingblade to slash the enemy, dealing Nihil DMG. If the Chakram is present on the field, the 5th hit will retrieve the Chakram and restore additional Crescent Points. - Deals 810% Nihil DMG. The 5th hit will retrieve the Chakram..."
              },
              {
                  "name": "Signature: Sanguine Verdict",
                  "description": "Main Sequence — 30 Energy + Tap Signature Crushes spacial dimensions to pull all enemies into the Starfall Dome, dealing Nihil DMG. Triggers Time Lag Calculation in the duration and enters Main Sequence. - Deals 1200% Nihil DMG. Finality — 30 Energy + Press and Hold Signature Tears apart dimensiona..."
              },
              {
                  "name": "QTE: Befalling Demise",
                  "description": "Slashes the enemy with the Wingblade, dealing Nihil DMG. - Deals 600% Nihil DMG."
              },
              {
                  "name": "Core Passive: Moonlit Coronation",
                  "description": "Waxing Course Enters Nova upon entering the battlefield. When in Nova, all Signal Orbs will be converted into Yellow Orbs, and Basic Attacks will only generate Yellow Orbs. After entering Main Sequence, all Signal Orbs will be converted into Red and Blue Orbs, and Basic Attacks will only generate R..."
              },
              {
                  "name": "Leader: Blood Moon",
                  "description": "Increases Nihil DMG of all members by 10%. Increases ATK of all Annihilators by 20%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Reconstruction of Law",
                  "cub": "Guardrake",
                  "memories": "Imported from Build:Oblivion",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Oblivion"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "0"
              },
              {
                  "label": "Psychological Age",
                  "value": "16"
              },
              {
                  "label": "Activation",
                  "value": "26 Oct"
              },
              {
                  "label": "Height",
                  "value": "159cm"
              },
              {
                  "label": "Weight",
                  "value": "41kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "AB"
              },
              {
                  "label": "HP",
                  "value": "1915"
              },
              {
                  "label": "ATK",
                  "value": "441"
              },
              {
                  "label": "DEF",
                  "value": "287"
              },
              {
                  "label": "CRIT",
                  "value": "182"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Luna%3A_Oblivion"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Luna%3A_Oblivion"
      },
      {
          "id": "nanami-pulse",
          "name": "Nanami: Pulse",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Pulse-Icon.png",
          "sigil": "NP",
          "role": "Tank",
          "frame": "Pulse",
          "faction": "Church of the Mechanics",
          "class": "Tank",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "50"
              },
              {
                  "name": "fire",
                  "percent": "50"
              }
          ],
          "rank": "S",
          "gift": "Jack-in-the-box",
          "weapon": "Hydro Heat",
          "weaponType": "Saw",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "Nanami’s enhanced model, equipped with IR-005 propulsion wheels, allowing her to speed across the battlefield at ease. “Hehe, you can only see Nanami’s afterimages now.”",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Dashes forward and stabs the enemy with her chainsaw, dealing Physical DMG up to 12 Hits. Deals Fire DMG instead upon a 3-Ping. - Each hit deals 20% / 40% / 60% Physical DMG based on the number of orbs pinged (up to 12 hits).",
          "priority": "",
          "notes": "Nanami’s enhanced model, equipped with IR-005 propulsion wheels, allowing her to speed across the battlefield at ease. “Hehe, you can only see Nanami’s afterimages now.”",
          "specialties": [
              {
                  "name": "Mixed Damage - Able to deal Physical and Elemental DMG. Resistance Reduction - Able to reduce Elemental Resistance of enemies.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Rhythm Charge — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Dashes forward and stabs the enemy with her chainsaw, dealing Physical DMG up to 12 Hits. Deals Fire DMG instead upon a 3-Ping. - Each hit deals 20% / 40% / 60% Physical DMG based on the number of orbs pinged (up to 12 hits)."
              },
              {
                  "name": "Yellow Orb: Dancing Ring — Ping Yellow Orb",
                  "description": "Flips forward and slashes with a chainsaw, dealing DMG twice. Deals Physical DMG upon a 1 / 2-Ping. Deals Fire DMG instead upon a 3-Ping and creates a rotating fire ring that deals Fire DMG. - Upon a 1 / 2-Ping, each hit deals 100% / 200% Physical DMG based on the number of orbs pinged. - Each hit..."
              },
              {
                  "name": "Blue Orb: Shattering Shock — Ping Blue Orb",
                  "description": "Unleashes energy that instantly interrupts enemy attacks and launches a heavy strike that deals Physical DMG to nearby enemies. Gains Shield and Super Armor when Shield is present. Deals Fire DMG instead upon a 3-Ping. - The heavy strike deals damage 3 times, each hit dealing 50% / 100% / 200% Phys..."
              },
              {
                  "name": "Basic Attack: Sawblade Storm — Tap Basic Attack",
                  "description": "Launches consecutive attacks with a chainsaw, dealing Physical DMG. - Deals 620% Physical DMG in total."
              },
              {
                  "name": "Signature: Signature - Pulse",
                  "description": "Signature Move — 30 Energy + Tap Signature Nanami: Pulse charges at the target, dealing Fire DMG to the enemies along the path. - Deals 900% Fire DMG in total."
              },
              {
                  "name": "QTE: Molten Roundslash",
                  "description": "Moves and marks a circle of fire on the ground, dealing Fire DMG to nearby targets and inflicting them with Scorching Invasion, reducing their Fire Resistance. - Deals 480% Fire DMG in total. - Scorching Invasion reduces the target's Fire Resistance by 10% for 6s."
              },
              {
                  "name": "Core Passive: Overclocking Resonance",
                  "description": "Core Passive — Cast Signature Move + Tap Basic Attack Nanami: Pulse enters Overclocking State after casting Signature Move. In this state, her Basic Attacks deal Fire DMG instead and reduce the Fire Resistance of the targets hit by 15% for 8s."
              },
              {
                  "name": "Leader: Leader - Protective Pulse",
                  "description": "Increases DEF of all members by 15% and Fire Resistance of all members by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Hydro Heat",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Pulse."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "Unknown"
              },
              {
                  "label": "Activation",
                  "value": "Unknown"
              },
              {
                  "label": "Height",
                  "value": "145cm"
              },
              {
                  "label": "Weight",
                  "value": "45kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "Unknown"
              },
              {
                  "label": "HP",
                  "value": "2203"
              },
              {
                  "label": "ATK",
                  "value": "364"
              },
              {
                  "label": "DEF",
                  "value": "301"
              },
              {
                  "label": "CRIT",
                  "value": "172"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Nanami%3A_Pulse"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Nanami%3A_Pulse"
      },
      {
          "id": "nanami-starfarer",
          "name": "Nanami: Starfarer",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-RemoteStar-Icon.png",
          "sigil": "NS",
          "role": "Tank",
          "frame": "Starfarer",
          "faction": "Church of the Mechanics",
          "class": "Tank",
          "element": "fire",
          "elements": [
              {
                  "name": "fire",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Jack-in-the-box",
          "weapon": "Implosion",
          "weaponType": "Ultra-Saw",
          "cub": {
              "name": "Jet Jaeger",
              "notes": ""
          },
          "memory": "",
          "bio": "A frame Nanami made for herself. It is extremely lightweight, but both the technology inside it and its strength have reached a level that is far beyond the level of the human technology nowadays.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Nanami: Starfarer fires flames with the mecha's left-wrist cannon to push it to the target. dealing Fire DMG. Nanami gains Super Armor upon a 3-Ping and restores additional Signature Energy with a follow-up Flame Chain Dance, pullin...",
          "priority": "",
          "notes": "A frame Nanami made for herself. It is extremely lightweight, but both the technology inside it and its strength have reached a level that is far beyond the level of the human technology nowadays.",
          "specialties": [
              {
                  "name": "Resistance Reduction — Able to reduce the Resistance of enemies. Form Switch — Signature Move can switch attacking forms.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Scorching Whirlwind — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Nanami: Starfarer fires flames with the mecha's left-wrist cannon to push it to the target. dealing Fire DMG. Nanami gains Super Armor upon a 3-Ping and restores additional Signature Energy with a follow-up Flame Chain Dance, pullin..."
              },
              {
                  "name": "Yellow Orb: Quantum Compression Shot — Ping Yellow Orb",
                  "description": "Nanami: Starfarer fires Quantum Compression Shots with the mecha's left-wrist cannon, dealing Fire DMG via explosion on hit. - Deals 150% / 300% / 500% Fire DMG via explosion on hit."
              },
              {
                  "name": "Blue Orb: Flame Bombing — Ping Blue Orb",
                  "description": "Nanami: Starfarer opens the missile bays on her mecha's shoulders to fire missiles, dealing Fire DMG. - Fires 4 / 8 / 16 with each dealing 40% Fire DMG."
              },
              {
                  "name": "Basic Attack: Mega Sawblade Slash",
                  "description": "Basic Attack — Tap Basic Attack Launches a multiple-hit attack with the Mega Saw to deal Fire DMG. - Deals 350% Fire DMG in total. Basic Attack — Press and hold Basic Attack Press and hold to keep slashing the enemy with the Mega Saw, dealing Fire DMG. - Each hit deals 30% Fire DMG. Ironsoul Slice..."
              },
              {
                  "name": "Signature: Ace Star",
                  "description": "Blade Flash — 80 Energy + Tap Signature When in Normal Form, Nanami: Starfarer casts Blade Flash to use the left-arm flame saw to launch a powerful slash and detonate, dealing Fire DMG and entering the \"Rumbling\" Mode immediately afterward. - Deals 800% Fire DMG in total. Gigabyte Star Strike — \"Ru..."
              },
              {
                  "name": "QTE: Haven-Shaking Power",
                  "description": "Nanami: Starfarer comes down from above and smashes the ground, dealing AOE Fire DMG. - Deals 640% AOE Fire DMG."
              },
              {
                  "name": "Core Passive: Soul of Molten Steel",
                  "description": "Slide Mode — Press and hold Dodge/Cast Quantum Compression Shot / Flame Bombing Press and hold Dodge or cast Quantum Compression Shot / Flame Bombing to trigger Nanami: Starfarer's Slide Mode, during which the above skills can be cast without intervals. \"Bzzz\" Mode — \"Rumbling\" Mode + Cast Ironsoul..."
              },
              {
                  "name": "Leader: Leader - Sagemachina",
                  "description": "Increases Fire DMG of all members by 10%. Increases DMG of all Tank Omniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Implosion",
                  "cub": "Jet Jaeger",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Starfarer."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "Unknown"
              },
              {
                  "label": "Activation",
                  "value": "Unknown"
              },
              {
                  "label": "Height",
                  "value": "145cm"
              },
              {
                  "label": "Weight",
                  "value": "45kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "Unknown"
              },
              {
                  "label": "HP",
                  "value": "2050"
              },
              {
                  "label": "ATK",
                  "value": "403"
              },
              {
                  "label": "DEF",
                  "value": "310"
              },
              {
                  "label": "CRIT",
                  "value": "171"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Nanami%3A_Starfarer"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Nanami%3A_Starfarer"
      },
      {
          "id": "nanami-startrail",
          "name": "Nanami: Startrail",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Startrail-Icon.png",
          "sigil": "NS",
          "role": "Tank",
          "frame": "Startrail",
          "faction": "Church of the Mechanics",
          "class": "Tank",
          "element": "lightning",
          "elements": [
              {
                  "name": "lightning",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Jack-in-the-box",
          "weapon": "Starlight Glare",
          "weaponType": "Shield Axe",
          "cub": {
              "name": "Bramble Angler",
              "notes": ""
          },
          "memory": "Imported from Build:Startrail",
          "bio": "Designed by Nanami herself, this frame features a deep-space specialized protective coating, allowing her to barely withstand the corrosive surface environment of the Red Tide while also possessing exceptional interstellar navigation capabilities.",
          "effect": "Red Orb Combo 1 — Not in Red Orb Combo + Tap Red Orb Startrail performs a spinning slash attack and enters the Red Orb Combo, dealing Lightning DMG and applying a Thunderflare Mark on hit. The Thunderflare Mark explodes after 0.7s, dealing Lightning DMG. If a Thunderflare Mark already exists when t...",
          "priority": "",
          "notes": "Designed by Nanami herself, this frame features a deep-space specialized protective coating, allowing her to barely withstand the corrosive surface environment of the Red Tide while also possessing exceptional interstellar navigation capab...",
          "specialties": [
              {
                  "name": "Resistance Reduction — Able to reduce Lightning and Fire Resistance of enemies. Ignition — Launches the enemy into the Combustible status and Ignites them.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Thunderflare Storm",
                  "description": "Red Orb Combo 1 — Not in Red Orb Combo + Tap Red Orb Startrail performs a spinning slash attack and enters the Red Orb Combo, dealing Lightning DMG and applying a Thunderflare Mark on hit. The Thunderflare Mark explodes after 0.7s, dealing Lightning DMG. If a Thunderflare Mark already exists when t..."
              },
              {
                  "name": "Yellow Orb: Starbeam Deconstruction",
                  "description": "Aetherstrike — Sword Shield in Hand + At Least 50 Starlight Points + Tap Yellow Orb Spins to attack enemies, combining the weapon into a Shield Axe. Gains Super Armor and DMG Reduction during the attack, dealing Lightning DMG and clearing the Blazing Mark. - Deals 950% Lightning DMG and grants Supe..."
              },
              {
                  "name": "Blue Orb: Comet Burst",
                  "description": "Blue Orb Combo 1 — Not in Blue Orb Combo + Tap Blue Orb Startrail performs a sprint attack and enters the Blue Orb Combo, dealing Lightning DMG and applying a Thunderflare Mark on hit. The Thunderflare Mark explodes after 0.7s, dealing Lightning DMG. If a Thunderflare Mark already exists when this..."
              },
              {
                  "name": "Basic Attack: Radiant Surge",
                  "description": "Wandering Starburst — Sword Shield in Hand + Tap Basic Attack Perform alternating attacks with the Sword Shield, dealing a total of 510% Lightning DMG. Thunder Vortex — Shield Axe in Hand + Tap Basic Attack Attacks with the Shield Axe, dealing Lightning DMG. If there are sufficient Starlight Points..."
              },
              {
                  "name": "Signature: Decisive Detonation!",
                  "description": "Cosmic Starstrike — 80 Signature Energy + Sword Shield in Hand + Tap Signature Combines the weapon into a Shield Axe and performs a slash on enemies, dealing damage. During the attack, Time Lag Calculation is triggered, and the weapon automatically switches back to the Sword Shield after the attack..."
              },
              {
                  "name": "QTE: Orbital Interference",
                  "description": "Deals damage and weakens enemies. - Deals 300% Lightning DMG upon the first hit and applies a Turbulence Interference effect that reduces Lightning Resistance by 25% for 8s. Deals 50% Lightning DMG per second for the following 8s. - If the Ember Mark is active when casting this skill, it will inste..."
              },
              {
                  "name": "Core Passive: Astral Armament",
                  "description": "Meteoric Doom — Shield Axe in Hand + At Least 100 points of Overload or Starlight + Press and Hold Basic Attack Consumes all Overload and Starlight Points to cast Meteoric Doom, pulling nearby enemies and triggering Matrix if it is not on cooldown. Becomes Invincible while casting and it is not all..."
              },
              {
                  "name": "Leader: Astral Beacon",
                  "description": "Increases Lightning DMG and Ignition DMG of all members by 10%. Increases DMG of all Tank Omniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Starlight Glare",
                  "cub": "Bramble Angler",
                  "memories": "Imported from Build:Startrail",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Startrail"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "Unknown"
              },
              {
                  "label": "Activation",
                  "value": "Unknown"
              },
              {
                  "label": "Height",
                  "value": "145cm"
              },
              {
                  "label": "Weight",
                  "value": "45kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "Unknown"
              },
              {
                  "label": "HP",
                  "value": "2011"
              },
              {
                  "label": "ATK",
                  "value": "402"
              },
              {
                  "label": "DEF",
                  "value": "316"
              },
              {
                  "label": "CRIT",
                  "value": "171"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Nanami%3A_Startrail"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Nanami%3A_Startrail"
      },
      {
          "id": "nanami-storm",
          "name": "Nanami: Storm",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Storm-Icon.png",
          "sigil": "NS",
          "role": "Tank",
          "frame": "Storm",
          "faction": "Church of the Mechanics",
          "class": "Tank",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "B",
          "gift": "Jack-in-the-box",
          "weapon": "Inverse - Chimera",
          "weaponType": "Saw",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "Fun-loving yet mysterious and elusive, her hobby is observing humans, with a practical joke or two mixed in.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Charges forward and deals Physical DMG to enemies in a rectangular area ahead. - Deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "Fun-loving yet mysterious and elusive, her hobby is observing humans, with a practical joke or two mixed in.",
          "specialties": [
              {
                  "name": "Damage Reduction - Reduces damage taken. Shielding DMG - Shields all damages within the range of Signature Moves.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Sawblade Slash — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Charges forward and deals Physical DMG to enemies in a rectangular area ahead. - Deals 240% / 480% / 720% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Slash Storm — Ping Yellow Orb",
                  "description": "Spins and cuts enemies rapidly, dealing Physical DMG to nearby enemies. - Deals 200% / 400% / 600% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Consciousness Resonance — Ping Blue Orb",
                  "description": "Bursts and pulls enemies, dealing Physical DMG, reducing the targets'DEF, and gaining Physical Resistance. - Deals 100% / 200% / 300% Physical DMG based on the number of orbs pinged. - Reduces the targets'DEF by 10% / 20% / 30% and gains 20% / 40% / 60% Physical Resistance for 4 / 4.5 / 5s based on..."
              },
              {
                  "name": "Basic Attack: Sawblade Strike — Tap Basic Attack",
                  "description": "Launches consecutive attacks with a sawblade, dealing Physical DMG. - Deals 800% Physical DMG in total."
              },
              {
                  "name": "Signature: Signature - Crystal Barrier",
                  "description": "Crystal Barrier — 100 Energy + Tap Signature Sets up an energy to resist attacks from enemies and protect allies within the area. The barrier explodes after 5s, dealing Physical DMG to enemies. - The explosion deals 1000% Physical DMG."
              },
              {
                  "name": "QTE: Nanami Beam",
                  "description": "Nanami: Storm spins and slices the target upon entering the battlefield, dealing Physical DMG while knocking the target down. - Deals 770% Physical DMG in total."
              },
              {
                  "name": "Core Passive: EX - Storm of Cuts",
                  "description": "Core Passive — Any 3 ping + Ping Yellow Orb When pinging a yellow Orb after any 3-Ping, Nanami: Storm will cast EX - Slash Storm to launch consecutive attacks at nearby enemies. - Launch 8 consecutive attacks at nearby enemies, each dealing 100% Physical DMG."
              },
              {
                  "name": "Leader: Leader - Alternation Harmony",
                  "description": "Increase DEF of all members by 15%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Inverse - Chimera",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Storm."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "Unknown"
              },
              {
                  "label": "Activation",
                  "value": "Unknown"
              },
              {
                  "label": "Height",
                  "value": "145cm"
              },
              {
                  "label": "Weight",
                  "value": "45kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "Unknown"
              },
              {
                  "label": "HP",
                  "value": "1247"
              },
              {
                  "label": "ATK",
                  "value": "200"
              },
              {
                  "label": "DEF",
                  "value": "185"
              },
              {
                  "label": "CRIT",
                  "value": "101"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Nanami%3A_Storm"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Nanami%3A_Storm"
      },
      {
          "id": "nirvatia-dirge",
          "name": "Nirvatia: Dirge",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Dirge-Icon.png",
          "sigil": "ND",
          "role": "Amplifier",
          "frame": "Dirge",
          "faction": "ScienceCouncil",
          "class": "Amplifier",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "\"Morigan\" Game Console",
          "weapon": "Obituary for Yesterday",
          "weaponType": "Judgment Scythe",
          "cub": {
              "name": "Morigan",
              "notes": ""
          },
          "memory": "Imported from Build:Dirge",
          "bio": "An Amplifier frame independently developed by the Science Council. Optimized for indoor combat, it features high-efficiency data modules that process and analyze battlefield intel in real time across wide areas.",
          "effect": "Reave: Bloodhunter Form + Tap Red Orb Throws the scythe, pinging Red Orbs to deal Nihil DMG while gaining Omen Points. - Deals 140% / 280% / 420% Nihil DMG and gains 20 / 40/ 60 Omen Points based on the number of orbs pinged. Soulsever: Bloodhunter Form + During Reave + Tap Red Orb Dashes forward t...",
          "priority": "",
          "notes": "An Amplifier frame independently developed by the Science Council. Optimized for indoor combat, it features high-efficiency data modules that process and analyze battlefield intel in real time across wide areas.",
          "specialties": [
              {
                  "name": "Amplification — Grants the power of healing and making allies deal more damage. Disruption — Able to rapidly break the enemy's Equilibirum Field.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Reaper's Judgment",
                  "description": "Reave: Bloodhunter Form + Tap Red Orb Throws the scythe, pinging Red Orbs to deal Nihil DMG while gaining Omen Points. - Deals 140% / 280% / 420% Nihil DMG and gains 20 / 40/ 60 Omen Points based on the number of orbs pinged. Soulsever: Bloodhunter Form + During Reave + Tap Red Orb Dashes forward t..."
              },
              {
                  "name": "Yellow Orb: Void Dirge",
                  "description": "Raven Ritual: 120 Omen Points + Tap Yellow Orb Leaps into the air, drains life energy from surrounding enemies, then slams down to deal AoE Nihil DMG. Gains Super Armor in the process, and triggers Matrix if not on cooldown. - Consumes 120 Omen Points to deal 3000% Nihil DMG while gaining 36 Signat..."
              },
              {
                  "name": "Blue Orb: Burial Rites",
                  "description": "Raven's Memorial: Tap Blue Orb Dashes forward with a slashing attack that splits into a raven's secondary strike, pinging Blue Orbs to deal Nihil DMG while gaining Omen Points. - Deals 60% / 120% / 180% Nihil DMG and gains 20 / 40 / 60 Omen Points based on the number of orbs pinged. Exile Verdict:..."
              },
              {
                  "name": "Basic Attack: Deferred Eulogy",
                  "description": "Basic Attack: Tap Basic Attack Nirvatia: Dirge attacks with her scythe to deal Nihil DMG. - Deals a total of 530% Nihil DMG."
              },
              {
                  "name": "Signature: Death's Kiss",
                  "description": "Fatal Step: 60 Signature Energy + Tap Signature Absorbs heart energy and swings the scythe to deal DMG, triggering Time Lag Calculation. Deals Nihil DMG and enters Bloodhunter Form while clearing all Omen Points. Entering Bloodhunter Form for the first time after switching in Nirvatia grants 5 addi..."
              },
              {
                  "name": "QTE: Ferryman's Covenant",
                  "description": "QTE: Tap QTE Deals DMG and heals allies. - Deals 600% Nihil DMG and heals allies for HP equal to 20% of Nirvatia: Dirge's ATK."
              },
              {
                  "name": "Core Passive: Weary Wayfarer",
                  "description": "Night Severed While in normal form, only Blue Orbs can be used, and basic attacks only generate Blue Orbs. While in Bloodhunter Form, only Red Orbs can be used, and basic attacks only generate Red Orbs - When entering Bloodhunter Form, remaining Blue Orbs will be converted to Red Orbs. - When switc..."
              },
              {
                  "name": "Leader: Enchanting Strike",
                  "description": "Increases Nihil DMG of all members by 10%. Increases Nihil DMG of all Amplifiers in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Obituary for Yesterday",
                  "cub": "Morigan",
                  "memories": "Imported from Build:Dirge",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Dirge"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "0"
              },
              {
                  "label": "Psychological Age",
                  "value": "28"
              },
              {
                  "label": "Activation",
                  "value": "3 Feb"
              },
              {
                  "label": "Height",
                  "value": "172cm"
              },
              {
                  "label": "Weight",
                  "value": "56kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "O"
              },
              {
                  "label": "HP",
                  "value": "2050"
              },
              {
                  "label": "ATK",
                  "value": "394"
              },
              {
                  "label": "DEF",
                  "value": "301"
              },
              {
                  "label": "CRIT",
                  "value": "182"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Nirvatia%3A_Dirge"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Nirvatia%3A_Dirge"
      },
      {
          "id": "no-21-feral",
          "name": "No. 21: Feral",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-XXIFeralScent-Icon.png",
          "sigil": "N2",
          "role": "Amplifier",
          "frame": "Feral",
          "faction": "Cerberus",
          "class": "Amplifier",
          "element": "lightning",
          "elements": [
              {
                  "name": "lightning",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Audiovisual Terminal",
          "weapon": "Mánagarmr",
          "weaponType": "Claws",
          "cub": {
              "name": "Hades Fangs",
              "notes": ""
          },
          "memory": "Imported from Build:Feral",
          "bio": "A new frame designed by Kurono with supervision from the Science Council. Customized to stabilize No. 21's M.I.N.D., it grants a massive increase in battle power while providing M.I.N.D. stability.",
          "effect": "Charges forward and swings her claws, pulling enemies in range and dealing Lightning DMG. — Casting a 3-Ping Skill will trigger a move change and deal more damage. — Deals 180% / 360% / 720% Lightning DMG in total based on the number of orbs pinged.",
          "priority": "",
          "notes": "A new frame designed by Kurono with supervision from the Science Council. Customized to stabilize No. 21's M.I.N.D., it grants a massive increase in battle power while providing M.I.N.D. stability.",
          "specialties": [
              {
                  "name": "Amplification - Enhances teammates. Burst - Deals massive DMG in a short time.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Hunting Path — Ping Red Orb",
                  "description": "Charges forward and swings her claws, pulling enemies in range and dealing Lightning DMG. — Casting a 3-Ping Skill will trigger a move change and deal more damage. — Deals 180% / 360% / 720% Lightning DMG in total based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Feather Thrust— Ping Yellow Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Slides forward and thrusts up, dealing Lightning DMG to the target. — Casting a 3-Ping Skill will trigger a move change and deal more damage. — Deals 170% / 340% / 680% Lightning DMG in total based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Dashing Claws — Ping Blue Orb",
                  "description": "Thrusts forward and deals Lightning DMG to the target. — Casting a 3-Ping Skill will trigger a move change and deal more damage. — Deals 160% / 320% / 640% Lightning DMG based on the number of orbs pinged."
              },
              {
                  "name": "Basic Attack: Bare Fangs",
                  "description": "Quickly swings her claws to perform a multi-hit attack against the target. — Deals 760% Lightning DMG in total."
              },
              {
                  "name": "Signature: Sky-ripping Arcflash",
                  "description": "Signature Move — 110 Energy + Tap Signature Leaps into the air and uses the speed of her fall to smash the target on the ground, dealing Lightning DMG. Time Lag Calculation will be triggered when performing this Signature Move. — Deals 3000% Lightning DMG in total."
              },
              {
                  "name": "QTE: Feral Echo",
                  "description": "No. 21: Feral launches a descending attack on the target, dealing Lightning DMG and restoring HP. — Deals 600% Lightning DMG and heals for HP equal to 100% of her ATK."
              },
              {
                  "name": "Core Passive: Wolfish Twilight",
                  "description": "Fledgling Wings — 3-Ping No. 21: Feral generates a Shield equal to 50% of Max HP for 12s at the cost of 25% of her current HP when casting a 3-Ping Skill. Triggering this again will refresh the duration and increase the Shield value up to 100% of No. 21's Max HP. No. 21 gains Super Armor when havin..."
              },
              {
                  "name": "Leader: Wolf Pack Vanguard",
                  "description": "All members' ATK increases by 10%. All Amplifiers' Lightning DMG increases by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Mánagarmr",
                  "cub": "Hades Fangs",
                  "memories": "Imported from Build:Feral",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Feral"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "2"
              },
              {
                  "label": "Psychological Age",
                  "value": "22"
              },
              {
                  "label": "Activation",
                  "value": "21 Jan"
              },
              {
                  "label": "Height",
                  "value": "154cm"
              },
              {
                  "label": "Weight",
                  "value": "42kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "O"
              },
              {
                  "label": "HP",
                  "value": "1973"
              },
              {
                  "label": "ATK",
                  "value": "410"
              },
              {
                  "label": "DEF",
                  "value": "293"
              },
              {
                  "label": "CRIT",
                  "value": "188"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/No._21%3A_Feral"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/No._21%3A_Feral"
      },
      {
          "id": "no-21-xxi",
          "name": "No. 21: XXI",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-XXI-Icon.png",
          "sigil": "N2",
          "role": "Tank",
          "frame": "XXI",
          "faction": "Cerberus",
          "class": "Tank",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "20"
              },
              {
                  "name": "dark",
                  "percent": "80"
              }
          ],
          "rank": "A",
          "gift": "Audiovisual Terminal",
          "weapon": "Snore",
          "weaponType": "Collab Bot",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:XXI",
          "bio": "Originally a subject of a Daedalus corporation experiment, she was retrieved during a mission conducted by Kurono. Later, she was transferred to Babylonia's Task Force with Vera. She is gloomy and seemingly expresionless in appearance. However, she becomes exceptionally vicious and dangerous under extreme circumstances.",
          "effect": "Red Orb — Ping Red Orb Automatically uses a 3-Ping version of this attack upon switch-in. Leaps into the air and expands a Duskglow Realm on the target's location. It pulls enemies in a large area once and then continues pulling the enemies within the realm, deaing Physical DMG (Dark DMG instead on...",
          "priority": "",
          "notes": "Originally a subject of a Daedalus corporation experiment, she was retrieved during a mission conducted by Kurono. Later, she was transferred to Babylonia's Task Force with Vera. She is gloomy and seemingly expresionless in appearance. How...",
          "specialties": [
              {
                  "name": "Burst — A signature move that can deal massive DMG Forced Evasion — Can remove abnormal status effects when in Haywire status",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Nightfall Realm",
                  "description": "Red Orb — Ping Red Orb Automatically uses a 3-Ping version of this attack upon switch-in. Leaps into the air and expands a Duskglow Realm on the target's location. It pulls enemies in a large area once and then continues pulling the enemies within the realm, deaing Physical DMG (Dark DMG instead on..."
              },
              {
                  "name": "Yellow Orb: Dusk Bladewheel — Ping Yellow Orb",
                  "description": "Leaps in the direction of the joystick and releases a Dusk Bladewheel that deals Physical DMG (Dark DMG instead on a 3-Ping), and No. 21: XXI will stay in the air briefly, during which an Instant Dodge will release 3 Twilight Matrices on the target's location. - Deals 140% / 280% / 420% Physical DM..."
              },
              {
                  "name": "Blue Orb: Cluster Recursion",
                  "description": "Blue Orb — Ping Blue Orb Enters the Hyperposition state and copies the following Basic Attacks and Shadow Prism Attacks. The effect does not stack. - Copies the following 1 / 2 / 4 Basic Attacks and Shadow Prism Attacks based on the number of orbs pinged. Blue Orb — Co-Bot + Ping Blue Orb Co-Bot: I..."
              },
              {
                  "name": "Basic Attack: Prism Barrage",
                  "description": "Basic Attack — Tap Basic Attack Attacks with laser beams to deal Physical DMG. - Deals 348% Physical DMG in total. Basic Attack — Co-Bot + Tap Basic Attack Co-Bot: Automatically attacks the current target, dealing Physical DMG. The Co-Bot always stays on the field. - Deals 20% Physical DMG in total."
              },
              {
                  "name": "Signature: Shadow Prism Collapse",
                  "description": "Signature Move — 120 Energy + Tap Signature + Quickly ping Blue Orb + Quickly tap Basic Attack Casts an Enhanced Duskglow Realm on the target's location and enters Quick Attack mode. Spends all Signal Orbs and Shadow Prism Energy to get unlimited Blue Orbs and extreme attack speed for 3s. When Quic..."
              },
              {
                  "name": "QTE: Twilight Shackles",
                  "description": "Expands a Duskglow Realm on the target's location to deal Dark DMG, creates 3 Twilight Matrices, and triggers a realm collapse. - Deals 200% Dark DMG."
              },
              {
                  "name": "Core Passive: Shadow Prism Agglomerate",
                  "description": "Shadow Prism Attack — Tap Basic Attack consecutively No. 21: XXI's Basic Attack will generate Shadow Prism Energy. Upon reaching a certain level of Shadow Prism Energy, the next Basic Attack will empty all Shadow Prism Energy to cast a Shadow Prism Attack and create 1 Twilight Matrix on the targets..."
              },
              {
                  "name": "Leader: Faded Camouflage",
                  "description": "Dodge Gauge limit and Extra DMG Bonus of team members increase by 250 and 5% respectively."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Snore",
                  "cub": "",
                  "memories": "Imported from Build:XXI",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:XXI"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "2"
              },
              {
                  "label": "Psychological Age",
                  "value": "22"
              },
              {
                  "label": "Activation",
                  "value": "21 Jan"
              },
              {
                  "label": "Height",
                  "value": "154cm"
              },
              {
                  "label": "Weight",
                  "value": "42kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "O"
              },
              {
                  "label": "HP",
                  "value": "1560"
              },
              {
                  "label": "ATK",
                  "value": "294"
              },
              {
                  "label": "DEF",
                  "value": "232"
              },
              {
                  "label": "CRIT",
                  "value": "138"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/No.21%3A_XXI"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/No.21%3A_XXI"
      },
      {
          "id": "noan-arca",
          "name": "Noan: Arca",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Arca-Icon.png",
          "sigil": "NA",
          "role": "Vanguard",
          "frame": "Arca",
          "faction": "Argali",
          "class": "Vanguard",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "10"
              },
              {
                  "name": "lightning",
                  "percent": "90"
              }
          ],
          "rank": "S",
          "gift": "Pen and Notebook",
          "weapon": "Prometheus",
          "weaponType": "Expulsion Blade (T)",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "The frame that “he” made to save Noan. Initially weighing only 41.3 kg, it was built with many degraded components in order to reduce the user’s movement. Its normal functionality has been ensured after undergoing Babylonia’s improvements.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Rapidly charges forward while performing a spinning attack, dealing Physical DMG (Lightning DMG instead on a 3-Ping). - Deals 300% / 600% / 900% Physical DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "The frame that “he” made to save Noan. Initially weighing only 41.3 kg, it was built with many degraded components in order to reduce the user’s movement. Its normal functionality has been ensured after undergoing Babylonia’s improvements.",
          "specialties": [
              {
                  "name": "Combo — Continuously trigger core passive to deal high damage. Burst — Can deal large amounts of damage quickly.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Cyclone Downburst — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Rapidly charges forward while performing a spinning attack, dealing Physical DMG (Lightning DMG instead on a 3-Ping). - Deals 300% / 600% / 900% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Laws of Magnetic Storm — Ping Yellow Orb",
                  "description": "Leaps backward and flings a magnetic storm generator, dealing Physical DMG (Lightning DMG instead on a 3-Ping) and pulling in nearby enemies when the magnetic field contracts. - Deals 300% / 600% / 900% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Sparkle Night Thunderclap — Ping Blue Orb",
                  "description": "Swings across the ground with Rev Blade, causing an energy explosion and generating several plasma torrents along its path that deal Physical DMG (Lightning DMG instead on a 3-Ping). - Deals 300% / 600% / 900% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Basic Attack: Musou Blades — Tap Basic Attack",
                  "description": "Delivers a barrage of slashes with Rev Blade, dealing Physical DMG. - Deals 660% Physical DMG in total."
              },
              {
                  "name": "Signature: End of Night",
                  "description": "Signature Move — 80 Energy + Tap Signature Noan: Arca advances swiftly and comes to an abrupt halt, unleashing all the energy in Rev Blade to perform a powerful strike. End of Night deals Lightning DMG. - Deals 3200% Lightning DMG in total."
              },
              {
                  "name": "QTE: Photon Firefly",
                  "description": "Plunges from the air and slashes enemies at high speed, dealing Lightning DMG to enemies within range. - Deals 900% Lightning DMG in total."
              },
              {
                  "name": "Core Passive: Rising Key",
                  "description": "Charge Engine — Any 3-Ping + Tap Basic Attack repeatedly After casting a 3-Ping, tap Basic Attack repeatedly to charge up the Rising Engine. When the tapping stops or goes over a certain period of time, Noan: Arca will perform Gear-Break Combo based on the color of Signal Orbs pinged, and its DMG w..."
              },
              {
                  "name": "Leader: Aurora Traveler",
                  "description": "Increases Lightning DMG of all members by 10%. Increases ATK of all Vanguard Uniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Prometheus",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Arca."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "0"
              },
              {
                  "label": "Psychological Age",
                  "value": "21"
              },
              {
                  "label": "Activation",
                  "value": "8 Aug"
              },
              {
                  "label": "Height",
                  "value": "182cm"
              },
              {
                  "label": "Weight",
                  "value": "69kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "A"
              },
              {
                  "label": "HP",
                  "value": "1973"
              },
              {
                  "label": "ATK",
                  "value": "429"
              },
              {
                  "label": "DEF",
                  "value": "301"
              },
              {
                  "label": "CRIT",
                  "value": "171"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Noan%3A_Arca"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Noan%3A_Arca"
      },
      {
          "id": "noctis-indomitus",
          "name": "Noctis: Indomitus",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Indomitus-Icon.png",
          "sigil": "NI",
          "role": "Attacker",
          "frame": "Indomitus",
          "faction": "Cerberus",
          "class": "DPS",
          "element": "lightning",
          "elements": [
              {
                  "name": "lightning",
                  "percent": "100"
              }
          ],
          "rank": "A",
          "gift": "Ironclad Boxing Gloves",
          "weapon": "Crimson Howl",
          "weaponType": "Mechanical Arm",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "One of the Cerberus members. He was forced to leave the Purifying Force due to a mysterious conspiracy, but has now become a sharp fang of the three-headed hound.",
          "effect": "Dashes in and throws a punch to knock the target into mid-air, dealing Lightning DMG. - Deals 120% / 240% / 380% Lightning DMG in total based on the number of orbs pinged. Lightning Smash: Thunder Burst Form + During a Red Orb 3-Ping + Press and hold Basic Attack Leaps up in a follow-up and strikes...",
          "priority": "",
          "notes": "One of the Cerberus members. He was forced to leave the Purifying Force due to a mysterious conspiracy, but has now become a sharp fang of the three-headed hound.",
          "specialties": [
              {
                  "name": "Combo — Deals massive DMG by activating Core Passive repeatedly. Burst — Signature Move can deal massive DMG.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Reddening Flash — Ping Red Orb",
                  "description": "Dashes in and throws a punch to knock the target into mid-air, dealing Lightning DMG. - Deals 120% / 240% / 380% Lightning DMG in total based on the number of orbs pinged. Lightning Smash: Thunder Burst Form + During a Red Orb 3-Ping + Press and hold Basic Attack Leaps up in a follow-up and strikes..."
              },
              {
                  "name": "Yellow Orb: Bursting Plunge— Ping Yellow Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Leaps up and thrusts forward before striking down, dealing Lightning DMG to the target in front. - Deals 120%/240%/360% Lightning DMG in total based on the number of orbs pinged. Lightning Punch: Thunder Burst Form + During a Yellow..."
              },
              {
                  "name": "Blue Orb: Shattering Kick — Ping Blue Orb",
                  "description": "Kicks forward twice, dealing Lightning DMG to the target in front. - Deals 110%/220%/340% Lightning DMG in total based on the number of orbs pinged. Lightning Sweep: Thunder Burst Form + During a Blue Orb 3-Ping + Press and hold Basic Attack Performs a sliding strike at the target in a follow-up, d..."
              },
              {
                  "name": "Basic Attack: Engine Vortex",
                  "description": "Basic Attack: Tap Basic Attack Noctis strikes the target multiple times with martial arts, dealing Lightning DMG. - Deals 820% Lightning DMG in total. Revving Charge: Press and hold Basic Attack to charge Press and hold Basic Attack to charge and gain Energy. Getting attacked while charging will tr..."
              },
              {
                  "name": "Signature: Magnetic Blast",
                  "description": "Signature Move: 120 Energy + Tap Signature Throws out an explosive grenade that deals Lightning DMG to the targets within range, then enters Thunder Burst Form for 10s. Press and hold Basic Attack when Noctis performs any 3-Ping Skill in the Thunder Burst Form to execute a follow-up attack, casting..."
              },
              {
                  "name": "QTE: Swift Blow",
                  "description": "Punches the target that knocks them airborne, dealing Lightning DMG. -Deals a total of 600% Lightning DMG."
              },
              {
                  "name": "Core Passive: Powered Roar",
                  "description": "Impact Nullification: Tap Dodge Noctis enters a defense stance and can dodge attacks in this state. Dodging successfully will trigger Arm Block. When performing a precise dodge, Noctis will trigger Perfect Arm Block to counterattack. - Restores 60 Energy after triggering Arm Block. - Restores 120 E..."
              },
              {
                  "name": "Leader: Thrill of Violence",
                  "description": "Lightning DMG of all team members increases by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Crimson Howl",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Indomitus."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "???"
              },
              {
                  "label": "Psychological Age",
                  "value": "24"
              },
              {
                  "label": "Activation",
                  "value": "25 Mar"
              },
              {
                  "label": "Height",
                  "value": "183cm"
              },
              {
                  "label": "Weight",
                  "value": "80kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "B"
              },
              {
                  "label": "HP",
                  "value": "1469"
              },
              {
                  "label": "ATK",
                  "value": "312"
              },
              {
                  "label": "DEF",
                  "value": "222"
              },
              {
                  "label": "CRIT",
                  "value": "137"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Noctis%3A_Indomitus"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Noctis%3A_Indomitus"
      },
      {
          "id": "pulao-dragontoll",
          "name": "Pulao: Dragontoll",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-OrnateBell-Icon.png",
          "sigil": "PD",
          "role": "Vanguard",
          "frame": "Dragontoll",
          "faction": "Kowloong",
          "class": "Vanguard",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Panda Coin Purse",
          "weapon": "Infinity",
          "weaponType": "Dragon Maelstrom (T)",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "The frame of Pulao, one of the Dragon Children, is not made from conventional components but has been carefully adapted to fit her M.I.N.D., allowing her to make the most of her unusually strong powers.",
          "effect": "Red Orb — Ping Red Orb Automatically uses a 3-Ping version of this attack upon switch-in. Casts a roundhouse kick that deals Physical DMG. Gains Super Armor upon a 3-Ping. - Deals 230% / 460% / 690% Physical DMG based on the number of orbs pinged. Dragon Force: Breaking Kick — 25 or more Dragon For...",
          "priority": "",
          "notes": "The frame of Pulao, one of the Dragon Children, is not made from conventional components but has been carefully adapted to fit her M.I.N.D., allowing her to make the most of her unusually strong powers.",
          "specialties": [
              {
                  "name": "Summon — Uses her Signature Move to summon her weapon Burst — Deals massive DMG with Core Passive Follow-Up",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Magpie Cut",
                  "description": "Red Orb — Ping Red Orb Automatically uses a 3-Ping version of this attack upon switch-in. Casts a roundhouse kick that deals Physical DMG. Gains Super Armor upon a 3-Ping. - Deals 230% / 460% / 690% Physical DMG based on the number of orbs pinged. Dragon Force: Breaking Kick — 25 or more Dragon For..."
              },
              {
                  "name": "Yellow Orb: Dragon Impact",
                  "description": "Yellow Orb — Ping Red Orb Pulls in enemies in a large area and strikes them with Qi force, dealing Physical DMG and freezing them. Gains Super Armor upon a 3-Ping. - Deals 220% / 440% / 660% Physical DMG based on the number of orbs pinged. - Freezes enemies for 0.5s. Dragon Force: Black Dragon Stri..."
              },
              {
                  "name": "Blue Orb: Abyss Kick",
                  "description": "Blue Orb — Ping Blue Orb Performs kicking strikes that deal Physical DMG. Gains Super Armor upon a 3-Ping. - Deals 220% / 440% / 660% Physical DMG based on the number of orbs pinged. Dragon Force: Downward Cleave — 25 or more Dragon Force + Ping Blue Orb and catch Dragon Axe Catching Dragon Axe wil..."
              },
              {
                  "name": "Basic Attack: Dragon Strike — Tap Basic Attack",
                  "description": "Performs kicking and palm strikes with Qi force, dealing Physical DMG. - Deals 860% Physical DMG in total."
              },
              {
                  "name": "Signature: Spirit Blade Dance",
                  "description": "Spirit Blade — Dragon Throw: 20 Energy + Tap Signature Casts Spirit Blade: Dragon Throw, throwing Dragon Axe and dealing DMG to enemies in its path. - Deals 400% Physical DMG. Spirit Blade: Falling Stars — Dragon Axe present + 100 Energy + Press and hold Signature Press and hold the Signature butto..."
              },
              {
                  "name": "QTE: Blade Summon",
                  "description": "QTE — Dragon Axe present + Tap QTE When Dragon Axe is on the field, orders Dragon Axe to deal Physical DMG. - Deals 640% Physical DMG. QTE — Tap QTE When Dragon Axe is not on the field, summons Dragon Axe to deal Physical DMG. - Deals 640% Physical DMG."
              },
              {
                  "name": "Core Passive: Snow Dragon",
                  "description": "Core Passive — Whenever catching Dragon Axe Whenever Pulao: Dragontoll catches Dragon Axe, she will throw it again, dealing the same effect as Spirit Blade: Dragon Throw. Core Passive — Tap Basic Attack / Ping any orb Basic Attacks or pinging orbs will generate Dragon Force. - Basic Attacks generat..."
              },
              {
                  "name": "Leader: Child of Kowloong",
                  "description": "Increases Physical DMG of all members by 5%. Increases ATK of all Vanguard Uniframes in the team by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Infinity",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Dragontoll."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "0"
              },
              {
                  "label": "Psychological Age",
                  "value": "14"
              },
              {
                  "label": "Activation",
                  "value": "15 August"
              },
              {
                  "label": "Height",
                  "value": "140cm"
              },
              {
                  "label": "Weight",
                  "value": "32kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "A"
              },
              {
                  "label": "HP",
                  "value": "1915"
              },
              {
                  "label": "ATK",
                  "value": "422"
              },
              {
                  "label": "DEF",
                  "value": "273"
              },
              {
                  "label": "CRIT",
                  "value": "201"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Pulao%3A_Dragontoll"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Pulao%3A_Dragontoll"
      },
      {
          "id": "qu-pavo",
          "name": "Qu: Pavo",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Pavo-Icon.png",
          "sigil": "QP",
          "role": "Vanguard",
          "frame": "Pavo",
          "faction": "Kowloong",
          "class": "Vanguard",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Antique Book",
          "weapon": "Qinghe",
          "weaponType": "Transcendant Glaive",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "A Transcendant and the last head of Kowloong. After the Battle of Kowloong, she has gone into hiding and continued with her ambition to achieve the Tabula Akasha.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Leaps up and cleaves downward with the weapon in hand, dealing Physical DMG. Enemies hit by the shockwave emitted from the strike take Physical DMG. Gains Super Armor while using this skill. - The leap strike deals 80% / 160% / 240%...",
          "priority": "",
          "notes": "A Transcendant and the last head of Kowloong. After the Battle of Kowloong, she has gone into hiding and continued with her ambition to achieve the Tabula Akasha.",
          "specialties": [
              {
                  "name": "Melee - Deals Extra DMG when Core Passive is activated Summon - Summons a Pet to attack when using a Signature Move",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Sky-Breaking Cleave — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Leaps up and cleaves downward with the weapon in hand, dealing Physical DMG. Enemies hit by the shockwave emitted from the strike take Physical DMG. Gains Super Armor while using this skill. - The leap strike deals 80% / 160% / 240%..."
              },
              {
                  "name": "Yellow Orb: Warhoof Sprint — Ping Yellow Orb",
                  "description": "Performs a 3-hit strike when approaching the target, dealing Physical DMG. When Qu: Pavo is far away from the target or no targets are locked-on, she will sprint at high speed, during which if tapping a Basic Attack button, or when the sprint ends, she will launch a 3-hit strike to the nearest targ..."
              },
              {
                  "name": "Blue Orb: Sweeping Tempest — Ping Blue Orb",
                  "description": "Swipes the enemies twice with the weapon, dealing Physical DMG and gaining Super Armor. This skill can interrupt enemy attacks as long as Qu: Pavo is not knocked down. - Deals 260% / 520% / 780% Physical DMG in total based on the number of orbs pinged. - Super Armor lasts 3s."
              },
              {
                  "name": "Basic Attack: Lancemanship — Tap Basic Attack",
                  "description": "Launches consecutive attacks with a Glaive, dealing Physical DMG. - Deals 750% Physical DMG in total."
              },
              {
                  "name": "Signature: Signature - Dragon's Wrath",
                  "description": "Signature Move — 100 Energy + Tap Signature Calls upon Huiyu to perform a combination attack that deals Physical DMG and grants Sync Rate. Qu: Pavo enters the Concentrated Will State, and Huiyu will attack enemies (prioritizing locked-on targets) continuously to deal Physical DMG. The Signature Mov..."
              },
              {
                  "name": "QTE: Blazing Dragon",
                  "description": "Appears in the air and unleashes 2 quick shockwaves in the target's direction, dealing Physical DMG. Deals 640% Physical DMG in total."
              },
              {
                  "name": "Core Passive: Concentrated Will",
                  "description": "Core Passive — Ping any Orb Gains Sync Rate from pinging orbs. When the Sync Rate is at maximum, Signal Orbs are enhanced, and Qu: Pavo enters the Concentrated Will State once an orb is pinged. - Every 1 orb pinged grants 10 Sync Rate, up to 60. Core Passive — Concentrated Will State In the Concent..."
              },
              {
                  "name": "Leader: Leader - Baptism of War",
                  "description": "Increases Physical DMG of all members by 10%. Increases ATK of all Vanguard Uniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Qinghe",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Pavo."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "0"
              },
              {
                  "label": "Psychological Age",
                  "value": "18"
              },
              {
                  "label": "Activation",
                  "value": "3 Jan"
              },
              {
                  "label": "Height",
                  "value": "162cm"
              },
              {
                  "label": "Weight",
                  "value": "43kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "AB"
              },
              {
                  "label": "HP",
                  "value": "1915"
              },
              {
                  "label": "ATK",
                  "value": "409"
              },
              {
                  "label": "DEF",
                  "value": "288"
              },
              {
                  "label": "CRIT",
                  "value": "197"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Qu%3A_Pavo"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Qu%3A_Pavo"
      },
      {
          "id": "qu-shukra",
          "name": "Qu: Shukra",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Shukra-Icon.png",
          "sigil": "QS",
          "role": "Attacker",
          "frame": "Shukra",
          "faction": "Kowloong",
          "class": "DPS",
          "element": "ice",
          "elements": [
              {
                  "name": "ice",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Antique Book",
          "weapon": "Akasha Keyblade",
          "weaponType": "Longsword",
          "cub": {
              "name": "Huiyu",
              "notes": ""
          },
          "memory": "",
          "bio": "A frame reforged by Tabula Akasha through life and death even with the Transcendant's Punishing Virus removed. Its principle and structure remain unknown.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Thrusts toward the target and deals Ice DMG. - Deals 180% / 360% / 540% Ice DMG in total based on the number of orbs pinged.",
          "priority": "ATK increases by 10%. Upon activating Into the Fray, triggers Matrix if it is not in cooldown and grants a bonus Inscription. When casting Mountain Caller, each attack grants 3 extra Signature Energy.",
          "notes": "A frame reforged by Tabula Akasha through life and death even with the Transcendant's Punishing Virus removed. Its principle and structure remain unknown.",
          "specialties": [
              {
                  "name": "Burst — Deals massive DMG in a short time. Sustained Damage — Has a certain level of endurance.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Approach — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Thrusts toward the target and deals Ice DMG. - Deals 180% / 360% / 540% Ice DMG in total based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Adjudicate — Ping Yellow Orb",
                  "description": "Leaps and spins, striking the surrounding targets and dealing Ice DMG. - Deals 150% / 360% / 450% Ice DMG in total based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Asunder — Ping Blue Orb",
                  "description": "Leaps backward and unleashes a swordwave, dealing Ice DMG. - Deals 180% / 360% / 540% Ice DMG in total based on the number of orbs pinged."
              },
              {
                  "name": "Basic Attack: Tabula Akasha",
                  "description": "Tabula Akasha - Scribe — Tap Basic Attack Strikes the enemy with her Longsword, dealing Ice DMG. - Deals 670% Ice DMG in total. Tabula Akasha - Engrave — Into the Fray + Any 3-Ping + Tap Basic Attack Performs an extra hit of follow-up attack, dealing Ice DMG. Gains Signature Energy and extends the..."
              },
              {
                  "name": "Signature: Stance of Serpent and Songbird",
                  "description": "Enlightened Soul — 70 Energy + Tap Signature Begins Enthronement, dealing Ice DMG to units in a large surrounding area continuously. Briefly triggers Time Lag Calculation during so. Meanwhile, each Glyph is converted into a set of 3-Ping placed at the front of the row. During Enthronement, pinging..."
              },
              {
                  "name": "QTE: Blinding Wings",
                  "description": "Unleashes a powerful strike, dealing Ice DMG. - Deals 600% Ice DMG in total."
              },
              {
                  "name": "Core Passive: Blade of History",
                  "description": "Whisper Breaker — Any 3 Ping + Any Orb Ping After a 3-Ping, pings any Signal Orb immediately to cast Tabula Akasha - Engrave and summons Huiyu to attack the target, gaining Super Armor and 70% DMG Reduction, rearranging Signal Orbs into 3-Ping sets, entering Into the Fray, and gaining 1 Inscription..."
              },
              {
                  "name": "Leader: Eternal Wisdom",
                  "description": "Increases Ice DMG of all members by 10%. Increases ATK of all Attackers in the team by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Akasha Keyblade",
                  "cub": "Huiyu",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Shukra."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "18"
              },
              {
                  "label": "Activation",
                  "value": "3 Jan"
              },
              {
                  "label": "Height",
                  "value": "162cm"
              },
              {
                  "label": "Weight",
                  "value": "43kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "AB"
              },
              {
                  "label": "HP",
                  "value": "1935"
              },
              {
                  "label": "ATK",
                  "value": "429"
              },
              {
                  "label": "DEF",
                  "value": "293"
              },
              {
                  "label": "CRIT",
                  "value": "182"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Qu%3A_Shukra"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Qu%3A_Shukra"
      },
      {
          "id": "roland-flambeau",
          "name": "Roland: Flambeau",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Flambeau-Icon.png",
          "sigil": "RF",
          "role": "Vanguard",
          "frame": "Flambeau",
          "faction": "Unidentified",
          "class": "Vanguard",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "20"
              },
              {
                  "name": "fire",
                  "percent": "80"
              }
          ],
          "rank": "S",
          "gift": "Marionette",
          "weapon": "Durendal",
          "weaponType": "Chain Blade (T)",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "A former performer in the Golden Age who is sarcastic on the outside yet serious on the inside. Participated in a lot of actions as an Ascendant. Reformed into the current frame by an agent due to huge damage done to the old frame after a few number of setbacks.",
          "effect": "Red Orb 1st Hit — Tap Red Orb Quickly slashes and swipes, dealing Fire DMG. - Deals 300% Fire DMG. Red Orb 2nd Hit — Before Red Orb 1st hit ends + At least 30 Deception Points + Tap Red Orb Spins and swipes twice, dealing Fire DMG. - Deals 600% Fire DMG. Red Orb — Apex of Trickery state + Tap Red O...",
          "priority": "",
          "notes": "A former performer in the Golden Age who is sarcastic on the outside yet serious on the inside. Participated in a lot of actions as an Ascendant. Reformed into the current frame by an agent due to huge damage done to the old frame after a...",
          "specialties": [
              {
                  "name": "Combo — Can deal various combos Form Switch — Can switch Attack Modes for Signatures Moves",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Swirling Flames",
                  "description": "Red Orb 1st Hit — Tap Red Orb Quickly slashes and swipes, dealing Fire DMG. - Deals 300% Fire DMG. Red Orb 2nd Hit — Before Red Orb 1st hit ends + At least 30 Deception Points + Tap Red Orb Spins and swipes twice, dealing Fire DMG. - Deals 600% Fire DMG. Red Orb — Apex of Trickery state + Tap Red O..."
              },
              {
                  "name": "Yellow Orb: Smoldering Kick",
                  "description": "Yellow Orb 1st Hit — Tap Yellow Orb Automatically uses this attack upon switch-in. Dashes forward and hits the target with knee, dealing Fire DMG. Gains Super Armor while casting this move. - Deals 400% Fire DMG. Yellow Orb 2nd Hit — Before Yellow Orb 1st hit ends + At least 30 Deception Points + T..."
              },
              {
                  "name": "Blue Orb: Hot Pursuit",
                  "description": "Blue Orb 1st Hit — Tap Blue Orb Launches an incendiary bomb that explodes upon hitting the target, dealing AOE Fire DMG. - Deals 360% Fire DMG. Blue Orb 2nd Hit — Before Blue Orb 1st hit ends + At least 30 Deception Points + Tap Blue Orb Shoots an enhanced incendiary bomb that explodes upon impact..."
              },
              {
                  "name": "Basic Attack: Deceptive Performance",
                  "description": "Basic Attack — Tap Basic Attack Launches multiple attacks using the Chain Blade, dealing Physical DMG. Tap the white Signal Orb before the end of the 2nd / 3rd / 4th hit to connect with combo 1 / 2 / 3. - Deals 570% Physical DMG in total. Combo 1 - Frenzied Dance — Before the end of the 2nd hit of..."
              },
              {
                  "name": "Signature: Apex of Trickery",
                  "description": "Signature Move — 100 Energy + Tap Signature Launches multiple area attacks with the Chain Blade to deal Fire DMG and enter the Apex of Trickery state, gaining Trickery Points and Incinerating Orb. - Deals 1600% Fire DMG in total. - Enters the Apex of Trickery state, gaining 150 Trickery Points and..."
              },
              {
                  "name": "QTE: Astounding Fireworks",
                  "description": "Hangs on the Chain Blade and swings across the battlefield, launching 4 incendiary bombs toward the ground that deal Fire DMG. - Deals 640% Fire DMG in total."
              },
              {
                  "name": "Core Passive: Art of Deception",
                  "description": "Core Passive — Trigger valid combos The Basic Attack combo DMG ratio is adjusted. Gains Deception Points based on the combo type upon triggering valid combos. Roland's Red / Yellow / Blue Orbs are unlocked when there are a certain amount of Deception Points. Each time the 1st or 2nd hit of a Signal..."
              },
              {
                  "name": "Leader: Grinning Trickster",
                  "description": "Increases Fire DMG of all members by 10%. Increases ATK of all Vanguard Uniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Durendal",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Flambeau."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "19"
              },
              {
                  "label": "Activation",
                  "value": "2 May"
              },
              {
                  "label": "Height",
                  "value": "178cm"
              },
              {
                  "label": "Weight",
                  "value": "70kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "AB"
              },
              {
                  "label": "HP",
                  "value": "1896"
              },
              {
                  "label": "ATK",
                  "value": "429"
              },
              {
                  "label": "DEF",
                  "value": "284"
              },
              {
                  "label": "CRIT",
                  "value": "191"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Roland%3A_Flambeau"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Roland%3A_Flambeau"
      },
      {
          "id": "rosetta-arete",
          "name": "Rosetta: Arete",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Arete-Icon.png",
          "sigil": "RA",
          "role": "Breaker",
          "frame": "Arete",
          "faction": "ARU",
          "class": "DPS",
          "element": "dark",
          "elements": [
              {
                  "name": "dark",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Weather Glass",
          "weapon": "Mirage Halberd: Amalga",
          "weaponType": "Radiant Halberd",
          "cub": {
              "name": "Buzzling",
              "notes": ""
          },
          "memory": "Imported from Build:Arete",
          "bio": "The ultimate Amalgamator, codenamed \"Malkuth.\" Full activation requires an Amalgamation array built with mechanical units such as bionic whales. The frame can freely switch between human and centaur forms to deliver attacks beyond power limits.",
          "effect": "Crushing Supremacy: Forest Guard Mimic + Crusher Module + Tap Red Orb Fires a laser, pinging White Signal Orbs to deal DMG and enter Crushing Supremacy combo. - Pings 0/1 White Signal Orb to deal 200% / 1000% Dark DMG and gain 0/20 Light Links and 0/4 Signature Energy. - When the team carries Ultim...",
          "priority": "",
          "notes": "The ultimate Amalgamator, codenamed \"Malkuth.\" Full activation requires an Amalgamation array built with mechanical units such as bionic whales. The frame can freely switch between human and centaur forms to deliver attacks beyond power li...",
          "specialties": [
              {
                  "name": "Resistance Reduction — Able to reduce the Dark Resistance of enemies. Ultima Slash — Skills can trigger the Ultima Slash Effect.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Sinful Peak — Red Orb",
                  "description": "Crushing Supremacy: Forest Guard Mimic + Crusher Module + Tap Red Orb Fires a laser, pinging White Signal Orbs to deal DMG and enter Crushing Supremacy combo. - Pings 0/1 White Signal Orb to deal 200% / 1000% Dark DMG and gain 0/20 Light Links and 0/4 Signature Energy. - When the team carries Ultim..."
              },
              {
                  "name": "Yellow Orb: Cursed Edge — Yellow Orb",
                  "description": "Phantom Descent: Forest Guard Mimic + Breacher Module + Tap Yellow Orb Dashes forward then backflips into the air, pinging White Signal Orbs to deal DMG and enter Phantom Descent combo. - Pings 0 / 1 White Signal Orb to deal 200% / 1000% Dark DMG and gain 0 / 20 Light Links and 0 / 4 Signature Ener..."
              },
              {
                  "name": "Blue Orb: Night Vanguard — Blue Orb",
                  "description": "Withering Tempo: Forest Guard Mimic + Piercer Module + Tap Blue Orb Dashes forward and thrusts the weapon, pinging White Signal Orbs to deal DMG and enter Withering Tempo combo. - Pings 0 / 1 White Signal Orb to deal 200% / 1000% Dark DMG and gain 0 / 20 Light Links and 0 / 4 Signature Energy. - Wh..."
              },
              {
                  "name": "Basic Attack: Twin Order",
                  "description": "Sanction Swing: Forest Guard Mimic + Tap Basic Attack When Arete is in Forest Guard Mimic, Basic Attacks deal a total of 260% Dark DMG. - When the team carries Ultima Slash effect, deals 130% Ultima Slash DMG instead. Iron Gallop: Nessos Mimic + Tap Basic Attack When Arete is in Nessos Mimic, Basic..."
              },
              {
                  "name": "Signature: Omniversal Step",
                  "description": "Omniversal Step: 100 Signature Energy + Tap Signature Charges forward with her halberd to deliver a finishing blow against enemies, dealing DMG and triggering Time Lag Calculation in the process. - When the team does not carry Ultima Slash Effect, deals 16000% Dark DMG. She then deploys a field tha..."
              },
              {
                  "name": "QTE: Sovereign Domain",
                  "description": "QTE: Tap QTE Deals DMG and weakens the enemy. - Initially deals 300% Dark DMG and applies Chain Fusion that reduces the enemy's Dark Resistance by 25% for 8s. Then deals 50% Dark DMG every second for 8s. - When the team carries Ultima Slash effect, deals 600% Ultima Slash DMG instead."
              },
              {
                  "name": "Core Passive: Battle Intent",
                  "description": "Mimicry Armor Arete can only use White Signal Orbs. Basic Attacks in Forest Guard Mimic and Nessos Mimic only generate White Signal Orbs. - When Arete is in Forest Guard Mimic or Nessos Mimic, tap Red Orb to switch to Crusher Module or press and hold Red Orb to directly cast the 2nd hit and switch..."
              },
              {
                  "name": "Leader: Amalgamation Burst",
                  "description": "Increases Dark and Ultima Slash damage of all members by 10%. Increases DMG of all Breaker Omniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Mirage Halberd: Amalga",
                  "cub": "Buzzling",
                  "memories": "Imported from Build:Arete",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Arete"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "0"
              },
              {
                  "label": "Psychological Age",
                  "value": "18"
              },
              {
                  "label": "Activation",
                  "value": "25 Dec"
              },
              {
                  "label": "Height",
                  "value": "177cm"
              },
              {
                  "label": "Weight",
                  "value": "65kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "A"
              },
              {
                  "label": "HP",
                  "value": "1915"
              },
              {
                  "label": "ATK",
                  "value": "421"
              },
              {
                  "label": "DEF",
                  "value": "301"
              },
              {
                  "label": "CRIT",
                  "value": "182"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Rosetta%3A_Arete"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Rosetta%3A_Arete"
      },
      {
          "id": "rosetta-rigor",
          "name": "Rosetta: Rigor",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Rigor-Icon.png",
          "sigil": "RR",
          "role": "Tank",
          "frame": "Rigor",
          "faction": "ARU",
          "class": "Tank",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Weather Glass",
          "weapon": "Gungnir",
          "weaponType": "Spear Shield",
          "cub": {
              "name": "Frost Oath",
              "notes": ""
          },
          "memory": "Imported from Build:Rigor",
          "bio": "Leader of the original Forest Guard, Rosetta has been taken in by Babylonia, designated as a special unit, and redeployed onto the battlefield in a more humanoid form.",
          "effect": "Throws 3 shockwaves forward, dealing Physical DMG. - Deals a total of 222% / 444% / 666% Physical DMG over 3 hits based on the number of orbs pinged.",
          "priority": "",
          "notes": "Leader of the original Forest Guard, Rosetta has been taken in by Babylonia, designated as a special unit, and redeployed onto the battlefield in a more humanoid form.",
          "specialties": [
              {
                  "name": "Defense Down - Able to reduce Physical Defense of enemies. Burst - Energy spheres provide great burst potential.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Frozen Wind — Ping Red Orb",
                  "description": "Throws 3 shockwaves forward, dealing Physical DMG. - Deals a total of 222% / 444% / 666% Physical DMG over 3 hits based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Inver-Chariot — Ping Yellow Orb",
                  "description": "Rosetta: Rigor smashes an enemy with her shield, then thrusts her lance forward, dealing Physical DMG and gaining Shield. Gains Super Armor while using this skill. - Deals a total of 220% / 440% / 660% Physical DMG over 2 hits based on the number of orbs pinged. - Gains Shield equal to 3% / 6% / 10..."
              },
              {
                  "name": "Blue Orb: Hunter of Sin — Ping Blue Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Throws a shield to drag an enemy closer, dealing Physical DMG and inflicting Lance of Perception that reduces the target's Physical DEF. - Deals 220% / 440% / 660% Physical DMG in total based on the number of orbs pinged. - Lance of..."
              },
              {
                  "name": "Basic Attack: Swift Strike",
                  "description": "Basic Attack — Tap Basic Attack Rosetta: Rigor strikes the enemy with her lance and shield, dealing Physical DMG. - Deals 950% Physical DMG in total. Basic Attack — Press and hold Basic Attack Press and hold Basic Attack to charge up her power. Fires Low/Mid-power Electromagnetic Cannon based on th..."
              },
              {
                  "name": "Signature: Signature - Absolving Spear",
                  "description": "Signature Move — 80 Energy + Tap Signature Rosetta: Rigor rises into the air and aims her ion cannon toward the ground. While charging up energy, nearby enemies will be dragged in and damaged. Once the cannon is fully charged, it fires a large area blast that deals Physical DMG. - Deals 2480% Physi..."
              },
              {
                  "name": "QTE: Wings of Destiny",
                  "description": "Rosetta: Rigor spins with her lance, dealing Physical DMG to nearby enemies. - Deals 720% Physical DMG in total."
              },
              {
                  "name": "Core Passive: Rigor Heart",
                  "description": "Core Passive — Has Energy Points + Any 3-Ping Rosetta: Rigor has 3 Energy Points. When performing a 3-Ping, she consumes 1 Energy Point to enhance the skill and gain Physical DMG Bonus. - Enhances the skill and gains 100% Physical DMG Bonus. Core Passive — Has Energy Points + Tap Signature Rosetta:..."
              },
              {
                  "name": "Leader: Mutual Succor",
                  "description": "Increases DEF of all members by 15%. Increases ATK of all Tanks in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Gungnir",
                  "cub": "Frost Oath",
                  "memories": "Imported from Build:Rigor",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Rigor"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "0"
              },
              {
                  "label": "Psychological Age",
                  "value": "18"
              },
              {
                  "label": "Activation",
                  "value": "25 Dec"
              },
              {
                  "label": "Height",
                  "value": "177cm"
              },
              {
                  "label": "Weight",
                  "value": "65kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "A"
              },
              {
                  "label": "HP",
                  "value": "2107"
              },
              {
                  "label": "ATK",
                  "value": "402"
              },
              {
                  "label": "DEF",
                  "value": "302"
              },
              {
                  "label": "CRIT",
                  "value": "172"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Rosetta%3A_Rigor"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Rosetta%3A_Rigor"
      },
      {
          "id": "selena-capriccio",
          "name": "Selena: Capriccio",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Capriccio-Icon.png",
          "sigil": "SC",
          "role": "Amplifier",
          "frame": "Capriccio",
          "faction": "WGAA",
          "class": "Amplifier",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "10"
              },
              {
                  "name": "dark",
                  "percent": "90"
              }
          ],
          "rank": "S",
          "gift": "Iris",
          "weapon": "Sarastro",
          "weaponType": "Flute Sword",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "Selena's backup frame. Made with the support of an artist from WGAA, it is free-spirited and lively like its namesake, but the sentiments it embodies are earnest and solemn.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Selena: Capriccio quickly dashes forward, dealing Physical DMG. Upon a 3-Ping, Selena: Capriccio will deal Dark DMG instead and dash again with Super Armor in the joystick's direction to deal Dark DMG. - Deals 168 % / 336% / 504% Ph...",
          "priority": "",
          "notes": "Selena's backup frame. Made with the support of an artist from WGAA, it is free-spirited and lively like its namesake, but the sentiments it embodies are earnest and solemn.",
          "specialties": [
              {
                  "name": "Amplification — Enhances teammates Burst — Deals massive DMG in a short time",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Butterflies' Serenade — Ping Red Orb + Hold the joystick",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Selena: Capriccio quickly dashes forward, dealing Physical DMG. Upon a 3-Ping, Selena: Capriccio will deal Dark DMG instead and dash again with Super Armor in the joystick's direction to deal Dark DMG. - Deals 168 % / 336% / 504% Ph..."
              },
              {
                  "name": "Yellow Orb: Ruinous March — Ping Yellow Orb + Hold the joystick",
                  "description": "Selena: Capriccio draws her blade to deal Physical DMG. Upon a 3-Ping, Selena: Capriccio will deal Dark DMG instead and dash again with Super Armor in the joystick's direction to deal Dark DMG. - Deals 112% / 224% / 336% Physical DMG based on the number of orbs pinged. - Dashes to deal 144% Dark DM..."
              },
              {
                  "name": "Blue Orb: Nebula Rondo — Ping Blue Orb",
                  "description": "Selena: Capriccio plays her Flute Sword as she spins and jumps backward, pulling enemies in a small area close, interrupting enemy attacks, and dealing Physical DMG. Upon a 3-Ping, deals Dark DMG instead and gains Super Armor while casting this skill. - Deals 182% / 364% / 546% Physical DMG based o..."
              },
              {
                  "name": "Basic Attack: Andante Strike — Tap Basic Attack",
                  "description": "Selena: Capriccio launches consecutive attacks with the Flute Sword, dealing Physical DMG. - Deals 976% Physical DMG in total."
              },
              {
                  "name": "Signature: Dream Cosmos Suite",
                  "description": "Realm of Capriccio — 80 Energy + Tap Signature Signature Move: Consumes 80 Energy to activate Realm of Capriccio, gaining Extra DMG Reduction. Selena: Capriccio gains 5 Shooting Stars. At the end of Realm of Capriccio, all Signal Orbs will be rearranged in the order of Red-Blue-Yellow. - Selena: Ca..."
              },
              {
                  "name": "QTE: Lingering Bladesong",
                  "description": "Selena: Capriccio leaps into battle and plays her Flute Sword, dealing Dark DMG and restoring HP. - Deals 600% Dark DMG and heals for HP equal to 60% of her ATK."
              },
              {
                  "name": "Core Passive: Phantasia",
                  "description": "Core Passive — Any 3-Ping + Hold the joystick Upon a 3-Ping, moving the joystick will cause Selena: Capriccio to summon a phantom. The phantom will continue to cast the original skill, and Selena herself will gain Super Armor and cast Reprise: Echo instead. - Each Reprise: Echo cast by pinging Red/..."
              },
              {
                  "name": "Leader: Famed Concertmaster",
                  "description": "Increases ATK of all members by 10% and HP of all members by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Sarastro",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Capriccio."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "3"
              },
              {
                  "label": "Psychological Age",
                  "value": "20"
              },
              {
                  "label": "Activation",
                  "value": "27 Sep"
              },
              {
                  "label": "Height",
                  "value": "163cm"
              },
              {
                  "label": "Weight",
                  "value": "41kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "O"
              },
              {
                  "label": "HP",
                  "value": "1973"
              },
              {
                  "label": "ATK",
                  "value": "409"
              },
              {
                  "label": "DEF",
                  "value": "281"
              },
              {
                  "label": "CRIT",
                  "value": "195"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Selena%3A_Capriccio"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Selena%3A_Capriccio"
      },
      {
          "id": "selena-pianissimo",
          "name": "Selena: Pianissimo",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Pianissimo-Icon.png",
          "sigil": "SP",
          "role": "Attacker",
          "frame": "Pianissimo",
          "faction": "WGAA",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Iris",
          "weapon": "Orpheus' Lullaby",
          "weaponType": "Bowstring Rapier",
          "cub": {
              "name": "Snow Waltz",
              "notes": ""
          },
          "memory": "Imported from Build:Pianissimo",
          "bio": "A specialized frame co-developed by the Science Council and the World Government Association of Art with improved stability of M.I.N.D. to deal with Transcendants. The adaptee can use it with a suppression device to perform combat skills of multiple parts playing simultaneously.",
          "effect": "Slurring: Tap Red Orb Steps forward and thrusts, dealing Physical DMG. - Gains 1 Musical Note upon a 3-Ping. Max 3 Musical Notes. - Deals 120% / 240% / 360% Physical DMG based on the number of orbs pinged. Harmonics: During Slurring + Tap Red Orb Thrusts the target continuously, dealing Physical DM...",
          "priority": "",
          "notes": "A specialized frame co-developed by the Science Council and the World Government Association of Art with improved stability of M.I.N.D. to deal with Transcendants. The adaptee can use it with a suppression device to perform combat skills o...",
          "specialties": [
              {
                  "name": "Burst - Deals massive DMG in a short time. Glaciation - Skills can trigger the Glaciation Effect.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Flaming Chord",
                  "description": "Slurring: Tap Red Orb Steps forward and thrusts, dealing Physical DMG. - Gains 1 Musical Note upon a 3-Ping. Max 3 Musical Notes. - Deals 120% / 240% / 360% Physical DMG based on the number of orbs pinged. Harmonics: During Slurring + Tap Red Orb Thrusts the target continuously, dealing Physical DM..."
              },
              {
                  "name": "Yellow Orb: Thunderous Transposition",
                  "description": "Bow Chop: Tap Yellow Orb Spins and slashes, dealing Physical DMG. - Gains 1 Musical Note upon a 3-Ping. Max 3 Musical Notes. - Deals 140% / 280% / 420% Physical DMG based on the number of orbs pinged. Staccato: During Bow Chop + Tap Yellow Orb Throws an iris at the target, dealing Physical DMG. - G..."
              },
              {
                  "name": "Blue Orb: Rhythmic Piercing",
                  "description": "Rhythmic Piercing: Solo + Tap Blue Orb Selena's Blue Orbs are always fixed to the right end. This can only be cast after Selena enters Solo. Moves quickly among enemies, dealing Physical DMG. Gains Signature Energy after casting. Gains Variation Points as well if in the Flow State. - When casting t..."
              },
              {
                  "name": "Basic Attack: Reverberating Legato",
                  "description": "Intro: Holding the Rapier + Tap Basic Attack Wields the Bowstring Rapier to attack the target continuously, dealing Physical DMG. - Basic Attacks deal a total of 730% Physical DMG. Gains a total of 50 Glaciation Value in the process. - When launching the 5th hit, gains Super Armor, 1 extra Signal O..."
              },
              {
                  "name": "Signature: Fugue Sonata",
                  "description": "Rainy Prelude: 60 Signature Energy + Tap/Press and Hold Signature Selena prepares to perform, enters the Flow State, and deals Physical DMG. Triggers Time Lag Calculation in the process. Immediately resets Matrix's cooldown after casting. In the Flow State, gains Super Armor and Variation Points ov..."
              },
              {
                  "name": "QTE: Radiant Symphony",
                  "description": "QTE – Tap QTE Selena spins and dances to attack the target, dealing Physical DMG. - Deals 600% Physical DMG."
              },
              {
                  "name": "Core Passive: Classical Romanticism",
                  "description": "Solo Realm Selena normally attacks with her rapier. In the Flow State, she will attack with the cello instead. She cannot enter the Matrix by dodging. It can only be triggered by Basic Attack - Echoing Melody / Basic Attack - Inverted Divisi. Enters Solo upon entering the Matrix triggered by hersel..."
              },
              {
                  "name": "Leader: Leader - Freezing Intro",
                  "description": "Increases Physical DMG and Glaciation DMG of all members by 10%. Increases ATK of all Attackers in the team by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Orpheus' Lullaby",
                  "cub": "Snow Waltz",
                  "memories": "Imported from Build:Pianissimo",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Pianissimo"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "3"
              },
              {
                  "label": "Psychological Age",
                  "value": "20"
              },
              {
                  "label": "Activation",
                  "value": "27 Sept"
              },
              {
                  "label": "Height",
                  "value": "163cm"
              },
              {
                  "label": "Weight",
                  "value": "41kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "O"
              },
              {
                  "label": "HP",
                  "value": "1507"
              },
              {
                  "label": "ATK",
                  "value": "287"
              },
              {
                  "label": "DEF",
                  "value": "182"
              },
              {
                  "label": "CRIT",
                  "value": "459"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Selena%3A_Pianissimo"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Selena%3A_Pianissimo"
      },
      {
          "id": "selena-tempest",
          "name": "Selena: Tempest",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Tempest-Icon.png",
          "sigil": "ST",
          "role": "Vanguard",
          "frame": "Tempest",
          "faction": "Unidentified",
          "class": "Vanguard",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "10"
              },
              {
                  "name": "lightning",
                  "percent": "90"
              }
          ],
          "rank": "S",
          "gift": "Iris",
          "weapon": "Waldmeister",
          "weaponType": "Cello Blade (T)",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:Tempest",
          "bio": "Formerly a member of the Archaeological Team, Selena used to have a great singing voice. She was also known for her talent in art and her gentle yet resilient nature. After being rescued by an Ascendant following the space station and Red Tide incidents, she is now a Transcendant.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Leaps and thrusts the Cello Blade into the ground to summon lightning that strikes the enemy for Lightning DMG. - Deals 240% / 480% / 720% Lightning DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "Formerly a member of the Archaeological Team, Selena used to have a great singing voice. She was also known for her talent in art and her gentle yet resilient nature. After being rescued by an Ascendant following the space station and Red...",
          "specialties": [
              {
                  "name": "Melee — Able to affect the game through different orb ping. Burst — Able to switch to Signature Move status in a quick manner.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Roaring Thunder — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Leaps and thrusts the Cello Blade into the ground to summon lightning that strikes the enemy for Lightning DMG. - Deals 240% / 480% / 720% Lightning DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Lightning Spiccato — Ping Yellow Orb",
                  "description": "Charges forward and strikes with the bow, dealing Lightning DMG. Selena gains Super Armor during the charge. - Deals 240% / 480% / 720% Lightning DMG based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Sonic Vortex — Ping Blue Orb",
                  "description": "Spins backward and creates an electric vortex to damage the enemies and pull them together, dealing Lightning DMG. - Deals 240% / 480% / 720% Lightning DMG based on the number of orbs pinged."
              },
              {
                  "name": "Basic Attack: Dancing Stroke — Tap Basic Attack",
                  "description": "Launches consecutive attacks with the Cello Blade, dealing Physical DMG. - Deals 852% Physical DMG in total."
              },
              {
                  "name": "Signature: Tempest Finale",
                  "description": "Signature Move — Has Tune + 60 Energy + Tap Signature When Selena has Tune, she can consume Signature Energy to activate Chaotic M.I.N.D., and renew the duration of Solo if Solo is active. Once activated, she gains Staccato based on the amount of Tune, increasing her movement speed and Extra DMG Re..."
              },
              {
                  "name": "QTE: Nightingale Strike",
                  "description": "QTE: Launches a swift attack at the target, dealing Lightning DMG. - Deals 640% Lightning DMG in total."
              },
              {
                  "name": "Core Passive: Tertian",
                  "description": "Chord — Any 3-Ping + Ping any orb 3-Ping will generate a Triad of the same color, and the next Orb pinged will trigger Chord. Selena gains Tune based on the number of orbs pinged when Chord is triggered. Concerto — Any 3-Ping + Ping orbs with the same color as the 3-Ping If the orbs pinged have the..."
              },
              {
                  "name": "Leader: Conductor",
                  "description": "Increase Lightning DMG of all members by 10%. Increase ATK of all Vanguard Uniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Waldmeister",
                  "cub": "",
                  "memories": "Imported from Build:Tempest",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Tempest"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "3"
              },
              {
                  "label": "Psychological Age",
                  "value": "20"
              },
              {
                  "label": "Activation",
                  "value": "27 Sep"
              },
              {
                  "label": "Height",
                  "value": "163cm"
              },
              {
                  "label": "Weight",
                  "value": "41kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "O"
              },
              {
                  "label": "HP",
                  "value": "1915"
              },
              {
                  "label": "ATK",
                  "value": "421"
              },
              {
                  "label": "DEF",
                  "value": "281"
              },
              {
                  "label": "CRIT",
                  "value": "195"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Selena%3A_Tempest"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Selena%3A_Tempest"
      },
      {
          "id": "sophia-silverfang",
          "name": "Sophia: Silverfang",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Silverfang-Icon.png",
          "sigil": "SS",
          "role": "Support",
          "frame": "Silverfang",
          "faction": "AkdilekTradingUnion",
          "class": "Support",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "20"
              },
              {
                  "name": "fire",
                  "percent": "80"
              }
          ],
          "rank": "A",
          "gift": "High-Power Batteries",
          "weapon": "Scion",
          "weaponType": "Dual Guns",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "External support for Gray Raven, Sophia also functions as an envoy for the Akdilek Commercial Alliance. Born an orphan on the Eternal Engine, now the sharpest blade of its leader Jamilah.",
          "effect": "Stands still and fires guided rounds at the target, dealing Fire DMG. Drops 1 additional Energy Ball when hitting the target with a 3-Ping. - Deals 240% / 480% / 720% Fire DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "External support for Gray Raven, Sophia also functions as an envoy for the Akdilek Commercial Alliance. Born an orphan on the Eternal Engine, now the sharpest blade of its leader Jamilah.",
          "specialties": [
              {
                  "name": "Attraction - Able to pull enemies in an area together. Heal - Has ally healing skills.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Targeted Missiles — Ping Red Orb",
                  "description": "Stands still and fires guided rounds at the target, dealing Fire DMG. Drops 1 additional Energy Ball when hitting the target with a 3-Ping. - Deals 240% / 480% / 720% Fire DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Air Boosters — Ping Yellow Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in fulfills 1/3 of this character's Core Passive. Charges at the target. While charging, every attack deals Physical DMG. On a 3-Ping, deals Fire DMG instead and the target hit drops 1 additional Energy Ball. - Each attack de..."
              },
              {
                  "name": "Blue Orb: Spread Shot — Ping Blue Orb",
                  "description": "Fires scattered pellets in a fan-shaped area then hops back. Deals Fire DMG to the targets hit. On a 3-Ping, the target hit drops 1 Energy Ball. - Deals 200% / 400% / 600% Fire DMG based on the number of orbs pinged."
              },
              {
                  "name": "Basic Attack: Rapid Shot — Tap Basic Attack",
                  "description": "Shoots at the target continuously with handguns and mechanical arms, dealing Fire and Physical DMG. - Deals 850% Fire and Physical DMG in total."
              },
              {
                  "name": "Signature: Signature - Fusion Burst",
                  "description": "Signature Move — 80 Energy + Tap Signature Accumulates energy in front, then shoots it out to deal Fire DMG. The energy pulls in nearby enemies continuously, dealing Fire DMG. It explodes after the end of the accumulation, dealing Fire DMG and dropping 2 Energy Balls. - Shooting the energy deals 20..."
              },
              {
                  "name": "QTE: Fire Support",
                  "description": "Silverfang appears and shoots in front, dealing Fire DMG and dropping an Energy Ball. Drops an extra Energy Ball if the skill level is at 10 or above. - Deals 400% Fire DMG in total."
              },
              {
                  "name": "Core Passive: Field Supplies",
                  "description": "Core Passive — Last hit of Basic Attack / Any 3-Ping / Cast Signature Move / Cast QTE + Pick up Energy Ball Sophia: Silverfang drops an Energy Ball after any of the following: the last hit of Basic Attack, dealing damage with a 3-Ping skill, casting Signature Move, or casting QTE. Picking up an Ene..."
              },
              {
                  "name": "Leader: Well Prepared",
                  "description": "Increases HP of all members by 10% and movement speed of all members by 5% when there are 3 different classes in the team."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Scion",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Silverfang."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "0"
              },
              {
                  "label": "Psychological Age",
                  "value": "15"
              },
              {
                  "label": "Activation",
                  "value": "3 Oct"
              },
              {
                  "label": "Height",
                  "value": "153cm"
              },
              {
                  "label": "Weight",
                  "value": "36kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "A"
              },
              {
                  "label": "HP",
                  "value": "1515"
              },
              {
                  "label": "ATK",
                  "value": "288"
              },
              {
                  "label": "DEF",
                  "value": "227"
              },
              {
                  "label": "CRIT",
                  "value": "144"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Sophia%3A_Silverfang"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Sophia%3A_Silverfang"
      },
      {
          "id": "teddy-decryptor",
          "name": "Teddy: Decryptor",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Decryptor-Icon.png",
          "sigil": "TD",
          "role": "Support",
          "frame": "Decryptor",
          "faction": "EngineeringForce",
          "class": "Support",
          "element": "dark",
          "elements": [
              {
                  "name": "dark",
                  "percent": "90"
              }
          ],
          "rank": "A",
          "gift": "Teddy Bear",
          "weapon": "Hacker's Tune",
          "weaponType": "TacticalHeadphones",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:Decryptor",
          "bio": "Vice-captain of the Engineering Force. Since she is a programming expert, the core configurations of her frame are geared more toward a technician. However, this doesn't mean that she's not capable of combat—her stage is far beyond the battlefield in the physical world.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Red Orb — No Ping Combo + Ping Red Orb Ping Combo 1: Smashes the target with the Grizzly Paw before kicking the target toward Decryptor with Grizzly Stomp, dealing Dark DMG. - Deals 120% / 240% / 360% Dark DMG in total based on the...",
          "priority": "ATK increases by 10%. Base DMG of Signal Orbs and Stress Orbs increases by 30%. When Teddy: Decryptor enters the battlefield while she is not in Analysis Mode, she will enter Analysis Mode automatically and gain 40 Anal...",
          "notes": "Vice-captain of the Engineering Force. Since she is a programming expert, the core configurations of her frame are geared more toward a technician. However, this doesn't mean that she's not capable of combat—her stage is far beyond the bat...",
          "specialties": [
              {
                  "name": "Amplification - Able to heal and boost allies' Dark DMG. Disruption - Able to rapidly break the enemy's Equilibrium Field.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Sonic Intrusion",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Red Orb — No Ping Combo + Ping Red Orb Ping Combo 1: Smashes the target with the Grizzly Paw before kicking the target toward Decryptor with Grizzly Stomp, dealing Dark DMG. - Deals 120% / 240% / 360% Dark DMG in total based on the..."
              },
              {
                  "name": "Yellow Orb: High-Frequency Synth",
                  "description": "Yellow Orb — No Ping Combo + Ping Yellow Orb Ping Combo 1: Smashes the target with the Grizzly Paw before kicking the target toward Decryptor with Grizzly Stomp, dealing Dark DMG. - Deals 120% / 240% / 360% Dark DMG in total based on the number of orbs pinged. Yellow Orb — Complete Ping Combo 1 + P..."
              },
              {
                  "name": "Blue Orb: Pursue Command",
                  "description": "Blue Orb — No Ping Combo + Ping Blue Orb Ping Combo 1: Crosses the Grizzly Paws to pierce the target, dealing 200% Dark DMG. Blue Orb — Complete Ping Combo 1 + Ping Blue Orb Ping Combo 2: Puts the Grizzly Paws together to crush the target, dealing 240% Dark DMG. Blue Orb — Complete Ping Combo 2 + P..."
              },
              {
                  "name": "Basic Attack: Reversal Sequence",
                  "description": "Basic Attack — Tap Basic Attack Uses the two Grizzly Paws alternatively to launch a 2-hit attack at the target when not in Analysis Mode. The 3rd hit will unleash a soundwave, knocking back the target and dealing 250% Dark DMG.The 3rd hit will form a pulse that pulls in the target instead when in A..."
              },
              {
                  "name": "Signature: Anonymous Audiovisual",
                  "description": "Thorough Analysis — Not in Analysis Mode + At Least 200 Signature Energy + Press and Hold Signature Decryptor unleashes all her computing power and enters Analysis Mode, dealing 600% Dark DMG and gaining up to 150 Analysis Points based on her moves during so. -In Analysis Mode, Decryptor cannot res..."
              },
              {
                  "name": "QTE: Hacking Protocol",
                  "description": "Decryptor rides the Grizzly Paws to scatter musical notes, dealing 400% Dark DMG. Afterward, generates the Integer Overflow Field that lasts for 4s."
              },
              {
                  "name": "Core Passive: Source Infiltration",
                  "description": "Fraudulent Frequency Decryptor can only gain and ping Red or Yellow Orbs when she is not in Analysis Mode. She gains infinite Blue Orbs and can only ping Blue Orbs when in Analysis Mode. Hacking — Any 3-Ping or QTE 3-Pings and QTEs will inflict a Hacked Mark on the first target hit for 10s. When th..."
              },
              {
                  "name": "Leader: \"Secured Domain\"",
                  "description": "Increases HP of all members by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Hacker's Tune",
                  "cub": "",
                  "memories": "Imported from Build:Decryptor",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Decryptor"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "15"
              },
              {
                  "label": "Activation",
                  "value": "1 Nov"
              },
              {
                  "label": "Height",
                  "value": "157cm"
              },
              {
                  "label": "Weight",
                  "value": "40kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "AB"
              },
              {
                  "label": "HP",
                  "value": "1590"
              },
              {
                  "label": "ATK",
                  "value": "303"
              },
              {
                  "label": "DEF",
                  "value": "216"
              },
              {
                  "label": "CRIT",
                  "value": "136"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Teddy%3A_Decryptor"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Teddy%3A_Decryptor"
      },
      {
          "id": "teddy-spectre",
          "name": "Teddy: Spectre",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Spectre-Icon.png",
          "sigil": "TS",
          "role": "Amplifier",
          "frame": "Spectre",
          "faction": "EngineeringForce",
          "class": "Amplifier",
          "element": "ice",
          "elements": [
              {
                  "name": "ice",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "\"Teddy\"",
          "weapon": "Neon Wayfarer",
          "weaponType": "Digital Warboots",
          "cub": {
              "name": "Beep-Boop",
              "notes": ""
          },
          "memory": "Imported from Build:Spectre",
          "bio": "Nearly 80% of the Spectre frame's design was done by Teddy herself. She originally based it on the Decryptor frame, aiming to craft a more combat-ready model, just in case. After linking with Elysium's core, the missing components were finally completed.",
          "effect": "Feedforward Activation: Outside Data Domain + Ping 3 Consecutive White Noise Signal Orbs or More Than 6 White Noise Signal Orbs + Tap Red Neon Orb Summons a bear claw from Data Domain to attack enemies and deal 900% Ice DMG. - For each recorded White Noise Signal Orb, deals an additional 200% Ice D...",
          "priority": "",
          "notes": "Nearly 80% of the Spectre frame's design was done by Teddy herself. She originally based it on the Decryptor frame, aiming to craft a more combat-ready model, just in case. After linking with Elysium's core, the missing components were fin...",
          "specialties": [
              {
                  "name": "Amplification — Grants the power of healing and making allies deal more damage. Raydiance - Skills can trigger the Raydiance Effect.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Dual-Feed Rotor — Red Neon Orb",
                  "description": "Feedforward Activation: Outside Data Domain + Ping 3 Consecutive White Noise Signal Orbs or More Than 6 White Noise Signal Orbs + Tap Red Neon Orb Summons a bear claw from Data Domain to attack enemies and deal 900% Ice DMG. - For each recorded White Noise Signal Orb, deals an additional 200% Ice D..."
              },
              {
                  "name": "Yellow Orb: Ultra Bass Reverb — Yellow Neon Orb",
                  "description": "Dual-Channel Percussion: Switch In Uses magnetic bombardment to deal 980% Ice DMG to enemies. While casting, gains Super Armor and 50% DMG Reduction, and activates Yellow Neon Orb. - If carrying Exposure Mark, deals 600% Raydiance DMG instead. Deafening Blast: Switch In + Tap Yellow Neon Orb Summon..."
              },
              {
                  "name": "Blue Orb: Mega Distortion — Blue Neon Orb",
                  "description": "Blue Neon Orb: Inside Data Domain + Press and Hold Basic Attack + Tap Blue Neon Orb Summons a giant teddy from Data Domain to attack enemies and deal 3500% Ice DMG."
              },
              {
                  "name": "Basic Attack: Fourier Expansion",
                  "description": "Positive Transformation: Outside Data Domain + Tap Basic Attack Summons Cross Blade to attack enemies, dealing Ice DMG. - Deals a total of 570% Ice DMG. - After the 1st / 2nd / 3rd phase of Basic Attack, press and hold Basic Attack to deal 280% / 420% / 520% Ice DMG respectively. Signal Orb Recover..."
              },
              {
                  "name": "Signature: Z-Transform",
                  "description": "Data Domain: New Dimension Expansion: Outside Data Domain + At Least 200 Signature Energy + Tap Signature Deploys Data Domain, dealing 3500% Ice DMG and remaining airborne. While within Data Domain, consumes 1 Signature Energy every 0.1s. While casting, gains Super Armor and 50% DMG Reduction, but..."
              },
              {
                  "name": "QTE: Parametric Equalizer",
                  "description": "QTE: Tap QTE Deals DMG and heals. - Deals a total of 600% Ice DMG. - If carrying Exposure Mark, deals 600% Raydiance DMG instead. - Restores HP equal to 50% of ATK."
              },
              {
                  "name": "Core Passive: Integrated Neon",
                  "description": "Phonograph Circuit Outside Data Domain, only White Noise Signal Orbs can be obtained. Inside Data Domain, gains unlimited Brown Signal Orbs. Orb Slot 1 is fixed as the Neon Orb slot, and specific Neon Orbs of corresponding colors can be activated during the end lag of casting specific skills. Neon..."
              },
              {
                  "name": "Leader: Classified Domain",
                  "description": "Increases ATK of all members by 10%.Increases Ice DMG and Raydiance DMG of all Amplifiers in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Neon Wayfarer",
                  "cub": "Beep-Boop",
                  "memories": "Imported from Build:Spectre",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Spectre"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "15"
              },
              {
                  "label": "Activation",
                  "value": "1 Nov"
              },
              {
                  "label": "Height",
                  "value": "157cm"
              },
              {
                  "label": "Weight",
                  "value": "40kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "AB"
              },
              {
                  "label": "HP",
                  "value": "1499"
              },
              {
                  "label": "ATK",
                  "value": "441"
              },
              {
                  "label": "DEF",
                  "value": "295"
              },
              {
                  "label": "CRIT",
                  "value": "171"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Teddy%3A_Spectre"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Teddy%3A_Spectre"
      },
      {
          "id": "vera-garnet",
          "name": "Vera: Garnet",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Garnet-Icon.png",
          "sigil": "VG",
          "role": "Tank",
          "frame": "Garnet",
          "faction": "Cerberus",
          "class": "Tank",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "15"
              },
              {
                  "name": "lightning",
                  "percent": "85"
              }
          ],
          "rank": "S",
          "gift": "Military-Grade Bionic Dog",
          "weapon": "Phoenix",
          "weaponType": "Banner Spear",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:Garnet",
          "bio": "A frame Vera used in the past. Designed as an advanced, decisive countermeasure against hostile Constructs, it was finally introduced as an official unit not long ago. Its weapon is a specially forged banner spear.",
          "effect": "Automatically uses this attack upon switch-in. Vera: Garnet spins her spear, gaining Shield and dealing Physical DMG (Lightning DMG instead on a 3-Ping) to nearby enemies based on the number of orbs pinged. - Gains Shield equal to 10% of her max HP. - Deals 230% / 460% / 690% Physical DMG based on...",
          "priority": "",
          "notes": "A frame Vera used in the past. Designed as an advanced, decisive countermeasure against hostile Constructs, it was finally introduced as an official unit not long ago. Its weapon is a specially forged banner spear.",
          "specialties": [
              {
                  "name": "Burst — Deals massive DMG in a short time. Resistance Reduction — Able to reduce the Resistance of enemies.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Reaper Sweep — Ping Red Orb",
                  "description": "Automatically uses this attack upon switch-in. Vera: Garnet spins her spear, gaining Shield and dealing Physical DMG (Lightning DMG instead on a 3-Ping) to nearby enemies based on the number of orbs pinged. - Gains Shield equal to 10% of her max HP. - Deals 230% / 460% / 690% Physical DMG based on..."
              },
              {
                  "name": "Yellow Orb: Lightning Fury — Ping Yellow Orb",
                  "description": "Vera: Garnet spins around her spear to pull nearby enemies in and deal wide AOE Physical DMG (Lightning DMG instead on a 3-Ping). - Deals 190% / 380% / 570% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Thunderflash Stab — Ping Blue Orb",
                  "description": "Thrusts forward and pierces the enemies ahead, dealing Physical DMG (Lightning DMG instead on a 3-Ping). - Deals 180% / 360% / 540% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Basic Attack: Spear Dance",
                  "description": "Basic Attack — Tap Basic Attack Vera: Garnet wields her spear to deal Physical DMG. After dodging, she can start from the 3rd hit of her Basic Attack combo. - Deals 860% Physical DMG in total. Spear Lunge — Any 3-Ping + Tap Basic Attack The next Basic Attack after a 3-Ping will trigger Spear Lunge,..."
              },
              {
                  "name": "Signature: Shining Piercer",
                  "description": "Signature Move — 50 Energy + Tap Signature Hurls the spear with full force, dealing Lightning DMG to enemies in front. - Deals 1500% Lightning DMG in total."
              },
              {
                  "name": "QTE: Victorious War Flag",
                  "description": "Plunges the spear into the ground and unfurls the war flag, dealing Lightning DMG followed by Lightning DMG over time to enemies within range. - Deals 600% Lightning DMG upon the first hit. - Deals 200% Lightning DMG in total over 8s."
              },
              {
                  "name": "Core Passive: Lightning Fall",
                  "description": "Electric Charge — Cast Spear Lunge Spear Lunge grants 1 Electric Charge, stacking up to 3 times. Lightning Fall — Electric Charge present + Press and hold Basic Attack When there is at least 1 Electric Charge, press and hold the Basic Attack button to consume Electric Charge and cast Lightning Fall..."
              },
              {
                  "name": "Leader: Rumbling Advance",
                  "description": "Increases Lightning DMG of all members by 10%. Increases DMG of all Tank Omniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Phoenix",
                  "cub": "",
                  "memories": "Imported from Build:Garnet",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Garnet"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "2"
              },
              {
                  "label": "Psychological Age",
                  "value": "17"
              },
              {
                  "label": "Activation",
                  "value": "31 Oct"
              },
              {
                  "label": "Height",
                  "value": "164cm"
              },
              {
                  "label": "Weight",
                  "value": "44kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "B"
              },
              {
                  "label": "HP",
                  "value": "2126"
              },
              {
                  "label": "ATK",
                  "value": "398"
              },
              {
                  "label": "DEF",
                  "value": "301"
              },
              {
                  "label": "CRIT",
                  "value": "172"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Vera%3A_Garnet"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Vera%3A_Garnet"
      },
      {
          "id": "vera-geiravor",
          "name": "Vera: Geiravor",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Geiravor-Icon.png",
          "sigil": "VG",
          "role": "Amplifier",
          "frame": "Geiravor",
          "faction": "Cerberus",
          "class": "Amplifier",
          "element": "fire",
          "elements": [
              {
                  "name": "fire",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Military-Grade Bionic Dog",
          "weapon": "Deathless Flame",
          "weaponType": "Dual-Bladed Lance",
          "cub": {
              "name": "Wrathfang",
              "notes": ""
          },
          "memory": "Imported from Build:Geiravor",
          "bio": "A test frame developed by Kurono. It failed the berserk test after activation and was abandoned during a mission. Years later, Vera reactivated the frame, seized its control after fierce combats and chaos, and named it \"Geiravor\".",
          "effect": "Rising Flames – Not in Rising Flames Combo + Tap Red Orb Vera: Geiravor wields her lance to attack, dealing Fire DMG and entering the Rising Flames Combo. - Deals 200% / 400% / 600% Fire DMG based on the number of orbs pinged. - Restores 2% / 5% / 10% of max HP based on the number of orbs pinged. -...",
          "priority": "",
          "notes": "A test frame developed by Kurono. It failed the berserk test after activation and was abandoned during a mission. Years later, Vera reactivated the frame, seized its control after fierce combats and chaos, and named it \"Geiravor\".",
          "specialties": [
              {
                  "name": "Amplification — Grants the power of healing and making allies deal more damage. Darkflow - Skills can trigger the Darkflow Effect.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Ignited Slash",
                  "description": "Rising Flames – Not in Rising Flames Combo + Tap Red Orb Vera: Geiravor wields her lance to attack, dealing Fire DMG and entering the Rising Flames Combo. - Deals 200% / 400% / 600% Fire DMG based on the number of orbs pinged. - Restores 2% / 5% / 10% of max HP based on the number of orbs pinged. -..."
              },
              {
                  "name": "Yellow Orb: Firey Covenant",
                  "description": "Yellow Orb – Tempered in Midnight automatically clears all Yellow Orbs During Untamed Impulse, every 3 Blue Orbs pinged generates 2 Yellow Orbs. - Tempered in Midnight automatically clears all Yellow Orbs. - A maximum of 6 Yellow Orbs can be held."
              },
              {
                  "name": "Blue Orb: Scorching Sweep",
                  "description": "Blue Orb – Tap Blue Orb Vera: Geiravor unleashes sweeping attacks, dealing 300% / 600% / 900% Fire DMG. - Every 3 Blue Orbs pinged generates 2 Yellow Orbs."
              },
              {
                  "name": "Basic Attack: Wildfire Unbound",
                  "description": "Flash Break – During Untamed Impulse + Tap Basic Attack During Untamed Impulse, Basic Attacks deal 450% Fire DMG. Inverse Edge: During Last Blaze + Tap Basic Attack During Last Blaze, Basic Attacks deal 1200% Fire DMG. - Each Basic Attack converts 2% of the current Final Embers into Vera: Geiravor'..."
              },
              {
                  "name": "Signature: Thus Descends the Eternal Flame",
                  "description": "Tempered in Midnight: 45 Signature Energy + Tap/Press and Hold Signature Channels her battle resolve into the lance, dealing Fire DMG. This skill automatically clears all existing Yellow Orbs and grants an equal number of Red Orbs. In the casting process, triggers Time Lag Calculation and enters La..."
              },
              {
                  "name": "QTE: Infernal Silhouette",
                  "description": "QTE – Tap QTE Vera: Geiravor swings her weapon, dealing damage and restoring HP. - Deals a total of 600% Fire DMG. - If there is at least 1 Darkflow stack, deals 300% Darkflow DMG instead. - Restores HP equal to 20% of max HP."
              },
              {
                  "name": "Core Passive: Cremating Judgement",
                  "description": "Schism Strike During Untamed Impulse, Vera: Geiravor can cast only Blue Orbs, and her Basic Attacks generate only Blue Orbs. - After entering Last Blaze, she can cast only Red Orbs, and her Basic Attacks generate only Red Orbs. - Upon entering Last Blaze, retains any unused Blue Orbs from Untamed I..."
              },
              {
                  "name": "Leader: Abyssal Condemnation",
                  "description": "Increases ATK of all members by 10%. Increases Fire DMG and Darkflow DMG of all Amplifiers in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Deathless Flame",
                  "cub": "Wrathfang",
                  "memories": "Imported from Build:Geiravor",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Geiravor"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "2"
              },
              {
                  "label": "Psychological Age",
                  "value": "17"
              },
              {
                  "label": "Activation",
                  "value": "31 Oct"
              },
              {
                  "label": "Height",
                  "value": "164cm"
              },
              {
                  "label": "Weight",
                  "value": "44kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "B"
              },
              {
                  "label": "HP",
                  "value": "2069"
              },
              {
                  "label": "ATK",
                  "value": "402"
              },
              {
                  "label": "DEF",
                  "value": "307"
              },
              {
                  "label": "CRIT",
                  "value": "171"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Vera%3A_Geiravor"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Vera%3A_Geiravor"
      },
      {
          "id": "vera-rozen",
          "name": "Vera: Rozen",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Rozen-Icon.png",
          "sigil": "VR",
          "role": "Support",
          "frame": "Rozen",
          "faction": "Cerberus",
          "class": "Support",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "20"
              },
              {
                  "name": "dark",
                  "percent": "80"
              }
          ],
          "rank": "A",
          "gift": "Military-Grade Bionic Dog",
          "weapon": "Sariel",
          "weaponType": "Katana",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "Leader of Cerberus, and the backbone of Babylonia's long-range connection field test team. Vera's extreme methods and belligerent, elusive demeanor have put her at the center of many a controversy.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Launches multiple thrust attacks, dealing Physical DMG. (Dark DMG instead on a 3-Ping.) - Deals 180% / 360% / 540% Physical DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "Leader of Cerberus, and the backbone of Babylonia's long-range connection field test team. Vera's extreme methods and belligerent, elusive demeanor have put her at the center of many a controversy.",
          "specialties": [
              {
                  "name": "Energy Boost - Has shorter Cooldown of Signature Moves. Heal - Has ally healing skills.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Vermilion Slice — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Launches multiple thrust attacks, dealing Physical DMG. (Dark DMG instead on a 3-Ping.) - Deals 180% / 360% / 540% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Phantasmal Burst — Ping Yellow Orb",
                  "description": "Unleashes a wave of dark energy, dealing Dark DMG. Then thrusts forward, dealing Physical DMG. (Dark DMG instead on a 3-Ping.) - The dark energy wave deals 100% / 200% / 300% Dark DMG based on the number of orbs pinged. - Each hit of the thrust deals 10% / 20% / 30% Physical DMG based on the number..."
              },
              {
                  "name": "Blue Orb: Infernal Scorchmark — Ping Blue Orb",
                  "description": "Releases a close-range shockwave forward that deals Physical Damage (Dark DMG instead on a 3-Ping) and marks the first target hit. The marked target will deal Dark DMG to all enemies including itself and heal all ally units per second in an area. Only 1 mark can exist at a time. - The shockwave dea..."
              },
              {
                  "name": "Basic Attack: Ominous Blade — Tap Basic Attack",
                  "description": "Performs multiple attacks with a primary and secondary weapon, dealing Physical DMG. - Deals 740% Physical DMG in total."
              },
              {
                  "name": "Signature: Dark Field",
                  "description": "Signature Move — 100 Energy + Tap Signature Creates a dark field, dealing Dark DMG to nearby enemies. The dark field also deals Dark DMG every second and heals the ally units within. Ally units inside the dark field also gain the Dark Radiation effect and bonus movement speed. The dark field always..."
              },
              {
                  "name": "QTE: Black Rose Impact",
                  "description": "Upon entering the battlefield, deals Dark DMG to nearby enemies and heals the ally units within range. Also grants them the Dark Radiation effect that increases their Dark DMG. - Deals 400% Dark DMG to nearby enemies and heals the ally units within range for HP equal to 100% of Vera: Rozen's ATK. -..."
              },
              {
                  "name": "Core Passive: Mass Illusion",
                  "description": "Core Passive — Ping any orb Gains additional Overclock Points from pinging orbs. Automatically restores Overclock Points every second. - Gains additional 3 / 7 / 12 Overclock Points based on the number of orbs pinged. - Automatically restores 2 Overclock Points every second. - Overclock Points are..."
              },
              {
                  "name": "Leader: Medical Optimization",
                  "description": "Increases HP of all members by 5% and the healing received by all members by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Sariel",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Rozen."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "2"
              },
              {
                  "label": "Psychological Age",
                  "value": "17"
              },
              {
                  "label": "Activation",
                  "value": "31 Oct"
              },
              {
                  "label": "Height",
                  "value": "164cm"
              },
              {
                  "label": "Weight",
                  "value": "44kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "B"
              },
              {
                  "label": "HP",
                  "value": "1515"
              },
              {
                  "label": "ATK",
                  "value": "294"
              },
              {
                  "label": "DEF",
                  "value": "222"
              },
              {
                  "label": "CRIT",
                  "value": "144"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Vera%3A_Rozen"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Vera%3A_Rozen"
      },
      {
          "id": "vergil",
          "name": "Vergil: Vergil",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Vergil-Icon.png",
          "sigil": "VV",
          "role": "Attacker",
          "frame": "Vergil",
          "faction": "Devil May Cry",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Poetry Collection",
          "weapon": "Yamato",
          "weaponType": "Yamato",
          "cub": {
              "name": "Phantom Blade",
              "notes": ""
          },
          "memory": "Imported from Build:Vergil",
          "bio": "A legendary devil swordsman who masters lightning-fast quick-draw techniques. The elder twin of Dante.",
          "effect": "Void Slash – Wielding Yamato + Tap Red Orb Vergil slashes with Yamato and slows enemy unit down, dealing 260% / 520% / 780% Ultima Slash DMG (400% / 800% / 1200% Ultima Slash DMG when in SDT Form). Recovers a total of 100 / 200 / 300 points of SDT over time. Gains Super Armor during 3-Pings. - Duri...",
          "priority": "",
          "notes": "A legendary devil swordsman who masters lightning-fast quick-draw techniques. The elder twin of Dante.",
          "specialties": [
              {
                  "name": "Burst - Deals massive DMG in a short time. Ultima Slash - This skill can unleash the Ultima Slash.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Yamato",
                  "description": "Void Slash – Wielding Yamato + Tap Red Orb Vergil slashes with Yamato and slows enemy unit down, dealing 260% / 520% / 780% Ultima Slash DMG (400% / 800% / 1200% Ultima Slash DMG when in SDT Form). Recovers a total of 100 / 200 / 300 points of SDT over time. Gains Super Armor during 3-Pings. - Duri..."
              },
              {
                  "name": "Yellow Orb: Beowulf",
                  "description": "Kick 13 – Wielding Beowulf + Tap Yellow Orb Vergil kicks and deals 400% / 800% / 1200% Physical DMG (deals 600% / 1200% / 1800% Physical DMG when in SDT form). Recovers a total of 50 / 100 / 150 points of SDT over time. Gains Super Armor during 3-Pings. - During end lag, press and hold Basic Attack..."
              },
              {
                  "name": "Blue Orb: Mirage Edge",
                  "description": "Drive – Wielding Mirage Edge + Tap Blue Orb Vergil launches a reverse grip slash, dealing 240% / 480% / 720% Ultima Slash DMG (340% / 680% / 1020% Ultima Slash DMG when in SDT Form) and restoring a total of 50 / 100 / 150 points of SDT. Gains Super Armor during 3-Pings. - During end lag, press and..."
              },
              {
                  "name": "Basic Attack: Trigger Heart",
                  "description": "Yamato Combo — With Yamato + Tap Basic Attack Launches 3 attacks with Yamato, dealing a total of 300% Ultima Slash DMG (or a total of 420% Ultima Slash DMG when in SDT Form). Keep tapping Basic Attack afterward to follow up with a vertical slash, dealing 160% Ultima Slash DMG (240% Ultima Slash DMG..."
              },
              {
                  "name": "Signature: Sin Devil Trigger",
                  "description": "Sin Devil Trigger – Not in SDT Form + 300 Points of SDT + Tap Signature Vergil unleashes the power of the devil blood and enters SDT Form, causing a DT Burst, dealing 1080% Ultima Slash DMG, and triggering Time Lag Calculation. In SDT Form, Vergil will have greatly enhanced strength, speed, special..."
              },
              {
                  "name": "QTE: Judgment Cut Fall",
                  "description": "Tap QTE Vergil casts Judgment Cut, dealing 600% Physical DMG."
              },
              {
                  "name": "Core Passive: Devil Hunter Skill",
                  "description": "Judgment Cut – With Yamato + Press and Hold Red Orb/Basic Attack/Jump + Release Button Casts Judgment Cut after performing the corresponding action, dealing 960% Ultima Slash DMG. When Vergil is in SDT Form, Judgment Cut has a bigger range and deals 1440% Ultima Slash DMG. Meanwhile, he can spend u..."
              },
              {
                  "name": "Leader: The Alpha and the Omega",
                  "description": "All team members deal 10% more Physical DMG and Ultima Slash DMG. Attackers gain 10% ATK."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Yamato",
                  "cub": "Phantom Blade",
                  "memories": "Imported from Build:Vergil",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Vergil"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "Unknown"
              },
              {
                  "label": "Activation",
                  "value": "Unknown"
              },
              {
                  "label": "Height",
                  "value": "Unknown"
              },
              {
                  "label": "Weight",
                  "value": "Unknown"
              },
              {
                  "label": "Vital Fluid",
                  "value": "Unknown"
              },
              {
                  "label": "HP",
                  "value": "1915"
              },
              {
                  "label": "ATK",
                  "value": "421"
              },
              {
                  "label": "DEF",
                  "value": "287"
              },
              {
                  "label": "CRIT",
                  "value": "191"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Vergil"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Vergil"
      },
      {
          "id": "veronica-aegis",
          "name": "Veronica: Aegis",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Aegis-Icon.png",
          "sigil": "VA",
          "role": "Amplifier",
          "frame": "Aegis",
          "faction": "Church of the Mechanics",
          "class": "Amplifier",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Weapon Charm",
          "weapon": "Empyrean Wrath",
          "weaponType": "Lance",
          "cub": {
              "name": "Scaled Rampart",
              "notes": ""
          },
          "memory": "Imported from Build:Aegis",
          "bio": "A former member of the Church of Machina, who left the organization for various reasons and now operates independently. Prefers expressing herself through force rather than words.",
          "effect": "Lateral Restraint: Execution Airborne + Tap Red Orb Veronica: Aegis swings her Lance, dealing DMG and entering Lateral Restraint Combo. - Can only be cast while airborne during Execution. Deals 200% / 400% / 600% Physical DMG based on the number of orbs pinged. - When having Searing Sight, deals 20...",
          "priority": "",
          "notes": "A former member of the Church of Machina, who left the organization for various reasons and now operates independently. Prefers expressing herself through force rather than words.",
          "specialties": [
              {
                  "name": "Amplification — Grants the power of healing and making allies deal more damage. Ignition - Skills can trigger the Ignition Effect.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Raging Thornfire",
                  "description": "Lateral Restraint: Execution Airborne + Tap Red Orb Veronica: Aegis swings her Lance, dealing DMG and entering Lateral Restraint Combo. - Can only be cast while airborne during Execution. Deals 200% / 400% / 600% Physical DMG based on the number of orbs pinged. - When having Searing Sight, deals 20..."
              },
              {
                  "name": "Yellow Orb: Blazing Pierce",
                  "description": "Severing Domain: During Adjudication + 100 Chaos Value + Tap Yellow Orb Veronica: Aegis charges briefly before slamming the ground, dealing Physical DMG. - Can be cast when having 100 Chaos Value. Deals 600% Physical DMG, gains 24 Signature Energy, and recovers HP equal to 20% ATK. Torrential Blast..."
              },
              {
                  "name": "Blue Orb: Twisted Prominence",
                  "description": "Coiling Horn: During Adjudication + Tap Blue Orb Veronica: Aegis gathers energy and charges forward to strike enemies, dealing Physical DMG and entering Coiling Horn Combo. - Can only be cast during Adjudication. Deals 80% / 160% / 240% Physical DMG based on the number of orbs pinged. - Enters Coil..."
              },
              {
                  "name": "Basic Attack: Draconic Prelude",
                  "description": "Chaotic Scales: During Adjudication + Tap Basic Attack During Adjudication, Veronica: Aegis's Basic Attacks deal a total of 300% Physical DMG. Unified Order: Execution Grounded + Tap Basic Attack During Execution, Veronica: Aegis's Basic Attacks deal a total of 400% Physical DMG. - When having Sear..."
              },
              {
                  "name": "Signature: Ember Renewal",
                  "description": "Blazing Desolation: During Adjudication + 60 Signature Energy + Tap/Press and Hold Signature Veronica: Aegis leaps into the air and arms herself. When casting, triggers Time Lag Calculation and enters Execution, gaining 9 Red Orbs. - Deals a total of 1800% Physical DMG in 3 hits. - When casting by..."
              },
              {
                  "name": "QTE: Malevolent Revival",
                  "description": "QTE – Tap QTE Deals damage and heals. - Deals a total of 600% Physical DMG. - If having Ember Mark, deals 600% Ignition DMG instead. - Restores HP equal to 100% of ATK."
              },
              {
                  "name": "Core Passive: Purging Judgment",
                  "description": "Raid Support During Adjudication, only Blue Orbs and Yellow Orb can be used. Basic attacks only generate Blue Orbs. - During Execution, only Red Orbs and Yellow Orb can be used. Basic attacks only generate Red Orbs. - When entering Execution, unused Blue Orbs from Adjudication are retained and Chao..."
              },
              {
                  "name": "Leader: Cleansing Eunoe",
                  "description": "Increases ATK of all members by 10%. Increases Physical DMG and Ignition DMG of all Amplifiers in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Empyrean Wrath",
                  "cub": "Scaled Rampart",
                  "memories": "Imported from Build:Aegis",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Aegis"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "23"
              },
              {
                  "label": "Activation",
                  "value": "5 Nov"
              },
              {
                  "label": "Height",
                  "value": "170cm"
              },
              {
                  "label": "Weight",
                  "value": "55kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "Unknown"
              },
              {
                  "label": "HP",
                  "value": "2030"
              },
              {
                  "label": "ATK",
                  "value": "307"
              },
              {
                  "label": "DEF",
                  "value": "413"
              },
              {
                  "label": "CRIT",
                  "value": "171"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Veronica%3A_Aegis"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Veronica%3A_Aegis"
      },
      {
          "id": "wanshi-hypnos",
          "name": "Wanshi: Hypnos",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Hypnos-Icon.png",
          "sigil": "WH",
          "role": "Support",
          "frame": "Hypnos",
          "faction": "StrikeHawk",
          "class": "Support",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "20"
              },
              {
                  "name": "ice",
                  "percent": "80"
              }
          ],
          "rank": "A",
          "gift": "Hugging Pillow",
          "weapon": "Scale",
          "weaponType": "Rifle Set",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:Hypnos",
          "bio": "As a Strike Hawk member, Wanshi always has a sleepy look. But once you get to know him better, you will realize he can be very trustworthy when things have gone bad.",
          "effect": "Wanshi: Hypnos launches a spinning kick, dealing Physical DMG in a straight line (Ice DMG instead upon a 3-Ping). 1-Ping and 2-Ping grant a short duration of Super Armor while 3-Ping grants a longer duration of Super Armor. - Deals 170% / 340% / 510% Physical DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "As a Strike Hawk member, Wanshi always has a sleepy look. But once you get to know him better, you will realize he can be very trustworthy when things have gone bad.",
          "specialties": [
              {
                  "name": "Heal — Able to heal friendly force Snipe — Able to precisely snipe the enemy after dodge",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Frost Spin — Ping Red Orb",
                  "description": "Wanshi: Hypnos launches a spinning kick, dealing Physical DMG in a straight line (Ice DMG instead upon a 3-Ping). 1-Ping and 2-Ping grant a short duration of Super Armor while 3-Ping grants a longer duration of Super Armor. - Deals 170% / 340% / 510% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Baseline Control — Ping Yellow Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Wanshi: Hypnos launches an elbow attack, dealing Physical DMG in a straight line (Ice DMG instead upon a 3-Ping). This skill makes Wanshi invincible for a short duration, and 3-Ping will grant a longer duration of Super Armor. - Dea..."
              },
              {
                  "name": "Blue Orb: Frost Explosion — Ping Blue Orb",
                  "description": "Hurls a frost grenade to slow enemies in the area briefly, dealing Ice DMG and healing allies in a large area. 3-Ping grants a longer duration of Super Armor. - Deals 140% / 280% / 420% Ice DMG based on the number of orbs pinged. - Heals HP equal to 30% / 60% / 90% of Wanshi: Hypnos's ATK based on..."
              },
              {
                  "name": "Basic Attack: Frost Wings",
                  "description": "Basic Attack — Tap Basic Attack Wanshi: Hypnos hits and shoots the target, dealing Physical DMG and Ice DMG. Wanshi may immediately launch the 3rd hit of his Basic Attack after dodging, 1 Ping or 2-Ping. - Deals 350% Physical DMG and 360% Ice DMG in total. Basic Attack — Any 3-Ping + Press and hold..."
              },
              {
                  "name": "Signature: Zero Point Bloom",
                  "description": "Signature Move — 80 Energy + Tap Signature Signature Move: Consumes 80 Energy to deal Ice DMG to the area in front. - Deals 1400% Ice DMG in total."
              },
              {
                  "name": "QTE: Hypnotic Gift",
                  "description": "Hurls a frost grenade to slow enemies in the area briefly. Upon explosion, it deals Ice DMG and continuous Ice DMG afterward, while healing allies in a large area and granting them Frost Crystal that increases their Ice DMG. - Grenade deals 360% Ice DMG upon explosion and 200% continuous Ice DMG in..."
              },
              {
                  "name": "Core Passive: Cold Snap",
                  "description": "Core Passive — Tactical Stance + Release Basic Attack Releasing the Basic Attack button during Tactical Stance will trigger Blooming Shot, dealing Ice DMG in a straight line. - Deals 200% Ice DMG in total. Core Passive — Tactical Stance + Release Basic Attack + Successful Dodge The backstep of Bloo..."
              },
              {
                  "name": "Leader: Resonance of Clarity",
                  "description": "Increases HP of all members by 10% and Ice DMG of all members by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Scale",
                  "cub": "",
                  "memories": "Imported from Build:Hypnos",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Hypnos"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "1"
              },
              {
                  "label": "Psychological Age",
                  "value": "20"
              },
              {
                  "label": "Activation",
                  "value": "21 May"
              },
              {
                  "label": "Height",
                  "value": "178cm"
              },
              {
                  "label": "Weight",
                  "value": "64kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "B"
              },
              {
                  "label": "HP",
                  "value": "1514"
              },
              {
                  "label": "ATK",
                  "value": "291"
              },
              {
                  "label": "DEF",
                  "value": "213"
              },
              {
                  "label": "CRIT",
                  "value": "151"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Wanshi%3A_Hypnos"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Wanshi%3A_Hypnos"
      },
      {
          "id": "wanshi-lucid-dreamer",
          "name": "Wanshi: Lucid Dreamer",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Character-LucidDreamer-Portrait.png",
          "sigil": "WL",
          "role": "Tank",
          "frame": "Lucid Dreamer",
          "faction": "StrikeHawk",
          "class": "Tank",
          "element": "ice",
          "elements": [
              {
                  "name": "ice",
                  "percent": "100"
              }
          ],
          "rank": "S",
          "gift": "Hugging Pillow",
          "weapon": "Renewed Dawn",
          "weaponType": "Revolver",
          "cub": {
              "name": "Snowveil",
              "notes": "Snowveil will flick its tail to fire crystal shards, inflicting enemies in the area with Rigidness and dealing DMG. Rigidness: Enemies will be rooted for 2s."
          },
          "memory": "",
          "bio": "This Tank frame is equipped with an advanced auto-aiming system while retaining some medical devices that are usually exclusive to Support frames. After retrieving all of his memory data, Wanshi has grown into a more complete version of himself. Though the long dream has yet to end, his path forward has already become clear.",
          "effect": "Flurry Blitz — Calibration Mode + Ping Red Orb Shoots 1 Condensation Projectile to deal Ice DMG or Glaciation DMG depending on the current Calibration Mode. On consecutive casts, enters Repeater Mode to gain Super Armor, 50% DMG Reduction and Maim, while gaining additional Signature Energy. - In Qu...",
          "priority": "",
          "notes": "This Tank frame is equipped with an advanced auto-aiming system while retaining some medical devices that are usually exclusive to Support frames. After retrieving all of his memory data, Wanshi has grown into a more complete version of hi...",
          "specialties": [
              {
                  "name": "Defense Down - Able to reduce enemy Defense. Glaciation - Skills can trigger Glaciation",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Arctic Current",
                  "description": "Flurry Blitz — Calibration Mode + Ping Red Orb Shoots 1 Condensation Projectile to deal Ice DMG or Glaciation DMG depending on the current Calibration Mode. On consecutive casts, enters Repeater Mode to gain Super Armor, 50% DMG Reduction and Maim, while gaining additional Signature Energy. - In Qu..."
              },
              {
                  "name": "Yellow Orb: Strigine Assault",
                  "description": "Blink Assault — Ping Yellow Orb Draws the weapon and rushes forward to deal Ice DMG, while gaining Calibration, and Glaciation. Upon 3-Ping, additionally gains Signature Energy. - Based on the number of orbs pinged, deals 90% / 180% / 270% Ice DMG and gains 20 / 40 / 80 Calibration, and 10 / 20 / 3..."
              },
              {
                  "name": "Blue Orb: Frosty Fusillade",
                  "description": "Icile Burst — Ping Blue Orb Steps back and throws a tactical grenade that explodes after a delay to deal Ice DMG to enemies, while gaining Calibration and Glaciation. If Lucid Dreamer is within the explosion range, this will count as self damage. Upon a 3-Ping, additionally gains Signature Energy...."
              },
              {
                  "name": "Basic Attack: Biting Wind",
                  "description": "Sharp Gunslinger — Tap Basic Attack Launches consecutive attacks with the revolver and summons a drone to aid. - Deals a total of 464% Ice DMG. Frosty Barrage — Calibration Mode + Cylinder Not Empty + Press and Hold Basic Attack Enables Double Action Mode to activate a hidden cylinder and continuou..."
              },
              {
                  "name": "Signature: Bleak Oblivion",
                  "description": "Superlink Flight — 160 Signature Energy + Frosty Barrage/Snow Storm Inactive + Tap Signature Summons a drone to create a field that pulls enemy units, then shoots Enhanced Condensation Projectiles to deal Ice or Glaciation DMG depending on the current Calibration Mode. After casting, instantly gain..."
              },
              {
                  "name": "QTE: Point Blank",
                  "description": "Dashes forward, then shoots at point-blank range to deal Ice DMG and weaken the enemy. - Deals 600% Ice DMG and inflicts Frost Corrosion that reduces Ice Resistance by 25% for 8s."
              },
              {
                  "name": "Core Passive: Moment of Clarity",
                  "description": "Silent Snow — Press and Hold Red Orb or Dodge Starts charging to generate Calibration, while gaining Super Armor and 90% DMG Reduction. - When Calibration is lower than 80, gains 20 Calibration every second. When Calibration is lower than 160 but no lower than 80, gains 40 Calibration every second...."
              },
              {
                  "name": "Leader: Lucidity of Mind",
                  "description": "Increases Ice DMG of all members by 10%. Increases DMG of all Tank Omniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Renewed Dawn",
                  "cub": "Snowveil",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Lucid Dreamer."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "20"
              },
              {
                  "label": "Activation",
                  "value": "May 21"
              },
              {
                  "label": "Height",
                  "value": "178cm"
              },
              {
                  "label": "Weight",
                  "value": "64kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "B"
              },
              {
                  "label": "HP",
                  "value": "2050"
              },
              {
                  "label": "ATK",
                  "value": "402"
              },
              {
                  "label": "DEF",
                  "value": "310"
              },
              {
                  "label": "CRIT",
                  "value": "171"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Wanshi%3A_Lucid_Dreamer"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Wanshi%3A_Lucid_Dreamer"
      },
      {
          "id": "watanabe-astral",
          "name": "Watanabe: Astral",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Astral-Icon.png",
          "sigil": "WA",
          "role": "Attacker",
          "frame": "Astral",
          "faction": "TheForsaken",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "50"
              },
              {
                  "name": "dark",
                  "percent": "50"
              }
          ],
          "rank": "A",
          "gift": "MRE Rations",
          "weapon": "Peacemaker",
          "weaponType": "Dagger",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "A frame specially designed to control spacecraft. It was used by Watanabe when he served in the Task Force.",
          "effect": "Hops back and throws darts in a fan-shaped area, dealing Physical DMG. Trailblade can be triggered immediately after pinging. (Dark DMG instead on a 3-Ping.) - Darts deal 200% / 400% / 600% Physical DMG based on the number of orbs pinged.",
          "priority": "",
          "notes": "A frame specially designed to control spacecraft. It was used by Watanabe when he served in the Task Force.",
          "specialties": [
              {
                  "name": "Agility - Able to transport across space instantly. Mixed Damage - Able to deal Physical and Elemental DMG.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Comet Tail — Ping Red Orb",
                  "description": "Hops back and throws darts in a fan-shaped area, dealing Physical DMG. Trailblade can be triggered immediately after pinging. (Dark DMG instead on a 3-Ping.) - Darts deal 200% / 400% / 600% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Yellow Orb: Celestial Centrifuge — Ping Yellow Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in fulfills the first half of this character's Core Passive. Spins forward into the air, draws in, and slashes at surrounding targets, dealing Physical DMG. Upon landing, strikes nearby targets for Physical DMG. (Dark DMG ins..."
              },
              {
                  "name": "Blue Orb: Meteoric Strike — Ping Blue Orb",
                  "description": "Shifts behind the target and attacks, dealing Physical DMG. (Dark DMG instead on a 3-Ping.) - Deals 150% / 300% / 450% Physical DMG based on the number of orbs pinged."
              },
              {
                  "name": "Basic Attack: Death Star — Tap Basic Attack",
                  "description": "Slashes at the target, dealing Physical DMG. After dodging or pinging a Red Orb, Basic Attacks will trigger Trailblade, dealing Physical DMG. - The slashes deal 600% Physical DMG. - Trailblade deals 200% Physical DMG."
              },
              {
                  "name": "Signature: Signature - Supernova Blast",
                  "description": "Signature Move — 100 Energy + Tap Signature Transforms into shadow to assassinate the target, dealing Dark DMG. - Each attack deals 600% Dark DMG."
              },
              {
                  "name": "QTE: Shadow Cross",
                  "description": "Dives at the target, splitting into shadows upon landing and attacks again, dealing Dark DMG. - Each attack deals 300% Dark DMG."
              },
              {
                  "name": "Core Passive: Cosmic Wave",
                  "description": "Core Passive — Any 3-Ping + Ping Red Orb Pinging a Red Orb after any 3-Ping transforms Watanabe: Astral into a shadow that launches consecutive attacks in front of him, dealing Dark DMG. Enters Enhanced Shadow Form at the end of the attack. - Each hit deals 60% Dark DMG. Core Passive — Enhanced Sha..."
              },
              {
                  "name": "Leader: Leader - Nameless Shadow",
                  "description": "Increases Dark DMG of all members by 10%. Increases ATK of all Attacker Omniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Peacemaker",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Astral."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "6"
              },
              {
                  "label": "Psychological Age",
                  "value": "26"
              },
              {
                  "label": "Activation",
                  "value": "12 Apr"
              },
              {
                  "label": "Height",
                  "value": "185cm"
              },
              {
                  "label": "Weight",
                  "value": "76kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "O"
              },
              {
                  "label": "HP",
                  "value": "1544"
              },
              {
                  "label": "ATK",
                  "value": "345"
              },
              {
                  "label": "DEF",
                  "value": "215"
              },
              {
                  "label": "CRIT",
                  "value": "145"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Watanabe%3A_Astral"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Watanabe%3A_Astral"
      },
      {
          "id": "watanabe-epitaph",
          "name": "Watanabe: Epitaph",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Epitaph-Icon.png",
          "sigil": "WE",
          "role": "Tank",
          "frame": "Epitaph",
          "faction": "TheForsaken",
          "class": "Tank",
          "element": "fire",
          "elements": [
              {
                  "name": "fire",
                  "percent": "90"
              },
              {
                  "name": "physical",
                  "percent": "10"
              }
          ],
          "rank": "S",
          "gift": "MRE Rations",
          "weapon": "Dark Falcon",
          "weaponType": "Pioneer's Blade",
          "cub": {
              "name": "Shadow Wing",
              "notes": ""
          },
          "memory": "",
          "bio": "A frame independently developed by the Forsaken for tough battles with a brand-new design of the M.I.N.D. carrier module.",
          "effect": "Leaps into the air using a grappling hook, then slashes the enemy to deal Fire DMG. Gains Super Armor while using this skill. If this skill is cast precisely at the moment of an incoming attack, Watanabe will Parry the attack and be immune to the DMG. Tapping Basic Attack during this skill immediat...",
          "priority": "",
          "notes": "A frame independently developed by the Forsaken for tough battles with a brand-new design of the M.I.N.D. carrier module.",
          "specialties": [
              {
                  "name": "Resistance Reduction — Able to reduce Elemental Resistance of enemies. Burst — Deals massive DMG in a short time.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Blazing Burst — Ping Red Orb",
                  "description": "Leaps into the air using a grappling hook, then slashes the enemy to deal Fire DMG. Gains Super Armor while using this skill. If this skill is cast precisely at the moment of an incoming attack, Watanabe will Parry the attack and be immune to the DMG. Tapping Basic Attack during this skill immediat..."
              },
              {
                  "name": "Yellow Orb: Flame Siphon — Ping Yellow Orb",
                  "description": "Spins and slashes continuously, pulling in nearby enemy units and dealing Fire DMG. - Deals 230% / 460% / 690% Fire DMG in total based on the number of orbs pinged."
              },
              {
                  "name": "Blue Orb: Fiery Glimpse — Ping Blue Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Kicks the enemy away, then spins and slashes to deal Fire DMG. - Deals 220% / 440% / 660% Fire DMG in total based on the number of orbs pinged."
              },
              {
                  "name": "Basic Attack: Scalding Blade",
                  "description": "Basic Attack — Tap Basic Attack Unleashes a combination of attacks with Trailblade and shotgun, dealing Physical DMG (Fire DMG instead under Assault Mode). - Deals 496% Physical DMG in total. - Deals 646% Fire DMG in total underAssault Mode. Flaming Bombardment — Have Shotshell + Tap Basic Attack I..."
              },
              {
                  "name": "Signature: Hyper Reversal",
                  "description": "Core Awakening — 15 Energy + Tap Signature Releases the Core Energy to activate Assault Mode, dealing Fire DMG to nearby enemy units and inflicting Scorching Invasion that reduces their Fire Resistance. Time Lag Calculation is triggered while Watanabe casts this Signature Move. - Deals 600% Fire DM..."
              },
              {
                  "name": "QTE: Pincer Besiegement",
                  "description": "Spins and slashes continuously to pull in nearby enemy units, dealing Fire DMG to the target while inflicting Scorching Invasion that reduces their Fire Resistance. - Deals 600% Fire DMG in total. Scorching Invasion reduces the target’s Fire Resistance by 25% for 8s."
              },
              {
                  "name": "Core Passive: Veteran's Reflex",
                  "description": "Composite Structure Under Patrol Mode, Watanabe can only use Yellow or Blue Orbs, and his Basic Attacks only generate Yellow or Blue Orbs. When Assault Mode is activated, he can only use Red and Blaze Orbs, and his Basic Attacks only generate Red Orbs. Engine Optimization — Any 3-Ping or upon enter..."
              },
              {
                  "name": "Leader: Guardian's Aegis",
                  "description": "Increases Fire DMG of all members by 10%. Increases DMG of all Tank Omniframes in the team by 5%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Dark Falcon",
                  "cub": "Shadow Wing",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Epitaph."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "26"
              },
              {
                  "label": "Activation",
                  "value": "12 Apr"
              },
              {
                  "label": "Height",
                  "value": "185cm"
              },
              {
                  "label": "Weight",
                  "value": "76kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "O"
              },
              {
                  "label": "HP",
                  "value": "2011"
              },
              {
                  "label": "ATK",
                  "value": "449"
              },
              {
                  "label": "DEF",
                  "value": "310"
              },
              {
                  "label": "CRIT",
                  "value": "191"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Watanabe%3A_Epitaph"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Watanabe%3A_Epitaph"
      },
      {
          "id": "watanabe-nightblade",
          "name": "Watanabe: Nightblade",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-Nightblade-Icon.png",
          "sigil": "WN",
          "role": "Attacker",
          "frame": "Nightblade",
          "faction": "TheForsaken",
          "class": "DPS",
          "element": "physical",
          "elements": [
              {
                  "name": "physical",
                  "percent": "100"
              }
          ],
          "rank": "A",
          "gift": "MRE Rations",
          "weapon": "Soul Ripper",
          "weaponType": "Dagger",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "",
          "bio": "Leader of the Forsaken, who chose to leave Babylonia to protect Oasis with his comrades who have been forgotten by the world.",
          "effect": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in fulfills the first half of this character's Core Passive. Launches a 4-combo attack at the enemies ahead, dealing Physical DMG. Launches an extra heavy blow upon a 3-Ping. - Deals 160% / 320% / 480% Physical DMG based on t...",
          "priority": "",
          "notes": "Leader of the Forsaken, who chose to leave Babylonia to protect Oasis with his comrades who have been forgotten by the world.",
          "specialties": [
              {
                  "name": "Duel - Has strong single attack ability. Backstab - Attacks at the back deal Extra Damage.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Black Sakura — Ping Red Orb",
                  "description": "Automatically uses a 3-Ping version of this attack upon switch-in. Switch-in fulfills the first half of this character's Core Passive. Launches a 4-combo attack at the enemies ahead, dealing Physical DMG. Launches an extra heavy blow upon a 3-Ping. - Deals 160% / 320% / 480% Physical DMG based on t..."
              },
              {
                  "name": "Yellow Orb: Shadow Thrust — Ping Yellow Orb",
                  "description": "Thrusts and pierces the enemies ahead, dealing Physical DMG to enemies in the path. Launches an extra heavy blow upon a 3-Ping. - Deals 160% / 320% / 480% Physical DMG based on the number of orbs pinged. - Deals additional 120% Physical DMG upon a 3-Ping."
              },
              {
                  "name": "Blue Orb: Bloodshed — Ping Blue Orb",
                  "description": "Stabs the target with a blade and pull it out, dealing Physical DMG twice in total. Critical hits are guaranteed when attacking the target from behind. - Deals 80% / 160% / 240% Physical DMG in the initial stab, then deals 70% / 140% / 210% Physical DMG upon pulling the blade out based on the numbe..."
              },
              {
                  "name": "Basic Attack: Slash — Tap Basic Attack",
                  "description": "Launches consecutive attacks with his dual blades, dealing Physical DMG. - Deals 740% Physical DMG in total."
              },
              {
                  "name": "Signature: Night Blade",
                  "description": "Signature Move — Consume 100 Energy + Tap Signature Move Uses his blade to attacks enemies, dealing Physical DMG. - Deals 3000% Physical DMG in total."
              },
              {
                  "name": "QTE: Flash Fall",
                  "description": "Watanabe: Nightblade enters the battlefield and thrusts downward, dealing Physical DMG to the target. - Deals 600% Physical DMG in total."
              },
              {
                  "name": "Core Passive: Fleeting Phantom",
                  "description": "Core Passive — Two 3-Pings + Tap Basic Attack The final strike of each 3-Ping marks the target. Releases a shade when the mark reaches 2 stacks. The shade attacks once with every Basic Attack. - The shade deals 90% Physical DMG with every attack. - The shade lasts 5s."
              },
              {
                  "name": "Leader: Leader - Integrated Management",
                  "description": "Increases CRIT Rate by 10% when there are 3 different classes in the team."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Soul Ripper",
                  "cub": "",
                  "memories": "",
                  "priority": "",
                  "notes": "No build template detected for Nightblade."
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "6"
              },
              {
                  "label": "Psychological Age",
                  "value": "26"
              },
              {
                  "label": "Activation",
                  "value": "12 Apr"
              },
              {
                  "label": "Height",
                  "value": "185cm"
              },
              {
                  "label": "Weight",
                  "value": "76kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "O"
              },
              {
                  "label": "HP",
                  "value": "1515"
              },
              {
                  "label": "ATK",
                  "value": "318"
              },
              {
                  "label": "DEF",
                  "value": "204"
              },
              {
                  "label": "CRIT",
                  "value": "159"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Watanabe%3A_Nightblade"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Watanabe%3A_Nightblade"
      },
      {
          "id": "yata-fulgor",
          "name": "Yata: Fulgor",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Dialogue-YataFulgor-Icon.png",
          "sigil": "YF",
          "role": "Attacker",
          "frame": "Fulgor",
          "faction": "Scarab",
          "class": "DPS",
          "element": "lightning",
          "elements": [
              {
                  "name": "lightning",
                  "percent": "100"
              }
          ],
          "rank": "A",
          "gift": "Hydrangea Bouquet",
          "weapon": "Fudo Myo-o",
          "weaponType": "Powered Arms",
          "cub": {
              "name": "",
              "notes": ""
          },
          "memory": "Imported from Build:Fulgor",
          "bio": "Following the style of the Yata human era, this unit is specifically designed for extended combat operations. Equipped with high-performance plasma armatures in its arm structure and rear-mounted mechanical arms, it can unleash devastating kinetic energy in an instant.",
          "effect": "Red Orb Combo 1 — Not in Ping Combo + Ping Red Signal Orb Gathers electric currents and releases a batting strike, dealing Lightning DMG and gaining Heartflow. - Deals 100% / 200% / 300% Lightning DMG and gains 10 / 20 / 30 Heartflow based on the orbs pinged. - When there are Ice Spikes, deals 80%...",
          "priority": "",
          "notes": "Following the style of the Yata human era, this unit is specifically designed for extended combat operations. Equipped with high-performance plasma armatures in its arm structure and rear-mounted mechanical arms, it can unleash devastating...",
          "specialties": [
              {
                  "name": "Burst - Deals massive DMG in a short time. Glaciate - Skills can trigger the Glaciation Effect.",
                  "description": ""
              }
          ],
          "abilities": [
              {
                  "name": "Red Orb: Esotericism: Homer",
                  "description": "Red Orb Combo 1 — Not in Ping Combo + Ping Red Signal Orb Gathers electric currents and releases a batting strike, dealing Lightning DMG and gaining Heartflow. - Deals 100% / 200% / 300% Lightning DMG and gains 10 / 20 / 30 Heartflow based on the orbs pinged. - When there are Ice Spikes, deals 80%..."
              },
              {
                  "name": "Yellow Orb: Esotericism: Collapse",
                  "description": "Yellow Orb Combo 1 — Not in Ping Combo + Ping Yellow Signal Orb Accumulates energy to dash forward, dealing Lightning DMG and gaining Heartflow. - Deals 120% / 240% / 360% Lightning DMG and gains 10 / 20 / 30 Heartflow points based on the orbs pinged. - When there are Ice Spikes, deals 90% / 180% /..."
              },
              {
                  "name": "Blue Orb: Esotericism: Slash",
                  "description": "Emptiness — Tap Esoteric Orb Harnesses the power of electricity and light to slash the enemy, dealing Lightning DMG. - Deals 420% Lightning DMG and gains 1 stack of Will and 1 stack of Illumination. - When there are Ice Spikes, deals 330% Glaciation DMG instead. - Using an Esoteric Orb will be rega..."
              },
              {
                  "name": "Basic Attack: Raging Gust",
                  "description": "Attacks the enemy with martial arts moves, dealing Lightning DMG. - Deals a total of 610% Lightning DMG."
              },
              {
                  "name": "Signature: Skyward Flash",
                  "description": "Signature Move — 80 Energy + Tap Signature Uses all energy to fire a blast shell, dealing 2400% Lightning DMG, during which time, becomes Invincible and activates all available QTEs. - When there are Ice Spikes, deals 2000% Glaciation DMG instead. - Spend the existing Will stacks. Each stack will i..."
              },
              {
                  "name": "QTE: Homer Break",
                  "description": "Releases a batting strike, dealing a total of 600% Lightning DMG."
              },
              {
                  "name": "Core Passive: Thunder Outflux",
                  "description": "Vortex Absorption Basic Attack only grants Red or Yellow Orbs. Ping Red or Yellow Orbs to gain Heartflow. Divine Teaching Yata can enhance herself through Heartflow. - Yata is in the Void Realm upon entering the battlefield. After gaining 90 Heartflow, she will enter the Sanctuary Realm and gains a..."
              },
              {
                  "name": "Leader: Absolute Thunder",
                  "description": "Lightning DMG of all team members increases by 10%."
              }
          ],
          "builds": [
              {
                  "name": "Recommended",
                  "weapon": "Fudo Myo-o",
                  "cub": "",
                  "memories": "Imported from Build:Fulgor",
                  "priority": "Check the linked Gray Ravens build section for slot-by-slot memory placement.",
                  "notes": "Build source template: Build:Fulgor"
              }
          ],
          "facts": [
              {
                  "label": "Service Time",
                  "value": "Unknown"
              },
              {
                  "label": "Psychological Age",
                  "value": "17"
              },
              {
                  "label": "Activation",
                  "value": "February 10"
              },
              {
                  "label": "Height",
                  "value": "165cm"
              },
              {
                  "label": "Weight",
                  "value": "47kg"
              },
              {
                  "label": "Vital Fluid",
                  "value": "O"
              },
              {
                  "label": "HP",
                  "value": "1469"
              },
              {
                  "label": "ATK",
                  "value": "312"
              },
              {
                  "label": "DEF",
                  "value": "222"
              },
              {
                  "label": "CRIT",
                  "value": "137"
              },
              {
                  "label": "Source",
                  "value": "https://grayravens.com/wiki/Yata%3A_Fulgor"
              }
          ],
          "commonRotations": [
              {
                  "name": "Baseline route",
                  "steps": "Swap in -> 3-ping priority orb -> Trigger QTEs -> Use core passive -> Spend signature",
                  "notes": "Imported as a starter route. Refine this in Manage with exact Gray Ravens gameplay notes."
              }
          ],
          "sourceUrl": "https://grayravens.com/wiki/Yata%3A_Fulgor"
      }
  ],
  tiers: {
    warzone: {
      "S+": ["lucia-crimson-weave", "bianca-stigmata"],
      S: ["lee-hyperreal", "vera-garnet"],
      A: ["liv-luminance", "noan-arca"]
    },
    paincage: {
      "S+": ["bianca-stigmata"],
      S: ["lucia-crimson-weave", "lee-hyperreal"],
      A: ["vera-garnet", "liv-luminance", "noan-arca"]
    },
    general: {
      "S+": ["lucia-crimson-weave", "bianca-stigmata"],
      S: ["lee-hyperreal", "vera-garnet", "liv-luminance"],
      A: ["noan-arca"]
    }
  },
  teams: [
    {
      id: "thunder-vanguard",
      name: "Thunder Vanguard",
      element: "lightning",
      members: ["lucia-crimson-weave", "vera-garnet", "liv-luminance"],
      gameplan: "Open on tank for shred, swap Lucia into matrix, spend burst, then refresh QTEs before the next sword wave chain.",
      rotation: "crimson-standard"
    },
    {
      id: "physical-cleave",
      name: "Physical Cleave",
      element: "physical",
      members: ["bianca-stigmata", "liv-luminance", "vera-garnet"],
      gameplan: "Prime support field, enter Bianca during matrix, convert three-pings into sword traces, and reserve ult for defense break.",
      rotation: "stigmata-boss"
    },
    {
      id: "ember-array",
      name: "Ember Array",
      element: "fire",
      members: ["lee-hyperreal", "liv-luminance", "vera-garnet"],
      gameplan: "Use off-field assists to keep Lee's burst window clean, then cash heat during grouped enemy waves.",
      rotation: "hyperreal-wave"
    },
    {
      id: "nightfall-line",
      name: "Arca Lightning Line",
      element: "lightning",
      members: ["noan-arca", "liv-luminance", "vera-garnet"],
      gameplan: "A flexible lightning line that values simple orb order, reliable QTEs, and consistent core passive uptime.",
      rotation: "custom"
    }
  ],
  rotations: [
    {
      id: "crimson-standard",
      name: "Crimson Weave Lightning Burst",
      team: ["vera-garnet", "liv-luminance", "lucia-crimson-weave"],
      notes: "The goal is to enter Lucia with shred and support QTE ready, then hold the field until sword wave expiry.",
      steps: [
        ["swap", "Vera", "Swap Vera in", "00.0", "Apply tank class shred and pull targets together."],
        ["orb3", "3-Ping", "Yellow or red 3-ping", "01.2", "Triggers QTE windows and starts lightning vulnerability."],
        ["qte", "Liv QTE", "Call support", "02.0", "Adds healing field and Da Vinci-style assist value."],
        ["swap", "Lucia", "Swap Lucia in", "03.0", "Enter during matrix or immediately after tank setup."],
        ["core", "Core", "Sword wave chain", "04.5", "Spend prepared orbs into core passive."],
        ["ult", "Ult", "Signature burst", "08.0", "Use while shred and support field are still active."]
      ]
    },
    {
      id: "stigmata-boss",
      name: "Stigmata Boss Break",
      team: ["liv-luminance", "vera-garnet", "bianca-stigmata"],
      notes: "Built for Pain Cage style routing: compress buffs, break defense, then route Bianca's burst into the boss punish window.",
      steps: [
        ["support", "Liv", "Open support field", "00.0", "Guarantees sustain and QTE setup."],
        ["swap", "Vera", "Tank swap", "01.5", "Brief shred setup before Bianca takes field."],
        ["qte", "Liv QTE", "Refresh QTE", "02.3", "Stack support value before matrix entry."],
        ["swap", "Bianca", "Main DPS entry", "03.4", "Use matrix or dodge cancel to protect the opener."],
        ["orb3", "3-Ping", "Trace setup", "04.6", "Prioritize clean three-pings over low-value spam."],
        ["ult", "Ult", "Boss break burst", "09.0", "Cash the window after traces and defense break align."]
      ]
    },
    {
      id: "hyperreal-wave",
      name: "Hyperreal Wave Clear",
      team: ["vera-garnet", "lee-hyperreal", "liv-luminance"],
      notes: "This route favors wave control. The visual read should tell a player exactly when to stop fishing and spend heat.",
      steps: [
        ["swap", "Vera", "Group enemies", "00.0", "Pull the wave into a stable hitbox."],
        ["orb3", "3-Ping", "Trigger QTE", "01.0", "Prepares assists before Lee arrives."],
        ["swap", "Lee", "Hyperreal entry", "02.2", "Begin heat building while enemies are grouped."],
        ["core", "Core", "Heat conversion", "04.0", "Convert red priority into burst resources."],
        ["qte", "Liv QTE", "Stabilize field", "05.5", "Refresh support without breaking Lee's tempo."],
        ["ult", "Ult", "Wave finisher", "07.5", "Spend into the densest part of the wave."]
      ]
    }
  ],
  memories: [
      {
          "id": "aline",
          "name": "Aline",
          "pageTitle": "Aline",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Aline-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Extra DMG Bonus increases by 5% and Ice DMG increases by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Base DMG of Pure Color: Theme Emphasis and Color Mix: Clash of Concepts increases by 50%. Base DMG of Vibrant Brushstroke increases by 80%."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Aline",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Irene-Icon-1.png",
          "recommendedUsers": [
              "Kaleido"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Irene-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Irene-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Irene-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Irene-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Irene-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Irene-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "alphonse",
          "name": "Alphonse",
          "pageTitle": "Alphonse",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Alphonse-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Fire DMG increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Base DMG of Flame Eruption and Thermal Erosion increases by 100%. Firepower Bulwark will inflict Scorching Invasion on the target hit, which will reduce their Fire Resistance for 8s. Duration resets every time it is triggered."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Alphonse",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Alphonse-Icon-1.png",
          "recommendedUsers": [
              "Epitaph"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Alphonse-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Alphonse-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Alphonse-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Alphonse-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Alphonse-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Alphonse-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "barcelo",
          "name": "Barcelo",
          "pageTitle": "Barcelo",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Barcelo-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 7% and Dark DMG and Plasma Beam DMG increase by 3%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Base DMG of Invitation to a Radiant Dream doubles."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Barcelo",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Barcelo-Icon-1.png",
          "recommendedUsers": [
              "Daemonissa"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Barcelo-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Barcelo-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Barcelo-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Barcelo-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Barcelo-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Barcelo-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "bathlon",
          "name": "Bathlon",
          "pageTitle": "Bathlon",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bathlon-Bust.png",
          "stats": {
              "hp": "1453",
              "crit": "64",
              "atk": "134",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 3% and Dark DMG increases by 7%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Extra DMG Bonus increases by 10%. Attacking a target will inflict them with Corruption, reducing their Dark Resistance by 15% for 8s (10s cooldown on the same target). Attacking targets affected by Corruption will trigger an Explosion that deals 600% Dark DMG (6s cooldown on the same target)."
              },
              {
                  "label": "OLD 4-Piece Set",
                  "description": "Dealing DMG has a 20% chance to summon a Dark Zone that lasts 5s. 5s cooldown. The Dark Zone will inflict Corruption on the targets within it for 3s. Attacking a Corrupted target has a 20% chance to gain 1 random Signal Orb. 12s cooldown. Corruption: Deals 80% Dark DMG for every 2s and reduces Dark Resistance by 8%."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Bathlon",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bathlon-Icon-1.png",
          "recommendedUsers": [
              "Tenebrion",
              "Astral",
              "Rozen",
              "XXI",
              "Scire"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bathlon-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bathlon-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bathlon-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bathlon-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bathlon-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bathlon-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "boone",
          "name": "Boone",
          "pageTitle": "Boone",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Boone-Bust.png",
          "stats": {
              "hp": "1506",
              "crit": "62",
              "atk": "134",
              "def": "228"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Dark DMG increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Doubles the Base DMG increase effect of Karenina: Scire's Kinetic Energy for Starshatter Horizon and the Base DMG multiplier of Leap Attack and Radiant Whirlwind."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Boone",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Boone-Icon-1.png",
          "recommendedUsers": [
              "Scire"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Boone-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Boone-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Boone-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Boone-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Boone-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Boone-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "bulgakov",
          "name": "Bulgakov",
          "pageTitle": "Bulgakov",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bulgakov-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Nihil DMG increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Upon entering battle, additionally gains 3 Red Orbs after using Fatal Kiss for the first time. Extra DMG of Fatal Kiss and Death's Promise increases by 50%."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Bulgakov",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bulgakov-Icon-1.png",
          "recommendedUsers": [
              "Dirge"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bulgakov-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bulgakov-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bulgakov-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bulgakov-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bulgakov-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bulgakov-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "bunsen",
          "name": "Bunsen",
          "pageTitle": "Bunsen",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bunsen-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Physical DMG increases by 5%, and Ultima Slash DMG increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "When Truewill is 5 or greater, ATK increases by 5%, and Ultima Slash DMG increases by 10%."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Bunsen",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bunsen-Icon-1.png",
          "recommendedUsers": [
              "Arete"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bunsen-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bunsen-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bunsen-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bunsen-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bunsen-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Bunsen-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "burana",
          "name": "Burana",
          "pageTitle": "Burana",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Burana-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 5%. Physical DMG and Glaciation DMG increase by 5%. SS Rank Up bonus: After casting Rhythmic Piercing, when switched out automatically casts Signature Move - Majestic Interlude (cannot reduce Noise stacks)."
              },
              {
                  "label": "Old 2-Piece Set",
                  "description": "ATK increases by 5%. Physical DMG and Glaciation DMG increase by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Gains 2 Signal Orbs upon casting Rhythmic Piercing. Damage of Echoing Melody, Rhythmic Piercing, Signature Move - Majestic Interlude, and Signature Move - Note of Termination doubles."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Burana",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Pianissimo-Icon-1.png",
          "recommendedUsers": [
              "Pianissimo"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Pianissimo-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Pianissimo-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Pianissimo-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Pianissimo-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Pianissimo-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Pianissimo-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "catherine",
          "name": "Catherine",
          "pageTitle": "Catherine",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Catherine-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "135",
              "def": "228"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "QTE and 3-Ping skills reduce the target’s Physical DEF by 20% for 8s. 10s cooldown."
              },
              {
                  "label": "4-Piece Set",
                  "description": "When taking damage, gains a shield that absorbs 1000 DMG, as well as increasing the Physical DMG dealt by 15% for 5s. 8s cooldown."
              },
              {
                  "label": "OLD 4-Piece Set",
                  "description": "When taking damage, gains a shield that absorbs damage equal to 20% of own DEF, as well as increasing the Physical DMG dealt by 15% for 5s. 8s cooldown."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Catherine",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Catherine-Icon-1.png",
          "recommendedUsers": [
              "Storm",
              "Bastion",
              "Brilliance",
              "Rigor",
              "2B",
              "A2"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Catherine-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Catherine-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Catherine-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Catherine-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Catherine-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Catherine-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "chang-wuzi",
          "name": "Chang Wuzi",
          "pageTitle": "ChangWuzi",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-ChangWuzi-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/ChangWuzi",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-ChangWuzi-Bust.png",
          "recommendedUsers": [],
          "slotIcons": [],
          "portraits": [],
          "facts": []
      },
      {
          "id": "charlotte",
          "name": "Charlotte",
          "pageTitle": "Charlotte",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Charlotte-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Basic Attacks deal 5% more DMG. ATK increases by 7%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Glowing Lanternlight deals 50% more Base DMG. Afterglow Shadow deals 100% more Base DMG. Every time upon entering Luminous Realm, rearranges the Signal Orbs when casting Glowing Lanternlight."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Charlotte",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Charlotte-Icon-1.png",
          "recommendedUsers": [
              "Stigmata"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Charlotte-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Charlotte-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Charlotte-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Charlotte-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Charlotte-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Charlotte-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "chen-jiyuan",
          "name": "Chen Jiyuan",
          "pageTitle": "Chen Jiyuan",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Zuwenyuan-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "64",
              "atk": "134",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 3% and Ice DMG increases by 7%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Extra DMG Bonus increases by 10%. Attacking a target will inflict them with Frost, reducing their Ice Resistance by 15% for 8s (10s cooldown on the same target). Attacking targets affected by Frost will trigger an Icy Blast that deals 600% Ice DMG (6s cooldown on the same target)."
              },
              {
                  "label": "OLD 4-Piece Set",
                  "description": "30% chance to cause Frost for 5s while attacking. When attacking targets with Frost, there is a 20% chance to trigger Ice Explosion to deal 420% Ice DMG within 3m from the target and apply Frost. This effect has a 8s cooldown. Frost: Reduces target's Movement Speed by 20% and Ice Resistance by 8%."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Chen_Jiyuan",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Chen_Jiyuan-Icon-1.png",
          "recommendedUsers": [
              "Brilliance",
              "Qilin",
              "Hypnos",
              "Glory"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Chen_Jiyuan-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Chen_Jiyuan-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Chen_Jiyuan-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Chen_Jiyuan-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Chen_Jiyuan-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Chen_Jiyuan-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "cleopatra",
          "name": "Cleopatra",
          "pageTitle": "Cleopatra",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cleopatra-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Nihil DMG increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "The obtain rate of Apocalyptic Moonlight increases by 100%. During Main Sequence / Parousía Télous, Luna: Oblivion gains 30% Extra DMG Bonus."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Cleopatra",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cleopatra-Icon-1.png",
          "recommendedUsers": [
              "Oblivion"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cleopatra-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cleopatra-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cleopatra-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cleopatra-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cleopatra-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cleopatra-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "clusius",
          "name": "Clusius",
          "pageTitle": "Clusius",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Clusius-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Clusius",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Clusius-Bust.png",
          "recommendedUsers": [],
          "slotIcons": [],
          "portraits": [],
          "facts": []
      },
      {
          "id": "condelina",
          "name": "Condelina",
          "pageTitle": "Condelina",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Condelina-Bust.png",
          "stats": {
              "hp": "1461",
              "crit": "67",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Basic Attack's Extra DMG Bonus increases by 15%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Basic Attacks have a 50% chance to go berserk, increasing the Extra Damage Bonus of Basic Attack by 20% for 5s. 8s cooldown."
              },
              {
                  "label": "OLD 4-Piece Set",
                  "description": "Basic Attacks have a 25% chance to go berserk, increasing the Extra Damage of Basic Attack by 15% and CRIT Rate by 5% for 5s. 8s cooldown."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Condelina",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Condelina-Icon-1.png",
          "recommendedUsers": [
              "Veritas",
              "Scire"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Condelina-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Condelina-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Condelina-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Condelina-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Condelina-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Condelina-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "cottie",
          "name": "Cottie",
          "pageTitle": "Cottie",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cottie-Bust.png",
          "stats": {
              "hp": "1453",
              "crit": "66",
              "atk": "135",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Gains 20% more Energy when pinging an orb. Signature Move requires 20% less Signature Energy."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Extra DMG Bonus increases by 15% for 10s when performing a Signature Move. Gains Super Armor that increases Extra DMG Reduction by 20% for 5s after the Signature Move. Both duration will reset every time it is triggered."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Cottie",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cottie-Icon-1.png",
          "recommendedUsers": [
              "Dawn",
              "Zero",
              "Luminance",
              "Bastion",
              "Astral",
              "Rozen",
              "Laurel",
              "2B",
              "Hypnos",
              "Garnet",
              "Empyrea",
              "Capriccio",
              "Scire"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cottie-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cottie-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cottie-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cottie-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cottie-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cottie-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "da-vinci",
          "name": "Da Vinci",
          "pageTitle": "Da Vinci",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-DaVinci-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "135",
              "def": "218"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "When QTE is triggered, the controlling character gains 10% ATK and 20% DEF for 8s. Duration resets every time it is triggered."
              },
              {
                  "label": "4-Piece Set",
                  "description": "When QTE is triggered, increases another character's QTE charge count by 1 and activates it. CD: 8s. If there are 3 characters on the field, all characters' ATK is increased by 20% for 2s. Duration resets every time it is triggered."
              },
              {
                  "label": "6-Piece Set",
                  "description": "Da Vinci 4-piece set effect removes cooldown restrictions. Cannot stack with effects of the same type."
              },
              {
                  "label": "OLD 4-Piece Set",
                  "description": "When QTE is triggered, triggers another character's QTE. 8s cooldown. If there are 3 characters on the field, all characters' ATK is increased by 20% for 2s."
              },
              {
                  "label": "OLD 4-Piece Set",
                  "description": "When QTE is triggered, triggers another character's QTE. 8s cooldown. If there are 3 characters on the field, ATK is increased by 20%."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Da_Vinci",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-DaVinci-Icon-1.png",
          "recommendedUsers": [
              "Eclipse",
              "Storm",
              "Lux",
              "Palefire",
              "Blast",
              "Luminance",
              "Ember",
              "Pulse",
              "Tenebrion",
              "Bastion",
              "Brilliance",
              "Silverfang",
              "Arclight",
              "Rozen",
              "Qilin",
              "2B",
              "9S",
              "Hypnos",
              "Glory",
              "XXI",
              "Empyrea",
              "Capriccio",
              "Starfarer",
              "Scire",
              "Echo"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-DaVinci-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-DaVinci-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-DaVinci-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-DaVinci-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-DaVinci-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-DaVinci-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "darwin",
          "name": "Darwin",
          "pageTitle": "Darwin",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Darwin-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "67",
              "atk": "129",
              "def": "218"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "For every orb pinged, Extra DMG Bonus increases by 3% for 4s. Can be stacked up to 5 times. Duration resets every time it is triggered."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Records the color of Signal Orbs pinged. When all 3 colors is recorded, unleashes a 12m shockwave that deals 600% Physical DMG and resets the record."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Darwin",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Darwin-Icon-1.png",
          "recommendedUsers": [
              "Eclipse",
              "Dawn",
              "Palefire",
              "Nightblade",
              "Blast",
              "Luminance",
              "Entropy",
              "Ember",
              "CrimsonAbyss",
              "Astral",
              "Brilliance",
              "Veritas",
              "Plume",
              "Rigor",
              "Laurel",
              "2B",
              "9S",
              "Empyrea"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Darwin-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Darwin-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Darwin-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Darwin-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Darwin-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Darwin-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "derketo",
          "name": "Derketo",
          "pageTitle": "Derketo",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Derketo-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Dark DMG increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Base DMG of Torrent Orbs, Tidal Orbs, and Signature - Sunken Finale increases by 100%. After casting Signature - Sunken Finale, if Lamia is switched out of battle, she will still cast co-attacks when any teammate actively casts their Signature. Co-attacks deal 3000% Dark DMG each time, and can be triggered up to 3 times after every Signature - Sunken Finale."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Derketo",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Decodo-Icon-1.png",
          "recommendedUsers": [
              "LostLullaby"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Decodo-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Decodo-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Decodo-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Decodo-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Decodo-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Decodo-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "diesel",
          "name": "Diesel",
          "pageTitle": "Diesel",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Diesel-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Lightning DMG increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "The efficiency of acquiring Blade Aura increases by 50%. The Base DMG of Unquenchable Flare's Leaping Thrust increases by 50%, and the Base DMG of Signature - Weave: Karmic Inferno increases by 80%."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Diesel",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Diesel-Icon-1.png",
          "recommendedUsers": [
              "CrimsonWeave"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Diesel-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Diesel-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Diesel-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Diesel-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Diesel-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Diesel-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "einsteina",
          "name": "Einsteina",
          "pageTitle": "Einsteina",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Einsteina-Bust.png",
          "stats": {
              "hp": "1521",
              "crit": "66",
              "atk": "132",
              "def": "219"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "QTE and 3-Ping skills reduce the target's all Elemental Resistance by 15% for 8s. 10s cooldown."
              },
              {
                  "label": "OLD 2-Piece Set",
                  "description": "QTE and 3-Ping skills reduce the target's corresponding Elemental Resistance by 15% for 8s. 10s cooldown."
              },
              {
                  "label": "4-Piece Set",
                  "description": "When taking damage, releases an elemental aura, gaining 20% Elemental Resistance for 5s. All Elemental DMG dealt increases by 15% when the aura is present. 8s cooldown."
              },
              {
                  "label": "OLD 4-Piece Set",
                  "description": "When taking damage, releases an elemental aura, gaining Elemental Resistance equal to 5% + 1% of own DEF for 5s. Elemental DMG dealt increases by 15% when the aura is present. 8s cooldown."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Einsteina",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Einsteina-Icon-1.png",
          "recommendedUsers": [
              "Pulse",
              "Tenebrion",
              "Arclight",
              "Qilin",
              "Hypnos",
              "Glory",
              "XXI",
              "Garnet",
              "Starfarer",
              "Scire"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Einsteina-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Einsteina-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Einsteina-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Einsteina-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Einsteina-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Einsteina-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "elizabeth",
          "name": "Elizabeth",
          "pageTitle": "Elizabeth",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Elizabeth-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 5% and Fire DMG increases by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Extra DMG Bonus of Oaths will increase by 50%. When equipped by Liv: Empyrea, upon a 3-Ping by any team member, Liv: Empyrea’s drones will appear and cast White Oath against the target, dealing damage equal to 3% Liv: Empyrea’s ATK every second for 20s. This effect can be stacked up to 5 times. Meanwhile, Liv: Empyrea will restore HP equal to 15% of her ATK every second for team members within the range for 4s."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Elizabeth",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Elizabeth-Icon-1.png",
          "recommendedUsers": [
              "Empyrea",
              "Starfarer"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Elizabeth-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Elizabeth-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Elizabeth-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Elizabeth-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Elizabeth-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Elizabeth-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "feynman",
          "name": "Feynman",
          "pageTitle": "Feynman",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Feynman-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 5% and Fire DMG and Plasma Beam DMG increase by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "The effects of Flare Point on Ignited Raydiance's Base DMG is doubled."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Feynman",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Feynman-Icon-1.png",
          "recommendedUsers": [
              "Aeternion"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Feynman-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Feynman-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Feynman-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Feynman-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Feynman-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Feynman-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "flamel",
          "name": "Flamel",
          "pageTitle": "Flamel",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Flamel-Bust.png",
          "stats": {
              "hp": "1536",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Dark DMG increases by 5% and ATK increases by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "After entering Annihilation State, apothoic DMG increases by 30%. DMG of Finale Descends increases by 30%. Gain extra 10 Energy after pinging an Annihilation Orb."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Flamel",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Flamel-Icon-1.png",
          "recommendedUsers": [
              "Laurel"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Flamel-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Flamel-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Flamel-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Flamel-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Flamel-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Flamel-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "fran",
          "name": "Fran",
          "pageTitle": "Fran",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Fran-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Lightning DMG increases by 5%, Extra DMG bonus increases by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Dusk Fluorescence and Forest Predator's Base DMG increases by 100%. Wolfspirit Release's Base DMG increases by 70%."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Fran",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Fran-Icon-1.png",
          "recommendedUsers": [
              "Feral"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Fran-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Fran-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Fran-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Fran-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Fran-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Fran-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "frederick",
          "name": "Frederick",
          "pageTitle": "Frederick",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Frederick-Bust.png",
          "stats": {
              "hp": "1446",
              "crit": "64",
              "atk": "136",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Each dodge increases Movement Speed by 15% and Extra DMG Bonus by 5% for 5s. Can be stacked up to 3 times. Duration resets every time it is triggered."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Triggering Matrix reduces all enemies' Speed by 20% and Extra DMG Reduction during Matrix/Hypermatrix Deduction by 15% for 4s. 8s cooldown."
              },
              {
                  "label": "Old 4-Piece Set",
                  "description": "When the character triggers Matrix, all enemies' speed decreases by 20% and their Extra DMG Reduction decreases by 15% for 4s. 8s cooldown."
              },
              {
                  "label": "Old 4-Piece Set",
                  "description": "The next dodge reduces the attacker’s speed by 20% and Extra DMG Reduction by 15% for 4s. 8s cooldown."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Frederick",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Frederick-Icon-1.png",
          "recommendedUsers": [
              "Lotus",
              "CrimsonAbyss",
              "Veritas",
              "Plume",
              "2B",
              "9S",
              "A2"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Frederick-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Frederick-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Frederick-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Frederick-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Frederick-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Frederick-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "guinevere",
          "name": "Guinevere",
          "pageTitle": "Guinevere",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Guinevere-Bust.png",
          "stats": {
              "hp": "1528",
              "crit": "64",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Heals for 10% more. Increases the Elemental DMG and Resistances of the healing target by 10% for 5s. Has a cooldown of 8 seconds."
              },
              {
                  "label": "4-Piece Set",
                  "description": "A healing drone will be charged when healing is performed. When fully charged, the next time you performing healing will consume all charged energy to summon the healing drone. It will follow an ally with the lowest HP percentage, healing allies in a 5m radius for 2% maximum HP per second and increasing their Elemental ATK by 15% for 5s. 12s cooldown."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Guinevere",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Guinevere-Icon-1.png",
          "recommendedUsers": [
              "Lux",
              "Silverfang",
              "Rozen",
              "Hypnos",
              "Empyrea",
              "Capriccio"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Guinevere-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Guinevere-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Guinevere-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Guinevere-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Guinevere-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Guinevere-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "hanna",
          "name": "Hanna",
          "pageTitle": "Hanna",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hanna-Bust.png",
          "stats": {
              "hp": "1453",
              "crit": "67",
              "atk": "129",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Extra DMG Bonus of 3-Ping skills increases by 25%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "For every 30s, enters Matrix upon a 3-Ping and gains a random Signal Orb."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Hanna",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hanna-Icon-1.png",
          "recommendedUsers": [
              "Palefire",
              "Blast",
              "Luminance",
              "Entropy",
              "Ember",
              "Tenebrion",
              "CrimsonAbyss",
              "Bastion",
              "Veritas",
              "Plume",
              "Rigor",
              "Laurel"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hanna-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hanna-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hanna-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hanna-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hanna-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hanna-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "heisen",
          "name": "Heisen",
          "pageTitle": "Heisen",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Heisen-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "134",
              "def": "219"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "All ATK increases by 3% and Lightning DMG increases by 7%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Extra DMG Bonus increases by 10%. Attacking a target will inflict them with Electrocute, reducing their Lightning Resistance by 15% for 8s (10s cooldown on the same target). Attacking targets affected by Electrocute will trigger a Thunderstorm that deals 600% Lightning DMG (6s cooldown on the same target)."
              },
              {
                  "label": "OLD 4-Piece Set",
                  "description": "Attacks have a 25% chance to trigger Thunderstorm within 3.5m. Thunderstorm electrocutes the target for 5s. 5s cooldown. Attacking an electrocuted enemy has a 20% chance to trigger lightning chain damage. 8s cooldown. Lightning Chain: All electrocuted targets take 250% Lightning DMG. Thunderstorm: 100% Lightning DMG. Electrocute: Lightning Resistance is reduced by 8%."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Heisen",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Heisen-Icon-1.png",
          "recommendedUsers": [
              "Dawn",
              "Veritas",
              "Arclight",
              "Garnet",
              "Indomitus",
              "Startrail"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Heisen-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Heisen-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Heisen-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Heisen-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Heisen-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Heisen-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "heraclitus",
          "name": "Heraclitus",
          "pageTitle": "Heraclitus",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Heraclitus-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 5%, Fire DMG and Plasma Beam DMG increases by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "The efficiency of acquiring Radiant Points increases by 100%. Damage multiplier of Signature Move – Auxiliary Precision Slash and Signature Move – Endless Eclipse doubles."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Heraclitus",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Heraclitus-Icon-1.png",
          "recommendedUsers": [
              "Pyroath"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Heraclitus-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Heraclitus-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Heraclitus-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Heraclitus-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Heraclitus-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Heraclitus-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "herschell",
          "name": "Herschell",
          "pageTitle": "Herschell",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Herschell-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 5% and Lightning DMG and Ignition DMG increase by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Thunderfire Domain inflicts Resistance Reduction while dealing damage for 8s. QTE continuous damage also applies Resistance Reduction for 2s. Base DMG of Cosmic Starstrike and Starshard Slash is doubled, and casting them grants two Signal Orbs, prioritizing 3-Ping Orb combinations."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Herschell",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Herschell-Icon-1.png",
          "recommendedUsers": [
              "Startrail"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Herschell-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Herschell-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Herschell-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Herschell-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Herschell-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Herschell-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "hervor",
          "name": "Hervor",
          "pageTitle": "Hervor",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hervor-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 5%. Fire and Darkflow DMG increases by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Additionally gains 3 Blue Orbs after casting Skyscorching Blades. Each set of Red Orbs pinged now extends Hellfire’s duration by 2s."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Hervor",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hervor-Icon-1.png",
          "recommendedUsers": [
              "Geiravor"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hervor-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hervor-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hervor-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hervor-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hervor-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hervor-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "isabel",
          "name": "Isabel",
          "pageTitle": "Isabel",
          "sourcePage": "Memories/Uniframe_Memories",
          "family": "Uniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Isabel-Bust.png",
          "stats": {
              "hp": "1521",
              "crit": "62",
              "atk": "136",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 5% and Ice DMG increases by 7%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Frost-Treated Blade: Quench deals 15% more Base DMG."
              },
              {
                  "label": "6-Piece Set",
                  "description": "Bitter Frost deals 200% more Ice DMG to enemies with Frozen Status."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Isabel",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Uniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Aisha-Icon-1.png",
          "recommendedUsers": [
              "Starveil"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Aisha-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Aisha-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Aisha-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Aisha-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Aisha-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Aisha-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "jack",
          "name": "Jack",
          "pageTitle": "Jack",
          "sourcePage": "Memories/Uniframe_Memories",
          "family": "Uniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Jack-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Attack increases by 5% and Fire damage increases by 7%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Basic Attack combo has 10% more Extra DMG Bonus and returns 10 bonus Deception Points."
              },
              {
                  "label": "6-Piece Set",
                  "description": "Gains 30 bonus energy each time upon deployment. After casting a valid combo, recovers 50/75/100 Dodge Gauge based on the combo type. The Extra DMG Bonus of Incinerating Orb increases by 100%. After casting a Signature Move, Attack increases by 5% for 8s."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Jack",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Uniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Jack-Icon-1.png",
          "recommendedUsers": [
              "Flambeau"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Jack-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Jack-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Jack-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Jack-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Jack-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Jack-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "jeanne",
          "name": "Jeanne",
          "pageTitle": "Jeanne",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Jeanne-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 5%. Dark DMG and Raydiance DMG increase by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Severed Sea DMG is doubled. When casting Corrosive Chain: Gain 10 Prayer stacks per Commandment point consumed. Consuming 9 Commandment points grants an additional 45 Prayer stacks."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Jeanne",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Jeanne-Icon-1.png",
          "recommendedUsers": [
              "Crepuscule"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Jeanne-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Jeanne-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Jeanne-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Jeanne-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Jeanne-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Jeanne-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "ji-bo-an",
          "name": "Ji Bo'an",
          "pageTitle": "Ji Bo'an",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Ji_Bo'an-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 5% and Ice DMG increases by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "The Base DMG multiplier of Will Bearer, Snow Drifter, and Mountain Caller increases by 100%. Sovereign's Presence's DMG multiplier is doubled."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Ji_Bo'an",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-JiBoan-Icon-1.png",
          "recommendedUsers": [
              "Shukra"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-JiBoan-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-JiBoan-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-JiBoan-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-JiBoan-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-JiBoan-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-JiBoan-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "keats",
          "name": "Keats",
          "pageTitle": "Keats",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Keats-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Physical DMG and Ignition DMG increases by 5% and Extra DMG Bonus increases by 5%. When Veronica heals her allies, allies healed gain the Deep Piercing effect that increases CRIT DMG by 20% and 75% CRIT Rate for 8s. Duration resets every time it is triggered."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Clearing Red Orbs with Heavy Edge grants Signature Energy. Each Red Orb cleared grants 5 Purge Value. When 9 or more Red Orbs are cleared in a single instance, each Red Orb beyond the 9th grants an additional 5 Purge Value. Base DMG of Raging Thornfire and Severing Domain increases by 50%. During Execution, each Purge Value consumed increases Ruinous Ember's Base DMG by 0.5%, up to a maximum of 50%. This enhancement resets when exiting the battlefield or casting Ruinous Ember."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Keats",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Keats-Icon-1.png",
          "recommendedUsers": [
              "Aegis"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Keats-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Keats-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Keats-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Keats-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Keats-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Keats-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "klenova",
          "name": "Klenova",
          "pageTitle": "Klenova",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Klenova-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Ice DMG increases by 5%, Glaciation DMG increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "While Ice Spikes are present, ATK increases by 5% and Glaciation DMG increases by 10%."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Klenova",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Klenova-Icon-1.png",
          "recommendedUsers": [
              "Pyroath"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Klenova-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Klenova-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Klenova-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Klenova-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Klenova-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Klenova-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "koya",
          "name": "Koya",
          "pageTitle": "Koya",
          "sourcePage": "Memories/Uniframe_Memories",
          "family": "Uniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Koya-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "134",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Extra DMG increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Gains 20% energy when switched in. Signal Orb Skill DMG increases by 10% while a shield exists."
              },
              {
                  "label": "6-Piece Set",
                  "description": "When Camu: Crocotta is Berserk, increases Damage Dealt by 10% and Speed by 20%. Ping Skills that deal damage also inflict Fear for the duration of Berserk. Fear: Reduces ATK DMG by 10% and deals additional 10% ATK DMG to the target."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Koya",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Uniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Koya-Icon-1.png",
          "recommendedUsers": [
              "Crocotta"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Koya-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Koya-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Koya-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Koya-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Koya-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Koya-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "leeuwenhoek",
          "name": "Leeuwenhoek",
          "pageTitle": "Leeuwenhoek",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Leeuwenhoek-Bust.png",
          "stats": {
              "hp": "1506",
              "crit": "64",
              "atk": "133",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 3% and Physical DMG increases by 7%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Increases the effect of Lance of Perception by 20%. Deals 5% more damage against targets under the effect of Lance of Perception."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Leeuwenhoek",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Leeuwenhoek-Icon-1.png",
          "recommendedUsers": [
              "Eclipse",
              "Nightblade",
              "Entropy",
              "Rigor"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Leeuwenhoek-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Leeuwenhoek-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Leeuwenhoek-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Leeuwenhoek-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Leeuwenhoek-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Leeuwenhoek-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "liliana",
          "name": "Liliana",
          "pageTitle": "Liliana",
          "sourcePage": "Memories/Uniframe_Memories",
          "family": "Uniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Liliana-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 5%. Extra DMG Bonus increases by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "While in Matrix, Extra DMG Bonus increases by 10%."
              },
              {
                  "label": "6-Piece Set",
                  "description": "Upon entry or switching in, all Elemental DMG and Physical DMG increase by 15% for 8s."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Liliana",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Uniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Liliana-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Liliana-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Liliana-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Liliana-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Liliana-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Liliana-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Liliana-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "liston",
          "name": "Liston",
          "pageTitle": "Liston",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Liston-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Ice DMG increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "When Frozen Zone deals DMG, triggers Frost Corrosion and reduces the target's Ice Resistance for 8s. Triggering this effect again will renew its duration. In Repeater Mode, each shot adds an extra stack of Maim, with a stacking limit of 24. When casting Destructive Wave, the Base DMG increase effect of each Correction Projectile increases to 10%."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Liston",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Liston-Icon-1.png",
          "recommendedUsers": [
              "LucidDreamer"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Liston-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Liston-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Liston-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Liston-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Liston-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Liston-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "lucrezia",
          "name": "Lucrezia",
          "pageTitle": "Lucrezia",
          "sourcePage": "Memories/Uniframe_Memories",
          "family": "Uniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Lucrezia-Bust.png",
          "stats": {
              "hp": "1506",
              "crit": "66",
              "atk": "134",
              "def": "217"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Lightning DMG increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Upon triggering Chord, gain bonus 15 energy and 10% Extra DMG Bonus for 5s."
              },
              {
                  "label": "6-Piece Set",
                  "description": "Extra DMG Bonus increases by 20% when attacking enemies affected by Concerto."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Lucrezia",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Uniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Lucrezia-Icon-1.png",
          "recommendedUsers": [
              "Tempest"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Lucrezia-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Lucrezia-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Lucrezia-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Lucrezia-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Lucrezia-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Lucrezia-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "marcco",
          "name": "Marcco",
          "pageTitle": "Marcco",
          "sourcePage": "Memories/Uniframe_Memories",
          "family": "Uniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Marcco-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Marcco",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Uniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Marcco-Bust.png",
          "recommendedUsers": [],
          "slotIcons": [],
          "portraits": [],
          "facts": []
      },
      {
          "id": "natasha",
          "name": "Natasha",
          "pageTitle": "Natasha",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Natasha-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 5%. Lightning DMG and Darkflow DMG increase by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Enhanced Base DMG effect of Delicate Heart doubles."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Natasha",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Natasha-Icon-1.png",
          "recommendedUsers": [
              "Limpidity"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Natasha-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Natasha-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Natasha-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Natasha-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Natasha-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Natasha-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "nimue",
          "name": "Nimue",
          "pageTitle": "Nimue",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Nimue-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 5%. Dark DMG and Ultima Slash DMG increase by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "In Nessos Mimic, Signature Energy gained is doubled; the Signature Base DMG boost from consuming Overridden Blessing is doubled (up to 90% increase)."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Nimue",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Nimue-Icon-1.png",
          "recommendedUsers": [
              "Arete"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Nimue-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Nimue-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Nimue-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Nimue-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Nimue-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Nimue-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "patton",
          "name": "Patton",
          "pageTitle": "Patton",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Patton-Bust.png",
          "stats": {
              "hp": "1453",
              "crit": "67",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 3% and Physical DMG increases by 7%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Extra DMG Bonus increases by 10%. Attacking a target will inflict them with Impale, reducing their Physical Resistance by 7% for 8s (10s cooldown on the same target). Attacking targets affected by Impale will trigger an Explosion that deals 600% Physical DMG (6s cooldown on the same target)."
              },
              {
                  "label": "OLD 2-Piece Set",
                  "description": "CRIT Rate and Physical DMG increase by 5%."
              },
              {
                  "label": "OLD 4-Piece Set",
                  "description": "Each time you deal Physical DMG, if it is not a CRIT Hit, the CRIT Rate of the next Physical DMG increases by 2%, stacking up to a maximum of 20%. This effect is reset when you deal a CRIT Hit. CRIT Hit increases Physical DMG by 5% for 3s. Can be stacked up to 3 times. Duration resets every time it is triggered."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Patton",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Patton-Icon-1.png",
          "recommendedUsers": [
              "Lotus",
              "Nightblade",
              "Zero",
              "Entropy",
              "CrimsonAbyss",
              "Brilliance",
              "2B",
              "A2"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Patton-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Patton-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Patton-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Patton-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Patton-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Patton-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "pavlichenko",
          "name": "Pavlichenko",
          "pageTitle": "Pavlichenko",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Pavlichenko-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 5%. Ice DMG and Ignition DMG increase by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Multipler of Signature - Silenced Abysslight doubles"
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Pavlichenko",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Pavlichenko-Icon-1.png",
          "recommendedUsers": [
              "Inverse Crown"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Pavlichenko-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Pavlichenko-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Pavlichenko-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Pavlichenko-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Pavlichenko-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Pavlichenko-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "philip-ii",
          "name": "Philip II",
          "pageTitle": "Philip II",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-PhilipII-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Healing effect increases by 10%. Healing ally units will increase their Physical DMG by 10% and DEF by 10% for 5s. 8s cooldown."
              },
              {
                  "label": "4-Piece Set",
                  "description": "A healing drone will be charged when healing is performed. When fully charged, the next time you performing healing will consume all charged energy to summon the healing drone. It will follow an ally with the lowest HP percentage, healing allies in a 5m radius for 2% maximum HP per second and increasing their Physical DMG by 15% for 5s. 12s cooldown."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Philip_II",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-PhilipII-Icon-1.png",
          "recommendedUsers": [
              "Eclipse",
              "Luminance",
              "9S",
              "Empyrea",
              "Capriccio"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-PhilipII-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-PhilipII-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-PhilipII-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-PhilipII-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-PhilipII-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-PhilipII-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "poincare",
          "name": "Poincare",
          "pageTitle": "Poincare",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Poincare-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Dark DMG increases by 5%, Darkflow DMG increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "When casting a Signature Move, ATK increases by 5% and Darkflow DMG increases by 10% for 10s. Duration resets every time it is triggered."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Poincare",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Poincare-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Poincare-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Poincare-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Poincare-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Poincare-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Poincare-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Poincare-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "seraphine",
          "name": "Seraphine",
          "pageTitle": "Seraphine",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Seraphine-Bust.png",
          "stats": {
              "hp": "1521",
              "crit": "66",
              "atk": "133",
              "def": "221"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 5% and Dark DMG increases by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "A random Reprise deals 100% more damage. Allies healed by Selena: Capriccio gain a Dark Radiation effect of dealing 10% more Dark DMG for 8s. The duration will be reset every time the effect is triggered."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Seraphine",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Seraphine-Icon-1.png",
          "recommendedUsers": [
              "Capriccio"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Seraphine-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Seraphine-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Seraphine-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Seraphine-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Seraphine-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Seraphine-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "shakespeare",
          "name": "Shakespeare",
          "pageTitle": "Shakespeare",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Shakespeare-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "64",
              "atk": "134",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "All ATK increases by 3% and Fire DMG increases by 7%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Extra DMG Bonus increases by 10%. Attacking a target will inflict them with Burn, reducing their Fire Resistance by 15% for 8s (10s cooldown on the same target). Attacking targets affected by Burn will trigger an Explosion that deals 600% Fire DMG (6s cooldown on the same target)."
              },
              {
                  "label": "OLD 4-Piece Set",
                  "description": "Attacks have a 50% chance to inflict Burn for 5s. When attacking a burning enemy, there is a 20% chance to cause an explosion, dealing 100% Fire DMG. 5s cooldown. Burn: Reduces the target’s Fire Resistance by 8% and deals 12% Fire DMG per second. Can be stacked up to 3 times. Duration resets every time it is triggered."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Shakespeare",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Shakespeare-Icon-1.png",
          "recommendedUsers": [
              "Palefire",
              "Ember",
              "Pulse"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Shakespeare-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Shakespeare-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Shakespeare-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Shakespeare-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Shakespeare-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Shakespeare-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "shelley",
          "name": "Shelley",
          "pageTitle": "Shelley",
          "sourcePage": "Memories/Uniframe_Memories",
          "family": "Uniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Shelley-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Lightning DMG increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Gains Super Armor when casting a 3-Ping and Combo Strike. Whenever taking DMG during a 3-Ping, Gear-Break Combo, or Assault-Rising Combo, loses Dodge Gauge instead of HP until the DMG taken exceeds the available Dodge Gauge."
              },
              {
                  "label": "6-Piece Set",
                  "description": "The Base DMG multiplier of Gear-Break Combo and Assault-Rising Combo doubles."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Shelley",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Uniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Shelley-Icon-1.png",
          "recommendedUsers": [
              "Arca"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Shelley-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Shelley-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Shelley-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Shelley-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Shelley-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Shelley-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "signa",
          "name": "Signa",
          "pageTitle": "Signa",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Signa-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Physical DMG increases by 5% and Extra DMG Bonus increases by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Base DMG of Imprisoning Co-Strike and Soulbreaking Co-Strike increases by 100%. Allies healed by Echo gain an extra 20% CRIT DMG and 75% CRIT Rate for 8s. Triggering this effect again will renew its duration."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Signa",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Signa-Icon-1.png",
          "recommendedUsers": [
              "Echo"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Signa-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Signa-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Signa-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Signa-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Signa-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Signa-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "sothoth",
          "name": "Sothoth",
          "pageTitle": "Sothoth",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Sothoth-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Nihil DMG increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Casting Phantom Annihilation grants 18 / 36 / 36 / 36 / 54 Collapse Points based on the hit count. Casting Ethereal Mirage grants 150 Phantom Points immediately. Casting Dimensional Collapse increases Base DMG of the next Signature - Silent Punishment by 100%. When hitting enemies with Hyperspace Realm as a Tank / Breaker, reduces enemy Elemental Resistance based on Observation Notes. When Hyperspace Realm is active, as an Amplifier, heals allies for 8% of ATK per second and increases their Elemental DMG based on..."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Sothoth",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Sothoth-Icon-1.png",
          "recommendedUsers": [
              "Parhelion"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Sothoth-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Sothoth-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Sothoth-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Sothoth-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Sothoth-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Sothoth-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "tifa",
          "name": "Tifa",
          "pageTitle": "Tifa",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Tifa-Bust.png",
          "stats": {
              "hp": "1506",
              "crit": "65",
              "atk": "137",
              "def": "221"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK increases by 5% and Lightning DMG increases by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "DMG from Spear Lunge increases by 50%. Victorious War Flag causes Turbulence Interference on the target for 2s. Refreshes every time it is triggered. Basic DMG from Lightning Fall increases by 100%."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Tifa",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Tifa-Icon-1.png",
          "recommendedUsers": [
              "Garnet"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Tifa-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Tifa-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Tifa-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Tifa-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Tifa-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Tifa-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "turing",
          "name": "Turing",
          "pageTitle": "Turing",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Turing-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Fire DMG increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Hypermatrix Strike and Signature - Collapsing Realm's Base DMG increases by 100%. Casting Hypermatrix Strike in Hypermatrix increases the duration of Hypermatrix by 1s."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Turing",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Turing-Icon-1.png",
          "recommendedUsers": [
              "Hyperreal"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Turing-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Turing-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Turing-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Turing-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Turing-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Turing-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "unimate",
          "name": "Unimate",
          "pageTitle": "Unimate",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Unimate-Bust.png",
          "stats": {
              "hp": "1506",
              "crit": "64",
              "atk": "133",
              "def": "226"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Increases Fire DMG by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "\"Oops! Missed it!\"/\"Perfect!\"/Burning Blow deals 100% more Base DMG. Nanami: Starfarer's QTE Skill will inflict Scorching Invasion that reduces the target's Fire Resistance by 15% upon hitting it for 8s."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Unimate",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Unimate-Icon-1.png",
          "recommendedUsers": [
              "Starfarer"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Unimate-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Unimate-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Unimate-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Unimate-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Unimate-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Unimate-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "wilde",
          "name": "Wilde",
          "pageTitle": "Wilde",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Wilde-Bust.png",
          "stats": {
              "hp": "1491",
              "crit": "66",
              "atk": "132",
              "def": "223"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Lightning DMG increases by 5% and Plasma Beam DMG increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "ATK +5% and Plasma Beam DMG +10% during Electric Storm Flash."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Wilde",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Wilde-Icon-1.png",
          "recommendedUsers": [
              "Pyroath"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Wilde-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Wilde-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Wilde-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Wilde-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Wilde-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Wilde-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "wu-an",
          "name": "Wu'an",
          "pageTitle": "Wu'an",
          "sourcePage": "Memories/Uniframe_Memories",
          "family": "Uniframe",
          "tab": "6★ Memories",
          "rarity": "6★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Wuan-Bust.png",
          "stats": {
              "hp": "1476",
              "crit": "66",
              "atk": "134",
              "def": "219"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Basic Attack's Extra DMG Bonus increases by 5%, Physical DMG increases by 7%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "The Super Armor of Sweeping Tempest lasts 2s longer. Physical DMG increases by 15% while Super Armor is active."
              },
              {
                  "label": "6-Piece Set",
                  "description": "Gains 24 Energy upon entering Concentrated Will. Immediately gains one Signal Orb of each color after casting Signature - Dragon's Wrath."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Wu'an",
          "tabs": [
              "6★ Memories"
          ],
          "families": [
              "Uniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Wuan-Icon-1.png",
          "recommendedUsers": [
              "Pavo"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Wuan-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Wuan-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Wuan-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Wuan-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Wuan-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Wuan-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "aife",
          "name": "Aife",
          "pageTitle": "Aife",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "5★ Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Aife-Bust.png",
          "stats": {
              "hp": "1184",
              "crit": "53",
              "atk": "109",
              "def": "181"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "For each orb pinged, Extra DMG Bonus increases by 2% for 3s. Can be stacked up to 5 times. Duration resets every time it is triggered."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Enters Matrix upon a 3-Ping. 60s cooldown."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Aife",
          "tabs": [
              "5★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Aife-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Aife-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Aife-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Aife-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Aife-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Aife-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Aife-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "bianca-tipsy-night",
          "name": "Bianca: Tipsy Night",
          "pageTitle": "Bianca: Tipsy Night",
          "sourcePage": "Memories/Event_Memories",
          "family": "Event",
          "tab": "Released Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-BiancaTipsyNight-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "53",
              "atk": "109",
              "def": "177"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Movement speed increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "After a 3-Ping, DEF increases by 10% for 5s."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Bianca%3A_Tipsy_Night",
          "tabs": [
              "Released Memories"
          ],
          "families": [
              "Event"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-BiancaATipsyNight-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-BiancaATipsyNight-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-BiancaATipsyNight-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-BiancaATipsyNight-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-BiancaATipsyNight-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-BiancaATipsyNight-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-BiancaATipsyNight-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "boudica",
          "name": "Boudica",
          "pageTitle": "Boudica",
          "sourcePage": "Memories/Uniframe_Memories",
          "family": "Uniframe",
          "tab": "5★ Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Boudica-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "53",
              "atk": "109",
              "def": "177"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Basic Attack's Extra DMG Bonus increases by 7%"
              },
              {
                  "label": "4-Piece Set",
                  "description": "All DMG dealt and Movement Speed are increased by 5% and 10% when in Matrix."
              },
              {
                  "label": "6-Piece Set",
                  "description": "Extra DMG Bonus increases by 3% upon dealing DMG. It can only be triggered once per 2s. Stacks up to 5 times until taking DMG."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Boudica",
          "tabs": [
              "5★ Memories"
          ],
          "families": [
              "Uniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Boudica-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Boudica-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Boudica-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Boudica-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Boudica-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Boudica-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Boudica-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "carrielynn",
          "name": "Carrielynn",
          "pageTitle": "Carrielynn",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "5★ Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Erwin-Bust.png",
          "stats": {
              "hp": "1184",
              "crit": "54",
              "atk": "107",
              "def": "181"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Basic Attack's Extra DMG Bonus increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Basic Attack's Extra DMG Bonus increases by 15% when not attacked. This effect enters a 12s cooldown upon being attacked."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Carrielynn",
          "tabs": [
              "5★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Erwin-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Erwin-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Erwin-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Erwin-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Erwin-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Erwin-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Erwin-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "cerberus-rave-party",
          "name": "Cerberus - Rave Party",
          "pageTitle": "Cerberus - Rave Party",
          "sourcePage": "Memories/Event_Memories",
          "family": "Event",
          "tab": "Released Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-CerberusRaveParty-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "53",
              "atk": "109",
              "def": "177"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "DEF increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "After a 3-Ping, recover HP equal to 50% of ATK of self. Can be triggered once every 5s."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Cerberus_-_Rave_Party",
          "tabs": [
              "Released Memories"
          ],
          "families": [
              "Event"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-CerberusRaveParty-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-CerberusRaveParty-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-CerberusRaveParty-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-CerberusRaveParty-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-CerberusRaveParty-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-CerberusRaveParty-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-CerberusRaveParty-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "ceremony-liv",
          "name": "Ceremony - Liv",
          "pageTitle": "Ceremony - Liv",
          "sourcePage": "Memories/Event_Memories",
          "family": "Event",
          "tab": "Released Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivCeremony-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "53",
              "atk": "107",
              "def": "181"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "When taking damage, gains a shield equal to 20% of own maximum HP for 5s. 30s cooldown."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Gain a healing effect equal to 15% of own maximum HP for every 20s."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Ceremony_-_Liv",
          "tabs": [
              "Released Memories"
          ],
          "families": [
              "Event"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivCeremony-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivCeremony-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivCeremony-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivCeremony-Icon-1.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivCeremony-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivCeremony-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivCeremony-Portrait-1.png"
          ],
          "facts": []
      },
      {
          "id": "chrome-banquet",
          "name": "Chrome: Banquet",
          "pageTitle": "Chrome: Banquet",
          "sourcePage": "Memories/Event_Memories",
          "family": "Event",
          "tab": "Released Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-ChromeBanquet-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "53",
              "atk": "107",
              "def": "181"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "DEF increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "After a 3-Ping, gain a shield of 15% max HP for 8s. Can be triggered once per 8s."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Chrome%3A_Banquet",
          "tabs": [
              "Released Memories"
          ],
          "families": [
              "Event"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-ChromeBanquet-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-ChromeBanquet-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-ChromeBanquet-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-ChromeBanquet-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-ChromeBanquet-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-ChromeBanquet-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-ChromeBanquet-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "gloria",
          "name": "Gloria",
          "pageTitle": "Gloria",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "5★ Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Gloria-Bust.png",
          "stats": {
              "hp": "1232",
              "crit": "53",
              "atk": "107",
              "def": "177"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Attacks reduce the target’s all Elemental Resistance by 6% for 5s. 12s cooldown."
              },
              {
                  "label": "4-Piece Set",
                  "description": "When taking damage, reduces the Elemental Resistance of enemies within 5m by 6% for 7s. Duration resets every time it is triggered."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Gloria",
          "tabs": [
              "5★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Gloria-Icon-1.png",
          "recommendedUsers": [
              "FrameName"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Gloria-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Gloria-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Gloria-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Gloria-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Gloria-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Gloria-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "ike",
          "name": "Ike",
          "pageTitle": "Ike",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "5★ Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Ike-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "51",
              "atk": "109",
              "def": "181"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Extra DMG Bonus increases by 2% and Elemental DMG increases by 4%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "When dealing Elemental DMG, you have a 15% chance to inflict Burn, Electrocute, Frost, and Corruption depending on the element. Lasts 5 seconds and has 8 second cooldown on the same unit."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Ike",
          "tabs": [
              "5★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Ike-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Ike-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Ike-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Ike-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Ike-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Ike-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Ike-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "kfc-alpha",
          "name": "KFC - Alpha",
          "pageTitle": "KFC - Alpha",
          "sourcePage": "Memories/Event_Memories",
          "family": "Event",
          "tab": "Unreleased Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-KFCAlpha-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "53",
              "atk": "109",
              "def": "177"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "After triggering 3-orbs or QTE, there is a 50% chance of dropping a Family Bucket, 30s cooldown. The Family Bucket remains on field for 10s. Picking it up grants the character 12% movement speed for 15s, duration can be refreshed."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/KFC_-_Alpha",
          "tabs": [
              "Unreleased Memories"
          ],
          "families": [
              "Event"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-KFCAlpha-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-KFCAlpha-Icon-1.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-KFCAlpha-Portrait-1.png"
          ],
          "facts": []
      },
      {
          "id": "kfc-lucia",
          "name": "KFC - Lucia",
          "pageTitle": "KFC - Lucia",
          "sourcePage": "Memories/Event_Memories",
          "family": "Event",
          "tab": "Unreleased Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-KFCLucia-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "53",
              "atk": "109",
              "def": "177"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "After triggering 3-orbs or QTE, there is a 50% chance of dropping a Chicken Burger, 30s cooldown. The Chicken Burger remains on field for 10s. Picking it up grants the character 8 energy."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/KFC_-_Lucia",
          "tabs": [
              "Unreleased Memories"
          ],
          "families": [
              "Event"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-KFCLucia-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-KFCLucia-Icon-1.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-KFCLucia-Portrait-1.png"
          ],
          "facts": []
      },
      {
          "id": "kuriko-eternal",
          "name": "Kuriko Eternal",
          "pageTitle": "Kuriko Eternal",
          "sourcePage": "Memories/Event_Memories",
          "family": "Event",
          "tab": "Released Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Anderia-Bust.png",
          "stats": {
              "hp": "1059",
              "crit": "49",
              "atk": "97",
              "def": "158"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "When attacking, has a 20% chance to call an artillery strike, each shell dealing 40% Physical DMG to the target. 15s cooldown."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Kuriko_Eternal",
          "tabs": [
              "Released Memories"
          ],
          "families": [
              "Event"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Anderia-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Anderia-Icon-1.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Anderia-Portrait-1.png"
          ],
          "facts": []
      },
      {
          "id": "lantern-festival-reunion",
          "name": "Lantern Festival: Reunion",
          "pageTitle": "Lantern Festival: Reunion",
          "sourcePage": "Memories/Event_Memories",
          "family": "Event",
          "tab": "Released Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-LanternFestivalReunion-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "53",
              "atk": "109",
              "def": "177"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "After performing a 3-Ping or QTE skill, releases a lantern to follow the character on field, increasing the ATK and Movement Speed of nearby allies by 7% for 15s. 30s cooldown."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Lantern_Festival%3A_Reunion",
          "tabs": [
              "Released Memories"
          ],
          "families": [
              "Event"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-LanternFestivalReunion-Icon-1.png",
          "recommendedUsers": [
              "FrameName"
          ],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LanternFestivalReunion-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LanternFestivalReunion-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LanternFestivalReunion-Icon-1.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LanternFestivalReunion-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LanternFestivalReunion-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LanternFestivalReunion-Portrait-1.png"
          ],
          "facts": []
      },
      {
          "id": "lee-celebration-under-the-moon",
          "name": "Lee - Celebration under the Moon",
          "pageTitle": "Lee - Celebration under the Moon",
          "sourcePage": "Memories/Event_Memories",
          "family": "Event",
          "tab": "Released Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-LeeCelebrationundertheMoon-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "53",
              "atk": "107",
              "def": "181"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Total resistance increases by 10% during dodge for 3s."
              },
              {
                  "label": "4-Piece Set",
                  "description": "The own max. HP restores 10% when entering Matrix, and is triggered every 30s."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Lee_-_Celebration_under_the_Moon",
          "tabs": [
              "Released Memories"
          ],
          "families": [
              "Event"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-LeeCelebrationundertheMoon-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LeeCelebrationundertheMoon-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LeeCelebrationundertheMoon-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LeeCelebrationundertheMoon-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LeeCelebrationundertheMoon-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LeeCelebrationundertheMoon-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LeeCelebrationundertheMoon-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "liv-reindeer",
          "name": "Liv: Reindeer",
          "pageTitle": "Liv: Reindeer",
          "sourcePage": "Memories/Event_Memories",
          "family": "Event",
          "tab": "Released Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivReindeer-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "53",
              "atk": "109",
              "def": "177"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Signal Orb skills' Extra DMG Bonus and healing affect increases by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Attacks have a 20% chance to drop Christmas gifts next to the enemy. Picking up a gift restores 5 Energy and increases Extra DMG Bonus by 5%. 10s cooldown."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Liv%3A_Reindeer",
          "tabs": [
              "Released Memories"
          ],
          "families": [
              "Event"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivReindeer-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivReindeer-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivReindeer-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivReindeer-Icon-1.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivReindeer-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivReindeer-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivReindeer-Portrait-1.png"
          ],
          "facts": []
      },
      {
          "id": "liv-united",
          "name": "Liv: United",
          "pageTitle": "Liv: United",
          "sourcePage": "Memories/Event_Memories",
          "family": "Event",
          "tab": "Released Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivFleetingReunion-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "53",
              "atk": "107",
              "def": "181"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Movement speed increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "After 3-Ping, heals for 10% more and gains a 10% shield for 5 seconds."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Liv%3A_United",
          "tabs": [
              "Released Memories"
          ],
          "families": [
              "Event"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivFleetingReunion-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivFleetingReunion-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivFleetingReunion-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivFleetingReunion-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivFleetingReunion-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivFleetingReunion-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LivFleetingReunion-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "lucia-summer-daze",
          "name": "Lucia - Summer Daze",
          "pageTitle": "Lucia - Summer Daze",
          "sourcePage": "Memories/Event_Memories",
          "family": "Event",
          "tab": "Released Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-LuciaSummerDaze-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "53",
              "atk": "109",
              "def": "177"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Basic Attack DMG increases by 10%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "After any 3-Ping, randomly gain one of the below effects for 3s. 4s cooldown. Wild Rocker: All DMG increases by 7%. Soothing Chord: Receives a shield equal to 15% of your Defense. The shield refreshes when this effect is triggered again."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Lucia_-_Summer_Daze",
          "tabs": [
              "Released Memories"
          ],
          "families": [
              "Event"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-LuciaSummerDaze-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LuciaSummerDaze-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LuciaSummerDaze-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LuciaSummerDaze-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LuciaSummerDaze-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LuciaSummerDaze-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LuciaSummerDaze-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "luna-fullmoon-laurel",
          "name": "Luna: Fullmoon Laurel",
          "pageTitle": "Luna: Fullmoon Laurel",
          "sourcePage": "Memories/Event_Memories",
          "family": "Event",
          "tab": "Released Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-LunaLunarLaureate-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "53",
              "atk": "107",
              "def": "181"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Every 20s, receives a healing effect equal to 10% of max HP."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Every 30s, when taking DMG, gains a shield equal to 25% of max HP, lasting for 5s."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Luna%3A_Fullmoon_Laurel",
          "tabs": [
              "Released Memories"
          ],
          "families": [
              "Event"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-LunaLunarLaureate-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LunaLunarLaureate-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LunaLunarLaureate-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LunaLunarLaureate-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LunaLunarLaureate-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LunaLunarLaureate-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-LunaLunarLaureate-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "mozart",
          "name": "Mozart",
          "pageTitle": "Mozart",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "5★ Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Mozart-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "53",
              "atk": "109",
              "def": "177"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Extra DMG Bonus increases by 15% when in Matrix."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Deals 200% damage to all enemies on screen when you enter Matrix."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Mozart",
          "tabs": [
              "5★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Mozart-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Mozart-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Mozart-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Mozart-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Mozart-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Mozart-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Mozart-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "new-year-fireworks",
          "name": "New Year Fireworks",
          "pageTitle": "New Year Fireworks",
          "sourcePage": "Memories/Event_Memories",
          "family": "Event",
          "tab": "Released Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-NewYearFireworks-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "53",
              "atk": "109",
              "def": "177"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Attack increases by 5%. For every 3 Red Orbs pinged, summons 4 red packets that deal 10% Fire DMG when they touch the enemy. Lasts 10s. 30s coolodwn."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/New_Year_Fireworks",
          "tabs": [
              "Released Memories"
          ],
          "families": [
              "Event"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-NewYearFireworks-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-NewYearFireworks-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-NewYearFireworks-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-NewYearFireworks-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-NewYearFireworks-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-NewYearFireworks-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-NewYearFireworks-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "richelieu",
          "name": "Richelieu",
          "pageTitle": "Richelieu",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "5★ Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Richelieu-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "53",
              "atk": "107",
              "def": "181"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Healing effect increases by 5%. Next healing effect increases the target’s Physical DMG by 8% for 4s. 5s cooldown."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Gains a random Signal Orb for every 8 orbs pinged. 5s cooldown."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Richelieu",
          "tabs": [
              "5★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Richelieu-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Richelieu-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Richelieu-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Richelieu-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Richelieu-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Richelieu-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Richelieu-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "samantha",
          "name": "Samantha",
          "pageTitle": "Samantha",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "5★ Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Samantha-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "51",
              "atk": "107",
              "def": "181"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Healing effect increases by 5%. Next healing effect increases the target’s Elemental DMG by 8% for 4s. 5s cooldown."
              },
              {
                  "label": "4-Piece Set",
                  "description": "The next healing effect adds an elemental aura that increases the Elemental DMG and Elemental Resistance of the allies in the area by 8% and 5% respectively. 10s cooldown."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Samantha",
          "tabs": [
              "5★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Samantha-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Samantha-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Samantha-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Samantha-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Samantha-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Samantha-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Samantha-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "vera-scarlet-summers",
          "name": "Vera - Scarlet Summers",
          "pageTitle": "Vera - Scarlet Summers",
          "sourcePage": "Memories/Event_Memories",
          "family": "Event",
          "tab": "Released Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-VeraScarletSummers-Bust.png",
          "stats": {
              "hp": "1208",
              "crit": "53",
              "atk": "107",
              "def": "181"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Upon a 3-Ping, gains 5% ATK for 5s. Cooldown: 10s."
              },
              {
                  "label": "4-Piece Set",
                  "description": "While in Matrix, restores HP equal to 200% of the current ATK next time when dealing DMG. Cooldown: 25s."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Vera_-_Scarlet_Summers",
          "tabs": [
              "Released Memories"
          ],
          "families": [
              "Event"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-VeraScarletSummers-Icon.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-VeraScarletSummers-Icon.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-VeraScarletSummers-Icon.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-VeraScarletSummers-Icon.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-VeraScarletSummers-Portrait.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-VeraScarletSummers-Portrait.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-VeraScarletSummers-Portrait.png"
          ],
          "facts": []
      },
      {
          "id": "voltaire",
          "name": "Voltaire",
          "pageTitle": "Voltaire",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "5★ Memories",
          "rarity": "5★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Voltaire-Bust.png",
          "stats": {
              "hp": "1232",
              "crit": "51",
              "atk": "107",
              "def": "181"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Attacks reduce the target’s DEF by 10% for 5s. 12s cooldown."
              },
              {
                  "label": "4-Piece Set",
                  "description": "When taking damage, reduces the attacker's Physical DEF by 15% for 7s. Can be stacked up to 2 times. Duration resets every time it is triggered."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Voltaire",
          "tabs": [
              "5★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Voltaire-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Voltaire-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Voltaire-Icon-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Voltaire-Icon-3.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Voltaire-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Voltaire-Portrait-2.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Voltaire-Portrait-3.png"
          ],
          "facts": []
      },
      {
          "id": "alice",
          "name": "Alice",
          "pageTitle": "Alice",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "4★ Memories",
          "rarity": "4★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Alice-Bust.png",
          "stats": {
              "hp": "1081",
              "crit": "48",
              "atk": "96",
              "def": "162"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Healing effect increases by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Healing increases the target's Physical DMG and Elemental DMG by 4% for 4s. Duration resets every time it is triggered."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Alice",
          "tabs": [
              "4★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Alice-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Alice-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-%7B%7BPAGENAME%7D%7D-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-%7B%7BPAGENAME%7D%7D-Icon-1.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Alice-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-%7B%7BPAGENAME%7D%7D-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-%7B%7BPAGENAME%7D%7D-Portrait-1.png"
          ],
          "facts": []
      },
      {
          "id": "archimedes",
          "name": "Archimedes",
          "pageTitle": "Archimedes",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "4★ Memories",
          "rarity": "4★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Archimedes-Bust.png",
          "stats": {
              "hp": "1059",
              "crit": "49",
              "atk": "97",
              "def": "158"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Basic Attack's Extra DMG Bonus increases by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "In every 10s, the next Basic Attack increases Basic Attack DMG by 10% for 4s."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Archimedes",
          "tabs": [
              "4★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Archimedes-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Archimedes-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Archimedes-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Archimedes-Icon-1.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Archimedes-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Archimedes-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Archimedes-Portrait-1.png"
          ],
          "facts": []
      },
      {
          "id": "cunningham",
          "name": "Cunningham",
          "pageTitle": "Cunningham",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "4★ Memories",
          "rarity": "4★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cunningham-Bust.png",
          "stats": {
              "hp": "1102",
              "crit": "47",
              "atk": "94",
              "def": "165"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Physical and Elemental DMG increases by 5% when attacking enemies with Super Armor."
              },
              {
                  "label": "4-Piece Set",
                  "description": "If being attacked multiple times within 5s, gain a shield that reduces the next DMG taken by 30%. 5s cooldown."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Cunningham",
          "tabs": [
              "4★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cunningham-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cunningham-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-%7B%7BPAGENAME%7D%7D-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-%7B%7BPAGENAME%7D%7D-Icon-1.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Cunningham-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-%7B%7BPAGENAME%7D%7D-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-%7B%7BPAGENAME%7D%7D-Portrait-1.png"
          ],
          "facts": []
      },
      {
          "id": "edison",
          "name": "Edison",
          "pageTitle": "Edison",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "4★ Memories",
          "rarity": "4★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Edison-Bust.png",
          "stats": {
              "hp": "1059",
              "crit": "48",
              "atk": "97",
              "def": "162"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Signal Orb skill DMG increases by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "After a 3-Ping, Extra DMG Bonus increases by 5% for 5s. Duration resets every time it is triggered."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Edison",
          "tabs": [
              "4★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Edison-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Edison-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-%7B%7BPAGENAME%7D%7D-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-%7B%7BPAGENAME%7D%7D-Icon-1.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Edison-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-%7B%7BPAGENAME%7D%7D-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-%7B%7BPAGENAME%7D%7D-Portrait-1.png"
          ],
          "facts": []
      },
      {
          "id": "nimitz",
          "name": "Nimitz",
          "pageTitle": "Nimitz",
          "sourcePage": "Memories/Uniframe_Memories",
          "family": "Uniframe",
          "tab": "4★ Memories",
          "rarity": "4★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Nimitz-Bust.png",
          "stats": {
              "hp": "1081",
              "crit": "48",
              "atk": "97",
              "def": "158"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Basic Attack's Extra DMG Bonus increases by 5%."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Extra DMG Bonus of 3-Ping is increased by 5%."
              },
              {
                  "label": "6-Piece Set",
                  "description": "After an Entrance Skill, Extra DMG Bonus increases by 10% for 8s."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Nimitz",
          "tabs": [
              "4★ Memories"
          ],
          "families": [
              "Uniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Nimitz-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Nimitz-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-%7B%7BPAGENAME%7D%7D-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-%7B%7BPAGENAME%7D%7D-Icon-1.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Nimitz-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-%7B%7BPAGENAME%7D%7D-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-%7B%7BPAGENAME%7D%7D-Portrait-1.png"
          ],
          "facts": []
      },
      {
          "id": "pavrey",
          "name": "Pavrey",
          "pageTitle": "Pavrey",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "3★ Memories",
          "rarity": "3★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hermann-Bust.png",
          "stats": {
              "hp": "368",
              "crit": "16",
              "atk": "32",
              "def": "55"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Extra DMG Bonus increases by 3% when attacking enemies farther than 3m."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Extra DMG Reduction increases by 3% when attacked by enemies farther than 3m."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Pavrey",
          "tabs": [
              "3★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hermann-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hermann-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hermann-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hermann-Icon-1.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hermann-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hermann-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Hermann-Portrait-1.png"
          ],
          "facts": []
      },
      {
          "id": "pinoff",
          "name": "Pinoff",
          "pageTitle": "Pinoff",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "3★ Memories",
          "rarity": "3★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Modell-Bust.png",
          "stats": {
              "hp": "375",
              "crit": "16",
              "atk": "31",
              "def": "56"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "Extra DMG Bonus increases by 3% when attacking enemies within 2m."
              },
              {
                  "label": "4-Piece Set",
                  "description": "Extra DMG Reduction increases by 3% when attacked by enemies within 2m."
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Pinoff",
          "tabs": [
              "3★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Modell-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Modell-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Modell-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Modell-Icon-1.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Modell-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Modell-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Modell-Portrait-1.png"
          ],
          "facts": []
      },
      {
          "id": "merli",
          "name": "Merli",
          "pageTitle": "Merli",
          "sourcePage": "Memories/Omniframe_Memories",
          "family": "Omniframe",
          "tab": "2★ Memories",
          "rarity": "2★",
          "image": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Speer-Bust.png",
          "stats": {
              "hp": "82",
              "crit": "3",
              "atk": "7",
              "def": "12"
          },
          "effects": [
              {
                  "label": "2-Piece Set",
                  "description": "ATK +10"
              },
              {
                  "label": "4-Piece Set",
                  "description": "HP +50"
              }
          ],
          "slots": [],
          "sourceUrl": "https://grayravens.com/wiki/Merli",
          "tabs": [
              "2★ Memories"
          ],
          "families": [
              "Omniframe"
          ],
          "portrait": "https://grayravens.com/wiki/Special:Redirect/file/Memory-Speer-Icon-1.png",
          "recommendedUsers": [],
          "slotIcons": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Speer-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Speer-Icon-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Speer-Icon-1.png"
          ],
          "portraits": [
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Speer-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Speer-Portrait-1.png",
              "https://grayravens.com/wiki/Special:Redirect/file/Memory-Speer-Portrait-1.png"
          ],
          "facts": []
      }
  ],
  weapons: [
    {
      id: "signature-weapon-placeholder",
      name: "Signature Weapon Placeholder",
      rarity: "6★",
      type: "Construct weapon",
      owner: "lucia-crimson-weave",
      atk: "",
      crit: "",
      image: "",
      effect: "Placeholder signature weapon entry. Replace with weapon passive, resonance notes, and source details.",
      sourceUrl: "https://grayravens.com/wiki/GRAY_RAVENS"
    },
    {
      id: "standard-weapon-placeholder",
      name: "Standard Weapon Placeholder",
      rarity: "5★",
      type: "Budget weapon",
      owner: "",
      atk: "",
      crit: "",
      image: "",
      effect: "General-use weapon placeholder for budget builds and early progression recommendations.",
      sourceUrl: "https://grayravens.com/wiki/GRAY_RAVENS"
    }
  ],
  cubs: [
    {
      id: "offense-cub-placeholder",
      name: "Offense CUB Placeholder",
      rarity: "S",
      role: "Offense",
      element: "General",
      image: "",
      effect: "Placeholder companion entry. Use this for CUB active/passive effects and preferred users.",
      sourceUrl: "https://grayravens.com/wiki/GRAY_RAVENS"
    },
    {
      id: "support-cub-placeholder",
      name: "Support CUB Placeholder",
      rarity: "A",
      role: "Support",
      element: "General",
      image: "",
      effect: "Placeholder support CUB notes for utility, grouping, debuff, or sustain-oriented recommendations.",
      sourceUrl: "https://grayravens.com/wiki/GRAY_RAVENS"
    }
  ],
  guides: [
    {
      id: "beginner-guide",
      title: "Beginner Guide",
      category: "Starter",
      status: "Draft",
      summary: "A placeholder hub for onboarding, account progression, and early resource priorities.",
      sourceUrl: "https://grayravens.com/wiki/GRAY_RAVENS"
    },
    {
      id: "team-building-guide",
      title: "Team Building Guide",
      category: "Combat",
      status: "Draft",
      summary: "A placeholder guide for roles, QTE chains, amplifier/tank/support slots, and element cores.",
      sourceUrl: "https://grayravens.com/wiki/GRAY_RAVENS"
    }
  ],
  gameModes: [
    {
      id: "war-zone",
      name: "War Zone",
      category: "Scoring",
      status: "Draft",
      summary: "Mode guide placeholder for wave routing, team selection, score windows, and rotation priorities.",
      sourceUrl: "https://grayravens.com/wiki/GRAY_RAVENS"
    },
    {
      id: "phantom-pain-cage",
      name: "Phantom Pain Cage",
      category: "Bossing",
      status: "Draft",
      summary: "Mode guide placeholder for burst windows, boss phases, resistance checks, and retry routing.",
      sourceUrl: "https://grayravens.com/wiki/GRAY_RAVENS"
    }
  ],
  gamePatches: [
    {
      id: "patch-tbd",
      name: "Patch TBD",
      number: "",
      date: "TBD",
      status: "Draft",
      notes: "Placeholder release patch. Use this until exact patch names and release order are filled in.",
      characters: []
    }
  ],
  enemies: [
    {
      id: "boss-placeholder",
      name: "Boss Placeholder",
      type: "Boss",
      element: "Mixed",
      image: "",
      summary: "Enemy archive placeholder for weaknesses, phase notes, hazards, and suggested counters.",
      sourceUrl: "https://grayravens.com/wiki/GRAY_RAVENS"
    }
  ],
  roadmap: [
    {
      id: "upcoming-constructs",
      title: "Upcoming Constructs",
      type: "Characters",
      status: "Planning",
      date: "TBD",
      notes: "Track future construct pages, kit imports, image/icon collection, and release readiness.",
      sourceUrl: "https://grayravens.com/wiki/GRAY_RAVENS"
    },
    {
      id: "rotation-library",
      title: "Rotation Library Expansion",
      type: "Combat",
      status: "Draft",
      date: "TBD",
      notes: "Add reusable visual rotation patterns for opener, burst, sustain, and swap-cancel routes.",
      sourceUrl: ""
    }
  ],
  settings: {
    brandIcon: "GR",
    keywordIcons: [
      { keyword: "physical", label: "Physical", icon: "P", color: "#d7dde5" },
      { keyword: "lightning", label: "Lightning", icon: "L", color: "#e5ba4a" },
      { keyword: "fire", label: "Fire", icon: "F", color: "#e75656" },
      { keyword: "ice", label: "Ice", icon: "I", color: "#5b9df6" },
      { keyword: "dark", label: "Dark", icon: "D", color: "#a889f0" },
      { keyword: "nihil", label: "Nihil", icon: "N", color: "#cfd4da" },
      { keyword: "attacker", label: "Attacker", icon: "A", color: "#e75656" },
      { keyword: "tank", label: "Tank", icon: "T", color: "#3fc6d5" },
      { keyword: "support", label: "Support", icon: "S", color: "#6ed092" },
      { keyword: "amplifier", label: "Amplifier", icon: "+", color: "#a889f0" },
      { keyword: "annihilator", label: "Annihilator", icon: "X", color: "#cfd4da" },
      { keyword: "vanguard", label: "Vanguard", icon: "V", color: "#e5ba4a" },
      { keyword: "observer", label: "Observer", icon: "O", color: "#5b9df6" },
      { keyword: "breaker", label: "Breaker", icon: "B", color: "#f08b5f" }
    ],
    dropdowns: {
      roles: ["Attacker", "Tank", "Support", "Amplifier", "Vanguard", "Annihilator", "Observer", "Breaker"],
      classes: ["DPS", "Tank", "Support", "Amplifier", "Vanguard", "Annihilator", "Observer", "Breaker"],
      ranks: ["S+", "S", "A", "B"],
      memoryFamilies: ["Omniframe", "Uniframe", "Event", "Collab", "Story"],
      weaponRarities: ["6★", "5★", "4★"],
      cubRarities: ["S", "A", "B"]
    }
  }
};

const STORAGE_KEY = "gray-ravens-database:v2";
const seedDatabase = JSON.parse(JSON.stringify(db));

const actionMeta = {
  swap: { icon: "⇄", label: "Swap", color: "#3fc6d5" },
  orb3: { icon: "●●●", label: "3-Ping", color: "#e5ba4a" },
  qte: { icon: "Q", label: "QTE", color: "#6ed092" },
  core: { icon: "◆", label: "Core", color: "#a889f0" },
  ult: { icon: "U", label: "Ultimate", color: "#e75656" },
  support: { icon: "+", label: "Support", color: "#5b9df6" }
};

const state = {
  route: "characters",
  filter: "all",
  focus: "all",
  selectedCharacter: "lucia-crimson-weave",
  constructTab: "kit",
  tierMode: "warzone",
  selectedTeam: "thunder-vanguard",
  selectedMemory: "condelina",
  rotation: "crimson-standard",
  activeStep: 0,
  timer: null,
  custom: [],
  manageTab: "bio",
  managerCharacter: "lucia-crimson-weave",
  managerMemory: "condelina",
  systemTab: "weapons",
  pendingUploads: 0,
  draft: null,
  memoryDraft: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const characterById = (id) => db.characters.find((character) => character.id === id);
const memoryById = (id) => (db.memories || []).find((memory) => memory.id === id);
const weaponById = (id) => (db.weapons || []).find((weapon) => weapon.id === id);
const cubById = (id) => (db.cubs || []).find((cub) => cub.id === id);
const elementById = (id) => db.elements.find((element) => element.id === id) || db.elements[0];
const slugify = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const constructTabs = ["kit", "review", "build", "teams", "rotations", "calculations", "coatings"];

function init() {
  loadDatabase();
  normalizeCollections();
  normalizeCharacters();
  renderSignals();
  renderStats();
  renderFilters();
  renderCharacters();
  renderTiers();
  renderTeams();
  renderMemories();
  renderWeapons();
  renderCubs();
  renderGuides();
  renderPatches();
  renderRoadmap();
  applyGlobalSettings();
  renderRotationSelect();
  renderRotation();
  renderPalette();
  renderManager();
  bindEvents();
  navigate(location.hash.replace("#", "") || "characters");
}

function bindEvents() {
  window.addEventListener("hashchange", () => navigate(location.hash.replace("#", "") || "characters"));
  $("#globalSearch").addEventListener("input", () => {
    renderCharacters();
    renderMemories();
    renderWeapons();
    renderCubs();
    renderGuides();
    renderPatches();
    renderRoadmap();
  });
  $("#managerSearch").addEventListener("input", renderManagerList);
  $("#memoryFamilyFilter").addEventListener("change", renderMemories);
  $("#memoryRarityFilter").addEventListener("change", renderMemories);
  $("#quickRotation").addEventListener("click", () => navigate("rotations"));
  $$("[data-route-button]").forEach((button) => button.addEventListener("click", () => navigate(button.dataset.routeButton)));
  $$(".segment[data-focus]").forEach((button) => button.addEventListener("click", () => {
    state.focus = button.dataset.focus;
    $$(".segment[data-focus]").forEach((item) => item.classList.toggle("active", item === button));
    renderStats();
    renderCharacters();
  }));
  $("#tierMode").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-mode]");
    if (!button) return;
    state.tierMode = button.dataset.mode;
    $$("#tierMode .segment").forEach((item) => item.classList.toggle("active", item === button));
    renderTiers();
  });
  $("#copyTeam").addEventListener("click", copySelectedTeam);
  $("#rotationSelect").addEventListener("change", (event) => {
    state.rotation = event.target.value;
    state.activeStep = 0;
    stopRotation();
    renderRotation();
  });
  $("#playRotation").addEventListener("click", playRotation);
  $("#resetRotation").addEventListener("click", () => {
    state.activeStep = 0;
    stopRotation();
    renderRotation();
  });
  $("#clearCustom").addEventListener("click", () => {
    state.custom = [];
    renderCustom();
  });
  $("#exportCustom").addEventListener("click", exportCustom);
  $("#newCharacter").addEventListener("click", startNewCharacter);
  $("#duplicateCharacter").addEventListener("click", duplicateCharacter);
  $("#saveCharacter").addEventListener("click", saveCharacterFromForm);
  $$(".manager-tab").forEach((button) => button.addEventListener("click", () => switchManageTab(button.dataset.manageTab)));
  $("#addAbility").addEventListener("click", () => addStackItem("abilities"));
  $("#addBuild").addEventListener("click", () => addStackItem("builds"));
  $("#addCalculation").addEventListener("click", () => addStackItem("calculations"));
  $("#addCoating").addEventListener("click", () => addStackItem("coatings"));
  $("#addManagedRotation").addEventListener("click", () => addStackItem("commonRotations"));
  $("#addElementMix").addEventListener("click", () => addStackItem("elements"));
  $("#addSpecialty").addEventListener("click", () => addStackItem("specialties"));
  $("#addEffectEntry").addEventListener("click", () => addStackItem("effects"));
  $("#addFact").addEventListener("click", () => addStackItem("facts"));
  $("#exportDatabase").addEventListener("click", exportDatabase);
  $("#importDatabase").addEventListener("change", importDatabase);
  $("#resetDatabase").addEventListener("click", resetDatabase);
  $("#newMemory").addEventListener("click", startNewMemory);
  $("#saveMemory").addEventListener("click", saveMemoryFromForm);
  $("#saveSystems").addEventListener("click", saveSystems);
  $("#addWeapon").addEventListener("click", () => addSystemItem("weapons"));
  $("#addCub").addEventListener("click", () => addSystemItem("cubs"));
  $("#addGuide").addEventListener("click", () => addSystemItem("guides"));
  $("#addMode").addEventListener("click", () => addSystemItem("gameModes"));
  $("#addPatch").addEventListener("click", () => addSystemItem("gamePatches"));
  $("#addEnemy").addEventListener("click", () => addSystemItem("enemies"));
  $("#addRoadmap").addEventListener("click", () => addSystemItem("roadmap"));
  $("#addKeywordIcon").addEventListener("click", addKeywordIcon);
  $("#addDropdownOption").addEventListener("click", addDropdownOption);
  $$("[data-settings-tab]").forEach((button) => button.addEventListener("click", () => switchSettingsTab(button.dataset.settingsTab)));
  $$("[data-system-tab]").forEach((button) => button.addEventListener("click", () => switchSystemTab(button.dataset.systemTab)));
  $("#addMemoryEffect").addEventListener("click", addMemoryEffect);
  $("#memoryForm").addEventListener("submit", (event) => {
    event.preventDefault();
    saveMemoryFromForm();
  });
  $$("[data-form-image]").forEach((input) => input.addEventListener("change", handleFormImageUpload));
  $$("[data-memory-file]").forEach((input) => input.addEventListener("change", handleMemoryFileUpload));
  setupImageDropZones();
  $("#characterForm").addEventListener("submit", (event) => {
    event.preventDefault();
    saveCharacterFromForm();
  });
}

function navigate(route) {
  const parts = route.split("/");
  let normalized = ["characters", "tiers", "teams", "memories", "weapons", "cubs", "guides", "patches", "roadmap", "rotations", "manage", "overview", "construct"].includes(parts[0]) ? parts[0] : "characters";
  if (normalized === "construct") {
    const character = characterById(parts[1]) || characterById(state.selectedCharacter) || db.characters[0];
    state.selectedCharacter = character.id;
    state.constructTab = constructTabs.includes(parts[2]) ? parts[2] : state.constructTab;
  }
  state.route = normalized === "overview" ? "characters" : normalized;
  const targetHash = normalized === "construct" ? `construct/${state.selectedCharacter}/${state.constructTab}` : normalized;
  if (location.hash.replace("#", "") !== targetHash) location.hash = targetHash;
  $$(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.route === normalized));
  $$(".view").forEach((view) => view.classList.toggle("active", view.dataset.view === state.route));
  if (normalized === "construct") renderConstructPage();
  if (normalized !== "overview") {
    document.querySelector(`[data-view="${state.route}"]`).scrollIntoView({ block: "start" });
  } else {
    $("#overview").scrollIntoView({ block: "start" });
  }
}

function renderSignals() {
  const signals = [
    ["featured", "⟲", "Visual rotations", "Icon timelines for swap, QTE, core, and ult windows.", "#3fc6d5"],
    ["", "◆", "Build sheets", "Weapons, memories, priorities.", "#e75656"],
    ["", "▲", "Mode tiers", "War Zone, Pain Cage, general.", "#e5ba4a"],
    ["", "◎", "Team cores", "Composition gameplans.", "#6ed092"],
    ["", "⌕", "Fast filters", "Search by role or element.", "#a889f0"],
    ["", "⇪", "Guide export", "Share custom rotation strings.", "#5b9df6"]
  ];
  $("#signalGrid").innerHTML = signals.map(([featured, icon, title, body, color]) => `
    <article class="signal-tile ${featured}" style="--accent:${color}">
      <div class="signal-icon">${icon}</div>
      <div><strong>${title}</strong><p class="muted">${body}</p></div>
    </article>
  `).join("");
}

function renderStats() {
  const chars = filteredCharacters(false);
  const stats = [
    ["Constructs", chars.length],
    ["Elements", new Set(chars.map((item) => item.element)).size],
    ["Memories", db.memories?.length || 0],
    ["Weapons", db.weapons?.length || 0],
    ["CUBs", db.cubs?.length || 0],
    ["Guides", db.guides?.length || 0],
    ["Teams", db.teams.length],
    ["Rotations", db.rotations.length]
  ];
  if ($("#statGrid")) {
    $("#statGrid").innerHTML = stats.map(([label, value]) => `
      <article class="stat-card"><strong>${value}</strong><span class="muted">${label}</span></article>
    `).join("");
  }
  $("#databaseSummary").textContent = `${db.characters.length} constructs, ${db.memories?.length || 0} memories, ${db.weapons?.length || 0} weapons, ${db.cubs?.length || 0} CUBs`;
}

function renderFilters() {
  $("#elementFilters").innerHTML = db.elements.map((element) => `
    <button class="filter-chip ${element.id === state.filter ? "active" : ""}" style="--accent:${element.color}" data-filter="${element.id}" type="button">${keywordIconMarkup(element.id)}${element.label}</button>
  `).join("");
  $("#elementFilters").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    state.filter = button.dataset.filter;
    $$(".filter-chip").forEach((chip) => chip.classList.toggle("active", chip === button));
    renderCharacters();
  });
}

function filteredCharacters(includeSearch = true) {
  const search = includeSearch ? $("#globalSearch").value.trim().toLowerCase() : "";
  return db.characters.filter((character) => {
    const roleMatch = state.focus === "all" || character.class.toLowerCase() === state.focus;
    const characterElements = (character.elements || [{ name: character.element }]).map((item) => item.name);
    const elementMatch = state.filter === "all" || characterElements.includes(state.filter) || character.element === state.filter;
    const abilityText = (character.abilities || []).map((ability) => `${ability.name} ${ability.description}`).join(" ");
    const specialtyText = (character.specialties || []).map((specialty) => `${specialty.name} ${specialty.description}`).join(" ");
    const elementText = (character.elements || []).map((item) => `${item.name} ${item.percent}`).join(" ");
    const factText = (character.facts || []).map((fact) => `${fact.label} ${fact.value}`).join(" ");
    const buildText = (character.builds || []).map((build) => `${build.name} ${build.weapon} ${build.memories} ${build.cub} ${build.priority}`).join(" ");
    const rotationText = (character.commonRotations || []).map((rotation) => `${rotation.name} ${rotation.steps}`).join(" ");
    const text = `${character.name} ${character.role} ${character.class} ${character.element} ${character.weapon} ${character.weaponType} ${character.memory} ${character.bio} ${character.faction} ${character.effect} ${character.cub?.name} ${abilityText} ${specialtyText} ${elementText} ${factText} ${buildText} ${rotationText}`.toLowerCase();
    return roleMatch && elementMatch && (!search || text.includes(search));
  }).sort((a, b) => {
    const aNumber = patchNumber(a);
    const bNumber = patchNumber(b);
    if (aNumber !== bNumber) return aNumber - bNumber;
    return a.name.localeCompare(b.name);
  });
}

function renderCharacters() {
  const characters = filteredCharacters();
  if (!characters.some((character) => character.id === state.selectedCharacter) && characters[0]) {
    state.selectedCharacter = characters[0].id;
  }
  $("#characterGrid").innerHTML = characters.map((character) => {
    const element = elementById(character.element);
    return `
      <button class="character-card ${character.id === state.selectedCharacter ? "active" : ""}" data-character="${character.id}" style="--accent:${element.color}" type="button">
        ${portraitMarkup(character)}
        <span>
          <strong>${character.name}</strong>
          <span class="card-meta">
            <span class="rank-badge">${character.rank}</span>
            <span class="pill">${keywordIconMarkup(character.element)}${elementSummary(character)}</span>
            <span class="pill">${keywordIconMarkup(character.role)}${character.role}</span>
          </span>
          <span class="muted">${character.notes}</span>
        </span>
      </button>
    `;
  }).join("") || `<p class="muted">No constructs match the current filters.</p>`;
  $$("#characterGrid .character-card").forEach((card) => card.addEventListener("click", () => {
    state.selectedCharacter = card.dataset.character;
    navigate(`construct/${state.selectedCharacter}/kit`);
  }));
}

function renderCharacterDetail() {
  const character = characterById(state.selectedCharacter) || db.characters[0];
  const element = elementById(character.element);
  const teams = db.teams.filter((team) => team.members.includes(character.id));
  const builds = character.builds && character.builds.length ? character.builds : [
    { name: "Recommended", weapon: character.weapon, memories: character.memory, priority: character.priority }
  ];
  $("#characterDetail").style.setProperty("--accent", element.color);
  $("#characterDetail").innerHTML = `
    <p class="kicker">${elementSummary(character)} ${character.role}</p>
    <h3>${character.name}</h3>
    <p class="muted">${character.bio || character.notes}</p>
    <div class="build-list">
      <div class="build-item"><strong>Specialties</strong><span>${(character.specialties || []).map((specialty) => specialty.name).join(" / ") || "Not set"}</span></div>
      <div class="build-item"><strong>CUB</strong><span>${character.cub?.name || "Not set"}</span><small class="muted">${character.cub?.notes || ""}</small></div>
      ${builds.map((build) => `
        <div class="build-item">
          <strong>${build.name || "Build"}</strong>
          <span>${build.weapon || character.weapon}</span>
          <span>${build.cub || character.cub?.name || ""}</span>
          <span>${buildMemorySlots(build).some(Boolean) ? buildMemorySlots(build).map((id) => memoryById(id)?.name).filter(Boolean).join(" / ") : build.memories || character.memory}</span>
          <small class="muted">${build.priority || character.priority}</small>
        </div>
      `).join("")}
    </div>
    ${renderAbilityBlock(character)}
    ${renderCommonRotationBlock(character)}
    <h3>Recommended Teams</h3>
    <div class="mini-team">
      ${teams.map((team) => `<button class="action-chip" data-team-jump="${team.id}" type="button"><span>◎</span>${team.name}</button>`).join("") || `<span class="muted">No teams registered yet.</span>`}
    </div>
    <button class="ghost-button manage-current" data-manage-character="${character.id}" type="button"><span>✎</span>Edit source record</button>
  `;
  $$("[data-team-jump]").forEach((button) => button.addEventListener("click", () => {
    state.selectedTeam = button.dataset.teamJump;
    navigate("teams");
    renderTeams();
  }));
  $$("[data-manage-character]").forEach((button) => button.addEventListener("click", () => {
    state.managerCharacter = button.dataset.manageCharacter;
    navigate("manage");
    loadCharacterIntoForm(state.managerCharacter);
  }));
}

function openConstruct(id, tab = "kit") {
  state.selectedCharacter = id;
  state.constructTab = tab;
  navigate(`construct/${id}/${tab}`);
}

function renderTiers() {
  const board = db.tiers[state.tierMode];
  const colors = { "S+": "#e5ba4a", S: "#3fc6d5", A: "#6ed092" };
  $("#tierBoard").innerHTML = Object.entries(board).map(([rank, ids]) => `
    <article class="tier-row" style="--accent:${colors[rank]}">
      <div class="tier-label">${rank}</div>
      <div class="tier-entries">
        ${ids.map((id) => {
          const character = characterById(id);
          if (!character) return "";
          const element = elementById(character.element);
          return `<button class="tier-entry" data-tier-character="${id}" style="--accent:${element.color}" type="button"><span class="role-token">${character.sigil}</span><span><strong>${character.name}</strong><br><small class="muted">${element.label} ${character.role}</small></span></button>`;
        }).join("") || `<span class="muted">No entries yet.</span>`}
      </div>
    </article>
  `).join("");
  $$("[data-tier-character]").forEach((button) => button.addEventListener("click", () => {
    openConstruct(button.dataset.tierCharacter, "review");
  }));
}

function renderTeams() {
  $("#teamGrid").innerHTML = db.teams.map((team) => {
    const element = elementById(team.element);
    return `
      <article class="team-card ${team.id === state.selectedTeam ? "selected" : ""}" style="--accent:${element.color}">
        <div>
          <p class="kicker">${element.label} core</p>
          <h3>${team.name}</h3>
          <p class="muted">${team.gameplan}</p>
        </div>
        <div class="team-members">
          ${team.members.map((id) => {
            const character = characterById(id);
            if (!character) return "";
            return `<button class="team-member action-chip" data-character-jump="${id}" type="button"><span class="role-token">${character.sigil}</span><span>${character.name}<br><small>${character.role}</small></span></button>`;
          }).join("")}
        </div>
        <button class="primary-button" data-team-select="${team.id}" type="button"><span>⟲</span>Load rotation</button>
      </article>
    `;
  }).join("");
  $$("[data-team-select]").forEach((button) => button.addEventListener("click", () => {
    state.selectedTeam = button.dataset.teamSelect;
    const team = db.teams.find((item) => item.id === state.selectedTeam);
    if (team.rotation !== "custom") state.rotation = team.rotation;
    navigate("rotations");
    renderTeams();
    renderRotationSelect();
    renderRotation();
  }));
  $$("[data-character-jump]").forEach((button) => button.addEventListener("click", () => {
    openConstruct(button.dataset.characterJump, "teams");
  }));
}

function populateMemoryFilters() {
  const memories = db.memories || [];
  const familyValue = $("#memoryFamilyFilter").value || "all";
  const rarityValue = $("#memoryRarityFilter").value || "all";
  const families = [...new Set(memories.flatMap((memory) => memory.families?.length ? memory.families : [memory.family]).filter(Boolean))].sort();
  const rarities = [...new Set(memories.map((memory) => memory.rarity).filter(Boolean))].sort((a, b) => Number.parseInt(b, 10) - Number.parseInt(a, 10));
  $("#memoryFamilyFilter").innerHTML = [
    `<option value="all">All memory groups</option>`,
    ...families.map((family) => `<option value="${escapeAttribute(family)}">${escapeHtml(displayText(family))}</option>`)
  ].join("");
  $("#memoryRarityFilter").innerHTML = [
    `<option value="all">All rarities</option>`,
    ...rarities.map((rarity) => `<option value="${escapeAttribute(rarity)}">${escapeHtml(displayText(rarity))}</option>`)
  ].join("");
  $("#memoryFamilyFilter").value = families.includes(familyValue) ? familyValue : "all";
  $("#memoryRarityFilter").value = rarities.includes(rarityValue) ? rarityValue : "all";
}

function filteredMemories() {
  const family = $("#memoryFamilyFilter").value || "all";
  const rarity = $("#memoryRarityFilter").value || "all";
  const search = $("#globalSearch").value.trim().toLowerCase();
  return (db.memories || []).filter((memory) => {
    const memoryFamilies = memory.families?.length ? memory.families : [memory.family];
    const familyMatch = family === "all" || memoryFamilies.includes(family);
    const rarityMatch = rarity === "all" || memory.rarity === rarity;
    const effectText = (memory.effects || []).map((effect) => `${effect.label} ${effect.description}`).join(" ");
    const userText = (memory.recommendedUsers || []).join(" ");
    const text = `${memory.name} ${memory.family} ${memory.tab} ${memory.rarity} ${effectText} ${userText}`.toLowerCase();
    return familyMatch && rarityMatch && (!search || text.includes(search));
  });
}

function renderMemories() {
  if (!$("#memoryGrid")) return;
  populateMemoryFilters();
  const memories = filteredMemories();
  if (!memories.some((memory) => memory.id === state.selectedMemory) && memories[0]) {
    state.selectedMemory = memories[0].id;
  }
  $("#memoryGrid").innerHTML = memories.map((memory) => `
    <button class="memory-card ${memory.id === state.selectedMemory ? "active" : ""}" data-memory="${memory.id}" type="button">
      ${memoryImageMarkup(memory, "thumb")}
      <span>
        <strong>${escapeHtml(displayText(memory.name))}</strong>
        <span class="card-meta">
          <span class="rank-badge">${escapeHtml(displayText(memory.rarity || "?"))}</span>
          <span class="pill">${escapeHtml(displayText(memory.family || "Memory"))}</span>
          <span class="pill">${escapeHtml(displayText(memory.tab || ""))}</span>
        </span>
        <span class="memory-stat-line">${memoryStats(memory)}</span>
      </span>
    </button>
  `).join("") || `<p class="muted">No memories match the current filters.</p>`;
  $$("#memoryGrid .memory-card").forEach((card) => card.addEventListener("click", () => {
    state.selectedMemory = card.dataset.memory;
    renderMemories();
  }));
  renderMemoryDetail(memories);
}

function renderMemoryDetail(filtered = filteredMemories()) {
  const memory = memoryById(state.selectedMemory) || filtered[0] || (db.memories || [])[0];
  if (!memory) {
    $("#memoryDetail").innerHTML = `<p class="muted">No memories imported yet.</p>`;
    return;
  }
  const effects = memory.effects?.length ? memory.effects : [{ label: "Set effect", description: "No set effect text was imported." }];
  $("#memoryDetail").innerHTML = `
    <div class="memory-detail-hero">
      ${memoryImageMarkup(memory, "large")}
      <div>
        <p class="kicker">${escapeHtml(displayText(memory.rarity || ""))} ${escapeHtml(displayText(memory.family || ""))}</p>
        <h3>${escapeHtml(displayText(memory.name))}</h3>
        <p class="muted">${escapeHtml(displayText(memory.tab || ""))}</p>
      </div>
    </div>
    <div class="memory-stat-grid">
      ${Object.entries(memory.stats || {}).map(([label, value]) => `<span><strong>${label.toUpperCase()}</strong>${escapeHtml(value)}</span>`).join("") || `<span><strong>Stats</strong>Not set</span>`}
    </div>
    <div class="build-list">
      ${effects.map((effect) => `
        <div class="build-item">
          <strong>${escapeHtml(displayText(effect.label))}</strong>
          <span class="rich-text">${richText(effect.description)}</span>
        </div>
      `).join("")}
    </div>
    ${memory.recommendedUsers?.length ? `
      <h3>Recommended Users</h3>
      <div class="tag-list">${memory.recommendedUsers.map((user) => `<span class="info-tag">${escapeHtml(displayText(user))}</span>`).join("")}</div>
    ` : ""}
    ${memory.slotIcons?.length || memory.portraits?.length ? `
      <h3>Images</h3>
      <div class="memory-slot-board">
        ${renderMemoryImageRow("Icons", memory.slotIcons || [], memory)}
        ${renderMemoryImageRow("Splash Art", memory.portraits || [], memory)}
      </div>
    ` : ""}
    <a class="ghost-button source-link" href="${escapeHtml(memory.sourceUrl || "#")}" target="_blank" rel="noreferrer">Open Gray Ravens source</a>
  `;
}

function renderWeapons() {
  if (!$("#weaponGrid")) return;
  const search = $("#globalSearch").value.trim().toLowerCase();
  const weapons = (db.weapons || []).filter((weapon) => searchableText(weapon).includes(search));
  $("#weaponGrid").innerHTML = weapons.map((weapon) => {
    const owner = characterById(weapon.owner);
    return `
      <article class="archive-card">
        ${systemImageMarkup(weapon, "weapon")}
        <div>
          <p class="kicker">${escapeHtml(displayText(weapon.rarity || ""))} ${escapeHtml(displayText(weapon.type || "Weapon"))}</p>
          <h3>${escapeHtml(displayText(weapon.name))}</h3>
        <p class="muted rich-text">${richText(weapon.effect || "No weapon effect has been added yet.")}</p>
          <div class="tag-list">
            ${owner ? `<button class="action-chip" data-profile-character="${owner.id}" type="button"><span>${owner.sigil}</span>${escapeHtml(owner.name)}</button>` : `<span class="info-tag">Unassigned</span>`}
            ${weapon.atk ? `<span class="info-tag">ATK ${escapeHtml(displayText(weapon.atk))}</span>` : ""}
            ${weapon.crit ? `<span class="info-tag">Crit ${escapeHtml(displayText(weapon.crit))}</span>` : ""}
          </div>
        </div>
      </article>
    `;
  }).join("") || `<p class="muted">No weapons match the current search.</p>`;
  bindProfileCharacterLinks("build");
}

function renderCubs() {
  if (!$("#cubGrid")) return;
  const search = $("#globalSearch").value.trim().toLowerCase();
  const cubs = (db.cubs || []).filter((cub) => searchableText(cub).includes(search));
  $("#cubGrid").innerHTML = cubs.map((cub) => `
    <article class="archive-card">
      ${systemImageMarkup(cub, "cub")}
      <div>
        <p class="kicker">${escapeHtml(displayText(cub.rarity || ""))} ${escapeHtml(displayText(cub.role || "CUB"))}</p>
        <h3>${escapeHtml(displayText(cub.name))}</h3>
        <p class="muted rich-text">${richText(cub.effect || "No CUB effect has been added yet.")}</p>
        <div class="tag-list">
          ${cub.element ? `<span class="info-tag">${escapeHtml(displayText(cub.element))}</span>` : ""}
          ${cub.sourceUrl ? `<a class="source-inline" href="${escapeAttribute(cub.sourceUrl)}" target="_blank" rel="noreferrer">Source</a>` : ""}
        </div>
      </div>
    </article>
  `).join("") || `<p class="muted">No CUBs match the current search.</p>`;
}

function renderGuides() {
  renderArchiveList("#guideGrid", db.guides || [], "Guides", (guide) => `
    <p class="kicker">${escapeHtml(displayText(guide.category || "Guide"))} ${escapeHtml(displayText(guide.status || ""))}</p>
    <h3>${escapeHtml(displayText(guide.title))}</h3>
    <p class="muted rich-text">${richText(guide.summary || "No guide summary has been added yet.")}</p>
    ${guide.sourceUrl ? `<a class="source-inline" href="${escapeAttribute(guide.sourceUrl)}" target="_blank" rel="noreferrer">Source</a>` : ""}
  `);
  renderArchiveList("#modeGrid", db.gameModes || [], "Game Modes", (mode) => `
    <p class="kicker">${escapeHtml(displayText(mode.category || "Mode"))} ${escapeHtml(displayText(mode.status || ""))}</p>
    <h3>${escapeHtml(displayText(mode.name))}</h3>
    <p class="muted rich-text">${richText(mode.summary || "No mode notes have been added yet.")}</p>
  `);
  renderArchiveList("#enemyGrid", db.enemies || [], "Enemies", (enemy) => `
    <p class="kicker">${escapeHtml(displayText(enemy.type || "Enemy"))} ${escapeHtml(displayText(enemy.element || ""))}</p>
    <h3>${escapeHtml(displayText(enemy.name))}</h3>
    <p class="muted rich-text">${richText(enemy.summary || "No enemy notes have been added yet.")}</p>
  `, true);
}

function renderPatches() {
  if (!$("#patchGrid")) return;
  const search = $("#globalSearch").value.trim().toLowerCase();
  const patches = [...(db.gamePatches || [])]
    .filter((patch) => searchableText(patch).includes(search))
    .sort((a, b) => patchNumber(a) - patchNumber(b));
  $("#patchGrid").innerHTML = patches.map((patch) => {
    const released = releasedCharactersForPatch(patch);
    return `
      <article class="archive-card small">
        <div>
          <p class="kicker">Patch ${escapeHtml(displayText(patch.number || ""))} ${escapeHtml(displayText(patch.status || ""))}</p>
          <h3>${escapeHtml(displayText(patch.name || "Unnamed Patch"))}</h3>
          <p class="muted rich-text">${richText(patch.notes || "No patch notes have been added yet.")}</p>
          <div class="tag-list">
            ${released.map((character) => `<button class="action-chip" data-profile-character="${character.id}" type="button"><span>${character.sigil}</span>${escapeHtml(character.name)}</button>`).join("") || `<span class="info-tag">No released constructs assigned.</span>`}
          </div>
        </div>
      </article>
    `;
  }).join("") || `<p class="muted">No patches match the current search.</p>`;
  bindProfileCharacterLinks("review");
}

function releasedCharactersForPatch(patch) {
  const explicitIds = Array.isArray(patch.characters) ? patch.characters : [];
  const explicit = explicitIds.map(characterById).filter(Boolean);
  const byCharacterField = db.characters.filter((character) => character.releasePatch === patch.id || character.releasePatch === patch.name);
  return [...new Map([...explicit, ...byCharacterField].map((character) => [character.id, character])).values()]
    .sort((a, b) => patchNumber(a) - patchNumber(b));
}

function patchNumber(item) {
  const value = Number.parseFloat(item.releasePatchNumber || item.number || "");
  return Number.isFinite(value) ? value : 999999;
}

function renderRoadmap() {
  if (!$("#roadmapGrid")) return;
  const search = $("#globalSearch").value.trim().toLowerCase();
  const items = (db.roadmap || []).filter((item) => searchableText(item).includes(search));
  $("#roadmapGrid").innerHTML = items.map((item) => `
    <article class="roadmap-card">
      <p class="kicker">${escapeHtml(displayText(item.type || "Project"))}</p>
      <h3>${escapeHtml(displayText(item.title))}</h3>
      <div class="roadmap-meta">
        <span class="rank-badge">${escapeHtml(displayText(item.status || "Draft"))}</span>
        <span class="pill">${escapeHtml(displayText(item.date || "TBD"))}</span>
      </div>
      <p class="muted rich-text">${richText(item.notes || "No roadmap notes have been added.")}</p>
      ${item.sourceUrl ? `<a class="source-inline" href="${escapeAttribute(item.sourceUrl)}" target="_blank" rel="noreferrer">Source</a>` : ""}
    </article>
  `).join("") || `<p class="muted">No roadmap items match the current search.</p>`;
}

function renderArchiveList(selector, items, label, template, includeImage = false) {
  if (!$(selector)) return;
  const search = $("#globalSearch").value.trim().toLowerCase();
  const filtered = items.filter((item) => searchableText(item).includes(search));
  $(selector).innerHTML = `
    <article class="archive-heading"><p class="kicker">${escapeHtml(label)}</p><h3>${filtered.length} entries</h3></article>
    ${filtered.map((item) => `<article class="archive-card small">${includeImage ? systemImageMarkup(item, label) : ""}<div>${template(item)}</div></article>`).join("")}
  `;
}

function systemImageMarkup(item, fallback = "item") {
  const label = item.name || item.title || fallback;
  if (!item.image) return `<span class="system-image">${escapeHtml(label.slice(0, 2).toUpperCase())}</span>`;
  return `<span class="system-image image-system"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(displayText(label))}" loading="lazy" onerror="this.parentElement.classList.add('image-failed')" /><span>${escapeHtml(label.slice(0, 2).toUpperCase())}</span></span>`;
}

function applyGlobalSettings() {
  const mark = $("#brandMark");
  if (!mark) return;
  const value = db.settings?.brandIcon || "GR";
  if (isImagePath(value)) {
    mark.innerHTML = `<img src="${escapeAttribute(value)}" alt="Gray Ravens Database icon" />`;
    mark.classList.add("image-brand");
  } else {
    mark.textContent = value.slice(0, 4) || "GR";
    mark.classList.remove("image-brand");
  }
}

function keywordIcon(keyword) {
  const key = String(keyword || "").toLowerCase();
  return (db.settings?.keywordIcons || []).find((item) => String(item.keyword || "").toLowerCase() === key || String(item.label || "").toLowerCase() === key);
}

function keywordIconMarkup(keyword) {
  const item = keywordIcon(keyword);
  if (!item?.icon) return "";
  const color = item.color || "var(--accent)";
  if (isImagePath(item.icon)) {
    return `<span class="keyword-icon image-keyword" style="--keyword:${escapeAttribute(color)}"><img src="${escapeAttribute(item.icon)}" alt="" /></span>`;
  }
  return `<span class="keyword-icon" style="--keyword:${escapeAttribute(color)}">${escapeHtml(item.icon.slice(0, 3))}</span>`;
}

function isImagePath(value) {
  return /\.(png|jpe?g|webp|gif|svg)$/i.test(String(value || "")) || String(value || "").startsWith("data:image/");
}

function searchableText(item) {
  return JSON.stringify(item || {}).toLowerCase();
}

function bindProfileCharacterLinks(tab = "kit") {
  $$("[data-profile-character]").forEach((button) => button.addEventListener("click", () => {
    openConstruct(button.dataset.profileCharacter, tab);
  }));
}

function renderMemoryImageRow(label, images, memory) {
  const slotLabels = ["Slots 1 / 4", "Slots 2 / 5", "Slots 3 / 6"];
  return `
    <div class="memory-slot-row">
      <p class="kicker">${label}</p>
      <div class="memory-slot-grid">
        ${slotLabels.map((slotLabel, index) => `
          <figure>
            <figcaption>${slotLabel}</figcaption>
            ${images[index] ? `<img src="${escapeHtml(images[index])}" alt="${escapeHtml(displayText(memory.name))} ${slotLabel} ${label}" loading="lazy" />` : `<span class="memory-empty-slot">No image</span>`}
          </figure>
        `).join("")}
      </div>
    </div>
  `;
}

function memoryImageMarkup(memory, size = "thumb") {
  const image = memory.portrait || memory.image || memory.slotIcons?.[0] || memory.portraits?.[0];
  if (!image) return `<span class="memory-image ${size}">${escapeHtml((memory.name || "?").slice(0, 2).toUpperCase())}</span>`;
  return `<span class="memory-image ${size}"><img src="${escapeHtml(image)}" alt="${escapeHtml(displayText(memory.name))}" loading="lazy" onerror="this.parentElement.classList.add('image-failed')" /><span>${escapeHtml((memory.name || "?").slice(0, 2).toUpperCase())}</span></span>`;
}

function memoryStats(memory) {
  const stats = memory.stats || {};
  return ["hp", "atk", "def", "crit"].filter((key) => stats[key]).map((key) => `${key.toUpperCase()} ${stats[key]}`).join(" / ") || "Stats not set";
}

function buildMemorySlots(build) {
  const slots = Array.isArray(build.memorySlots) ? build.memorySlots.slice(0, 6) : [];
  while (slots.length < 6) slots.push("");
  return slots;
}

function buildWeaponLabel(value) {
  if (!value) return "";
  return weaponById(value)?.name || (db.weapons || []).find((weapon) => weapon.name === value)?.name || value;
}

function buildCubLabel(value) {
  if (!value) return "";
  return cubById(value)?.name || (db.cubs || []).find((cub) => cub.name === value)?.name || value;
}

function memorySlotIcon(memoryId, slotNumber) {
  const memory = memoryById(memoryId);
  if (!memory) return "";
  const index = (slotNumber - 1) % 3;
  return memory.slotIcons?.[index] || memory.portrait || memory.image || memory.portraits?.[index] || "";
}

function renderBuildMemoryGrid(build, fallbackText = "") {
  const slots = buildMemorySlots(build);
  const hasStructuredSlots = slots.some(Boolean);
  if (!hasStructuredSlots) {
    return `<div class="build-item"><strong>Memories</strong><span>${fallbackText || "Not set"}</span></div>`;
  }
  return `
    <div class="build-memory-block">
      <strong>Memories</strong>
      <div class="build-memory-grid">
        ${slots.map((memoryId, index) => renderBuildMemorySlot(memoryId, index + 1)).join("")}
      </div>
    </div>
  `;
}

function renderBuildMemorySlot(memoryId, slotNumber) {
  const memory = memoryById(memoryId);
  const icon = memorySlotIcon(memoryId, slotNumber);
  return `
    <div class="build-memory-slot">
      <span class="slot-number">${slotNumber}</span>
      ${icon ? `<img src="${escapeHtml(icon)}" alt="${escapeHtml(displayText(memory.name))} slot ${slotNumber}" loading="lazy" />` : `<span class="memory-empty-slot">Empty</span>`}
      <small>${escapeHtml(displayText(memory?.name || "Not set"))}</small>
    </div>
  `;
}

function renderConstructPage() {
  const character = characterById(state.selectedCharacter) || db.characters[0];
  const element = elementById(majorityElement(character));
  const teams = db.teams.filter((team) => team.members.includes(character.id));
  const globalRotations = db.rotations.filter((rotation) => rotation.team.includes(character.id));
  $("#constructPage").style.setProperty("--accent", element.color);
  $("#constructPage").innerHTML = `
    <header class="construct-hero">
      <div class="construct-media">${portraitMarkup(character)}</div>
      <div class="construct-summary">
        <p class="kicker">${elementSummary(character)} ${character.role}</p>
        <h2>${character.name}</h2>
        <p class="muted rich-text">${richText(character.bio || character.notes || "No bio has been added yet.")}</p>
        <div class="profile-meta">
          <span class="rank-badge">${character.rank || "A"}</span>
          <span class="pill">${keywordIconMarkup(character.class)}${character.class}</span>
          <span class="pill">${keywordIconMarkup(majorityElement(character))}${elementSummary(character)}</span>
          <span class="pill">${keywordIconMarkup(character.role)}${character.role}</span>
          ${character.faction ? `<span class="pill">${character.faction}</span>` : ""}
          ${character.releasePatch ? `<span class="pill">${escapeHtml(releasePatchName(character.releasePatch))}</span>` : ""}
        </div>
        <div class="element-mix">${renderElementMix(character)}</div>
      </div>
      <div class="construct-quick-build">
        <div class="build-item"><strong>Frame</strong><span>${character.frame || "Not set"}</span></div>
        <div class="build-item"><strong>Weapon</strong><span>${character.weapon || "Not set"}</span><small class="muted">${character.weaponType || "Weapon type not set"}</small></div>
        <div class="build-item"><strong>CUB</strong><span>${character.cub?.name || "Not set"}</span><small class="muted">${character.cub?.notes || ""}</small></div>
        <div class="build-item"><strong>Memory Set</strong><span>${character.memory || "Not set"}</span></div>
        <button class="ghost-button" data-profile-edit="${character.id}" type="button"><span>✎</span>Edit source record</button>
      </div>
    </header>
    <nav class="profile-tabs" aria-label="${character.name} guide tabs">
      ${constructTabs.map((tab) => `<button class="profile-tab ${state.constructTab === tab ? "active" : ""}" data-profile-tab="${tab}" type="button">${tabLabel(tab)}</button>`).join("")}
    </nav>
    <section class="profile-tab-panel">
      ${renderConstructTab(character, teams, globalRotations)}
    </section>
  `;
  $$("[data-profile-tab]").forEach((button) => button.addEventListener("click", () => {
    state.constructTab = button.dataset.profileTab;
    navigate(`construct/${character.id}/${state.constructTab}`);
  }));
  $$("[data-profile-edit]").forEach((button) => button.addEventListener("click", () => {
    state.managerCharacter = button.dataset.profileEdit;
    navigate("manage");
    loadCharacterIntoForm(state.managerCharacter);
  }));
  $$("[data-profile-team-rotation]").forEach((button) => button.addEventListener("click", () => {
    const team = db.teams.find((item) => item.id === button.dataset.profileTeamRotation);
    if (team && team.rotation !== "custom") state.rotation = team.rotation;
    navigate("rotations");
    renderRotationSelect();
    renderRotation();
  }));
  $$("[data-profile-rotation]").forEach((button) => button.addEventListener("click", () => {
    state.rotation = button.dataset.profileRotation;
    navigate("rotations");
    renderRotationSelect();
    renderRotation();
  }));
  $$("[data-profile-character]").forEach((button) => button.addEventListener("click", () => {
    openConstruct(button.dataset.profileCharacter, state.constructTab);
  }));
}

function renderConstructTab(character, teams, globalRotations) {
  if (state.constructTab === "review") return renderProfileReview(character);
  if (state.constructTab === "build") return renderProfileBuild(character);
  if (state.constructTab === "teams") return renderProfileTeams(teams, character);
  if (state.constructTab === "rotations") return renderProfileRotations(character, globalRotations);
  if (state.constructTab === "calculations") return renderProfileCalculations(character);
  if (state.constructTab === "coatings") return renderProfileCoatings(character);
  return renderProfileKit(character);
}

function tabLabel(tab) {
  return {
    kit: "Kit / Abilities",
    review: "Review",
    build: "Build",
    teams: "Teams",
    rotations: "Rotations",
    calculations: "Calculations",
    coatings: "Coatings"
  }[tab];
}

function renderProfileKit(character) {
  const abilities = character.abilities && character.abilities.length ? character.abilities : defaultAbilities(character);
  const specialties = character.specialties && character.specialties.length ? character.specialties : defaultSpecialties(character);
  const effects = character.effects && character.effects.length ? character.effects : defaultEffects(character);
  return `
    <div class="profile-grid two">
      <article class="profile-card">
        <p class="kicker">Specialties</p>
        <h3>Combat Traits</h3>
        <div class="tag-list">
          ${specialties.map((specialty) => `<span class="info-tag"><strong>${escapeHtml(specialty.name)}</strong>${specialty.description ? ` - <span class="rich-text">${richText(specialty.description)}</span>` : ""}</span>`).join("")}
        </div>
      </article>
      <article class="profile-card">
        <p class="kicker">Effect</p>
        <h3>${character.effect ? "Signature Mechanic" : "No effect recorded"}</h3>
        <p class="muted rich-text">${richText(character.effect || "Add mechanics such as Darkflow, Plasma Beam, stance systems, resource names, or special class effects in Manage.")}</p>
      </article>
    </div>
    ${effects.length ? `
      <div class="profile-grid">
        ${effects.map((effect) => `
          <article class="profile-card">
            <p class="kicker">Effect</p>
            <h3>${escapeHtml(effect.name || "Effect")}</h3>
            <p class="muted rich-text">${richText(effect.description || "No effect description has been added.")}</p>
          </article>
        `).join("")}
      </div>
    ` : ""}
    <div class="profile-grid">
      ${abilities.map((ability) => `
        <article class="profile-card ability-card">
          ${abilityIconMarkup(ability)}
          <div>
            <p class="kicker">Ability</p>
            <h3>${ability.name}</h3>
            <p class="muted rich-text">${richText(ability.description || "No ability description has been added.")}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderProfileReview(character) {
  const facts = character.facts && character.facts.length ? character.facts : defaultFacts(character);
  const review = character.review || defaultReview(character);
  const ratings = review.ratings || {};
  return `
    <div class="profile-grid two">
      <article class="profile-card">
        <p class="kicker">Bio</p>
        <h3>${character.frame || character.name}</h3>
        <p class="muted rich-text">${richText(character.bio || character.notes || "Add a short information bio in the Manage section.")}</p>
      </article>
      <article class="profile-card">
        <p class="kicker">Review</p>
        <h3>${escapeHtml(review.summaryTitle || "Guide Verdict")}</h3>
        <p class="muted rich-text">${richText(review.summary || character.notes || "Add strengths, limitations, and current meta context in Manage.")}</p>
        <div class="rating-grid">
          <span><strong>General</strong>${escapeHtml(ratings.general || "TBD")}</span>
          <span><strong>War Zone</strong>${escapeHtml(ratings.warzone || "TBD")}</span>
          <span><strong>Pain Cage</strong>${escapeHtml(ratings.paincage || "TBD")}</span>
          <span><strong>Difficulty</strong>${escapeHtml(review.difficulty || "TBD")}</span>
        </div>
      </article>
      <article class="profile-card">
        <p class="kicker">Identity</p>
        <h3>${character.rank || "A"} ${character.class}</h3>
        <div class="fact-grid">
          <span><strong>Faction</strong>${character.faction || "Not set"}</span>
          <span><strong>Gift</strong>${character.gift || "Not set"}</span>
          <span><strong>Elements</strong>${elementSummary(character)}</span>
          <span><strong>CUB</strong>${character.cub?.name || "Not set"}</span>
          ${facts.map((fact) => `<span><strong>${fact.label}</strong>${fact.value}</span>`).join("")}
        </div>
      </article>
      <article class="profile-card">
        <p class="kicker">Pros / Cons</p>
        <h3>At a Glance</h3>
        <div class="pros-cons">
          <div><strong>Pros</strong>${(review.pros || []).map((item) => `<span class="rich-text">${richText(item)}</span>`).join("") || `<span>Not added yet.</span>`}</div>
          <div><strong>Cons</strong>${(review.cons || []).map((item) => `<span class="rich-text">${richText(item)}</span>`).join("") || `<span>Not added yet.</span>`}</div>
        </div>
      </article>
      <article class="profile-card">
        <p class="kicker">Update tracker</p>
        <h3>${escapeHtml(review.lastUpdated || "Not dated")}</h3>
        <p class="muted rich-text">${richText(review.changeLog || "Track page updates, patch changes, rerating notes, and unfinished sections here.")}</p>
      </article>
    </div>
  `;
}

function renderProfileBuild(character) {
  const builds = character.builds && character.builds.length ? character.builds : [
    { name: "Recommended", weapon: character.weapon, memories: character.memory, priority: character.priority }
  ];
  return `
    <div class="profile-grid">
      ${builds.map((build) => `
        <article class="profile-card">
          <p class="kicker">${build.name || "Build"}</p>
          <h3>${buildWeaponLabel(build.weapon) || character.weapon || "Weapon not set"}</h3>
          <div class="build-list">
            ${build.category ? `<div class="build-item"><strong>Use case</strong><span>${escapeHtml(displayText(build.category))}</span></div>` : ""}
            <div class="build-item"><strong>CUB</strong><span>${buildCubLabel(build.cub) || character.cub?.name || "Not set"}</span><small class="muted">${character.cub?.notes || ""}</small></div>
            ${build.alternateCubs ? `<div class="build-item"><strong>Alternate CUBs</strong><span>${escapeHtml(displayText(build.alternateCubs))}</span></div>` : ""}
            ${renderBuildMemoryGrid(build, build.memories || character.memory)}
            ${build.weaponResonance ? `<div class="build-item"><strong>Weapon Resonance</strong><span class="rich-text">${richText(build.weaponResonance)}</span></div>` : ""}
            ${build.memoryResonance ? `<div class="build-item"><strong>Memory Resonance</strong><span class="rich-text">${richText(build.memoryResonance)}</span></div>` : ""}
            ${build.notes ? `<div class="build-item"><strong>Notes</strong><span class="rich-text">${richText(build.notes)}</span></div>` : ""}
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderProfileCalculations(character) {
  const calculations = character.calculations && character.calculations.length ? character.calculations : defaultCalculations(character);
  return `
    <div class="profile-grid">
      ${calculations.map((calc) => `
        <article class="profile-card">
          <p class="kicker">${escapeHtml(displayText(calc.category || "Calculation"))}</p>
          <h3>${escapeHtml(displayText(calc.name || "Damage note"))}</h3>
          <p class="sequence-line rich-text">${richText(calc.formula || "Formula placeholder")}</p>
          <p class="muted rich-text">${richText(calc.notes || "Add multipliers, assumptions, rotations tested, and caveats in Manage.")}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function renderProfileTeams(teams, character) {
  return `
    <div class="profile-grid">
      ${teams.map((team) => {
        const element = elementById(team.element);
        return `
          <article class="profile-card" style="--accent:${element.color}">
            <p class="kicker">${element.label} team</p>
            <h3>${team.name}</h3>
            <p class="muted rich-text">${richText(team.gameplan)}</p>
            <div class="team-members">
              ${team.members.map((id) => {
                const member = characterById(id);
                if (!member) return "";
                return `<button class="team-member action-chip" data-profile-character="${member.id}" type="button"><span class="role-token">${member.sigil}</span><span>${member.name}<br><small>${member.role}</small></span></button>`;
              }).join("")}
            </div>
            <button class="primary-button" data-profile-team-rotation="${team.id}" type="button"><span>⟲</span>Open rotation</button>
          </article>
        `;
      }).join("") || `<article class="profile-card"><h3>No registered teams</h3><p class="muted">${character.name} is not assigned to a team yet.</p></article>`}
    </div>
  `;
}

function renderProfileRotations(character, globalRotations) {
  const common = character.commonRotations && character.commonRotations.length ? character.commonRotations : defaultCommonRotations(character);
  return `
    <div class="profile-grid two">
      ${common.map((rotation) => `
        <article class="profile-card">
          <p class="kicker">Character route</p>
          <h3>${rotation.name}</h3>
          <p class="sequence-line">${rotation.steps}</p>
          <p class="muted rich-text">${richText(rotation.notes || "")}</p>
        </article>
      `).join("")}
      ${globalRotations.map((rotation) => `
        <article class="profile-card">
          <p class="kicker">Interactive guide</p>
          <h3>${rotation.name}</h3>
          <p class="muted rich-text">${richText(rotation.notes)}</p>
          <button class="primary-button" data-profile-rotation="${rotation.id}" type="button"><span>▶</span>Load in rotation lab</button>
        </article>
      `).join("")}
    </div>
  `;
}

function renderProfileCoatings(character) {
  const coatings = Array.isArray(character.coatings) ? character.coatings : [];
  return `
    <div class="profile-grid">
      ${coatings.map((coating) => `
        <article class="profile-card coating-card">
          ${coating.image ? `<img class="coating-image" src="${escapeHtml(coating.image)}" alt="${escapeHtml(coating.name)} coating" loading="lazy" />` : `<div class="coating-image placeholder">${escapeHtml((coating.name || "?").slice(0, 2).toUpperCase())}</div>`}
          <div>
            <p class="kicker">${escapeHtml(coating.rarity || "Coating")}</p>
            <h3>${escapeHtml(coating.name || "Unnamed coating")}</h3>
            <p class="muted rich-text">${richText(coating.description || "No coating description has been added.")}</p>
          </div>
        </article>
      `).join("") || `<article class="profile-card"><h3>No coatings recorded</h3><p class="muted">Add character skins from the Manage page.</p></article>`}
    </div>
  `;
}

function renderRotationSelect() {
  $("#rotationSelect").innerHTML = db.rotations.map((rotation) => `<option value="${rotation.id}">${rotation.name}</option>`).join("");
  $("#rotationSelect").value = state.rotation;
}

function renderRotation() {
  const rotation = db.rotations.find((item) => item.id === state.rotation) || db.rotations[0];
  $("#rotationTeam").innerHTML = rotation.team.map((id) => {
    const character = characterById(id);
    if (!character) return `<span class="action-chip"><span>?</span>${id}</span>`;
    return `<span class="action-chip"><span>${character.sigil}</span>${character.name}</span>`;
  }).join("");
  $("#rotationTimeline").innerHTML = rotation.steps.map((step, index) => {
    const [type, short, title, time, detail] = step;
    const meta = actionMeta[type];
    return `
      <button class="step ${index === state.activeStep ? "active" : ""}" style="--accent:${meta.color}" data-step="${index}" type="button">
        <span class="step-icon">${meta.icon}</span>
        <span><strong>${short}: ${title}</strong><br><small class="muted">${detail}</small></span>
        <time>${time}</time>
      </button>
    `;
  }).join("");
  const active = rotation.steps[state.activeStep];
  $("#rotationNotes").textContent = active ? active[4] : rotation.notes;
  $$("#rotationTimeline .step").forEach((button) => button.addEventListener("click", () => {
    state.activeStep = Number(button.dataset.step);
    stopRotation();
    renderRotation();
  }));
}

function playRotation() {
  stopRotation();
  const rotation = db.rotations.find((item) => item.id === state.rotation);
  state.timer = window.setInterval(() => {
    state.activeStep = (state.activeStep + 1) % rotation.steps.length;
    renderRotation();
  }, 1100);
}

function stopRotation() {
  if (state.timer) window.clearInterval(state.timer);
  state.timer = null;
}

function renderPalette() {
  $("#actionPalette").innerHTML = Object.entries(actionMeta).map(([type, meta]) => `
    <button class="action-chip" data-action="${type}" style="--accent:${meta.color}" type="button"><span>${meta.icon}</span>${meta.label}</button>
  `).join("");
  $$("#actionPalette [data-action]").forEach((button) => button.addEventListener("click", () => {
    state.custom.push(button.dataset.action);
    renderCustom();
  }));
  renderCustom();
}

function renderCustom() {
  $("#customSequence").innerHTML = state.custom.map((type, index) => {
    const meta = actionMeta[type];
    return `<button class="action-chip" data-custom-index="${index}" style="--accent:${meta.color}" type="button"><span>${meta.icon}</span>${meta.label}</button>`;
  }).join("") || `<span class="muted">Click action icons to draft a route.</span>`;
  $$("[data-custom-index]").forEach((button) => button.addEventListener("click", () => {
    state.custom.splice(Number(button.dataset.customIndex), 1);
    renderCustom();
  }));
}

function exportCustom() {
  const text = state.custom.map((type, index) => `${index + 1}. ${actionMeta[type].label}`).join(" -> ");
  $("#exportBox").value = text || "No custom actions selected.";
  $("#exportBox").select();
}

function copySelectedTeam() {
  const team = db.teams.find((item) => item.id === state.selectedTeam) || db.teams[0];
  const text = `${team.name}: ${team.members.map((id) => characterById(id).name).join(" / ")}. ${team.gameplan}`;
  navigator.clipboard?.writeText(text);
}

function loadDatabase() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    const parsed = JSON.parse(stored);
    if (!parsed || !Array.isArray(parsed.characters)) return;
    db.characters = parsed.characters;
    if (parsed.tiers) db.tiers = parsed.tiers;
    if (Array.isArray(parsed.teams)) db.teams = parsed.teams;
    if (Array.isArray(parsed.rotations)) db.rotations = parsed.rotations;
    if (Array.isArray(parsed.memories)) db.memories = parsed.memories;
    if (Array.isArray(parsed.weapons)) db.weapons = parsed.weapons;
    if (Array.isArray(parsed.cubs)) db.cubs = parsed.cubs;
    if (Array.isArray(parsed.guides)) db.guides = parsed.guides;
    if (Array.isArray(parsed.gameModes)) db.gameModes = parsed.gameModes;
    if (Array.isArray(parsed.gamePatches)) db.gamePatches = parsed.gamePatches;
    if (Array.isArray(parsed.enemies)) db.enemies = parsed.enemies;
    if (Array.isArray(parsed.roadmap)) db.roadmap = parsed.roadmap;
    if (parsed.settings) db.settings = parsed.settings;
  } catch (error) {
    console.warn("Could not load local database", error);
  }
}

function persistDatabase() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    characters: db.characters,
    memories: db.memories,
    tiers: db.tiers,
    teams: db.teams,
    rotations: db.rotations,
    weapons: db.weapons,
    cubs: db.cubs,
    guides: db.guides,
    gameModes: db.gameModes,
    gamePatches: db.gamePatches,
    enemies: db.enemies,
    roadmap: db.roadmap,
    settings: db.settings
  }));
}

function normalizeCollections() {
  ["weapons", "cubs", "guides", "gameModes", "gamePatches", "enemies", "roadmap"].forEach((key) => {
    db[key] = Array.isArray(db[key]) ? db[key] : [];
  });
  db.settings = db.settings && typeof db.settings === "object" ? db.settings : {};
  db.settings.brandIcon = db.settings.brandIcon || "GR";
  db.settings.keywordIcons = Array.isArray(db.settings.keywordIcons) ? db.settings.keywordIcons : [];
  if (!db.settings.keywordIcons.length && seedDatabase?.settings?.keywordIcons?.length) {
    db.settings.keywordIcons = JSON.parse(JSON.stringify(seedDatabase.settings.keywordIcons));
  }
  db.settings.dropdowns = db.settings.dropdowns && typeof db.settings.dropdowns === "object" ? db.settings.dropdowns : {};
  Object.entries(defaultDropdowns()).forEach(([key, values]) => {
    db.settings.dropdowns[key] = uniqueOptions([...(db.settings.dropdowns[key] || []), ...values]);
  });
  mergeDefaultKeywordIcons();
  db.weapons.forEach((weapon) => {
    weapon.id = weapon.id || slugify(weapon.name || "new-weapon");
    weapon.name = weapon.name || "New Weapon";
    weapon.rarity = weapon.rarity || "6★";
    weapon.type = weapon.type || "";
    weapon.owner = weapon.owner || "";
    weapon.atk = weapon.atk || "";
    weapon.crit = weapon.crit || "";
    weapon.image = weapon.image || "";
    weapon.effect = weapon.effect || "";
    weapon.sourceUrl = weapon.sourceUrl || "";
  });
  db.cubs.forEach((cub) => {
    cub.id = cub.id || slugify(cub.name || "new-cub");
    cub.name = cub.name || "New CUB";
    cub.rarity = cub.rarity || "S";
    cub.role = cub.role || "";
    cub.element = cub.element || "";
    cub.image = cub.image || "";
    cub.effect = cub.effect || "";
    cub.sourceUrl = cub.sourceUrl || "";
  });
  db.guides.forEach((guide) => {
    guide.id = guide.id || slugify(guide.title || "new-guide");
    guide.title = guide.title || "New Guide";
    guide.category = guide.category || "";
    guide.status = guide.status || "Draft";
    guide.summary = guide.summary || "";
    guide.sourceUrl = guide.sourceUrl || "";
  });
  db.gameModes.forEach((mode) => {
    mode.id = mode.id || slugify(mode.name || "new-mode");
    mode.name = mode.name || "New Mode";
    mode.category = mode.category || "";
    mode.status = mode.status || "Draft";
    mode.summary = mode.summary || "";
    mode.sourceUrl = mode.sourceUrl || "";
  });
  db.gamePatches.forEach((patch) => {
    patch.id = patch.id || slugify(patch.name || "new-patch");
    patch.name = patch.name || "New Patch";
    patch.number = patch.number || "";
    patch.date = patch.date || "";
    patch.status = patch.status || "Draft";
    patch.notes = patch.notes || "";
    patch.characters = Array.isArray(patch.characters) ? patch.characters : [];
  });
  db.enemies.forEach((enemy) => {
    enemy.id = enemy.id || slugify(enemy.name || "new-enemy");
    enemy.name = enemy.name || "New Enemy";
    enemy.type = enemy.type || "";
    enemy.element = enemy.element || "";
    enemy.image = enemy.image || "";
    enemy.summary = enemy.summary || "";
    enemy.sourceUrl = enemy.sourceUrl || "";
  });
  db.roadmap.forEach((item) => {
    item.id = item.id || slugify(item.title || "new-roadmap-item");
    item.title = item.title || "New Roadmap Item";
    item.type = item.type || "";
    item.status = item.status || "Draft";
    item.date = item.date || "TBD";
    item.notes = item.notes || "";
    item.sourceUrl = item.sourceUrl || "";
  });
}

function defaultDropdowns() {
  return seedDatabase?.settings?.dropdowns || {
    roles: ["Attacker", "Tank", "Support", "Amplifier", "Vanguard", "Annihilator", "Observer", "Breaker"],
    classes: ["DPS", "Tank", "Support", "Amplifier", "Vanguard", "Annihilator", "Observer", "Breaker"],
    ranks: ["S+", "S", "A", "B"],
    memoryFamilies: ["Omniframe", "Uniframe", "Event", "Collab", "Story"],
    weaponRarities: ["6★", "5★", "4★"],
    cubRarities: ["S", "A", "B"]
  };
}

function mergeDefaultKeywordIcons() {
  const existing = new Set((db.settings.keywordIcons || []).map((item) => String(item.keyword || "").toLowerCase()));
  (seedDatabase?.settings?.keywordIcons || []).forEach((item) => {
    if (!existing.has(String(item.keyword || "").toLowerCase())) db.settings.keywordIcons.push(JSON.parse(JSON.stringify(item)));
  });
}

function normalizeCharacters() {
  db.characters.forEach((character) => {
    character.id = character.id || slugify(character.name || "new-character");
    character.name = character.name || "Unnamed Construct";
    character.sigil = character.sigil || initials(character.name);
    character.role = character.role || "Attacker";
    character.class = character.class || "DPS";
    character.element = character.element || "physical";
    character.rank = character.rank || "A";
    character.weapon = character.weapon || "";
    character.weaponType = character.weaponType || "";
    character.memory = character.memory || "";
    character.priority = character.priority || "";
    character.notes = character.notes || "";
    character.image = character.image || "";
    character.bio = character.bio || character.notes || "";
    character.frame = character.frame || character.name.split(":")[1]?.trim() || character.name;
    character.faction = character.faction || "";
    character.gift = character.gift || "";
    character.releasePatch = character.releasePatch || "";
    character.releasePatchNumber = character.releasePatchNumber || "";
    character.effect = character.effect || "";
    character.cub = character.cub && typeof character.cub === "object" ? character.cub : { name: "", notes: "" };
    character.elements = Array.isArray(character.elements) && character.elements.length ? character.elements : [{ name: character.element || "physical", percent: "100" }];
    character.specialties = Array.isArray(character.specialties) ? character.specialties : defaultSpecialties(character);
    character.effects = Array.isArray(character.effects) ? character.effects : defaultEffects(character);
    character.facts = Array.isArray(character.facts) ? character.facts : defaultFacts(character);
    character.abilities = Array.isArray(character.abilities) ? character.abilities : defaultAbilities(character);
    character.review = character.review && typeof character.review === "object" ? character.review : defaultReview(character);
    character.review.ratings = character.review.ratings && typeof character.review.ratings === "object" ? character.review.ratings : {};
    character.review.pros = Array.isArray(character.review.pros) ? character.review.pros : [];
    character.review.cons = Array.isArray(character.review.cons) ? character.review.cons : [];
    character.abilities.forEach((ability) => {
      ability.icon = ability.icon || "";
    });
    character.calculations = Array.isArray(character.calculations) ? character.calculations : defaultCalculations(character);
    character.coatings = Array.isArray(character.coatings) ? character.coatings : [];
    character.builds = Array.isArray(character.builds) ? character.builds : [
      { name: "Recommended", weapon: character.weapon, memories: character.memory, memorySlots: ["", "", "", "", "", ""], priority: character.priority }
    ];
    character.builds.forEach((build) => {
      build.memorySlots = buildMemorySlots(build);
      build.memories = build.memories || "";
      build.category = build.category || "";
      build.weaponResonance = build.weaponResonance || "";
      build.memoryResonance = build.memoryResonance || "";
      build.alternateCubs = build.alternateCubs || "";
    });
    character.commonRotations = Array.isArray(character.commonRotations) ? character.commonRotations : defaultCommonRotations(character);
  });
}

function defaultAbilities(character) {
  return [
    { name: "Core Passive", description: character.priority || "Describe the main mechanic, trigger condition, and payoff.", icon: "" },
    { name: "Signature Move", description: character.notes || "Describe the important burst, stance, or field effect.", icon: "" }
  ];
}

function defaultReview(character) {
  return {
    summaryTitle: "Guide Verdict",
    summary: character.notes || "",
    ratings: { general: "", warzone: "", paincage: "" },
    difficulty: "",
    pros: [],
    cons: [],
    lastUpdated: "",
    changeLog: ""
  };
}

function defaultCalculations(character) {
  return [
    {
      name: "Core damage note",
      category: "Placeholder",
      formula: `${character.name || "Construct"} multiplier / buff window / assumptions`,
      notes: "Add tested rotations, investment level, memory/weapon resonance assumptions, and caveats."
    }
  ];
}

function defaultSpecialties(character) {
  return [
    { name: character.class || "Role", description: character.priority || "Describe the construct's primary combat specialty." }
  ];
}

function defaultEffects(character) {
  return character.effect ? [{ name: "Signature Mechanic", description: character.effect }] : [];
}

function defaultFacts(character) {
  return [
    { label: "Frame", value: character.frame || character.name },
    { label: "Faction", value: character.faction || "Not set" }
  ];
}

function defaultCommonRotations(character) {
  return [
    {
      name: "Standard opener",
      steps: `Swap ${character.name} in -> 3-ping -> QTE -> Core passive -> Ultimate`,
      notes: "Replace this placeholder with the preferred field order and timing notes."
    }
  ];
}

function initials(name) {
  return name.split(/[\s:]+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "GR";
}

function linesFromText(value) {
  return String(value || "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
}

function portraitMarkup(character) {
  if (character.image) {
    return `<span class="portrait image-portrait"><img src="${escapeHtml(character.image)}" alt="${escapeHtml(character.name)} portrait" onerror="this.parentElement.classList.add('image-failed')" /><span>${character.sigil}</span></span>`;
  }
  return `<span class="portrait">${character.sigil}</span>`;
}

function renderAbilityBlock(character) {
  if (!character.abilities || !character.abilities.length) return "";
  return `
    <h3>Abilities</h3>
    <div class="build-list">
      ${character.abilities.map((ability) => `
        <div class="build-item ability-line">${abilityIconMarkup(ability)}<span><strong>${escapeHtml(ability.name)}</strong><span class="rich-text">${richText(ability.description)}</span></span></div>
      `).join("")}
    </div>
  `;
}

function abilityIconMarkup(ability) {
  if (!ability.icon) return `<span class="ability-icon">${escapeHtml((ability.name || "?").slice(0, 1).toUpperCase())}</span>`;
  return `<span class="ability-icon image-ability"><img src="${escapeHtml(ability.icon)}" alt="${escapeHtml(ability.name)} icon" loading="lazy" onerror="this.parentElement.classList.add('image-failed')" /><span>${escapeHtml((ability.name || "?").slice(0, 1).toUpperCase())}</span></span>`;
}

function renderCommonRotationBlock(character) {
  if (!character.commonRotations || !character.commonRotations.length) return "";
  return `
    <h3>Common Rotations</h3>
    <div class="build-list">
      ${character.commonRotations.map((rotation) => `
        <div class="build-item"><strong>${escapeHtml(rotation.name)}</strong><span class="rich-text">${richText(rotation.steps)}</span><small class="muted rich-text">${richText(rotation.notes || "")}</small></div>
      `).join("")}
    </div>
  `;
}

function renderManager() {
  enhanceMemoryCategorySelects();
  $("#managerElementSelect").innerHTML = db.elements
    .filter((element) => element.id !== "all")
    .map((element) => `<option value="${element.id}">${element.label}</option>`)
    .join("");
  setSelectOptions($("#managerRoleSelect"), dropdownOptions("roles"), state.draft?.role || "");
  setSelectOptions($("#characterForm [name=\"class\"]"), dropdownOptions("classes"), state.draft?.class || "DPS");
  $("#releasePatchSelect").innerHTML = patchSelectOptions();
  switchManageTab(state.manageTab);
  renderManagerList();
  loadCharacterIntoForm(state.managerCharacter);
  renderMemoryManager();
  renderSystemEditors();
}

function enhanceMemoryCategorySelects() {
  replaceMemoryInputWithSelect("memoryFamily", "memoryFamilySelect", memoryFamilyOptions());
  replaceMemoryInputWithSelect("memoryRarity", "memoryRaritySelect", memoryRarityOptions());
  replaceMemoryInputWithSelect("memoryTab", "memoryTabSelect", memoryTabOptions());
}

function replaceMemoryInputWithSelect(name, id, options) {
  const field = $(`#memoryForm [name="${name}"]`);
  if (!field || field.tagName === "SELECT") return;
  const select = document.createElement("select");
  select.name = name;
  select.id = id;
  select.innerHTML = options.map((option) => `<option value="${escapeAttribute(option)}">${escapeHtml(displayText(option))}</option>`).join("");
  field.replaceWith(select);
}

function updateMemoryCategorySelects(memory = state.memoryDraft || {}) {
  setSelectOptions($("#memoryFamilySelect"), memoryFamilyOptions(memory.family), memory.family || "Omniframe");
  setSelectOptions($("#memoryRaritySelect"), memoryRarityOptions(memory.rarity), memory.rarity || "6★");
  setSelectOptions($("#memoryTabSelect"), memoryTabOptions(memory.tab), memory.tab || "6★ Memories");
}

function setSelectOptions(select, options, value) {
  if (!select) return;
  const normalizedValue = displayText(value || "");
  select.innerHTML = options.map((option) => {
    const selected = displayText(option) === normalizedValue ? "selected" : "";
    return `<option value="${escapeAttribute(option)}" ${selected}>${escapeHtml(displayText(option))}</option>`;
  }).join("");
}

function memoryRarityOptions(extra = "") {
  return uniqueOptions(["6★", "5★", "4★", "3★", "2★", ...(db.memories || []).map((memory) => memory.rarity), extra]);
}

function memoryFamilyOptions(extra = "") {
  return uniqueOptions([...dropdownOptions("memoryFamilies"), ...(db.memories || []).flatMap((memory) => memory.families?.length ? memory.families : [memory.family]), extra]);
}

function memoryTabOptions(extra = "") {
  return uniqueOptions(["6★ Memories", "5★ Memories", "4★ Memories", "3★ Memories", "2★ Memories", "Released Memories", "Unreleased Memories", ...(db.memories || []).flatMap((memory) => memory.tabs?.length ? memory.tabs : [memory.tab]), extra]);
}

function uniqueOptions(values) {
  const seen = new Set();
  return values.filter(Boolean).filter((value) => {
    const key = displayText(value);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function switchManageTab(tab) {
  state.manageTab = tab || "bio";
  $$(".manager-tab").forEach((button) => button.classList.toggle("active", button.dataset.manageTab === state.manageTab));
  $$(".manager-panel").forEach((panel) => panel.classList.toggle("active", panel.dataset.managerPanel === state.manageTab));
}

function renderManagerList() {
  const search = $("#managerSearch").value.trim().toLowerCase();
  const characters = db.characters.filter((character) => {
    const text = `${character.name} ${character.role} ${character.class} ${character.element}`.toLowerCase();
    return !search || text.includes(search);
  });
  $("#managerCharacterList").innerHTML = characters.map((character) => {
    const element = elementById(character.element);
    return `
      <button class="manager-list-item ${character.id === state.managerCharacter ? "active" : ""}" data-manager-character="${character.id}" style="--accent:${element.color}" type="button">
        ${portraitMarkup(character)}
        <span><strong>${character.name}</strong><small>${element.label} ${character.role}</small></span>
      </button>
    `;
  }).join("") || `<p class="muted">No matching constructs.</p>`;
  $$("[data-manager-character]").forEach((button) => button.addEventListener("click", () => {
    state.managerCharacter = button.dataset.managerCharacter;
    loadCharacterIntoForm(state.managerCharacter);
    renderManagerList();
  }));
}

function loadCharacterIntoForm(id) {
  const character = characterById(id) || db.characters[0] || blankCharacter();
  state.managerCharacter = character.id;
  state.draft = JSON.parse(JSON.stringify(character));
  fillBaseFields(state.draft);
  renderStackEditors();
}

function renderMemoryManager() {
  const memory = memoryById(state.managerMemory) || (db.memories || [])[0] || blankMemory();
  state.managerMemory = memory.id;
  state.memoryDraft = JSON.parse(JSON.stringify(memory));
  renderManagerMemoryList();
  fillMemoryForm(state.memoryDraft);
  renderMemoryEffectEditor();
}

function renderManagerMemoryList() {
  $("#managerMemoryList").innerHTML = (db.memories || []).map((memory) => `
    <button class="manager-list-item ${memory.id === state.managerMemory ? "active" : ""}" data-manager-memory="${memory.id}" type="button">
      ${memoryImageMarkup(memory, "thumb")}
      <span><strong>${escapeHtml(displayText(memory.name))}</strong><small>${escapeHtml(displayText(memory.rarity || ""))} ${escapeHtml(displayText(memory.family || ""))}</small></span>
    </button>
  `).join("") || `<p class="muted">No memories added yet.</p>`;
  $$("[data-manager-memory]").forEach((button) => button.addEventListener("click", () => {
    state.managerMemory = button.dataset.managerMemory;
    const memory = memoryById(state.managerMemory);
    state.memoryDraft = JSON.parse(JSON.stringify(memory));
    fillMemoryForm(state.memoryDraft);
    renderMemoryEffectEditor();
    renderManagerMemoryList();
  }));
}

function switchSystemTab(tab) {
  state.systemTab = tab || "weapons";
  $$("[data-system-tab]").forEach((button) => button.classList.toggle("active", button.dataset.systemTab === state.systemTab));
  $$("[data-system-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.systemPanel === state.systemTab));
  if (state.systemTab === "settings") switchSettingsTab($("[data-settings-tab].active")?.dataset.settingsTab || "icons");
}

function renderSystemEditors() {
  switchSystemTab(state.systemTab);
  renderWeaponEditor();
  renderCubEditor();
  renderGuideEditor();
  renderModeEditor();
  renderPatchEditor();
  renderEnemyEditor();
  renderRoadmapEditor();
  renderSettingsEditor();
}

function renderDropdownOptionEditor() {
  const dropdowns = db.settings.dropdowns || {};
  $("#dropdownOptionEditor").innerHTML = Object.entries(dropdowns).flatMap(([group, values]) => values.map((value, index) => `
    <article class="stack-row compact-row">
      <label>Dropdown
        <select data-dropdown-group="${escapeAttribute(group)}" data-dropdown-index="${index}" data-dropdown-field="group">
          ${Object.keys(dropdowns).map((key) => `<option value="${escapeAttribute(key)}" ${key === group ? "selected" : ""}>${escapeHtml(dropdownLabel(key))}</option>`).join("")}
        </select>
      </label>
      <label>Option<input data-dropdown-group="${escapeAttribute(group)}" data-dropdown-index="${index}" data-dropdown-field="value" value="${escapeAttribute(value)}" /></label>
      <button class="icon-button danger" data-remove-dropdown-option="${escapeAttribute(group)}" data-dropdown-index="${index}" type="button" title="Remove option" aria-label="Remove option">x</button>
    </article>
  `)).join("") || `<p class="muted">No dropdown options configured.</p>`;
  bindDropdownOptionInputs();
}

function renderWeaponEditor() {
  $("#weaponEditor").innerHTML = (db.weapons || []).map((weapon, index) => `
    <article class="stack-row">
      <label>Name<input data-system-array="weapons" data-system-index="${index}" data-system-field="name" value="${escapeAttribute(weapon.name || "")}" /></label>
      <label>ID<input data-system-array="weapons" data-system-index="${index}" data-system-field="id" value="${escapeAttribute(weapon.id || "")}" /></label>
      <label>Rarity
        <select data-system-array="weapons" data-system-index="${index}" data-system-field="rarity">
          ${dropdownOptions("weaponRarities", weapon.rarity).map((value) => `<option value="${escapeAttribute(value)}" ${weapon.rarity === value ? "selected" : ""}>${escapeHtml(displayText(value))}</option>`).join("")}
        </select>
      </label>
      <label>Type<input data-system-array="weapons" data-system-index="${index}" data-system-field="type" value="${escapeAttribute(weapon.type || "")}" /></label>
      <label>Owner
        <select data-system-array="weapons" data-system-index="${index}" data-system-field="owner">
          <option value="">Unassigned</option>
          ${db.characters.map((character) => `<option value="${escapeAttribute(character.id)}" ${weapon.owner === character.id ? "selected" : ""}>${escapeHtml(character.name)}</option>`).join("")}
        </select>
      </label>
      <label>ATK<input data-system-array="weapons" data-system-index="${index}" data-system-field="atk" value="${escapeAttribute(weapon.atk || "")}" /></label>
      <label>Crit<input data-system-array="weapons" data-system-index="${index}" data-system-field="crit" value="${escapeAttribute(weapon.crit || "")}" /></label>
      <label>Image URL
        <input data-system-array="weapons" data-system-index="${index}" data-system-field="image" value="${escapeAttribute(weapon.image || "")}" placeholder="https://... or imported local file" />
        <input class="image-import-control" data-system-file="weapons" data-system-index="${index}" data-system-field="image" type="file" accept="image/*" />
      </label>
      <label>Effect<textarea data-system-array="weapons" data-system-index="${index}" data-system-field="effect" rows="3">${escapeHtml(weapon.effect || "")}</textarea></label>
      <label>Source URL<input data-system-array="weapons" data-system-index="${index}" data-system-field="sourceUrl" value="${escapeAttribute(weapon.sourceUrl || "")}" /></label>
      <button class="icon-button danger" data-remove-system="weapons" data-system-index="${index}" type="button" title="Remove weapon" aria-label="Remove weapon">x</button>
    </article>
  `).join("") || `<p class="muted">No weapons added yet.</p>`;
  bindSystemInputs();
}

function renderCubEditor() {
  $("#cubEditor").innerHTML = (db.cubs || []).map((cub, index) => `
    <article class="stack-row">
      <label>Name<input data-system-array="cubs" data-system-index="${index}" data-system-field="name" value="${escapeAttribute(cub.name || "")}" /></label>
      <label>ID<input data-system-array="cubs" data-system-index="${index}" data-system-field="id" value="${escapeAttribute(cub.id || "")}" /></label>
      <label>Rarity
        <select data-system-array="cubs" data-system-index="${index}" data-system-field="rarity">
          ${dropdownOptions("cubRarities", cub.rarity).map((value) => `<option value="${escapeAttribute(value)}" ${cub.rarity === value ? "selected" : ""}>${escapeHtml(displayText(value))}</option>`).join("")}
        </select>
      </label>
      <label>Role<input data-system-array="cubs" data-system-index="${index}" data-system-field="role" value="${escapeAttribute(cub.role || "")}" /></label>
      <label>Element<input data-system-array="cubs" data-system-index="${index}" data-system-field="element" value="${escapeAttribute(cub.element || "")}" /></label>
      <label>Image URL
        <input data-system-array="cubs" data-system-index="${index}" data-system-field="image" value="${escapeAttribute(cub.image || "")}" placeholder="https://... or imported local file" />
        <input class="image-import-control" data-system-file="cubs" data-system-index="${index}" data-system-field="image" type="file" accept="image/*" />
      </label>
      <label>Effect<textarea data-system-array="cubs" data-system-index="${index}" data-system-field="effect" rows="3">${escapeHtml(cub.effect || "")}</textarea></label>
      <label>Source URL<input data-system-array="cubs" data-system-index="${index}" data-system-field="sourceUrl" value="${escapeAttribute(cub.sourceUrl || "")}" /></label>
      <button class="icon-button danger" data-remove-system="cubs" data-system-index="${index}" type="button" title="Remove CUB" aria-label="Remove CUB">x</button>
    </article>
  `).join("") || `<p class="muted">No CUBs added yet.</p>`;
  bindSystemInputs();
}

function renderGuideEditor() {
  renderTextSystemEditor("#guideEditor", "guides", [
    ["title", "Title"], ["id", "ID"], ["category", "Category"], ["status", "Status"], ["sourceUrl", "Source URL"]
  ], "summary", "Summary");
}

function renderModeEditor() {
  renderTextSystemEditor("#modeEditor", "gameModes", [
    ["name", "Name"], ["id", "ID"], ["category", "Category"], ["status", "Status"], ["sourceUrl", "Source URL"]
  ], "summary", "Summary");
}

function renderPatchEditor() {
  $("#patchEditor").innerHTML = (db.gamePatches || []).map((patch, index) => `
    <article class="stack-row">
      <label>Name<input data-system-array="gamePatches" data-system-index="${index}" data-system-field="name" value="${escapeAttribute(patch.name || "")}" /></label>
      <label>ID<input data-system-array="gamePatches" data-system-index="${index}" data-system-field="id" value="${escapeAttribute(patch.id || "")}" /></label>
      <label>Patch number<input data-system-array="gamePatches" data-system-index="${index}" data-system-field="number" value="${escapeAttribute(patch.number || "")}" /></label>
      <label>Date<input data-system-array="gamePatches" data-system-index="${index}" data-system-field="date" value="${escapeAttribute(patch.date || "")}" /></label>
      <label>Status<input data-system-array="gamePatches" data-system-index="${index}" data-system-field="status" value="${escapeAttribute(patch.status || "")}" /></label>
      <label>Released characters
        <select multiple size="8" data-system-array="gamePatches" data-system-index="${index}" data-system-field="characters">
          ${characterMultiOptions(patch.characters || [])}
        </select>
      </label>
      <label>Notes<textarea data-system-array="gamePatches" data-system-index="${index}" data-system-field="notes" rows="4">${escapeHtml(patch.notes || "")}</textarea></label>
      <button class="icon-button danger" data-remove-system="gamePatches" data-system-index="${index}" type="button" title="Remove patch" aria-label="Remove patch">x</button>
    </article>
  `).join("") || `<p class="muted">No patches added yet.</p>`;
  bindSystemInputs();
}

function characterMultiOptions(selectedIds = []) {
  const selected = new Set(selectedIds);
  return db.characters.map((character) => `
    <option value="${escapeAttribute(character.id)}" ${selected.has(character.id) ? "selected" : ""}>${escapeHtml(character.name)} (${escapeHtml(character.id)})</option>
  `).join("");
}

function renderEnemyEditor() {
  $("#enemyEditor").innerHTML = (db.enemies || []).map((enemy, index) => `
    <article class="stack-row">
      <label>Name<input data-system-array="enemies" data-system-index="${index}" data-system-field="name" value="${escapeAttribute(enemy.name || "")}" /></label>
      <label>ID<input data-system-array="enemies" data-system-index="${index}" data-system-field="id" value="${escapeAttribute(enemy.id || "")}" /></label>
      <label>Type<input data-system-array="enemies" data-system-index="${index}" data-system-field="type" value="${escapeAttribute(enemy.type || "")}" /></label>
      <label>Element<input data-system-array="enemies" data-system-index="${index}" data-system-field="element" value="${escapeAttribute(enemy.element || "")}" /></label>
      <label>Image URL
        <input data-system-array="enemies" data-system-index="${index}" data-system-field="image" value="${escapeAttribute(enemy.image || "")}" placeholder="https://... or imported local file" />
        <input class="image-import-control" data-system-file="enemies" data-system-index="${index}" data-system-field="image" type="file" accept="image/*" />
      </label>
      <label>Summary<textarea data-system-array="enemies" data-system-index="${index}" data-system-field="summary" rows="3">${escapeHtml(enemy.summary || "")}</textarea></label>
      <label>Source URL<input data-system-array="enemies" data-system-index="${index}" data-system-field="sourceUrl" value="${escapeAttribute(enemy.sourceUrl || "")}" /></label>
      <button class="icon-button danger" data-remove-system="enemies" data-system-index="${index}" type="button" title="Remove enemy" aria-label="Remove enemy">x</button>
    </article>
  `).join("") || `<p class="muted">No enemies added yet.</p>`;
  bindSystemInputs();
}

function renderRoadmapEditor() {
  renderTextSystemEditor("#roadmapEditor", "roadmap", [
    ["title", "Title"], ["id", "ID"], ["type", "Type"], ["status", "Status"], ["date", "Date"], ["sourceUrl", "Source URL"]
  ], "notes", "Notes");
}

function renderSettingsEditor() {
  $("#brandIconSetting").value = db.settings?.brandIcon || "GR";
  $("#keywordIconEditor").innerHTML = (db.settings?.keywordIcons || []).map((item, index) => `
    <article class="stack-row compact-row">
      <label>Keyword<input data-keyword-icon-index="${index}" data-keyword-icon-field="keyword" value="${escapeAttribute(item.keyword || "")}" placeholder="fire, attacker, support..." /></label>
      <label>Label<input data-keyword-icon-index="${index}" data-keyword-icon-field="label" value="${escapeAttribute(item.label || "")}" /></label>
      <label>Icon
        <input data-keyword-icon-index="${index}" data-keyword-icon-field="icon" value="${escapeAttribute(item.icon || "")}" placeholder="Text, /uploads/icon.png, or image URL" />
        <input class="image-import-control" data-keyword-icon-file data-keyword-icon-index="${index}" data-keyword-icon-field="icon" type="file" accept="image/*" />
      </label>
      <label>Color<input data-keyword-icon-index="${index}" data-keyword-icon-field="color" value="${escapeAttribute(item.color || "")}" placeholder="#e75656" /></label>
      <button class="icon-button danger" data-remove-keyword-icon="${index}" type="button" title="Remove keyword icon" aria-label="Remove keyword icon">x</button>
    </article>
  `).join("") || `<p class="muted">No keyword icons added yet.</p>`;
  renderDropdownOptionEditor();
  bindSettingsInputs();
}

function renderTextSystemEditor(selector, arrayName, fields, textareaField, textareaLabel) {
  $(selector).innerHTML = (db[arrayName] || []).map((item, index) => `
    <article class="stack-row">
      ${fields.map(([field, label]) => `<label>${label}<input data-system-array="${arrayName}" data-system-index="${index}" data-system-field="${field}" value="${escapeAttribute(item[field] || "")}" /></label>`).join("")}
      <label>${textareaLabel}<textarea data-system-array="${arrayName}" data-system-index="${index}" data-system-field="${textareaField}" rows="4">${escapeHtml(item[textareaField] || "")}</textarea></label>
      <button class="icon-button danger" data-remove-system="${arrayName}" data-system-index="${index}" type="button" title="Remove item" aria-label="Remove item">x</button>
    </article>
  `).join("") || `<p class="muted">No entries added yet.</p>`;
  bindSystemInputs();
}

function bindSystemInputs() {
  $$("[data-system-field]").forEach((input) => {
    const update = () => {
      const item = db[input.dataset.systemArray]?.[Number(input.dataset.systemIndex)];
      if (!item) return;
      if (input.dataset.systemField === "characters") {
        item.characters = Array.from(input.selectedOptions).map((option) => option.value);
      } else {
        item[input.dataset.systemField] = input.value;
      }
    };
    input.addEventListener("input", update);
    input.addEventListener("change", update);
  });
  $$("[data-remove-system]").forEach((button) => button.addEventListener("click", () => {
    db[button.dataset.removeSystem].splice(Number(button.dataset.systemIndex), 1);
    renderSystemEditors();
  }));
  $$("[data-system-file]").forEach((input) => input.addEventListener("change", handleSystemImageUpload));
  setupImageDropZones();
}

function bindSettingsInputs() {
  const brandInput = $("#brandIconSetting");
  if (brandInput && brandInput.dataset.bound !== "true") {
    brandInput.dataset.bound = "true";
    brandInput.addEventListener("input", (event) => {
      db.settings.brandIcon = event.target.value;
      applyGlobalSettings();
    });
  }
  $$("[data-keyword-icon-field]").forEach((input) => {
    const update = () => {
      const item = db.settings.keywordIcons[Number(input.dataset.keywordIconIndex)];
      if (!item) return;
      item[input.dataset.keywordIconField] = input.value;
    };
    input.addEventListener("input", update);
    input.addEventListener("change", update);
  });
  $$("[data-remove-keyword-icon]").forEach((button) => button.addEventListener("click", () => {
    db.settings.keywordIcons.splice(Number(button.dataset.removeKeywordIcon), 1);
    renderSettingsEditor();
    applyGlobalSettings();
  }));
  $$("[data-keyword-icon-file]").forEach((input) => input.addEventListener("change", handleKeywordIconUpload));
  setupImageDropZones();
}

function handleKeywordIconUpload(event) {
  const input = event.target;
  const file = input.files?.[0];
  if (!file) return;
  readImageFile(file, (imageUrl) => {
    const item = db.settings.keywordIcons[Number(input.dataset.keywordIconIndex)];
    if (!item) return;
    item[input.dataset.keywordIconField] = imageUrl;
    const pairedInput = $(`[data-keyword-icon-index="${input.dataset.keywordIconIndex}"][data-keyword-icon-field="${input.dataset.keywordIconField}"]:not([type="file"])`);
    if (pairedInput) pairedInput.value = imageUrl;
    applyGlobalSettings();
  });
}

function handleSystemImageUpload(event) {
  const input = event.target;
  const file = input.files?.[0];
  if (!file) return;
  readImageFile(file, (imageUrl) => {
    const item = db[input.dataset.systemFile]?.[Number(input.dataset.systemIndex)];
    if (!item) return;
    item[input.dataset.systemField] = imageUrl;
    const pairedInput = $(`[data-system-array="${input.dataset.systemFile}"][data-system-index="${input.dataset.systemIndex}"][data-system-field="${input.dataset.systemField}"]`);
    if (pairedInput) pairedInput.value = imageUrl;
  });
}

function addSystemItem(type) {
  const defaults = {
    weapons: { id: "new-weapon", name: "New Weapon", rarity: "6★", type: "", owner: "", atk: "", crit: "", image: "", effect: "", sourceUrl: "" },
    cubs: { id: "new-cub", name: "New CUB", rarity: "S", role: "", element: "", image: "", effect: "", sourceUrl: "" },
    guides: { id: "new-guide", title: "New Guide", category: "", status: "Draft", summary: "", sourceUrl: "" },
    gameModes: { id: "new-mode", name: "New Mode", category: "", status: "Draft", summary: "", sourceUrl: "" },
    gamePatches: { id: "new-patch", name: "New Patch", number: "", date: "", status: "Draft", notes: "", characters: [] },
    enemies: { id: "new-enemy", name: "New Enemy", type: "", element: "", image: "", summary: "", sourceUrl: "" },
    roadmap: { id: "new-roadmap-item", title: "New Roadmap Item", type: "", status: "Draft", date: "TBD", notes: "", sourceUrl: "" }
  };
  db[type] = db[type] || [];
  db[type].push({ ...defaults[type], id: uniqueSystemId(type, defaults[type].id) });
  renderSystemEditors();
}

function uniqueSystemId(type, base) {
  const used = new Set((db[type] || []).map((item) => item.id));
  let id = base;
  let count = 2;
  while (used.has(id)) {
    id = `${base}-${count}`;
    count += 1;
  }
  return id;
}

function saveSystems() {
  if (uploadsPending()) return;
  db.settings.brandIcon = $("#brandIconSetting")?.value || db.settings.brandIcon || "GR";
  normalizeCollections();
  persistDatabase();
  refreshAll();
}

function addKeywordIcon() {
  db.settings.keywordIcons = db.settings.keywordIcons || [];
  db.settings.keywordIcons.push({ keyword: "new-keyword", label: "New Keyword", icon: "?", color: "#3fc6d5" });
  renderSettingsEditor();
}

function switchSettingsTab(tab = "icons") {
  $$("[data-settings-tab]").forEach((button) => button.classList.toggle("active", button.dataset.settingsTab === tab));
  $$("[data-settings-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.settingsPanel === tab));
}

function addDropdownOption() {
  const firstGroup = Object.keys(db.settings.dropdowns || defaultDropdowns())[0] || "roles";
  db.settings.dropdowns[firstGroup] = db.settings.dropdowns[firstGroup] || [];
  db.settings.dropdowns[firstGroup].push("New Option");
  renderDropdownOptionEditor();
}

function bindDropdownOptionInputs() {
  $$("[data-dropdown-field]").forEach((input) => {
    const update = () => {
      const oldGroup = input.dataset.dropdownGroup;
      const index = Number(input.dataset.dropdownIndex);
      if (input.dataset.dropdownField === "value") {
        db.settings.dropdowns[oldGroup][index] = input.value;
      } else if (input.dataset.dropdownField === "group") {
        const value = db.settings.dropdowns[oldGroup].splice(index, 1)[0];
        db.settings.dropdowns[input.value] = db.settings.dropdowns[input.value] || [];
        db.settings.dropdowns[input.value].push(value);
        renderDropdownOptionEditor();
      }
    };
    input.addEventListener("input", update);
    input.addEventListener("change", update);
  });
  $$("[data-remove-dropdown-option]").forEach((button) => button.addEventListener("click", () => {
    db.settings.dropdowns[button.dataset.removeDropdownOption].splice(Number(button.dataset.dropdownIndex), 1);
    renderDropdownOptionEditor();
  }));
}

function dropdownOptions(group, extra = "") {
  return uniqueOptions([...(db.settings?.dropdowns?.[group] || []), extra]);
}

function dropdownLabel(group) {
  return {
    roles: "Character Roles",
    classes: "Character Classes",
    ranks: "Character Ranks",
    memoryFamilies: "Memory Families",
    weaponRarities: "Weapon Rarities",
    cubRarities: "CUB Rarities"
  }[group] || group;
}

function fillMemoryForm(memory) {
  const form = $("#memoryForm");
  updateMemoryCategorySelects(memory);
  form.elements.memoryName.value = memory.name || "";
  form.elements.memoryId.value = memory.id || "";
  form.elements.memoryFamily.value = memory.family || "";
  form.elements.memoryRarity.value = displayText(memory.rarity || "");
  form.elements.memoryTab.value = displayText(memory.tab || "");
  form.elements.memorySourceUrl.value = memory.sourceUrl || "";
  form.elements.memoryHp.value = memory.stats?.hp || "";
  form.elements.memoryAtk.value = memory.stats?.atk || "";
  form.elements.memoryDef.value = memory.stats?.def || "";
  form.elements.memoryCrit.value = memory.stats?.crit || "";
  const icons = memory.slotIcons || [];
  const portraits = memory.portraits || [];
  [0, 1, 2].forEach((index) => {
    form.elements[`memoryIcon${index + 1}`].value = icons[index] || "";
    form.elements[`memoryPortrait${index + 1}`].value = portraits[index] || "";
  });
}

function renderMemoryEffectEditor() {
  $("#memoryEffectEditor").innerHTML = (state.memoryDraft.effects || []).map((effect, index) => `
    <article class="stack-row compact-row">
      <label>Label<input data-memory-effect-index="${index}" data-memory-effect-field="label" value="${escapeAttribute(displayText(effect.label))}" /></label>
      <label>Effect text<textarea data-memory-effect-index="${index}" data-memory-effect-field="description" rows="3">${escapeHtml(displayText(effect.description))}</textarea></label>
      <button class="icon-button danger" data-remove-memory-effect="${index}" type="button" title="Remove effect" aria-label="Remove effect">x</button>
    </article>
  `).join("") || `<p class="muted">No set effects added yet.</p>`;
  $$("[data-memory-effect-field]").forEach((input) => {
    const update = () => {
      state.memoryDraft.effects[Number(input.dataset.memoryEffectIndex)][input.dataset.memoryEffectField] = input.value;
    };
    input.addEventListener("input", update);
    input.addEventListener("change", update);
  });
  $$("[data-remove-memory-effect]").forEach((button) => button.addEventListener("click", () => {
    state.memoryDraft.effects.splice(Number(button.dataset.removeMemoryEffect), 1);
    renderMemoryEffectEditor();
  }));
}

function startNewMemory() {
  state.memoryDraft = blankMemory();
  state.managerMemory = state.memoryDraft.id;
  fillMemoryForm(state.memoryDraft);
  renderMemoryEffectEditor();
  renderManagerMemoryList();
}

function addMemoryEffect() {
  if (!state.memoryDraft) state.memoryDraft = blankMemory();
  state.memoryDraft.effects = state.memoryDraft.effects || [];
  state.memoryDraft.effects.push({ label: "2-Piece Set", description: "" });
  renderMemoryEffectEditor();
}

function saveMemoryFromForm() {
  if (uploadsPending()) return;
  const form = $("#memoryForm");
  const formData = new FormData(form);
  const originalId = state.managerMemory;
  const id = slugify(formData.get("memoryId") || formData.get("memoryName"));
  if (!id) return;
  const memory = {
    ...state.memoryDraft,
    id,
    name: formData.get("memoryName").trim(),
    family: formData.get("memoryFamily").trim(),
    families: [formData.get("memoryFamily").trim()].filter(Boolean),
    rarity: formData.get("memoryRarity").trim(),
    tab: formData.get("memoryTab").trim(),
    tabs: [formData.get("memoryTab").trim()].filter(Boolean),
    sourceUrl: formData.get("memorySourceUrl").trim(),
    stats: {
      hp: formData.get("memoryHp").trim(),
      atk: formData.get("memoryAtk").trim(),
      def: formData.get("memoryDef").trim(),
      crit: formData.get("memoryCrit").trim()
    },
    slotIcons: [formData.get("memoryIcon1").trim(), formData.get("memoryIcon2").trim(), formData.get("memoryIcon3").trim()],
    portraits: [formData.get("memoryPortrait1").trim(), formData.get("memoryPortrait2").trim(), formData.get("memoryPortrait3").trim()],
    image: formData.get("memoryPortrait1").trim() || formData.get("memoryIcon1").trim(),
    portrait: formData.get("memoryIcon1").trim() || formData.get("memoryPortrait1").trim(),
    effects: (state.memoryDraft.effects || []).filter((effect) => effect.label || effect.description)
  };
  const existing = (db.memories || []).findIndex((item) => item.id === originalId);
  const conflict = (db.memories || []).some((item, index) => item.id === id && index !== existing);
  if (conflict) {
    alert("That memory ID is already in use.");
    return;
  }
  if (existing >= 0) {
    db.memories[existing] = memory;
    updateMemoryReferences(originalId, id);
  } else {
    db.memories = db.memories || [];
    db.memories.push(memory);
  }
  state.managerMemory = id;
  state.selectedMemory = id;
  persistDatabase();
  renderMemories();
  renderStats();
  renderManagerMemoryList();
  fillMemoryForm(memory);
  renderMemoryEffectEditor();
  renderBuildEditor();
}

function updateMemoryReferences(oldId, newId) {
  if (oldId === newId) return;
  db.characters.forEach((character) => {
    (character.builds || []).forEach((build) => {
      build.memorySlots = buildMemorySlots(build).map((id) => id === oldId ? newId : id);
    });
  });
}

function handleMemoryFileUpload(event) {
  const input = event.target;
  const file = input.files?.[0];
  if (!file || !state.memoryDraft) return;
  readImageFile(file, (imageUrl) => {
    const field = input.dataset.memoryFile;
    const index = Number(input.dataset.fileIndex);
    state.memoryDraft[field] = state.memoryDraft[field] || ["", "", ""];
    state.memoryDraft[field][index] = imageUrl;
    const formField = field === "slotIcons" ? `memoryIcon${index + 1}` : `memoryPortrait${index + 1}`;
    $("#memoryForm").elements[formField].value = imageUrl;
  });
}

function handleFormImageUpload(event) {
  const input = event.target;
  const file = input.files?.[0];
  if (!file || !state.draft) return;
  readImageFile(file, (imageUrl) => {
    const field = input.dataset.formImage;
    const form = $("#characterForm");
    form.elements[field].value = imageUrl;
    state.draft[field] = imageUrl;
  });
}

function handleStackImageUpload(event) {
  const input = event.target;
  const file = input.files?.[0];
  if (!file || !state.draft) return;
  readImageFile(file, (imageUrl) => {
    const collection = input.dataset.stackFile;
    const index = Number(input.dataset.index);
    const field = input.dataset.field;
    const item = state.draft[collection]?.[index];
    if (!item) return;
    item[field] = imageUrl;
    const pairedInput = $(`[data-array="${collection}"][data-index="${index}"][data-field="${field}"]`);
    if (pairedInput) pairedInput.value = imageUrl;
  });
}

function setupImageDropZones(root = document) {
  root.querySelectorAll("[data-form-image], [data-memory-file], [data-stack-file], [data-system-file], [data-keyword-icon-file]").forEach((input) => {
    if (input.dataset.dropEnhanced === "true") return;
    input.dataset.dropEnhanced = "true";
    input.classList.add("drop-file-input");

    const zone = document.createElement("div");
    zone.className = "file-drop-zone";
    zone.innerHTML = `<span class="drop-zone-hint">Drop image here or choose a file</span>`;
    input.replaceWith(zone);
    zone.prepend(input);

    ["dragenter", "dragover"].forEach((eventName) => {
      zone.addEventListener(eventName, (event) => {
        event.preventDefault();
        if (event.dataTransfer) event.dataTransfer.dropEffect = "copy";
        zone.classList.add("drag-over");
      });
    });

    ["dragleave", "dragend"].forEach((eventName) => {
      zone.addEventListener(eventName, () => zone.classList.remove("drag-over"));
    });

    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("drag-over");
      const file = Array.from(event.dataTransfer?.files || []).find((item) => item.type.startsWith("image/"));
      if (!file) {
        alert("Please drop an image file.");
        return;
      }
      processDroppedImage(input, file);
    });
  });
}

function processDroppedImage(input, file) {
  readImageFile(file, (imageUrl) => {
    if (input.dataset.formImage) {
      const field = input.dataset.formImage;
      const form = $("#characterForm");
      form.elements[field].value = imageUrl;
      if (state.draft) state.draft[field] = imageUrl;
      return;
    }

    if (input.dataset.memoryFile) {
      const field = input.dataset.memoryFile;
      const index = Number(input.dataset.fileIndex);
      state.memoryDraft[field] = state.memoryDraft[field] || ["", "", ""];
      state.memoryDraft[field][index] = imageUrl;
      const formField = field === "slotIcons" ? `memoryIcon${index + 1}` : `memoryPortrait${index + 1}`;
      $("#memoryForm").elements[formField].value = imageUrl;
      return;
    }

    if (input.dataset.stackFile) {
      const collection = input.dataset.stackFile;
      const index = Number(input.dataset.index);
      const field = input.dataset.field;
      const item = state.draft?.[collection]?.[index];
      if (!item) return;
      item[field] = imageUrl;
      const pairedInput = $(`[data-array="${collection}"][data-index="${index}"][data-field="${field}"]`);
      if (pairedInput) pairedInput.value = imageUrl;
      return;
    }

    if (input.dataset.systemFile) {
      const item = db[input.dataset.systemFile]?.[Number(input.dataset.systemIndex)];
      if (!item) return;
      item[input.dataset.systemField] = imageUrl;
      const pairedInput = $(`[data-system-array="${input.dataset.systemFile}"][data-system-index="${input.dataset.systemIndex}"][data-system-field="${input.dataset.systemField}"]`);
      if (pairedInput) pairedInput.value = imageUrl;
      return;
    }

    if (input.dataset.keywordIconFile !== undefined) {
      const item = db.settings.keywordIcons[Number(input.dataset.keywordIconIndex)];
      if (!item) return;
      item[input.dataset.keywordIconField] = imageUrl;
      const pairedInput = $(`[data-keyword-icon-index="${input.dataset.keywordIconIndex}"][data-keyword-icon-field="${input.dataset.keywordIconField}"]:not([type="file"])`);
      if (pairedInput) pairedInput.value = imageUrl;
      applyGlobalSettings();
    }
  });
}

function readImageFile(file, callback) {
  if (!file.type.startsWith("image/")) {
    alert("Please choose an image file.");
    return;
  }
  const reader = new FileReader();
  beginImageUpload();
  reader.onload = () => {
    uploadImageFile(file, reader.result)
      .then(callback)
      .catch((error) => {
        console.warn("Image upload server unavailable, using embedded image data.", error);
        callback(reader.result);
      })
      .finally(endImageUpload);
  };
  reader.onerror = () => {
    endImageUpload();
    alert("The selected image could not be read.");
  };
  reader.readAsDataURL(file);
}

function beginImageUpload() {
  state.pendingUploads += 1;
  setUploadBusyState();
}

function endImageUpload() {
  state.pendingUploads = Math.max(0, state.pendingUploads - 1);
  setUploadBusyState();
}

function setUploadBusyState() {
  const busy = state.pendingUploads > 0;
  ["#saveCharacter", "#saveMemory", "#saveSystems"].forEach((selector) => {
    const button = $(selector);
    if (!button) return;
    if (!button.dataset.readyHtml) button.dataset.readyHtml = button.innerHTML;
    button.disabled = busy;
    button.innerHTML = busy ? `<span>...</span>Uploading image...` : button.dataset.readyHtml;
  });
}

function uploadsPending() {
  if (!state.pendingUploads) return false;
  alert("Image upload is still finishing. Please wait a moment, then save again.");
  return true;
}

async function uploadImageFile(file, dataUrl) {
  if (!location.protocol.startsWith("http")) return dataUrl;

  const response = await fetch("/api/uploads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: file.name,
      type: file.type,
      dataUrl
    })
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: "Upload failed" }));
    throw new Error(error.error || "Upload failed");
  }

  const result = await response.json();
  return result.url || dataUrl;
}

function blankMemory() {
  return {
    id: "new-memory",
    name: "New Memory",
    family: "Omniframe",
    families: ["Omniframe"],
    rarity: "6★",
    tab: "6★ Memories",
    tabs: ["6★ Memories"],
    stats: { hp: "", atk: "", def: "", crit: "" },
    slotIcons: ["", "", ""],
    portraits: ["", "", ""],
    effects: [{ label: "2-Piece Set", description: "" }],
    recommendedUsers: [],
    sourceUrl: ""
  };
}

function fillBaseFields(character) {
  refreshCharacterDropdowns(character);
  const form = $("#characterForm");
  form.elements.name.value = character.name || "";
  form.elements.id.value = character.id || "";
  form.elements.image.value = character.image || "";
  form.elements.sigil.value = character.sigil || "";
  form.elements.role.value = character.role || "";
  form.elements.frame.value = character.frame || "";
  form.elements.faction.value = character.faction || "";
  form.elements.class.value = character.class || "DPS";
  form.elements.element.value = character.element || "physical";
  form.elements.rank.value = character.rank || "";
  form.elements.gift.value = character.gift || "";
  form.elements.releasePatch.value = character.releasePatch || "";
  form.elements.releasePatchNumber.value = character.releasePatchNumber || "";
  form.elements.weapon.value = character.weapon || "";
  form.elements.weaponType.value = character.weaponType || "";
  form.elements.cubName.value = character.cub?.name || "";
  form.elements.cubNotes.value = character.cub?.notes || "";
  form.elements.memory.value = character.memory || "";
  form.elements.bio.value = character.bio || "";
  form.elements.effect.value = character.effect || "";
  form.elements.notes.value = character.notes || "";
  const review = character.review || defaultReview(character);
  form.elements.reviewSummaryTitle.value = review.summaryTitle || "";
  form.elements.reviewDifficulty.value = review.difficulty || "";
  form.elements.reviewGeneral.value = review.ratings?.general || "";
  form.elements.reviewWarzone.value = review.ratings?.warzone || "";
  form.elements.reviewPaincage.value = review.ratings?.paincage || "";
  form.elements.reviewLastUpdated.value = review.lastUpdated || "";
  form.elements.reviewSummary.value = review.summary || "";
  form.elements.reviewPros.value = (review.pros || []).join("\n");
  form.elements.reviewCons.value = (review.cons || []).join("\n");
  form.elements.reviewChangeLog.value = review.changeLog || "";
}

function refreshCharacterDropdowns(character = state.draft || {}) {
  setSelectOptions($("#managerRoleSelect"), dropdownOptions("roles", character.role), character.role || dropdownOptions("roles")[0] || "");
  setSelectOptions($("#characterForm [name=\"class\"]"), dropdownOptions("classes", character.class), character.class || "DPS");
}

function renderStackEditors() {
  renderElementMixEditor();
  renderSpecialtyEditor();
  renderEffectEntryEditor();
  renderAbilityEditor();
  renderBuildEditor();
  renderCalculationEditor();
  renderCoatingEditor();
  renderFactEditor();
  renderManagedRotationEditor();
}

function renderElementMixEditor() {
  $("#elementMixEditor").innerHTML = state.draft.elements.map((entry, index) => `
    <article class="stack-row compact-row">
      <label>Element
        <select data-array="elements" data-index="${index}" data-field="name">
          ${db.elements.filter((element) => element.id !== "all").map((element) => `<option value="${element.id}" ${entry.name === element.id ? "selected" : ""}>${element.label}</option>`).join("")}
        </select>
      </label>
      <label>Damage %<input data-array="elements" data-index="${index}" data-field="percent" value="${escapeAttribute(entry.percent)}" /></label>
      <button class="icon-button danger" data-remove-array="elements" data-remove-index="${index}" type="button" title="Remove element" aria-label="Remove element">x</button>
    </article>
  `).join("");
  bindStackInputs();
}

function renderSpecialtyEditor() {
  $("#specialtyEditor").innerHTML = state.draft.specialties.map((specialty, index) => `
    <article class="stack-row">
      <label>Specialty<input data-array="specialties" data-index="${index}" data-field="name" value="${escapeAttribute(specialty.name)}" /></label>
      <label>Description<textarea data-array="specialties" data-index="${index}" data-field="description" rows="2">${escapeHtml(specialty.description)}</textarea></label>
      <button class="icon-button danger" data-remove-array="specialties" data-remove-index="${index}" type="button" title="Remove specialty" aria-label="Remove specialty">x</button>
    </article>
  `).join("");
  bindStackInputs();
}

function renderEffectEntryEditor() {
  $("#effectEntryEditor").innerHTML = (state.draft.effects || []).map((effect, index) => `
    <article class="stack-row">
      <label>Effect name<input data-array="effects" data-index="${index}" data-field="name" value="${escapeAttribute(effect.name || "")}" /></label>
      <label>Description<textarea data-array="effects" data-index="${index}" data-field="description" rows="3">${escapeHtml(effect.description || "")}</textarea></label>
      <button class="icon-button danger" data-remove-array="effects" data-remove-index="${index}" type="button" title="Remove effect" aria-label="Remove effect">x</button>
    </article>
  `).join("") || `<p class="muted">No effect entries added yet.</p>`;
  bindStackInputs();
}

function renderAbilityEditor() {
  $("#abilityEditor").innerHTML = state.draft.abilities.map((ability, index) => `
    <article class="stack-row">
      <label>Ability name<input data-array="abilities" data-index="${index}" data-field="name" value="${escapeAttribute(ability.name)}" /></label>
      <label>Icon URL
        <input data-array="abilities" data-index="${index}" data-field="icon" value="${escapeAttribute(ability.icon)}" placeholder="https://... or imported local file" />
        <input class="image-import-control" data-stack-file="abilities" data-index="${index}" data-field="icon" type="file" accept="image/*" />
      </label>
      <label>Description<textarea data-array="abilities" data-index="${index}" data-field="description" rows="3">${escapeHtml(ability.description)}</textarea></label>
      <button class="icon-button danger" data-remove-array="abilities" data-remove-index="${index}" type="button" title="Remove ability" aria-label="Remove ability">x</button>
    </article>
  `).join("");
  bindStackInputs();
}

function renderBuildEditor() {
  const memoryOptions = memorySelectOptions();
  $("#buildEditor").innerHTML = state.draft.builds.map((build, index) => `
    <article class="stack-row">
      <label>Build name<input data-array="builds" data-index="${index}" data-field="name" value="${escapeAttribute(build.name)}" /></label>
      <label>Use case<input data-array="builds" data-index="${index}" data-field="category" value="${escapeAttribute(build.category || "")}" placeholder="General, War Zone, Pain Cage..." /></label>
      <label>Weapon
        <select data-array="builds" data-index="${index}" data-field="weapon">
          ${entitySelectOptions(db.weapons || [], build.weapon, "No weapon selected")}
        </select>
      </label>
      <label>CUB
        <select data-array="builds" data-index="${index}" data-field="cub">
          ${entitySelectOptions(db.cubs || [], build.cub, "No CUB selected")}
        </select>
      </label>
      <label>Alternate CUBs<input data-array="builds" data-index="${index}" data-field="alternateCubs" value="${escapeAttribute(build.alternateCubs || "")}" /></label>
      <div class="build-memory-editor">
        <strong>Memory Slots</strong>
        <div class="build-memory-select-grid">
          ${buildMemorySlots(build).map((memoryId, slotIndex) => `
            <label>Slot ${slotIndex + 1}
              <select data-build-index="${index}" data-memory-slot="${slotIndex}">
                ${memoryOptions.map((option) => `<option value="${escapeAttribute(option.value)}" ${memoryId === option.value ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
              </select>
            </label>
          `).join("")}
        </div>
        ${renderBuildMemoryGrid(build, build.memories)}
      </div>
      <label>Weapon resonance<textarea data-array="builds" data-index="${index}" data-field="weaponResonance" rows="2">${escapeHtml(build.weaponResonance || "")}</textarea></label>
      <label>Memory resonance<textarea data-array="builds" data-index="${index}" data-field="memoryResonance" rows="2">${escapeHtml(build.memoryResonance || "")}</textarea></label>
      <label>Notes<textarea data-array="builds" data-index="${index}" data-field="notes" rows="2">${escapeHtml(build.notes)}</textarea></label>
      <button class="icon-button danger" data-remove-array="builds" data-remove-index="${index}" type="button" title="Remove build" aria-label="Remove build">x</button>
    </article>
  `).join("");
  bindStackInputs();
}

function renderCalculationEditor() {
  $("#calculationEditor").innerHTML = (state.draft.calculations || []).map((calc, index) => `
    <article class="stack-row">
      <label>Name<input data-array="calculations" data-index="${index}" data-field="name" value="${escapeAttribute(calc.name || "")}" /></label>
      <label>Category<input data-array="calculations" data-index="${index}" data-field="category" value="${escapeAttribute(calc.category || "")}" /></label>
      <label>Formula<textarea data-array="calculations" data-index="${index}" data-field="formula" rows="3">${escapeHtml(calc.formula || "")}</textarea></label>
      <label>Notes<textarea data-array="calculations" data-index="${index}" data-field="notes" rows="3">${escapeHtml(calc.notes || "")}</textarea></label>
      <button class="icon-button danger" data-remove-array="calculations" data-remove-index="${index}" type="button" title="Remove calculation" aria-label="Remove calculation">x</button>
    </article>
  `).join("") || `<p class="muted">No calculations added yet.</p>`;
  bindStackInputs();
}

function renderCoatingEditor() {
  $("#coatingEditor").innerHTML = (state.draft.coatings || []).map((coating, index) => `
    <article class="stack-row">
      <label>Coating name<input data-array="coatings" data-index="${index}" data-field="name" value="${escapeAttribute(coating.name)}" /></label>
      <label>Image URL
        <input data-array="coatings" data-index="${index}" data-field="image" value="${escapeAttribute(coating.image)}" placeholder="https://... or imported local file" />
        <input class="image-import-control" data-stack-file="coatings" data-index="${index}" data-field="image" type="file" accept="image/*" />
      </label>
      <label>Rarity / type<input data-array="coatings" data-index="${index}" data-field="rarity" value="${escapeAttribute(coating.rarity)}" /></label>
      <label>Description<textarea data-array="coatings" data-index="${index}" data-field="description" rows="3">${escapeHtml(coating.description)}</textarea></label>
      <button class="icon-button danger" data-remove-array="coatings" data-remove-index="${index}" type="button" title="Remove coating" aria-label="Remove coating">x</button>
    </article>
  `).join("") || `<p class="muted">No coatings added yet.</p>`;
  bindStackInputs();
}

function memorySelectOptions() {
  return [
    { value: "", label: "No memory selected" },
    ...(db.memories || []).map((memory) => ({
      value: memory.id,
      label: `${displayText(memory.name)} - ${displayText(memory.rarity || "")} ${displayText(memory.family || "")}`.trim()
    }))
  ];
}

function entitySelectOptions(items, currentValue = "", emptyLabel = "None") {
  const values = new Set(items.flatMap((item) => [item.id, item.name]).filter(Boolean));
  const extra = currentValue && !values.has(currentValue) ? [{ id: currentValue, name: currentValue }] : [];
  return [
    `<option value="">${escapeHtml(emptyLabel)}</option>`,
    ...[...items, ...extra].map((item) => {
      const selected = currentValue === item.id || currentValue === item.name ? "selected" : "";
      return `<option value="${escapeAttribute(item.id || item.name)}" ${selected}>${escapeHtml(item.name || item.id)}</option>`;
    })
  ].join("");
}

function renderFactEditor() {
  $("#factEditor").innerHTML = state.draft.facts.map((fact, index) => `
    <article class="stack-row compact-row">
      <label>Label<input data-array="facts" data-index="${index}" data-field="label" value="${escapeAttribute(fact.label)}" /></label>
      <label>Value<input data-array="facts" data-index="${index}" data-field="value" value="${escapeAttribute(fact.value)}" /></label>
      <button class="icon-button danger" data-remove-array="facts" data-remove-index="${index}" type="button" title="Remove fact" aria-label="Remove fact">x</button>
    </article>
  `).join("");
  bindStackInputs();
}

function renderManagedRotationEditor() {
  $("#managedRotationEditor").innerHTML = state.draft.commonRotations.map((rotation, index) => `
    <article class="stack-row">
      <label>Rotation name<input data-array="commonRotations" data-index="${index}" data-field="name" value="${escapeAttribute(rotation.name)}" /></label>
      <label>Sequence<textarea data-array="commonRotations" data-index="${index}" data-field="steps" rows="3">${escapeHtml(rotation.steps)}</textarea></label>
      <label>Notes<textarea data-array="commonRotations" data-index="${index}" data-field="notes" rows="2">${escapeHtml(rotation.notes)}</textarea></label>
      <button class="icon-button danger" data-remove-array="commonRotations" data-remove-index="${index}" type="button" title="Remove rotation" aria-label="Remove rotation">x</button>
    </article>
  `).join("");
  bindStackInputs();
}

function bindStackInputs() {
  $$("[data-array]").forEach((input) => {
    const updateDraft = () => {
    const item = state.draft[input.dataset.array][Number(input.dataset.index)];
    item[input.dataset.field] = input.value;
    };
    input.addEventListener("input", updateDraft);
    input.addEventListener("change", updateDraft);
  });
  $$("[data-remove-array]").forEach((button) => button.addEventListener("click", () => {
    state.draft[button.dataset.removeArray].splice(Number(button.dataset.removeIndex), 1);
    renderStackEditors();
  }));
  $$("[data-memory-slot]").forEach((select) => select.addEventListener("change", () => {
    const build = state.draft.builds[Number(select.dataset.buildIndex)];
    build.memorySlots = buildMemorySlots(build);
    build.memorySlots[Number(select.dataset.memorySlot)] = select.value;
    renderBuildEditor();
  }));
  $$("[data-stack-file]").forEach((input) => input.addEventListener("change", handleStackImageUpload));
  setupImageDropZones();
}

function addStackItem(type) {
  if (!state.draft) state.draft = blankCharacter();
  const defaults = {
    elements: { name: "physical", percent: "100" },
    specialties: { name: "New specialty", description: "" },
    effects: { name: "New effect", description: "" },
    abilities: { name: "New ability", description: "", icon: "" },
    builds: { name: "New build", category: "", weapon: "", cub: "", alternateCubs: "", memories: "", memorySlots: ["", "", "", "", "", ""], priority: "", weaponResonance: "", memoryResonance: "", notes: "" },
    calculations: { name: "New calculation", category: "", formula: "", notes: "" },
    coatings: { name: "New coating", image: "", rarity: "", description: "" },
    facts: { label: "New fact", value: "" },
    commonRotations: { name: "New rotation", steps: "Swap in -> 3-ping -> QTE -> Core -> Ultimate", notes: "" }
  };
  state.draft[type].push(defaults[type]);
  renderStackEditors();
}

function saveCharacterFromForm() {
  if (uploadsPending()) return;
  const form = $("#characterForm");
  const formData = new FormData(form);
  const originalId = state.managerCharacter;
  const id = slugify(formData.get("id") || formData.get("name"));
  if (!id) return;
  const character = {
    ...state.draft,
    id,
    name: formData.get("name").trim(),
    image: formData.get("image").trim(),
    sigil: (formData.get("sigil").trim() || initials(formData.get("name"))).slice(0, 4).toUpperCase(),
    role: formData.get("role").trim(),
    frame: formData.get("frame").trim(),
    faction: formData.get("faction").trim(),
    class: formData.get("class"),
    element: formData.get("element"),
    rank: formData.get("rank").trim(),
    gift: formData.get("gift").trim(),
    releasePatch: formData.get("releasePatch"),
    releasePatchNumber: formData.get("releasePatchNumber").trim(),
    weapon: formData.get("weapon").trim(),
    weaponType: formData.get("weaponType").trim(),
    cub: {
      name: formData.get("cubName").trim(),
      notes: formData.get("cubNotes").trim()
    },
    memory: formData.get("memory").trim(),
    bio: formData.get("bio").trim(),
    effect: formData.get("effect").trim(),
    priority: state.draft.priority || "",
    notes: formData.get("notes").trim(),
    review: {
      summaryTitle: formData.get("reviewSummaryTitle").trim(),
      summary: formData.get("reviewSummary").trim(),
      ratings: {
        general: formData.get("reviewGeneral").trim(),
        warzone: formData.get("reviewWarzone").trim(),
        paincage: formData.get("reviewPaincage").trim()
      },
      difficulty: formData.get("reviewDifficulty").trim(),
      pros: linesFromText(formData.get("reviewPros")),
      cons: linesFromText(formData.get("reviewCons")),
      lastUpdated: formData.get("reviewLastUpdated").trim(),
      changeLog: formData.get("reviewChangeLog").trim()
    },
    elements: state.draft.elements.filter((entry) => entry.name || entry.percent),
    specialties: state.draft.specialties.filter((specialty) => specialty.name || specialty.description),
    effects: (state.draft.effects || []).filter((effect) => effect.name || effect.description),
    abilities: state.draft.abilities.filter((ability) => ability.name || ability.description || ability.icon),
    builds: state.draft.builds.filter((build) => build.name || build.weapon || build.cub || build.memories || buildMemorySlots(build).some(Boolean) || build.notes || build.weaponResonance || build.memoryResonance),
    calculations: (state.draft.calculations || []).filter((calc) => calc.name || calc.category || calc.formula || calc.notes),
    coatings: (state.draft.coatings || []).filter((coating) => coating.name || coating.image || coating.rarity || coating.description),
    facts: state.draft.facts.filter((fact) => fact.label || fact.value),
    commonRotations: state.draft.commonRotations.filter((rotation) => rotation.name || rotation.steps || rotation.notes)
  };
  const existing = db.characters.findIndex((item) => item.id === originalId);
  const idConflict = db.characters.some((item, index) => item.id === id && index !== existing);
  if (idConflict) {
    alert("That unique ID is already in use.");
    return;
  }
  if (existing >= 0) {
    db.characters[existing] = character;
    updateReferences(originalId, id);
  } else {
    db.characters.push(character);
    addCharacterToTier(id);
  }
  state.managerCharacter = id;
  state.selectedCharacter = id;
  normalizeCharacters();
  persistDatabase();
  refreshAll();
  loadCharacterIntoForm(id);
}

function updateReferences(oldId, newId) {
  if (oldId === newId) return;
  Object.values(db.tiers).forEach((tierSet) => {
    Object.keys(tierSet).forEach((rank) => {
      tierSet[rank] = tierSet[rank].map((id) => id === oldId ? newId : id);
    });
  });
  db.teams.forEach((team) => {
    team.members = team.members.map((id) => id === oldId ? newId : id);
  });
  db.rotations.forEach((rotation) => {
    rotation.team = rotation.team.map((id) => id === oldId ? newId : id);
  });
  (db.weapons || []).forEach((weapon) => {
    if (weapon.owner === oldId) weapon.owner = newId;
  });
}

function addCharacterToTier(id) {
  Object.values(db.tiers).forEach((tierSet) => {
    tierSet.A = tierSet.A || [];
    if (!tierSet.A.includes(id)) tierSet.A.push(id);
  });
}

function startNewCharacter() {
  state.draft = blankCharacter();
  state.managerCharacter = state.draft.id;
  fillBaseFields(state.draft);
  renderStackEditors();
  renderManagerList();
}

function duplicateCharacter() {
  const source = characterById(state.managerCharacter) || db.characters[0];
  state.draft = JSON.parse(JSON.stringify(source));
  state.draft.name = `${source.name} Copy`;
  state.draft.id = slugify(state.draft.name);
  state.draft.sigil = initials(state.draft.name);
  state.managerCharacter = state.draft.id;
  fillBaseFields(state.draft);
  renderStackEditors();
  renderManagerList();
}

function blankCharacter() {
  return {
    id: "new-construct",
    name: "New Construct",
    image: "",
    sigil: "NC",
    role: "Attacker",
    frame: "",
    faction: "",
    class: "DPS",
    element: "physical",
    rank: "A",
    gift: "",
    releasePatch: "",
    releasePatchNumber: "",
    weapon: "",
    weaponType: "",
    cub: { name: "", notes: "" },
    memory: "",
    bio: "",
    effect: "",
    priority: "",
    notes: "",
    review: { summaryTitle: "Guide Verdict", summary: "", ratings: { general: "", warzone: "", paincage: "" }, difficulty: "", pros: [], cons: [], lastUpdated: "", changeLog: "" },
    elements: [{ name: "physical", percent: "100" }],
    specialties: [{ name: "New specialty", description: "" }],
    effects: [],
    abilities: [{ name: "Core Passive", description: "", icon: "" }],
    builds: [{ name: "Recommended", category: "", weapon: "", cub: "", alternateCubs: "", memories: "", memorySlots: ["", "", "", "", "", ""], priority: "", weaponResonance: "", memoryResonance: "", notes: "" }],
    calculations: [{ name: "Core damage note", category: "", formula: "", notes: "" }],
    coatings: [],
    facts: [{ label: "Frame", value: "" }],
    commonRotations: [{ name: "Standard opener", steps: "Swap in -> 3-ping -> QTE -> Core -> Ultimate", notes: "" }]
  };
}

function exportDatabase() {
  $("#exportBox").value = JSON.stringify({
    characters: db.characters,
    memories: db.memories,
    tiers: db.tiers,
    teams: db.teams,
    rotations: db.rotations,
    weapons: db.weapons,
    cubs: db.cubs,
    guides: db.guides,
    gameModes: db.gameModes,
    gamePatches: db.gamePatches,
    enemies: db.enemies,
    roadmap: db.roadmap,
    settings: db.settings
  }, null, 2);
  navigate("rotations");
  $("#exportBox").select();
}

function importDatabase(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (!Array.isArray(parsed.characters)) throw new Error("Missing characters array.");
      db.characters = parsed.characters;
      if (parsed.tiers) db.tiers = parsed.tiers;
      if (Array.isArray(parsed.teams)) db.teams = parsed.teams;
      if (Array.isArray(parsed.rotations)) db.rotations = parsed.rotations;
      if (Array.isArray(parsed.memories)) db.memories = parsed.memories;
      if (Array.isArray(parsed.weapons)) db.weapons = parsed.weapons;
      if (Array.isArray(parsed.cubs)) db.cubs = parsed.cubs;
      if (Array.isArray(parsed.guides)) db.guides = parsed.guides;
      if (Array.isArray(parsed.gameModes)) db.gameModes = parsed.gameModes;
      if (Array.isArray(parsed.gamePatches)) db.gamePatches = parsed.gamePatches;
      if (Array.isArray(parsed.enemies)) db.enemies = parsed.enemies;
      if (Array.isArray(parsed.roadmap)) db.roadmap = parsed.roadmap;
      if (parsed.settings) db.settings = parsed.settings;
      normalizeCollections();
      normalizeCharacters();
      state.managerCharacter = db.characters[0]?.id || "new-construct";
      state.selectedCharacter = state.managerCharacter;
      persistDatabase();
      refreshAll();
      loadCharacterIntoForm(state.managerCharacter);
    } catch (error) {
      alert(`Import failed: ${error.message}`);
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

function resetDatabase() {
  if (!confirm("Reset all locally saved edits and return to the seed guide set?")) return;
  localStorage.removeItem(STORAGE_KEY);
  db.characters = JSON.parse(JSON.stringify(seedDatabase.characters));
  db.memories = JSON.parse(JSON.stringify(seedDatabase.memories || []));
  db.tiers = JSON.parse(JSON.stringify(seedDatabase.tiers));
  db.teams = JSON.parse(JSON.stringify(seedDatabase.teams));
  db.rotations = JSON.parse(JSON.stringify(seedDatabase.rotations));
  db.weapons = JSON.parse(JSON.stringify(seedDatabase.weapons || []));
  db.cubs = JSON.parse(JSON.stringify(seedDatabase.cubs || []));
  db.guides = JSON.parse(JSON.stringify(seedDatabase.guides || []));
  db.gameModes = JSON.parse(JSON.stringify(seedDatabase.gameModes || []));
  db.gamePatches = JSON.parse(JSON.stringify(seedDatabase.gamePatches || []));
  db.enemies = JSON.parse(JSON.stringify(seedDatabase.enemies || []));
  db.roadmap = JSON.parse(JSON.stringify(seedDatabase.roadmap || []));
  db.settings = JSON.parse(JSON.stringify(seedDatabase.settings || { brandIcon: "GR", keywordIcons: [] }));
  normalizeCollections();
  normalizeCharacters();
  state.managerCharacter = db.characters[0].id;
  state.selectedCharacter = db.characters[0].id;
  refreshAll();
  loadCharacterIntoForm(state.managerCharacter);
}

function refreshAll() {
  if ($("#releasePatchSelect")) $("#releasePatchSelect").innerHTML = patchSelectOptions();
  renderStats();
  renderCharacters();
  renderTiers();
  renderTeams();
  renderMemories();
  renderWeapons();
  renderCubs();
  renderGuides();
  renderPatches();
  renderRoadmap();
  renderRotationSelect();
  renderRotation();
  renderManagerList();
  renderManagerMemoryList();
  renderSystemEditors();
  applyGlobalSettings();
  if (state.route === "construct") renderConstructPage();
}

function elementSummary(character) {
  const entries = character.elements && character.elements.length ? character.elements : [{ name: character.element, percent: "100" }];
  return entries.map((entry) => {
    const element = elementById(entry.name);
    return entry.percent ? `${element.label} ${entry.percent}%` : element.label;
  }).join(" / ");
}

function majorityElement(character) {
  const entries = character.elements && character.elements.length ? character.elements : [{ name: character.element, percent: "100" }];
  return entries.reduce((best, entry) => {
    const value = Number.parseFloat(entry.percent) || 0;
    return value > best.value ? { name: entry.name, value } : best;
  }, { name: character.element || "physical", value: -1 }).name;
}

function patchSelectOptions() {
  return [
    `<option value="">No release patch set</option>`,
    ...(db.gamePatches || [])
      .slice()
      .sort((a, b) => patchNumber(a) - patchNumber(b))
      .map((patch) => `<option value="${escapeAttribute(patch.id)}">${escapeHtml(displayText(patch.name))}</option>`)
  ].join("");
}

function releasePatchName(value) {
  const patch = (db.gamePatches || []).find((item) => item.id === value || item.name === value);
  return patch?.name || value || "";
}

function renderElementMix(character) {
  const entries = character.elements && character.elements.length ? character.elements : [{ name: character.element, percent: "100" }];
  return entries.map((entry) => {
    const element = elementById(entry.name);
    const percent = Number.parseFloat(entry.percent) || 0;
    return `
      <span class="element-bar" style="--accent:${element.color}; --value:${Math.max(0, Math.min(100, percent))}%">
        <strong>${element.label}</strong>
        <span>${entry.percent || "?"}%</span>
      </span>
    `;
  }).join("");
}

function displayText(value = "") {
  return String(value)
    .replace(/â˜…/g, "★")
    .replace(/â€”/g, "-")
    .replace(/â€“/g, "-")
    .replace(/â€™/g, "'")
    .replace(/â€œ|â€/g, '"');
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));
}

function escapeAttribute(value = "") {
  return escapeHtml(value);
}

function richText(value = "") {
  const template = document.createElement("template");
  template.innerHTML = displayText(value);
  sanitizeRichNode(template.content);
  return template.innerHTML;
}

function sanitizeRichNode(root) {
  const allowedTags = new Set(["A", "B", "BR", "CODE", "EM", "I", "LI", "OL", "P", "S", "SMALL", "SPAN", "STRONG", "SUB", "SUP", "U", "UL"]);
  const allowedStyles = new Set(["color", "background-color", "font-family", "font-size"]);
  root.querySelectorAll("*").forEach((node) => {
    if (!allowedTags.has(node.tagName)) {
      node.replaceWith(document.createTextNode(node.textContent || ""));
      return;
    }
    [...node.attributes].forEach((attr) => {
      const name = attr.name.toLowerCase();
      if (node.tagName === "A" && name === "href") {
        const href = attr.value.trim();
        if (/^(https?:|mailto:|#|\/)/i.test(href)) {
          node.setAttribute("target", "_blank");
          node.setAttribute("rel", "noreferrer");
          return;
        }
      }
      if (name === "style") {
        const safeStyle = attr.value.split(";").map((rule) => rule.trim()).filter((rule) => {
          const [property, rawValue = ""] = rule.split(":").map((part) => part.trim().toLowerCase());
          return allowedStyles.has(property) && !/url|expression|javascript/i.test(rawValue);
        }).join("; ");
        if (safeStyle) {
          node.setAttribute("style", safeStyle);
          return;
        }
      }
      node.removeAttribute(attr.name);
    });
  });
}

init();

