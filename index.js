function sum(a, b) {
    if ((isNaN(a) || isNaN(b))) {
        throw new Error('Input incorrect')
    }
    return a + b;
}
module.exports = { sum };