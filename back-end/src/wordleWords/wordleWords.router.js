// Simple router with one objective - get the best wordle word

const router = require("express").Router();
const controller = require("./wordleWords.controller");

router.route("/").get(controller.list);

module.exports = router;
