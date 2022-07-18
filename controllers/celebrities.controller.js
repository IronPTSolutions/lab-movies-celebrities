const mongoose = require('mongoose');
const { Celebrity } = require("../models");

module.exports.list = (req, res, next) => {
    Celebrity
        .find()
        .then((celebrities) => res.render('celebrities/celebrities', { celebrities }))
        .catch((error) => next(error));
}

module.exports.create = (req, res, next) => {
    res.render('celebrities/new-celebrity');
}

module.exports.doCreate = (req, res, next) => {
    const celebrity = { name, occupation, catchPhrase } = req.body;

    Celebrity
        .create(celebrity)
        .then(() => res.redirect('/celebrities'))
        .catch((error) => {
            if (error instanceof mongoose.Error.ValidationError) {
              console.error(error);
              res.render('celebrities/new-celebrity', { errors: error.errors, celebrity })
            } else {
              next(error);
            }
        })
}