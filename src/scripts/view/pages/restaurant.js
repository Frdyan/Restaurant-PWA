// restaurant.js
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantListTemplate } from '../templates/template-creators';

const Restaurant = {
  async render() {
    return `
        <card-list></card-list>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList();
    const restoList = document.querySelector('.card');
    const skipLink = document.querySelector('skip-content>a');
    const mainContent = document.querySelector('#main-post');

    mainContent.setAttribute('tabindex', '-1');
    skipLink.setAttribute('href', '#main-post');
    restaurants.forEach((restaurant) => {
      restoList.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Restaurant;
