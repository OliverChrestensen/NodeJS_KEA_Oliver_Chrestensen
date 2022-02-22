const express = require("")
const app = express();

app.use(express.static("public"));

app.get("/frontpage", (req,res) => {
res.sendFile(__dirname + "/public/pages/frontpage")
});

const PORT = 8080;
app.listen(PORT, () => {
    ("The server is running", 8080);
});