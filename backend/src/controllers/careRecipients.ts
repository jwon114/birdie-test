import * as express from 'express';
import Connector from '../db/connector';

export const careRecipientsController = express.Router();

careRecipientsController.get('/', async (_, res) => {
  const db: any = new Connector();
  const rows = await db.query('SELECT DISTINCT(care_recipient_id) FROM events');
  res.json(rows);
});

careRecipientsController.get('/:careRecipientId', async (req, res) => {
  const db: any = new Connector();
  const rows = await db.query(`SELECT * FROM events WHERE care_recipient_id = '${req.params.careRecipientId}' ORDER BY timestamp LIMIT 50 OFFSET ${(Number(req.query.page) - 1) * 50}`);
  res.json(rows);
});

careRecipientsController.get('/:careRecipientId/events/:eventType', async (req, res) => {
  const db: any = new Connector();
  const rows = await db.query(`SELECT * FROM events WHERE care_recipient_id = '${req.params.careRecipientId}' AND event_type = '${req.params.eventType}' ORDER BY timestamp`);
  res.json(rows);
});