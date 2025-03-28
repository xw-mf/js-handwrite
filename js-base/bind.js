Function.prototype.myBind = function () {
    const args = Array.prototype.slice.call(arguments)

    const newThis = args.shift()

    const self = this

    return function () {
        return self.apply(newThis, args)
    }
}