/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */

class footerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="footer-content" id="footer-content">
        <p>Ferdiansyah Haryadi © 2024, Hunger Apps</p>
    </div>
        `;
  }
}

customElements.define('foot-bar', footerBar);
