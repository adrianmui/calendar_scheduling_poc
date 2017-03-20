const express = require('express');
const path = require('path');
let app = express();
let $;

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
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

//api
app.get('/api/deployments', function(req, res) {
    res.sendFile(path.join(__dirname + '/data/deployments.json'));
});
 
app.listen(3000);