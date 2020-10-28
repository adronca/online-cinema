const homeController = require('../app/http/controllers/homeController');

const initRoutes = (app) => {
  app.get('/', homeController().index);
}

module.exports = { initRoutes: initRoutes };