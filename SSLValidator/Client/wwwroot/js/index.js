﻿export function setBackgroundColour(threatLevelClass) {
	document.body.className = threatLevelClass;
}

document.addEventListener("keypress", (e) => {
	if (e.key === 'Enter') {
		var myModal = new bootstrap.Modal(document.getElementById("domainModalToggle"));
		myModal.toggle();
	}
})