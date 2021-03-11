//settings are just variables that can be sent to the client from the server
//they are either related to the rooms or shared with the server 
module.exports.SETTINGS = {
    //if not specified by the url where is the starting point
    defaultRoom: "powellAndClark",
    //minimum time between talk messages enforced by both client and server
    ANTI_SPAM: 1000,
    //shows up at first non lurking login
    INTRO_TEXT: "Click/tap to move"
};

//miscellaneous assets to preload
module.exports.IMAGES = [
    ["sheepIdle", "sheep-idle.png"],
    ["sheepWalk", "sheep-walk.png"],
    ["wifeWalk", "wife.png"],
    ["wifeEmote", "wife-emote.png"],
    ["husbandWalk", "husband.png"],
    ["husbandEmote", "husband-emote.png"],
    ["child1Walk", "child1.png"],
    ["child1Emote", "child1-emote.png"],
    ["child2Walk", "child2.png"],
    ["child2Emote", "child2-emote.png"],
    ["child3Walk", "child3.png"],
    ["child3Emote", "child3-emote.png"],
    ["uncleWalk", "uncle.png"],
    ["uncleEmote", "uncle-emote.png"],
    ["milkmanWalk", "milkman.png"],
    ["milkmanEmote", "milkman-emote.png"],
    ["boyfriendWalk", "child-boyfriend.png"],
    ["boyfriendEmote", "child-boyfriend-emote.png"],
    ["flyWalk", "fly.png"],
    ["flyEmote", "fly-emote.png"]
];

//miscellaneous sounds to preload
module.exports.SOUNDS = [
    ["beat1", "beat1.ogg"], //credit https://www.youtube.com/watch?v=ugLVpZm69DE
    ["beat2", "beat2.ogg"], // credit https://www.youtube.com/watch?v=dPdoxIz0w24
    ["beat3", "beat3.ogg"], //credit https://www.youtube.com/watch?v=XShEWT4MwJs
    ["DJStop", "DJStop.mp3"]
];

