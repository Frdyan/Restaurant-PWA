// routes.js
import Restaurant from '../view/pages/restaurant';
import Favorite from '../view/pages/favorite';
import Detail from '../view/pages/detail';

const routes = {
  '/': Restaurant, // default page
  '/restaurant': Restaurant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
