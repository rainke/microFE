class blueBuy extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<button type="button">buy for 66,00 €</button>`;
    }
    disconnectedCallback(){}
    attributeChangedCallback() {}
}

window.customElements.define('blue-buy', blueBuy);
