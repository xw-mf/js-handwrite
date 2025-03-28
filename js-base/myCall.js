Function.prototype.myCall = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new Error('myCall must called on a function')
    }
    const ctx = context ? Object(context) : globalThis
    const fnKey = Symbol()
    ctx[fnKey] = this
    const result = ctx[fnKey](...args)
    delete ctx[fnKey]
    return result
}

const obj = { value: 1 }
function plus(a, b) {
    return this.value + a + b
}
console.log(plus.myCall(obj, 2, 3))