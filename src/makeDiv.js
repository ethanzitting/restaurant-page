const makeDiv = (parentID, childID, textFiller, placement) => {
	const parent = document.querySelector(`${parentID}`);
	const child = document.createElement("div");
	child.setAttribute("id", `${childID}`);
	textFiller = textFiller || "";
	child.textContent = textFiller;
	placement = placement || "after";
	if (placement == "before") {
		parent.prepend(child);
	} else if (placement == "after") {
		parent.appendChild(child);
	}
	
}

export {
	makeDiv
}
