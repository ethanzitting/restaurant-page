import { loadPage } from './initialLoad.js';

console.log("Hello World!");

// This is going to load all of the initial landing page.
loadPage();

// From there, I want to establish event listeners for the tabs present in the landing page DOM.
addEventListeners();
	// I will build this here.

	// When one is clicked, I want to do the following:
	clearDOM();
		// I will build this here.

	loadCorrespondingTab();
		// There will be a function for each tab. I will import them from a different JS file. 
		//They will all have their own file., and I may route the imports through a parent file?

