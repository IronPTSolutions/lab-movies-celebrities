const mongoose = require('mongoose');
const createError = require('http-errors');
const Celebrity = require('../models/Celebrity.model');

module.exports.create = (req, res, next) => {
  res.render('celebrities/new-celebrity', {
      title:'Register a new celebrity'
  });
};

module.exports.doCreate = (req, res, next) => {
  const celebrity = new Celebrity({
    name: req.body.celebrityname,
    occupation: req.body.celebrityoccupation,
    catchPhrase: req.body.celebritycatch,
  });

  celebrity
    .save()
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Celebrity.find()
    .sort({date: 1})
    .then((celebrities) => {
      res.render('celebrities/celebrities', {
        celebrities,
        title: 'Celebrities'
      });
    })
    .catch(next);
};
