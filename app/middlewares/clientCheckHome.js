const dayjs = require('dayjs');

let counterHome = 0;


const checkHome = function (req, res, next) {
    let time = dayjs().format('YYYY-MM-DD H:mm:ss');
    let url = req.url;
    let remoteAddress = req.connection.remoteAddress;

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

module.exports = checkHome;