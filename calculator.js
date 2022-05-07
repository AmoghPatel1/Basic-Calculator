const express = require("express");
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");      // To send a html file use sendFile function with full path of file.  Use '__dirname' for complete path of parent folder.
})

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/", function(req, res){
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let op = req.body.operator;
    let result;
    if(op === "add"){
        result = num1 + num2;
    } else if(op === "sub") {
        result = num1 - num2;
    } else if(op === "mul") {
        result = num1 * num2;
    } else if(op === "div") {
        result = num1 / num2;
    } else if(op === "mod") {
        result = num1 % num2;
    }

    res.send("The result of the calculation is " + result);
})

app.post("/bmicalculator", function (req, res) {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmi = weight / (height * height);

    res.send("Your BMI is " + bmi);
})

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});