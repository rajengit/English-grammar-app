const express = require('express')

const router = express.Router()

router.get('/home',(req,res)=>{
   res.render('home',{pageTitle:'Home page'})
})

module.exports = router