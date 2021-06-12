const db =require('./models')


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
        }).then( results => {
            console.log(results[0].dataValues)
        })

