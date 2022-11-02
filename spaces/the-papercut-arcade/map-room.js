module.exports = {
    TPCAMapRoom: {
        bg: "labyrinthroom.png",
        avatarScale: 1,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [93, 40, 128, 47],
        area: "labyrinthroom-area-map.png",
		areaColors: {
            // exits
            hff0000: { cmd: "enter", room: "TPCAHallway1", label: "CHANGE SHAPE", point: [62, 47], enterPoint: [115, 43], obstacle: false },
			h4e4e4e: { cmd: "text", label: "eggs", txt: "we're still carrying our yolks.", point: [104, 45], obstacle: false },
			he54c84: { cmd: "text", label: "i dreamt", txt: "of a dry unknowable land.", point: [104, 55], obstacle: false },
			h00ff23: { cmd: "text", label: "i remember", txt: "a continuity from water to land.", point: [72, 55], obstacle: false },
			hffff00: { cmd: "text", label: "i dreamt", txt: "of my body bursting open with trees.", point: [123, 66], obstacle: false },
			h0000ff: { cmd: "text", label: "i dreamt", txt: "of riverbanks disappearing into infinity.", point: [98, 20], obstacle: false },
			h00ffff: { cmd: "text", label: "i dreamt", txt: "of liquid shapeshifting bodies.", point: [84, 20], obstacle: false },
			hff6d00: { cmd: "text", label: "i dreamt", txt: "of flying like a heron.", point: [18, 95], obstacle: false },
			hff00ee: { cmd: "text", label: "i dreamt", txt: "of the smell of cedar and pine compost.", point: [35, 52], obstacle: false },
			h00ff24: { cmd: "text", label: "!", txt: "kinda busy here!", point: [70, 68], obstacle: false },
			h9c00ff: { cmd: "text", label: "i dreamt", txt: "of going frozen and static plastic mummy.", point: [9, 49], obstacle: false },
			h99ffe9: { cmd: "text", label: "i dreamt", txt: "we'd grow large, fierce, fast.", point: [115, 29], obstacle: false },
			h9999ff: { cmd: "text", label: "i dreamt", txt: "of electromagnetic lines connecting us.", point: [51, 12], obstacle: false },
			h7e4ce5: { cmd: "text", label: "i dreamt", txt: "we were trapped in a great electric net.", point: [35, 41], obstacle: false },
			hff9600: { cmd: "text", label: "i dreamt", txt: "of aging crooked and lovely red.", point: [17, 69], obstacle: false },
        },
		
		things: {
            //sprite spreadsheets only 1 row ok?
            maproom1: { file: "labyrinthroom-1.png", position: [0, 0], depthAdjust:30, visible: false },
            maproom2: { file: "labyrinthroom-2.png", position: [0, 0], depthAdjust:30, visible: false },
            maproom3: { file: "labyrinthroom-3.png", position: [0, 0], depthAdjust:30, visible: false },
            maproom4: { file: "labyrinthroom-4.png", position: [0, 0], depthAdjust:30, visible: false },
			tree: { file: "labyrinthroom-tree1.png", position: [64, 20], depthAdjust:5 },
			tree2: { file: "labyrinthroom-tree1.png", position: [115, 80], depthAdjust:50 },
			ripple: { file: "labyrinth_water.png", frames: 3, frameDelay: 8, position: [49, 65], depthAdjust:-20 },
			waterfall: { file: "labyrinth_waterfall.png", frames: 3, frameDelay: 4, position: [59, 66], depthAdjust:-30 },
			tree: { file: "labyrinthroom-fishOL.png", position: [64, 64], depthAdjust:5 },
			
		},
    },
}