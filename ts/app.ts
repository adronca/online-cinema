const express = require('express'),
  app = express(),
  expressLayout = require('express-ejs-layouts');

require('./routes/web').initRoutes(app);

//Static Middleware
app.use(express.static('public'));

app.use(expressLayout);
app.set('views', './resources/views');
app.set('view engine', 'ejs');

app.listen(3000, function() {
  console.log('start');
})