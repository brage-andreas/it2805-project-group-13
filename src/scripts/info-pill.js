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

	currentDate.setDate(day + daysToAdd);
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

	return Math.round(max / (Math.random() * max));
}

function createOpenInfoPill(innerDiv) {
	const openState = document.createElement("p");
	openState.textContent = "Open";

	const closesAt = document.createElement("p");
	closesAt.textContent = `Closes ${CLOSING_HOUR}:00`;

	const availableTables = document.createElement("p");
	availableTables.textContent = `${getAvailableTables()} tables available`;

	innerDiv.append(openState, closesAt, availableTables);

	return innerDiv;
}

function createClosedInfoPill(innerDiv) {
	const closedState = document.createElement("p");
	closedState.textContent = "Closed now";

	const openingDate = getNextOpenDay();
	const openingDay = openingDate.toLocaleDateString("en-US", {
		weekday: "long"
	});

	const opensAt = document.createElement("p");
	opensAt.innerHTML = `Opens <strong>${openingDay} ${OPENING_HOUR}:00</strong>`;

	const nextOpenDay = document.createElement("p");
	nextOpenDay.textContent = `Next open day: ${getNextOpenDay().toLocaleDateString()}`;

	innerDiv.append(closedState, opensAt, nextOpenDay);

	return innerDiv;
}

function createInfoPill() {
	const outerDiv = document.createElement("div");
	outerDiv.classList.add("flex-row", "info-pill");

	const innerDiv = document.createElement("div");
	innerDiv.classList.add("flex-row", "info-pill-content");

	if (isOpen()) {
		outerDiv.append(createOpenInfoPill(innerDiv));
	} else {
		outerDiv.append(createClosedInfoPill(innerDiv));
	}

	return outerDiv;
}

pillDiv.replaceWith(createInfoPill());
