import db from "./createMYSQLConnection"

db.query(`INSERT INTO players (name) VALUES ('Malthe')`,(err,data) => {
    console.log(data);

    db.end();
});