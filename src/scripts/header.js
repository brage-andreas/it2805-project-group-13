const elementHeader = document.querySelector("header");

if (elementHeader === null) {
	throw new Error("No header found!");
}

function createNavButton(label, icon, href) {
	const button = document.createElement("a");

	button.classList.add("button", "flex-row");
	button.href = href;
	button.innerHTML = `
		<i class="fa-solid fa-${icon}"></i>
		${label}
	`;

	return button;
}

function createHeader() {
	const header = document.createElement("header");

	const headerBoxDiv = document.createElement("div");

	headerBoxDiv.classList.add("flex-column");
	headerBoxDiv.style.justifyContent = "space-between";
	headerBoxDiv.style.alignItems = "center";

	const headerDiv = document.createElement("div");
	headerDiv.classList.add("flex-row");
	headerDiv.id = "header-main-row";

	const brandingDiv = document.createElement("div");

	brandingDiv.classList.add("flex-row");
	brandingDiv.style.alignItems = "center";

	const logo = document.createElement("img");

	logo.src = "public/papas-logo.png";
	logo.alt = "Logo of Papa's";
	logo.style.maxHeight = "3rem";

	const title = document.createElement("h1");

	title.textContent = "Papa's";

	const nav = document.createElement("nav");

	nav.classList.add("flex-row");
	nav.style.alignItems = "center";
	nav.style.flexWrap = "wrap";

	const homeButton = createNavButton("Home", "house-chimney", "index.html");
	const menuButton = createNavButton("Our menu", "wine-bottle", "menu.html");
	const aboutButton = createNavButton("About us", "users", "about.html");

	const orderButton = createNavButton(
		"Order now",
		"bell-concierge",
		"order-now.html"
	);

	const contactButton = createNavButton(
		"Contact us",
		"paper-plane",
		"contact.html"
	);

	const fullUrl = document.documentURI;
	/* Dynamically add active class to current nav button */
	switch (true) {
		case fullUrl.includes("index.html"):
			homeButton.classList.add("active");
			break;
		case fullUrl.includes("menu.html"):
			menuButton.classList.add("active");
			break;
		case fullUrl.includes("about.html"):
			aboutButton.classList.add("active");
			break;
		case fullUrl.includes("order-now.html"):
			orderButton.classList.add("active");
			break;
		case fullUrl.includes("contact.html"):
			contactButton.classList.add("active");
			break;
		default:
			break;
	}

	const pillDivPlaceholder = document.createElement("div");
	pillDivPlaceholder.id = "pill-div-placeholder";

	brandingDiv.append(logo, title);
	nav.append(homeButton, menuButton, orderButton, aboutButton, contactButton);

	headerDiv.append(brandingDiv, nav);
	headerBoxDiv.append(headerDiv);

	header.append(headerBoxDiv, pillDivPlaceholder);

	return header;
}

elementHeader.replaceWith(createHeader());
