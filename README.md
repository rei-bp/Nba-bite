# NBA Bite!

checkout the TypeScript Conversion [here](https://github.com/rei-bp/nbabite-ts)

## Project 2 Pitch Guidelines
Project Description and Pitch Guidelines for SEIR SEA P2



---
## Project 2 Goals

In your second project you will create a full stack Express and Postgres app which has:
- *At least x2 models, and utilize and build at least one relationship between the two models.*
- *Sequelize as an ORM to interact with and create your database.*
- *An Express server utilizing EJS/EJS layouts for UI design and styling.*
- *Interaction with and inclusion of at least one API.*

## Project 2 Pitch Guidelines

In designing and building your project, you will start by forking and cloneing this repository, and then editing this README to include the following information: 
1. Name of your app

NBA bite

2. Tech stack you plan to use

sequelize, express, ejs, javascript, html, css

3. Simple wireframes
     * Can be handdrawn, or with tool of your choice
     * Example online tool: [Miro.com](https://miro.com/)

[NBA Bite WireFrame](https://miro.com/welcomeonboard/UU9neXo5SEV0STRsaUw1QWZ0c3dIalhnc2QzTElDWWV5aWE4TGIxNUlOZTZvTTFFeXA3RE9NUzBTeFFqNVk4TXwzMDc0NDU3MzU4Nzg0NTY3OTk3)


5. API you plan to use

[balldontlie](https://www.balldontlie.io/#introduction)



6. Example of how to call/invoke your API, and a description of what data comes back. 

HTTP REQUEST
`GET https://www.balldontlie.io/api/v1/players/237`

RESULTS
```
{
  "id":237,
  "first_name":"LeBron",
  "last_name":"James",
  "position":"F",
  "height_feet": 6,
  "height_inches": 8,
  "weight_pounds": 250,
  "team":{
    "id":14,
    "abbreviation":"LAL",
    "city":"Los Angeles",
    "conference":"West",
    "division":"Pacific",
    "full_name":"Los Angeles Lakers",
    "name":"Lakers"
  }
}
```

7. MVP goals (x3-5)
- 
- setup sequelize models (favorite teams and favorite players)
- establish controllers
- establish CRUD routes
- setup necessary views per routes
- display stats per player/team

8. Stretch goals (x2-5)
- create a fantasy team model
- add stats of fantasy team belonging to added players
- create stat based models to see highest ranking players
- styling

9. Any potential roadblocks?
- retrieving API data 
- not retrieving right API value path
- not connecting routes properly
- manipulating stats could be tough


## How to get started
1. **Fork and clone this repository.**
2. **Edit the text above to include specifics of your project.**
3. **Commit, push, and submit a pull request to this repo with your edited pitch README.**
4. *After you have met with a staff member and your pitch has been approved, suggested next steps:*
      * Write out your routes and create a RESTful routing chart (good example [here](https://gk-hynes.github.io/restful-routes-chart/)).
      * Come up with a breakdown of what you plan to accomplish each day and how you are going to accomplish it.
      * Create a new git repo for your project. 
      * Make all test API calls you need to to ensure your API will be usable for this project. 
      
