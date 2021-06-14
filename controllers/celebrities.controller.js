const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');

module.exports.list = (req, res, next) => {
    Celebrity.find()
      .then((celebrities) => {
        res.render('celebrities/list', { celebrities });
      })
      .catch((err) => { next(err);});
  }; 

  module.exports.create = (req, res, next) => {
    res.render('celebrities/new');
  };
  
  module.exports.doCreate = (req, res, next) => {
    const celebrity = new Celebrity({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase,
    });
  
    celebrity
      .save()
      .then(() => {
        res.redirect('/celebrities');
      })
      .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
          res.render('celebrities/new', {
            errors: error.errors,
            celebrity,
          });
        } else {
          next(error);
        }
      });
  };
  