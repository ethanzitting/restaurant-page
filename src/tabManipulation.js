const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

const deactivateTab = (tabDivID) => {
	const tabDiv = document.querySelector(`${tabDivID}`);
	tabDiv.removeAttribute("class");
	tabDiv.setAttribute("class", "fakeLink");

	
}

const activateTab = (tabDivID) => {
	deactivateTab("#home");
	deactivateTab("#menu");
	deactivateTab("#contact");

	const tabDiv = document.querySelector(`${tabDivID}`);
	tabDiv.setAttribute("class", "active");
}

export {
	activateTab
}