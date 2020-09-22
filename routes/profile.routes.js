const express = require("express");
const router = express.Router();

const axios = require('axios')
const qs = require('qs')
const data = qs.stringify({})

const User = require('../models/user.model')
const Card = require('../models/card.model')
const Location = require('../models/location.model')

router.get("/:id", (req, res, next) => {
  res.render("profile/user-profile");
});

router.get("/edit/:id", (req, res, next) => {

  const id = req.params.id;

  User.findById(id)
    .then((fullUser) => res.render("profile/user-edit-form", fullUser))
    .catch((err) => next("Error :", err));
});

router.post("/edit/:id", (req, res, next) => {

  const id = req.params.id;
  const { username, password } = req.body;

  User.findByIdAndUpdate(id, { username, password })
    .then(() => res.redirect("/profile"))
    .catch((err) => next("Error :", err));
});


router.get('/delete/:id', (req, res, next) => {

    const cardId = req.params.id
    const userId = req.user.id

    User.findById(userId)
        .then(user => user.updateOne({ $pull: { cards: cardId } }))
        .catch(err => next(err))
    res.redirect('/profile')
    
})

router.post('/player', (req, res, next) => {
    
    let id = req.body.tag
     
    if (id[0] === '#') {
        id = id.slice(1)
    }
    
    const config = {
        method: "get",
        url: `https://api.clashroyale.com/v1/players/%23${id}`,
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${process.env.API_KEY}`,
        },
        data: data,
    }

    axios(config) 
        .then(function (response) {
            let dataPlayer = response.data
            res.render('profile/player-profile', dataPlayer)
        })
        .catch(err => next(err))
})

module.exports = router


