const express = require('express')
const router = express.Router()

const api = require('../configs/api.config')
const royaleApi = new api()

const User = require('../models/user.model')

router.get('/:id', (req, res, next) => {
  res.render('profile/user-profile')
})

router.get('/edit/:id', (req, res, next) => {

  const id = req.params.id

  User.findById(id)
    .then((fullUser) => res.render('profile/user-edit-form', fullUser))
    .catch((err) => next('Error :', err))
})

router.post('/edit/:id', (req, res, next) => {

  const id = req.params.id
  const { username, password } = req.body

  User.findByIdAndUpdate(id, { username, password })
    .then(() => res.redirect('/profile'))
    .catch((err) => next('Error :', err))
});

router.get('/delete/:id', (req, res, next) => {

    const cardId = req.params.id
    const userId = req.user.id

    User.findById(userId)
        .then(user => user.updateOne({ $pull: { cards: cardId } }))
        .then (() => res.redirect('/profile'))
        .catch(err => next(err))
})

router.post('/player', (req, res, next) => {

    let id = req.body.tag
     
    if (id[0] === '#') { id = id.slice(1) }

    royaleApi
        .getPlayerDetails(id)
        .then(response => response.data)
        .then(dataPlayer => res.render('profile/player-profile', dataPlayer))
        .catch(err => next(err))
})

module.exports = router
