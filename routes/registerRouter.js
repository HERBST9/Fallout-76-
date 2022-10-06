const express = require('express')
const router = express.Router()
const { setRegister } = require('../controllers/registerController')
const { validateRegister } = require('../middleware/validators')
////////////////////////////////////////////////////////////////////////



router.get('/', (req,res) => {
    res.render('pages/register')
})


router.post('/', validateRegister, setRegister)


module.exports = router
