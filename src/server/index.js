var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var request = require('request');


const dotenv = require('dotenv');


dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('dist'))

//console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/nlp', function (req, res) {
    res.json(process.env.API_KEY)
})


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
