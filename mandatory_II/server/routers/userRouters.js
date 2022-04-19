import bcrypt from "bcrypt";
import {Router} from "express";
import nodemailer from "nodemailer";
import User from "../database/createSchema.js";


const router = Router();

  // signup route
  router.post("/signup", async (req, res) => {
    const body = req.body;

    if (!(body.email && body.password)) {
      return res.status(400).send({ error: "Data not formatted properly" });
    }

    // creating a new mongoose doc from user data
    const user = new User(body);

    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);

    // now we set user password to hashed password
    user.password = await bcrypt.hash(user.password, salt);
    user.save().then((doc) => res.status(201).send(doc));


    //setting up email transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'larslarsen296@gmail.com',
        pass: 'LarsLarsen1234'
      }
    });
    
    //email configurations
    const mailOptions = {
      from: 'larlarsen296@gmail.com',
      to: user.email,
      subject: 'WELCOME TO THE NEW STORE',
      text: 'Thanks for signing up'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    
  });

// login route
router.post("/login", async (req, res) => {
  const body = req.body;
  const user = await User.findOne({ email: body.email });
  if (user) {
    // check user password with hashed password stored in the database
    const validPassword = await bcrypt.compare(body.password, user.password);
    if (validPassword) {
      req.session.name = user.email
      res.status(200).json({ message: "Valid password" });
      console.log("login in - valid password");
      
    } else {
      res.status(400).json({ error: "Invalid Password" });
      console.log("invalid password");
    }
  } else {
    res.status(401).json({ error: "User does not exist" });
    console.log("User does not exits");
  }
});

router.post("/signout", async (req, res) => {
  req.session.detroy();
  console.log("The session is detroyed");
 res.status(200).json({message: "you are now signed out"});

});

export default router;