//~import modules
const express = require('express');
const app = express();
const router = require('./app/router');
//~json
const jsonData = require('./games.json');
app.locals.games = jsonData;

const PORT = 3000;

//~public
app.use('/', express.static('public'));
app.use('/game/fourchette', express.static('public'));
app.use('/game/diceRoller', express.static('public'));

//~motor
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

//~router
app.use(router);

app.listen(PORT, () => {
    console.log((`Running server on http://localhost:${PORT}`));
});