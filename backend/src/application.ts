import * as express from 'express';
import {eventsController} from './controllers/events';
import {careRecipientsController} from './controllers/careRecipients';

const app = express();

app.use('/events', eventsController);
app.use('/care_recipients', careRecipientsController)

export default app;
