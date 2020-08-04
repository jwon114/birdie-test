import app from '../src/application';
import * as request from 'supertest';
import 'jest';

jest.mock('../src/db/connector');

describe('Event Types', () => {
  it('Lists the event types', async () => {
    await request(app)
      .get('/events/types')
      .expect(200)
  });
});
