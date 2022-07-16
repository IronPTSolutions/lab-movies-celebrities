const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')



module.exports.new = (req, res, next) => {
    res.render('celebrities/new-celebrity')
}

module.exports.create = (req, res, next) => {
    const celebrity = req.body

    Celebrity.create(celebrity)
        .then((celebrity) => {
            res.redirect('/')
        })
        .catch(error => next(error))
}