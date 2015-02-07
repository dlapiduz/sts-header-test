var express = require('express');
 
var app = express();
 
var hsts = require('hsts');

app.use(hsts({
  maxAge: 10886400000,     // Must be at least 18 weeks to be approved by Google
  includeSubdomains: true, // Must be enabled to be approved by Google
  preload: true,
  force: true
}));

app.get('/', function (req, res) {
  res.send('Hello World!')
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {

  var host = server.address().address;

  console.log('Example app listening at http://%s:%s', host, port);

})


