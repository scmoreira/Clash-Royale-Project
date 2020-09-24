const axios = require('axios')
const qs = require('qs')
const data = qs.stringify({})

class RoyaleApiHandler {
    constructor() {
        this.config = axios.create({
            method: 'get',
            baseURL: 'https://api.clashroyale.com/v1',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.API_KEY}`
            },
            data: data
        })
    }
    getAllCards = () => this.config('/cards')
    getClans = () => this.config('/clans?minScore=57000&limit=20')
    getClanDetails = id => this.config(`/clans/%23${id}`)
    getPlayerDetails = id => this.config(`/players/%23${id}`)
    getRankingClans = id => this.config(`/locations/${id}/rankings/clans?limit=20`)
    getRankingPlayers = id => this.config(`/locations/${id}/rankings/players?limit=10`)
}

module.exports = RoyaleApiHandler;



