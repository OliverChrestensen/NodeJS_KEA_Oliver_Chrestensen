//Import Express
const express = require("express")

//instantiation
const app = express();


//the 2 things above in a one-liner
//const app = require("express")

app.use(express.json());

 //2 argumnets (endpoints, callbackfunctions)
app.get("/",(req,res) => {
    res.send({message: "we did it!"});

});

app.get("/welcome",(req,res) => {
    res.send({message: "welcome to my API"});
});

app.get("/clientgreeting/:name", (req, res) => {
    res.send({ greeting: `Hello there, ${req.params.name}.` });
});

// url kangaroofacts?cankick=true
app.get("/kangaroofacts", (req, res) => {
    res.send(req.query);
});

app.post("/mirror", (reg,res) => {
res.send(reg.body);
});

//app.listen buttom at the file
const PORT = 8080;
app.listen(PORT, (error)=> {
    console.log("Server is running on port", 8080)

});

//How can I send data with a get request?
//path variable url: /1
// Query string url: ?key=value&key2=value2