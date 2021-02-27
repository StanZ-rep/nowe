const express = require("express");
const functions = require("./functions")

const app = express();
const port = 3000;
const path = require("path")
app.set("view engine","hbs");
app.use("/assets",express.static(path.join(__dirname,"./assets/css"))); 
app.use("/js",express.static(path.join(__dirname,"./js")))

app.get("/", function(req,res){
    res.render("index", {
        pageTitle: "Zajęcia 27.02",
        subTitle: functions.someText,  
        subsubTitle: functions.someFunction,
    })
})

app.get("/about", function(req,res){
    res.send("Strona o mnie")
})

app.get("/about/marcin", function(req,res){
    res.send("Strona o Marcina")
})


app.listen(port,(err) => {
    if (err) { return console.log(`Wystąpił błąd: ${err}`)}
        console.log(`Aplikacja działa na porcie ${port})`)

});





