// Select the existing footer element in the document
const elementFooter = document.querySelector("footer");

// Throw an error if the footer element is not found
if (elementFooter === null) {
	throw new Error("No footer found!");
}

// Define a list of navigation links with their names and corresponding URLs
const sites = [
	["Home page", "index.html"],
	["Menu", "menu.html"],
	["About us", "about-us.html"],
	["Contact us", "contact-us.html"],
	["Order now", "order-now.html"]
].map(([name, url]) => {
	// Create a link element for each navigation item
	const link = document.createElement("a");
	link.textContent = name; // Set the text content of the link
	link.href = url; // Set the hyperlink reference

	return link; // Return the created link element
});

// Function to create the custom footer
function createFooter() {
	// Create a new footer element
	const footer = document.createElement("footer");

	// Create a section for the brand and copyright
	const brandAndCopyrightSection = document.createElement("div");
	brandAndCopyrightSection.classList.add("flex-col"); // Add flex-col class

	// Create a section for the brand
	const brandSection = document.createElement("span");
	brandSection.classList.add("flex-row"); // Add flex-row class
	brandSection.style.alignItems = "center";
	brandSection.style.gap = "1ch";

	// Create an image element for the brand logo
	const brandLogo = document.createElement("img");
	brandLogo.src = "assets/logo/papas-logo.png"; // Set the logo's source
	brandLogo.alt = "Logo of Papa's"; // Set the alt text

	// Create an element for the brand name
	const brandName = document.createElement("h1");
	brandName.textContent = "Papa's"; // Set the brand name text

	// Create a text node for the copyright
	const copyright = document.createTextNode(
		`Copyright © ${new Date().getFullYear()} Papas`
	);

	// Append the brand logo and name to the brand section
	brandSection.append(brandLogo, brandName);
	// Append the brand section and copyright to the main section
	brandAndCopyrightSection.append(brandSection, copyright);

	// Create columns for the site map
	const siteMapColumn1 = document.createElement("div");
	const siteMapColumn2 = document.createElement("div");
	siteMapColumn1.classList.add("flex-col"); // Add flex-col class
	siteMapColumn2.classList.add("flex-col"); // Add flex-col class
	siteMapColumn1.append(...sites.slice(0, 3)); // Append first three site links
	siteMapColumn2.append(...sites.slice(3, 5)); // Append last two site links

	// Create a column for contact information
	const contactColumn = document.createElement("div");
	contactColumn.classList.add("flex-col"); // Add flex-col class

	// Create link elements for contact information
	const contactMail = document.createElement("a");
	contactMail.textContent = "contact@papas.com";
	contactMail.href = "mailto:contact@papas.com";

	const reservationMail = document.createElement("a");
	reservationMail.textContent = "reservation@papas.com";
	reservationMail.href = "mailto:reservation@papas.com";

	const contactPhone = document.createElement("a");
	contactPhone.textContent = "+39 0789 96038";
	contactPhone.href = "tel:+39 0789 96038";

	// Append contact information to the contact column
	contactColumn.append(contactMail, reservationMail, contactPhone);

	// Create a column for the address
	const addressColumn = document.createElement("div");
	addressColumn.classList.add("flex-col"); // Add flex-col class

	// Create an address element
	const address = document.createElement("address");
	address.innerHTML =
		"10 Loc. Cala di Volpe,<br>Arzachena Olbia-Tempio<br>07020 Italy";

	// Append the address to the address column
	addressColumn.append(address);

	// Append all sections to the footer
	footer.append(
		brandAndCopyrightSection,
		siteMapColumn1,
		siteMapColumn2,
		contactColumn,
		addressColumn
	);

	return footer; // Return the created footer
}

// Replace the existing footer with the newly created footer
elementFooter.replaceWith(createFooter());
