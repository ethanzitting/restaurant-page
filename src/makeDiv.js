const makeDiv = (parentID, childID, placement) => {
	const parent = document.querySelector(`${parentID}`);
	const child = document.createElement("div");
	child.setAttribute("id", `${childID}`);
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
