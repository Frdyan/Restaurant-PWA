/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
// skipContent.js
class skipContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a class="skip-content">Go To Content</a>
            `;
  }
}
customElements.define('skip-content', skipContent);
