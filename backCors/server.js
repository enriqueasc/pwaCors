const express = require('express');

const cors = require('cors');

const app = express();


//res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//npm install cors


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['http://localhost:5173/', 'http://localhost:4000/']);
    res.append('Access-Control-Allow-Methods', 'GET, DELETE');
    //res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});



//por default con esta intruccion agrega el allow origin con * y allow methods con todos los metodos

/*
app.use(cors(
    origin = ['http://localhost:5173/', 'http://localhost:4000/'],
    methods = ['GET'],
));
*/

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.delete('/dos', (req, res) => {
    res.send('delete');
});

app.listen(3000)

console.log('Server on port 3000');