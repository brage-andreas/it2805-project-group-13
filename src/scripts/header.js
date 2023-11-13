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

	header.classList.add("flex-column");
	header.style.justifyContent = "space-between";
	header.style.alignItems = "center";

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

	const homeButton = createNavButton("Home", "house-chimney", "index.html");
	const menuButton = createNavButton("Our menu", "wine-bottle", "menu.html");
	const aboutButton = createNavButton("About us", "users", "about.html");

	const orderButton = createNavButton(
		"Order now",
		"bell-concierge",
		"order.html"
	);

	const contactButton = createNavButton(
		"Contact us",
		"paper-plane",
		"contact.html"
	);

	const pillDivPlaceholder = document.createElement("div");
	pillDivPlaceholder.id = "pill-div-placeholder";

	brandingDiv.append(logo, title);
	nav.append(homeButton, menuButton, orderButton, aboutButton, contactButton);

	headerDiv.append(brandingDiv, nav);
	header.append(headerDiv, pillDivPlaceholder);

	return header;
}

elementHeader.replaceWith(createHeader());
