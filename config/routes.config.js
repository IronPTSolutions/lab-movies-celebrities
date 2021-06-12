const express = require('express');

const router = express.Router();

const commons = require('../controllers/commons.controller')
const celebrities = require('../controllers/celebrities.controller')
const movies = require('../controllers/movies.controller')

router.get('/', commons.home)

router.get('/celebrities/new' , celebrities.create )
router.post('/celebrities/create', celebrities.doCreate)

router.get('/celebrities', celebrities.list)

router.get('/movies/new', movies.create)
router.post('/movies/create', movies.doCreate)
router.get('/movies/:id', movies.detail)
router.post('/movies/:id/delete', movies.delete)
router.get('/movies/:id/edit', movies.edit)
router.post('/movies/:id/edit', movies.doEdit)

router.get('/movies', movies.list)




module.exports = router;
