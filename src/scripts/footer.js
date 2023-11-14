const elementFooter = document.querySelector("footer");

if (elementFooter === null) {
	throw new Error("No footer found!");
}

function createFooter() {
	const footer = document.createElement("footer");

	const footerText = document.createElement("p");
	footerText.textContent = "© 2023 P2 Papa's - Gruppe 13";

	const footerText2 = document.createElement("p");
	footerText2.textContent = "Contact us: contact@papaspizza.com";

	const footerText3 = document.createElement("p");
	footerText3.textContent = "123 Main Street, Naples, Italy";

	footer.appendChild(footerText);
	footer.appendChild(footerText2);
	footer.appendChild(footerText3);

	return footer;
}

elementFooter.replaceWith(createFooter());
