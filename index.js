//require npms
const express = require('express')
const ejs = require('ejs')
const layouts = require('express-ejs-layouts')
const axios = require('axios')

//config
const app = express()
const PORT = 2325

//middleware stuff
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(layouts)
app.use(express.static(__dirname + '/public/'))

//controllers
app.use('/teams', require('./routes/teams'))
app.use('/players', require('./routes/players'))
app.use('/stats', require('./routes/stats'))





app.get('/', (req, res) => {
res.render('index.ejs')
})
// app.get('/', (req, res) => {
// //     axios.get(`https://www.balldontlie.io/api/v1/teams`)
// //     .then (apiRes => {
// //         console.log(apiRes.data)
// //         res.send(apiRes.data)
// //     })
// })




app.listen(PORT, () => {
    console.log('come on and slam, if you wanna jam 👾')
})
