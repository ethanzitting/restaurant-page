import { makeDiv } from './makeDiv.js';
import { activateTab } from './tabManipulation.js';

const loadMenu = () => {
	// Broad Content Container
	makeDiv("#content", "menuContainer");

	const foodFactory = (imageLink, name, description, type, number) => {
		let parentID = `#${type}Container`;
		let foodID = `${type}${number}`;
		let htmlToUse = `<div id="${foodID}" class="${type}Img"><img src="${imageLink}" alt="${name}"></div><div id="${type}${number}Text" class="${type}Text"><h1>${name}</h1><p>${description}</p></div>`
		return { parentID, foodID, htmlToUse };
	}

	// Appetizer Title and Cards
	makeDiv("#menuContainer", "appTitle", `<h1>Appetizers</h1>`);
	makeDiv("#menuContainer", "appContainer");
	const bananas = foodFactory("dist/images/bananas.jpg", "Bananas", "Eat them quickly!", "app", 1);
	makeDiv(bananas.parentID, bananas.foodID, bananas.htmlToUse);
	const pineapple = foodFactory("images/pineapple.jpg", "Pineapple", "Firm, strong pinapple.", "app", 2);
	makeDiv(pineapple.parentID, pineapple.foodID, pineapple.htmlToUse);
	const orange = foodFactory("images/orangeBall.jpg", "Orange", "It's the color orange.", "app", 3);
	makeDiv(orange.parentID, orange.foodID, orange.htmlToUse);

	// Entre Title abd Cards
	makeDiv("#menuContainer", "entreTitle", `<h1>Entres</h1>`);
	makeDiv("#menuContainer", "entreContainer");
	const groundBeef = foodFactory("images/groundBeef.jpg", "Beef", "Very soft beef.", "entre", 1);
	makeDiv(groundBeef.parentID, groundBeef.foodID, groundBeef.htmlToUse);
	const baguette = foodFactory("images/baguette.jpg", "Baguette", "A very french decision.", "entre", 2);
	makeDiv(baguette.parentID, baguette.foodID, baguette.htmlToUse);
	const burger = foodFactory("images/paperBurger.jpg", "Burger", "Please eat the borgor.", "entre", 3);
	makeDiv(burger.parentID, burger.foodID, burger.htmlToUse);

	// Desert Cards
	makeDiv("#menuContainer", "dessertTitle", `<h1>Desserts</h1>`);
	makeDiv("#menuContainer", "dessertContainer");
	const terraMisu = foodFactory("images/terramisu.jpg", "Terramisu", "Big Dish, Very Filling", "dessert", 1);
	makeDiv(terraMisu.parentID, terraMisu.foodID, terraMisu.htmlToUse);
	const fruitPie = foodFactory("images/fruitPie.jpg", "Fruit Pie", "Large, will hydrate you brother.", "dessert", 2);
	makeDiv(fruitPie.parentID, fruitPie.foodID, fruitPie.htmlToUse);
	const donut = foodFactory("images/donut.jpg", "Donut", "A rare find.", "dessert", 3);
	makeDiv(donut.parentID, donut.foodID, donut.htmlToUse);

	//Drink Cards
	makeDiv("#menuContainer", "drinkTitle", `<h1>Drinks</h1>`);
	makeDiv("#menuContainer", "drinkContainer");
	const orangeJuice = foodFactory("images/orangeJuice.jpg", "Orange Juice", "Taste the Orange.", "drink", 1);
	makeDiv(orangeJuice.parentID, orangeJuice.foodID, orangeJuice.htmlToUse);
	const latte = foodFactory("images/latte.jpg", "Latte", "Our hairiest latte.", "drink", 2);
	makeDiv(latte.parentID, latte.foodID, latte.htmlToUse);
	const beer = foodFactory("images/beer.jpg", "Beer", "Very strong mouth-feel.", "drink", 3);
	makeDiv(beer.parentID, beer.foodID, beer.htmlToUse);

	activateTab("#menu");

	// Here is where I'm going to use a function factory for the menu items.

	// Probably Vertical domino shaped cards with a picture and then text below.

	// They will be grouped by Type, maybe just three of each type
		// Apetizers
		// Entres
		// Deserts
		// Drinks
	
}

export {
	loadMenu
}