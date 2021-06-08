const express = require('express')
const ejs = require('ejs')
const layouts = require('express-ejs-layouts')
const axios = require('axios')

const app = express()


app.get('/', (req, res) => {
    axios.get(`https://www.balldontlie.io/api/v1/teams`)
    .then (apiRes => {
        console.log(apiRes.data)
        res.send(apiRes.data)
    })
})



app.listen(2323, () => {
    console.log('come on and slam, if you wanna jam 👾')
})
