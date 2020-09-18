const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.render('decks/decks.hbs')
})


module.exports = router