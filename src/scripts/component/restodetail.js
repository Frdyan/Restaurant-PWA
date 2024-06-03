// restodetail.js
class restaurantDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="detail_content" id="detail"></div>
    `;
  }
}

customElements.define('resto-detail', restaurantDetail);
