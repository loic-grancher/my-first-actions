const {sum} = require("../index.js")

test("adds 2 integers", ()=> {
    expect(sum(1,2)).toBe(3)
})