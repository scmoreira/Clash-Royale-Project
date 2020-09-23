const express = require('express')
const router = express.Router()

const Card = require('../models/card.model')
const User = require('../models/user.model')
const Location = require('../models/location.model')

const axios = require('axios')
const qs = require('qs')
const data = qs.stringify({})


const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', {
    message: 'You must log in to continue'
})

router.get('/', (req, res) => res.render('index'))

//Buscar ranking por País
router.get('/ranking', (req, res, next) => res.render('rankings'))
router.post('/ranking', (req, res, next) => {

    const input = req.body.location
    const country = input.toLowerCase()
    let id
    let rankingClan

    Location.findOne({
            name: country
        })
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
                    'Authorization': `Bearer ${process.env.API_KEY}`
                },
                data: data
            }

            axios(config)
                .then(function (response) {
                    rankingClan = response.data.items
                    return rankingClan
                })
                .catch(err => res.render("rankings", {
                    errorMsg: "Country not found!"
                }))
        })

        .then(() => {
            const config = {
                method: 'get',
                url: `https://api.clashroyale.com/v1/locations/${id}/rankings/players?limit=10`,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${process.env.API_KEY}`
                },
                data: data
            }

            let rankingPlayers

            axios(config)
                .then(function (response) {
                    rankingPlayers = response.data.items
                    res.render('rankings', {
                        rankingPlayers,
                        rankingClan
                    })
                })
                .catch(err => res.render("rankings", {
                    errorMsg: "Country not found!"
                }))
        })

        .catch(err => res.render("rankings", {
            errorMsg: "Country not found!"
        }))
})

router.get('/profile', checkLoggedIn, (req, res) => {

    const user = req.user;
    let arrayCards = []
       
   user.cards.forEach(cardId => {
        Card.findOne({ id: cardId })
            .then(card => {              
                arrayCards.push(card)
                return arrayCards
            })
            .catch(err => next(err))
   })
    
    res.render('profile/user-profile', {user, arrayCards})
    
})
   
    



module.exports = router