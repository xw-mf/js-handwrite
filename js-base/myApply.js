Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new Error('myApply must called on a function')
    }
    const ctx = context ? Object(context) : globalThis
    const fnKey = Symbol()
    ctx[fnKey] = this
    let result
    if (arguments[1]) {
        if (!(arguments[1] instanceof Array)) {
            throw new Error('The second parameter of myApply must be array')
        } else {
            result = ctx[fnKey](...arguments[1])
        }
    } else {
        result = ctx[fnKey]()
    }
    delete ctx[fnKey]
    return result
}

const obj = { value: 1 }
function plus(a, b) {
    return this.value + a + b
}
console.log(plus.myApply(obj, [2, 3]))