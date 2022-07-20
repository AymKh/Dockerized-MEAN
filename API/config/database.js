const mysql = require("mysql");
const util = require("util");

const pool = mysql.createPool({
  connectionLimit: 100,
  host: "mysqldb",
  user: "root",
  password: "123",
  database: "users",
  port: "3306"
});

const asyncPool = pool;
asyncPool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  }

  if (connection) connection.release();

  return;
});

asyncPool.query = util.promisify(asyncPool.query).bind(asyncPool);
module.exports = {
  pool,
  asyncPool
};
