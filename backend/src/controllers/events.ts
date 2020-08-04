import * as express from 'express';
import Connector from '../db/connector';

export const eventsController = express.Router();

eventsController.get('/types', async (_, res) => {
  const db: any = new Connector();
  const rows = await db.query("SELECT DISTINCT(event_type) FROM events");
  res.json(rows.map((rows: { [x: string]: any; }) => rows["event_type"]));
});
