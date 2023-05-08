/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

var app = express()

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.static('public'));



app.get('/formData', function(req, res){
    res.render('form');
})

app.post('/formData', function(req,res){
    const { name, registrationNo } = req.body;
    res.render('greeting', { name, registrationNo });
})

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
});


app.listen(5000)