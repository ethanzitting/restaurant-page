// In this file, I will design the initial landing page for the restaurant.
// I will generate all the HTML using JS and then style it in index.css.
import { makeDiv } from './makeDiv.js';

const body = document.querySelector("body");
const content = document.querySelector("#content");

const loadHome = () => {
	makeDiv("#content", "logo", "Logo");
	makeDiv("#content", "brandName", "Brand Name");
	makeDiv("#content", "description", "Description");
	makeDiv("#content", "location", "Location");
}

const loadPage = () => {
	// Create Header
	makeDiv("body", "header", "", "before");
	makeDiv("#header", "home", "Home");
	makeDiv("#header", "menu", "Menu");
	makeDiv("#header", "contact", "Contact Us");
	makeDiv("#header", "about", "About Us");
	makeDiv("#header", "more", "More by Ethan");

	// Make Home Page
	loadHome();

	// Create Footer
	makeDiv("body", "footer");
	makeDiv("#footer", "linkedIn", "LinkedIn");
	makeDiv("#footer", "gitHub", "GitHub");
	makeDiv("#footer", "copywrite", "© 2020");
}



export {
	loadPage,
	loadHome
}