const express = require('express')
const router = express.Router()
const axios = require('axios')
const db = require('../models')



router.get('/', (req, res) => {
    db.players.findAll({    
        attributes: ['firstName', 'lastName', 'playerId', 'team']
    }).then (players => {
        res.render('favorites/index.ejs', {players: players})
    }).catch ((err) => {
        console.log(err)
    })
})

router.post('/new/:id', (req, res) => {
    axios.get(`https://www.balldontlie.io/api/v1/players/${req.params.id}`)
    .then (apiRes => {
    db.players.create({
        firstName: apiRes.data.first_name,
        lastName: apiRes.data.last_name,
        playerId: apiRes.data.id,
        team: apiRes.data.team.full_name
        }).then (player => {
            console.log('success')
            res.redirect('/favorites')
        })
        .catch ((err) => {
            console.log(err)
        })
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
    .catch ((err) => {
        console.log(err)
    })
})


router.delete('/delete/:id', (req, res) => {
    db.players.destroy({
    where: {
        playerId: req.params.id
    }
    })
    .then (player => {
        res.redirect('/favorites')
    })
})


module.exports = router