const express = require('express')
const router = express.Router()
const axios = require('axios')
// const db = require('../models')


router.get('/', (req, res) => {
    res.render('players/index.ejs')
})

router.get('/search', (req, res) => {
    axios.get(`https://www.balldontlie.io/api/v1/players/?search=${req.query.playerName}`)
    .then (apiRes => {
        const playerId = apiRes.data.data.id
        res.render('players/results.ejs', { apiRes: apiRes.data.data, playerId })
    })
})

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    axios.get(`https://www.balldontlie.io/api/v1/players/${req.params.id}`)
    .then (apiRes => {
        console.log(apiRes.data)
    })
})


module.exports = router