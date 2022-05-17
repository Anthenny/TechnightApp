// const request = require('supertest');
// const app = require('../app');
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
  try {
    const response = await request(app)
      .get('/api/v1/form')
      .expect('Content-Type', /json/)
      .expect(200);

    console.log(response);
  } catch (err) {
    console.log(err);
  }
});

// it('/api/v1/form', async () => {
//   const data = {
//     name: 'supertest',
//     email: 'supertest@hotmail.com',
//     phoneNumber: '0636082244',
//     company: 'developers.nl'
//   };

//   const response = await request(app).post('/api/v1/form').send(data);
//   console.log(response);
// });

// describe('Form API', () => {
//   it('GET /form --> todos', () => {
//     return request(app)
//       .get('/api/v1/form')
//       .expect('Content-Type', /json/)
//       .expect(200);
//   });
// });
