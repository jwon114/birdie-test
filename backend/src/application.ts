import * as express from 'express';
import {pingController} from './controllers/ping';
import {careRecipientController} from './controllers/careRecipientController';
import {eventTypesController} from './controllers/eventTypesController';

const app = express();

app.use(pingController);
app.use('/care_recipients', careRecipientController);
app.use('/event_types', eventTypesController);

export default app;
