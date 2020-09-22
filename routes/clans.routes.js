const express = require("express")
const router = express.Router()

const axios = require("axios")
const qs = require("qs")
const data = qs.stringify({})

const config = {
    method: "get",
    url: "https://api.clashroyale.com/v1/clans?minScore=57000&limit=12",
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`
    },
    data: data,
}

let datos;

axios(config)
  .then(function (response) { datos = response.data.items })
  .catch(err => console.log(error))

router.get("/", (req, res) => { res.render("clans/clans.hbs", { datos })})
  
router.post("/details", (req, res, next) => {
  axios(getClanConfig(req))
        .then(function (response) {
            let dataClan = response.data
            axios(getFlagConfig(dataClan.location.name))
                .then(function (value) {
                    let countryFlag = value.data[0].flag
                    res.render("clans/clan-details.hbs", { dataClan, countryFlag })
                })
                .catch(err => next(err))
       })
       .catch(err => next(err))
})

function getClanConfig(req) {
    const input = req.body.tag
    let id = input.slice(1)
    const config = {
        method: "get",
        url: `https://api.clashroyale.com/v1/clans/%23${id}`,
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${process.env.API_KEY}`
        },
        data: data,
    }
    return config
}

function getFlagConfig(country) {
    const config1 = {
        method: "get",
        url: `https://restcountries.eu/rest/v2/name/${country}`,
        data: data,
    };
    return config1
}
  
module.exports = router
