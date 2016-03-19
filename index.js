var express = require('express')
var fs = require('fs');
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var testContent = fs.readFileSync('index.html').toString();

app.get('/', function(request, response) {
  response.send(testContent)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
