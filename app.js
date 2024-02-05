//jshint es6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("home")
})

app.post('/', function(req, res){
    res.redirect('/')
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
})