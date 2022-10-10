const bcrypt = require('bcrypt')
const Register = require('../models/registerModel')





exports.setRegister = async (req,res) => {
    const { name,email,password } = req.body
    const isMail = await Register.isMailInUse(email)
    if(!isMail) {
        res.send('This Email is Taken')
    }
    try{
        const newRegister = await Register({
            name,
            email,
            password
        })
        await newRegister.save()
        res.redirect('/login')

    } catch (e) {
        console.log(e)
        
    }

}