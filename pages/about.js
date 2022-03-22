class AboutPage extends HTMLElement {
  connectedCallback() {
    console.log("about connected");
    this.innerHTML = `
      <div class="about page">About page</div>
    `;
  }

  disconnectedCallback() {
    console.log("about disconnected");
  }
}

window.customElements.define("about-page", AboutPage);
