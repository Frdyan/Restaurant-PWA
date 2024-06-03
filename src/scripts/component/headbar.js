/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */

class headBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="head-bar">
          <a class="logo" href="" tabindex="0">
            <h1 class="title">Hunger Apps</h1>
          </a>
          <button type="button" id="hamburger" aria-label="navigation-menu" tabindex="0">☰</button>
          <nav id="drawer">
            <ul class="nav-list" id="navigation">
              <li class="nav-item"><a href="#/restaurant">Home</a></li>
              <li class="nav-item"><a href="#/favorite">Favorite</a></li>
              <li class="nav-item"><a href="https://github.com/Frdyan">About Us</a></li>
            </ul>
          </nav>
          
        </div>
        `;
  }
}
customElements.define('head-bar', headBar);
