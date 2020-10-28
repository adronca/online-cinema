function homeController() {
  return {
    async index(req, res) {
      return res.render('pages/home');
    },
  }
}

module.exports = homeController;