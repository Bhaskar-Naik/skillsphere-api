const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../app');

describe('GET /api/users', () => {
  it('should return a list of users with status 200', async () => {
    const res = await request(app).get('/api/users');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body[0]).to.have.property('name');
    expect(res.body[0]).to.have.property('email');
  });
});

describe('POST /api/users', () => {
  it('should create a new user with status 201', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Charlie', email: 'charlie@skillsphere.com' });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('name', 'Charlie');
  });

  it('should return 400 if fields are missing', async () => {
    const res = await request(app).post('/api/users').send({ name: 'Charlie' });
    expect(res.status).to.equal(400);
    expect(res.body).to.have.property('error');
  });
});