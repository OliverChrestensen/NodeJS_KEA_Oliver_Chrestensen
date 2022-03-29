import express from "express";
import helmet from "helmet";
const app = express();

app.use(express.static("public"));
app.use(helmet());

//####################
//Set up a ratelimit
//####################
import rateLimit from 'express-rate-limit'

const authLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use("/auth/login",authLimiter);

app.post("/auth/login", (req,res) =>{
    res.send({message: "you are trying to login"});

})

//########### using session - remember to turn cookies to false bcs we use http and not https
import session from "express-session";

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

  import router from "./routers/planets.js";


  app.use(router);

  import path from "path";
  

app.get("/clothes", (req,res) => {
res.sendFile(path.resolve("public/clothes.html"));
});

function ipLogger(){
console.log (req.ip);
next();
}


app.get("/frontgate", ipLogger, (req,res) => {
    res.send({});
})

let isHatchOpen = true
function allowEscape(req,res,next){
  if(isHatchOpen){
    console.log("Go on");
    req.escape = "Jimmy"
    next();
  } else {
      res.send({message: "you are not allowed to pass"});
  }
  
}

app.get("/escapehatch", allowEscape, (req,res) => {
    res.send({message: `congratz ${req.escape}, you have managed to escape!`})
});

app.get("/room", (req,res, next) => {
    console.log("you are in room 1");
    next();
});

app.get("/room", (req,res) => { 
    res.send({data: "you are in room 2"});
});


const PORT = 8080;


app.listen(PORT,() => {
    console.log("Starting server on", PORT)
});

