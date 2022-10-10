const Register = require('../models/registerModel')
const jwt = require('jsonwebtoken')
exports.UsrLogin = async (req,res,next) => {
    const { email, password} = req.body

    try {
        const user = await Register.findOne({ email });

        if (!user)
          return res.json({
            success: false,
            message: 'user not found, with the given email!',
          });
      
        const isMatch = await user.comparePassword(password);
        if (!isMatch)
          return res.json({
            success: false,
            message: 'email / password does not match!',
          });
      
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: '1d',
        });
        res.redirect('/login/auth')
} catch (e){
    res.send(e)

}
    }
    