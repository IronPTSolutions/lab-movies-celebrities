const mongoose = require('mongoose')
const Movie = require('../models/movie.model')
const Celebrity = require("../models/celebrity.model")

module.exports.list = (req, res, next) => {
    const filters = req.query

    Movie.find(filters)
        .populate('celebrity')
        .then(movies => res.render('movies/list', {movies}))
        .catch(next)
}

/* module.exports.create = async (req, res, next) => {
    const cast = await Celebrity.find()
    res.render('movies/new', {cast})
} */

module.exports.create = (req, res, next) => {
    Celebrity.find()
        .then(cast => {
        res.render('movies/new', {cast})
    })
}

module.exports.doCreate = (req, res, next) => {
    const movie = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot,
        cast: req.body.cast
    })
    movie.save()
        .then(movies => res.redirect('/movies'))
        .catch(next)
}

module.exports.edit = (req, res, next) => {
    Movie.findById(req.params.id)
        .then((movie) => {
            if (movie) {
                res.render('movies/edit', {movie})
            }   else {
                res.redirect('/movies')
            }
        })
        .catch(next)
}
module.exports.doEdit = (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.redirect('/movies'))
        .catch(next)
}

module.exports.detail = (req, res, next) => {
    Movie.findById(req.params.idMovie)
        .then(movie => res.render('movies/detail', {movie, cast: movie.cast}))
        .catch(next)
}

module.exports.delete = (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/movies'))
        .catch(next)
}