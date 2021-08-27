import "babel-polyfill"
import { request } from "express";
import {app} from '../index.js';

describe('API resting', () => {
    test("API req should be directed to dist (html)", (done)=>{
        request(app)
        .get('/')
        .send('./dist/index.html')
        .then((response) => {
          expect(response.statusCode).toEqual(200)
          done()
        })
    })
})