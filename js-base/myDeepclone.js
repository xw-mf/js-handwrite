function myDeepclone(obj) {
    if (typeof obj !== 'object' || obj == null) return obj
    const result = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = myDeepclone(obj[key])
        }
    }
    return result
}

const a = {
    a: 10,
    b: 20,
    c: [1, 2, 3],
    d: {
        x: 10,
        y: 20
    }
}

const deepCloneObj = myDeepclone(a)
deepCloneObj.b = 200
deepCloneObj.c.push(1000)
deepCloneObj.d.y = 200
console.log(a)
console.log(deepCloneObj)