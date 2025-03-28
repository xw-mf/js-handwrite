// 函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。

function throttle(fn, delay) {
    let curTime = Date.now()

    return function() {
        let self = this
        let args = Array.prototype.slice.call(arguments)
        if (Date.now() - curTime >= delay) {
            curTime = Date.now()
            return fn.apply(self, args)
        }
    }
}
