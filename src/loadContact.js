import { makeDiv } from './makeDiv.js';
import { activateTab } from './tabManipulation.js';

const loadContact = () => {
	makeDiv("#content", "contactForm", "Contact Form");
	activateTab("#contact");
}

export {
	loadContact
}