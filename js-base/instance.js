// [] instanceof Array => true

function myInstanceOf(left, right) {
    const lProto = Object.getPrototypeOf(left), 
    rProto = right.prototype

    while (true) {
        if (!lProto) return false
        if (lProto === rProto) return true
        lProto = Object.getPrototypeOf(lProto)
    }
}

console.log(myInstanceOf([], Array))