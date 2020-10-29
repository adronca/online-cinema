const Film = require('../../models/film');

function homeController() {
  return {
    async index(req, res) {
      return res.render('pages/home');
    },

    async postFilm(req, res) {
      let film = new Film({
        name: req.body.name,
        image: req.body.image,
        price: req.body.pice
      })
  
      await film.save();
  
      res.json(film);
    }
  }
}

module.exports = homeController;