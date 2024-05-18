const { assert, js } = require('./helpers.js')

describe('index.js', function() {
    describe('isNum1Prime', function() {
        it('is initially undefined', function() {
            expect(js).to.match(/let isNum1Prime;/, "Expected isNum1Prime to be undefined at the start of the test");
        })
        
        it('is set to true after the statement is complete', function() {
            assert.equal(isNum1Prime, true)
        })
    })

    describe('isNum2Prime', function() {
        it('is initially undefined', function() {
            expect(js).to.match(/let isNum2Prime;/, "Expected isNum2Prime to be undefined at the start of the test");
        })
        
        it('is set to false after the statement is complete', function() {
            assert.equal(isNum2Prime, false)
        })
    })
})