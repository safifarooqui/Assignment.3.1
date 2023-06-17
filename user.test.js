const supertest = require('supertest');
const chai = require('chai');
const app = require('../server');

const expect = chai.expect;
const request = supertest(app);

describe('POST /users', function() {
    it('should create a new user', function(done) {
        const user = {
            name: 'Test User',
            email: 'test@test.com',
            password: 'test123'
        };
        request.post('/users')
            .send(user)
            .end(function(err, res) {
                expect(res.statusCode).to.equal(200);
                expect(res.body.name).to.equal(user.name);
                expect(res.body.email).to.equal(user.email);
                done();
            });
    });
});
