
module.exports = {
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
            h0000ff: { cmd: "enter", room: "stairwell2", label: "up", point: [81, 8], enterPoint: [61, 95], obstacle: false },
            hff0000: { cmd: "enter", room: "powellAndClark", label: "down", point: [61, 95], enterPoint: [72, 77], obstacle: false },
        },
		things: {
			candle1: { file: "Stairwell-candle1.png", frames: 3, frameDelay: 5, position: [9, 24], depthAdjust:10, obstacle: true },
            candle2: { file: "Stairwell-candle2.png", frames: 3, frameDelay: 8, position: [110, 55], depthAdjust: -20, obstacle: true},
			candleGlow: { file: "Stairwell-candleGlow.png", frames: 2, frameDelay: 15, position: [4, 17], depthAdjust: 10, obstacle: true},
			candleGlow2: { file: "Stairwell-candleGlow.png", frames: 2, frameDelay: 20, position: [105, 47], depthAdjust: 10, obstacle: true},
			
			curationRightScreen: { file: "screenHuge.png", frames: 1, position: [20, 15], depthAdjust:18, visible:true, label: "A game", command: { cmd: "text", txt: "The gameplay fills your senses . . .", align: "left", lines: 4, url: "https://trasevol-dog.itch.io/embrace", point: [24, 32] } },
			curationRightScreenGlow: { file: "screenHugeGlow.png", frames: 2, frameDelay: 60, position: [10, 5], depthAdjust:8, visible:true },
            curationRightPlacard: { file: "placardGrey.png", frames: 1, position: [36, 21], depthAdjust:12, visible:true, label: "A placard", command: { cmd: "text", txt: "Ayyyyy", align: "left", lines: 4, label: "A huggy game", point: [37, 31] } },
			
			curationLeftScreen: { file: "screenLarge.png", frames: 1, position: [105, 44], depthAdjust:18, visible:true, label: "A game", command: { cmd: "text", txt: "The gameplay fills your senses . . .", align: "left", lines: 4, url: "https://trasevol-dog.itch.io/embrace", point: [100, 65] } },
			curationLeftScreenGlow: { file: "screenLargeGlow.png", frames: 2, frameDelay: 60, position: [95, 34], depthAdjust:8, visible:true },
            curationLeftPlacard: { file: "placardGrey.png", frames: 1, position: [96, 49], depthAdjust:12, visible:true, label: "A placard", command: { cmd: "text", txt: "Ayyyyy", align: "left", lines: 4, label: "A huggy game", point: [93, 63] } },
			
			curationRight2Screen: { file: "screenMedium.png", frames: 1, position: [71, 46], depthAdjust:78, visible:true, label: "A game", command: { cmd: "text", txt: "The gameplay fills your senses . . .", align: "left", lines: 4, url: "https://trasevol-dog.itch.io/embrace", point: [69, 64] } },
			curationRight2ScreenGlow: { file: "screenMediumGlow.png", frames: 2, frameDelay: 60, position: [61, 36], depthAdjust:78, visible:true },
            curationRight2Placard: { file: "placardGrey.png", frames: 1, position: [80, 51], depthAdjust:12, visible:true, label: "A placard", command: { cmd: "text", txt: "Ayyyyy", align: "left", lines: 4, label: "A huggy game", point: [80, 63] } },
		},
	},
	stairwell2: {
        bg: "Stairwell2.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [17, 84, 60, 95],
        area: "Stairwell2-areas.png",
        areaColors: {
            // exits
            h0000ff: { cmd: "enter", room: "stairwell", label: "up", point: [40, 4], enterPoint: [61, 95], obstacle: false },
            hff0000: { cmd: "enter", room: "powellAndClark", label: "down", point: [69, 95], enterPoint: [72, 77], obstacle: false },
        },
		things: {
			candle1: { file: "Stairwell-candle2.png", frames: 3, frameDelay: 6, position: [112, 25], depthAdjust:10, obstacle: true },
            candle2: { file: "Stairwell-candle1.png", frames: 3, frameDelay: 10, position: [20, 52], depthAdjust: -20, obstacle: true},
			candleGlow: { file: "Stairwell-candleGlow.png", frames: 2, frameDelay: 15, position: [15, 45], depthAdjust: 10, obstacle: true},
			candleGlow2: { file: "Stairwell-candleGlow.png", frames: 2, frameDelay: 20, position: [107, 19], depthAdjust: 10, obstacle: true},
			
			curationRightScreen: { file: "screenHuge.png", frames: 1, position: [36, 42], depthAdjust:18, visible:true, label: "A game", command: { cmd: "text", txt: "The gameplay fills your senses . . .", align: "left", lines: 4, url: "https://trasevol-dog.itch.io/embrace", point: [42, 63] } },
			curationRightScreenGlow: { file: "screenHugeGlow.png", frames: 2, frameDelay: 60, position: [26, 32], depthAdjust:8, visible:true },
            curationRightPlacard: { file: "placardGrey.png", frames: 1, position: [48, 48], depthAdjust:12, visible:true, label: "A placard", command: { cmd: "text", txt: "Ayyyyy", align: "left", lines: 4, label: "A huggy game", point: [50, 63] } },
			
			curationLeftScreen: { file: "screenLarge.png", frames: 1, position: [99, 14], depthAdjust:18, visible:true, label: "A game", command: { cmd: "text", txt: "The gameplay fills your senses . . .", align: "left", lines: 4, url: "https://trasevol-dog.itch.io/embrace", point: [99, 31] } },
			curationLeftScreenGlow: { file: "screenLargeGlow.png", frames: 2, frameDelay: 60, position: [89, 4], depthAdjust:8, visible:true },
            curationLeftPlacard: { file: "placardGrey.png", frames: 1, position: [90, 18], depthAdjust:12, visible:true, label: "A placard", command: { cmd: "text", txt: "Ayyyyy", align: "left", lines: 4, label: "A huggy game", point: [86, 31] } },
		},
	},
}
