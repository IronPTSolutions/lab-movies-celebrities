const mongoose = require('mongoose')
const User = require('../models/user.model')


module.exports.register = (req, res, next) => {
    res.render('auth/register')
}

module.exports.doRegister = (req, res, next) => {

    function renderWithRegisterErrors (errors) {
        res.render('auth/register', {
            user: req.body,
            errors: errors
        })
    }
    User.findOne({email: req.body.email})
        .then(user => {
            if (user) {
                renderWithRegisterErrors({email: 'you`re already registered!'})
            } else {
                user = {name, email, password} = req.body
                return User.create(user)
                    .then(user => res.redirect('/'))
            }
        })
        .catch(error => {
            if (error instanceof mongoose.Error.ValidationError) {
                renderWithRegisterErrors(errors.error)
            } else {
                next(error)
            }
        })
}

module.exports.login = (req, res, next) => {
    res.render('auth/login')
}

module.exports.doLogin = (req, res, next) => {

    function renderWithLoginErrors() {
        res.render('auth/login', {
            user: req.body,
            errors: errors
        })
    }
    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) {
                renderWithLoginErrors()
            } else {
                return user.checkPassword(req.body.password)
                    .then(match => {
                        if (!match) {
                            renderWithLoginErrors()
                        } else {
                            req.session.userId = user.id
                            res.redirect('/')
                        }
                    })
            }
        })
        .catch(next)
}

module.exports.logout = (req, res, next) =>{
    req.session.destroy()
    res.redirect('/')
}