import supertest from 'supertest';
import app from '../../index';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('localhost:3000/', () => {
  it('test /', async () => {
    const response: supertest.Response = await request.get('/');

    expect(response.status).toBe(200);
  });
});
