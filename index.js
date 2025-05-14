const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})




function sum(a, b) {
    if ((isNaN(a) || isNaN(b))) {
        throw new Error('Input incorrect')
    }
    return a + b;
}
module.exports = { sum, app };