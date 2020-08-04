class Database {
	connection: object;
	
	constructor() {
		this.connection = {};
	}

	query(_sql: string, _args: any) {
		return new Promise((resolve, _) => {
			console.log('I am mocking a query');
			resolve([]);
		});
	}
}

export default Database;