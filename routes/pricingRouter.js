const express = require('express')
const router = express.Router()



router.get('/', (req,res) => {
    res.render('pages/pricing')
})


module.exports = router