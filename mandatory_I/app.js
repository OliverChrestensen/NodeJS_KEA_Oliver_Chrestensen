const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();


app.get("/", (req, res) => {
    res.send(nav+frontpage);
});





const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server started on port:", PORT);
});