const SeparatorStyle = {
	DEFAULT: 0,
	GREEN: 1,
	RED: 2
};

const OPENING_HOUR = 14;
const CLOSING_HOUR = 21;

const pillDiv = document.getElementById("pill-div-placeholder");

if (pillDiv === null) {
	throw new Error("No pill div found!");
}

function isOpen() {
	const currentDate = new Date();
	const currentHour = currentDate.getHours();

	return currentHour >= OPENING_HOUR && currentHour < CLOSING_HOUR;
}

function getNextOpenDay() {
	const MONDAY = 1; // 0-indexed at Sunday

	const currentDate = new Date();

	const isMonday = currentDate.getDay() === MONDAY;
	const daysToAdd = isMonday ? 2 : 1;

	currentDate.setDate(currentDate.getDate() + daysToAdd);
	currentDate.setHours(OPENING_HOUR, 0, 0, 0);

	return currentDate;
}

// In a real setting this would connect to an API where you would fetch real data.
// Since Papa's is a fictional client with no API, we will use a random but plausible number.
// Source: https://stackoverflow.com/a/46774731
function getAvailableTables(max = 8) {
	if (max == 0) {
		return 0;
	}

	return Math.round(max / (Math.random() * max + 1));
}

function separator() {
	const separator = document.createElement("span");
	separator.classList.add("pill-separator");

	return separator;
}

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

function createInfoPill() {
	const outerDiv = document.createElement("div");
	outerDiv.classList.add("flex-row", "info-pill-container");

	const innerDiv = document.createElement("div");
	innerDiv.classList.add("flex-row", "info-pill");

	if (isOpen()) {
		outerDiv.append(createOpenInfoPill(innerDiv));
	} else {
		outerDiv.append(createClosedInfoPill(innerDiv));
	}

	return outerDiv;
}

pillDiv.replaceWith(createInfoPill());
