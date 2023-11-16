// Select the existing header element in the document
const elementHeader = document.querySelector("header");

// Throw an error if the header element is not found
if (elementHeader === null) {
	throw new Error("No header found!");
}

// Function to create a navigation button with label, icon, and hyperlink
function createNavButton(label, icon, href) {
	const button = document.createElement("a"); // Create an anchor element

	button.classList.add("button", "flex-row"); // Add classes for styling
	button.href = href; // Set the hyperlink reference
	// Set the inner HTML to include an icon and label
	button.innerHTML = `
        <i class="fa-solid fa-${icon}"></i>
        ${label}
    `;

	return button; // Return the created button
}

// Function to create the custom header
function createHeader() {
	const header = document.createElement("header"); // Create a new header element

	const headerBoxDiv = document.createElement("div"); // Create a div for header box
	// Add styling classes for layout
	headerBoxDiv.classList.add("flex-column");
	headerBoxDiv.style.justifyContent = "space-between";
	headerBoxDiv.style.alignItems = "center";

	const headerDiv = document.createElement("div"); // Create a div for header content
	headerDiv.classList.add("flex-row"); // Add flex-row class for layout
	headerDiv.id = "header-main-row"; // Set an ID

	const brandingDiv = document.createElement("div"); // Create a div for branding
	brandingDiv.classList.add("flex-row"); // Add flex-row class for layout
	brandingDiv.style.alignItems = "center";

	const logo = document.createElement("img"); // Create an image element for logo
	logo.src = "assets/logo/papas-logo.png"; // Set logo's source
	logo.alt = "Logo of Papa's"; // Set alt text for accessibility
	logo.style.maxHeight = "3rem"; // Set maximum height for the logo

	const title = document.createElement("h1"); // Create an element for the title
	title.textContent = "Papa's"; // Set the text content

	const nav = document.createElement("nav"); // Create a nav element
	nav.classList.add("flex-row"); // Add flex-row class for layout
	nav.style.alignItems = "center";
	nav.style.flexWrap = "wrap";

	// Create navigation buttons using the createNavButton function
	const homeButton = createNavButton("Home", "house-chimney", "index.html");
	const menuButton = createNavButton("Our menu", "wine-bottle", "menu.html");
	const aboutButton = createNavButton("About us", "users", "about-us.html");
	const orderButton = createNavButton(
		"Order now",
		"bell-concierge",
		"order-now.html"
	);
	const contactButton = createNavButton(
		"Contact us",
		"paper-plane",
		"contact-us.html"
	);

	const fullUrl = document.documentURI; // Get the current document URL
	// Add active class to the nav button corresponding to the current page
	switch (true) {
		case fullUrl.includes("index.html"):
			homeButton.classList.add("active");
			break;
		case fullUrl.includes("menu.html"):
			menuButton.classList.add("active");
			break;
		case fullUrl.includes("about-us.html"):
			aboutButton.classList.add("active");
			break;
		case fullUrl.includes("order-now.html"):
		case fullUrl.includes("order-form.html"):
			orderButton.classList.add("active");
			break;
		case fullUrl.includes("contact-us.html"):
			contactButton.classList.add("active");
			break;
		default:
			break;
	}

	// Create a placeholder div
	const pillDivPlaceholder = document.createElement("div");
	pillDivPlaceholder.id = "pill-div-placeholder";

	// Append elements to their parent elements
	brandingDiv.append(logo, title); // Append logo and title to branding div
	nav.append(homeButton, menuButton, orderButton, aboutButton, contactButton); // Append buttons to nav

	headerDiv.append(brandingDiv, nav); // Append branding div and nav to header div
	headerBoxDiv.append(headerDiv); // Append header div to header box div

	header.append(headerBoxDiv, pillDivPlaceholder); // Append all to the main header element

	return header; // Return the created header
}

// Replace the existing header with the newly created header
elementHeader.replaceWith(createHeader());
