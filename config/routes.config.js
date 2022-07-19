const express = require('express');
const router = express.Router();
const { celebrities , movies } = require('../controllers')


router.get('/new-celebrities', celebrities.create); //formulario
router.post("/celebrities", celebrities.doCreate); // enviar formulario
router.get('/celebrities', celebrities.list); // mostrar lista de creados


router.get("/", (req, res) => {
    res.render("index", { title: "Celebrities" });
  });





/*const express = require("express");
const router = express.Router();
const { tasks, auth, users } = require("../controllers");
const secure = require("../middlewares/secure.mid");

router.get("/tasks", secure.isAuthenticated, tasks.list);
router.get("/tasks/new", secure.isAuthenticated, tasks.new);
router.get("/tasks/:id", secure.isAuthenticated, tasks.detail);
router.post("/tasks", secure.isAuthenticated, tasks.create);
router.post("/tasks/:id/delete", secure.isAuthenticated, tasks.delete);*/

module.exports = router;
