const express = require('express')
const router = express.Router()
const Card = require('../models/card.model')

const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', {
    message: 'You must log in to continue'
})

const checkUser = (req, res, next) => req.isAuthenticated() ? next() : null

router.get('/', (req, res) => res.render('index'))
router.get('/profile', checkLoggedIn, (req, res) => {
    
    const arrayCards = []
    const user = req.user
    //console.log(user)
    user.cards.forEach(cardId => {
        Card.findOne({ id: cardId })
            .then(card => {
                arrayCards.push(card)
                return arrayCards
            })
            .catch(err => next(err))
    })
    
   res.render('profile/user-profile', { user, arrayCards })
})

//router.get('/cards/:id', checkUser, (req, res) => req.user)
    


module.exports = router