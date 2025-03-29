Function.prototype.myBind = function () {
    const self = this
    if (typeof self !== 'function') {
        throw new Error('myBind must called on a function')
    }
    const ctx = Array.prototype.slice.call(arguments).shift()
    return function () {
        const args = Array.prototype.slice.call(arguments)
        return self.apply(ctx, args)
    }
}

function plus(a, b) {
    return this.value + a + b
}

const obj = { value: 1 }
const bindFn = plus.myBind(obj)

console.log(bindFn(2, 3))