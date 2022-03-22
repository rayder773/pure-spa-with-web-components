class HomePage extends HTMLElement {
  connectedCallback() {
    console.log("home connected");

    this.innerHTML = `
      <div class="home page">Home page</div>
    `;
  }

  disconnectedCallback() {
    console.log("home disconnected");
  }
}

window.customElements.define("home-page", HomePage);
