const express = require('express');

const router = express.Router();

const common = require('../controllers/common.controller');
const movies = require('../controllers/movies.controller');
const celebrities = require('../controllers/celebrities.controller');

router.get('/', common.home);

router.get('/movies', movies.list);
router.get('/movies/new', movies.create);
router.post('/movies/new', movies.doCreate);
router.get('/movies/:id', movies.detail); 
router.post('/movies/:id/delete', movies.delete); 
router.get('/movies/:id/edit', movies.edit);
router.post('/movies/:id/edit', movies.doEdit);

router.get('/celebrities', celebrities.list); 
router.get('/celebrities/new', celebrities.create); 
router.post('/celebrities/new', celebrities.doCreate); 

module.exports = router;
