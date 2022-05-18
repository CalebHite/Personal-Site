const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static('public'))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('listening');
});