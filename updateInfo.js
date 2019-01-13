let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'mydb'
});

function updateInfo(name, address, completion) {
    connection.connect(function(err) {
        if (err) throw err;
        console.log('Connected!');

        var sql = `UPDATE customers SET address = '${address}' WHERE name = '${name}'`
        connection.query(sql, function (err, result) {
            if (err) {
                completion(err)
                return
            }
            completion("Number of record updated: " + result.affectedRows);
        });
    });
}

exports.updateInfo = updateInfo