// CREATE REGISTER SCHEMA //

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
    

})

registerSchema.pre('save', function(next) {
    if(this.isModified('password')) {
        bcrypt.hash(this.password, 10, (err,hash) => {
          if(err) return next(err)
          this.password = hash
          next()

        })
    }
})

registerSchema.methods.comparePassword = async function(password) {
    if(!password) throw new Error('Password is missing, cannot compare.')
    try {
      const result =  await bcrypt.compare(password, this.password)
      return result
    } catch(e) {
        console.log(e.message)

    }
}


registerSchema.statics.isMailInUse = async function(email) {
    if(!email) throw new Error('Invalid Email')
    try {
     const findMail = await this.findOne({email})
     if(findMail) return false
     return true 
    } catch(e) {
        console.log(e.message)
        return false
    }
   
}


module.exports = mongoose.model("Register", registerSchema)