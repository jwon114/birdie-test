import * as express from 'express';
import dbConnector from '../db/connector';

export const eventTypesController = express.Router();

interface EventType {
  event_type: string
}

eventTypesController.get('/', (_, res) => {
  const connection = dbConnector();

  connection.query("SELECT DISTINCT(event_type) FROM events", (err: Error, rows: Array<EventType>, _fields: any) => {
    if (err) throw err
    res.json(rows.map(row => row["event_type"]));
  })
});

// "event_type": "fluid_intake_observation"
//   },
//   {
//   "event_type": "task_completed"
//   },
//   {
//   "event_type": "physical_health_observation"
//   },
//   {
//   "event_type": "visit_completed"
//   },
//   {
//   "event_type": "check_out"
//   },
//   {
//   "event_type": "mood_observation"
//   },
//   {
//   "event_type": "regular_medication_taken"
//   },
//   {
//   "event_type": "alert_raised"
//   },
//   {
//   "event_type": "no_medication_observation_received"
//   },
//   {
//   "event_type": "incontinence_pad_observation"
//   },
//   {
//   "event_type": "check_in"
//   },
//   {
//   "event_type": "general_observation"
//   },
//   {
//   "event_type": "regular_medication_not_taken"
//   },
//   {
//   "event_type": "food_intake_observation"
//   },
//   {
//   "event_type": "task_completion_reverted"
//   },
//   {
//   "event_type": "mental_health_observation"
//   },
//   {
//   "event_type": "medication_schedule_updated"
//   },
//   {
//   "event_type": "visit_cancelled"
//   },
//   {
//   "event_type": "regular_medication_maybe_taken"
//   },
//   {
//   "event_type": "medication_schedule_created"
//   },
//   {
//   "event_type": "alert_qualified"
//   },
//   {
//   "event_type": "task_schedule_created"
//   },
//   {
//   "event_type": "concern_raised"
//   },
//   {
//   "event_type": "regular_medication_partially_taken"
//   },
//   {
//   "event_type": "catheter_observation"
//   },
//   {
//   "event_type": "toilet_visit_recorded"