const {helloWorld} = require('./index.js')

describe('helloWorld', function() {
    it('should return hello world', function(){
        expect(helloWorld()).toEqual('Hello World')
    })
})