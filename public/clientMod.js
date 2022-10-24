/*
WARNING: THIS IS STILL EXPERIMENTAL STUFF
I want to have the ability to assign specific behaviors to each room without messing with the main engine
So this is a file for client-side modifications (mods). There is one for the server side as well.
Their naming convention is roomIdFunction.
The functions are called by the engine at crucial points, only if they exist. 
*/

//when my players joins the game for the first time, after everything in the room is initialized
//called also for lurk mode (nickName == "")

var familyRoles;
var familyIntro = "The Family Room is for roleplay.\n"
var rolesInfo = {
    wife: ["Emily", "You are Emily, a restless housewife."],
    husband: ["Dick", "You are Richard and you are back from work."],
    child1: ["Sam", "You are Samuel and you are upset"],
    child2: ["Grace", "You are Grace, a princess."],
    child3: ["Phoebe", "You are Phoebe, and life sucks."],
    uncle: ["Uncle", "You are the Uncle and you don't remember what you were doing."],
    milkman: ["Milkman", "You are the Milkman, and you are delivering milk."],
    boyfriend: ["Jamal", "You are Jamal, Phoebe's new boyfriend."],
    fly: ["Fly", "You are just a fly on the wall."],
}

function initMod(playerId, roomId) {
    print("Mod: " + players[playerId].nickName + " (you) joined the game at " + roomId);

    //prevent duplicate listeners
    if (!socket.hasListeners('musicOn')) {

        socket.on('musicOn', function (beat) {

            SOUNDS["beat" + beat].loop();
            bg.play();
        });

        //music is playing
        socket.on('musicEnter', function (beat) {
            //start from random
            SOUNDS["beat" + beat].loop();
            bg.play();
        });

        socket.on('musicOff', function (beat) {
            print("The MOD module communicates with a custom socket event: music off");
            //just to be sure I stop all the beats
            SOUNDS["beat1"].stop();
            SOUNDS["beat2"].stop();
            SOUNDS["beat3"].stop();
            SOUNDS.DJStop.play();
            bg.rewind();
            bg.stop();
        });


        //music is playing stop all bit without record scratch
        socket.on('musicExit', function (beat) {
            SOUNDS["beat1"].stop();
            SOUNDS["beat2"].stop();
            SOUNDS["beat3"].stop();
        });



        socket.on('updateRoles', function (newcomerId, fr) {

            //keep track of the roles
            familyRoles = fr;
            var newcomerAssigned = false;


            //change all the sprites just to be sure
            for (var roleId in familyRoles) {
                var rolePlayer = familyRoles[roleId];

                //role assigned
                if (rolePlayer != "") {
                    print(rolePlayer + " is roleplaying as " + roleId);
                    if (players[rolePlayer] != null) //player exists
                    {
                        //newcomer has a role
                        if (newcomerId == rolePlayer)
                            newcomerAssigned = true;

                        changeCharacter(rolePlayer, roleId, roleId + "Walk", roleId + "Emote");

                        //newcomer is me > intro text
                        if (newcomerId == me.id) {
                            longText = familyIntro + rolesInfo[roleId][1];
                            longTextLines = -1;
                            longTextAlign = "center";
                        }
                    }
                }
            }

            //server doesn't bother to keep track of spectators so all newcomers without roles are flies
            if (!newcomerAssigned) {

                changeCharacter(newcomerId, "fly", "flyWalk", "flyEmote");

                if (newcomerId == me.id) {
                    longText = familyIntro + rolesInfo.fly[1];
                    longTextLines = -1;
                    longTextAlign = "center";
                }

            }

        });

    }

}

//roomnameEnter: called when a player enters a room, after all the normal operations
//called also for lurk mode (nickName == "")
function experimentsEnter(playerId, roomId) {
    print("MOD: " + players[playerId].nickName + " entered room " + roomId);

    //a full screen welcome text appears 
    longText = "Welcome " + players[playerId].nickName;
    longTextLines = -1;
    longTextAlign = "center";
}

//roomnameExit: called right before a player exits or disconnects
function experimentsExit(playerId) {
    print("MOD: " + players[playerId].nickName + " exited room " + roomId);
}

//called every frame in a specific room - beware: this is client side, everything non deterministic and non server-driven
//may misalign the players clients
function experimentsUpdate() {
    //print("MOD: updating experiments");
}

//roomnameTalk: called when somebody in the room talks, passes player object and the new bubble (before it's added to the stack and before the sound is made)
function experimentsTalk(playerId, bubble) {
    print("MOD: " + players[playerId].nickName + " said " + bubble.message);

    //overwrites the color
    bubble.color = color("#FFFFFF");
    //all bubbles show up in the center and lines are not drawn
    /*
    bubble.x = WIDTH / 2 - bubble.w / 2;
    bubble.y = HEIGHT / 2;
    bubble.px = 0;
    bubble.py = 0;
    */
}

//this can override or modify the normal player drawing function
function experimentsDrawSprite(playerId, sprite, drawingFunction) {
    //print("MOD: " + players[playerId].nickName + " being drawn experimentally " + sprite.width); //let's not call this at every frame

    //the normal drawing function comment this out to see the examples below
    drawingFunction();

    /*
    //don't try this
    tint(random(0, 255), random(0, 255), random(0, 255));
    drawingFunction();
    noTint();
    */

    //draw a square
    /*
    fill(0);
    rect(0, 0, 10, 10);
    */

    /*
    //sprites drawn horizontally and 20 pixel above the grund
    push();
    translate(0, -20);
    angleMode(DEGREES);
    rotate(90);
    //the original drawing function
    drawingFunction();
    pop();
    */

}

