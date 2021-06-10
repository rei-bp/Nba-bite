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
    
    const axOne = axios.get(`https://www.balldontlie.io/api/v1/players/${req.params.id}`)
    const axTwo = axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${req.params.id}`)
    axios.all([axOne, axTwo])
    .then (axios.spread((...responses) => {
        const resOne = responses[0]
        const resTwo = responses[1]
        res.render('players/detail.ejs', {resOne: resOne.data, resTwo: resTwo.data.data[0]})
    }))
    // .then (apiRes => {
    //    res.render('players/detail.ejs', {apiRes: apiRes.data})
    // })
    // axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${req.params.id}`)
    // .then (apiStats => {
    //     console.log(apiStats.data.data)
    //     res.render('players/detail.ejs', {apiStats: apiStats.data.data} )
    // })
    .catch ((err) => {
        console.log(err)
    })
})


module.exports = router