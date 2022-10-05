if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const Login = require('./models/loginModel')
const Register = require('./models/registerModel')
const bodyParser = require('body-parser')



app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}));
app.use('/public', express.static('public'));
app.use(express.json())




// MONGOOSE CONNECT //

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose..........'))




//ROUTES//
app.get('/login', (req,res) => {
   
    res.render('pages/login')
}) 

app.post('/login', async (req,res) => {
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


/////////////////////////////////////////


app.get('/register', (req,res) => {
    res.render('pages/register')
})


app.post('/register', async (req,res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    console.log(hashedPassword)
    const register = new Register({
        name: req.body.name,
        email: req.body.email,
        password:hashedPassword,
        confirmpassword:hashedPassword

    })
    console.log(register)

    try{
        const newRegister = await register.save()
        res.redirect('/login')

    } catch (e) {
        console.log(e)
        
    }


})



///////////////////////////////////////////

app.get('/pricing', (req,res) => {
    res.render('pages/pricing')
})

// APP.LISTEN //
app.listen(3000, (req,res ) => {
    console.log(" LISTENING ............")

})