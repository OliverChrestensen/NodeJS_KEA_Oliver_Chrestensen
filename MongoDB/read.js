import db from "./createConnection.js";

const allTutorials = await db.tutorials.find();

console.log(allTutorials);