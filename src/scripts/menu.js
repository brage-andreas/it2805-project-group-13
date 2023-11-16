// Define a data object with menu items details
const data = {
	items: [
		{
			name: "Margherita",
			category: "Pizza",
			price: 2.99,
			ingredients: ["tomato", "cheese"],
			description: "A classic pizza with tomato and cheese",
			src: "./assets/images/pizza/margherita_rene-strgar.jpg",
			alt: "Pizza Margherita",
			credit: "Photo by Rene Strägar on Pexels"
		},
		{
			name: "Pepperoni",
			category: "Pizza",
			price: 3.99,
			ingredients: ["tomato", "cheese", "pepperoni"],
			description: "A classic pizza with tomato, cheese and pepperoni",
			src: "./assets/images/pizza/pepperoni_victor-miyata.jpg",
			alt: "Pizza Pepperoni",
			credit: "Photo by Victor Miyata from Pexels"
		},
		{
			name: "Carbonara",
			category: "Pasta",
			price: 4.99,
			ingredients: ["pasta", "bacon", "egg"],
			description: "A classic pasta with bacon and egg",
			src: "./assets/images/pasta/carbonara_alejandro-aznar.jpg",
			alt: "Carbonara",
			credit: "Photo by Alejandro Aznar on Pexels"
		},
		{
			name: "Bolognese",
			category: "Pasta",
			price: 4.99,
			ingredients: ["pasta", "minced meat", "tomato"],
			description: "A classic pasta with minced meat and tomato",
			src: "./assets/images/pasta/bolognese_monica-turlui.jpg",
			alt: "Bolognese",
			credit: "Photo by Monica Turlui on Pexels"
		},
		{
			name: "Lasagne",
			category: "Pasta",
			price: 5.99,
			ingredients: ["pasta", "minced meat", "tomato", "cheese"],
			description:
				"A classic lasagne with minced meat, tomato and cheese",
			src: "./assets/images/pasta/lasagne_alleksana.jpg",
			alt: "Lasagne",
			credit: "Photo by alleksana from Pexels"
		},
		{
			name: "Tiramisu",
			category: "Dessert",
			price: 2.99,
			ingredients: ["mascarpone", "coffee", "biscuits"],
			description:
				"A classic tiramisu with mascarpone, coffee and biscuits",
			src: "./assets/images/dessert/tiramisu_taqnia-creative-studio.jpg",
			alt: "Tiramisu",
			credit: "Photo by Taqnia Creative Studio from Pexels"
		},
		{
			name: "Panna Cotta",
			category: "Dessert",
			price: 2.99,
			ingredients: ["cream", "vanilla", "sugar"],
			description: "A classic panna cotta with cream, vanilla and sugar",
			src: "./assets/images/dessert/panna-cotta_pixabay.jpg",
			alt: "Panna Cotta",
			credit: "Photo by Pixabay from Pexels"
		},
		{
			name: "Coca-Cola",
			category: "Drinks",
			price: 1.99,
			src: "./assets/images/drink/coca-cola_pixabay.jpg",
			alt: "Coca-Cola",
			credit: "Photo by Pixabay from Pexels"
		},
		{
			name: "Fanta",
			category: "Drinks",
			price: 1.99,
			src: "./assets/images/drink/fanta_sandu-muresan.jpg",
			alt: "Fanta",
			credit: "Photo by Sandu Muresan from Pexels"
		}
	]
};

// Function to create a single menu item element
function createMenuItem(item) {
	// Initialize a div element for the menu item
	const elementMenuItem = document.createElement("div");
	elementMenuItem.classList.add("menu-item");

	// Create a figure element for the item image
	{
		const elementFigure = document.createElement("figure");
		const elementImage = document.createElement("img");
		elementImage.src = item.src; // Set image source

		// Add image credit
		const elementCredit = document.createElement("small");
		elementCredit.textContent = item.credit;

		// Append image and credit to the figure
		elementFigure.appendChild(elementImage);
		elementFigure.appendChild(elementCredit);

		// Append figure to the menu item
		elementMenuItem.appendChild(elementFigure);
	}

	// Create and append item name
	const elementName = document.createElement("h3");
	elementName.textContent = item.name;
	elementMenuItem.appendChild(elementName);

	// Create and append item price
	const elementPrice = document.createElement("p");
	elementPrice.textContent = item.price + " €";
	elementMenuItem.appendChild(elementPrice);

	// Create and append item description
	const elementDescription = document.createElement("p");
	elementDescription.textContent = item.description;
	elementMenuItem.appendChild(elementDescription);

	// Create and append item ingredients if they exist
	if (item.ingredients) {
		const elementIngredients = document.createElement("p");
		elementIngredients.textContent =
			"Ingredients: " + item.ingredients?.join(", ");
		elementMenuItem.appendChild(elementIngredients);
	}

	return elementMenuItem; // Return the complete menu item
}

// Main starts here

// Select the main element in the document
const elementMain = document.querySelector("main");

// Create a div for the menu
const elementMenu = document.createElement("div");
{
	elementMenu.classList.add("menu"); // Add class for styling

	// Extract unique categories from the data
	const categories = data.items.map((item) => item.category);
	const uniqueCategories = [...new Set(categories)];

	// Create list for every category
	const menuContents = uniqueCategories.map((category) => {
		// Create a div for each menu category
		const elementMenuCategory = document.createElement("div");
		elementMenuCategory.classList.add("menu-category");

		// Create and append category name
		const elementCategoryName = document.createElement("h2");
		elementCategoryName.textContent = category;

		// Filter and create menu items for the category
		const menuItems = data.items
			.filter((item) => item.category === category)
			.map(createMenuItem);

		// Append category name and items to the category div
		elementMenuCategory.appendChild(elementCategoryName);
		menuItems.forEach((menuItem) =>
			elementMenuCategory.appendChild(menuItem)
		);

		return elementMenuCategory;
	});

	// Add menu contents to menu
	elementMenu.append(...menuContents);
}

// Add menu to main
elementMain.appendChild(elementMenu);
