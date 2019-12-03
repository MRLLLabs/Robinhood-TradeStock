/* eslint-disable no-undef */
const supertest = require('supertest');
// const babelPolyfill = require('babel-polyfill');
const app = require('./server');

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
    expect(res.body.user.funds).toBe(830.19);
    done();
  });
});
