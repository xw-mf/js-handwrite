// （1）首先创建了一个新的空对象
// （2）设置原型，将对象的原型设置为函数的 prototype 对象。
// （3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
// （4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

function myNew() {
    const args = Array.prototype.slice.call(arguments)
    const constructor = args.shift()
    if (typeof constructor !== 'function') {
        throw new Error('第一个参数必须为函数')
    }
    const newObj = Object.create(constructor.prototype)
    const result = constructor.apply(newObj, args)
    const isObjOrFunc = typeof result === 'function' || typeof result === 'object'
    
    return isObjOrFunc ? result : newObj
}
function Student(name, age) {
    this.name = name
    this.age = age
}

const myStudent = myNew(Student, 'lxw', 13)