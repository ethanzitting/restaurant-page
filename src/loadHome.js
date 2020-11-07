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
	makeDiv("#homeContainer", "logo", "Logo");
	logo.innerHTML = "<img id='logoImage' src='../images/logo.svg' alt='Cafe Logo Image'>";

	// Makes BrandName
	makeDiv("#homeContainer", "brandName");
	let brandNameNode = document.createElement("h1");
	brandNameNode.textContent = "ACME Cafe";
	brandName.appendChild(brandNameNode);

	// Makes Description
	let brandNameDescription = document.createElement("p");
	brandNameDescription.textContent = `We are a family-owned and operated cafe 
	located very close to where you are now. We serve human food designed
	to keep you functioning.`;
	brandName.appendChild(brandNameDescription);

	// Makes Menu Text and Menu Image
	makeDiv("#homeContainer", "menuImageDiv");
	makeDiv("#homeContainer", "menuText", "Menu Text");
	menuImageDiv.innerHTML = '<img id="menuImage" src="../images/lightCream.jpg" alt="Image of Tasty Ice Cream">';	

	// Makes Location Text and Location Image
	makeDiv("#homeContainer", "locationText", "Location Text");
	makeDiv("#homeContainer", "locationImageDiv");
	locationImageDiv.innerHTML = '<img id="locationImage" src="../images/locationImage.jpg" alt="Image of Cafe Location">';

	// Makes About us image and text
	makeDiv("#homeContainer", "aboutImageDiv");
	makeDiv("#homeContainer", "aboutText", "About Us Text");
	aboutImageDiv.innerHTML = '<img id="aboutImage" src="../images/orange.jpg" alt="Image of Us">';

	// Makes Contact Us text and image
	makeDiv("#homeContainer", "contactText", "Contact Us");
	makeDiv("#homeContainer", "contactImageDiv");
	contactImageDiv.innerHTML = '<img id="contactImage" src="../images/telepathy.png" alt="Image of You Contacting Us">';
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