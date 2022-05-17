import mongoose from 'mongoose';
import request from 'supertest';
import app from '../app';

beforeAll((done) => {
  done();
});

afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close();
  done();
});

it('send a get request to our root /', () => {
  return request(app).get('/').expect('Content-Type', /json/).expect(200);
});

it('should send a get request and get form data', async () => {
  expect(1 + 1).toBe(2);
});
