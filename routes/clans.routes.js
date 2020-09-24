const express = require('express')
const router = express.Router()
const api = require('../configs/api.config')

const axios = require('axios')
const qs = require('qs')
const data = qs.stringify({})
const royaleApi = new api()

router.get('/', (req, res) => {
    royaleApi
        .getClans()
        .then(response => response.data.items)
        .then(datos => res.render('clans/clans', { datos }))
        .catch(err => console.log(err))
})
  
router.post('/details', (req, res, next) => {
    const input = req.body.tag
    let id = input.slice(1)
    let dataClan
    let countryFlag
    royaleApi
        .getClanDetails(id)
        .then(response => {
           dataClan = response.data
            return dataClan
        })
        .then(() => axios(getFlagConfig(dataClan.location.name)))
        .then(loc => {
            countryFlag = loc.data[0].flag
            return countryFlag
        })
        .then(() => res.render('clans/clan-details',{dataClan, countryFlag}))
        .catch(err => next(err))
   
})

// Restcountries API request
function getFlagConfig(country) {
    const config1 = {
        method: 'get',
        url: `https://restcountries.eu/rest/v2/name/${country}`,
        data: data,
    };
    return config1
}
  
module.exports = router
