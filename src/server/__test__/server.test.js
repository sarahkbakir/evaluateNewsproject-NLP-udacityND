import "babel-polyfill"
import {app} from '../index.js';
const request = require('supertest')

describe('API requests test', () => {
  test('It Should return "not-found" error as "add" is a POST request not a GET', (done) => {
    request(app)
      .get('/add')
      .then((response) => {
        expect(response.statusCode).toBe(404)
        done()
      })
  })
  test('It Should return success status response "200', (done) => {
    request(app)
      .post('/analyze')
      .then((response) => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })
})