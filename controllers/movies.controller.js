const mongoose = require('mongoose');
const { Celebrity, Movie } = require('../models');
const x = require('../models');


module.exports.list = (req, res, next) => {
    Movie
        .find()
        .populate('mainCelebrity')
        .then((movies) => res.render('movies/movies', { movies }))
        .catch((error) => next(error));
}

module.exports.details = (req, res, next) => {
    Movie
        .findById(req.params.id)
        .populate('mainCelebrity')
        .then((movies) => res.render('movies/movies-details', { movies }))
        .catch((error) => next(error));
}

module.exports.delete = (req, res, next) => {
    Movie
        .findByIdAndDelete(req.params.id)
        .then((movies) => res.redirect('/movies'))
        .catch((error) => next(error));
}

module.exports.create = (req, res, next) => {
    Celebrity
        .find()
        .then((celebrities) => res.render('movies/new-movies', { celebrities }))
        .catch(error => next(error))
}

module.exports.doCreate = (req, res, next) => {
    const movie = {title, genre, plot, mainCelebrity} = req.body;

    Movie
        .create(movie)
        .then(() => res.redirect('/movies'))
        .catch((error) => {
            if (error instanceof mongoose.Error.ValidationError) {
              console.error(error);
              res.render('movies/new-movies', { errors: error.errors, movie })
            } else {
              next(error);
            }
        })
}