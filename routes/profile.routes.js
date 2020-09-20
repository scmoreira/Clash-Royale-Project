const express = require("express")
const router = express.Router()

const axios = require('axios')
const qs = require('qs')
const data = qs.stringify({})

const User = require('../models/user.model')
const Card = require('../models/card.model')
const Location = require('../models/location.model')

router.get('/:id', (req, res, next) => {
    res.render('profile/user-profile')
})

router.get('/edit/:id', (req, res, next) => {

    const id = req.params.id

    User.findById(id)
        .then(fullUser => res.render('profile/user-edit-form', fullUser))
        .catch(err => next('Error :', err))
}) 

router.post('/edit/:id', (req, res, next) => {
    const id = req.params.id
    const { username, password } = req.body

    User.findByIdAndUpdate(id, { username, password })
        .then(() => res.redirect('/profile'))
        .catch(err => next('Error :', err))
})

// router.get('/cards/new/:id', (req, res, next) => {

//     const id = req.params.id

//     Card.create(id)
//         .then(cardCreated => {
            
//         }
//         .catch(err => next('Error :', err))
// })


router.post('/', (req, res, next) => {

    const input = req.body.location
    const country = input.toLowerCase()
    let id 
    let rankingClan

    Location.findOne({name: country})
        .then(location => {
            id = location.id
            return id
        })
        
        .then(() => {
            const config = {
                method: 'get',
                url: `https://api.clashroyale.com/v1/locations/${id}/rankings/clans?limit=20`,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijk5Mjk0ZDYzLWVjNzAtNDBhNi1hMDQ2LWU0MTVlNjYyYjM3ZiIsImlhdCI6MTYwMDQ1ODExNSwic3ViIjoiZGV2ZWxvcGVyLzYxNTQ1NTdkLTgyNGYtNzdiYS1jM2JmLWEwOTg0NTc5OGJhMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0Ny42Mi4xNjIuMjI0IiwiODEuMC4yLjIxMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.VyUDn6SOlQ9i5XdzkooCDpLQyhqZF-j0WbNx89iWXSTYCijToBpAimdNw0iLnQ8cXTX7oaSWWtYFaWJMH4IO7g'
                },
                data: data
            }

            axios(config)
                .then(function (response) {
                    rankingClan = response.data.items
                    return rankingClan
                })       
                .catch(err => res.render("profile/user-profile", { errorMsg: "Country not found!" }))
        })
        .then(() => {
            const config = {
                method: 'get',
                url: `https://api.clashroyale.com/v1/locations/${id}/rankings/players?limit=10`,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijk5Mjk0ZDYzLWVjNzAtNDBhNi1hMDQ2LWU0MTVlNjYyYjM3ZiIsImlhdCI6MTYwMDQ1ODExNSwic3ViIjoiZGV2ZWxvcGVyLzYxNTQ1NTdkLTgyNGYtNzdiYS1jM2JmLWEwOTg0NTc5OGJhMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0Ny42Mi4xNjIuMjI0IiwiODEuMC4yLjIxMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.VyUDn6SOlQ9i5XdzkooCDpLQyhqZF-j0WbNx89iWXSTYCijToBpAimdNw0iLnQ8cXTX7oaSWWtYFaWJMH4IO7g'
                },
                data: data
            }

            let rankingPlayers

            axios(config)
                .then(function (response) {
                    rankingPlayers = response.data.items
                    res.render('profile/user-profile.hbs', { rankingPlayers, rankingClan})                   
                })
                .catch(err => res.render("profile/user-profile", {errorMsg: "Country not found!"}))
        })
        .catch(err => res.render("profile/user-profile", { errorMsg: "Country not found!" }))
})



module.exports = router

