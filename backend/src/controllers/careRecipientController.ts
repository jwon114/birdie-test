import * as express from 'express';
import dbConnector from '../db/connector';

export const careRecipientController = express.Router();

interface Event {
  payload: string
}

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


careRecipientController.get('/', (req, res) => {
  const connection = dbConnector();

  connection.query(`SELECT * FROM events WHERE care_recipient_id = '${req.query.id}' AND event_type = '${req.query.event_type}' ORDER BY timestamp`, (err: Error, rows: Array<Event>, _fields: any) => {
    if (err) throw err
    res.json({
      data: rows.map(row => JSON.parse(row["payload"]))
    });
  })
});
