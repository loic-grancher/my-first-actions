const {sum} = require("../index.js")
const {test, expect} = require("@jest/globals")
test("adds 2 integers", ()=> {
    expect(sum(1,2)).toBe(3)
})