
const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();

const variables = fs.readFileSync("./public/pages/variables/variables.html").toString();

const RESTAPI = fs.readFileSync("./public/pages/RESTAPI/RESTAPI.html").toString();

const expresshtml = fs.readFileSync("./public/pages/express/express.html").toString();

const nodemon = fs.readFileSync("./public/pages/nodemon/nodemon.html").toString();

app.get("/", (req, res) => {
    res.send(nav+frontpage);
});

app.get("/variables", (req, res) => {
    res.send(nav+variables);
});

app.get("/RESTAPI", (req, res) => {
    res.send(nav+RESTAPI);
});

app.get("/express", (req, res) => {
    res.send(nav+expresshtml);
});

app.get("/nodemon", (req, res) => {
    res.send(nav+nodemon);
});


const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server started on port:", PORT);
});