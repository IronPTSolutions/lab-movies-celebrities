const { Celebrity, Movie } = require('../models')

module.exports.create = (req, res, next) => {
    Celebrity.find()
        .then((celebrities) => {
            res.render('movies/new-movie', { celebrities })
        })
        .catch(error => next(error))    
}

module.exports.doCreate = (req, res, next) => {
    const movie = ({ title, genre, plot, mainCelebrity } = req.body)

    Movie.create(movie)
        .then(() => {
            res.redirect('/movies')
        })
        .catch((error) => next(error))
}

module.exports.list =(req, res, next) => {
    Movie.find()
        .then((movies) => {
            res.render('movies/movies', { movies })
        })
        .catch(error => next(error))
}