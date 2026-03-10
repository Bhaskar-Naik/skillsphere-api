const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../app');

describe('GET /api/courses', () => {
  it('should return a list of courses with status 200', async () => {
    const res = await request(app).get('/api/courses');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.greaterThan(0);
  });
});

describe('POST /api/courses', () => {
  it('should create a new course with status 201', async () => {
    const res = await request(app)
      .post('/api/courses')
      .send({ title: 'MongoDB Mastery' });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('title', 'MongoDB Mastery');
  });

  it('should return 400 if title is missing', async () => {
    const res = await request(app).post('/api/courses').send({});
    expect(res.status).to.equal(400);
    expect(res.body).to.have.property('error');
  });
});