module.exports.ROOMS = {
    powellAndClark: {
        bg: "PowellAndClark.png",
        avatarScale: 2,
        tint: "#DAC7F0",
        pageBg: "#3b2751",
        bubblesY: 50,
        spawn: [5, 76, 70, 95],
        area: "PowellAndClark-areas.png",
        areaColors: {
            // exits
            h7eff00: { cmd: "enter", room: "stairwell", label: "Stairwell", point: [77, 80], enterPoint: [51, 98], obstacle: false },
            hff0000: { cmd: "enter", room: "elevator", label: "Entrance", point: [114, 89], enterPoint: [56, 73], obstacle: false },

            // interior objects
            he54cca: { cmd: "text", label: "by heart projector", txt: "by heart projector", align: "center", lines: 1, point: [14, 69], obstacle: true },
            ha500ff: { cmd: "text", lines: 2, txt: "by The Papercut Arcade \nthepapercutarcade.ca", align: "center", url: "https://thepapercutarcade.ca", label: "papercut", point: [40, 68], obstacle: false },
            h0000ff: { cmd: "text", label: "street", txt: "Unceded territory", align: "center", lines: 1, point: [50, 70], obstacle: false },
        }
    },

    stairwell: {
        bg: "Stairwell.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [17, 84, 60, 95],
        area: "Stairwell-areas.png",
        areaColors: {
            // exits
            h00ffff: { cmd: "enter", room: "oldspaceLounge", label: "Heart Projector", point: [67, 59], enterPoint: [50, 70], obstacle: false },
            hff002a: { cmd: "enter", room: "TPCAHallway", label: "The Papercut Arcade", point: [67, 59], enterPoint: [66, 99], obstacle: false },
        },
    },

    elevator: {
        bg: "elevator.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [72, 73, 53, 63],
        area: "elevator-areas.png",
        areaColors: {
            // exits
            h00ffff: { cmd: "enter", room: "oldspaceLounge", label: "Heart Projector", point: [66, 60], enterPoint: [50, 70], obstacle: false },
            hff002a: { cmd: "enter", room: "TPCAHallway", label: "The Papercut Arcade", point: [66, 60], enterPoint: [89, 95], obstacle: false },
			h0000ff: { cmd: "enter", room: "powellAndClark", label: "outside", point: [66, 60], enterPoint: [110, 90], obstacle: false },
		},
		things: {
			elevatorol: { file: "elevator-OL.png", position: [65, 39], depthAdjust: 126 },
        },
    },

    TPCAHallway: {
        bg: "TPCAhallway.png",
        avatarScale: 1.5,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [17, 84, 60, 95],
        area: "TPCAhallway-areas.png",
        areaColors: {
            // exits
            hff0000: { cmd: "enter", room: "TPCAColourRoom", label: "COLOUR Room", point: [33, 13], enterPoint: [67, 94], obstacle: false },
            h00ff00: { cmd: "enter", room: "TPCAMapRoom", label: "War Room", point: [121, 52], enterPoint: [8, 75], obstacle: false },
            hf000ff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [10, 52], enterPoint: [118, 85], obstacle: false },
            h0000ff: { cmd: "enter", room: "TPCAFireRoom", label: "Bonfire", point: [96, 13], enterPoint: [15, 94], obstacle: false },
            h55ffff: { cmd: "enter", room: "elevator", label: "Elevator", point: [66, 97], enterPoint: [64, 68], obstacle: false },
			
			//placard
            hfeff00: { cmd: "text", label: "placard", txt: "The Papercut Arcade collective works to create safer spaces to explore creativity and art with like-minded folks. We're proud to be sharing digital real estate with the folks at Heart Projector.", point: [66, 73], align: "center", lines: 6, },
        },
    },

    TPCAGhostsOnlyRoom: {
        bg: "GhostsOnlyRoom.png",
        avatarScale: 1,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [17, 84, 60, 95],
        area: "GhostsOnlyRoom-areas.png",
        areaColors: {
            // exits
            ff0000: { cmd: "enter", room: "TPCAHallway", label: "out", point: [4, 15], enterPoint: [32, 16], obstacle: false },
        },
    },

    TPCAMapRoom: {
        bg: "maproom1.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [17, 84, 60, 95],
        area: "maproom-areas.png",
        areaColors: {
            // exits
            ff0000: { cmd: "enter", room: "TPCAHallway", label: "out", point: [4, 15], enterPoint: [32, 16], obstacle: false },
        },
		things: {
            //sprite spreadsheets only 1 row ok?
            maproom1: { file: "maproom1.png", position: [0, 0], depthAdjust:-150, visible: false },
            maproom2: { file: "maproom2.png", position: [0, 0], depthAdjust:-150, visible: false },
            maproom3: { file: "maproom3.png", position: [0, 0], depthAdjust:-150, visible: false },
            maproom4: { file: "maproom4.png", position: [0, 0], depthAdjust:-150, visible: false },
			
		},
    },

    //Tavern Rooms
    TPCATavern: {
        bg: "TavernBackground.png",
        avatarScale: 2,
	frames: 3,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [120, 90, 110, 80],
        area: "Tavern-animate-map.png",
        areaColors: {
            // exits
            hff0000: { cmd: "enter", room: "TPCAHallway", label: "Hallway", point: [118, 85], enterPoint: [10, 52], obstacle: false },
	    hff00ff: { cmd: "enter", room: "TavernBasement", label: "Basement", point: [9, 84], enterPoint: [119, 86], obstacle: false },
	},
        things: {
	    bartender: { file: "bartender.png", frames: 81, frameDelay: 30, position: [23, 57], depthAdjust: -2, visible:true },
            patron: { file: "tavern-patron.png", frames: 2, frameDelay: 50, position: [71, 57], depthAdjust: -2, visible:true },
	    roundtable: { file: "tavernroundtable.png", frames: 2, frameDelay: 50, position: [78, 84], depthAdjust: -2, visible:true },
            longtable: { file: "tavernlongtable.png", frames: 1, frameDelay: 50, position: [8, 82], depthAdjust: -2, visible:true },
        },
    },
	
	    TPCAColourRoom: {
        bg: "colourRoom.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 40,
        spawn: [17, 84, 60, 95],
        area: "colourRoom-areas.png",
        areaColors: {
            // exits
            ff0000: { cmd: "enter", room: "TPCAHallway", label: "out", point: [65, 94], enterPoint: [32, 16], obstacle: false },
        },
		things: {
			instrument: {file: "colourRoom-Music.png", position: [96, 15], obstacle: true },
			voice: {file: "colourRoom-Voice.png", position: [20, 73], frames: 3, frameDelay: 11, obstacle: true },
			blender: {file: "colourRoom-Blender.png", position: [95, 58], obstacle: true },
			Footstep: {file: "colourRoom-Footstep.png", position: [21, 21], frames: 3, frameDelay: 10, obstacle: true },
		},
    },
    
    TavernBasement: {
        bg: "TavernBasementBackground.png",
        avatarScale: 2,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [120, 90, 110, 80],
        area: "Tavern-basement-map.png",
        areaColors: {
            // exits
            h00ffff: { cmd: "enter", room: "TPCATavern", label: "Upstairs", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            hffff00: { cmd: "text", label: "The Filthy Lyre", txt: "Pffft!", align: "center", lines: 1, point: [45, 90], obstacle: true },
            hff29ff: { cmd: "text", label: "The Filthy Lyre", txt: "Hey! Paws off, y'animal!", align: "center", lines: 1, point: [45, 90], obstacle: false },
        },
        things: {
            //lyre
            lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },

    //Fire Rooms    
    
    TPCAFireRoom: {
        bg: "FireExit.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [15, 94, 5, 77],
        area: "FireExit-areas.png",
        areaColors: {
            // exits
            hf000ff: { cmd: "enter", room: "TPCAHallway", label: "Hall", point: [7, 83], enterPoint: [96, 22], obstacle: false },
            hffff00: { cmd: "enter", room: "ForestPathShallow", label: "Forest", point: [113, 60], enterPoint: [12, 83], obstacle: false },
            h0000ff: { cmd: "text", label: "Sign", txt: "Forest Loop Trail", align: "center", lines: 1, point: [78, 67] },
        },
        things: {
            //scenery
            bush: { file: "FireExit-bush.png", frames: 1, position: [0, 0], depthAdjust:3 },
            trees: { file: "FireExit-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
        },
    },
    
    ForestPathShallow: {
        bg: "ForestPath-Shallow.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [10, 80, 25, 85],
        area: "ForestPath-Shallow-areas.png",
        areaColors: {
            // exits
            hf000ff: { cmd: "enter", room: "TPCAFireRoom", label: "Civilization", point: [4, 86], enterPoint: [113, 60], obstacle: false },
            h0000ff: { cmd: "enter", room: "ForestPathFork", label: "Forest Loop", point: [24, 69], enterPoint: [125, 87], obstacle: false },
            hffff00: { cmd: "enter", room: "ForestPathLoop", label: "Forest Loop", point: [101, 67], enterPoint: [3, 80], obstacle: false },
             h00fff0: { cmd: "enter", room: "ForestPathLakefront", label: "Lake", point: [125, 88], enterPoint: [125, 93], obstacle: false },
            hff0000: { cmd: "text", label: "Sign", txt: "Loop Trail North", align: "center", lines: 1, point: [41, 75] },
            h000fff: { cmd: "text", label: "Sign", txt: "Loop Trail East", align: "center", lines: 1, point: [107, 70] },
        },
        things: {
            //scenery
            trees: { file: "ForestPath-Shallow-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
        },
    },

    ForestPathLakefront: {
        bg: "ForestPath-Lakefront.png",
        frames: 4,
        frameDelay: 40,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [125, 93, 110, 80],
        area: "ForestPath-Lakefront-areas.png",
        areaColors: {
            // exits
            hf000ff: { cmd: "enter", room: "ForestPathFork", label: "Forest", point: [6, 87],  enterPoint: [4, 88], obstacle: false },
            h0000ff: { cmd: "enter", room: "ForestPathShallow", label: "Forest", point: [125, 86],  enterPoint: [125, 93], obstacle: false },
        },
        things: {
            //scenery
            trees: { file: "ForestPath-Lakefront-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
        },
    },
    
    ForestPathFork: {
        bg: "ForestPath-Fork-smoke.png",
        frames: 3,
        frameDelay: 50,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [127, 88, 108, 80],
        area: "ForestPath-Fork-areas.png",
        areaColors: {
            // exits
            h00ff00: { cmd: "enter", room: "ForestPathLakefront", label: "Lake", point: [4, 88],  enterPoint: [6, 87], obstacle: false },
            h0000ff: { cmd: "enter", room: "Bonfire", label: "Bonfire Pit", point: [25, 63],  enterPoint: [62, 96], obstacle: false },
            hfff000: { cmd: "enter", room: "ForestPathRest", label: "Forest Trail Loop", point: [93, 64],  enterPoint: [48, 60], obstacle: false },
            hf000ff: { cmd: "enter", room: "ForestPathShallow", label: "Forest Entrance", point: [125, 87],  enterPoint: [24, 69], obstacle: false },       
        },
        things: {
            //scenery
            copse: { file: "ForestPath-Fork-copse.png", frames: 1, position: [0, 0], depthAdjust:-25 },
            trees: { file: "ForestPath-Fork-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
        },
    },

    ForestPathRest: {
        bg: "ForestPath-Rest.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [107, 89, 76, 77],
        area: "ForestPath-Rest-areas.png",
        areaColors: {
            // exits
            hf000ff: { cmd: "enter", room: "ForestPathFork", label: "Forest Loop North", point: [51, 59],  enterPoint: [93, 64], obstacle: false },
            h0000ff: { cmd: "enter", room: "ForestPathLoop", label: "Forest Loop South", point: [124, 89],  enterPoint: [77, 55], obstacle: false },
        },
        things: {
            //scenery
            copse: { file: "ForestPath-Rest-outhouse.png", frames: 1, position: [0, 0], depthAdjust:-10 },
            trees: { file: "ForestPath-Rest-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
        },
    }, 

    ForestPathLoop: {
        bg: "ForestPath-Loop.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [15, 90, 5, 77],
        area: "ForestPath-Loop-areas.png",
        areaColors: {
            // exits
            hf000ff: { cmd: "enter", room: "ForestPathShallow", label: "Forest Entrance", point: [3, 80],  enterPoint: [101, 67], obstacle: false },       
            h0000ff: { cmd: "enter", room: "ForestPathRest", label: "Forest Loop", point: [77, 55],  enterPoint: [124, 89], obstacle: false },
            hffff00: { cmd: "enter", room: "ForestPathFountain", label: "??", point: [123, 92],  enterPoint: [8, 58], obstacle: false },
            h00ff00: { cmd: "text", label: "Sign", txt: "Rest Area Ahead", align: "center", lines: 1, point: [71, 84] },
        },
        things: {
            //scenery
            trees: { file: "ForestPath-Loop-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
        },
    }, 
    
    ForestPathFountain: {
        bg: "ForestPath-Fountain.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [65, 92, 32, 75],
        area: "ForestPath-Fountain-areas.png",
        secret: true,
        areaColors: {
            // exits
            hffff00: { cmd: "enter", room: "ForestPathLoop", label: "Forest Loop", point: [8, 58],  enterPoint: [92, 72], obstacle: false },
            h0ffff0: { cmd: "text", label: "Berries", txt: "The ripest berries are  \ntoo far back for you to  \npick them.", align: "center", lines: 3, point: [110, 89], obstacle: false },
            h0000ff: { cmd: "text", label: "Berries", txt: "These berries aren't ripe.", align: "center", lines: 1, point: [61, 75], obstacle: false },
            hff7d00: { cmd: "text", label: "Berries", txt: "You think these might \nbe blackberries?", align: "center", lines: 2, point: [111, 80], obstacle: false },
            hff000f: { cmd: "text", label: "Berries", txt: "These bushes shudder as you \napproach and then become suddenly still. \nHuh, weird.", align: "center", lines: 4, point: [119, 80], obstacle: false },
            h007d4b: { cmd: "text", label: "Berries", txt: "These berries are just right. \nYou swallow a fistful.", align: "center", lines: 2, point: [26, 86], obstacle: false },
            hccff00: { cmd: "text", label: "Berries", txt: "These snozzberries taste \nlike snozzberries.", align: "center", lines: 2, point: [34, 92], obstacle: false },
            h00ff00: { cmd: "text", label: "Fountain", txt: "There are coins in this fountain.", align: "center", lines: 1, point: [75, 89], obstacle: true },
            hf000ff: { cmd: "text", label: "Fountain", txt: "You toss in a coin. \nMake a wish!", align: "center", lines: 2, point: [75, 89], obstacle: false },
        },
        things: {
            //scenery
            bush: { file: "ForestPath-Fountain-bush.png", frames: 1, position: [0, 0], depthAdjust:3 },
            fountain: { file: "ForestPath-Fountain-waterfeature.png", frames: 5, frameDelay: 5, position: [77, 60], depthAdjust: -2, visible:true },
            berryBush: { file: "ForestPath-Fountain-berries.png", frames: 1, position: [0, 0], depthAdjust:125 },
            trees: { file: "ForestPath-Fountain-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
        },
    },    
    
    Bonfire: {
        bg: "ForestPath-Bonfire.png",
        frames: 10,
        frameDelay: 90,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [111, 93, 83, 71],
        area: "ForestPath-Bonfire-areas.png",
        areaColors: {
            // exits
            hf000ff: { cmd: "enter", room: "ForestPathFork", label: "Forest Path", point: [62, 96],  enterPoint: [25, 63], obstacle: false },      
        },
        things: {
            //scenery
            fire: { file: "ForestPath-Bonfire-fire.png", frames: 9, frameDelay: 15, position: [55, 3], depthAdjust:20 },
            smoke: { file: "ForestPath-Bonfire-smoke.png", frames: 11, frameDelay: 100, position: [52, 0], depthAdjust:-2 },
            log1: { file: "ForestPath-Bonfire-Log1.png", position: [39, 88], depthAdjust:1 },
            log2: { file: "ForestPath-Bonfire-Log2.png", position: [30, 71], depthAdjust:-2 },
            log3: { file: "ForestPath-Bonfire-Log3.png", position: [75, 89], depthAdjust:1 },
            log4: { file: "ForestPath-Bonfire-Log4.png", position: [95, 82], depthAdjust:1 },
        },
    }, 
    
    
    //End Kay Added January 2021

    oldspaceBar: {
        bg: "room_oldspace_anim_bar.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [17, 84, 60, 95],
        area: "room_oldspace_anim_bar_intmap.png",
        areaColors: {
            // exits
            h00ff00: { cmd: "enter", room: "oldspaceLounge", label: "Lounge", point: [4, 83], enterPoint: [124, 83], obstacle: false },
            h0078ff: { cmd: "enter", room: "oldspaceOutside", label: "Outside", point: [112, 97], enterPoint: [8, 75], obstacle: false },
        },
    },

    oldspaceLounge: {
        bg: "room_oldspace_anim_lounge.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [20, 85, 109, 95],
        area: "room_oldspace_anim_lounge_intmap.png",
        areaColors: {
            // exits
            hff00ea: { cmd: "enter", room: "oldspaceMain", label: "Arcade", point: [7, 80], enterPoint: [125, 79], obstacle: false },
            h00ff00: { cmd: "enter", room: "oldspaceBar", label: "Bar", point: [124, 83], enterPoint: [4, 83], obstacle: false },
        },
    },

    oldspaceMain: {
        bg: "room_oldspace_anim_main.png",
        frames: 2,
        frameDelay: 60,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [82, 86, 118, 97],
        area: "room_oldspace_anim_main_intmap.png",
        areaColors: {
            // exits
            hff00ea: { cmd: "enter", room: "oldspaceLounge", label: "Lounge", point: [125, 79], enterPoint: [7, 80], obstacle: false },
        },
		things: {
			table: { file: "heart-projector-table.png", frames: 1, position: [31, 63] },
			tableGlow: { file: "heart-projector-table-glow.png", frames: 1, position: [9, 40], depthAdjust:32 },
			
			curationRightScreen: { file: "screenLarge.png", frames: 1, position: [88, 53], visible:true, label: "A game", command: { cmd: "text", txt: "The gameplay fills your senses . . .", align: "left", lines: 4, url: "https://trasevol-dog.itch.io/embrace", point: [91, 71] } },
			curationRightScreenGlow: { file: "screenLargeGlow.png", frames: 2, frameDelay: 60, position: [78, 43], visible:true },
			curationRightPlacard: { file: "placardStraightOnWhite.png", frames: 1, position: [72, 55], visible:true, label: "A placard", command: { cmd: "text", txt: "Ayyyyy", align: "left", lines: 4, label: "A huggy game", point: [73, 71] } },

            curationLeftScreen: { file: "screenMedium.png", frames: 1, position: [54, 55], visible:true, label: "A game", command: { cmd: "text", txt: "The gameplay fills your senses . . .", align: "left", lines: 4, url: "https://trasevol-dog.itch.io/embrace", point: [56, 71] } },
			curationLeftScreenGlow: { file: "screenMediumGlow.png", frames: 2, frameDelay: 60, position: [44, 45], visible:true },
			curationLeftPlacard: { file: "placardStraightOnWhite.png", frames: 1, position: [67, 55], visible:true, label: "A placard", command: { cmd: "text", txt: "Ayyyyy", align: "left", lines: 4, label: "A huggy game", point: [68, 71] } },

            curationProjectorScreen: { file: "screenProjector.png", frames: 1, position: [10, 21], visible:true, label: "A game", command: { cmd: "text", txt: "The gameplay fills your senses . . .", align: "left", lines: 4, url: "https://trasevol-dog.itch.io/embrace", point: [25, 78] } },
			curationProjectorScreenGlow: { file: "screenProjectorGlow.png", frames: 2, frameDelay: 60, position: [10, 21], visible:true },
            curationProjectorPlacard: { file: "placardQuarterTurnRightWhite.png", frames: 1, position: [22, 50], visible:true, label: "A placard", command: { cmd: "text", txt: "Ayyyyy", align: "left", lines: 4, label: "A huggy game", point: [25, 72] } },
			
            curationTableLeftScreen: { file: "screenLargeWide.png", frames: 1, position: [44, 67], depthAdjust:18, visible:true, label: "A game", command: { cmd: "text", txt: "The gameplay fills your senses . . .", align: "left", lines: 4, url: "https://trasevol-dog.itch.io/embrace", point: [48, 87] } },
			curationTableLeftScreenGlow: { file: "screenLargeWideGlow.png", frames: 2, frameDelay: 60, position: [34, 57], depthAdjust:8, visible:true },
            curationTableLeftPlacard: { file: "placardTable.png", frames: 1, position: [56, 72], depthAdjust:12, visible:true, label: "A placard", command: { cmd: "text", txt: "Ayyyyy", align: "left", lines: 4, label: "A huggy game", point: [57, 87] } },
			
            curationTableRightScreen: { file: "screenHuge.png", frames: 1, position: [68, 66], depthAdjust:18, visible:true, label: "A game", command: { cmd: "text", txt: "The gameplay fills your senses . . .", align: "left", lines: 4, url: "https://trasevol-dog.itch.io/embrace", point: [72, 87] } },
			curationTableRightScreenGlow: { file: "screenHugeGlow.png", frames: 2, frameDelay: 60, position: [58, 56], depthAdjust:8, visible:true },
            curationTableRightPlacard: { file: "placardTable.png", frames: 1, position: [81, 72], depthAdjust:12, visible:true, label: "A placard", command: { cmd: "text", txt: "Ayyyyy", align: "left", lines: 4, label: "A huggy game", point: [83, 87] } },
			
		}
    },

    oldspaceOutside: {
        bg: "room_oldspace_anim_outside.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [19, 79, 104, 93],
        area: "room_oldspace_anim_outside_intmap.png",
        areaColors: {
            // exits
            h0078ff: { cmd: "enter", room: "oldspaceBar", label: "Bar", point: [8, 75], enterPoint: [112, 97], obstacle: false },
        },
		//list of sprites to create in the room
        //sprites are rendered according to depth sort so they can appear above the avatars unlike the background
        //they can be animated, mouse reactive and trigger commands like the areas above
        things: {
            //sprite spreadsheets only 1 row ok?
            glitchMoon: { file: "glitchMoon.png", frames: 1, frameDelay: 1, position: [102, 2], id: "glitchMoon", visible: false }
        }
    },

    likelike: {
        //the background graphics, it can be a spreadsheet
        bg: "likelike-bg-pico.png",
        //if spreadsheet frames
        frames: 2,
        //if animated, animation speed in refreshes (frame dependent)
        frameDelay: 30,
        //normally 2, avatars can be scaled to simulate camera distance
        avatarScale: 2,
        //a shade to tint the avatars to simulate light color, #FFFFFF normal
        tint: "#ffbbb8",
        //the html body color can be changed
        pageBg: "#ab5236",
        //minimum height for the speech bubbles
        bubblesY: 50,
        //if spawning directly in this room, top left and bottom right point defining the rectangular spawn area (random within it)
        spawn: [84, 92, 121, 99],
        //graphics with active areas Sierra Online adventures style
        //color coded as below, #FFFFFF is walkable, transparent is obstacle
        area: "likelike-areas-pico.png",
        //each color can trigger a command, the destination needs to be reached first
        //the "h" is replaced by # to identify color
        areaColors: {
            //enter command changes room
            //room: id of the room to enter
            //label: what to display on rollover
            //point: where to walk after click
            //enterPoint: where to spawn in the next room
            //obstacle: is the area walkable
            hffec27: { cmd: "enter", room: "likelikeBackyard", label: "Backyard", point: [6, 88], enterPoint: [116, 69], obstacle: false },
            h00e436: { cmd: "enter", room: "likelikeOutside", label: "Street", point: [102, 98], enterPoint: [103, 84], obstacle: false },
            hab5236: { cmd: "enter", room: "firstFloor", label: "oMoMA", point: [116, 85], enterPoint: [63, 98], obstacle: false },

            //text displays a text only on the client
            //txt: the text
            //align: center or left
            //lines: manual number of lines, p5 doesn't understand line breaks
            //url: uptionally open a page on click
            hff004d: { cmd: "text", txt: "ENNUIGI\nby Josh Millard, 2015\nClick to play.\nControls: Arrow keys.", align: "left", lines: 4, url: "https://www.lexaloffle.com/bbs/?tid=2232", label: "An existential game", point: [34, 78], obstacle: true },
            hff77a8: { cmd: "text", txt: "STRUNG OUT IN HEAVEN'S HIGH\nby Sean S. LeBlanc\nand Ian Martin, 2016\nClick to play.\nControls: Arrow keys + Z.", align: "left", lines: 5, url: "https://www.lexaloffle.com/bbs/?tid=3941", label: "A trippy game", point: [64, 78], obstacle: true },
            hffccaa: { cmd: "text", txt: "GET COMFORTABLE\nby mcccclean, 2018\nClick to play.\nControls: Arrow keys.", align: "left", lines: 4, url: "https://mcccclean.itch.io/get-comfortable", label: "A snuggly game", point: [92, 78], obstacle: true },
            h83769c: { cmd: "text", txt: "HYBRIS\nby Benjamin Soule', 2015\nClick to play.\nControls: Arrow keys + Z.", align: "left", lines: 4, url: "https://www.lexaloffle.com/bbs/?tid=2897", label: "A viral game", point: [16, 82], obstacle: true },
        },
        //list of sprites to create in the room
        //sprites are rendered according to depth sort so they can appear above the avatars unlike the background
        //they can be animated, mouse reactive and trigger commands like the areas above
        things: {
            //sprite spreadsheets only 1 row ok?
            cabinet: { file: "top-cabinet-pico.png", frames: 1, frameDelay: 1, position: [24, 89], label: "A huggy game", command: { cmd: "text", txt: "EMBRACE\nby Remy Devaux, 2018\nClick to play.\nControls: Arrow keys.", align: "left", lines: 4, url: "https://trasevol-dog.itch.io/embrace", label: "A huggy game", point: [33, 92] } }
        }
    },


    likelikeBitsy: {
        //the background graphics, it can be a spreadsheet
        bg: "likelike-bg.png",
        //if spreadsheet frames
        frames: 2,
        //if animated, animation speed in refreshes (frame dependent)
        frameDelay: 30,
        //normally 2, avatars can be scaled to simulate camera distance
        avatarScale: 2,
        //a shade to tint the avatars to simulate light color, #FFFFFF normal
        tint: "#fa84af",
        //the html body color can be changed
        pageBg: "#6a2545",
        //minimum height for the speech bubbles
        bubblesY: 50,
        //if spawning directly in this room, top left and bottom right point defining the rectangular spawn area (random within it)
        spawn: [84, 92, 121, 99],
        //graphics with active areas Sierra Online adventures style
        //color coded as below, #FFFFFF is walkable, transparent is obstacle
        area: "likelike-areas.png",
        //each color can trigger a command, the destination needs to be reached first
        //the "h" is replaced by # to identify color
        areaColors: {
            //enter command changes room
            //room: id of the room to enter
            //label: what to display on rollover
            //point: where to walk after click
            //enterPoint: where to spawn in the next room
            //obstacle: is the area walkable
            hffec27: { cmd: "enter", room: "likelikeBackyard", label: "Backyard", point: [6, 88], enterPoint: [116, 69], obstacle: false },
            h00e436: { cmd: "enter", room: "likelikeOutside", label: "Street", point: [102, 98], enterPoint: [103, 84], obstacle: false },
            //text displays a text only on the client
            //txt: the text
            //align: center or left
            //lines: manual number of lines, p5 doesn't understand line breaks
            //url: uptionally open a page on click
            hff004d: { cmd: "text", txt: "OUR DAMNED MACHINE\nby Sophie Houlden, 2018\nClick on the frame to start.\nWASD or Arrow keys to move.", align: "left", lines: 4, url: "https://sophieh.itch.io/our-damned-machine", label: "A dystopian game", point: [34, 78], obstacle: true },
            hff77a8: { cmd: "text", txt: "CONTINENTAL DRIFT\nby Cecile Richard, 2019\nWASD or Arrow keys to move.\nClick to play.", align: "left", lines: 4, url: "https://haraiva.itch.io/continental-drift", label: "An intimate game", point: [64, 78], obstacle: true },
            hffccaa: { cmd: "text", txt: "SPIRAL HOUSE\nby Withering Systems (Everest Pipkin and Loren Schmidt), 2018\nWASD or Arrow keys to move.\nClick to play.", align: "left", lines: 5, url: "https://withering-systems.itch.io/spiral-house", label: "An abstract game", point: [92, 78], obstacle: true },
            hab5236: { cmd: "text", txt: "ALMANAC OF GIRLSWAMPWAR TERRITORY\nby porpentine charity heartscape, 2018\nWASD or Arrow keys to move.\nClick to play.", align: "left", lines: 5, url: "https://porpentine.itch.io/almanac", label: "A mutant game", point: [110, 82], obstacle: true },
            h83769c: { cmd: "text", txt: "MOSS AS TEXTURE AS SPACE\nFOLDING ONTO ITSELF\nby Pol Clarissou, 2019\nWASD or Arrow keys to move.\nClick to play.", align: "left", lines: 5, url: "https://polclarissou.itch.io/moss-as-texture-as-space-folding-onto-itself", label: "A mossy game", point: [16, 82], obstacle: true },
            hffa300: { cmd: "text", txt: "LIKELIKE\npresents:\nAn Itsy Bitsy Crisis\nCatastrophes and Rebirths in Bitsy", align: "center", lines: 4, label: "Wall text", point: [119, 95], obstacle: false }
        },
        //list of sprites to create in the room
        //sprites are rendered according to depth sort so they can appear above the avatars unlike the background
        //they can be animated, mouse reactive and trigger commands like the areas above
        things: {
            //sprite spreadsheets only 1 row ok?
            cabinet: { file: "top-cabinet.png", frames: 1, frameDelay: 1, position: [24, 89], label: "A time traveling game", command: { cmd: "text", txt: "THE LAST HUMAN TOUCH\nby Cephalopodunk, 2018\nWASD or Arrow keys to move.\nClick to play.", align: "left", lines: 4, url: "https://cephalopodunk.itch.io/the-last-human-touch", label: "A time traveling game", point: [33, 92] } }
        }
    },

    likelikeOutside: {
        bg: "likelike-outside-omoma.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        pageBg: "#ab5236",
        area: "likelikeOutside-areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [14, 84, 119, 92],
        areaColors: {
            //h will be replaced by #
            hff77a8: { cmd: "enter", room: "likelike", label: "Enter LIKELIKE", point: [100, 84], enterPoint: [104, 98], obstacle: false },
        }
    },

    likelikeBackyard: {
        bg: "likelike-backyard.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        area: "likelike-backyard-areas.png",
        tint: "#fdbe4e",
        pageBg: "#413830",
        bubblesY: 20,
        spawn: [38, 63, 108, 83],
        areaColors: {
            //h will be replaced by #
            hff77a8: { cmd: "enter", room: "likelike", label: "Enter LIKELIKE", point: [119, 69], enterPoint: [5, 88], obstacle: false },
        },
        things: {
            //spreadsheets only 1 row ok?
            harvey: { file: "harvey.png", frames: 2, frameDelay: 10, position: [102, 77], label: "Harvey", command: { cmd: "text", txt: "*You pet the dog*", align: "center", lines: 1, point: [101, 84] } },
            chairs: { file: "likelike-backyard-chairs.png", position: [33, 44] },
            cabinet: {
                file: "pico-cabinet.png", frames: 2, frameDelay: 10, position: [92, 26], label: "Looping animations?",
                command: { cmd: "text", txt: "TWEETCARTS\nby Varius Creators\nThe code of each of these PICO-8 generated animations fits into a single tweet (280 chars).", align: "left", lines: 5, url: "https://twitter.com/molleindustria/timelines/1254605222455934978", label: "Short animations?", point: [96, 46] }
            }
        }
    },

    //just an empty room for testing mods
    experiments: {

        bg: "experiments-bg.png",
        avatarScale: 2,
        pageBg: "#bfaeae",
        area: "experiments-areas.png",
        tint: "#FFFFFF",
        bubblesY: 50,
        spawn: [15, 77, 113, 96]

    },

    firstFloor: {
        bg: "firstFloor.png",
        avatarScale: 2,
        pageBg: "#e1cdcd",
        area: "firstFloor-areas.png",
        tint: "#FFFFFF",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //left
            hffec27: { cmd: "enter", room: "cnsnntrm", label: "cnsnnt rm", point: [10, 86], enterPoint: [114, 86], obstacle: false },
            //right
            h00e436: { cmd: "enter", room: "mirrorRoom", label: "Mirror Room", point: [117, 86], enterPoint: [12, 86], obstacle: false },
            //up
            h29adff: { cmd: "enter", room: "secondFloor", label: "2nd Floor", point: [30, 73], enterPoint: [99, 73], obstacle: false },
            //wall text
            ha8e72e: { cmd: "text", txt: "ONLINE MUSEUM OF MULTIPLAYER ART\nA survey of contemporary playful art. You have to talk and interact with other visitors to get the art.", align: "left", lines: 5, label: "Wall text", point: [50, 73], obstacle: false },
            hb7250b: { cmd: "text", txt: "Anomaly\nMixed media, subjectively perceived.", align: "left", lines: 3, label: "Installation?", point: [75, 77], obstacle: false },
            hbe1250: { cmd: "enter", room: "likelike", label: "LIKELIKE Arcade", point: [63, 98], enterPoint: [116, 85], obstacle: false },

        },
        things: {
            //sprite spreadsheets only 1 row ok?
            sculpture1: { file: "sculpture1.png", position: [70, 22], visible: false },
            sculpture2: { file: "sculpture2.png", position: [70, 22], visible: false },
            sculpture3: { file: "sculpture3.png", position: [70, 22], visible: false },
            sculpture4: { file: "sculpture4.png", position: [70, 22], frames: 4, frameDelay: 10, visible: false },
        }
    },

    secondFloor: {

        bg: "secondFloor.png",
        avatarScale: 2,
        pageBg: "#e1cdcd",
        area: "secondFloor-areas.png",
        tint: "#FFFFFF",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //left
            hffec27: { cmd: "enter", room: "censorshipRoom", label: "Censorship Room", point: [10, 86], enterPoint: [114, 86], obstacle: false },
            //right
            h00e436: { cmd: "enter", room: "rhymeRoom", label: "Rhyme Room", point: [117, 86], enterPoint: [12, 86], obstacle: false },
            //down
            hff77a8: { cmd: "enter", room: "firstFloor", label: "1st Floor", point: [99, 73], enterPoint: [30, 73], obstacle: false },
            //up
            h29adff: { cmd: "enter", room: "thirdFloor", label: "3rd Floor", point: [30, 73], enterPoint: [99, 73], obstacle: false },

        },
    },

    thirdFloor: {

        bg: "thirdFloor.png",
        avatarScale: 2,
        pageBg: "#e1cdcd",
        area: "secondFloor-areas.png",
        tint: "#FFFFFF",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {

            //left
            hffec27: { cmd: "enter", room: "darkRoom", label: "Dark Room", point: [10, 86], enterPoint: [114, 86], obstacle: false },

            //right
            h00e436: { cmd: "enter", room: "familyRoom", label: "Family Room", point: [117, 86], enterPoint: [10, 77], obstacle: false },

            //VIP
            h29adff: { cmd: "enter", room: "VIPRoom", label: "VIP Room", point: [30, 73], enterPoint: [64, 79], obstacle: false },

            //down
            hff77a8: { cmd: "enter", room: "secondFloor", label: "2nd Floor", point: [99, 73], enterPoint: [30, 73], obstacle: false },
        },

    },

    cnsnntrm: {
        bg: "leftRoom.png",
        avatarScale: 2,
        pageBg: "#e1cdcd",
        area: "leftRoom-areas.png",
        tint: "#FFFFFF",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //right
            h00e436: { cmd: "enter", room: "firstFloor", label: "Hall", point: [117, 86], enterPoint: [12, 86], obstacle: false },
        },
        things: {
            //sprite spreadsheets only 1 row ok?
            guard: { file: "museumGuard.png", frames: 1, frameDelay: 30, position: [13, 56], label: "Museum guard" }
        }

    },


    mirrorRoom: {
        bg: "rightRoom.png",
        avatarScale: 2,
        pageBg: "#e1cdcd",
        area: "rightRoom-areas.png",
        tint: "#FFFFFF",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //left
            hffec27: { cmd: "enter", room: "firstFloor", label: "Hall", point: [10, 86], enterPoint: [114, 86], obstacle: false },
        }

    },

    censorshipRoom: {
        bg: "leftRoom.png",
        avatarScale: 2,
        pageBg: "#e1cdcd",
        area: "censorshipRoom-areas.png",
        tint: "#FFFFFF",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //right
            h00e436: { cmd: "enter", room: "secondFloor", label: "Hall", point: [117, 86], enterPoint: [12, 86], obstacle: false },

        },
        things: {
            //sprite spreadsheets only 1 row ok?
            elephant: { file: "elephant-no-outline.png", frames: 4, frameDelay: 30, position: [42, 51] }
        }
    },

    rhymeRoom: {
        bg: "speaker-room.png",
        avatarScale: 2,
        frames: 3,
        frameDelay: 10,
        pageBg: "#e1cdcd",
        area: "rightRoom-areas.png",
        tint: "#FFFFFF",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //left
            hffec27: { cmd: "enter", room: "secondFloor", label: "Hall", point: [10, 86], enterPoint: [114, 86], obstacle: false },

        }

    },

    darkRoom: {
        bg: "darkRoom.png",
        avatarScale: 2,
        frames: 3,
        frameDelay: 10,
        pageBg: "#221c17",
        area: "leftRoom-areas.png",
        tint: "#342c24",
        bubblesY: 46,
        spawn: [15, 77, 113, 96],
        areaColors: {
            //right
            h00e436: { cmd: "enter", room: "thirdFloor", label: "Hall", point: [117, 86], enterPoint: [12, 86], obstacle: false },

        }

    },

    familyRoom: {
        bg: "familyRoom-bg.png",
        avatarScale: 2,
        pageBg: "#6a2545",
        area: "familyRoom-areas.png",
        tint: "#f7e9e9",
        bubblesY: 40,
        secret: false,
        spawn: [12, 70, 16, 90],
        areaColors: {
            //left door
            hffec27: { cmd: "enter", room: "thirdFloor", label: "Hall", point: [10, 77], enterPoint: [114, 86], obstacle: false },
            hffccaa: { cmd: "text", label: "Book", txt: "Fifty Shades of Grey", align: "center", lines: 1, point: [16, 61] },
            hff77a8: { cmd: "text", label: "Book", txt: "Fifty Shades Darker", align: "center", lines: 1, point: [16, 61] },
            hff9d81: { cmd: "text", label: "Book", txt: "Fifty Shades Freed", align: "center", lines: 1, point: [16, 61] },
            //action requires a custom listener in the serverMod listening to actionId
            hff6c24: { cmd: "action", actionId: "TVInteract", label: "TV", point: [39, 69], obstacle: false },
            h008751: { cmd: "text", label: "Picture", txt: "Family at Disneyworld", align: "center", lines: 1, point: [52, 61] },
            ha8e72e: { cmd: "text", label: "Picture", txt: "Wedding picture", align: "center", lines: 1, point: [57, 61] },
            h00e436: { cmd: "text", label: "?", txt: "A short red hair", align: "center", lines: 1, point: [8, 90], obstacle: false },
            h29adff: { cmd: "text", label: "?", txt: "Female underwear", align: "center", lines: 1, point: [113, 62] },
            hff004d: { cmd: "text", label: "Plant", txt: "It's in bad shape", align: "center", lines: 1, point: [26, 61] },
        },
        things: {
            //sprite spreadsheets only 1 row ok?
            couch2: { file: "familyRoom-couch2.png", position: [53, 54] },
            couch1: { file: "familyRoom-couch1.png", position: [26, 63] },
            table: { file: "familyRoom-table.png", position: [81, 74] },
            TV: { file: "tv.png", id: "TV", position: [33, 45], frames: 13, frameDelay: 60, visible: false },
        }

    },

    VIPRoom: {
        bg: "VIPRoom-bg.png",
        avatarScale: 2,
        pageBg: "#742f29",
        area: "VIPRoom-areas.png",
        tint: "#f7cdba",
        bubblesY: 40,
        secret: true,
        spawn: [56, 76, 69, 80],
        //music: "smoothCrap.ogg",
        musicVolume: 0.5,
        areaColors: {
            //right
            hff004d: { cmd: "text", label: "Painting", txt: "An original Rothko?", align: "center", lines: 1, point: [27, 65], obstacle: false },
            h00e436: { cmd: "text", label: "Window", txt: "Can you see the incline from here?", align: "center", lines: 1, point: [33, 59], obstacle: false },
            hffec27: { cmd: "text", label: "Window", txt: "The Paris of Appalachia", align: "center", lines: 1, point: [53, 59], obstacle: false },
            h29adff: { cmd: "text", label: "Window", txt: "Ah... the city of bridges!", align: "center", lines: 1, point: [73, 59], obstacle: false },
            hff6c24: { cmd: "text", label: "Window", txt: "Gentrification is beautiful", align: "center", lines: 1, point: [83, 59], obstacle: false },
            hffccaa: { cmd: "text", label: "Cocktail", txt: "*You drink an Old fashioned*", align: "center", lines: 1, point: [45, 76], obstacle: false },
            hff77a8: { cmd: "text", label: "Champagne", txt: "It's a magnum bottle", align: "center", lines: 1, point: [38, 76], obstacle: false },
            hb7250b: { cmd: "text", label: "Caviar tartines", txt: "*You eat a tartine*", align: "center", lines: 1, point: [31, 76], obstacle: false },
            hab5236: { cmd: "text", label: "Chocolate fountain", txt: "A little bit tacky", align: "center", lines: 1, point: [24, 76], obstacle: false },
            h065ab5: { cmd: "enter", room: "thirdFloor", label: "Hall", point: [64, 79], enterPoint: [30, 73], obstacle: false }
        },
        things: {
            //sprite spreadsheets only 1 row ok?
            VIPSeats: { file: "VIP-seats.png", position: [43, 56] },
            VIPTable: { file: "VIP-table.png", position: [20, 65] },
            VIPCouch: { file: "VIP-couch.png", position: [87, 68] },
        }

    },

};