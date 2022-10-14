module.exports = {
    TPCAMapRoom: {
        bg: "labyrinthroom.png",
        avatarScale: 1,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [93, 38, 127, 49],
        area: "labyrinthroom-area-map.png",
		areaColors: {
            // exits
            hff0000: { cmd: "enter", room: "TPCAHallway1", label: "next dream", point: [62, 47], enterPoint: [115, 43], obstacle: false },
			he54c84: { cmd: "text", label: "i dreamt", txt: "of my body bursting open with trees", point: [112, 55], obstacle: false },
			hffff00: { cmd: "text", label: "i dreamt", txt: "of new shapes and possibilities", point: [124, 70], obstacle: false },
			h0000ff: { cmd: "text", label: "i dreamt", txt: "of my world opening up infinitely", point: [91, 41], obstacle: false },
			h99ffe9: { cmd: "text", label: "i dreamt", txt: "we'd become large and fierce", point: [115, 5], obstacle: false },
			h9999ff: { cmd: "text", label: "i dreamt", txt: "of electromagnetic lines connecting us", point: [51, 12], obstacle: false },
			h7e4ce5: { cmd: "text", label: "i dreamt", txt: "we were trapped in a great electric net", point: [35, 41], obstacle: false },
			hff9600: { cmd: "text", label: "i dreamt", txt: "of our bodies aging curled and red", point: [17, 69], obstacle: false },
        },
		things: {
            //sprite spreadsheets only 1 row ok?
            maproom1: { file: "labyrinthroom-1.png", position: [0, 0], depthAdjust:-360, visible: false },
            maproom2: { file: "labyrinthroom-2.png", position: [0, 0], depthAdjust:-360, visible: false },
            maproom3: { file: "labyrinthroom-3.png", position: [0, 0], depthAdjust:-360, visible: false },
            maproom4: { file: "labyrinthroom-4.png", position: [0, 0], depthAdjust:-360, visible: false },
			tree: { file: "labyrinthroom-tree1.png", position: [64, 20], depthAdjust:5 },
			
		},
    },
}