const express = require("express")
const router = express.Router()
const User = require('../models/user.model')
const Card = require('../models/card.model')

const axios = require('axios');
const qs = require('qs');
const data = qs.stringify({});

const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', {
    message: 'You must log in to continue'
})

const config = {
    method: 'get',
    url: 'https://api.clashroyale.com/v1/cards',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijk5Mjk0ZDYzLWVjNzAtNDBhNi1hMDQ2LWU0MTVlNjYyYjM3ZiIsImlhdCI6MTYwMDQ1ODExNSwic3ViIjoiZGV2ZWxvcGVyLzYxNTQ1NTdkLTgyNGYtNzdiYS1jM2JmLWEwOTg0NTc5OGJhMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0Ny42Mi4xNjIuMjI0IiwiODEuMC4yLjIxMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.VyUDn6SOlQ9i5XdzkooCDpLQyhqZF-j0WbNx89iWXSTYCijToBpAimdNw0iLnQ8cXTX7oaSWWtYFaWJMH4IO7g'
    },
    data: data
};

let datos 

axios(config)
    .then(function (response) { 
        datos = response.data.items
        //console.log(response.data.items[0]);
    })
    .catch(function (error) { console.log(error);});

//let isCheck = checkLoggedIn
router.get('/', (req, res) => {    
    res.render('cards/cards.hbs', { datos })

    //console.log('Esto es datos',datos)
})

router.get('/:id', (req, res, next) => {
    const cardId = req.params.id
    const userId = req.user.id
    //console.log(cardId)
    if (userId) {
       User.findById(userId)
        .then(user => user.updateOne({ $addToSet: { cards: cardId } }))
        .then(() => res.redirect('/cards'))
        .catch(err => next(err)) 
    } else {
        res.redirect('/cards')
    }
    
})

module.exports = router