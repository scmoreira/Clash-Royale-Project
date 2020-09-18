const express = require("express")
const router = express.Router()


router.get('/', (req, res) => {
    res.render('cards/cards.hbs')
})


module.exports = router