const express=require('express')
const passport=require('passport')
const GoogleStrategy =require('passport-google-oauth20')
const keys=require("./config/keys")
const app =express()
const port =process.env.PORT || 5000
const mongoose=require('mongoose')
const cookie=require('cookie-session')
require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI,()=>{
    console.log('MongoDB connected')
})

app.use(cookie({
    maxAge:30*24*60*60*1000,
    keys:[keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session())

require('./routes/authRoute')(app)



app.listen(5000, () => {
    console.log('App listening on port 5000!');
});