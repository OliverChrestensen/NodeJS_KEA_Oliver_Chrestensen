const express = require("express");
const { send } = require("process");
const app = express();

app.get("/",(req,res) => {
    res.send(`
        <h1> Welcome to mY website</h1>`);
});

app.get("/clock",(req,res)=>{
res.sendFile(__dirname + "/public/.html")

});

app.listen(process.env.PORT || 5000);
