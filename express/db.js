var mysql = require('mysql');

var pool;

exports.connect = function() {
    pool = mysql.createPool({
        connectionLimit: 100,
        host: "dbinstance.cjtwsqeipr5z.ap-northeast-2.rds.amazonaws.com",
        user: "admin",
        database: "payquick_db",
        password: "nobitcoin",
        port: 3306
    });
}

exports.get = function() {
  return pool;
}
