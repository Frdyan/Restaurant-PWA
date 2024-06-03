/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
// cardlist.js
class cardList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="content" id="main-content">
        <div class="explore">
            <h1 class="explore-title">Explore Restaurant</h1>
        <div class="card"></div>
        </div>
    </section>
        `;
  }
}

customElements.define('card-list', cardList);
