import {Router} from "express";
const router = Router();
import db from "../database/createConnection.js";

const players =[
    {id: 1, name: "Messi"},
    {id: 2, name: "Ronaldo"},
    {id: 3, name: "Ronaldinho"}
]

 router.get("/api/players", async (req,res) => {
    const players = await db.all("Select * from players");
    res.send({data: players})
});


export default router