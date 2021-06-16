//require npms
const express = require('express')
const ejs = require('ejs')
const layouts = require('express-ejs-layouts')
const axios = require('axios')
const methodOverride = require('method-override')

//config
const app = express()
// const PORT = 2408

//middleware stuff
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(layouts)
app.use(express.static(__dirname + '/public/'))
app.use(methodOverride('_method'))

//controllers
app.use('/teams', require('./routes/teams'))
app.use('/players', require('./routes/players'))
app.use('/favorites', require('./routes/favorites'))
// app.use('/fantasy', require('./routes/fantasy')) 





app.get('/', (req, res) => {
res.render('index.ejs')
})





app.listen(process.env.PORT || 2408, () => {
    console.log('come on and slam, if you wanna jam 👾')
})
