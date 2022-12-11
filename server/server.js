console.log('in server.js');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5017;

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('server is listening')
})

