const express = require("express");
const app = express();

app.get("/",(req,res) => {
    res.send(`
        <h1> Welcome to mY website</h1>`);
});


app.listen(process.env.PORT || 5000);
