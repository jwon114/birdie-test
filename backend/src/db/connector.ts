import * as mysql from 'mysql';

const dbConnector = () => (
    mysql.createConnection({
        host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
        user: 'test-read',
        password: 'xnxPp6QfZbCYkY8',
        database: 'birdietest',
        port: 3306
    })
)

export default dbConnector;