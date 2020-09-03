/**
 * 类装饰器
 * 应用于类的构造函数之上，主要是对类的构造函数进行重写，类的构造函数作为其唯一参数
 * 在TS中 new() 表示的是构造函数的签名，即构造函数的参数，当()中没有参数，表明构造函数不需要传参
 * 所谓的对象字面量，就是指那种不使用构造函数生成的对象，直接使用“{}”进行赋值，即为对象字面量
 */
function classDecorator<T extends { new (...args: any[]): {} }> (constructor: T) {
    return class extends constructor {
        property = '1'  // 使用 = 而不是 :， 这里是constructor内部
        helloworld = 'new world'
    }
}

@classDecorator
class Cd {
    property: 'test'
    constructor() {}
}
let test: Cd = new Cd()
console.log({ test }, test.property)

// type cons<T extends {new (...args:any[]): {}}>

/**
 * 属性装饰器
 * @param target 需要装饰的属性所属的类
 * @param propertyKey 属性的key
 */
function propertyDecorator (target: Object, propertyKey: string) {
    target[propertyKey] = 'hello'
}

class Pd {
    @propertyDecorator
    name: 'klk'
}
console.log((new Pd().name))

//
/**
 * 方法装饰器 
 * @param value 
 */
function funcDecorator (value: boolean) {
    /**
     * @param target 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
     * @param propertyKey 成员的名字
     * @param descriptor 成员的属性描述符 configurable enumerable get set value writable
     */
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value
    }
}

class Fd {
    @funcDecorator(false)
    greet() {
       return 'hello'
    }
}
console.log((new Fd()).greet());

/**
 * 参数装饰器
 * @param target 
 * @param propertyKey 
 * @param index 参数的索引
 */
function logParameter(target: Object, propertyKey: string, index: number) {
    // 为相应方法生成元数据键，以储存被装饰的参数的位置
    const metadataKey = `log_${propertyKey}_parameters`;
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    }
    else {
        target[metadataKey] = [index];
    }
}

class Employee {
    greet(@logParameter message: string): string {
        return `hello ${message}`;
    }
}
const emp = new Employee();
console.log(emp.greet('hello'))

