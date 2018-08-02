'use strict'

const mysql = require('MySQL');
class DBManager {
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }
    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err)
                    return reject(err);
                resolve(rows);
            });
        });
    }
    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    }
};

DBManager.execute = function(config, callback) {
    const db = new DBManager(config);
    return callback(db).then(
        result =>  db.close().then(() => result),
        err => db.close().then(() => { throw err; })
    );
};

module.exports = DBManager;