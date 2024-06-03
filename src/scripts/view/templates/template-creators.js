// template-creators.js
import CONFIG from '../../globals/config';

const createRestaurantListTemplate = (restaurant) => `
    <article class="card-item">
        <p class="card-item-city">${restaurant.city}</p>
        <img class="card-item-image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Restaurant ${restaurant.name}" crossorigin="anonymous">
        <div class="card-item-content">
            <h1 class="card-item-title" tabindex="0"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
            <p class="card-rating">Rating : ${restaurant.rating}</p>
            <p class="card-description">${restaurant.description}</p>
        </div>
    </article> 
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail">
        <div class="detail_item">
            <div class="resto_img">
                <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Image Of Restaurant" crossorigin="anonymous">
            </div>
            <div class="resto_detail">
                <div class="resto_name">${restaurant.name}</div>
                <p class="resto_rating">Rating : <span> ${restaurant.rating}</span></p>
                <p class="categories">Categories : <span>${restaurant.categories.map((categorie) => categorie.name).join(', ')}</span></p>
                <p>Food : </p>
                <span>${restaurant.menus.foods.map((food) => food.name).join(', ')}</span>
                <p>Drinks : </p>
                <span>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</span>
                <p class="address"> Restaurant Location : <span>${restaurant.city}, ${restaurant.address}</span></p>
            </div>
        </div>
        <div class="resto_desc">
            <div class="resto_text">Restaurant Description :</div>
            <p>${restaurant.description}</p>
        </div>
    </div>
    <div class="review">
        <h2>Review</h2>
        <div class="card_review">
            ${restaurant.customerReviews.reduce((show, value) => show.concat(`
            <div class="review_item">
                <div class="reviewer_item">
                    <div class="reviewer">
                        <p>${value.name}</p>
                        <p>${value.date}</p>
                    </div>
                </div>
                <div class="desc">
                    <p>${value.review}</p>
                </div>
            </div>
            `), '')}
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
