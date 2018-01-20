var fs = require('fs');
var express = require('express');
var app = express();

app.get('/books', function(request, response) {
fs.readFile(process.argv[3], function(error, data) {
if (error) {
console.log(error);
}
response.send(JSON.stringify(JSON.parse(data)));
});
});
app.listen(process.argv[2]);