/** things use the pre-stretch resolution
 * for their positions, where players use
 * the post-stretch resolution */
function getThingPosition (thing) {
  return thing.position
    .map(n => n * ASSET_SCALE)
}

function getThingPosition (thing, normalizedPositionInRect) {
	var dimensionScale = [ASSET_SCALE, ASSET_SCALE];
	if(isDefined(thing.frames)) {
		dimensionScale[0] *= 1.0 / thing.frames;
	}
	
	return [
		(thing.position[0] * ASSET_SCALE + normalizedPositionInRect[0] * thing.spriteGraphics.width * dimensionScale[0]),
		(thing.position[1] * ASSET_SCALE + normalizedPositionInRect[1] * thing.spriteGraphics.height * dimensionScale[1])
	];
}

function getDistanceBetween (player, position) {
  const { x: x1, y: y1 } = player // players have x, y
  const { x: x2, y: y2 } = position

  return distanceFormula(x1, y1, x2, y2)
}

function distanceFormula (x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

function isNil (obj) {
  return obj === undefined || obj === null
}

function isDefined (obj) {
  return !isNil(obj)
}

function ensure (value, fallback) {
  return isNil(value) ? fallback : value
}

function getSculptureSprite () {
  const roomSprites = getSprites()

  return roomSprites
    .filter((sprite) => ensure(sprite.id, '').includes('sculpture'))
    .find((sculpture) => sculpture.visible)
}

function clamp (min, value, max) {
  return Math.max(Math.min(value, max), min)
}

/** prototyping the fire room's color shifting behaviour */
function firstFloorDrawSprite(playerId, sprite, drawingFunction) {
  if (players[playerId] != null) {
    const player = players[playerId]
    const sprite = getSculptureSprite()

    if (isDefined(sprite)) {
      const distance = getDistanceBetween(player, sprite.position)

      // get a value between 0 and 150 which is roughly correct
      // for the size of the room at the time of thie writing (2020-09-16)
      const value = clamp(0, distance - 50, 150) / 150
      const tintValue = (1 - value) * 255

      push();
      tint(tintValue, tintValue, tintValue);
      drawingFunction();
      noTint();
      pop();
    } else {
      drawingFunction();
    }
  }
}

// BRENDAN STUFF START

var curationData = {
    rooms: {
        oldspaceMain: {
            right: {
                thingId: "Right",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"I Was A Teenage Exocolonist",
				placardDescriptionText:"\"Coming of age on a faraway planet.\"",
				placardAuthorText:"A videogame by Northway Games",
				gameplayText:"The gameplay1 fills your senses...",
				gameplayUrl:"https://exocolonist.com/"
            },
            left: {
                thingId: "Left",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"Mossfield Origins",
				placardDescriptionText:"\"Regeneration and community in a cozy city builder.\"",
				placardAuthorText:"A videogame by Studio Any Percent",
				gameplayText:"The gameplay2 fills your senses...",
				gameplayUrl:"https://anypercent.studio/mossfield-origins/"
            },
			tableLeft: {
                thingId: "TableLeft",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"Hill Agency: PURITY/decay",
				placardDescriptionText:"\"Mystery in a cybernoir Indigenous future..\"",
				placardAuthorText:"A videogame by Achimostawinan Games",
				gameplayText:"The gameplay3 fills your senses...",
				gameplayUrl:"https://achimogames.itch.io/hill-agency-puritydecay"
            },
			tableRight: {
                thingId: "TableRight",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"River Sturge",
				placardDescriptionText:"\"..This fish dreams of being the BIGGEST.\"",
				placardAuthorText:"A videogame by Kyle Van Winkoop",
				gameplayText:"The gameplay4 fills your senses...",
				gameplayUrl:"https://gamesinaction.squarespace.com/kyle-van-winkoop"
            },
            projector: {
                thingId: "Projector",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"Shape of the World",
				placardDescriptionText:"\"..a forest of sound and light will spring up around you..\"",
				placardAuthorText:"A videogame by Stu Maxwell",
				gameplayText:"The gameplay5 fills your senses...",
				gameplayUrl:"http://www.shapeoftheworldgame.com/game"
            }
        },
		oldspaceLounge: {
			left: {
                thingId: "Left",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"Shock Lobster",
				placardDescriptionText:"\"An aquaventure for the Game Boy!\"",
				placardAuthorText:"A videogame by tbsp",
				gameplayText:"The gameplay6 fills your senses...",
				gameplayUrl:"https://tbsp.itch.io/shock-lobster"
            },
			left2: {
                thingId: "Left2",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"Circuit Superstars",
				placardDescriptionText:"\"A top-down racer built by racing fans, for racing fans.\"",
				placardAuthorText:"A videogame by Original Fire Games",
				gameplayText:"The gameplay6 fills your senses...",
				gameplayUrl:"https://www.circuit-superstars.com/"
            },
            right: {
                thingId: "Right",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"Tux and Fanny",
				placardDescriptionText:"\"... you can also just play as a cat!\"",
				placardAuthorText:"A videogame by Gabriel Koenig & Alvert Birney",
				gameplayText:"The gameplay7 fills your senses...",
				gameplayUrl:"https://meansinteractive.itch.io/tux-and-fanny"
            }
        },
		oldspaceBar: {
			left: {
                thingId: "Left",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"Art of Rally",
				placardDescriptionText:"\"Race in the golden era of rally.\"",
				placardAuthorText:"A videogame by FunSelektor",
				gameplayText:"The gameplay8 fills your senses...",
				gameplayUrl:"https://artofrally.com/"
            },
			Right: {
                thingId: "Right",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"Stockroom Scramble",
				placardDescriptionText:"\"..A gutsy homage to handheld electronic games..\"",
				placardAuthorText:"A videogame by Playful Fox Games",
				gameplayText:"The gameplay8 fills your senses...",
				gameplayUrl:"https://www.playfulfoxgames.com/stockroom-scramble"
            },
			projector: {
                thingId: "Projector",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"Stamped: an anti travel game",
				placardDescriptionText:"\"..this is about real ongoing places, & real ongoing struggles..\"",
				placardAuthorText:"A videogame by Transpacific Confab",
				gameplayText:"The gameplay9 fills your senses...",
				gameplayUrl:"https://drchrisp.itch.io/stamped-an-anti-travel-game"
            }
		},
		oldspaceOutside: {
			mainframe: {
                thingId: "Mainframe",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"Hoops into Dreams",
				placardDescriptionText:"\A whimsical pseudo-realistic basketball-like game.\"",
				placardAuthorText:"A videogame by Mokesmoe",
				gameplayText:"The gameplay10 fills your senses...",
				gameplayUrl:"https://gamesinaction.squarespace.com/hoops-into-dreams"
            },
			mainframe2: {
                thingId: "Mainframe2",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"Glitchhikers: The Spaces Between",
				placardDescriptionText:"\"4 introspective, freeform journeys under moonlight.\"",
				placardAuthorText:"A videogame by Silverstring Media",
				gameplayText:"The gameplay10 fills your senses...",
				gameplayUrl:"https://www.glitchhikers.com/"
            },
			left: {
                thingId: "Left",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"Street Uni X",
				placardDescriptionText:"\"Extreme street cyling in PS1 style.\"",
				placardAuthorText:"A videogame by daffodil & friends",
				gameplayText:"The gameplay8 fills your senses...",
				gameplayUrl:"https://daffodil.itch.io/street-uni-x"
            },
			Right: {
                thingId: "Right",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"Golf on Mars",
				placardDescriptionText:"\"Do you think we will ever discover golf on Mars?\"",
				placardAuthorText:"A videogame by Justin Smith",
				gameplayText:"The gameplay8 fills your senses...",
				gameplayUrl:"https://captaingames.itch.io/golf-on-mars"
            },
			Right2: {
                thingId: "Right2",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"Caravan",
				placardDescriptionText:"\"Meet the gods as a travelling merchant.\"",
				placardAuthorText:"A videogame by Joy, Josephine & Gordon @ Epic Story Interactive",
				gameplayText:"The gameplay8 fills your senses...",
				gameplayUrl:"https://onionclub.itch.io/caravan"
            }
		},
		stairwell2: {
            Right: {
                thingId: "Right",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"After Work",
				placardDescriptionText:"\"After work hours... curiosity gets the better of you.\"",
				placardAuthorText:"A videogame by Catherine Winters",
				gameplayText:"The gameplay1 fills your senses...",
				gameplayUrl:"https://gamesinaction.squarespace.com/after-work"
            },
			Left: {
                thingId: "Left",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"Minetest Classroom",
				placardDescriptionText:"\"An open source voxel game engine.\"",
				placardAuthorText:"A videogame by Paul Pickell",
				gameplayText:"The gameplay1 fills your senses...",
				gameplayUrl:"https://gamesinaction.squarespace.com/minetest-classroom"
            }
		},
		stairwell: {
            Right: {
                thingId: "Right",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"Cis Penance",
				placardDescriptionText:"\"..Interactive documentary, 60 interviews with transgender people..\"",
				placardAuthorText:"A videogame by Zoyander Street",
				gameplayText:"The gameplay1 fills your senses...",
				gameplayUrl:"https://zoy.itch.io/cispenance"
            },
			Right2: {
                thingId: "Right2",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"Grant Haffner Fangame",
				placardDescriptionText:"\"Based on paintings by Grant Haffner.\"",
				placardAuthorText:"A videogame by Malcolm MacDonald",
				gameplayText:"The gameplay1 fills your senses...",
				gameplayUrl:"https://malcolmmacdonald.itch.io/grant-haffner-fangame"
            },
			Left: {
                thingId: "Left",
                screenGradientPath:"assets/monitorGradientGlow1.png",
				placardTitleText:"Cordychosis",
				placardDescriptionText:"\"One room and time travel.\"",
				placardAuthorText:"A videogame by Jessi Ross",
				gameplayText:"The gameplay1 fills your senses...",
				gameplayUrl:"https://mrhoneybunch.com/games/"
            }
        }
    }
}

// ALL THE OLD SPACE ROOM UPDATE METHODS START HERE

// oldSpaceMain
function oldspaceMainEnter(playerId, roomId)
{
	curatedRoomEnter(playerId, roomId);
}

function oldspaceMainUpdate() {
	curatedRoomUpdate("oldspaceMain");
}

function oldspaceMainDrawThing(thingId, sprite, drawingFunction)
{
	curatedRoomDrawThing("oldspaceMain", thingId, sprite, drawingFunction);
}

// oldSpaceLounge
function oldspaceLoungeEnter(playerId, roomId)
{
	curatedRoomEnter(playerId, roomId);
}

function oldspaceLoungeUpdate() {
	curatedRoomUpdate("oldspaceLounge");
}

function oldspaceLoungeDrawThing(thingId, sprite, drawingFunction)
{
	curatedRoomDrawThing("oldspaceLounge", thingId, sprite, drawingFunction);
}

// oldSpaceBar
function oldspaceBarEnter(playerId, roomId)
{
	curatedRoomEnter(playerId, roomId);
}

function oldspaceBarUpdate() {
	curatedRoomUpdate("oldspaceBar");
}

function oldspaceBarDrawThing(thingId, sprite, drawingFunction)
{
	curatedRoomDrawThing("oldspaceBar", thingId, sprite, drawingFunction);
}

// oldSpaceOutside
function oldspaceOutsideEnter(playerId, roomId)
{
    if (playerId == me.id) {
		var p = players[playerId];
		p.showGlitchMoon = (Math.random() > 0.9);
		
        var roomSprites = getSprites();
        for (var i = 0; i < roomSprites.length; i++) {
			
			if (roomSprites[i].id == "glitchMoon") {
				roomSprites[i].visible = p.showGlitchMoon;
			}
        }
    }
	
	curatedRoomEnter(playerId, roomId);
}

function oldspaceOutsideUpdate()
{	
	if(me.showGlitchMoon) {
		const sprite = getSprites()
			.filter((sprite) => ensure(sprite.id, ''))
			.find((s) => s.id == "glitchMoon");
		
		if (isDefined(sprite)) {
			sprite.visible = (Math.random() > 0.001);
		}
	}
	
	curatedRoomUpdate("oldspaceOutside");
}

function oldspaceOutsideDrawThing(thingId, sprite, drawingFunction)
{
	curatedRoomDrawThing("oldspaceOutside", thingId, sprite, drawingFunction);
}

// stairwell1 and stairwell2

function stairwellEnter(playerId, roomId)
{
	curatedRoomEnter(playerId, roomId);
}

function stairwellUpdate() {
	curatedRoomUpdate("stairwell");
}

function stairwellDrawThing(thingId, sprite, drawingFunction)
{
	curatedRoomDrawThing("stairwell", thingId, sprite, drawingFunction);
}

function stairwell2Enter(playerId, roomId)
{
	curatedRoomEnter(playerId, roomId);
}

function stairwell2Update() {
	curatedRoomUpdate("stairwell2");
}

function stairwell2DrawThing(thingId, sprite, drawingFunction)
{
	curatedRoomDrawThing("stairwell2", thingId, sprite, drawingFunction);
}


// CURATED ROOM FUNCTIONS START HERE 

function curatedRoomEnter(playerId, roomId)
{
	const roomCurationData = curationData.rooms[roomId];
	
	if (playerId == me.id) {
		for (var m in roomCurationData) {
		    const cd = roomCurationData[m];
			cd.screenGradientImg = loadImage(cd.screenGradientPath);
			
			const screenThingId = "curation" + cd.thingId + "Screen";
			const placardThingId = "curation" + cd.thingId + "Placard";
			
			if(isDefined(ROOMS[roomId].things[placardThingId].command.txt)) {
				var placardString = "";
				
				if(isDefined(cd.placardTitleText)) {
					placardString += cd.placardTitleText + '\n';
				} else {
					placardString += "An untitled videogame\n";
				}
				
				if(isDefined(cd.placardAuthorText)) {
					placardString += cd.placardAuthorText + '\n';
				}
				
				if(isDefined(cd.placardDescriptionText)) {
					placardString += cd.placardDescriptionText + '\n';
				}
				
				if(placardString == "") {
					placardString = "An unmarked placard.";
				}
				
				ROOMS[roomId].things[placardThingId].command.txt = placardString;
			}
			
			if(isDefined(ROOMS[roomId].things[screenThingId].command.txt)) {
				var gameplayString = "";
				
				if(isDefined(cd.gameplayText)) {
					gameplayString += cd.gameplayText;
				}
				
				if(gameplayString == "") {
					gameplayString = "The gameplay fills your senses...";
				}
				
				ROOMS[roomId].things[screenThingId].command.txt = gameplayString;
			}
			
			if(isDefined(ROOMS[roomId].things[screenThingId].command.url)) {
				ROOMS[roomId].things[screenThingId].command.url = cd.gameplayUrl;
			}
		}
    }
}

function curatedRoomUpdate(roomId)
{
	const roomSprites = getSprites();
	
	/*
	const tintGradient = roomSprites
		.filter((sprite) => ensure(sprite.id, '').includes('tintGradient'))
		.find((s) => true);
	
	const tintImage = tintGradient.animation.getFrameImage();
	
	const tintColor = tintImage.get(0,0);
	*/
	
	const roomCurationData = curationData.rooms[roomId];
	
	var closestCuration = null;
	closestDistance = 0.0;
	for (var roomName in roomCurationData) {
		const cd = roomCurationData[roomName];
		
		if(!isDefined(ROOMS[roomId].things)) throw "RoomDataError: missing things array in " + roomId;
		
		const screenThingName = "curation" + cd.thingId + "Screen"
		const placardThingName = "curation" + cd.thingId + "Placard";
		
		if(!isDefined(ROOMS[roomId].things[screenThingName])) throw "RoomDataError: missing thing in " + roomId + ": " + screenThingName;
		if(!isDefined(ROOMS[roomId].things[placardThingName])) throw "RoomDataError: missing thing in " + roomId + ": " + placardThingName;
	    
		checkMarker(ROOMS[roomId].things["curation" + cd.thingId + "Screen"]);
		checkMarker(ROOMS[roomId].things["curation" + cd.thingId + "Placard"]);
		
		function checkMarker(marker)
		{
			if(marker != null) {
				const pcPosition = marker.command.point;
				const distance = distanceFormula(pcPosition[0] * ASSET_SCALE, pcPosition[1] * ASSET_SCALE, me.x, me.y);

				if(closestCuration == null || distance < closestDistance) {
					closestCuration = cd;
					closestDistance = distance;
				}
			}
		}
	}
	
	var highlightedCuration = null;
	
	if(closestDistance < 50) {
		highlightedCuration = closestCuration;
	}
	
	for (var roomName in roomCurationData)
	{
        const cd = roomCurationData[roomName];

        var screen = ROOMS[roomId].things["curation" + cd.thingId + "Screen"];
        if(screen != null) {
            screen.visible = true;
        }
		
        var placard = ROOMS[roomId].things["curation" + cd.thingId + "Placard"];
        if(placard != null) {
            placard.visible = true;
        }
        
		var screenGlow = ROOMS[roomId].things["curation" + cd.thingId + "ScreenGlow"];
		var isHighlighted = cd === highlightedCuration;
		
		if(isHighlighted)
		{
            if(screenGlow != null) {
				const screenLength = cd.screenGradientImg.width * cd.screenGradientImg.height;
				
				//screenGlow.visible = true;
				
                if(screenGlow.index == null) {
                    screenGlow.index = 0;
                } else {
                    screenGlow.index = (screenGlow.index + 1) % screenLength;
                }

                const x = screenGlow.index % cd.screenGradientImg.width;
                const y = Math.floor(screenGlow.index / cd.screenGradientImg.width);
                const pixel = cd.screenGradientImg.get(x, y);

                screenGlow.tint = color(pixel[0], pixel[1], pixel[2], pixel[3]);
            }

            if(placard != null) {
				const placardLength = cd.screenGradientImg.width * cd.screenGradientImg.height;
				
                if(placard.index == null) {
                    placard.index = 1;
                } else {
                    placard.index = (placard.index + 1) % placardLength;
                }

                const x = placard.index % cd.screenGradientImg.width;
                const y = Math.floor(placard.index / cd.screenGradientImg.width);
                const pixel = cd.screenGradientImg.get(x, y);
				
				const saturatePercent = 0.2 * (pixel[3] / 255);
				
                placard.tint = lerpColor(color("#e2e1e8ff"), color(pixel[0], pixel[1], pixel[2]), saturatePercent);
            }
		}
		else
		{
            if(screen != null) {
                screen.tint = "#ffffffff";
            }
			
			if(screenGlow != null) {
                screenGlow.tint = "#00000000";
            }

            if(placard != null) {
                placard.tint = "#e2e1e8ff";
            }
		}
	}
}

function curatedRoomDrawThing(roomId, thingId, sprite, drawingFunction)
{
	const thing = ROOMS[roomId].things[thingId];
	if(thing.tint != null) {
		tint(thing.tint);
	}
	
	drawingFunction();
}

// BRENDAN STUFF END

function setBubbleMessageAndUpdateWidth(bubble, message) {
  bubble.message = message

  bubble.tw = textWidth(bubble.message);
  bubble.w = round(bubble.tw + TEXT_PADDING * 2);

  bubble.x = round(bubble.px - bubble.w / 2);
  if (bubble.x + bubble.w + BUBBLE_MARGIN > width) {
    bubble.x = width - bubble.w - BUBBLE_MARGIN
  }
  if (bubble.x < BUBBLE_MARGIN) {
    bubble.x = BUBBLE_MARGIN;
  }
}

function firstFloorTalk (playerId, bubble) {
  if (isDefined(playerId) && playerId != me.id) {
    const player = players[playerId]

    const distance = getDistanceBetween(me, player)
    console.log(distance)

    if (distance > 30) {
      setBubbleMessageAndUpdateWidth(bubble, '...')
    }
  }
}

function mirrorRoomDrawSprite(playerId, sprite, drawingFunction) {

    if (players[playerId] != null) {
        //original
        //sprite.mirrorX(1);
        drawingFunction();

        //mirrored
        push();
        scale(-1, 1);

        if (sprite.mirrorX() == 1) {
            translate(players[playerId].x - WIDTH / 2, 0);
        }
        else {
            translate(WIDTH / 2 - players[playerId].x, 0);
        }
        //the original drawing function
        drawingFunction();
        pop();
    }
}

function mirrorRoomTalk(playerId, bubble) {
    var p = players[playerId];
    var bx = (WIDTH - p.x);//(p.x < WIDTH / 2) ? (WIDTH - p.x) : (p.x - WIDTH / 2);

    var messageReverse = bubble.message.split("").reverse().join("");
    var mirrorBubble = new Bubble(bubble.pid, messageReverse, p.labelColor, bx, p.y, bubble.offY);
    mirrorBubble.color = bubble.color;
    pushBubbles(mirrorBubble);
    bubbles.push(mirrorBubble);

    //remove lines
    bubble.px = -1;
    bubble.py = -1;

}

function BonfireEnter(playerId, roomId) {
    if (playerId == me.id) {
        longText = "The shadows grow deeper as you approach the fire.";
        longTextLines = -1;
        longTextAlign = "center";
    }
}

function ForestPathWaterfall2Enter(playerId, roomId) {
    if (playerId == me.id) {
        longText = "SPLASH! \nYou swim back to the peer and eventually dry off.";
        longTextLines = -1;
        longTextAlign = "center";
    }
}

function TPCATavernEnter(playerId, roomId) {
    if (playerId == me.id) {
        longText = "The smell of the fireplace greets you once again.";
        longTextLines = -1;
        longTextAlign = "center";
    }
}

function MouseTunnelA1Enter(playerId, roomId) {
    if (playerId == me.id) {
        longText = "You've wandered into the mouse tunnels.\n\nWait, where do they lead?";
        longTextLines = -1;
        longTextAlign = "center";
    }
}

function MouseTunnelB1Enter(playerId, roomId) {
    if (playerId == me.id) {
        longText = "You've wandered into the mouse tunnels.\n\nWait, where do they lead?";
        longTextLines = -1;
        longTextAlign = "center";
    }
}

function MouseTunnelC1Enter(playerId, roomId) {
    if (playerId == me.id) {
        longText = "You've wandered into the mouse tunnels.\n\nWait, where do they lead?";
        longTextLines = -1;
        longTextAlign = "center";
    }
}

//Verily, Forsooth
function TPCATavernTalk(playerId, bubble) {
    if (playerId != me.id) {

        var diceroll = random(1,100);
        var verily = "";
            if (diceroll < 1) {
                verily = "Don't ask about the painting...";
            }
            else if (diceroll < 10) {
                verily = "Tell us a tale!";
	    }
	    else if (diceroll < 15) {
                verily = "Was that a mouse?!";
	    }
            else if (diceroll < 20) {
                verily = "More ale!";
	    }
	    else if (diceroll < 25) {
                verily = "Creepy portrait...";
	    }
            else if (diceroll < 30) {
                verily = "Bee-yoo-tee-ful!";
	    }
	    else if (diceroll < 35) {
                verily = "I think I'll have a ploughman's...";
	    }
            else if (diceroll < 40) {
                verily = "Bwahaha!";
	    }
            else if (diceroll < 45) {
                verily = "Why it's his missus innit?";
	    }
            else if (diceroll < 50) {
                verily = "What timeizzit?";
            }
	    else if (diceroll < 55) {
                verily = "Then he did it again!";
	    }
            else if (diceroll < 60) {
                verily = "Nah, this one's on me!";
            }
	    else if (diceroll < 65) {
                verily = "No he didn't!";
	    }
            else if (diceroll < 70) {
                verily = "I.P.A = horsepiss!";
            }
	    else if (diceroll < 75) {
                verily = "Big as me forearm!";
	    }
            else if (diceroll < 80) {
                verily = "Hic!";
            }
	    else if (diceroll < 85) {
                verily = "Not sure why it's called that.";
	    }
            else if (diceroll < 90) {
                verily = "Bla blah bla...";
	    }
	    else if (diceroll < 95) {
                verily = "Bollocks!";
	    }
            else if (diceroll < 100) {
                verily = "Some who enter the basement never return...";
	    }
            else {
                verily = "Hasht thousht heard the one bout the three-legged knight?";
            }

        bubble.message = verily;
        bubble.tw = textWidth(bubble.message);
        bubble.w = round(bubble.tw + TEXT_PADDING * 2);

        bubble.x = round(bubble.px - bubble.w / 2);
        if (bubble.x + bubble.w + BUBBLE_MARGIN > width) {
            bubble.x = width - bubble.w - BUBBLE_MARGIN
        }
        if (bubble.x < BUBBLE_MARGIN) {
            bubble.x = BUBBLE_MARGIN;
        }

    }

}

function censorshipRoomEnter(playerId, roomId) {
    if (playerId == me.id) {
        longText = "In the Censorship Room each word can only be uttered once and never again.";
        longTextLines = -1;
        longTextAlign = "center";
    }
}

function darkRoomEnter(playerId, roomId) {
    if (playerId == me.id) {
        longText = "The Dark Room is only for cybersex. You must be 18 years or older to enter.";
        longTextLines = -1;
        longTextAlign = "center";
    }
}


function rhymeRoomEnter(playerId, roomId) {
    if (playerId == me.id) {
        longText = "In the Rhyme Room you can only rhyme with the sentences in the air.\nNo repeats, no made-up words. The best poet wins.";
        longTextLines = -1;
        longTextAlign = "center";
        bg.rewind();
        bg.stop();
    }
}

function VIPRoomEnter(playerId, roomId) {
    if (playerId == me.id) {
        longText = "Only 3 visitors are allowed in the VIP room. First in, first out.";
        longTextLines = -1;
        longTextAlign = "center";
    }
}

function VIPRoomExit(playerId) {
    //stop music before you leave, if any
    //if (ROOMS.VIProom.musicLoop != null) {
    ROOMS.VIProom.musicLoop.stop();
    //}
}



//when ANYBODY Enters
function thirdFloorEnter(playerId, sprite, drawingFunction) {
    //somebody else is entering - turn into sheep
    if (playerId != me.id) {
        turnToSheep(playerId);
    }
}


//called when I receive data from a player already in the room
function thirdFloorIntro(playerId, roomId) {
    turnToSheep(playerId);
}

function turnToSheep(playerId) {
    var p = players[playerId];

    //sheepIdle has been preloaded via DATA
    p.sheepWalkAnimation = loadAnimation(loadSpriteSheet(IMAGES.sheepWalk, 11, 18, 3));
    p.sheepIdleAnimation = loadAnimation(loadSpriteSheet(IMAGES.sheepIdle, 11, 18, 2));
    removeSprite(p.sprite);
    p.sprite = createSprite(10, 10);
    p.sprite.scale = ASSET_SCALE;
    p.sprite.depthOffset = 18 / 2;
    p.sprite.addAnimation('walk', p.sheepWalkAnimation);
    p.sprite.addAnimation('emote', p.sheepIdleAnimation);
}

//BAAA AAA AAAAA
function thirdFloorTalk(playerId, bubble) {
    if (playerId != me.id) {

        var l = bubble.message.length - 1;
        var baa = "B";
        for (var i = 0; i < l; i++) {
            if (bubble.message[i] != " ")
                baa += "A";
            else
                baa += " ";
        }

        bubble.message = baa;
        bubble.tw = textWidth(bubble.message);
        bubble.w = round(bubble.tw + TEXT_PADDING * 2);

        bubble.x = round(bubble.px - bubble.w / 2);
        if (bubble.x + bubble.w + BUBBLE_MARGIN > width) {
            bubble.x = width - bubble.w - BUBBLE_MARGIN
        }
        if (bubble.x < BUBBLE_MARGIN) {
            bubble.x = BUBBLE_MARGIN;
        }

    }

}


//called when I receive data from a player already in the room
//should arrive
function familyRoomIntro(playerId, roomId) {
    var assigned = false;
    //must override the normal intros
    //check this person's role
    for (var roleId in familyRoles) {
        var rolePlayer = familyRoles[roleId];

        //role assigned
        if (rolePlayer == playerId) {
            //print("Ah ha " + playerId + " is " + roleId);
            changeCharacter(rolePlayer, roleId, roleId + "Walk", roleId + "Emote");
            assigned = true;
        }

    }

    if (!assigned)
        changeCharacter(playerId, "fly", "flyWalk", "flyEmote");
}


//changes the appearance of the character, only for this room
function changeCharacter(playerId, roleId, walkSS, emoteSS) {
    var p = players[playerId];

    print(playerId + " changes appearance becoming " + roleId);
    //spritesheet have been preloaded, standard size and animation avatar
    p.altWalkAnimation = loadAnimation(loadSpriteSheet(IMAGES[walkSS], AVATAR_W, AVATAR_H, 4));
    p.altEmoteAnimation = loadAnimation(loadSpriteSheet(IMAGES[emoteSS], AVATAR_W, AVATAR_H, 2));

    removeSprite(p.sprite);

    p.sprite = createSprite(10, 10, 10, 10);
    p.sprite.scale = ASSET_SCALE;
    p.sprite.addAnimation('walk', p.altWalkAnimation);
    p.sprite.addAnimation('emote', p.altEmoteAnimation);
    p.sprite.label = rolesInfo[roleId][0];
    p.sprite.depthOffset = AVATAR_H / 2;

    if (roleId != "fly") {
        p.sprite.onMouseOver = function () {
            rolledSprite = this;
        };

        p.sprite.onMouseOut = function () {
            if (rolledSprite == this)
                rolledSprite = null;
        };
    }
}


//the sculpture in my first floor is randomize between the 4 variations
//appears differently to different users but always the same in the same browser
function firstFloorEnter(playerId, roomId) {
    if (playerId == me.id) {

        var s = localStorage.getItem("sculpture");

        if (s == null) {
            s = floor(random(1, 5));
            window.localStorage.setItem("sculpture", s);
        }

        //getSprites is a p5 play function
        var roomSprites = getSprites();

        for (var i = 0; i < roomSprites.length; i++) {
            if (roomSprites[i].id != null)
                if (roomSprites[i].id == "sculpture" + s) {
                    roomSprites[i].visible = true;
                }
        }
    }
}


//Louise fucks around here

var mapRoomImage;

function TPCAApartmentsTalk (playerId, bubble) {
  if (isDefined(playerId) && playerId != me.id) {
    const player = players[playerId]

    const distance = getDistanceBetween(me, player)
    console.log(distance)

    if (distance > 10) {
      setBubbleMessageAndUpdateWidth(bubble, [Math.floor(random(0, global.TPCAApartmentsTalk.length - 1))]);
	  
    }
  }
}


function TPCAMapRoomEnter(playerId, roomId) {
	
		var randomText = floor(random(1, 2));
		
		if (randomText == 1) {    
			longText = "We dreamt together\nfollowing invisible lines\nfrom ancient memory\nback home\nin new bodies";
			longTextLines = -1;
			longTextAlign = "center";
		} else {
			longText = "We dreamt together\nfollowing invisible lines\nfrom ancient memory\nback home\nin new bodies";
			longTextLines = -1;
			longTextAlign = "center";
		}


	
    if (playerId == me.id) {
	
        var s = localStorage.getItem("maproom");

        if (s == null) {
            s = floor(random(1, 5));
            window.localStorage.setItem("maproom", s);
        }

        //getSprites is a p5 play function
        ROOMS[roomId].things["maproom" + s].visible = true;
    }
}

function TPCAColourRoomDrawSprite (playerId, sprite, drawingFunction) {
	const player = players[playerId]
	const accumulatedLight = [0.0, 0.0, 0.0];
	
	const distanceScale = 1.0 / 32.0;
	const attenuationA = 0;
	const attenuationB = 2;
	const attenuationFloor = 0.1;
	
	for (var thingName in ROOMS.TPCAColourRoom.things){
		const thing = ROOMS.TPCAColourRoom.things[thingName];
		
		if (isDefined(thing.lightEmissionColour)) {
			const thingPos = getThingPosition(thing, [0.5, 0.5]);
			const distanceFromThings = distanceFormula(player.x, player.y - player.sprite.height * 0.5, thingPos[0], thingPos[1]) * distanceScale;
			const attenuationValue = Math.max(0, 1.0 / (1.0 + attenuationA * distanceFromThings + attenuationB * distanceFromThings * distanceFromThings) - attenuationFloor);
			const emittedColour = color(thing.lightEmissionColour);
			const emittedColourXyz = rgb_to_cie(red(emittedColour)/255.0, green(emittedColour)/255.0, blue(emittedColour)/255.0).map(x => x * 2 * attenuationValue);
			
			accumulatedLight[0] += emittedColourXyz[0];
			accumulatedLight[1] += emittedColourXyz[1];
			accumulatedLight[2] += emittedColourXyz[2];
		};
	}
		
	if (isDefined(playerId) && playerId == me.id) {
		for (var otherPlayerId in players) {
			if (!players.hasOwnProperty(otherPlayerId)) continue;
			if (otherPlayerId == me.id) continue;

			const otherPlayer = players[otherPlayerId];
			if(otherPlayer.nickName == "") continue;
			
			if(!isDefined(otherPlayer.colourRoomTintColors)) {
				colorMode(HSB);
				var randomColor = color(getNumberFromStringHash(otherPlayer.nickName,0.0, 360.0), 100, 70);
				colorMode(RGB);
				
				otherPlayer.colourRoomTintColors = randomColor;
			}
		
			const distanceFromOtherPlayer = distanceFormula(player.x, player.y, otherPlayer.x, otherPlayer.y) * distanceScale;
			const attenuationValue = Math.max(0, 1.0 / (1.0 + attenuationA * distanceFromOtherPlayer + attenuationB * distanceFromOtherPlayer * distanceFromOtherPlayer) - attenuationFloor);
			const emittedColourXyz = rgb_to_cie(red(otherPlayer.colourRoomTintColors)/255.0, green(otherPlayer.colourRoomTintColors)/255.0, blue(otherPlayer.colourRoomTintColors)/255.0).map(x => x * 1.4 * attenuationValue);
			
			accumulatedLight[0] += emittedColourXyz[0];
			accumulatedLight[1] += emittedColourXyz[1];
			accumulatedLight[2] += emittedColourXyz[2];
		}
    }

	const playerImage = player.sprite.animation.spriteSheet.image;
	const currentFrameCoords = player.sprite.animation.getFrameImage().frame;
	const numFrames = player.sprite.animation.spriteSheet.frames.length;

	const accumulatedRgb = cie_to_rgb(accumulatedLight[0], accumulatedLight[1], accumulatedLight[2]);
	
	// bleed some light from all the channels together, to make whiter-ish HDR colors
	const lum = [
		Math.max(0, 0.2126 * (accumulatedRgb[0] - 1.0)),
		Math.max(0, 0.7152 * (accumulatedRgb[1] - 1.0)),
		Math.max(0, 0.0722 * (accumulatedRgb[2] - 1.0))
	];

	accumulatedRgb[0] += lum[1] + lum[2];
	accumulatedRgb[1] += lum[0] + lum[2];
	accumulatedRgb[2] += lum[0] + lum[1]

	if(!isDefined(mapRoomImage)) {
		mapRoomImage = createImage(playerImage.width, playerImage.height);
		mapRoomImage.loadPixels();
	} else if(playerImage.width != mapRoomImage.width || playerImage.height != mapRoomImage.height) {
		mapRoomImage.resize(playerImage.width, playerImage.height);
	}
	
	for(var i = 0; i < mapRoomImage.pixels.length; ++i) {
		mapRoomImage.pixels[i] = 255;
	}
	mapRoomImage.updatePixels();
	
	mapRoomImage.mask(playerImage);

	push();
	//drawingFunction();
	
	
	
	tint(accumulatedRgb[0] * 255, accumulatedRgb[1] * 255, accumulatedRgb[2] * 255);
	image(mapRoomImage, 0, 0, mapRoomImage.width / numFrames, mapRoomImage.height, currentFrameCoords.x, currentFrameCoords.y, currentFrameCoords.width, currentFrameCoords.height);

	/*
	const sx = currentFrameCoords.x;
	const sy = currentFrameCoords.y;
	const sw = currentFrameCoords.width;
	const sh = currentFrameCoords.height;

	const dx = -playerImage.width / numFrames * 0.5;
	const dy = -playerImage.height * 0.5;
	const dw = playerImage.width / numFrames;
	const dh = playerImage.height;
	blend(mapRoomImage, sx, sy, sw, sh, dx, dy, dw, dh, NORMAL);
	*/
	
	noTint();
	pop();
}

function getNumberFromStringHash(string,inclusiveMin,inclusiveMax) {
	const hash = getHashFromString(string);
	const modulo = hash % 1000; // let's HOPE our hash function gives us a reasonable enough 'random' range that at least makes it from 0-1000, lol
	const result = modulo / 1000.0 * inclusiveMax + inclusiveMin;
	return result;
}

function getHashFromString(string) {
  var hash = 0, i, chr;
  if (string.length === 0) return hash;
  for (i = 0; i < string.length; i++) {
    chr   = string.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

function cie_to_rgb(X, Y, Z)
{
	//Convert to RGB using Wide RGB D65 conversion
	var red 	=  X * 1.656492 - Y * 0.354851 - Z * 0.255038;
	var green 	= -X * 0.707196 + Y * 1.655397 + Z * 0.036152;
	var blue 	=  X * 0.051713 - Y * 0.121364 + Z * 1.011530;
	
	if (isNaN(red))
		red = 0;

	if (isNaN(green))
		green = 0;

	if (isNaN(blue))
		blue = 0;

	return [red, green, blue];
}


function rgb_to_cie(red, green, blue)
{
	//RGB values to XYZ using the Wide RGB D65 conversion formula
	var X 		= red * 0.664511 + green * 0.154324 + blue * 0.162028;
	var Y 		= red * 0.283881 + green * 0.668433 + blue * 0.047685;
	var Z 		= red * 0.000088 + green * 0.072310 + blue * 0.986039;

	if (isNaN(X))
		X = 0;

	if (isNaN(Y))
		Y = 0;	 

	if (isNaN(Z))
		Z = 0;	
	
	return [X, Y, Z];
}