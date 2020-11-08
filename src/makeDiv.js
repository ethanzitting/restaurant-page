const makeDiv = (parentID, childID, htmlToUse, placement) => {
	const parent = document.querySelector(`${parentID}`);
	const child = document.createElement("div");
	child.setAttribute("id", `${childID}`);
	htmlToUse = htmlToUse || "";
	child.innerHTML = htmlToUse;
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
