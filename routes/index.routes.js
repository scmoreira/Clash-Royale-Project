const express = require('express')
const router = express.Router()

const Card = require('../models/card.model')
const Location = require('../models/location.model')

const api = require('../configs/api.config')
const royaleApi = new api()

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
    let rankingPlayers

    Location.findOne({ name: country })
        .then(location => {
            id = location.id
            return id
        })
        .then((id) => royaleApi.getRankingClans(id))
        .then(response => {
            rankingClan = response.data.items
            return rankingClan
        })
        .then(elm => id = elm[0].location.id)
        .then(id => royaleApi.getRankingPlayers(id))
        .then(response => {
            rankingPlayers = response.data.items
            return rankingPlayers
        })
        .then(() => res.render('rankings', { rankingPlayers, rankingClan }))
        .catch(err => res.render("rankings", { errorMsg: "Country not found!" }))
   
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