module.exports = {
    TPCAHallway1: {
        bg: "TPCAhallway1.png",
        avatarScale: 1.5,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [80, 97, 50, 88],
        area: "TPCAhallway1-areas.png",
        areaColors: {
            // exits
            
            h00ff00: { cmd: "enter", room: "TPCAMapRoom", label: "Map Room", point: [115, 43], obstacle: false },
            hf000ff: { cmd: "enter", room: "TPCATavern", label: "The Filthy Lyre", point: [11, 42], enterPoint: [113, 86], obstacle: false },
            h55ffff: { cmd: "enter", room: "elevator", label: "Elevator", point: [66, 97], enterPoint: [64, 68], obstacle: false },
	    h009999: { cmd: "enter", room: "TPCAWashRoom", label: "Universal Washroom", point: [115, 80], enterPoint: [11, 83], obstacle: false },
	    hff0000: { cmd: "enter", room: "TPCAHallway2", label: "More Exhibits", point: [67, 20], enterPoint: [66, 84], obstacle: false },	
	
			//placard
            hfeff00: { cmd: "text", label: "The Papercut Arcade", txt: "The Papercut Arcade collective works to create safer spaces to explore creativity and art with like-minded folks. We're proud to be sharing digital real estate with the folks at Heart Projector.", point: [66, 73], align: "center", lines: 6, },
	   h993300: { cmd: "text", label: "Exhibition Text", txt: "Correspondence \n------------/- \nThis exhibition hosts a collection of digital, interactive spaces.\nWorks by Louise Chow, Kay Slater, and Christopher Alan Slater.\n2021", point: [15, 73], align: "center", lines: 8, },

			//didactic panels
		h450000: {cmd: "text", label: "Tour Information Panel", txt: "No tours are currently scheduled", point: [17, 91], align: "center", lines: 1, },
		h666633: {cmd: "text", label: "Exhibit Label", txt: "The Filthy Lyre \nChristopher Alan Slater, 2021", point: [16, 25], align: "center", lines: 2, },
		h6666cc: {cmd: "text", label: "Exhibit Label", txt: "Map Room \nLouise Chow, 2021", point: [113, 35], align: "center", lines: 2, },
		hff9999: {cmd: "text", label: "Exhibit Label", txt: "All Genders Universal Washroom\nKay Slater, 2021\n\nDigital sculpture.\n\nNo budget restrictions, homophobic and transantagonistic policies, or focused-on-code-only facilities managers (and architects) allowed dreaming space.", point: [113, 63], align: "center", lines: 11, },
	
        },
    },

    TPCAHallway2: {
        bg: "TPCAhallway2.png",
        avatarScale: 1.5,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [84, 87, 45, 75],
        area: "TPCAhallway2-areas.png",
        areaColors: {
            // exits
        h7c7c7c: { cmd: "enter", room: "TPCAcheckin", label: "Check-Up Room", point: [11, 48], enterPoint: [38, 62], obstacle: false },
		
		h00ffee: { cmd: "enter", room: "TPCAcheckin", label: "Go to work", point: [117, 48], enterPoint: [86, 67], obstacle: false },
   
        h0000ff: { cmd: "enter", room: "TPCAFireRoom", label: "Bonfire", point: [95, 16], enterPoint: [15, 94], obstacle: false },
		
	    hff0000: { cmd: "enter", room: "TPCAColourRoom", label: "Lost and Found", point: [32, 17], enterPoint: [67, 94], obstacle: false },
		
	    h55ffff: { cmd: "enter", room: "TPCAHallway1", label: "Exhibition Hall South", point: [66, 84], enterPoint: [67, 16], obstacle: false },
		
        hf000ff: { cmd: "enter", room: "powellAndClark", label: "Fire Exit - Alarm Will Not Sound", point: [13, 83], enterPoint: [45, 77], obstacle: false },

			//didactic panels

		h450000: {cmd: "text", label: "Exhibit Label", txt: "Check In\nLouise Chow, 2021", point: [16, 32], align: "center", lines: 2, },
		hff9999: {cmd: "text", label: "Exhibit Label", txt: "Lost and Found\nLouise Chow, 2021\n\A room to find your reflection\n\in an other again.", point: [45, 19], align: "center", lines: 4, },
		hff6600: {cmd: "text", label: "Exhibit Label", txt: "The Bonfire Effect (narrative series)\nKay Slater, 2021\n\nAn exploration of intimacy via pixels, flames, and storytelling.\n\nScheduled story times will be posted on the tour info panel in the main hall. The bonfire can be visited anytime.", point: [82, 20], align: "center", lines: 11, },
		hfeff00: {cmd: "text", label: "Exhibit Label", txt: "Visit our website through\nthis public terminal", point: [112, 72], align: "center", lines: 2, },
                h666633: {cmd: "text", label: "Exit Sign", txt: "", point: [15, 80], align: "center", lines: 1, },
			//digital interface
		h00ff00: {cmd: "text", label: "Digital Terminal", txt: "You browse through past projects \nby The Papercut Arcade.", point: [114, 85], align: "center", lines: 2, },

        },
    },

}