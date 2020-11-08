// In this file, I will design the initial landing page for the restaurant.
// I will generate all the HTML using JS and then style it in index.css.
import { makeDiv } from './makeDiv.js';
import { activateTab, deactivateTab } from './tabManipulation';

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
	makeDiv("#homeContainer", "brandName", `<h1>ACME Cafe</h1><p id="descriptionText">We are an owned and operated cafe 
	located VERY close to where you are right now. We serve human food designed
	to [redacted].</p>`);

	// Makes Menu Text and Menu Image
	makeDiv("#homeContainer", "menuImageDiv", '<img id="menuImage" src="../images/lightCream.jpg" alt="Image of Tasty Ice Cream">');
	makeDiv("#homeContainer", "menuText", `<p>See what foods we offer to you. This is the offer. We're offering food to you.</p><button id="menuButton">See Our "Menu"</button>`);

	// Makes Location Text and Location Image
	makeDiv("#homeContainer", "locationText", `<p>We are convenietly located directly behind you. We like how you've decorated the place.</p><button>Turn Around</button>`);
	makeDiv("#homeContainer", "locationImageDiv", '<img id="locationImage" src="../images/locationImage.jpg" alt="Image of Cafe Location">');

	// Makes About us image and text
	makeDiv("#homeContainer", "aboutImageDiv", '<img id="aboutImage" src="../images/orange.jpg" alt="Image of Us">');
	makeDiv("#homeContainer", "aboutText", `<p>With a combined [redacted] years of culinary experience, we can.</p><ul><li> - Trustworthy</li><li> - The Lesser Evil</li><li> - Won't Betray You Again</li><li> - We DO NOT alter our clients memories.</li></ul><button></button>`);

	// Makes Contact Us text and image
	makeDiv("#homeContainer", "contactText", `<p>Get in touch with us! You can link with our mind by thinking any thought, or you can just whisper. We can hear you just fine. We're right behind you.</p><button id="contactButton">Contact Us</button>`);
	makeDiv("#homeContainer", "contactImageDiv", `<img id="contactImage" src="../images/telepathy.png" alt="Image of You Contacting Us">`);

	// Highlights Home Tab
	activateTab("#home");
}

const loadPage = () => {
	// Create Header
	makeDiv("body", "header", "", "before");
	makeDiv("#header", "home", 'Home');
	home.setAttribute("class", "fakeLink");
	makeDiv("#header", "menu", 'Menu');
	menu.setAttribute("class", "fakeLink");
	makeDiv("#header", "contact", "Contact Us");
	contact.setAttribute("class", "fakeLink");
	makeDiv("#header", "more", '<a href="https://www.ethanzitting.com" target="_blank">More by Ethan</a>');

	// Make Home Page
	makeDiv("body", "content");
	loadHome();

	// Create Footer
	makeDiv("body", "footer");
	makeDiv("#footer", "linkedIn", '<a href="https://www.linkedin.com/in/ethanzitting/" target="_blank">LinkedIn</a>');
	makeDiv("#footer", "gitHub", '<a href="https://github.com/ethanzitting" target="_blank">GitHub</a>');
	makeDiv("#footer", "copywrite", "© 2020");
}



export {
	loadPage,
	loadHome
}