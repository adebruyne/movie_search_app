var express = require("express");
var app = express();
var request = require("request");

// http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
})

app.get("/results", function(req, res){
    request("http://www.omdbapi.com/?s=california&apikey=thewdb", function(error, response, body ){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }


})

})





app.listen(8889, () => {
    console.log('Your Movie app is running at http://localhost: 8889');
})