const express = require("express");
const { send } = require("process");
const app = express();
const fetch = require("node-fetch");
const { response } = require("express");

console.log(require("./dinosaurs/dinosaurs.json"))

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
});

app.get("/welcome",(req,res) => {
    res.send(`
        <h1> Welcome to mu website</h1>
        <h2> take a look</h2>`);
});

app.get("/bored",(req,res)=>{
res.sendFile(__dirname + "/public/activities.html")
});

app.get("/proxy",(req,res)=>{
    fetch("http://www.google.com")
.then(response => response.text())
.then(page => res.send(page))
});

//task create a fallback
const PORT = process.env.PORT || 9000;

app.listen(PORT,() => {
    ("The server is running", PORT);
});

console.log(PORT);
