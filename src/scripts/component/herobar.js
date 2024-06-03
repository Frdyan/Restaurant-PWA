/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */

class heroBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Berburu Kuliner Nusantara</h1>
          <p class="hero-desc">Temukan Berbagai Macam Kuliner Terbaik diseluruh Kota Besar yang ada di Nusantara</p>
        </div>
    </div>
    `;
  }
}

customElements.define('hero-bar', heroBar);
