const error = function (req, res, next) {
        res.status(400).render('error');
}

module.exports = error;