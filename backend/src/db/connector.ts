import * as mysql from 'mysql';

class Database {
	connection: mysql.Connection;
	
	constructor() {
		this.connection = mysql.createConnection({
			host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
			user: 'test-read',
			password: 'xnxPp6QfZbCYkY8',
			database: 'birdietest',
			port: 3306
		});
	}

	query(sql: string, args: any) {
		return new Promise((resolve, reject) => {
			this.connection.query(sql, args, (err, rows) => {
				if (err) {
					return reject(err);
				}

				this.connection.end(err => {
					if (err) {
						return reject(err);
					}
					resolve(rows);
				})			
			});
		});
	}
}

export default Database;