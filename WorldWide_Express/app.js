const express = require("express");
const { send } = require("process");
const app = express();

app.get("/",(req,res) => {
    res.send(`
        <h1> Welcome to mu website</h1>
        <h2> take a look</h2>`);
});

app.get("/bored",(req,res)=>{
res.sendFile(__dirname + "/public/activities.html")

});

app.listen(8080,() => {
    ("The server is running", 8080);
});
