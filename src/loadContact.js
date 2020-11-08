import { makeDiv } from './makeDiv.js';
import { activateTab } from './tabManipulation.js';

const loadContact = () => {
	makeDiv("#content", "contactContainer");
	makeDiv("#contactContainer", "temp", "<h1>Do Not Contact Us. We're Sleeping</h1>");
	activateTab("#contact");
}

export {
	loadContact
}