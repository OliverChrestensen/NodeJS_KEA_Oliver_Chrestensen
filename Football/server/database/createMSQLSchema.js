import db from "./createMYSQLConnection";

db.query(`CREATE TABLE IF NOT EXITS players(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(70)
    );
`);

db.end();