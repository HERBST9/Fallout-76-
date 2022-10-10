const express = require('express')
const router = express.Router()
const { UsrValidation, validateUsrLogin} = require('../middleware/validators')
const { UsrLogin} = require('../controllers/loginController')
const { isAuth } = require('../middleware/auth')
///////////////////////////////////////////////////////////




router.get('/', (req,res) => {
   
    res.render('pages/login')
}) 

router.post('/', validateUsrLogin, UsrValidation, UsrLogin)

router.get('/auth', (req,res) => {
    res.send('Success')
})
router.post('/auth', isAuth)


module.exports = router

