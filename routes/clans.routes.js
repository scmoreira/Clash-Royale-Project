const express = require("express")
const router = express.Router()

const axios = require("axios")
const qs = require("qs")
const data = qs.stringify({})

const config = {
    method: "get",
    url: "https://api.clashroyale.com/v1/clans?minScore=57000&limit=20",
    headers: {
        Accept: "application/json",
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjdjNDk2ZDQwLWJhNDgtNDBkZC1iN2U5LWQ1NzI0YjNlZmQxZCIsImlhdCI6MTYwMDg3NDE4Miwic3ViIjoiZGV2ZWxvcGVyLzYxNTQ1NTdkLTgyNGYtNzdiYS1jM2JmLWEwOTg0NTc5OGJhMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI1Mi4xOS4xNzIuMjQiLCI0Ny42Mi4xNjIuMjI0IiwiODEuMC4yLjIzOCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.ljKTZffVhGNGrDh7nSXKBRTdZs3lRB3EaZsy-uVRbdElNnfCVj4BhVHAqp1WPygSr2s-pZQAiKYc37svw8SzhQ'
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
