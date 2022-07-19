const util = require("util");
const { pool } = require("../config/database");

const getNames = (req, res)=>{
    pool.getConnection(async (err, connection) => {
        if (err) {
            res.status(500);
        } else {
            const asyncQuery = util.promisify(connection.query).bind(connection);
            try {
                const query = `SELECT * FROM names`;
                const rows = await asyncQuery(query);
                res.json(rows);
            } catch (err) {
                console.log(err);
                res.status(500);
            } finally {
                connection.release();
            }
        }
    });
};

const insertName = (req, res)=>{
    pool.getConnection(async (err, connection) => {
        if (err) {
            res.status(500);
        } else {
            const asyncQuery = util.promisify(connection.query).bind(connection);
            try {
                console.log(req.body);
                const rows = await asyncQuery(`INSERT INTO names(user_name) VALUES ( '${req.body.name}' )`);
                res.json(rows);
            } catch (err) {
                console.log(err);
                res.status(500);
            } finally {
                connection.release();
            }
        }
    });
};


module.exports = {
    getNames,
    insertName
}