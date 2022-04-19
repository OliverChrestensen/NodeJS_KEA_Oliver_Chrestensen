import express from "express";
import userRouters from "./routers/userRouters.js";
import mongoose from "mongoose";
const app = express();
app.use(express.json());

    
    mongoose
    .connect("mongodb://localhost:27017/demo", { useNewUrlParser: true })
    .then((_) => console.log("Connected to DB"))
    .catch((err) => console.error("error", err));

    app.set('trust proxy', 1);
    import session from "express-session";
    app.use(session({
    secret: "hello",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

import cors from "cors";
app.use(cors());

import path from "path";
app.use(express.static(path.resolve("../client/public")));


app.use("/auth", userRouters);

app.get("/", (req, res) => {
    if (req.session.name) {
      
      res.json(req.session.name);

    } else {
      res.status(400).json({ error: "Unable to found User" });
    }
  })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Starting server on port", PORT)
})