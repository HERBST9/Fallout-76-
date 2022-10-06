const bcrypt = require('bcrypt')
const Register = require('../models/registerModel')





exports.setRegister = async (req,res) => {
    const { name,email,password } = req.body
    const isMail = await Register.isMailInUse(email)
    if(!isMail) {
        res.send('This Email is Taken')
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)
    const register = new Register({
        name: name,
        email: email,
        password:hashedPassword
    })
    console.log(register)

    try{
        const newRegister = await register.save()
        res.redirect('/login')

    } catch (e) {
        console.log(e)
        
    }

}