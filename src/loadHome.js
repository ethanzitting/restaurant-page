// In this file, I will design the initial landing page for the restaurant.
// I will generate all the HTML using JS and then style it in index.css.
import { makeDiv } from './makeDiv.js';

const body = document.querySelector("body");
const content = document.querySelector("#content");

const loadHome = () => {
	/* TODO
		Next up is creative work. Establish a design for the pages with
		pictures and filler text content.
		Also add a google maps window at the bottom.
		Also format header and footer obvs.
	*/

	// Makes loadhome container
	makeDiv("#content", "homeContainer");

	// Makes Logo
	makeDiv("#homeContainer", "logo", "<img id='logoImage' src='../images/logo.svg' alt='Cafe Logo Image'>");

	// Makes BrandName and description
	makeDiv("#homeContainer", "brandName", `<h1>ACME Cafe</h1><p>We are an owned and operated cafe 
	located VERY close to where you are right this second. We serve human food designed
	to keep you functioning.</p>`);

	// Makes Menu Text and Menu Image
	makeDiv("#homeContainer", "menuImageDiv", '<img id="menuImage" src="../images/lightCream.jpg" alt="Image of Tasty Ice Cream">');
	makeDiv("#homeContainer", "menuText", "Menu Text");

	// Makes Location Text and Location Image
	makeDiv("#homeContainer", "locationText", "Location Text");
	makeDiv("#homeContainer", "locationImageDiv", '<img id="locationImage" src="../images/locationImage.jpg" alt="Image of Cafe Location">');

	// Makes About us image and text
	makeDiv("#homeContainer", "aboutImageDiv", '<img id="aboutImage" src="../images/orange.jpg" alt="Image of Us">');
	makeDiv("#homeContainer", "aboutText", "About Us Text");

	// Makes Contact Us text and image
	makeDiv("#homeContainer", "contactText", "Contact Us");
	makeDiv("#homeContainer", "contactImageDiv", `<img id="contactImage" src="../images/telepathy.png" alt="Image of You Contacting Us">`);
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
	makeDiv("body", "content");
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