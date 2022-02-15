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

app.post("/mirror", (reg,res) => {
res.send(reg.body);
});





//app.listen buttom at the file
app.listen(8080);
