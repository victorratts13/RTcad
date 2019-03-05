import Mysql from 'mysql';

export default class Conn extends Comment {
    connection = Mysql.createConnection({
        host: '192.168.100.23',
        user: 'root',
        password: 'root',
        database: 'RTcad'
    });
}