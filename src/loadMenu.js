import { makeDiv } from './makeDiv.js';
import { activateTab } from './tabManipulation.js';

const loadMenu = () => {
	// Broad Content Container
	makeDiv("#content", "menuContainer");

	// Appetizer Title and Cards
	makeDiv("#menuContainer", "appTitle", `<h1>Appetizers</h1>`);
	makeDiv("#menuContainer", "appContainer");
	makeDiv("#appContainer", "appOne", `<div id="appOneImg" class="appImg">appOneImg</div><div id="appOneText" class="appText">appOneText</div>`);
	makeDiv("#appContainer", "appTwo", `<div id="appTwoImg" class="appImg">appTwoImg</div><div id="appTwoText" class="appText">appTwoText</div>`);
	makeDiv("#appContainer", "appThree", `<div id="appThreeImg" class="appImg">appThreeImg</div><div id="appThreeText" class="appText">appThreeText</div>`);

	// Entre Title abd Cards
	makeDiv("#menuContainer", "entreTitle", `<h1>Entres</h1>`);
	makeDiv("#menuContainer", "entreContainer");
	makeDiv("#entreContainer", "entre1", "entre1");
	makeDiv("#entreContainer", "entre2", "entre2");
	makeDiv("#entreContainer", "entre3", "entre3");


	// Desert Cards
	makeDiv("#menuContainer", "desertTitle", `<h1>Deserts</h1>`);
	makeDiv("#menuContainer", "desertContainer");
	makeDiv("#desertContainer", "desert1", "desert1");
	makeDiv("#desertContainer", "desert2", "desert2");
	makeDiv("#desertContainer", "desert3", "desert3");

	//Drink Cards
	makeDiv("#menuContainer", "drinkTitle", `<h1>Drinks</h1>`);
	makeDiv("#menuContainer", "drinkContainer");
	makeDiv("#drinkContainer", "drink1", "drink1");
	makeDiv("#drinkContainer", "drink2", "drink2");
	makeDiv("#drinkContainer", "drink3", "drink3");


	activateTab("#menu");

	// Here is where I'm going to use a function factory for the menu items.

	// Probably Vertical domino shaped cards with a picture and then text below.

	// They will be grouped by Type, maybe just three of each type
		// Apetizers
		// Entres
		// Deserts
		// Drinks
	
}

export {
	loadMenu
}