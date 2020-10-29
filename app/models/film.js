const { Schema, model } = require('mongoose');

const film = new Schema({
  name: String,
  description: String,
  image: String
})

module.exports = model('Film', film);