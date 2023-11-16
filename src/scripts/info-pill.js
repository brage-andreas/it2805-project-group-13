// Define styles for separators
const SeparatorStyle = {
	DEFAULT: 0,
	GREEN: 1,
	RED: 2
};

// Define opening and closing hours
const OPENING_HOUR = 14;
const CLOSING_HOUR = 21;

// Select the placeholder div for the pill
const pillDiv = document.getElementById("pill-div-placeholder");

// Throw an error if the pill div is not found
if (pillDiv === null) {
	throw new Error("No pill div found!");
}

// Function to check if the current time is within opening hours
function isOpen() {
	const currentDate = new Date();
	const currentHour = currentDate.getHours();

	return currentHour >= OPENING_HOUR && currentHour < CLOSING_HOUR;
}

// Function to calculate the next opening day
// Comment:
// In a real setting this would connect to an API where you would fetch real data.
// Since Papa's is a fictional client with no API, we will use a random but plausible number.
// Source: https://stackoverflow.com/a/46774731
function getNextOpenDay() {
	const MONDAY = 1; // 0-indexed at Sunday

	const currentDate = new Date();

	const isMonday = currentDate.getDay() === MONDAY;
	const daysToAdd = isMonday ? 2 : 1; // Add 2 days if it's Monday, else 1

	currentDate.setDate(currentDate.getDate() + daysToAdd); // Move to the next day(s)
	currentDate.setHours(OPENING_HOUR, 0, 0, 0); // Set the opening hour

	return currentDate;
}

// Function to get a random number of available tables
function getAvailableTables(max = 8) {
	if (max == 0) {
		return 0;
	}

	return Math.round(max / (Math.random() * max + 1));
}

// Function to create a separator element
function separator() {
	const separator = document.createElement("span");
	separator.classList.add("pill-separator");

	return separator;
}

// Function to create the pill showing open information
function createOpenInfoPill(innerDiv) {
	const indicator = document.createElement("span");
	indicator.classList.add("pill-element-indicator-green");

	const openState = document.createElement("span");
	openState.classList.add("pill-first-element");
	openState.textContent = "Open";

	const closesAt = document.createElement("span");
	closesAt.textContent = `Closes ${CLOSING_HOUR}:00`;

	const tables = getAvailableTables();
	const tablesPlural = tables === 1 ? "" : "s";

	const availableTables = document.createElement("span");
	availableTables.innerHTML = `<span style="font-weight: bold">${tables}</span> table${tablesPlural} available`;

	innerDiv.append(
		indicator,
		openState,
		separator(),
		closesAt,
		separator(),
		availableTables
	);

	return innerDiv;
}

// Function to create the pill showing closed information
function createClosedInfoPill(innerDiv) {
	const indicator = document.createElement("span");
	indicator.classList.add("pill-element-indicator-red");

	const closedState = document.createElement("span");
	closedState.textContent = "Closed now";

	const openingDate = getNextOpenDay();

	const options = {
		weekday: "long",
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	};

	const openingDay = openingDate
		.toLocaleDateString("en-UK", options)
		.replace(/(\w+), \d{2}\/\d{2}\/\d{4}/, "$1");

	const opensAt = document.createElement("span");
	opensAt.innerHTML = `Opens <span style="font-weight: bold">${openingDay} ${OPENING_HOUR}:00</span>`;

	innerDiv.append(indicator, closedState, separator(), opensAt);

	return innerDiv;
}

// Function to create the information pill
function createInfoPill() {
	const outerDiv = document.createElement("div");
	outerDiv.classList.add("info-pill-container");

	const innerDiv = document.createElement("div");
	innerDiv.classList.add("flex-row", "info-pill");

	// Append the open or closed info pill based on current status
	if (isOpen()) {
		outerDiv.append(createOpenInfoPill(innerDiv));
	} else {
		outerDiv.append(createClosedInfoPill(innerDiv));
	}

	return outerDiv;
}

// Replace the existing pill div with the newly created info pill
pillDiv.replaceWith(createInfoPill());
