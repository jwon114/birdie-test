import app from '../src/application';
import * as request from 'supertest';
import 'jest';

jest.mock('../src/db/connector');

describe('Care Recipients list', () => {
  it('Lists the Care Recipients', async () => {
    await request(app)
      .get('/care_recipients')
      .expect(200)
  });
});

describe('All events', () => {
  it('Lists the Care Recipient with all events', async () => {
    await request(app)
      .get('/care_recipients/df50cac5-293c-490d-a06c-ee26796f850d?page=1')
      .expect(200)
  });
});

describe('Specific events', () => {
  it('Lists specific events for a Care Recipient', async () => {
    await request(app)
      .get('/care_recipients/df50cac5-293c-490d-a06c-ee26796f850d/events/mood_observation')
      .expect(200)
  });
});
