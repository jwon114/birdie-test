import * as express from "express";
import * as mysql from 'mysql';

export const pingController = express.Router();

pingController.get('/hello', (_, res) => {
  res.status(200).json({
    greetings: 'Thank you for spending some time on this test. All the best 🙌'
  });
});

pingController.get('/welcome', (_, res) => {
  const connection = mysql.createConnection({
    host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
    user: 'test-read',
    password: 'xnxPp6QfZbCYkY8',
    database: 'birdietest',
    port: 3306
  })

  connection.connect()

  connection.query('SELECT distinct(event_type) FROM events', (err: Error, rows: Array<Event>, _fields: any) => {
    if (err) throw err

    res.json({
      // data: rows.map(row => JSON.parse(row["payload"]))
      data: rows
    });
  })

  connection.end()
});