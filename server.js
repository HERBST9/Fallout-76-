if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const express = require('express')
const app = express()
const loginRouter = require('./routes/loginRouter')
const pricingRouter = require('./routes/pricingRouter')
const registerRouter = require('./routes/registerRouter')
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////


app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}));
app.use('/public', express.static('public'));
app.use(express.json())

//////////////////////////////////////////////
//ROUTES//
app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/pricing', pricingRouter)




// MONGOOSE CONNECT //
////////////////////////////////////////

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose..........'))



// APP.LISTEN //
////////////////////////////////////////////////
app.listen(3000, (req,res ) => {
    console.log(" LISTENING ............")

})
///////////////////////////////////////////////