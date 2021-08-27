// Configuration to be able to use env variables {API_KEY, API_URL (base url)}, and other variables needed
const dotenv = require('dotenv');
dotenv.config();

const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');

//start directory
var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

//start instance of app
const app = express();

//Configure express static directory.
app.use(express.static('dist'));

//Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// cors for cross origin allowance
app.use(cors());

//set API

const API_KEY = process.env.API_KEY
const API_URL = process.env.API_URL


app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// Defining the port it will be listening to
const PORT = 55555

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!  \n http://localhost:${PORT}/`);
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})

app.post('/analyze', async function (req, res) {
    //URL from request body
    const urlToCheck = req.body.url;

    // console.log(`we got hit! request: ${urlToCheck}`)
//fetch data from API
    const result = await fetch(`${API_URL}&key=${API_KEY}&lang=auto&url=${urlToCheck}`);

    const data = await result.json()
 
    res.send(data)

})

// export app for unit testing
    module.exports = {
        app,
      }