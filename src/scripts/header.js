const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
	<link rel="stylesheet" href="../style/global.css">

	<header style="width: 100dvw; margin: 0">
		<div style="width: 100%; display: flex; flex-direction: row">
			<a href="http://google.com" target="_blank" rel="noopener noreferrer">
				<img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width: 50px; height: 50px; border-radius: 50%; margin: 10px">
				<h1>My Website</h1>
			</a>
		</div>
	</header>
`;

class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const shadowRoot = this.attachShadow({ mode: "open" });

		shadowRoot.appendChild(headerTemplate.content);
	}
}

customElements.define("papas-header", Header);
