const express = require("express")
const router = express.Router()

const User = require('../models/user.model')
const Card = require('../models/card.model')

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


module.exports = router