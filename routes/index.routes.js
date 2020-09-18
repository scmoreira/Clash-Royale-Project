const express = require('express')
const router = express.Router()

const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', {
    message: 'You must log in to continue'
})

router.get('/', (req, res) => res.render('index'))
router.get('/profile', checkLoggedIn, (req, res) => res.render('profile/user-profile', req.user))

module.exports = router