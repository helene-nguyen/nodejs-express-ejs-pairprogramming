const dayjs = require('dayjs');

let counterGames = 0;

let checkGames = function (req,res,next){
    let time = dayjs().format('YYYY-MM-DD H:mm:ss');
    let url = req.url;
    let remoteAddress = req.connection.remoteAddress;

    let gamesTab = req.app.locals.games;
    let game = [];

    for (let gameTab of gamesTab) {
        game.push(gameTab.name);
    }

    let gameUrl = game.find((element) => {
        return `/game/${element}` === url;
    });

    if (gameUrl) {
        counterGames++;
        console.log(`The IP address is ${remoteAddress} and it's ${time}, the path is [${url}] and you come on games ${counterGames} times`);
    };

    next();
};

module.exports = checkGames;