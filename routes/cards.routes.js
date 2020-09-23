const express = require("express")
const router = express.Router()
const User = require('../models/user.model')
const Card = require('../models/card.model')
//const api = require('../public/javascripts/api-handler')

const axios = require('axios');
const qs = require('qs');
const data = qs.stringify({});

//const royaleApi = new RoyaleApiHandler()

const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', {
    message: 'You must log in to continue'
})
////funciona sin api-handler

const config = {
    method: 'get',
    url: 'https://api.clashroyale.com/v1/cards',
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.API_KEY}` 
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

//   no tocar lo de arriba


// axios.get(royaleApi)
//     .then(function (response) { 
//         datos = response.data.items8
//         console.log(response.data.items[0]);
//     })
//     .catch(function (error) { console.log(error);});



//let isCheck = checkLoggedIn
// axios.get(royaleApi)
//         getAllCard()
//         .then(elm => console.log(elm))



router.get('/', (req, res) => {  

    res.render('cards/cards.hbs', { datos })

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