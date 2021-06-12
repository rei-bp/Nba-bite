const db =require('./models')


        // db.avgstats.findAll({
        //    attributes: [ "playerId",
        //     "year",
        //     "min",
        //     "gp",
        //     "fgm",
        //     "fga",
        //     "fg3m",
        //     "fg3a",
        //     "ftm",
        //     "fta",
        //     "oreb",
        //     "dreb",
        //     "reb",
        //     "ast",
        //     "stl",
        //     "blk",
        //     "tov",
        //     "pf",
        //     "pts",
        //     "fg_pct",
        //     "fg3_pct",
        //     "ft_pct" ]
        // }).then( results => {
        //     console.log(results[0].dataValues)
        // })

    // db.avgstats.create({
    //         playerId: 57,
    //         year: 2017,
    //         min: "34:32",
    //         gp: 54,
    //         fgm: "8.43",
    //         fga: "19.52",
    //         fg3m: "2.72",
    //         fg3a: "7.11",
    //         ftm: "5.35",
    //         fta: "6.09",
    //         oreb: "0.48",
    //         dreb: "4.04",
    //         reb: "4.52",
    //         ast: "4.69",
    //         stl: "0.87",
    //         blk: "0.26",
    //         tov: "3.59",
    //         pf: "3.11",
    //         pts: "24.93",
    //         fg_pct: ".432",
    //         fg3_pct: ".383",
    //         ft_pct: ".878"
    //     })