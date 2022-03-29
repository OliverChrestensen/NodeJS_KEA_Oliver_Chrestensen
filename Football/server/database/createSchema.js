import db from "./createConnection.js";

const isInDEleteMOde = true;

if(isInDEleteMOde){
db.exec("DROP TABLE IF EXISTS players;");
}

db.exec(`CREATE TABLE IF NOT EXISTS players(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(70) 
);`);

//seed (hardcoded data for test)
db.run("INSERT INTO players (name) VALUES ('Messi')")
db.run("INSERT INTO players (name) VALUES ('Ronaldo')")
db.run("INSERT INTO players (name) VALUES ('Ronaldinho')")

db.close();