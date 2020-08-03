import app from '../src/application';
import * as request from 'supertest';

describe('Care Recipient', () => {
  it('Lists the event types', async () => {
    await request(app)
      .get('/event_types')
      .expect(200)
      .expect((res) => {
        expect(res.body.length).toBe(26)
      })
  })
});