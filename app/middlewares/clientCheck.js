const dayjs = require('dayjs');

let counterHome = 0;
let counterGames = 0;

const check = function (req, res, next) {

    let gamesTab = req.app.locals.games;
    let time = dayjs().format('YYYY-MM-DD H:mm:ss');
    let remoteAddress = req.connection.remoteAddress;
    let url = req.url;
;
    let game = [];

    for(let gameTab of gamesTab)
    {
        game.push(gameTab.name);
    }

    let gameUrl = game.find((element) => {
        return `/game/${element}` === url;
    });

    if (gameUrl) {
        counterGames++;
        console.log(`The IP address is ${remoteAddress} and it's ${time}, the path is [${url}] and you come on games ${counterGames} times`);
    };

    if (url === '/') {
        counterHome++
        console.log(`The IP address is ${remoteAddress} and it's ${time}, the path is [ ${url} ] and you come to home ${counterHome} times`);
    };



    /* console.log(req.url);
    console.log(dayjs().format('YYYY-MM-DD H:mm:ss'));
    console.log(req.connection.remoteAddress);
    console.log(counterHome); */
    next();
};

module.exports = check;