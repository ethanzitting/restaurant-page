// In this file, I will design the initial landing page for the restaurant.
// I will generate all the HTML using JS and then style it in index.css.
import { makeDiv } from './makeDiv.js';

const loadPage = () => {
	const body = document.querySelector("body");
	const content = document.querySelector("#content");
	content.textContent = "Content";

	// Create Header
	makeDiv("body", "header", "before");
	makeDiv("#header", "home");
	home.textContent = "Home";
	makeDiv("#header", "menu");
	menu.textContent = "Menu";
	makeDiv("#header", "contact");
	contact.textContent = "Contact Us";
	makeDiv("#header", "more");
	more.textContent = "More by Ethan";

	// Create Footer
	makeDiv("body", "footer");
	makeDiv("#footer", "linkedIn");
	linkedIn.textContent = "LinkedIn";
	makeDiv("#footer", "gitHub");
	gitHub.textContent = "GitHub";
	makeDiv("#footer", "copywrite");
	copywrite.textContent = "© 2020"
}

export {
	loadPage
}