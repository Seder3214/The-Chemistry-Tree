let modInfo = {
	name: "The Chemistry Lab",
	id: "atom",
	author: "Seder3214",
	pointsName: "Atoms",
	modFiles: ["layers.js", "tree.js"],
	endgame: new Decimal("e1e15"),

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.3.3.8b",
	name: "The Chemistry Lab",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.3.3.8b</h3><br>
		<p>- Added new Carbon Challenge.</p><br>
		<p>- More balanced gameplay.</p><br>
		<p>- Fixed bug with Lithium.</p><br>
		<p>- More will be released soon!</p><br>
		<p>* Stay focused on next updates!</p><br>
		                        <p><b><br>+Seder3214+</br></b></p>`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (player.He.unlocked) gain = gain.plus(player.He.points.pow(0.5).plus(1))
			if (player.Be.unlocked) gain = gain.times(player.Be.points.plus(2))
		if (inChallenge("Li", 21)) gain = gain.div(1.5);
			if (player.Li.unlocked) gain = gain.times(player.Li.points.add(0.2).pow(0.2))
if (hasUpgrade("H", 11)) gain = gain.times(2.2);
if (hasUpgrade("B", 11)) gain = gain.times(2.);
if (inChallenge("Li", 11)) gain = gain.times(2);
if (inChallenge("Li", 12)) gain = gain.div(5);
if (hasUpgrade("H", 12)) gain = gain.times(1.5);
if (hasChallenge("Li", 11) || inChallenge("C", 11)) gain = gain.times(2);
if (inChallenge("C", 11)) gain = gain.div(4);
if (hasChallenge("Li", 21)  || inChallenge("C", 11)) gain = gain.times(3);
if (hasUpgrade("H", 21)) gain = gain.times(2);
if (inChallenge("Li", 21)) gain = gain.times(upgradeEffect("H", 43));
if (hasUpgrade("H", 33)) gain = gain.times(2);
if (hasUpgrade("B", 21)) gain = gain.times(16);
if (hasUpgrade("B", 22)) gain = gain.times(16);
if (hasUpgrade("H", 23)) gain = gain.times(1.7);
if (hasUpgrade("H", 31)) gain = gain.times(1.8);
if (hasUpgrade("H", 41)) gain = gain.times(3);
if (hasUpgrade("H", 42)) gain = gain.times(7);
if (hasUpgrade("He", 11)) gain = gain.times(2.5);
if (hasUpgrade("He", 12)) gain = gain.times(1.5);
if (hasUpgrade("He", 13)) gain = gain.plus(player.He.points.pow(0.5).plus(1));
if (hasUpgrade("He", 21)) gain = gain.times(1.3);
if (player.B.buyables[11].gte(1)) gain = gain.times(buyableEffect("B", 11));
if (hasUpgrade("He", 22)) gain = gain.times(1.1);		
if (hasUpgrade("Li", 11)) gain = gain.times(1.65);
if (hasUpgrade("Li", 12)) gain = gain.times(1.85);
if (hasUpgrade("Li", 21)) gain = gain.times(2);
if (hasUpgrade("Be", 11)) gain = gain.times(2);
if (hasUpgrade("Be", 12)) gain = gain.times(1.3);
if (hasUpgrade("Be", 21)) gain = gain.times(1.7);
	return gain
}
// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(modInfo.endgame)
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}