const express = require('express')
const router = express.Router()
const axios = require('axios')
const db = require('../models')



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
    axios.get(`https://www.balldontlie.io/api/v1/players/${req.params.id}`)
    .then (resApi => {
        res.render('players/detail.ejs', {resOne: resApi.data})
    })
    //MULTI AXIOS CALL
    // const axOne = axios.get(`https://www.balldontlie.io/api/v1/players/${req.params.id}`)
    // const axTwo = axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${req.params.id}`)
    // axios.all([axOne, axTwo])
    // .then (axios.spread((...responses) => {
    //     const resOne = responses[0]
    //     const resTwo = responses[1]
    //     res.render('players/detail.ejs', {resOne: resOne.data, resTwo: resTwo.data.data[0]})
    // }))
    //SINGLE AXIOS CALL
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

router.post('/addseason/:id/:first/:last', (req, res) => {
    let id = req.params.id
    let first = req.params.first  
    let last = req.params.last 
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${req.params.id}&season=${req.body.season}`)
    .then (stats => {
        const addStats = stats.data.data[0]
        db.avgstats.create({
            playerId: id,
            year: addStats.season,
            min: addStats.min,
            gp: addStats.games_played,
            fgm: addStats.fgm,
            fga: addStats.fga,
            fg3m: addStats.fg3m,
            fg3a: addStats.fg3a,
            ftm: addStats. ftm,
            fta: addStats.fta,
            oreb: addStats.oreb,
            dreb: addStats.dreb,
            reb: addStats.reb,
            ast: addStats.ast,
            stl: addStats.stl,
            blk: addStats.blk,
            tov: addStats.turnover,
            pf: addStats.pf,
            pts: addStats.pts,
            fg_pct: addStats.fg_pct,
            fg3_pct: addStats.fg3_pct,
            ft_pct: addStats.ft_pct
        })
    }).then (findStats => {  
        res.redirect(`/players/showseason/${id}/${first}/${last}`)
    })
})

router.get('/showseason/:id/:first/:last', (req, res) => {
    let id = req.params.id
    let first = req.params.first  
    let last = req.params.last 
    db.avgstats.findAll({
    where: {
        playerId: id
    }
    }).then( statsRes => {
        res.render('players/detailstats.ejs', {statsRes: statsRes, id, first, last})
    }).catch ((err) => {
        console.log(err)
    })
})

router.delete('/delete/:id/:first/:last/:year', (req, res) => {
    let id = req.params.id
    let first = req.params.first  
    let last = req.params.last 
    let year = req.params.year
    db.avgstats.destroy({
        where: {
            year: year
    }
    }).then ( del => {
    res.redirect(`/players/showseason/${id}/${first}/${last}`)
    })
})

module.exports = router

