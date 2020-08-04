import * as express from 'express';
import Connector from '../db/connector';

export const careRecipientsController = express.Router();

// care recipient ids
// {
//   "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
//   },
//   {
//   "care_recipient_id": "e3e2bff8-d318-4760-beea-841a75f00227"
//   },
//   {
//   "care_recipient_id": "ad3512a6-91b1-4d7d-a005-6f8764dd0111"
//   }

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