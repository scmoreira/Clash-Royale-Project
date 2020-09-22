const express = require('express')
const router = express.Router()
const axios = require('axios')
const qs = require('qs')
const data = qs.stringify({})

const Card = require('../models/card.model')
const Location = require('../models/location.model')

const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', {
    message: 'You must log in to continue'
})

router.get('/', (req, res) => res.render('index'))

router.get('/profile', checkLoggedIn, (req, res) => {
    
    const arrayCards = []
    const user = req.user

    user.cards.forEach(cardId => {
        Card.findOne({ id: cardId })
            .then(card => {
                arrayCards.push(card)
                return arrayCards
            })
            .catch(err => next(err))
    })

    res.render("profile/user-profile", { user, arrayCards })

})
 

// router.get('/profile', checkLoggedIn, (req, res) => {

//     const user = req.user
//     const arrayCards = []

//     const cards = user.cards

//     function findCards(user) {
//         cards.forEach(cardId => {
//             const card = Card.findOne({ id: cardId })
//             arrayCards.push(card)
//         })
//         .then(() => res.render("profile/user-profile", {
//             user,
//             arrayCards
//         }))
//     }
// })






// router.get("/profile", checkLoggedIn, (req, res) => {
//   //const arrayCards = [];
//     const user = req.user;
//     let arrayCards = [];
//   function searchCards(user) {
//     user.cards.forEach((cardId) => {
//         Card.findOne({ id: cardId })
//             .then((card) => {
//                 arrayCards.push(card);
//                 return arrayCards;
//       });
//     });
//   }
//   const p1 = searchCards(user);
//   const p2 = 

//   Promise.all([p1]).then(result => res.render("profile/user-profile", { user, arrayCards: result[0] }));

// });

// router.get('/profile', checkLoggedIn, (req, res) => {

//     const arrayCards = []
//     const user = req.user
//     async function searchCards(user) {
//         user.cards.forEach(cardId => {
//             Card.findOne({
//                     id: cardId
//                 })
//                 .then(card => {
//                     arrayCards.push(card)
//                     return arrayCards
//                 })
//         })
//         await res.render('profile/user-profile', {
//             user,
//             arrayCards
//         })
//     }
//     searchCards(user)

// })

router.get('/ranking', (req, res, next) => res.render('rankings'))

router.post('/ranking', (req, res, next) => {

    const input = req.body.location
    const country = input.toLowerCase()
    let id
    let rankingClan

    Location.findOne({
            name: country
        }, {
            id: 1
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
                method: "get",
                url: `https://api.clashroyale.com/v1/locations/${id}/rankings/players?limit=10`,
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${process.env.API_KEY}`
                },
                data: data,
            };

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

module.exports = router