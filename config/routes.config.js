const express = require('express');

const router = express.Router();
const { celebrities, movies, misc } = require('../controllers')

router.get('/', misc.index)

router.get('/celebrities/new', celebrities.new)
router.get('/celebrities', celebrities.list)
router.post('/celebrities/create', celebrities.create)



module.exports = router;
