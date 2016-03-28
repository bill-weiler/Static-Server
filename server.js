var fs = require('fs');

// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); //COMMENT THIS OUT

// Routes \\
// var fileContents = fs.readFileSync('data.txt', 'utf-8');
// app.get('/', function(req, res){
//   res.header('Content-Type', 'text/html');
//   res.send(fileContents)
// });
app.get('/', function(req, res){
  fs.readFile('data.txt', function(err, data){
      res.header('Content-Type', 'text/html'),
      res.send(data)
    });
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
