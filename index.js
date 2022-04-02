//~import modules
const express = require('express');
const app = express();
//mw
const router = require('./app/middlewares/router');
const error = require('./app/middlewares/error');
const checkHome = require('./app/middlewares/clientCheckHome');
const checkGames = require('./app/middlewares/checkGames')
//~json
const jsonData = require('./games.json');
app.locals.games = jsonData;

const PORT = 3000;

//~motor
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

//~use public
app.use('/', express.static('public'));

//~middlewares
//visits
app.use(checkHome);
app.use(checkGames);
//router
app.use(router);
//error
app.get('*', error);


app.listen(PORT, () => {
    console.log((`Running server on http://localhost:${PORT}`));
});