const mongoose = require('mongoose');
const Movie = require('../models/movie.model');
const Celebrity = require('../models/celebrity.model');
/* const celebrities = ["Emma Watson", "Daniel Radcliff", "Rupert Grint"] */

module.exports.list = (req, res, next) => {
    const filters = req.query

    Movie.find(filters)
        .populate('celebrity')
        .then(movies => res.render('movies/list', {movies}))
        .catch(next)
}

  module.exports.create = (req, res, next) => {
    Celebrity.find()
        .then(cast => {res.render('movies/new', {cast})})
        .catch(next)
  };
  
  module.exports.doCreate = (req, res, next) => {
    const movie = new Movie({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot,
      cast: req.body.cast,
    });
  
    movie
      .save()
      .then(() => {res.redirect('/movies')})
      .catch(next);
  };


  module.exports.detail = (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => res.render('movies/detail', {movie}))
        .catch(next)
}

module.exports.delete = (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
      .then(movie => res.redirect('/movies'))
      .catch(next)
}

  module.exports.edit = (req, res, next) => {
    Celebrity.find()
        .then(cast => {res.render('movies/edit', {cast})})
        .catch(next)
  };

  module.exports.doEdit = (req, res, next) => {
    const movie = {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot,
      cast: req.body.cast,
    };
  
    movie
      .findByIdAndUpdate(req.params.id)
      .then(() => {res.redirect('/movies')})
      .catch(next);
  };