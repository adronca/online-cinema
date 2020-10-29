require('dotenv').config();

const express = require('express'),
  app = express(),
  expressLayout = require('express-ejs-layouts'),
  path = require('path'),
  mongoose = require('mongoose');

app.use(express.json());

require('../routes/web')(app);

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, { useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Database connected...');
}).catch((err: any) => {
  console.log('Connection failed...', err);
})


//Static Middleware
app.use(express.static('public'));

app.use(expressLayout);
app.set('views', path.join(__dirname, '../resources/views'));
app.set('view engine', 'ejs');

app.listen(3000, function() {
  console.log('start');
})