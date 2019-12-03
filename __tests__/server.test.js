/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../server/server');

const request = supertest(app);

describe('Server endpoint', () => {
  it('Successfully handles a get request', async (done) => {
    const res = await request.get('/api/F');

    expect(res.status).toBe(200);
    done();
  });

  it('Responds with correct data', async (done) => {
    const res = await request.get('/api/F');

    expect(res.body.user).toBeTruthy();
    expect(res.body.stock.price).toBe(705.35);
    done();
  });

  it('Responds with 404 to a request for non-existing company', async (done) => {
    const res = await request.get('/api/zzzzzz');

    expect(res.status).toBe(404);
    done();
  });
});
