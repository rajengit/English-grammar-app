const express = require("express");
const router = express.Router();
const prepositionController = require("../controllers/preposition.controller");

router.get("/preposition/:id", prepositionController.getPrepositions);

// update preposition:
// router.post('/prepsition/',(req,res)=>{
//   console.log('preposition post has been updated');
// })

module.exports = router;
