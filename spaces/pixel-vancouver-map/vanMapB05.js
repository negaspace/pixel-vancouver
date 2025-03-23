module.exports = {
	vanMapB05: {
        bg: "vanMapB05.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [37, 88, 22, 70],
        area: "vanMapAreas.png",
        areaColors: {
            // exits
            hff0000: { cmd: "East", room: "vanMapB06", label: "exit", point: [142, 60], enterPoint: [3, 48], obstacle: false },
			h0000ff: { cmd: "South", room: "vanMapC05", label: "exit", point: [1, 60], enterPoint: [60, 8], obstacle: false },
			hffff00: { cmd: "West", room: "vanMapB04", label: "exit", point: [94, 45], enterPoint: [142, 60], obstacle: false },
			h00ff00: { cmd: "North", room: "vanMapA05", label: "exit", point: [60, 1], enterPoint: [60, 110], obstacle: false },
			
		},
		things: {
			arrowEast: { file: "arrowEast.png", position: [142, 48], obstacle: false },
            arrowWest: { file: "arrowWest.png", position: [3, 48], obstacle: false },
			arrowSouth: { file: "arrowSouth.png", position: [60, 110], obstacle: false },	
			arrowNorth: { file: "arrowNorth.png", position: [60, 1], obstacle: false },	
		},
	},

}