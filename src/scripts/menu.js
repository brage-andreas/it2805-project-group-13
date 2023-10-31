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
	elementPrice.textContent = item.price;

	elementMenuItem.appendChild(elementName);
	elementMenuItem.appendChild(elementPrice);

	return elementMenuItem;
}

