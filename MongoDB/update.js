import db from "./createConnection.js";

db.tutorials.updateMany({channelName: "How To Basic"}, {$set: {views:12244} })