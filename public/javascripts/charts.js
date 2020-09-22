// var myRadarChart = new Chart(polarArea, {
//     type: 'radar',
//     data: {
//         labels:["trophies"],
//         dataset: [{
//             data:[{trophies}]
//         }]
//     },
//     options: options
// })

const config = {
        method: "get",
        url: `https://api.clashroyale.com/v1/cards`,
        headers: {
            Accept: "application/json",
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijk5Mjk0ZDYzLWVjNzAtNDBhNi1hMDQ2LWU0MTVlNjYyYjM3ZiIsImlhdCI6MTYwMDQ1ODExNSwic3ViIjoiZGV2ZWxvcGVyLzYxNTQ1NTdkLTgyNGYtNzdiYS1jM2JmLWEwOTg0NTc5OGJhMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0Ny42Mi4xNjIuMjI0IiwiODEuMC4yLjIxMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.VyUDn6SOlQ9i5XdzkooCDpLQyhqZF-j0WbNx89iWXSTYCijToBpAimdNw0iLnQ8cXTX7oaSWWtYFaWJMH4IO7g",
        }
    }

fetch(config)
    .then(response => response.json())
    .then(data => console.localStorage(data))


    