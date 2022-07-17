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

module.exports.detail = (req, res, next) => {
    Movie.findById(req.params.id)
        .populate('mainCelebrity')
        .then((movie) => {
            if (movie) {
                res.render('movies/movie-details', { movie })
            } else {
                res.redirect('/')
            }
        })
        .catch(error => next(error))
}

module.exports.delete = (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id)
     .then(() => {
        res.redirect('/movies')
     })
     .catch((error) => next(error))
}