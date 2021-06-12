const express = require('express')
const router = express.Router()
const axios = require('axios')
const db = require('../models')
// const newStatLine = require('../public/js/script.js')
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

// router.get('/season/:id', (req, res) => {
//     console.log(req.params.id)
//     console.log(req.query.season)
//     axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${req.params.id}&season=${req.query.season}`)
//     .then (result => {
//         res.render('players/detail.ejs', {result: result.data})
//     })
// })

router.get('/:id', (req, res) => {
    axios.get(`https://www.balldontlie.io/api/v1/players/${req.params.id}`)
    .then (resApi => {
        res.render('players/detail.ejs', {resOne: resApi.data})
    })
    const axOne = axios.get(`https://www.balldontlie.io/api/v1/players/${req.params.id}`)
    const axTwo = axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${req.params.id}`)
    axios.all([axOne, axTwo])
    .then (axios.spread((...responses) => {
        const resOne = responses[0]
        const resTwo = responses[1]
        res.render('players/detail.ejs', {resOne: resOne.data, resTwo: resTwo.data.data[0]})
    }))
    //single call axios
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

router.get('/season/:id/:first/:last', (req, res) => {
    let id = req.params.id
    let first = req.params.first  
    let last = req.params.last 
    
    // axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${req.params.id}&season=${req.query.season}`)
    // .then ( apiRes => {
    //  const tinyStr = apiRes.data.data[0]   
    // db.avgstats.create({
    //     playerId: tinyStr.player_id,
    //     year: tinyStr.season,
    //     min: tinyStr.min,
    //     gp: tinyStr.games_played,
    //     fgm: tinyStr.fgm,
    //     fga: tinyStr.fga,
    //     fg3m: tinyStr.fg3m,
    //     fg3a: tinyStr.fg3a,
    //     ftm: tinyStr.ftm,
    //     fta: tinyStr.fta,
    //     oreb: tinyStr.oreb,
    //     dreb: tinyStr.dreb,
    //     reb: tinyStr.reb,
    //     ast: tinyStr.ast,
    //     stl: tinyStr.stl,
    //     blk: tinyStr.blk,
    //     tov: tinyStr.turnover,
    //     pf: tinyStr.pf,
    //     pts: tinyStr.pts,
    //     fg_pct: tinyStr.fg_pct,
    //     fg3_pct: tinyStr.fg3_pct,
    //     ft_pct: tinyStr.ft_pct
    //     })
    // })
    //     .then ( dbStats => {
        db.avgstats.findAll({
            attributes: [ "playerId",
            "year",
            "min",
            "gp",
            "fgm",
            "fga",
            "fg3m",
            "fg3a",
            "ftm",
            "fta",
            "oreb",
            "dreb",
            "reb",
            "ast",
            "stl",
            "blk",
            "tov",
            "pf",
            "pts",
            "fg_pct",
            "fg3_pct",
            "ft_pct" ]
            }).then( statsRes => {
                res.render('players/detailstats.ejs', {statsRes: statsRes, id, first, last})
            //    console.log(statsRes.data)
            }).catch ((err) => {
                console.log(err)
            })
        // .then ( results => {
        //     console.log(results.data.data[0].games_played)
        // })
    })
// })            



// router.get('/season/:id', (req, res) => {
//     axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${req.params.id}&season=${req.query.season}`)
    // .then (stats => {
    //     // console.log(stats.data.data[0].pts)
    //     const addStats = stats.data.data[0]
    //     db.avgStats.create({
    //         playerId: req.params.id,
    //         year: addStats.season,
    //         min: addStats.min,
    //         gp: addStats.games_played,
    //         fgm: addStats.fgm,
    //         fga: addStats.fga,
    //         fg3m: addStats.fg3m,
    //         fg3a: addStats.fg3a,
    //         ftm: addStats. ftm,
    //         fta: addStats.fta,
    //         oreb: addStats.oreb,
    //         dreb: addStats.dreb,
    //         reb: addStats.reb,
    //         ast: addStats.ast,
    //         stl: addStats.stl,
    //         blk: addStats.blk,
    //         tov: addStats.tov,
    //         pf: addStats.pf,
    //         pts: addStats.pts,
    //         fg_pct: addStats.fg_pct,
    //         fg3_pct: addStats.fg3_pct,
    //         ft_pct: addStats.ft_pct
    //     })
    // })
//     .then ( dbStats => {
//         db.avgstats.findAll({
//             attributes: [
//                 year,
//                 min,
//                 gp,
//                 fgm,
//                 fga,
//                 fg3m,
//                 fg3a,
//                 ftm,
//                 fta,
//                 oreb,
//                 dreb,
//                 reb,
//                 ast,
//                 stl,
//                 blk,
//                 tov,
//                 pf,
//                 pts,
//                 fg_pct,
//                 fg3_pct,
//                 ft_pct
//             ]
//         })
//         .then (statsRes => {
//             res.render('players/detail.ejs', {statsRes: statsRes})
//         })
//     })
//     .catch ((err) => {
//         console.log(err)
//     })
// })




module.exports = router

