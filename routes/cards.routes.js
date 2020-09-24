const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const api = require('../configs/api.config')

const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', {
    message: 'You must log in to continue'
})

const royaleApi = new api()
router.get('/', (req, res) => {
    royaleApi
        .getAllCards()
        .then(response => response.data.items)
        .then(datos => res.render('cards/cards', {datos }))
        .catch(err => console.log(err))
})

router.get('/:id', checkLoggedIn,(req, res, next) => {
    const cardId = req.params.id
    const userId = req.user.id 
    
       User.findById(userId)
        .then(user => user.updateOne({ $addToSet: { cards: cardId } }))
        .then(() => res.redirect('/cards'))
        .catch(err => next(err)) 
    
})

module.exports = router