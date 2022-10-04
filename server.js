const express = require('express')
const app = express()
const bcrypt = require('bcrypt')



app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}));
app.use('/public', express.static('public'));


//ROUTES//
app.get('/login', (req,res) => {
    res.render('pages/login')
})

app.get('/register', (req,res) => {
    res.render('pages/register')
})

app.get('/pricing', (req,res) => {
    res.render('pages/pricing')
})

// APP.LISTEN //
app.listen(3000, (req,res ) => {
    console.log(" LISTENING ............")

})