const express = require('express');
const common = require('../controllers/common.controller')
const celebrities = require('../controllers/celebrities.controller')
const movies = require('../controllers/movies.controller')


const router = express.Router();
router.get('/', common.index)
//////////////////////////////////////////////////////////////
router.get('/celebrities', celebrities.list)

router.get('/celebrities/new', celebrities.create)
router.post('/celebrities', celebrities.doCreate)

router.get('/celebrities/:id/edit', celebrities.edit)
router.post('/celebrities/:id', celebrities.doEdit)

router.get('/celebrities/:id', celebrities.detail)
router.post('/celebrities/:id/delete', celebrities.delete)


/////////////////////////////////////////////////////////////
router.get('/movies', movies.list)

router.get('/movies/new', movies.create)
router.post('/movies', movies.doCreate)



router.get('/movies/:id/edit', movies.edit)
router.post('/movies/:id', movies.doEdit)

router.get('/movies/:idMovie', movies.detail)
router.post('/movies/:id/delete', movies.delete)
module.exports = router;
