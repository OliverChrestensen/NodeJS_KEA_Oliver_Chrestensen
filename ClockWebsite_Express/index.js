const express = require("express");
const { append } = require("express/lib/response");
const app = express();

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/public/clock.html")
});


app.listen(process.env.PORT || 5000);
