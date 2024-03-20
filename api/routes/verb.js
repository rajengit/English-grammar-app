const express = require('express')

const router = express.Router();

router.get('/verb',(req,res)=>{
    res.send('this is verb route')
})

module.exports = router