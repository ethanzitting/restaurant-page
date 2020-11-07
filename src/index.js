import { loadPage, loadHome, loadMenu, loadContact, loadAbout } from './moduleAggregator.js';

// This is going to load all of the initial landing page.
loadPage();

// From there, I want to establish event listeners for the tabs present in the landing page DOM.
const linkTabs = (() => {
	const clearContent = () => {
		const content = document.querySelector("#content");
		while (content.firstChild) {
			content.removeChild(content.firstChild);
		}
	}

	const home = document.querySelector("#home");
	const menu = document.querySelector("#menu");
	const contact = document.querySelector("#contact");
	const about = document.querySelector("#about");

	home.addEventListener('click', () => {
		clearContent();
		loadHome();
	});

	menu.addEventListener('click', () => {
		clearContent();
		loadMenu();
	});

	contact.addEventListener('click', () => {
		clearContent();
		loadContact();
	});

	about.addEventListener('click', () => {
		clearContent();
		loadAbout();
	});
})();

