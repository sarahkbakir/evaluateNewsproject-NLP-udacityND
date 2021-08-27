import 'babel-polyfill'
import {checkURL} from '../js/checkURL'


describe("the URL validation function", ()=> {
    test("checkURL function testing", ()=>{
        expect(checkURL).toBeDefined()
    })

    test('CheckURL return false when given invalid URL input', ()=> {
        expect(checkURL("blablabla123")).toBeFalsy()
    })
    test("checkURL return true when given a valid form URL input", ()=>{
        expect(checkURL("http://www.google.com")).toBeTruthy()
    })
})