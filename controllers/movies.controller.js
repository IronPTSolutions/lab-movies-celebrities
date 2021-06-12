
const mongoose = require('mongoose');
const createError = require('http-errors');
const Movie = require('../models/Movies.model');
const Celebrity = require('../models/Celebrity.model');

module.exports.create = (req, res, next) =>{
    Celebrity.find()
    .then(celebrities => {
        res.render('movies/new-movie', {
            celebrities,
            title: 'Register a movie'
        })
    })
    .catch((error) => next(error))
}

module.exports.doCreate = (req, res, render) => {
    const movie = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot,
        cast: req.body.cast
    });

    movie
    .save()
    .then(movie => {
        res.redirect('/movies')
        })
    .catch((error) => next(error))
}


module.exports.list = (req, res, next) =>{
    Movie
    .find()
    .populate('cast')
    .then(movies => {
        res.render('movies/movies', {
            movies,
            title:'Movies'
        })   
    })
    .catch((error) => next(error))   
}

module.exports.detail = (req, res, next) => {
    Movie
    .findById(req.params.id)
    .populate('cast')
    .then(movie => {
        console.log(movie)
        res.render('movies/movie-details', {
            movie,
            title: movie.title
        })
    })
    .catch((error) => next(error))
}

module.exports.delete = (req, res, next) => {
    Movie
    .findByIdAndDelete(req.params.id)
    .then(movie => {
        res.redirect('/movies')
    })
    .catch((error) => next(error))
}

module.exports.edit = (req, res, next) => {  

    Movie
    .findById(req.params.id)
    .then(movie => {
        Celebrity.find()
        .then(celebrities => {
            res.render('movies/edit-movie', {
            movie,
            celebrities,
            title: `Edit ${movie.title}`
        })
      })
    })
    .catch((error) => next(error))
}

module.exports.doEdit = (req, res, next) => {
     
    Movie
    .findByIdAndUpdate(req.params.id, req.body)
     .then(movie => {
        res.redirect(`/movies/${movie._id}`)
    })
    .catch()
}