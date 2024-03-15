const express = require('express');

const router = express.Router();

const nouncontrollers = require("../controllers/noun.controller");

router.get("/noun/:id", nouncontrollers.getNoun);

module.exports = router;
