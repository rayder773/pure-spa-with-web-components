import "./pages/home.js";
import "./pages/about.js";

const pageMapping = {
  ["/home"]: "home-page",
  ["/about"]: "about-page",
};

class Router {
  #allLinks;
  #pathname;

  constructor(_links) {
    this.#allLinks = _links;
  }

  set pathname(_pathname) {
    this.#pathname = _pathname;
  }

  get pathname() {
    return this.#pathname;
  }

  start() {
    this.#allLinks.forEach((link) => {
      link.addEventListener("click", async (e) => {
        e.preventDefault();
        this.pathname = e.target.pathname;
        this.redirect();
      });
    });
  }

  appendNewPage() {
    const pageComponent = document.createElement(pageMapping[this.pathname]);
    app.innerHTML = "";
    app.appendChild(pageComponent);
  }

  changeUrl() {
    history.pushState({ pathname: this.pathname }, "", this.pathname);
  }

  redirect() {
    if (history.state.pathname !== this.pathname) {
      this.go();
    }
  }

  go() {
    this.appendNewPage();
    this.changeUrl();
  }

  onWindowLoad(_pathname) {
    this.pathname = _pathname;
    this.start();
    this.go();
  }

  onPopState(_pathname) {
    this.pathname = _pathname;
    this.appendNewPage();
  }
}

window.addEventListener("load", () => {
  const links = document.querySelectorAll("a");
  const router = new Router(links);
  router.onWindowLoad(window.location.pathname);

  window.addEventListener("popstate", (e) => {
    router.onPopState(e.state.pathname);
  });
});
