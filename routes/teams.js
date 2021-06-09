const express = require('express')
const router = express.Router()
const axios = require('axios')
// const db = require('../models')


router.get('/', (req, res) => {
    axios.get(`https://www.balldontlie.io/api/v1/teams`)
    .then (apiRes => {
        // const apiJson = apiRes.data
        // const jsonArr = JSON.stringify(apiJson)
        // console.log(apiRes.data)
        // res.send(apiRes.data.data)
        res.render('teams/index.ejs', {apiRes: apiRes.data.data })
    })
})

router.get('/:id', (req, res) => {
    axios.get(`https://www.balldontlie.io/api/v1/teams/${req.params.id}`)
    .then (apiRes => {
        const abbrev = apiRes.data.abbreviation
        const conference = apiRes.data.conference
        const division = apiRes.data.division
        const name = apiRes.data.full_name

        res.render('teams/detail.ejs', {abbrev, conference, division, name })
    }) 
})


module.exports = router

//path: data[0].full_name


/* <ul>
    <% apiRes.forEach ( api => { %>
        <li> <%= api.data.full_name %> </li>
   <% }) %>  
</ul> */