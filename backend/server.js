// var express = require('express');
// var bodyParser = require('body-parser');
// var cors = require('cors');
// var app = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.listen(8081, function (req,res) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     console.log("listening..8081");
// })

// var users = [   { id:1, name:'Nilesh' },
//                 { id:2, name:'Prashant' },
//                 { id:3, name:'Manoj' },
//                 { id:4, name:'Amit' }
//             ];

// app.get('/getUsers', function (req, res, next) {
//     res.json(users)
// });

// app.post('/userDetails/:id', function (req, res, next) {
//     res.json(req.params.id)
// });

const express   = require('express');
const bodyParser= require('body-parser');
const users   = require('./routes/users.route'); // Imports routes for the products
const app       = express();

// Set up mongoose connection
const mongoose  = require('mongoose');
let dev_db_url  = 'mongodb://localhost:27017/sampleApplication';
const mongoDB   = dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise= global.Promise;
const db        = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', users);

let port = 8081;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});