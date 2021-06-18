const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')


module.exports.list = (req, res, next) => {
    
    const filters = req.query
    Celebrity.find(filters)
        .then((celebrities) => {
            res.render('celebrities/list', {celebrities})
        })
        .catch(next)
}


module.exports.create = (req, res, next) => {
    res.render('celebrities/new')
}

module.exports.doCreate = (req, res, next) => {
    const celebrity = new Celebrity({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    })
    celebrity.save()
        .then(celebrity => res.redirect('/celebrities'))
        .catch(next)
}
/* module.exports.edit = (req, res, next) => {

    Celebrity.findById(req.params.id)
        .then((celebrity) =>  {
            if (celebrity) {
                res.render('celebrities/edit', {celebrity})
            }   else {
                res.redirect('/celebrities')
            }
        })
        .catch(next)
}

module.exports.doEdit = (req, res, next) => {
    const celebrity = [req.params.id, req.body]
    Celebrity.findByIdAndUpdate(...celebrity)  ¿porque no funciona?
        .then(() => res.redirect('/celebrities'))
        .catch(next)
} */

module.exports.edit = (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then((celebrity) => {
            if (celebrity) {
                res.render('celebrities/edit', {celebrity})
            }   else {
                res.redirect('/celebrities')
            }
        })
        .catch(next)
}
module.exports.doEdit = (req, res, next) => {
    Celebrity.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.redirect('/celebrities'))
        .catch(next)
}

module.exports.detail = (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then((celebrity) => res.render('celebrities/detail', {celebrity}))
        .catch(next)
}

module.exports.delete = (req, res, next) => {
    Celebrity.findByIdAndDelete(req.params.id)
        .then(res.redirect('/celebrities'))
        .catch(next)
}