const express = require('express');
const path = require('path');
let app = express();
let $;

// backend virtual dom for jquery
require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }

    $ = require("jquery")(window);
});

//prepend
app.use(express.static('public/'));

//routes
app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname + '/public/views/index.html'));
    res.sendFile(path.join(__dirname + '/public/omail-calendar.html'));
});

//api
app.get('/api/deployments', (req, res) => {
    res.sendFile(path.join(__dirname + '/data/deployments.json'));
});

app.get('/api/deployment/:depId', (req, res) => {
    res.sendFile(path.join(__dirname + '/data/single/' + req.params.depId + '.json'));
});

app.listen(3000);