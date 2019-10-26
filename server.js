var express = require('express');
var app = express();

var port = 9000

app.use(express.static('dist'));

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});