import { makeDiv } from './makeDiv.js';
import { activateTab } from './tabManipulation.js';

const loadMenu = () => {
	makeDiv("#content", "menuItems", "Menu Items");
	activateTab("#menu");
}

export {
	loadMenu
}