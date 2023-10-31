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
			description: "A classic pizza with tomato, cheese and pepperoni"
		},
		{
			name: "Carbonara",
			category: "Pasta",
			price: 4.99,
			ingredients: ["pasta", "bacon", "egg"],
			description: "A classic pasta with bacon and egg"
		},
		{
			name: "Bolognese",
			category: "Pasta",
			price: 4.99,
			ingredients: ["pasta", "minced meat", "tomato"],
			description: "A classic pasta with minced meat and tomato"
		},
		{
			name: "Lasagne",
			category: "Pasta",
			price: 5.99,
			ingredients: ["pasta", "minced meat", "tomato", "cheese"],
			description: "A classic lasagne with minced meat, tomato and cheese"
		},
		{
			name: "Tiramisu",
			category: "Dessert",
			price: 2.99,
			ingredients: ["mascarpone", "coffee", "biscuits"],
			description:
				"A classic tiramisu with mascarpone, coffee and biscuits"
		},
		{
			name: "Panna Cotta",
			category: "Dessert",
			price: 2.99,
			ingredients: ["cream", "vanilla", "sugar"],
			description: "A classic panna cotta with cream, vanilla and sugar"
		},
		{
			name: "Coca Cola",
			category: "Drinks",
			price: 1.99
		},
		{
			name: "Fanta",
			category: "Drinks",
			price: 1.99
		}
	]
};

function createMenuItem(item) {
	const elementMenuItem = document.createElement("div");
	elementMenuItem.classList.add("menu-item");

	const elementName = document.createElement("h3");
	elementName.textContent = item.name;

	const elementPrice = document.createElement("p");
	elementPrice.textContent = item.price + " €";

	const elementDescription = document.createElement("p");
	elementDescription.textContent = item.description;

	const elementIngredients = document.createElement("p");
	elementIngredients.textContent =
		"Ingredients: " + item.ingredients?.join(", ");

	const elementFigure = document.createElement("figure");
	{
		const elementImage = document.createElement("img");
		elementImage.src = item.src;

		const elementCredit = document.createElement("i");
		elementCredit.textContent = item.credit;

		elementFigure.appendChild(elementImage);
		elementFigure.appendChild(elementCredit);
	}

	elementMenuItem.appendChild(elementFigure);
	elementMenuItem.appendChild(elementName);
	elementMenuItem.appendChild(elementPrice);
	elementMenuItem.appendChild(elementDescription);
	elementMenuItem.appendChild(elementIngredients);
	return elementMenuItem;
}

// Main starts here

const elementMain = document.querySelector("main");

// Create menu
const elementMenu = document.createElement("div");
{
	elementMenu.classList.add("menu");

	// Create list for every category
	const categories = data.items.map((item) => item.category);
	const uniqueCategories = [...new Set(categories)];

	const menuContents = uniqueCategories.map((category) => {
		const elementMenuCategory = document.createElement("div");
		elementMenuCategory.classList.add("menu-category");

		const elementCategoryName = document.createElement("h2");
		elementCategoryName.textContent = category;

		const menuItems = data.items
			.filter((item) => item.category === category)
			.map(createMenuItem);

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
