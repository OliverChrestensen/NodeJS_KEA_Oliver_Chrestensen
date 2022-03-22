import { Router } from "express";
 const router = Router();


 router.get("/spinplanet", (req,res) => {
     req.session.planetName = "Jupyter";
     const wasSpinning = req.session.isSpinning;
     req.session.isSpinning = true;
     res.send({message: `Planet was: ${wasSpinning}.`})
 })

 router.get("/stopplanet", (req,res) => {
     const wasSpinning = req.session.isSpinning;
     req.session.isSpinning =false;
    res.send({message: `Planet was: ${wasSpinning}. `})
})

 export default router;

