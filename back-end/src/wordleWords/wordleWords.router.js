/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./wordleWords.controller");

router.route("/").get(controller.list);

module.exports = router;