function bindEvent(ele, type, selector, fn) {
    if (fn == null) {
        fn = selector
        selector = null
    }
    ele.addEventListener(type, (e) => {
        const target = e.target
        if (selector) {
            if (target.matches(selector)) {
                fn.call(target, e)
            }
        } else {
            fn.call(target, e)
        }
    })
}