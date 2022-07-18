const express = require('express');

const router = express.Router();
const { celebrities, movies } = require('../controllers');

router.get('/', (req, res, next) => {
    res.render('index', {title: `Movies - Celebrities`});
})

router.get('/celebrities', celebrities.list)
router.get('/celebrities/new', celebrities.create)
router.post('/celebrities', celebrities.doCreate)

router.get('/movies', movies.list)
router.get('/movies/new', movies.create)
router.get('/movies/:id', movies.details)
router.post('/movies', movies.doCreate)
router.post('/movies/:id/delete', movies.delete)



module.exports = router;
