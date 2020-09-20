const express = require("express")
const router = express.Router()


const axios = require('axios');
const qs = require('qs');
const data = qs.stringify({});

const config = {
    method: 'get',
    url: 'https://api.clashroyale.com/v1/clans?minScore=57000&limit=12',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijk5Mjk0ZDYzLWVjNzAtNDBhNi1hMDQ2LWU0MTVlNjYyYjM3ZiIsImlhdCI6MTYwMDQ1ODExNSwic3ViIjoiZGV2ZWxvcGVyLzYxNTQ1NTdkLTgyNGYtNzdiYS1jM2JmLWEwOTg0NTc5OGJhMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0Ny42Mi4xNjIuMjI0IiwiODEuMC4yLjIxMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.VyUDn6SOlQ9i5XdzkooCDpLQyhqZF-j0WbNx89iWXSTYCijToBpAimdNw0iLnQ8cXTX7oaSWWtYFaWJMH4IO7g'
    },
    data: data
};

let datos

axios(config)
    .then(function (response) {
        datos = response.data.items
    })
    .catch(function (error) {
        console.log(error);
    });

router.get('/', (req, res) => {
    res.render('clans/clans.hbs', {
        datos
    })
})

router.get('/details', (req, res) => {
    let a = []
    let clanId = req.query;
    a.push(clanId)
    console.log('esto es el query ', clanId)
    res.render('clans/clan-details.hbs')
})

// router.get('/details/:id', (req, res, next) => {

//     const id = req.params.id
//     console.log(id)
//     const str1 = id.slice(1)
//     console.log(str1)
//     const clan_id = '$23' + str1
//     console.log(clan_id)

// const config = {
//     method: 'get',
//     url: `https://api.clashroyale.com/v1/clans/${clan_id}`,
//     headers: {
//         'Accept': 'application/json',
//         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijk5Mjk0ZDYzLWVjNzAtNDBhNi1hMDQ2LWU0MTVlNjYyYjM3ZiIsImlhdCI6MTYwMDQ1ODExNSwic3ViIjoiZGV2ZWxvcGVyLzYxNTQ1NTdkLTgyNGYtNzdiYS1jM2JmLWEwOTg0NTc5OGJhMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0Ny42Mi4xNjIuMjI0IiwiODEuMC4yLjIxMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.VyUDn6SOlQ9i5XdzkooCDpLQyhqZF-j0WbNx89iWXSTYCijToBpAimdNw0iLnQ8cXTX7oaSWWtYFaWJMH4IO7g'
//     },
//     data: data
// };

// let dataClan

// axios(config)
//     .then(function (response) {
//         dataClan = response.data
//         console.log('ESTO ES CLAN TAG : ',response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

//     res.render('clans/clan-details.hbs')


// })


module.exports = router