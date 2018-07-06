const express = require('express');
const axios = require('axios');
var cors = require('cors')

const app = express();
const port = 3001;

app.use(cors());
app.use('/static', express.static(__dirname + '/build/static'));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`)
});

app.get('/company', (req, res) => {
    axios.get(`http://api.likvido.dk/api/company?query=${req.headers.value}`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
        .then(({data}) => {
            res.json(data)
        })
        .catch((e) => {
        });
});

app.get('/searchAPI', (req, res) => {
    axios.get(`http://kredit.likvido.dk/api/companytypeahead?query=${req.headers.value ? req.headers.value : 'youf'}`, {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
    },})
        .then(({data}) => {
            res.json(data)
        })
        .catch((e) => {
            console.log(e);
        });
});


app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})