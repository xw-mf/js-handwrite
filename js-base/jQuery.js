class jQyery {
    constructor(selector) {
        const result = document.querySelectorAll(selector)
        const length = result.length
        for (let i = 0; i < length; i++) {
            this[i] = result[i]
        }
        this.length = length
        this.selector = selector
    }

    get(index) {
        return this[index]
    }

    each(fn) {
        for (let i = 0; i < this.length; i++) {
            fn(this[i])
        }
    }
    
    on(eventType, fn){
        return this.each(el => {
            el.addEventListener(eventType, fn, false)
        })
    }
}