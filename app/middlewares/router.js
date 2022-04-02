//~import modules
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/game/:nameOfGame', (req, res, next) => {
    let gamesTab = req.app.locals.games;
    let nameGame = req.params.nameOfGame;

    for (let gameTab of gamesTab) {
        if (nameGame === gameTab.name) {
            res.render(`${nameGame}`, {
                title: `${gameTab.title}`,
                jsFile: `${gameTab.jsFile}`,
                cssFile: `${gameTab.cssFile}`
            });

            return;
        };
    };
    next();
});

// exporter le router pour pouvoir l'utiliser
module.exports = router;