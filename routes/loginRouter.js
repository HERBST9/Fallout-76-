const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
///////////////////////////////////////////////////////////




router.get('/', (req,res) => {
   
    res.render('pages/login')
}) 

router.post('/', async (req,res) => {
    const password = req.body.password
    try{
        if(await bcrypt.compare(password, hashedPassword)) {
            res.send('success')
        } else {
            res.send('not allowed')
        }
    } catch (e) {
        res.send(e)
    }
        
})

module.exports = router

