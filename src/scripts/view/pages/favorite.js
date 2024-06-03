// favorite.js
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-creators';

const Favorite = {
  async render() {
    return `
        <card-list></card-list>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
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

export default Favorite;
