const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
	<link rel="stylesheet" href="../style/global.css">

	<footer style="width: 100dvw; margin: 0">
		<p>Placeholder footer</p>
	</footer>
`;

class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const shadowRoot = this.attachShadow({ mode: "open" });

		shadowRoot.appendChild(footerTemplate.content);
	}
}

customElements.define("papas-footer", Footer);
