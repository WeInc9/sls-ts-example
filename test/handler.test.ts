
import { hello } from '../src/app';
const  context = require('aws-lambda-mock-context');

const ctx = context();

describe("hello", () => {

    const event = "{ body: { name: test}}"

    function callback(_err: any, data: any) {
        console.log("test", JSON.stringify(data));
        expect(data.statusCode).toBe(200);
    }
    it('should return true', () => { 
        hello(event, ctx, callback)
    }); 
});