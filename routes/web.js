const homeController = require('../app/http/controllers/homeController');

const initRoutes = (app) => {
  app.get('/', homeController().index);
  app.post('/post', homeController().postFilm);
}

module.exports = initRoutes;