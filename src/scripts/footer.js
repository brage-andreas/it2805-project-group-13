const elementFooter = document.querySelector("footer");

if (elementFooter === null) {
	throw new Error("No footer found!");
}

const sites = [
	["Home page", "index.html"],
	["Menu", "menu.html"],
	["About us", "about-us.html"],
	["Contact us", "contact-us.html"],
	["Order now", "order-now.html"]
].map(([name, url]) => {
	const link = document.createElement("a");
	link.textContent = name;
	link.href = url;

	return link;
});

function createFooter() {
	const footer = document.createElement("footer");

	const brandAndCopyrightSection = document.createElement("div");
	brandAndCopyrightSection.classList.add("flex-row");
	brandAndCopyrightSection.style.alignItems = "center";

	const brandSection = document.createElement("span");
	brandSection.classList.add("flex-row");
	brandSection.style.alignItems = "center";
	brandSection.style.gap = "1ch";

	const brandLogo = document.createElement("img");
	brandLogo.src = "public/papas-logo.png";
	brandLogo.alt = "Papa's logo";

	const brandName = document.createElement("h1");
	brandName.textContent = "Papa's";

	const copyright = document.createTextNode(
		`Copyright © ${new Date().getFullYear()} Papas`
	);

	brandSection.append(brandLogo, brandName);
	brandAndCopyrightSection.append(brandSection, copyright);

	const siteMapColumn1 = document.createElement("div");
	const siteMapColumn2 = document.createElement("div");
	siteMapColumn1.classList.add("flex-col");
	siteMapColumn2.classList.add("flex-col");
	siteMapColumn1.append(...sites.slice(0, 3));
	siteMapColumn2.append(...sites.slice(3, 5));

	const contactColumn = document.createElement("div");
	contactColumn.classList.add("flex-col");

	const contactMail = document.createElement("a");
	contactMail.textContent = "contact@papas.com";
	contactMail.href = "mailto:contact@papas.com";

	const reservationMail = document.createElement("a");
	reservationMail.textContent = "reservation@papas.com";
	reservationMail.href = "mailto:reservation@papas.com";

	const contactPhone = document.createElement("a");
	contactPhone.textContent = "+39 0789 96038";
	contactPhone.href = "tel:+39 0789 96038";

	contactColumn.append(contactMail, reservationMail, contactPhone);

	const addressColumn = document.createElement("div");
	addressColumn.classList.add("flex-col");

	const address = document.createElement("address");
	address.innerHTML =
		"10 Loc. Cala di Volpe,<br>Arzachena Olbia-Tempio<br>07020 Italy";

	addressColumn.append(address);

	footer.append(
		brandAndCopyrightSection,
		siteMapColumn1,
		siteMapColumn2,
		contactColumn,
		addressColumn
	);

	return footer;
}

elementFooter.replaceWith(createFooter());
