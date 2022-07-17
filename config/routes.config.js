const express = require('express');

const router = express.Router();
const { celebrities, movies, misc } = require('../controllers')

router.get('/', misc.index)

router.get('/celebrities/new', celebrities.create)
router.get('/celebrities', celebrities.list)
router.post('/celebrities/create', celebrities.doCreate)

router.get('/movies/new', movies.create)
router.get('/movies', movies.list)
router.get('/movies/:id/detail', movies.detail)
router.post('/movies', movies.doCreate)
router.post('/movies/:id/delete', movies.delete)



module.exports = router;
