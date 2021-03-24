module.exports = {
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
		things: {
			curationLeftScreen: { file: "screenLarge.png", frames: 1, position: [32, 63], visible:true, label: "A game", command: { cmd: "text", txt: "The gameplay fills your senses . . .", align: "left", lines: 4, url: "https://trasevol-dog.itch.io/embrace", point: [32, 80] } },
			curationLeftScreenGlow: { file: "screenLargeGlow.png", frames: 2, frameDelay: 60, position: [22, 53], visible:true },
			curationLeftPlacard: { file: "placardTable.png", frames: 1, position: [43, 67], visible:true, label: "A placard", command: { cmd: "text", txt: "Ayyyyy", align: "left", lines: 4, label: "A huggy game", point: [43, 80] } },
			
			curationProjectorScreen: { file: "screenProjectorBar.png", frames: 1, position: [99, 12], visible:true, label: "A game", command: { cmd: "text", txt: "The gameplay fills your senses . . .", align: "left", lines: 4, url: "https://trasevol-dog.itch.io/embrace", point: [103, 97] } },
			curationProjectorScreenGlow: { file: "screenProjectorBarGlow.png", frames: 2, frameDelay: 60, position: [99, 12], visible:true },
            curationProjectorPlacard: { file: "placardTableQuarterTurn.png", frames: 1, position: [87, 79], visible:true, label: "A placard", command: { cmd: "text", txt: "Ayyyyy", align: "left", lines: 4, label: "A huggy game", point: [86, 97] } },
		}
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
            h0000ff: { cmd: "enter", room: "elevator", label: "Elevator", point: [72, 99], enterPoint: [64, 68], obstacle: false },
        },
		things: {
			table: { file: "item_oldspace_lounge_table.png", frames: 1, position: [30, 68] },
			
            curationLeftScreen: { file: "screenMedium.png", frames: 1, position: [37, 69], visible:true, label: "A game", depthAdjust:14, command: { cmd: "text", txt: "The gameplay fills your senses . . .", align: "left", lines: 4, url: "https://trasevol-dog.itch.io/embrace", point: [38, 82] } },
			curationLeftScreenGlow: { file: "screenMediumGlow.png", frames: 2, frameDelay: 60, position: [27, 59], visible:true, depthAdjust:4 },
			curationLeftPlacard: { file: "placardTable.png", frames: 1, position: [45, 71], visible:true, label: "A placard", depthAdjust:12, command: { cmd: "text", txt: "Ayyyyy", align: "left", lines: 4, label: "A huggy game", point: [46, 82] } },

			curationRightScreen: { file: "screenSmall.png", frames: 1, position: [60, 70], visible:true, label: "A game", depthAdjust:14, command: { cmd: "text", txt: "The gameplay fills your senses . . .", align: "left", lines: 4, url: "https://trasevol-dog.itch.io/embrace", point: [61, 82] } },
			curationRightScreenGlow: { file: "screenSmallGlow.png", frames: 2, frameDelay: 60, position: [50, 60], visible:true, depthAdjust:4 },
			curationRightPlacard: { file: "placardTable.png", frames: 1, position: [68, 71], visible:true, label: "A placard", depthAdjust:12, command: { cmd: "text", txt: "Ayyyyy", align: "left", lines: 4, label: "A huggy game", point: [69, 82] } },
		}
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
            glitchMoon: { file: "glitchMoon.png", frames: 1, frameDelay: 1, position: [102, 2], id: "glitchMoon", visible: false },
			chair: { file: "oldspaceOutsideChair.png", frames: 2, frameDelay: 40, position: [12, 25], depthAdjust:8 },
			computer: { file: "oldspaceOutsideComputer.png", frames: 1, position: [63, 22], depthAdjust:0 },
			
			curationMainframeScreen: { file: "screenMedium.png", frames: 1, position: [66, 51], depthAdjust:12, visible:true, label: "A game", command: { cmd: "text", txt: "The gameplay fills your senses . . .", align: "left", lines: 4, url: "https://trasevol-dog.itch.io/embrace", point: [68, 69] } },
			curationMainframeScreenGlow: { file: "screenMediumGlow.png", frames: 2, frameDelay: 60, position: [56, 41], depthAdjust:12, visible:true },
			curationMainframePlacard: { file: "placardTableQuarterTurn.png", frames: 1, position: [80, 70], depthAdjust:-4, visible:true, label: "A placard", command: { cmd: "text", txt: "Ayyyyy", align: "left", lines: 4, label: "A huggy game", point: [76, 76] } },
        }
    },
}