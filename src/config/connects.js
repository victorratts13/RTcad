const Mysql = require('mysql');

const connection = Mysql.createConnection({
    host: '192.168.100.23',
    user: 'root',
    password: 'root',
    database: 'RTcad'
});


export default connection;